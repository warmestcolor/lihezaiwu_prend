<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        /* text-align: center; */
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
        <Row type="flex" justify="center" align="top">
            <Col span="24">
                <h1 style="text-align: center">
                    <img src="./resource/vc.jpg" style="width: 75%">
                </h1>
            </Col>
        </Row>
        <Row style="background-color: #5E32BD">
            <Col class="line-border" style="border-right: 1px #999 solid;"  span="8">
                <a href="/zhibo">
                    <Button class="line-btn">
                        <Icon size="48" color="white" type="ios-play" />
                    </Button>
                </a>
            </Col>
            <Col class="line-border" style="border-right: 1px #999 solid;"  span="8">
                <a href="/touzi">
                    <Button class="line-btn">
                        <Icon size="36" color="white" type="ios-pricetags" />
                    </Button>
                </a>
            </Col>
            <Col class="line-border"  span="8">
                <a href="/user">
                    <Button class="line-btn">
                        <Icon size="48" color="white" type="ios-person" />
                    </Button>
                </a>
            </Col>
        </Row>
        <Row span="24">
        <Tabs value="name1" span="24" style="width: 100%">
        <TabPane label="路演通知" name="name1" >
        <div style="padding: 10px 20px 10px 20px" v-for="(item, index) in liveList" :key="index">
        <Card @click.native="goLive(item.id)">
            <p slot="title">{{item.name}}</p>
            <p v-if="item.type=='high'" slot="extra">
            领投基金
            </p>
            <p v-if="item.type=='normal'" slot="extra">
            投资项目
            </p>
            <div style="text-align:center">
            <img :src= "item.image_url" style="width: 50%">
            </div>
            <p>{{item.describle}}</p>
        </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px">
        <Button to="/zhibo" type="info" long>更多</Button>
        </div>
        </TabPane>
        <TabPane label="项目信息" name="name2" >
        <div style="padding: 10px 20px 10px 20px"  v-for="(item, index) in projectList" :key="index">
        <Card @click.native="goProject(item.id)">
            <p slot="title">{{item.name}}</p>
            <p v-if="item.type=='high'" slot="extra">
            领投基金
            </p>
            <p v-if="item.type=='normal'" slot="extra">
            投资项目
            </p>
            <div style="text-align:center">
            <img :src= "item.image_url" style="width: 50%">
            </div>
            <p>{{item.describe}}</p>
        </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px">
        <Button to="/touzi" type="info" long>更多</Button>
        </div>
        </TabPane>
        
        <TabPane label="线下活动" name="name3" >
        <div style="padding: 10px 20px 10px 20px" v-for="(item, index) in activityList" :key="index">
        <Card @click.native="goActivity(item.id)">
            <p slot="title">{{item.name}}</p>
            <!-- <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            进行中
            </a> -->
            <div style="text-align:center">
            <img :src= "item.image_url" style="width: 50%">
            </div>
            <p>{{item.describle}}</p>
        </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px">
        <Button to="/activitylist" type="info" long>更多</Button>
        </div>
        </TabPane>
        <TabPane label="公司动态" name="name4" >
        <div v-for="(item, index) in articleList" :key="index" style="padding: 10px 20px 10px 20px">
        <Card @click.native="goArticle(item.id)">
            <p slot="title">{{item.title}}</p>
            <p href="#" slot="extra">
            <!-- <Icon type="ios-loop-strong"></Icon> -->
            {{item.inserted_at.slice(0,10)}}
            </p>
            <p>文章</p>
        </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px">
        <Button to="/news" type="info" long>更多</Button>
        </div>

            <!-- <Row span="24" class="title">
            <Col span="22">最新动态</Col>
            <a href="/news" span="2">
                <Col span="2">更多</Col>
            </a>
            <Card span="24" @click.native="goLink(item.articleId)" v-for="(item, index) in articleList" :key="index" style="height: 50px">
            <Col span="14">{{ item.articleTitle}}</Col>
            <Col span="10">{{item.createTime}}</Col>
            </Card>
            </Row> -->
        </TabPane>
        </Tabs>
        </Row>
    </div>
</template>
<script>
    import util from '../libs/util'
    import axios from 'axios';
    import moment from 'moment';
import Vue from 'vue';

    export default {
                data () {
            return {
                project: [1, 2, 3, 4],
                articleList: [],
                activityList: [],
                projectList: [],
                liveList: [],
            }
        },

        methods: {
            handleStart() {
                    this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy iView.'
                });
            },
            goProject(itemId) {
                this.$router.push({path: '/project'+'?id='+itemId});
            },
            goArticle(itemId) {
                this.$router.push({path: '/article'+'?id='+itemId});
            },
            goLive(itemId) {
                this.$router.push({path: '/live'+'?id='+itemId});
            },
            goActivity(itemId) {
                this.$router.push({path: '/activity'+'?id='+itemId});
            }
        },
        created(){
            console.log("vuex数据" + this.$store.state.uid)
            this.$store.commit('setuid', this.$store.state.uid)
            // console.log(this.GLOBAL)
            var that = this
            // util.ajax.get('/api/wechat/user/userInfo/test')
            //         .then(function (response) {
            //             console.log("登录"+response);
            //             console.log(response.data);
            //             util.ajax.get('/api/wechat/user/getuser')
            //     .then(function (response) {
            //         console.log(response);
            //         that.GLOBAL.user = response.data.data
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //         // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1326cea38393a6d3&redirect_uri=http%3A%2F%2Fwbr.nat300.top%2Fapi%2Fwechat%2Fuser%2FuserInfo&response_type=code&scope=snsapi_userinfo#wechat_redirect"
            //    });
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //     });
            
            this.getRequest('/api/articles?page=0&size=3')
                .then(function (response) {
                    console.log(response);
                    that.articleList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
            this.getRequest('/api/activities?page=0&size=3')
                .then(function (response) {
                    console.log(response);
                    that.activityList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
            this.getRequest('/api/projects?page=0&size=3')
                .then(function (response) {
                    console.log(response);
                    that.projectList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
            this.getRequest('/api/lives?page=0&size=3')
                .then(function (response) {
                    console.log(response);
                    that.liveList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
            // console.log(window.location.origin)
            // axios.get("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1326cea38393a6d3&redirect_uri=http%3A%2F%2Fwbr.nat300.top%2Fapi%2Fwechat%2Fuser%2FuserInfo&response_type=code&scope=snsapi_userinfo#wechat_redirect")
            //     .then(function (response) {
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        }  
    };
</script>