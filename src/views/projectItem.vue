<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        /*  */
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .line-border {
        border-top: 1px #999 solid;
        border-bottom: 1px #999 solid;
        height: 96px;
        /* padding: 24px; */
    }

    .line-btn {
        height: 100%;
        width: 100%;
        background-color: #5E32BD;
        border: none;
    }

    .line-item-top {
        font-size: 18px;
        text-align: left;
        padding: 18px;
        color: white;
    }
    .line-item-normal {
        font-size: 18px;
        text-align: left;
        padding: 18px;
        border-bottom: #999 solid 1px;
    }
    .title {
        height: 42px;
        padding: 10px 12px 10px 24px;
        font-size: 14px;
        color: white;
        background-color: #5E32BD;
    }
</style>
<template>
    <div class="index" style="background:#eee">
         <div style="background:#eee;padding: 10px 10px 10px 10px">
        <Card :bordered="false">
            <p slot="title" style="font-size: 20px">{{name}}</p>          
            <div style="text-align:center">
            <img :src="pic" style="width:100%">
            </div>
            <p>{{describe}}</p>
        </Card>
        </div>
       <div style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <!-- <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" /> -->
                <Cell title="直播" extra="进入直播" :to="'/live?id='+liveId" />
                <Cell title="资料下载" extra="浏览资料" :to="'/resource?id='+id" />
                <Cell title="我要投资" @click.native="checkIn()"/>
                <Cell title="我要推荐" to="/components/button" />
                <!-- <Cell title="Open link in new window" to="/components/button" target="_blank" />
                <Cell title="Disabled" disabled />
                <Cell title="Selected" selected />
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <Cell title="With Switch">
                    <Switch v-model="switchValue" slot="extra" />
                </Cell> -->
            </CellGroup>
        </Card>
    </div>
    </div>
</template>
<script>
    import util from '../libs/util'
    import wx from 'weixin-js-sdk';
    export default {
        data () {
            return {
                name: null,
                id: null,
                type: null,
                describe: null,
                uid: null,      
                userStatus: null,
                touzi: false,   
                resourceId: null,     
                resourcePrice: null,
                openId: null,
                liveId: null,
                pic: null,
                is_real_people: false,
                is_right_people: false,
            }
        },
        methods: {
            checkIn() {
                var that = this
                console.log(that.id)
                console.log(that.uid)
                if(!that.is_real_people){
                    this.$Message.warning('您还未激活，请激活您的账户');
                    this.$router.push({path: '/regist'});
                    return false
                }
                if(that.type=="high"&&!that.is_right_people){
                    this.$Message.warning('您还不是合格投资人，请完成合格投资人认证');
                    this.$router.push({path: '/test'});
                    return false
                }
                this.postRequest('/api/project_checkin/'+ that.id, {})
                            .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                this.$Modal.success({
                    title: '报名成功',
                    content: '随后我们将会与您取得联系， 感谢您的关注'
                });
            },
            goLive(id){
                if(id != null&&id != undefined){
                window.location.href = "https://ghlive.cn/"+id
                // this.$router.push({path: '/item'+'?id='+itemId});    
                }
                this.$Message.warning('该项目暂无直播');
                    return false
            },
            getFile() {
                var that = this
                if (that.resourceId == null || that.resourceId == undefined){
                    this.$Message.warning('该项目暂无可下载资源');
                    return false
                }
                this.getRequest('/api/resource/'+that.resourceId)
                    .then(function (response) {
                        console.log(response);
                        that.$Modal.success({
                            title: '获取成功',
                            content: '请将文件链接拷贝到微信外的浏览器进行下载：\n'+response.data.data.resourcePath
                });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            goLink() {
                this.$router.push({name: 'item'});
            }
            ,
            goResource(id) {
                this.$router.push({path: '/resource'+'?id='+id});
            }
        },
    created(){
        console.log(this.$route.query.id)
        var that = this
        this.id = this.$route.query.id
            this.getRequest('/api/projects/'+this.$route.query.id)
                .then(function (response) {
                    console.log(response);
                    that.name = response.data.data.name
                    that.describe = response.data.data.describe
                    that.type = response.data.data.type
                    that.pic = response.data.data.image_url
                    that.resourceId = response.data.data.resourceId
                    that.liveId = response.data.data.live.id
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.getRequest('/api/me')
                .then(function (response) {
                    console.log(response);
                    that.is_real_people = response.data.data.is_real_people
                    that.is_right_people = response.data.data.is_right_people
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
            
    }
</script>