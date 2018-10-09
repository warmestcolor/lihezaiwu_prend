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
        <Row type="flex" justify="center" align="top" style="height: 250px">
            <div style="width: 100%; text-align: center">
                <Avatar :src="url" style="width: 80px; height: 80px;border-radius: 40px; margin-top: 50px" vertical-align="middle" justify="center" align="middle" icon="ios-person" size=large />
            </div>
            <div style="font-size: 18px; text-align: center">{{name}}</div>
        </Row>
        <Row span="24" class="title">
            <Col span="22">用户</Col>
            <!-- <a href="/list" span="2">
                <Col span="2">更多</Col>
            </a> -->
        </Row>
        <Card @click.native="goRegist" style="padding: 4px 12px">
            激活
        </Card>
        <Card @click.native="goRegist" style="padding: 4px 12px">
            更新用户信息
        </Card>
        <Card @click.native="goTest" style="padding: 4px 12px">
            投资人认证
        </Card>
    </div>
</template>
<script>
    import {getCookie, setCookie, delCookie} from '../libs/cookie';
    import util from '../libs/util'
    export default {
    data () {
            return {
                name: null,
                url: null,
                id: null,
                status: null,                
            }
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy iView.'
                });
            },
            goRegist() {
                this.$router.push({path: '/regist'});
            },
            goTest() {
                this.$router.push({path: '/test'});
            }
        },
    created(){
            console.log("vuex数据" + getCookie("uid"))
            this.id = getCookie("uid")
            var that = this
            util.ajax.get('/api/wechat/user/'+that.id)
                .then(function (response) {
                    console.log(response);
                    that.url = response.data.data.headIconUrl;
                    that.name = response.data.data.nickname;
                    that.status = response.data.data.memberStatus;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
</script>