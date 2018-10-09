import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        uid: null,
        isLogin: false
    },
    mutations: {
        setuid(state, uid){
        state.uid = uid
        },
        ADD_LOGIN_USER (state, data) {
            sessionStorage.setItem("uid", data);
            sessionStorage.setItem("isLogin", true);
            state.uid=data,
            state.isLogin=true
        },
        SIGN_OUT (state) {
            sessionStorage.removeItem(uid);
            sessionStorage.removeItem(isLogin);
            state.uid=null;
            state.isLogin=false
        }
    }
})
export default store