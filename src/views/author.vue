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
                    <img src="./resource/4.png">
                </h1>
            </Col>
        </Row>
    </div>
</template>
<script>
//     import util from '../libs/util'
//     var that = this
//     created () {
//     // 检测会员有没有登录
//     if(that.GLOBAL.user == null ){
//         // 跳转到微信授权页面
//         util.ajax.get
//         window.location.href = this.webUrl + '/Wap/User/getOpenid'
//         }else{
//       // 如果有token 但是vuex中没有用户登录信息则做登录操作
//       this.login()
//         }
//     },
// methods: {
//     login () {
//       let url = this.webUrl + '/Wap/User/info'
//       // 通过cookie中保存的token 获取用户信息
//       this.$http.get(url).then(response => {
//         response = response.body
//         if(response){
//           // 保存用户登录状态(Vuex)
//           this.$store.commit('user', response)
//           setTimeout(() => {
//             this.goBeforeLoginUrl() // 页面恢复(进入用户一开始请求的页面)
//           }, 2000)
//         }else{
//           this.$alert('服务器撸猫去惹 :(', 'wrong')
//           if(holdno.cookie.get('user')){
//             // 跳转到微信授权页面
//             window.location.href = this.webUrl + '/Wap/User/getOpenid'
//           }
//         }
//       })
//     }

//     goBeforeLoginUrl = () => {
//         let url = that.GLOBAL.enterPageUrl
//         if(!url || url.indexOf('/author') != -1){
//             router.push('/index')
//             }else{
//                 if(url == '/'){
//                 url = '/index'
//                 }
//             router.push(url)
//             that.GLOBAL.enterPageUrl = ''
//         }
//     }
// }
</script>