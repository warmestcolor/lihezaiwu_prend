webpackJsonp([11],{517:function(t,e,a){"use strict";function i(t){n||a(553)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(530),d=a(554),n=!1,l=a(180),c=i,r=l(s.a,d.a,!1,c,"data-v-5b5b10cc",null);r.options.__file="src/views/article.vue",e.default=r.exports},530:function(t,e,a){"use strict";var i=a(181);e.a={data:function(){return{title:null,id:null,details:null,createTime:null,htmlvalue:"<p><b>把编辑器的初始内容放在这textarea即可</b></p><p><b>asdasdasdasda</b></p><p><b>asdasdasd</b></p>"}},methods:{},created:function(){console.log(this.$route.query.id);var t=this;this.id=this.$route.query.id,i.a.ajax.get("/api/article/"+t.id).then(function(e){console.log(e),t.id=e.data.data.articleId,t.title=e.data.data.articleTitle,t.details=e.data.data.articleDetails,t.createTime=e.data.data.createTime}).catch(function(t){console.log(t)})}}},553:function(t,e){},554:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",{staticStyle:{"font-size":"28px",padding:"10px 24px 10px 24px"}},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticStyle:{"font-size":"20px",padding:"10px 24px 10px 24px"}},[t._v(t._s(t.createTime))]),t._v(" "),a("div",{staticStyle:{"font-size":"20px",padding:"10px 24px 10px 24px"},domProps:{innerHTML:t._s(t.details)}})])},s=[];i._withStripped=!0;var d={render:i,staticRenderFns:s};e.a=d}});