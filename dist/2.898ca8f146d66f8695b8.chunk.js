webpackJsonp([2],{518:function(e,t,i){"use strict";function n(e){r||i(698)}Object.defineProperty(t,"__esModule",{value:!0});var o=i(665),a=i(700),r=!1,c=i(181),s=n,l=c(o.a,a.a,!1,s,"data-v-78ef9fa2",null);l.options.__file="src/views/projectItem.vue",t.default=l.exports},529:function(e,t,i){e.exports=i.p+"fc89053470c9c92258aff47417d496eb.jpg"},665:function(e,t,i){"use strict";var n=(i(43),i(699));i.n(n);t.a={data:function(){return{name:null,id:null,type:null,describe:null,uid:null,userStatus:null,touzi:!1,resourceId:null,resourcePrice:null,openId:null,liveId:null,live_id:null,article_id:null,pic:null,is_real_people:!1,is_right_people:!1,recommendid:null,details:null,isOuttime:!1,end_time:null}},methods:{checkIn:function(){var e=this;return console.log(e.id),console.log(e.uid),e.is_real_people?"high"!=e.type||e.is_right_people?void this.$Modal.confirm({title:"确认是否投资？",content:"<p>请确认是否投资，确认后我们将与您取得联系。</p>",loading:!0,onOk:function(){e.postRequest("/api/project_checkin/"+e.id,null).then(function(t){console.log(t),e.$Modal.remove(),e.$Message.success("随后我们将会与您取得联系，感谢您的关注。")}).catch(function(t){console.log(t),e.$Modal.remove(),e.$Message.error("请勿重复提交投资意向。")})}}):(this.$Message.warning("您还不是合格投资人，请完成合格投资人认证"),this.$router.push({path:"/test"}),!1):(this.$Message.warning("您还未激活，请激活您的账户"),this.$router.push({path:"/regist"}),!1)},goLive:function(e){if(null==e||void 0==e)return that.$Message.warning("该项目暂无直播"),!1;window.location.href="https://ghlive.cn/"+e},getFile:function(){var e=this;if(null==e.resourceId||void 0==e.resourceId)return this.$Message.warning("该项目暂无可下载资源"),!1;this.getRequest("/api/resource/"+e.resourceId).then(function(t){console.log(t),e.$Modal.success({title:"获取成功",content:"请将文件链接拷贝到微信外的浏览器进行下载：\n"+t.data.data.resourcePath})}).catch(function(e){console.log(e)})},goLink:function(){this.$router.push({name:"item"})},goResource:function(e){this.$router.push({path:"/resource?id="+e})},recommend:function(){this.$Modal.success({title:"生成我的专属推荐链接",content:"这是我在力合载物的专属推荐链接，快来看看吧：\n https://weixin.leaguervc.com/project?id="+this.id+"&recommend="+this.uid+"\n（长按复制，建议简单编辑项目介绍后转发推荐，项目推荐成功，将获取项目奖励。）"})},getNow:function(){var e=new Date;return 1e4*e.getFullYear()+100*(e.getMonth()+1)+e.getDate()}},created:function(){console.log(this.$route.query.id);var e=this;this.id=this.$route.query.id,this.$route.query.recommend&&(e.recommendid=this.$route.query.recommend,e.postRequest("/api/projects/"+e.id+"/recommend/"+e.recommendid,null).then(function(t){console.log(t),e.$Modal.info({title:"项目推荐",content:"这是用户ID："+e.recommendid+"向您推荐的项目，快来看看吧！"})}).catch(function(e){console.log(e)})),this.getRequest("/api/projects/"+this.$route.query.id).then(function(t){console.log(t),e.name=t.data.data.name,e.describe=t.data.data.describe,e.type=t.data.data.type,e.pic=t.data.data.image_url,null!=t.data.data.live&&(e.liveId=t.data.data.live.id,e.live_id=t.data.data.live.live_id),null!=t.data.data.article&&(e.article_id=t.data.data.article.id);var i=t.data.data.end_time,n=e.getNow();console.log(n),n>i&&(e.isOuttime=!0),null!=e.article_id&&e.getRequest("/api/articles/"+e.article_id).then(function(t){console.log(t);var i=t.data.data.detail,n=new RegExp("<p></p>","g"),o=i.replace(/img/g,'img style="width: 100%"').replace(n,"<br>");console.log("result:"+o),e.details=o}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)}),this.getRequest("/api/me").then(function(t){console.log(t),e.uid=t.data.data.id,e.is_real_people=t.data.data.is_real_people,e.is_right_people=t.data.data.is_right_people}).catch(function(e){console.log(e)})}}},698:function(e,t){},699:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(i),function(e){c(t,e,n)}):d(t,n)}function n(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){n&&n.trigger&&n.trigger(e),c(t,e,i)}):n?d(t,n):d(t,i)}function o(e){return e=e||{},e.appId=O.appId,e.verifyAppId=O.appId,e.verifySignType="sha1",e.verifyTimestamp=O.timestamp+"",e.verifyNonceStr=O.nonceStr,e.verifySignature=O.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=s(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",O.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=n.indexOf(":");switch(n.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function s(e,t){var i=e,n=v[i];n&&(i=n);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t=i+":"+o}function l(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],o=h[n];o&&(e[t]=o)}return e}}function d(e,t){if(!(!O.debug||t&&t.isInnerInvoke)){var i=v[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(w||k||O.debug||C<"6.0.2"||A.systemType<0)){var t=new Image;A.appId=O.appId,A.initTime=P.initEndTime-P.initStartTime,A.preVerifyTime=P.preVerifyEndTime-P.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){A.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+A.version+"&o="+A.isPreVerifyOk+"&s="+A.systemType+"&c="+A.clientVersion+"&a="+A.appId+"&n="+A.networkType+"&i="+A.initTime+"&p="+A.preVerifyTime+"&u="+A.url;t.src=i}})}}function p(){return(new Date).getTime()}function f(t){T&&(e.WeixinJSBridge?t():_.addEventListener&&_.addEventListener("WeixinJSBridgeReady",t,!1))}function g(){B.invoke||(B.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(i),n)},B.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}function m(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),_=e.document,y=_.title,S=navigator.userAgent.toLowerCase(),I=navigator.platform.toLowerCase(),w=!(!I.match("mac")&&!I.match("win")),k=-1!=S.indexOf("wxdebugger"),T=-1!=S.indexOf("micromessenger"),M=-1!=S.indexOf("android"),x=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),C=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),P={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},A={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:M?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},O={},V={_completes:[]},b={state:0,data:{}};f(function(){P.initEndTime=p()});var L=!1,R=[],B={config:function(e){O=e,d("config",e);var t=!1!==O.check;f(function(){if(t)i(h.config,{verifyJsApiList:l(O.jsApiList)},function(){V._complete=function(e){P.preVerifyEndTime=p(),b.state=1,b.data=e},V.success=function(e){A.isPreVerifyOk=0},V.fail=function(e){V._fail?V._fail(e):b.state=-1};var e=V._completes;return e.push(function(){u()}),V.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();V._completes=[]},V}()),P.preVerifyStartTime=p();else{b.state=1;for(var e=V._completes,n=0,o=e.length;n<o;++n)e[n]();V._completes=[]}}),g()},ready:function(e){0!=b.state?e():(V._completes.push(e),!T&&O.debug&&e())},error:function(e){C<"6.0.2"||(-1==b.state?e(b.data):V._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var n=v[i];n&&(t[n]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:l(e.jsApiList)},(e._complete=function(e){if(M){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e))},onMenuShareTimeline:function(e){n(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){n(h.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){n(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){n(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){n(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){n("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){n("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===L?(L=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(L=!1,R.length>0){var t=R.shift();wx.getLocalImgData(t)}},e))):R.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),o=t.substring(n+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=t(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(x){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],c={card_id:r.cardId,card_ext:r.cardExt};n.push(c)}i(h.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var o=t[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:O.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],c={card_id:r.cardId,code:r.code};n.push(c)}i(h.openCard,{card_list:n},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){n(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){f(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},E=1,N={};return _.addEventListener("error",function(e){if(!M){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=E++,t["wx-id"]=o),N[o])return;N[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})})}}},!0),_.addEventListener("load",function(e){if(!M){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(N[n]=!1)}}},!0),t&&(e.wx=e.jWeixin=B),B}}(t)}(window)},700:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index",staticStyle:{background:"#eee"}},[n("div",{staticStyle:{background:"#eee",padding:"10px 10px 10px 10px"}},[n("Card",{attrs:{bordered:!1}},[n("p",{staticStyle:{"font-size":"20px"},attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.name))]),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.pic}})]),e._v(" "),n("div",{staticClass:"detail",domProps:{innerHTML:e._s(e.details)}})])],1),e._v(" "),e.isOuttime?n("div",{staticStyle:{padding:"10px",background:"#eee"}},[n("Card",{attrs:{title:"选项",icon:"ios-options",padding:0}},[n("CellGroup",["normal"==e.type?n("Cell",{attrs:{title:"项目直播",extra:"直播回看"},nativeOn:{click:function(t){e.goLive(e.live_id)}}}):e._e(),e._v(" "),n("Cell",{attrs:{title:"我要投资",extra:"已结束"}}),e._v(" "),n("Cell",{attrs:{title:"我要推荐",extra:"已结束"}})],1)],1)],1):e._e(),e._v(" "),e.isOuttime?e._e():n("div",{staticStyle:{padding:"10px",background:"#eee"}},[n("Card",{attrs:{title:"选项",icon:"ios-options",padding:0}},[n("CellGroup",["normal"==e.type?n("Cell",{attrs:{title:"项目直播",extra:"进入直播"},nativeOn:{click:function(t){e.goLive(e.live_id)}}}):e._e(),e._v(" "),e.is_real_people&&e.is_right_people&&"high"==e.type?n("Cell",{attrs:{title:"我要投资"},nativeOn:{click:function(t){e.checkIn()}}}):e._e(),e._v(" "),e.is_real_people&&"normal"==e.type?n("Cell",{attrs:{title:"我要投资"},nativeOn:{click:function(t){e.checkIn()}}}):e._e(),e._v(" "),e.is_real_people?e._e():n("Cell",{attrs:{title:"我要投资",extra:"请先激活",to:"/regist"}}),e._v(" "),e.is_real_people&&!e.is_right_people&&"high"==e.type?n("Cell",{attrs:{title:"我要投资",extra:"合格投资人人认证",to:"/test"}}):e._e(),e._v(" "),n("Cell",{attrs:{title:"我要推荐"},nativeOn:{click:function(t){e.recommend()}}})],1)],1)],1),e._v(" "),n("div",{staticStyle:{padding:"10px",background:"#eee"}},[n("Card",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"50%"},attrs:{src:i(529)}}),e._v(" "),n("h3",[e._v("欢迎关注力合载物")])])])],1)])},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};t.a=a}});