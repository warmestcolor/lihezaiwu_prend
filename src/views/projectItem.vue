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
        white-space: pre-wrap;
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
        <div v-if="isOuttime" style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <!-- <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" /> -->
                <!-- <Cell v-if="is_real_people" title="项目简介" extra="浏览简介" :to="'/article?id='+article_id" />
                <Cell v-else title="项目简介" extra="请先激活" :to="'/regist'" />
                <Cell v-if="is_real_people" title="项目资源" extra="浏览资料" :to="'/resource?id='+id" />                
                <Cell v-else title="项目资源" extra="请先激活" :to="'/regist'" /> -->
                <Cell v-if="type=='normal'" title="项目直播" extra="直播回看" @click.native="goLive(live_id)" />
                <Cell title="我要投资" extra="已结束" />
                <Cell title="我要推荐" extra="已结束" />
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
       <div v-if="!isOuttime" style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <!-- <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" /> -->
                <!-- <Cell v-if="is_real_people" title="项目简介" extra="浏览简介" :to="'/article?id='+article_id" />
                <Cell v-else title="项目简介" extra="请先激活" :to="'/regist'" />
                <Cell v-if="is_real_people" title="项目资源" extra="浏览资料" :to="'/resource?id='+id" />                
                <Cell v-else title="项目资源" extra="请先激活" :to="'/regist'" /> -->
                <Cell v-if="type=='normal'&&!liveOuttime" title="项目直播" extra="进入直播" @click.native="goLive(live_id)" />
                <Cell v-if="type=='normal'&&liveOuttime" title="项目直播" extra="直播回看" @click.native="goLive(live_id)" />
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
                isOuttime: false,
                end_time: null,
                live_end_time: null,
                liveOuttime: false,
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
                    title: '确认是否投资？',
                    content: '<p>请确认是否投资，确认后我们将与您取得联系。</p>',
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
                            that.$Message.error('请勿重复提交投资意向。'
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
            },
            getNow() {
                // 获取当前日期
                var date = new Date();
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
                if(response.data.data.live != null){
                that.liveId = response.data.data.live.id
                that.live_id = response.data.data.live.live_id
                }
                if(response.data.data.article != null){
                that.article_id = response.data.data.article.id
                }
                var end_time = response.data.data.end_time
                var live_end_time = response.data.data.live.end_time
                live_end_time = live_end_time.slice(0,10)
                live_end_time = live_end_time.replace(/-/g, "")
                live_end_time = parseInt(live_end_time)
                var data = that.getNow()
                console.log(data)
                // var dateInt = parseInt(data)
                // var endInt = parseInt(end_time)
                if(data > live_end_time){
                    that.liveOuttime = true
                }
                if(data > end_time){
                    that.isOuttime = true
                }
                if( that.article_id != null ){
                that.getRequest('/api/articles/' + that.article_id)
                .then(function (response) {
                    console.log(response);
                    var value = response.data.data.detail
                    var reg=new RegExp("<p></p>","g")
                    var result = value.replace(/img/g, "img style=\"width: 100%\"").replace(reg, "<br>");
                    console.log('result:' + result); 
                    that.details = result
                })
                .catch(function (error) {
                    console.log(error);
                });
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
            var shareUrl = "https://weixin.leaguervc.com/project?id=" + this.$route.query.id
            this.getRequest('/api/signature?noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + shareUrl)
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
            }  
    }
</script>