import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import store from './data/store';
import Util from './libs/util';
import App from './app.vue';
import Qs from 'qs';   //引入方式
import {getCookie, setCookie, delCookie} from './libs/cookie';
Vue.prototype.$qs = Qs 
// import global from './global'//引用文件
// Window.GLOBAL = global//挂载到Vue实例上面

import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex)

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    store.commit('setuid', getCookie("uid"))
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    console.log("跳转到" + to.fullPath);
    console.log("uid" + to.query.uid);
    console.log(store.state.uid);
    if(getCookie("isLogin")) {
      next();
      return false;
    }
    if(getCookie("prepareLogin")){
      delCookie("prepareLogin");
      // 底下应该是登录操作
      if(to.query.uid){
        // from wechat
        setCookie("isLogin", true);
        setCookie("uid", to.query.uid);
        var url = getCookie("url")
        router.push({path: url});
      } else {
        var url = getCookie("url")
        router.push({path: url});
      }
      return false
    } else {
      setCookie("prepareLogin", "true");
      setCookie("url", to.fullPath);
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3f179d9e380457a5&redirect_uri=https%3A%2F%2Fweixin.leaguervc.com%2Fapi%2Fwechat%2Fuser%2FuserInfo&response_type=code&scope=snsapi_userinfo#wechat_redirect"
      return false
    }

    // if(sessionStorage.getItem("isLogin")){
    //   //
    //   next();
    //   return false;
    // } else {
    //   // 第一次进入项目
    //   console.log("未登录")
    //   console.log("跳转到" + to.path)
    //   sessionStorage.setItem("url", to.fullPath);
    //   sessionStorage.setItem("isLogin", true);
    //   // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3f179d9e380457a5&redirect_uri=http%3A%2F%2Fweixin.leaguervc.com%2Fapi%2Fwechat%2Fuser%2FuserInfo&response_type=code&scope=snsapi_userinfo#wechat_redirect"
    //   window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3f179d9e380457a5&redirect_uri=https%3A%2F%2Fweixin.leaguervc.com%2Fapi%2Fwechat%2Fuser%2FuserInfo&response_type=code&scope=snsapi_userinfo#wechat_redirect"
    //   return false
    // }
    // next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});



new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    store: store,
});