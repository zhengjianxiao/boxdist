(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1815957f"],{5607:function(t,e,n){"use strict";var i=n("80f5"),o=n.n(i);o.a},7558:function(t,e,n){"use strict";var i=n("f163"),o=n.n(i);o.a},"80f5":function(t,e,n){},"91e2":function(t,e,n){"use strict";var i=n("a12d"),o=n.n(i);o.a},"96cf":function(t,e,n){var i=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,n,i){var o=e&&e.prototype instanceof m?e:m,r=Object.create(o.prototype),s=new N(i||[]);return r._invoke=C(t,n,s),r}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}t.wrap=c;var l="suspendedStart",d="suspendedYield",h="executing",f="completed",p={};function m(){}function v(){}function y(){}var g={};g[r]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==n&&i.call(b,r)&&(g=b);var k=y.prototype=m.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t,e){function n(o,r,s,a){var c=u(t[o],t,r);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var o;function r(t,i){function r(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(r,r):r()}this._invoke=r}function C(t,e,n){var i=l;return function(o,r){if(i===h)throw new Error("Generator is already running");if(i===f){if("throw"===o)throw r;return P()}n.method=o,n.arg=r;while(1){var s=n.delegate;if(s){var a=j(s,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===l)throw i=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var c=u(t,e,n);if("normal"===c.type){if(i=n.done?f:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=f,n.method="throw",n.arg=c.arg)}}}function j(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var r=o.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function G(t){if(t){var n=t[r];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){while(++o<t.length)if(i.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=k.constructor=y,y.constructor=v,y[a]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[s]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,i,o,r){void 0===r&&(r=Promise);var s=new _(c(e,n,i,o),r);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(k),k[a]="Generator",k[r]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=G,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(i,o){return a.type="throw",a.arg=t,n.next=i,o&&(n.method="next",n.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:G(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=i}catch(o){Function("r","regeneratorRuntime = r")(i)}},a012:function(t,e,n){},a12d:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"swipper"},[n("swipper"),n("div",{staticClass:"TempleName"},[t._v(t._s(t.TempleName))])],1),n("description"),n("div",{staticClass:"homelist"},[n("donation",{attrs:{donationName:"建寺",isslect:"true",ismoney:"true",ismessage:"true",isaddress:"true"}}),n("donation",{attrs:{donationName:"放生",ismoneyone:"true",ismessage:"true"}}),n("donation",{attrs:{donationName:"供佛",iscount:"true",ismoneycheck:"true",iscomputedmoney:"true"}}),n("donation",{attrs:{donationName:"供斋",ismoneyone:"true"}}),n("donation",{staticClass:"booleft",attrs:{donationName:"法会",ismoneyone:"true"}}),n("donation",{staticClass:"booright",attrs:{donationName:"助印",ismoneyone:"true",ismessage:"true"}})],1),n("div",{staticClass:"footer"},[n("div",{on:{click:function(e){return t.$router.push("profile")}}},[n("van-icon",{attrs:{name:"arrow-left"}}),t._v("我的功德")],1),n("div",{on:{click:function(e){return t.$router.push("detaildonation")}}},[t._v("查看功德"),n("van-icon",{attrs:{name:"arrow"}})],1)])],1)},o=[];n("96cf"),n("d3b7");function r(t,e,n,i,o,r,s){try{var a=t[r](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(i,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.images,(function(t,e){return n("van-swipe-item",{key:e},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})),1)],1)},c=[],u={name:"swipper",data:function(){return{images:["https://s1.ax1x.com/2020/06/22/NG7Ywj.th.jpg","https://s1.ax1x.com/2020/06/22/NGhWfU.md.jpg","https://s1.ax1x.com/2020/06/22/NG4iAP.th.jpg","https://s1.ax1x.com/2020/06/22/NG4nns.md.jpg"]}}},l=u,d=(n("91e2"),n("2877")),h=Object(d["a"])(l,a,c,!1,null,"3012b277",null),f=h.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scr"},[n("div",{staticClass:"description",class:{isshow:!t.isshow}},[t._v(" "+t._s(t.description)+" ")]),n("div",{staticClass:"icon",on:{click:function(e){return t.iconclick()}}},[t.isshow?n("van-icon",{attrs:{name:"arrow-up"}}):n("van-icon",{attrs:{name:"arrow-down"}})],1)])},m=[],v={name:"description",data:function(){return{description:"desdescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription\n                  ",isshow:!1}},methods:{iconclick:function(){this.isshow=!this.isshow}}},y=v,g=(n("f887"),Object(d["a"])(y,p,m,!1,null,"6b3eabe6",null)),w=g.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"donation",on:{click:t.donaclick}},[i("img",{attrs:{src:n("cf53"),alt:""}}),i("div",[t._v(t._s(t.donationName))])]),i("van-overlay",{staticClass:"overlay",attrs:{show:t.show}},[i("img",{attrs:{src:n("cf53"),alt:""}}),i("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"title"},[t._v(t._s(t.donationName))]),i("div",{staticClass:"detail",class:{isshow:!t.isshow}},[t._v(t._s(t.detail))]),i("div",{staticClass:"icon",on:{click:function(e){return t.iconclick()}}},[t.isshow?i("van-icon",{attrs:{name:"arrow-up"}}):i("van-icon",{attrs:{name:"arrow-down"}})],1),i("van-form",{staticClass:"subform",on:{submit:t.onSubmit}},[t._t("ismoneycheck",[t.ismoneycheck?i("div",[i("van-field",{staticClass:"filed",attrs:{name:"ismoneycheck"},scopedSlots:t._u([{key:"input",fn:function(){return[i("van-checkbox-group",{model:{value:t.checkboxGroup,callback:function(e){t.checkboxGroup=e},expression:"checkboxGroup"}},[i("van-checkbox",{attrs:{name:"300","icon-size":"26px","checked-color":"rgb(212, 177, 20)"}},[t._v("300/年")])],1)]},proxy:!0}],null,!1,3166942110)})],1):t._e()]),t._t("moneyone",[t.ismoneyone?i("div",{staticClass:"moneyone"},[i("van-field",{staticClass:"filed",attrs:{name:"输入金额",label:"输入金额"},model:{value:t.moneyone,callback:function(e){t.moneyone=e},expression:"moneyone"}}),i("span",[t._v("￥")]),i("span",[t._v("元")])],1):t._e()]),t._t("slect",[t.isslect?i("div",[i("van-field",{staticClass:"filed",attrs:{readonly:"",clickable:"",name:"用途",value:t.value,label:"选择用途"},on:{click:function(e){t.showPicker=!0}}}),i("van-popup",{attrs:{position:"right"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[i("van-picker",{attrs:{"show-toolbar":"",columns:t.columns,"default-index":0},on:{confirm:t.onConfirm,cancel:function(e){t.showPicker=!1}}})],1)],1):t._e()]),t._t("count",[t.iscount?i("div",{staticClass:"count"},[i("van-field",{staticClass:"filed",attrs:{name:"数量",label:"数量"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),i("div",{staticClass:"countright"},[i("span"),i("span",[t._v("年")])])],1):t._e()]),t._t("money",[t.ismoney?i("div",[i("van-field",{staticClass:"filed",attrs:{name:"金额",label:"金额",placeholder:"0.01"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1):t._e()]),t._t("default",[t.iscomputedmoney?i("div",[i("van-field",{staticClass:"filed",attrs:{name:"计算金额",label:"金额"},on:{focus:function(e){t.computedmoney=300*t.count}},model:{value:t.computedmoney,callback:function(e){t.computedmoney=e},expression:"computedmoney"}})],1):t._e()]),i("van-field",{staticClass:"filed",attrs:{name:"用户姓名",label:"用户姓名",placeholder:"非必填"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),i("van-field",{staticClass:"filed",attrs:{name:"联系电话",label:"联系电话",placeholder:"非必填"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),t._t("message",[t.ismessage?i("div",{staticClass:"message"},[i("van-field",{staticClass:"filed",attrs:{rows:"2",autosize:"",name:"祝福语",label:"祝福语",type:"textarea",maxlength:"50","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),i("div",{staticClass:"togglemessage",on:{click:t.togglemessage}},[t._v("换一句")])],1):t._e()]),t._t("address",[t.isaddress?i("div",[i("van-field",{staticClass:"filed",attrs:{name:"地址",label:"地址",placeholder:"必填",rules:[{required:!0,message:"请填写地址"}]},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1):t._e()]),i("div",{staticStyle:{margin:"16px"}},[i("van-button",{staticClass:"subbutton",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 提交 ")])],1)],2),i("van-button",{staticClass:"back",attrs:{square:"",type:"primary"},on:{click:t.backclick}},[t._v("返回")])],1)])],1)},k=[],x={name:"donation",props:["donationName","ismoneyone","iscount","ismoneycheck","isslect","ismoney","ismessage","isaddress","iscomputedmoney"],data:function(){return{isshow:!1,show:!1,detail:"sadhjfjaguhauogfuefyguygefbyuegwuyeguygwuygehnakjshncjgvcfvcajnbxjkasvbcvuifghisabhjkbvjhbcabhdbhgbfugfuygjhasdhiugfuygsdugbbnzcnbajksdfghhuguyiewafvgxbcghfjaskhgbcjh",username:"",tel:"",money:"0.01",value:"瓦",columns:["瓦","柱子","大殿","随意"],showPicker:!1,message:"保佑我全家身体健康，万事如意！",messagelist:["测试祝福语","test","万事如意","保佑我全家身体健康，万事如意！"],address:"",moneyone:"",count:"",checkbox:!0,checkboxGroup:[],computedmoney:"",index:0}},methods:{donaclick:function(){this.initview(),this.show=!0},iconclick:function(){this.isshow=!this.isshow},onSubmit:function(t){console.log("submit",t),this.$msg.success("您已捐献成功！"),this.backclick()},onConfirm:function(t){this.value=t,this.showPicker=!1},backclick:function(){this.show=!1},moneyfocus:function(){alert("Please")},togglemessage:function(){this.message=this.messagelist[this.index],this.index++,this.index>=this.messagelist.length&&(this.index=0)},initview:function(){this.address="",this.moneyone="",this.count="",this.checkboxGroup=[],this.computedmoney="",this.message="保佑我全家身体健康，万事如意！",this.username="",this.tel="",this.money="",this.value="瓦"}},created:function(){}},_=x,C=(n("5607"),Object(d["a"])(_,b,k,!1,null,"160af794",null)),j=C.exports,L={name:"Home",data:function(){return{TempleName:"东华寺中殿"}},components:{swipper:f,description:w,donation:j},methods:{gethomedata:function(){var t=this;return s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("category");case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.gethomedata()}},E=L,N=(n("7558"),Object(d["a"])(E,i,o,!1,null,"1f7181de",null));e["default"]=N.exports},cf53:function(t,e,n){t.exports=n.p+"img/donation.c634d528.jpg"},f163:function(t,e,n){},f887:function(t,e,n){"use strict";var i=n("a012"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-1815957f.2c1b16c1.js.map