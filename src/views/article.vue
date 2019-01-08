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
        font-size: 20px;
        padding: 10px 24px 10px 24px;
        width: 100%;
        word-break: break-all;
        white-space: pre-wrap;
    }
    .detail .media-wrap.image-wrap img  {
        width: 100%;
    }
</style>
<template>
    <div class="index">
        <div style="font-size: 28px; padding: 10px 24px 10px 24px">{{title}}</div>
        <div style="font-size: 20px; padding: 10px 24px 10px 24px">{{createTime}}</div>
        <div class="detail" v-html="details"></div> 
    </div>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                title: null,
                id: null,
                details: null,
                createTime: null,
                htmlvalue: '<p><b>把编辑器的初始内容放在这textarea即可</b></p><p><b>asdasdasdasda</b></p><p><b>asdasdasd</b></p>' 
            }
        },
        methods: {
        },
        created(){
            console.log(this.$route.query.id)
            var that = this
            this.id = this.$route.query.id
            this.getRequest('/api/articles/' + that.id)
                .then(function (response) {
                    console.log(response);
                    that.id = response.data.data.id
                    that.title = response.data.data.title
                    var value = response.data.data.detail
                    var reg=new RegExp("<p></p>","g")
                    var result = value.replace(/img/g, "img style=\"width: 100%\"").replace(reg, "<br>");
                    console.log('result:' + result); 
                    that.details = result
                    that.createTime = response.data.data.inserted_at.slice(0,10)
                    var nonceStr = "Hahaha123";//随机串
                    var timestamp = new Date().getTime();
                    var shareUrl = "https://weixin.leaguervc.com/article?id=" + that.$route.query.id
                    var _url = ''
                    if (window.__wxjs_is_wkwebview === true) {
                    _url = that.$store.state.entryURL
                    } else {
                    _url = shareUrl
                    }
                    console.log(window.location.href, _url)
                    that.getRequest('/api/signature?noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + encodeURIComponent(_url))
                        .then(function (response) {
                        console.log(response);
                    wx.config({
                        debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId : 'wx3f179d9e380457a5', // 必填，公众号的唯一标识
                        timestamp : timestamp, // 必填，生成签名的时间戳
                        nonceStr : nonceStr, // 必填，生成签名的随机串
                        signature : response.data.signature,// 必填，签名，见附录1
                        jsApiList : [ 'onMenuShareAppMessage',  'onMenuShareTimeline']
                    })
                    wx.ready(function(){
                        console.log("配置成功");
                        wx.onMenuShareAppMessage({
                            title: that.title,
                            desc: that.detail,
                            link: shareUrl,
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
                            title: that.title,
                            link: shareUrl,
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
                        wx.error(function(res){
                              console.log(res)
                        });
                                    })
                .catch(function (error) {
                    console.log(error);
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
    }
</script>