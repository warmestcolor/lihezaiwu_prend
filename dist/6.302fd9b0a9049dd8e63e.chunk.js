webpackJsonp([6],{508:function(t,e,n){"use strict";function i(t){s||n(672)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(651),a=n(673),s=!1,r=n(181),c=i,l=r(o.a,a.a,!1,c,"data-v-19005bdf",null);l.options.__file="src/views/touzi.vue",e.default=l.exports},651:function(t,e,n){"use strict";n(43);e.a={data:function(){return{normalList:[1,2,3,4],highList:[11,12,13],value1:["1","2"]}},methods:{goProject:function(t){this.$router.push({path:"/project?id="+t})},handleReachBottom:function(){var t=this;return new Promise(function(e){setTimeout(function(){for(var n=t.list3[t.list3.length-1],i=1;i<11;i++)t.jijin.push(n+i);e()},2e3)})},goLink:function(t){this.$router.push({path:"/item?id="+t})}},created:function(){var t=this;this.getRequest("/api/projects_normal?page=0&size=1").then(function(e){console.log(e),t.normalList=e.data.data}).catch(function(t){console.log(t)}),this.getRequest("/api/projects_high?page=0&size=1").then(function(e){console.log(e),t.highList=e.data.data}).catch(function(t){console.log(t)})}}},672:function(t,e){},673:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Collapse",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[n("Panel",{staticStyle:{"font-size":"20px"},attrs:{name:"1"}},[t._v("\n        投资项目\n        "),n("div",{attrs:{slot:"content"},slot:"content"},[t._l(t.normalList,function(e,i){return n("div",{key:i,staticStyle:{"padding-top":"10px"}},[n("Card",{nativeOn:{click:function(n){t.goProject(e.id)}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))]),t._v(" "),n("p",{attrs:{slot:"extra"},slot:"extra"},[t._v("\n        投资项目\n        ")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.image_url}})]),t._v(" "),n("p",[t._v(t._s(e.describe))])])],1)}),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("Button",{attrs:{to:"/normal",type:"info",long:""}},[t._v("更多项目")])],1)],2)]),t._v(" "),n("Panel",{staticStyle:{"font-size":"20px"},attrs:{name:"2"}},[t._v("\n        领投基金\n        "),n("div",{attrs:{slot:"content"},slot:"content"},[t._l(t.highList,function(e,i){return n("div",{key:i,staticStyle:{"padding-top":"10px"}},[n("Card",{nativeOn:{click:function(n){t.goProject(e.id)}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))]),t._v(" "),n("p",{attrs:{slot:"extra"},slot:"extra"},[t._v("\n        领投基金\n        ")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.image_url}})]),t._v(" "),n("p",[t._v(t._s(e.describe))])])],1)}),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("Button",{attrs:{to:"/high",type:"info",long:""}},[t._v("更多基金")])],1)],2)])],1)},o=[];i._withStripped=!0;var a={render:i,staticRenderFns:o};e.a=a}});