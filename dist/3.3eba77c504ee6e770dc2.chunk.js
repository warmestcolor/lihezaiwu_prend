webpackJsonp([3],{519:function(t,e,i){"use strict";function a(t){s||i(699)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(665),d=i(700),s=!1,l=i(181),o=a,r=l(n.a,d.a,!1,o,"data-v-446b3e8e",null);r.options.__file="src/views/liveItem.vue",e.default=r.exports},529:function(t,e,i){t.exports=i.p+"fc89053470c9c92258aff47417d496eb.jpg"},665:function(t,e,i){"use strict";i(43);e.a={data:function(){return{name:null,id:null,type:null,describe:null,uid:null,userStatus:null,touzi:!1,resourceId:null,resourcePrice:null,openId:null,liveId:null,image_url:null}},methods:{goLive:function(t){return null!=t&&void 0!=t&&(window.location.href="https://ghlive.cn/"+t),this.$Message.warning("该项目暂无直播"),!1}},created:function(){console.log(this.$route.query.id);var t=this;this.id=this.$route.query.id,this.getRequest("/api/lives/"+this.$route.query.id).then(function(e){console.log(e),t.name=e.data.data.name,t.describe=e.data.data.describle,t.liveId=e.data.data.live_id,t.image_url=e.data.data.image_url}).catch(function(t){console.log(t)}),this.getRequest("/api/wechat/user/"+this.$store.state.uid).then(function(e){console.log(e),t.uid=e.data.data.uid,t.userStatus=e.data.data.memberStatus,t.openId=e.data.data.userThirdInfos[0].openId,console.log("openid"+t.openId),void 0!=e.data.data.touzi&&(t.touzi=e.data.data.touzi)}).catch(function(t){console.log(t)})}}},699:function(t,e){},700:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index",staticStyle:{background:"#eee"}},[a("div",{staticStyle:{background:"#eee",padding:"10px 10px 10px 10px"}},[a("Card",{attrs:{bordered:!1}},[a("p",{staticStyle:{"font-size":"20px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.image_url}})]),t._v(" "),a("p",[t._v(t._s(t.describe))])])],1),t._v(" "),a("div",{staticStyle:{padding:"10px",background:"#eee"}},[a("Card",{attrs:{title:"选项",icon:"ios-options",padding:0}},[a("CellGroup",[a("Cell",{attrs:{title:"进入直播",extra:"光合直播间"},nativeOn:{click:function(e){t.goLive(t.liveId)}}})],1)],1)],1),t._v(" "),a("div",{staticStyle:{padding:"10px",background:"#eee"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"50%"},attrs:{src:i(529)}}),t._v(" "),a("h3",[t._v("欢迎关注力合载物")])])])],1)])},n=[];a._withStripped=!0;var d={render:a,staticRenderFns:n};e.a=d}});