webpackJsonp([18],{520:function(t,e,i){"use strict";function a(t){l||i(700)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(665),n=i(701),l=!1,o=i(181),r=a,c=o(s.a,n.a,!1,r,"data-v-0dc73edc",null);c.options.__file="src/views/activityItem.vue",e.default=c.exports},665:function(t,e,i){"use strict";i(43);e.a={data:function(){return{name:null,id:null,type:null,describe:null,uid:null,userStatus:null,touzi:!1,resourceId:null,resourcePrice:null,openId:null,start_time:null,end_time:null,image_url:null,is_real_people:is_real_people,is_right_people:is_right_people}},methods:{checkIn:function(){var t=this;if(console.log(t.id),console.log(t.uid),!is_real_people)return this.$Message.warning("您还未激活，请激活您的账户"),this.$router.push({path:"/regist"}),!1;this.postRequest("/api/activitie_checkin/"+t.id,{}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}),this.$Modal.success({title:"报名成功",content:"随后我们将会与您取得联系，感谢您的关注"})}},created:function(){console.log(this.$route.query.id);var t=this;this.id=this.$route.query.id,this.getRequest("/api/activities/"+this.$route.query.id).then(function(e){console.log(e),t.name=e.data.data.name,t.describe=e.data.data.describle,t.start_time=e.data.data.start_time.slice(0,10),t.end_time=e.data.data.end_time.slice(0,10),t.image_url=e.data.data.image_url}).catch(function(t){console.log(t)}),this.getRequest("/api/me").then(function(e){console.log(e),t.is_real_people=e.data.data.is_real_people,t.is_right_people=e.data.data.is_right_people}).catch(function(t){console.log(t)})}}},700:function(t,e){},701:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index",staticStyle:{background:"#eee"}},[i("div",{staticStyle:{background:"#eee",padding:"10px 10px 10px 10px"}},[i("Card",{attrs:{bordered:!1}},[i("p",{staticStyle:{"font-size":"20px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.name))]),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:t.image_url}})]),t._v(" "),i("p",[t._v(t._s(t.describe))]),t._v(" "),i("p",[t._v("开始时间 "+t._s(t.start_time))]),t._v(" "),i("p",[t._v("结束时间 "+t._s(t.end_time))])])],1),t._v(" "),i("div",{staticStyle:{padding:"10px",background:"#eee"}},[i("Card",{attrs:{title:"选项",icon:"ios-options",padding:0}},[i("CellGroup",[i("Cell",{attrs:{title:"我要报名",extra:"details",to:"/components/button"}})],1)],1)],1)])},s=[];a._withStripped=!0;var n={render:a,staticRenderFns:s};e.a=n}});