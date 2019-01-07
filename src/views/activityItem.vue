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
            <img :src="image_url" style="width:100%">
            </div>
            <!-- <p>{{describe}}</p> -->
            <div v-html="describe"></div>
            <p>开始时间 {{start_time}}</p>
            <p>结束时间 {{end_time}}</p>
        </Card>
        </div>
        <div v-if="isOuttime" style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <Cell title="我要报名" extra="已结束"/>
                <Cell title="我要推荐" extra="已结束"/>
            </CellGroup>
        </Card>
        </div>
        <div v-if="!isOuttime" style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <Cell title="我要报名" @click.native="checkIn()"/>
                <Cell title="我要推荐" @click.native="recommend()" />
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
    var wx = require('weixin-js-sdk')
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
                start_time: null,
                end_time: null,
                image_url: null,
                is_real_people: false,
                is_right_people: false,
                isOuttime: false
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
                this.$Modal.confirm({
                    title: '确认是否报名？',
                    content: '<p>请确认是否报名，报名后我们将与您取得联系。</p>',
                    loading: true,
                    onOk: () => {
                        that.postRequest('/api/activitie_checkin/'+ that.id, null)
                            .then(function (response) {
                            console.log(response);
                            that.$Modal.remove();
                            that.$Message.success('报名成功,随后我们将会与您取得联系，感谢您的关注。'
                            );

                        })
                        .catch(function (error) {
                            console.log(error);
                            that.$Modal.remove();
                            that.$Message.error('请勿重复报名。'
                        );
                        })
                    }
                })
            },
            recommend() {
                this.$Modal.success({
                            title: '生成我的专属推荐链接',
                            content: '这是我在力合载物的专属推荐链接，快来看看吧：\n https://weixin.leaguervc.com/activity?id='+this.id+'&recommend='+this.uid+'\n（长按复制，建议简单编辑活动介绍后转发推荐。）'
                });
            },
            getNow() {
                // 获取当前日期
                var date = new Date();
                // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
                var nowDate = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
                return nowDate
            }
        },
    created(){
        console.log(this.$route.query.id)
        var that = this
        this.id = this.$route.query.id
            if(this.$route.query.recommend){
            that.recommendid = this.$route.query.recommend
            that.postRequest('/api/activities/'+that.id+'/recommend/'+that.recommendid, null)                
                .then(function (response) {
                    console.log(response);
                    that.$Modal.info({
                        title: '活动推荐',
                        content: '这是用户ID：'+that.recommendid+'向您推荐的活动，快来看看吧！'
                });  
                })
                .catch(function (error) {
                    console.log(error);
                    that.$Modal.info({
                        title: '项目推荐',
                        content: '这是用户ID：'+that.recommendid+'向您推荐的活动，快来看看吧！'
                });
                });
        }
            this.getRequest('/api/activities/'+this.$route.query.id)
                .then(function (response) {
                    console.log(response);
                    that.name = response.data.data.name
                    that.describe = response.data.data.describle
                    that.start_time = response.data.data.start_time.slice(0,16)
                    that.end_time = response.data.data.end_time.slice(0,16)
                    that.image_url = response.data.data.image_url
                    var end_time = response.data.data.end_time.slice(0,10)
                    var endStr = end_time.replace(/-/g, "")
                    var endInt = parseInt(endStr)
                    var data = that.getNow()
                    console.log(data)
                    console.log(endInt)
                    // var dateInt = parseInt(data)
                    // var endInt = parseInt(end_time)
                    if(data > endInt){
                        that.isOuttime = true
                    }
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
            var nonceStr = "Hahaha123";//随机串
            var timestamp = new Date().getTime();
            var shareUrl = "https://weixin.leaguervc.com/activity?id=" + this.$route.query.id
            this.getRequest('api/signature?noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + shareUrl)
                .then(function (response) {
                    console.log(response);
                    wx.config({
                        debug : true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId : 'wx3f179d9e380457a5', // 必填，公众号的唯一标识
                        timestamp : timestamp, // 必填，生成签名的时间戳
                        nonceStr : nonceStr, // 必填，生成签名的随机串
                        signature : response.data.data.signature,// 必填，签名，见附录1
                        jsApiList : [ 'onMenuShareAppMessage',  'onMenuShareTimeline']
                    })
                    wx.ready(function(){
                        wx.onMenuShareAppMessage({
                            title: that.name,
                            desc: that.describe,
                            link: shareUrl,
                            imgUrl: that.image_url,
                            trigger: function (res) {},
                            success: function (res) {
                                alert('分享成功');
                            },
                            cancel: function (res) {
                                alert('你没有分享');
                            },
                            fail: function (res) {
                                alert(JSON.stringify(res));
                            }
                        });
                         wx.onMenuShareTimeline({
                            title: that.name,
                            link: shareUrl,
                            imgUrl: that.image_url,
                            success: function () { 
                        // 用户确认分享后执行的回调函数
                                alert('分享到朋友圈成功');
                            },
                            cancel: function () { 
                        // 用户取消分享后执行的回调函数
                                alert('你没有分享到朋友圈');
                            }
                        });
                        })
                    })
                .catch(function (error) {
                    console.log(error);
                    });
            },
    }
</script>