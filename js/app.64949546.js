(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-069463dc":"ec6f0704","chunk-22d7cd7e":"597dedc3","chunk-e6f98c52":"788a0280"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-069463dc":1,"chunk-22d7cd7e":1,"chunk-e6f98c52":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-069463dc":"2e478c19","chunk-22d7cd7e":"5dfde918","chunk-e6f98c52":"6ccde09c"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/boxdist/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("66cf");var r=n("343b"),a=(n("4b0a"),n("2bb1")),o=(n("7844"),n("5596")),u=(n("f1dc"),n("6e47")),c=(n("66b9"),n("b650")),i=(n("be7f"),n("565f")),s=(n("38d5"),n("772a")),d=(n("5f5f"),n("f253")),f=(n("8a58"),n("e41f")),l=(n("c3a6"),n("ad06")),p=(n("a909"),n("3acc")),h=(n("3c32"),n("417e")),m=(n("e7e5"),n("d399")),b=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},g=[],y=(n("7c55"),n("2877")),k={},w=Object(y["a"])(k,v,g,!1,null,null,null),O=w.exports,j=(n("d3b7"),n("8c4f")),_=function(){return n.e("chunk-069463dc").then(n.bind(null,"bb51"))},x=function(){return n.e("chunk-e6f98c52").then(n.bind(null,"893c"))},E=function(){return n.e("chunk-22d7cd7e").then(n.bind(null,"de1f"))};b["a"].use(j["a"]);var P=[{path:"/",name:"Home",component:_},{path:"/home",name:"Home",component:_},{path:"/profile",name:"profile",component:x},{path:"/detaildonation",name:"detaildonation",component:E}],S=new j["a"]({mode:"hash",base:"/boxdist/",routes:P}),T=S,C=n("2f62");b["a"].use(C["a"]);var A=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=n("bc3a"),N=n.n(L),M=N.a.create({baseURL:"http://112.74.99.5:3000/web/api",timeout:5e3}),$=M;b["a"].use(m["a"]),b["a"].use(h["a"]),b["a"].use(p["a"]),b["a"].use(l["a"]),b["a"].use(f["a"]),b["a"].use(d["a"]),b["a"].use(s["a"]),b["a"].use(i["a"]),b["a"].use(c["a"]),b["a"].use(u["a"]),b["a"].use(o["a"]),b["a"].use(a["a"]),b["a"].use(r["a"]),b["a"].config.productionTip=!1,b["a"].prototype.$msg=m["a"],b["a"].prototype.$http=$,new b["a"]({router:T,store:A,render:function(e){return e(O)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a}});
//# sourceMappingURL=app.64949546.js.map