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
    .detail {
        width: 100%;
        word-break: break-all;
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
            <!-- <p>{{describe}}</p> -->
            <!-- <div v-html="describe"></div> -->
            <div class="detail" v-html="details"></div> 
        </Card>
        </div>
       <div style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <!-- <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" /> -->
                <!-- <Cell v-if="is_real_people" title="项目简介" extra="浏览简介" :to="'/article?id='+article_id" />
                <Cell v-else title="项目简介" extra="请先激活" :to="'/regist'" />
                <Cell v-if="is_real_people" title="项目资源" extra="浏览资料" :to="'/resource?id='+id" />                
                <Cell v-else title="项目资源" extra="请先激活" :to="'/regist'" /> -->
                <Cell v-if="type=='normal'" title="项目直播" extra="进入直播" @click.native="goLive(live_id)" />
                <Cell v-if="is_real_people&&is_right_people&&type =='high'" title="我要投资" @click.native="checkIn()"/>
                <Cell v-if="is_real_people&&type =='normal'" title="我要投资" @click.native="checkIn()"/>
                <Cell v-if="!is_real_people" title="我要投资" extra="请先激活" :to="'/regist'" />
                <Cell v-if="is_real_people&&!is_right_people&&type =='high'" title="我要投资" extra="合格投资人人认证" :to="'/test'" />
                <Cell title="我要推荐" @click.native="recommend()" />
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
    <div style="padding: 10px;background:#eee">
        <Card>
        <div style="text-align:center">
            <img style='width: 50%' src="./resource/code.jpg">
            <h3>欢迎关注力合载物</h3>
        </div>
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
                live_id: null,
                article_id: null,
                pic: null,
                is_real_people: false,
                is_right_people: false,
                recommendid: null,
                details: null,
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
                this.$Modal.confirm({
                    title: '确认是否报名？',
                    content: '<p>请确认是否报名，报名后我们将与您取得联系。</p>',
                    loading: true,
                    onOk: () => {
                        that.postRequest('/api/project_checkin/'+ that.id, null)
                            .then(function (response) {
                            console.log(response);
                            that.$Modal.remove();
                            that.$Message.success('随后我们将会与您取得联系，感谢您的关注。'
                            );

                        })
                        .catch(function (error) {
                            console.log(error);
                            that.$Modal.remove();
                            that.$Message.error('随后我们将会与您取得联系，感谢您的关注。'
                        );
                        })
                    }
                })
            },
            goLive(id){
                if(id != null&&id != undefined){
                window.location.href = "https://ghlive.cn/"+id
                // this.$router.push({path: '/item'+'?id='+itemId});    
                }else{                
                    that.$Message.warning('该项目暂无直播');
                    return false}
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
            },
            recommend() {
                this.$Modal.success({
                            title: '生成我的专属推荐链接',
                            content: '这是我在力合载物的专属推荐链接，快来看看吧：\n https://weixin.leaguervc.com/project?id='+this.id+'&recommend='+this.uid+'\n（长按复制，建议简单编辑项目介绍后转发推荐，项目推荐成功，将获取项目奖励。）'
                });
            }
        },
    created(){
        console.log(this.$route.query.id)
        var that = this
        this.id = this.$route.query.id
        if(this.$route.query.recommend){
            that.recommendid = this.$route.query.recommend
            that.postRequest('/api/projects/'+that.id+'/recommend/'+that.recommendid, null)                
                .then(function (response) {
                    console.log(response);
                    that.$Modal.info({
                        title: '项目推荐',
                        content: '这是用户ID：'+that.recommendid+'向您推荐的项目，快来看看吧！'
                });  
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        this.getRequest('/api/projects/'+this.$route.query.id)
            .then(function (response) {
                console.log(response); 
                that.name = response.data.data.name
                that.describe = response.data.data.describe
                that.type = response.data.data.type
                that.pic = response.data.data.image_url
                that.resourceId = response.data.data.resourceId
                that.liveId = response.data.data.live.id
                that.live_id = response.data.data.live.live_id
                that.article_id = response.data.data.article.id
                that.getRequest('/api/articles/' + that.article_id)
                .then(function (response) {
                    console.log(response);
                    that.details = response.data.data.detail
                })
                .catch(function (error) {
                    console.log(error);
                });

            })
            .catch(function (error) {
                console.log(error);
            });
        this.getRequest('/api/me')
            .then(function (response) {
                console.log(response);
                that.uid = response.data.data.id
                that.is_real_people = response.data.data.is_real_people
                that.is_right_people = response.data.data.is_right_people
            })
            .catch(function (error) {
                console.log(error);
            });
        }     
    }
</script>