webpackJsonp([5],{520:function(e,t,i){"use strict";function n(e){c||i(702)}Object.defineProperty(t,"__esModule",{value:!0});var o=i(666),a=i(703),c=!1,s=i(181),l=n,r=s(o.a,a.a,!1,l,"data-v-0dc73edc",null);r.options.__file="src/views/activityItem.vue",t.default=r.exports},528:function(e,t,i){e.exports=i.p+"fc89053470c9c92258aff47417d496eb.jpg"},666:function(e,t,i){"use strict";i(43);t.a={data:function(){return{name:null,id:null,type:null,describe:null,uid:null,userStatus:null,touzi:!1,resourceId:null,resourcePrice:null,openId:null,start_time:null,end_time:null,image_url:null,is_real_people:!1,is_right_people:!1}},methods:{checkIn:function(){var e=this;if(console.log(e.id),console.log(e.uid),!e.is_real_people)return this.$Message.warning("您还未激活，请激活您的账户"),this.$router.push({path:"/regist"}),!1;this.$Modal.confirm({title:"确认是否报名？",content:"<p>请确认是否报名，报名后我们将与您取得联系。</p>",loading:!0,onOk:function(){e.postRequest("/api/activitie_checkin/"+e.id,null).then(function(t){console.log(t),e.$Modal.remove(),e.$Message.success("报名成功,随后我们将会与您取得联系，感谢您的关注。")}).catch(function(t){console.log(t),e.$Modal.remove(),e.$Message.error("请勿重复报名。")})}})},recommend:function(){this.$Modal.success({title:"生成我的专属推荐链接",content:"这是我在力合载物的专属推荐链接，快来看看吧：\n https://weixin.leaguervc.com/activity?id="+this.id+"&recommend="+this.uid+"\n（长按复制，建议简单编辑活动介绍后转发推荐。）"})}},created:function(){console.log(this.$route.query.id);var e=this;this.id=this.$route.query.id,this.$route.query.recommend&&(e.recommendid=this.$route.query.recommend,e.postRequest("/api/activities/"+e.id+"/recommend/"+e.recommendid,null).then(function(t){console.log(t),e.$Modal.info({title:"活动推荐",content:"这是用户ID："+e.recommendid+"向您推荐的活动，快来看看吧！"})}).catch(function(t){console.log(t),e.$Modal.info({title:"项目推荐",content:"这是用户ID："+e.recommendid+"向您推荐的活动，快来看看吧！"})})),this.getRequest("/api/activities/"+this.$route.query.id).then(function(t){console.log(t),e.name=t.data.data.name,e.describe=t.data.data.describle,e.start_time=t.data.data.start_time.slice(0,10),e.end_time=t.data.data.end_time.slice(0,10),e.image_url=t.data.data.image_url}).catch(function(e){console.log(e)}),this.getRequest("/api/me").then(function(t){console.log(t),e.is_real_people=t.data.data.is_real_people,e.is_right_people=t.data.data.is_right_people}).catch(function(e){console.log(e)})}}},702:function(e,t){},703:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index",staticStyle:{background:"#eee"}},[n("div",{staticStyle:{background:"#eee",padding:"10px 10px 10px 10px"}},[n("Card",{attrs:{bordered:!1}},[n("p",{staticStyle:{"font-size":"20px"},attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.name))]),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.image_url}})]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.describe)}}),e._v(" "),n("p",[e._v("开始时间 "+e._s(e.start_time))]),e._v(" "),n("p",[e._v("结束时间 "+e._s(e.end_time))])])],1),e._v(" "),n("div",{staticStyle:{padding:"10px",background:"#eee"}},[n("Card",{attrs:{title:"选项",icon:"ios-options",padding:0}},[n("CellGroup",[n("Cell",{attrs:{title:"我要报名"},nativeOn:{click:function(t){e.checkIn()}}}),e._v(" "),n("Cell",{attrs:{title:"我要推荐"},nativeOn:{click:function(t){e.recommend()}}})],1)],1)],1),e._v(" "),n("div",{staticStyle:{padding:"10px",background:"#eee"}},[n("Card",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"50%"},attrs:{src:i(528)}}),e._v(" "),n("h3",[e._v("欢迎关注力合载物")])])])],1)])},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a}});