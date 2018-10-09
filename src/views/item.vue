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
    <div class="index">
        <Row type="flex" style="height: 250px; background-color: #5E32BD">
            <!-- <div style="width: 100%; align="top" justify="center" text-align: center">
                <Avatar style="width: 80px; height: 80px;border-radius: 40px; margin-top: 50px" vertical-align="middle" justify="center" align="middle" icon="ios-person" size=large src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </div> -->
            <div style="width: 100%; font-size: 24px; color: white; margin-top: 20px; margin-left: 20px; height: 50px">{{name}}</div>
            <hr style="width: 90%; font-size: 18px; color: white; margin-left: 5%" align="top"></hr>
            <div style="width: 90%; font-size: 18px; color: white; margin-top: 20px; margin-left: 5%">{{describe}}</div>
        </Row>
        <Row style="margin-top: 20px" span="24" class="title">
            <Col span="22">选项</Col>
            <!-- <a href="/list" span="2">
                <Col span="2">更多</Col>
            </a> -->
        </Row>
        <Card @click.native="goLive(liveId)" style="padding: 4px 12px">
            项目直播
        </Card>
        <Card @click.native="getFile" style="padding: 4px 12px">
            资料下载
        </Card>
        <Card @click.native="checkIn" style="padding: 4px 12px">
            我要投资
        </Card>
    </div>
</template>
<script>
    import util from '../libs/util'
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
            }
        },
        methods: {
            checkIn() {
                var that = this
                console.log(that.id)
                console.log(that.uid)
                if(that.userStatus != "ACTIVED"){
                    this.$Message.warning('您还未激活，请激活您的账户');
                    this.$router.push({path: '/regist'});
                    return false
                }
                if(that.type=="HIGH"&&that.touzi==false){
                    this.$Message.warning('您还不是合格投资人，请完成合格投资人认证');
                    this.$router.push({path: '/test'});
                    return false
                }
                util.ajax.put('/api/itemCheck/'+ that.id + '/' + that.uid)
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
                util.ajax.get('/api/resource/'+that.resourceId)
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
        },
    created(){
        console.log(this.$route.query.id)
        var that = this
        this.id = this.$route.query.id
            util.ajax.get('/api/item/'+this.$route.query.id)
                .then(function (response) {
                    console.log(response);
                    that.name = response.data.data.itemName
                    that.describe = response.data.data.itemDescribe
                    that.type = response.data.data.itemType
                    that.resourceId = response.data.data.resourceId
                    that.liveId = response.data.data.itemLiveId
                })
                .catch(function (error) {
                    console.log(error);
                });
             util.ajax.get('/api/wechat/user/'+ this.$store.state.uid)
                .then(function (response) {
                    console.log(response);
                    that.uid = response.data.data.uid
                    that.userStatus = response.data.data.memberStatus;
                    that.openId = response.data.data.userThirdInfos[0].openId
                    console.log('openid'+that.openId)
                    if(response.data.data.touzi != undefined){
                        that.touzi = response.data.data.touzi
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
            
    }
</script>