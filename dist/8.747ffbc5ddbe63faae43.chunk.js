webpackJsonp([8],{523:function(t,a,s){"use strict";function e(t){i||s(706)}Object.defineProperty(a,"__esModule",{value:!0});var l=s(668),o=s(707),i=!1,r=s(181),v=e,n=r(l.a,o.a,!1,v,"data-v-5752faac",null);n.options.__file="src/views/test.vue",a.default=n.exports},668:function(t,a,s){"use strict";s(43);a.a={data:function(){return{name:null,url:null,id:null,status:null,is_real_people:!1,is_right_people:!1,score:["N0","N0","N0","N0","N0","N0","N0","N0","N0","N0","N0","N0","N0"],option:["N","N","N","N","N","N","N","N","N","N","N","N","N"]}},methods:{handleSubmit:function(){for(var t=this,a=0,s="",e="",l=0,o=t.score.length;l<o;l++){var i=t.score[l],r=i.split("");t.option[l]=r[0],console.log("这道题的选项是是"+r[0]+isNaN(r[1])),console.log("这道题的得分是"+r[1]+isNaN(r[1])),a+=parseInt(r[1])}a>=0&&a<=14?(e="保守型",s="A"):a>=15&&a<=28?(e="稳健型",s="B"):a>=29&&a<=42?(e="平衡型",s="C"):a>=43&&a<=56?(e="成长型",s="D"):a>=57&&a<=70?(e="进取型",s="E"):e="未知",console.log(a),console.log(s);var v={answer1:t.option[0],answer2:t.option[1],answer3:t.option[2],answer4:t.option[3],answer5:t.option[4],answer6:t.option[5],answer7:t.option[6],answer8:t.option[7],answer9:t.option[8],answer10:t.option[9],answer11:t.option[10],answer12:t.option[11],answer13:t.option[12],score:a};this.postRequest("/api/users/apply",v).then(function(s){console.log(s),console.log(a),t.$Modal.success({title:"提交成功",content:"您的风险识别能力和承担能力为："+e})}).catch(function(t){console.log(t)})},handleReset:function(t){this.$refs[t].resetFields()}},created:function(){console.log("vuex数据"+this.$store.state.uid),this.id=this.$store.state.uid;var t=this;this.getRequest("/api/me").then(function(a){if(console.log(a),t.is_real_people=a.data.data.is_real_people,t.is_right_people=a.data.data.is_right_people,!t.is_real_people)return t.$Message.warning("您还未激活，请激活您的账户"),t.$router.push({path:"/regist"}),!1;t.is_right_people&&t.$Modal.warning({title:"提示",content:"您已经完成了合格投资人认证，再次答题将覆盖您的答题记录，请确认是否继续"}),t.$Modal.warning({title:"用户须知",content:"力合载物谨遵基金业协会《私募投资基金募集行为管理办法》之规定，只向特定的合格投资者宣传推介相关私募投资基金产品"})}).catch(function(t){console.log(t)})}}},706:function(t,a){},707:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index"},[s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("合格投资人认证")])],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的年龄")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[0],callback:function(a){t.$set(t.score,0,a)},expression:"score[0]"}},[s("Radio",{attrs:{label:"A3"}},[t._v("A 18-30")]),t._v(" "),s("Radio",{attrs:{label:"B5"}},[t._v("B 31-50")]),t._v(" "),s("Radio",{attrs:{label:"C2"}},[t._v("C 51-65")]),t._v(" "),s("Radio",{attrs:{label:"D1"}},[t._v("D 高于65")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的学历")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[1],callback:function(a){t.$set(t.score,1,a)},expression:"score[1]"}},[s("Radio",{attrs:{label:"A2"}},[t._v("A 高中及以下")]),t._v(" "),s("Radio",{attrs:{label:"B3"}},[t._v("B 中专或大专")]),t._v(" "),s("Radio",{attrs:{label:"C4"}},[t._v("C 本科")]),t._v(" "),s("Radio",{attrs:{label:"D5"}},[t._v("D 硕士及以上")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的职业")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[2],callback:function(a){t.$set(t.score,2,a)},expression:"score[2]"}},[s("Radio",{attrs:{label:"A1"}},[t._v("A 无固定职业")]),t._v(" "),s("Radio",{attrs:{label:"B3"}},[t._v("B 专业技术人员")]),t._v(" "),s("Radio",{attrs:{label:"C4"}},[t._v("C 一般企事业单位员工")]),t._v(" "),s("Radio",{attrs:{label:"D5"}},[t._v("D 金融行业一般从业人员")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的家庭可支配年收入为（折合人民币）")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[3],callback:function(a){t.$set(t.score,3,a)},expression:"score[3]"}},[s("Radio",{attrs:{label:"A1"}},[t._v("A 50万元以下")]),t._v(" "),s("Radio",{attrs:{label:"B2"}},[t._v("B 50-100万元")]),t._v(" "),s("Radio",{attrs:{label:"C3"}},[t._v("C 100-500万元")]),t._v(" "),s("Radio",{attrs:{label:"D4"}},[t._v("D 500-1000万元")]),t._v(" "),s("Radio",{attrs:{label:"E5"}},[t._v("E 1000万元以上")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您可用于投资的资产数额（包括金融资产和不动产）")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[4],callback:function(a){t.$set(t.score,4,a)},expression:"score[4]"}},[s("Radio",{attrs:{label:"A0"}},[t._v("A 不超过100万元人民币")]),t._v(" "),s("Radio",{attrs:{label:"B2"}},[t._v("B 100万-300万元（不含）人民币")]),t._v(" "),s("Radio",{attrs:{label:"C4"}},[t._v("C 300万-1000万元（不含）人民币")]),t._v(" "),s("Radio",{attrs:{label:"D5"}},[t._v("D 1000万元人民币以上")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您预计进行股权投资的资金占现有总资产的比例")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[5],callback:function(a){t.$set(t.score,5,a)},expression:"score[5]"}},[s("Radio",{attrs:{label:"A1"}},[t._v("A 70%以上")]),t._v(" "),s("Radio",{attrs:{label:"B2"}},[t._v("B 50%-70%")]),t._v(" "),s("Radio",{attrs:{label:"C3"}},[t._v("C 30%－50%")]),t._v(" "),s("Radio",{attrs:{label:"D4"}},[t._v("D 10%－30%")]),t._v(" "),s("Radio",{attrs:{label:"E5"}},[t._v("E 10%以下")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的投资知识")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[6],callback:function(a){t.$set(t.score,6,a)},expression:"score[6]"}},[s("Radio",{attrs:{label:"A3"}},[t._v("A 从事金融或财会等与投资相关的工作超过两年")]),t._v(" "),s("Radio",{attrs:{label:"B4"}},[t._v("B 已取得与金融投资相关专业学士以上学位")]),t._v(" "),s("Radio",{attrs:{label:"C5"}},[t._v("C 取得证券（基金）从业资格或相关财会证书等")]),t._v(" "),s("Radio",{attrs:{label:"D0"}},[t._v("D 我不符合以上任何一项描述")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的投资经验")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[7],callback:function(a){t.$set(t.score,7,a)},expression:"score[7]"}},[s("Radio",{attrs:{label:"A1"}},[t._v("A 除银行储蓄外，基本无其他投资")]),t._v(" "),s("Radio",{attrs:{label:"B2"}},[t._v("B 我购买过理财产品，但还需要指导")]),t._v(" "),s("Radio",{attrs:{label:"C4"}},[t._v("C 我倾向于自己做出投资决策")]),t._v(" "),s("Radio",{attrs:{label:"D5"}},[t._v("D 我是一位非常有经验的投资者")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您有多少年投资风险投资品的经验")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[8],callback:function(a){t.$set(t.score,8,a)},expression:"score[8]"}},[s("Radio",{attrs:{label:"A1"}},[t._v("A 没有经验")]),t._v(" "),s("Radio",{attrs:{label:"B2"}},[t._v("B 少于2年")]),t._v(" "),s("Radio",{attrs:{label:"C3"}},[t._v("C 2至5年")]),t._v(" "),s("Radio",{attrs:{label:"D4"}},[t._v("D 5至10年")]),t._v(" "),s("Radio",{attrs:{label:"E6"}},[t._v("E 10年以上")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您用于股权投资基金投资的资金的持续时间")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[9],callback:function(a){t.$set(t.score,9,a)},expression:"score[9]"}},[s("Radio",{attrs:{label:"A2"}},[t._v("A 短期——0到1年")]),t._v(" "),s("Radio",{attrs:{label:"B3"}},[t._v("B 中期——1到3年")]),t._v(" "),s("Radio",{attrs:{label:"C4"}},[t._v("C 长期——3到5年")]),t._v(" "),s("Radio",{attrs:{label:"D6"}},[t._v("D 5年以上")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的投资目的")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[10],callback:function(a){t.$set(t.score,10,a)},expression:"score[10]"}},[s("Radio",{attrs:{label:"A3"}},[t._v("A 资产保值")]),t._v(" "),s("Radio",{attrs:{label:"B5"}},[t._v("B 资产稳健增长")]),t._v(" "),s("Radio",{attrs:{label:"C7"}},[t._v("C 资产迅速增长")]),t._v(" "),s("Radio",{attrs:{label:"D0"}},[t._v("D 风险偏好")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您的投资态度")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[11],callback:function(a){t.$set(t.score,11,a)},expression:"score[11]"}},[s("Radio",{attrs:{label:"A2"}},[t._v("A 不希望本金损失，希望获得稳定回报")]),t._v(" "),s("Radio",{attrs:{label:"B3"}},[t._v("B 不希望本金损失，愿意承担一定幅度的收益波动")]),t._v(" "),s("Radio",{attrs:{label:"C4"}},[t._v("C 愿意为较高收益承担有限本金损失")]),t._v(" "),s("Radio",{attrs:{label:"D6"}},[t._v("D 愿意为高回报承担较大本金损失")])],1)],1),t._v(" "),s("Row",{staticClass:"title",attrs:{span:"24"}},[s("Col",{attrs:{span:"24"}},[t._v("您能承受的最大投资损失")])],1),t._v(" "),s("div",{staticStyle:{"padding-left":"20px"}},[s("RadioGroup",{attrs:{size:"large",vertical:""},model:{value:t.score[12],callback:function(a){t.$set(t.score,12,a)},expression:"score[12]"}},[s("Radio",{attrs:{label:"A1"}},[t._v("A 10%以内")]),t._v(" "),s("Radio",{attrs:{label:"B2"}},[t._v("B 10%-30%")]),t._v(" "),s("Radio",{attrs:{label:"C3"}},[t._v("C 30%-50%")]),t._v(" "),s("Radio",{attrs:{label:"D6"}},[t._v("D 超过50%")])],1)],1),t._v(" "),s("div",{staticStyle:{padding:"10px 20px 10px 20px"}},[s("Button",{attrs:{type:"info",long:""},on:{click:function(a){t.handleSubmit()}}},[t._v("提交")])],1)],1)},l=[];e._withStripped=!0;var o={render:e,staticRenderFns:l};a.a=o}});