webpackJsonp([6],{516:function(e,a,t){"use strict";function r(e){o||t(550)}Object.defineProperty(a,"__esModule",{value:!0});var i=t(529),l=t(551),o=!1,n=t(180),s=r,d=n(i.a,l.a,!1,s,"data-v-36fbb310",null);d.options.__file="src/views/regist.vue",a.default=d.exports},529:function(e,a,t){"use strict";var r=t(182),i=t(181);a.a={data:function(){return{formValidate:{phone:"",realname:"",idcard:"",mail:""},ruleValidate:{realname:[{required:!0,message:"真实姓名不能为空",trigger:"blur"},{required:!0,type:"string",trigger:"change"}],idcard:[{required:!0,message:"身份证号不能为空",trigger:"blur"},{required:!0,type:"string",min:18,max:18,message:"错误的格式",trigger:"change"}],phone:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{required:!0,type:"string",min:11,max:11,message:"错误的格式",trigger:"change"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"错误的邮箱格式",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var a=this;this.$refs[e].validate(function(t){if(t){var l={phone:a.formValidate.phone,idcard:a.formValidate.idcard,mail:a.formValidate.mail,realname:a.formValidate.realname};console.log("==========="),console.log(a.formValidate),console.log(e),console.log(t),console.log(l),i.a.ajax.put("/api/wechat/user/"+Object(r.b)("uid"),a.$qs.stringify(l)).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),a.$Message.success("Success!"),a.$router.push({path:"/user"})}else a.$Message.error("Fail!")})},handleReset:function(e){this.$refs[e].resetFields()}}}},550:function(e,a){},551:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"index"},[t("Row",{staticClass:"title",attrs:{span:"24"}},[t("Col",{attrs:{span:"22"}},[e._v("用户激活")])],1),e._v(" "),t("div",{staticStyle:{width:"75%","margin-top":"15%","margin-left":"10%"}},[t("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[t("FormItem",{attrs:{label:"真实姓名",prop:"realname"}},[t("Input",{attrs:{placeholder:"请输入您的真实姓名"},model:{value:e.formValidate.realname,callback:function(a){e.$set(e.formValidate,"realname",a)},expression:"formValidate.realname"}})],1),e._v(" "),t("FormItem",{attrs:{label:"身份证号",prop:"idcard"}},[t("Input",{attrs:{placeholder:"请输入您的身份证号"},model:{value:e.formValidate.idcard,callback:function(a){e.$set(e.formValidate,"idcard",a)},expression:"formValidate.idcard"}})],1),e._v(" "),t("FormItem",{attrs:{label:"手机号",prop:"phone"}},[t("Input",{attrs:{placeholder:"请输入您的手机号"},model:{value:e.formValidate.phone,callback:function(a){e.$set(e.formValidate,"phone",a)},expression:"formValidate.phone"}})],1),e._v(" "),t("FormItem",{attrs:{label:"电子邮箱",prop:"mail"}},[t("Input",{attrs:{placeholder:"请输入您的电子邮箱"},model:{value:e.formValidate.mail,callback:function(a){e.$set(e.formValidate,"mail",a)},expression:"formValidate.mail"}})],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary"},on:{click:function(a){e.handleSubmit("formValidate")}}},[e._v("提交")]),e._v(" "),t("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)],1)],1)},i=[];r._withStripped=!0;var l={render:r,staticRenderFns:i};a.a=l}});