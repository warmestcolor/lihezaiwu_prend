webpackJsonp([8],{517:function(t,e,n){"use strict";function i(t){r||n(693)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(662),s=n(694),r=!1,a=n(181),c=i,l=a(o.a,s.a,!1,c,"data-v-3cf1ce34",null);l.options.__file="src/views/resourceList.vue",e.default=l.exports},662:function(t,e,n){"use strict";n(43);e.a={data:function(){return{project:[1,2,3,4],resourceList:[],value1:"1"}},methods:{goArticle:function(t){this.$router.push({path:"/article?id="+t})},handleStart:function(){this.$Modal.info({title:"Bravo",content:"Now, enjoy iView."})},handleReachBottom:function(){var t=this;return new Promise(function(e){setTimeout(function(){for(var n=t.list3[t.list3.length-1],i=1;i<11;i++)t.jijin.push(n+i);e()},2e3)})},goLink:function(t){this.$router.push({path:"/article?id="+t})}},created:function(){console.log(this.GLOBAL);var t=this;this.getRequest("/api/projects/"+this.$route.query.id+"/resources").then(function(e){console.log(e),t.resourceList=e.data.data}).catch(function(t){console.log(t)})}}},693:function(t,e){},694:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Collapse",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[n("Panel",{staticStyle:{"font-size":"20px"},attrs:{name:"1"}},[t._v("\n        资源列表\n        "),n("div",{attrs:{slot:"content"},slot:"content"},t._l(t.resourceList,function(e,i){return n("div",{key:i,staticStyle:{"padding-top":"10px"}},[e.can_download?n("Card",{nativeOn:{click:function(n){t.goArticle(e.id)}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))]),t._v(" "),n("p",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("\n        下载资源\n        ")]),t._v(" "),n("p",[t._v("价格："+t._s(e.price)+" ¥ 已购买")])]):n("Card",{nativeOn:{click:function(n){t.goArticle(e.id)}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))]),t._v(" "),n("p",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("\n        购买资源\n        ")]),t._v(" "),n("p",[t._v("价格："+t._s(e.price)+" ¥")])])],1)}))])],1)},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};e.a=s}});