webpackJsonp([11],{516:function(t,e,n){"use strict";function i(t){a||n(691)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(661),s=n(692),a=!1,r=n(181),c=i,l=r(o.a,s.a,!1,c,"data-v-2b3b9a60",null);l.options.__file="src/views/recommendList.vue",e.default=l.exports},661:function(t,e,n){"use strict";n(43);e.a={data:function(){return{itemlist:[11,12,13],value1:"1"}},methods:{goProject:function(t){this.$router.push({path:"/project?id="+t})},handleReachBottom:function(){var t=this;return new Promise(function(e){setTimeout(function(){for(var n=t.list3[t.list3.length-1],i=1;i<11;i++)t.jijin.push(n+i);e()},2e3)})},goLink:function(t){this.$router.push({path:"/item?id="+t})}},created:function(){console.log(this.GLOBAL);var t=this;this.getRequest("/api/me/recommends").then(function(e){console.log(e),console.log(t.itemlist),t.itemlist=e.data.data}).catch(function(t){console.log(t)})}}},691:function(t,e){},692:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Collapse",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[n("Panel",{staticStyle:{"font-size":"20px"},attrs:{name:"1"}},[t._v("\n        推荐记录\n        "),n("div",{attrs:{slot:"content"},slot:"content"},t._l(t.itemlist,function(e,i){return n("div",{key:i,staticStyle:{"padding-top":"10px"}},[n("Card",{nativeOn:{click:function(n){t.goProject(e.project_id)}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("用户："+t._s(e.dist_user.username))]),t._v(" "),n("p",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("\n        "+t._s(e.inserted_at.slice(0,10))+"\n        ")]),t._v(" "),n("p",[t._v("浏览项目："+t._s(e.project.name))])])],1)}))])],1)},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};e.a=s}});