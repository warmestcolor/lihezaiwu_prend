webpackJsonp([18],{516:function(t,e,n){"use strict";function i(t){a||n(695)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(664),s=n(696),a=!1,r=n(181),c=i,l=r(o.a,s.a,!1,c,"data-v-56a748c1",null);l.options.__file="src/views/checkinList.vue",e.default=l.exports},664:function(t,e,n){"use strict";n(43);e.a={data:function(){return{itemlist:[{project:{name:"测试",type:"normal"},inserted_at:"2018-11-08"}],value1:"1"}},methods:{goProject:function(t){this.$router.push({path:"/project?id="+t})},handleReachBottom:function(){var t=this;return new Promise(function(e){setTimeout(function(){for(var n=t.list3[t.list3.length-1],i=1;i<11;i++)t.jijin.push(n+i);e()},2e3)})},goLink:function(t){this.$router.push({path:"/item?id="+t})}},created:function(){console.log(this.GLOBAL);var t=this;this.getRequest("/api/me/checkin").then(function(e){console.log(e),console.log(t.itemlist),t.itemlist=e.data.data}).catch(function(t){console.log(t)})}}},695:function(t,e){},696:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Collapse",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[n("Panel",{staticStyle:{"font-size":"20px"},attrs:{name:"1"}},[t._v("\n        报名记录\n        "),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticStyle:{padding:"5px"}},[n("Card",[n("p",{staticStyle:{"font-size":"14px"}},[n("Icon",{attrs:{type:"md-arrow-dropright",size:"14"}}),t._v("这里是您已经报名的项目")],1)])],1),t._v(" "),t._l(t.itemlist,function(e,i){return n("div",{key:i,staticStyle:{"padding-top":"10px"}},[n("Card",{nativeOn:{click:function(n){t.goProject(e.project_id)}}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("报名项目："+t._s(e.project.name))]),t._v(" "),n("p",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v("\n        "+t._s(e.inserted_at.slice(0,10))+"\n        ")]),t._v(" "),"high"==e.project.type?n("p",[t._v("\n        领投基金\n        ")]):t._e(),t._v(" "),"normal"==e.project.type?n("p",[t._v("\n        投资项目\n        ")]):t._e()])],1)})],2)])],1)},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};e.a=s}});