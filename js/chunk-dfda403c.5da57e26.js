(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfda403c"],{"159b":function(t,e,n){var i=n("da84"),r=n("fdbc"),a=n("17c2"),o=n("9112");for(var s in r){var c=i[s],f=c&&c.prototype;if(f&&f.forEach!==a)try{o(f,"forEach",a)}catch(u){f.forEach=a}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,r=n("a640"),a=r("forEach");t.exports=a?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"51eb":function(t,e,n){"use strict";var i=n("825a"),r=n("c04e");t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(i(this),"number"!==t)}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}n("8172"),n("efec"),n("a9e3");function r(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function a(t){var e=r(t,"string");return"symbol"===i(e)?e:String(e)}function o(t,e,n){return e=a(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),a="["+r+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,o;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(o=a.prototype)&&o!==n.prototype&&r(t,o),t}},8172:function(t,e,n){var i=n("746f");i("toPrimitive")},"84b0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-infografica-b",class:{"img-infografica-b--open":t.selectedItem}},[n("div",{ref:"img-ref-"+t.mainId,staticClass:"img-infografica-b__img"},[t._t("imagen")],2),t.elements.length?n("div",{staticClass:"img-infografica-b__content"},t._l(t.elements,(function(e,i){return n("div",{key:"img-infografica-b-btn-"+e.id,staticClass:"img-infografica-b__item",style:[{top:e.y},{left:e.x}],on:{click:function(n){t.selected=e.id}}},[t.showIndicator&&t.firstElement.id===e.id?n("div",{staticClass:"indicador--click"}):t._e(),n("div",{staticClass:"img-infografica-b__item__tooltip"},[n("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.tooltip)}})]),n("div",{staticClass:"img-infografica-b__item__dot"}),e.hasOwnProperty("numero")?n("div",{staticClass:"img-infografica-b__item__numero"},[t._v(t._s(e.numero))]):n("div",{staticClass:"img-infografica-b__item__numero"},[n("i",{staticClass:"fas fa-plus"})])])})),0):t._e(),t.selectedItem?n("div",{staticClass:"img-infografica-b__modal p-3 p-md-4 p-xl-5",style:t.getImageHeight()},[n("div",{staticClass:"img-infografica-b__modal__btn-cerrar",on:{click:function(e){t.selected=0}}},[n("i",{staticClass:"fas fa-times"})]),n("div",{directives:[{name:"child",rawName:"v-child",value:t.selectedItem.elm,expression:"selectedItem.elm"}],staticClass:"img-infografica-b__modal__contenido"})]):t._e(),n("div",{staticClass:"hidden-slot"},[t._t("default")],2)])},r=[],a=(n("7db0"),n("d3b7"),n("f480")),o={name:"ImagenInfograficaB",mixins:[a["a"]],data:function(){return{firstSelection:!1,showIndicator:!0}},computed:{selectedItem:function(){var t=this;return this.elements.find((function(e){return e.id===t.selected}))},firstElement:function(){return this.elements.length&&this.elements[0]}},watch:{selected:function(){this.showIndicator&&(this.showIndicator=!1)}},methods:{getImageHeight:function(){var t=this.$refs["img-ref-"+this.mainId];if(t)return{"min-height":t.clientHeight+"px"}}}},s=o,c=n("2877"),f=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=f.exports},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),f=n("7156"),u=n("c04e"),d=n("d039"),l=n("7c73"),m=n("241c").f,h=n("06cf").f,b=n("9bf2").f,p=n("58a8").trim,g="Number",v=r[g],_=v.prototype,y=c(l(_))==g,I=function(t){var e,n,i,r,a,o,s,c,f=u(t,!1);if("string"==typeof f&&f.length>2)if(f=p(f),e=f.charCodeAt(0),43===e||45===e){if(n=f.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+f}for(a=f.slice(2),o=a.length,s=0;s<o;s++)if(c=a.charCodeAt(s),c<48||c>r)return NaN;return parseInt(a,i)}return+f};if(a(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(y?d((function(){_.valueOf.call(n)})):c(n)!=g)?f(new v(I(e)),n,E):I(e)},O=i?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;O.length>S;S++)s(v,w=O[S])&&!s(E,w)&&b(E,w,h(v,w));E.prototype=_,_.constructor=E,o(r,g,E)}},b64b:function(t,e,n){var i=n("23e7"),r=n("7b0b"),a=n("df75"),o=n("d039"),s=o((function(){a(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(t){return a(r(t))}})},dbb4:function(t,e,n){var i=n("23e7"),r=n("83ab"),a=n("56ef"),o=n("fc6a"),s=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),r=s.f,f=a(i),u={},d=0;while(f.length>d)n=r(i,e=f[d++]),void 0!==n&&c(u,e,n);return u}})},e439:function(t,e,n){var i=n("23e7"),r=n("d039"),a=n("fc6a"),o=n("06cf").f,s=n("83ab"),c=r((function(){o(1)})),f=!s||c;i({target:"Object",stat:!0,forced:f,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},efec:function(t,e,n){var i=n("9112"),r=n("51eb"),a=n("b622"),o=a("toPrimitive"),s=Date.prototype;o in s||i(s,o,r)},f480:function(t,e,n){"use strict";var i=n("5530");n("d81d"),n("a15b");e["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var t=this;this.$nextTick((function(){t.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var t=this.elements.map((function(t){return t.id})),e=t.indexOf(this.selected);if(e<0)return{};var n={};return 0===e?n.next=t[e+1]:(e+1===t.length||(n.next=t[e+1]),n.back=t[e-1]),n}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var t=this;this.$nextTick((function(){t.getStateStr()!=t.stateStr&&t.crearElementos()}))},methods:{crearElementos:function(){var t=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(e,n){var r=e.data&&e.data.attrs?e.data.attrs:[];return Object(i["a"])({id:t.mainId+n+1,elm:e.elm},r)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(t){return t.elm.outerHTML})).join("")},domUpdated:function(){var t=this;this.rendered=!1,setTimeout((function(){t.rendered=!0}),100)}}}}}]);
//# sourceMappingURL=chunk-dfda403c.5da57e26.js.map