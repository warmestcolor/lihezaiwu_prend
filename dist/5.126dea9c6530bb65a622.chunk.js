webpackJsonp([5],{520:function(t,e,i){"use strict";function n(t){s||i(702)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(666),o=i(703),s=!1,c=i(181),l=n,r=c(a.a,o.a,!1,l,"data-v-0dc73edc",null);r.options.__file="src/views/activityItem.vue",e.default=r.exports},528:function(t,e,i){t.exports=i.p+"fc89053470c9c92258aff47417d496eb.jpg"},666:function(t,e,i){"use strict";i(43);e.a={data:function(){return{name:null,id:null,type:null,describe:null,uid:null,userStatus:null,touzi:!1,resourceId:null,resourcePrice:null,openId:null,start_time:null,end_time:null,image_url:null,is_real_people:!1,is_right_people:!1}},methods:{checkIn:function(){var t=this;if(console.log(t.id),console.log(t.uid),!t.is_real_people)return this.$Message.warning("您还未激活，请激活您的账户"),this.$router.push({path:"/regist"}),!1;this.$Modal.confirm({title:"确认是否报名？",content:"<p>请确认是否报名，报名后我们将与您取得联系。</p>",loading:!0,onOk:function(){t.postRequest("/api/activitie_checkin/"+t.id,null).then(function(e){console.log(e),t.$Modal.remove(),t.$Message.success("报名成功,随后我们将会与您取得联系，感谢您的关注。")})}})},recommend:function(){this.$Modal.success({title:"生成我的专属推荐链接",content:"这是我在力合载物的专属推荐链接，快来看看吧：\n https://weixin.leaguervc.com/activity?id="+this.id+"&recommend="+this.uid+"\n（长按复制，建议简单编辑活动介绍后转发推荐。）"})}},created:function(){console.log(this.$route.query.id);var t=this;this.id=this.$route.query.id,this.$route.query.recommend&&(t.recommendid=this.$route.query.recommend,t.postRequest("/api/activities/"+t.id+"/recommend/"+t.recommendid,null).then(function(e){console.log(e),t.$Modal.info({title:"活动推荐",content:"这是用户ID："+t.recommendid+"向您推荐的活动，快来看看吧！"})}).catch(function(e){console.log(e),t.$Modal.info({title:"项目推荐",content:"这是用户ID："+t.recommendid+"向您推荐的活动，快来看看吧！"})})),this.getRequest("/api/activities/"+this.$route.query.id).then(function(e){console.log(e),t.name=e.data.data.name,t.describe=e.data.data.describle,t.start_time=e.data.data.start_time.slice(0,10),t.end_time=e.data.data.end_time.slice(0,10),t.image_url=e.data.data.image_url}).catch(function(t){console.log(t)}),this.getRequest("/api/me").then(function(e){console.log(e),t.is_real_people=e.data.data.is_real_people,t.is_right_people=e.data.data.is_right_people}).catch(function(t){console.log(t)})}}},702:function(t,e){},703:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index",staticStyle:{background:"#eee"}},[n("div",{staticStyle:{background:"#eee",padding:"10px 10px 10px 10px"}},[n("Card",{attrs:{bordered:!1}},[n("p",{staticStyle:{"font-size":"20px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.name))]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:t.image_url}})]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.describe)}}),t._v(" "),n("p",[t._v("开始时间 "+t._s(t.start_time))]),t._v(" "),n("p",[t._v("结束时间 "+t._s(t.end_time))])])],1),t._v(" "),n("div",{staticStyle:{padding:"10px",background:"#eee"}},[n("Card",{attrs:{title:"选项",icon:"ios-options",padding:0}},[n("CellGroup",[n("Cell",{attrs:{title:"我要报名"},nativeOn:{click:function(e){t.checkIn()}}}),t._v(" "),n("Cell",{attrs:{title:"我要推荐"},nativeOn:{click:function(e){t.recommend()}}})],1)],1)],1),t._v(" "),n("div",{staticStyle:{padding:"10px",background:"#eee"}},[n("Card",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"50%"},attrs:{src:i(528)}}),t._v(" "),n("h3",[t._v("欢迎关注力合载物")])])])],1)])},a=[];n._withStripped=!0;var o={render:n,staticRenderFns:a};e.a=o}});