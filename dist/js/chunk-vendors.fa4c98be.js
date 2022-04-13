(self["webpackChunkquestions_room"]=self["webpackChunkquestions_room"]||[]).push([[998],{1001:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:l}}n.d(t,{Z:function(){return i}})},9662:function(e,t,n){var i=n(7854),r=n(614),s=n(6330),o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not a function")}},6077:function(e,t,n){var i=n(7854),r=n(614),s=i.String,o=i.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},5787:function(e,t,n){var i=n(7854),r=n(7976),s=i.TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},9670:function(e,t,n){var i=n(7854),r=n(111),s=i.String,o=i.TypeError;e.exports=function(e){if(r(e))return e;throw o(s(e)+" is not an object")}},1318:function(e,t,n){var i=n(5656),r=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=i(t),l=s(c),u=r(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},206:function(e,t,n){var i=n(1702);e.exports=i([].slice)},4326:function(e,t,n){var i=n(1702),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},648:function(e,t,n){var i=n(7854),r=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),l=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=l(e),c))?n:u?o(t):"Object"==(i=o(t))&&s(t.callee)?"Arguments":i}},7741:function(e,t,n){var i=n(1702),r=i("".replace),s=function(e){return String(Error(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=r(e,o,"");return e}},9920:function(e,t,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=r(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(e,h)||n&&i(n,h)||c(e,h,l(t,h))}}},8880:function(e,t,n){var i=n(9781),r=n(3070),s=n(9114);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var i=n(7293);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(e,t,n){var i=n(8113);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},5268:function(e,t,n){var i=n(4326),r=n(7854);e.exports="process"==i(r.process)},8113:function(e,t,n){var i=n(5005);e.exports=i("navigator","userAgent")||""},7392:function(e,t,n){var i,r,s=n(7854),o=n(8113),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var i=n(7293),r=n(9114);e.exports=!i((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},2109:function(e,t,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,_=e.global,g=e.stat;if(u=_?i:g?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=r(u,h),d=p&&p.value):d=u[h],n=l(_?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var i=n(4374),r=Function.prototype,s=r.apply,o=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(e,t,n){var i=n(1702),r=n(9662),s=n(4374),o=i(i.bind);e.exports=function(e,t){return r(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var i=n(7293);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var i=n(4374),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(e,t,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(e,t,n){var i=n(4374),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);e.exports=i?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var i=n(7854),r=n(614),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},8173:function(e,t,n){var i=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:i(n)}},7854:function(e,t,n){var i=function(e){return e&&e.Math==Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var i=n(5005);e.exports=i("document","documentElement")},4664:function(e,t,n){var i=n(9781),r=n(7293),s=n(317);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var i=n(7854),r=n(1702),s=n(7293),o=n(4326),a=i.Object,c=r("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var i=n(614),r=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var i=n(111),r=n(8880);e.exports=function(e,t){i(t)&&"cause"in t&&r(e,"cause",t.cause)}},9909:function(e,t,n){var i,r,s,o=n(8536),a=n(7854),c=n(1702),l=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",_=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?r(e):i(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=r(t)).type!==e)throw _("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new g),w=c(b.get),C=c(b.has),E=c(b.set);i=function(e,t){if(C(b,e))throw new _(m);return t.facade=e,E(b,e,t),t},r=function(e){return w(b,e)||{}},s=function(e){return C(b,e)}}else{var I=f("state");p[I]=!0,i=function(e,t){if(h(e,I))throw new _(m);return t.facade=e,u(e,I,t),t},r=function(e){return h(e,I)?e[I]:{}},s=function(e){return h(e,I)}}e.exports={set:i,get:r,has:s,enforce:v,getterFor:y}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var i=n(614);e.exports=function(e){return"object"==typeof e?null!==e:i(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var i=n(7854),r=n(5005),s=n(614),o=n(7976),a=n(3307),c=i.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var i=n(7466);e.exports=function(e){return i(e.length)}},133:function(e,t,n){var i=n(7392),r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(e,t,n){var i=n(7854),r=n(614),s=n(2788),o=i.WeakMap;e.exports=r(o)&&/native code/.test(s(o))},6277:function(e,t,n){var i=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},3070:function(e,t,n){var i=n(7854),r=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),l=i.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=r?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var i=h(e,t);i&&i[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:i[f],enumerable:d in n?n[d]:i[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return u(e,t,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!r(s.f,e,t),e[t])}},8006:function(e,t,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var i=n(1702);e.exports=i({}.isPrototypeOf)},6324:function(e,t,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);e.exports=function(e,t){var n,i=s(e),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(t.length>l)r(i,n=t[l++])&&(~o(u,n)||c(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var i=n(1702),r=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},2140:function(e,t,n){var i=n(7854),r=n(6916),s=n(614),o=n(111),a=i.TypeError;e.exports=function(e,t){var n,i;if("string"===t&&s(n=e.toString)&&!o(i=r(n,e)))return i;if(s(n=e.valueOf)&&!o(i=r(n,e)))return i;if("string"!==t&&s(n=e.toString)&&!o(i=r(n,e)))return i;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),c=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1320:function(e,t,n){var i=n(7854),r=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),l=n(9909),u=n(6530).CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,_=c&&void 0!==c.name?c.name:t;r(n)&&("Symbol("===String(_).slice(0,7)&&(_="["+String(_).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==_)&&o(n,"name",_),l=d(n),l.source||(l.source=f.join("string"==typeof _?_:""))),e!==i?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},4488:function(e,t,n){var i=n(7854),r=i.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},3505:function(e,t,n){var i=n(7854),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},6200:function(e,t,n){var i=n(2309),r=n(9711),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},5465:function(e,t,n){var i=n(7854),r=n(3505),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},2309:function(e,t,n){var i=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},261:function(e,t,n){var i,r,s,o,a=n(7854),c=n(2104),l=n(9974),u=n(614),h=n(2597),d=n(7293),f=n(490),p=n(206),m=n(317),_=n(8053),g=n(6833),v=n(5268),y=a.setImmediate,b=a.clearImmediate,w=a.process,C=a.Dispatch,E=a.Function,I=a.MessageChannel,T=a.String,k=0,S={},O="onreadystatechange";try{i=a.location}catch(R){}var N=function(e){if(h(S,e)){var t=S[e];delete S[e],t()}},A=function(e){return function(){N(e)}},x=function(e){N(e.data)},P=function(e){a.postMessage(T(e),i.protocol+"//"+i.host)};y&&b||(y=function(e){_(arguments.length,1);var t=u(e)?e:E(e),n=p(arguments,1);return S[++k]=function(){c(t,void 0,n)},r(k),k},b=function(e){delete S[e]},v?r=function(e){w.nextTick(A(e))}:C&&C.now?r=function(e){C.now(A(e))}:I&&!g?(s=new I,o=s.port2,s.port1.onmessage=x,r=l(o.postMessage,o)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!d(P)?(r=P,a.addEventListener("message",x,!1)):r=O in m("script")?function(e){f.appendChild(m("script"))[O]=function(){f.removeChild(this),N(e)}}:function(e){setTimeout(A(e),0)}),e.exports={set:y,clear:b}},1400:function(e,t,n){var i=n(9303),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},5656:function(e,t,n){var i=n(8361),r=n(4488);e.exports=function(e){return i(r(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var i=+e;return i!==i||0===i?0:(i>0?n:t)(i)}},7466:function(e,t,n){var i=n(9303),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},7908:function(e,t,n){var i=n(7854),r=n(4488),s=i.Object;e.exports=function(e){return s(r(e))}},7593:function(e,t,n){var i=n(7854),r=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),l=n(5112),u=i.TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,i=a(e,h);if(i){if(void 0===t&&(t="default"),n=r(i,e,t),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var i=n(7593),r=n(2190);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},1694:function(e,t,n){var i=n(5112),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var i=n(7854),r=n(648),s=i.String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e,t,n){var i=n(7854),r=i.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:function(e,t,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},3307:function(e,t,n){var i=n(133);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var i=n(9781),r=n(7293);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e,t,n){var i=n(7854),r=i.TypeError;e.exports=function(e,t){if(e<t)throw r("Not enough arguments");return e}},5112:function(e,t,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),l=r("wks"),u=i.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&s(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},9191:function(e,t,n){"use strict";var i=n(5005),r=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),l=n(9587),u=n(6277),h=n(8340),d=n(7741),f=n(2914),p=n(1913);e.exports=function(e,t,n,m){var _=m?2:1,g=e.split("."),v=g[g.length-1],y=i.apply(null,g);if(y){var b=y.prototype;if(!p&&r(b,"cause")&&delete b.cause,!n)return y;var w=i("Error"),C=t((function(e,t){var n=u(m?t:e,void 0),i=m?new y(e):new y;return void 0!==n&&s(i,"message",n),f&&s(i,"stack",d(i.stack,2)),this&&o(b,this)&&l(i,this,C),arguments.length>_&&h(i,arguments[_]),i}));if(C.prototype=b,"Error"!==v&&(a?a(C,w):c(C,w,{name:!0})),c(C,y),!p)try{b.name!==v&&s(b,"name",v),b.constructor=C}catch(E){}return C}}},1703:function(e,t,n){var i=n(2109),r=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=r[a],l=7!==Error("e",{cause:7}).cause,u=function(e,t){var n={};n[e]=o(e,t,l),i({global:!0,forced:l},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,l),i({target:a,stat:!0,forced:l},n)}};u("Error",(function(e){return function(t){return s(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),u("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},2801:function(e,t,n){"use strict";var i=n(2109),r=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),l=n(9587),u=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",m=r("Error"),_=r(p),g=function(){c(this,v);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),i=new _(t,n),r=m(t);return r.name=p,o(i,"stack",s(1,d(r.stack,1))),l(i,this,g),i},v=g.prototype=_.prototype,y="stack"in m(p),b="stack"in new _(1,2),w=y&&!b;i({global:!0,forced:f||w},{DOMException:w?g:_});var C=r(p),E=C.prototype;if(E.constructor!==C)for(var I in f||o(E,"constructor",s(1,C)),h)if(a(h,I)){var T=h[I],k=T.s;a(C,k)||o(C,k,s(6,T.c))}},4633:function(e,t,n){var i=n(2109),r=n(7854),s=n(261),o=!r.setImmediate||!r.clearImmediate;i({global:!0,bind:!0,enumerable:!0,forced:o},{setImmediate:s.set,clearImmediate:s.clear})},3536:function(e,t,n){"use strict";n.d(t,{BH:function(){return m},DV:function(){return L},GJ:function(){return R},L:function(){return u},LL:function(){return k},Pz:function(){return A},UI:function(){return $},US:function(){return c},X3:function(){return ie},Yr:function(){return w},ZR:function(){return T},b$:function(){return y},cI:function(){return N},dS:function(){return G},eu:function(){return E},g5:function(){return s},gK:function(){return Y},gQ:function(){return z},h$:function(){return l},hl:function(){return C},hu:function(){return r},m9:function(){return J},ne:function(){return W},p$:function(){return d},pd:function(){return H},r3:function(){return D},ru:function(){return v},tV:function(){return h},uI:function(){return g},ug:function(){return X},vZ:function(){return F},w1:function(){return b},w9:function(){return P},xO:function(){return U},xb:function(){return M},z$:function(){return _},zd:function(){return q}});n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const l=r<e.length,u=l?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==u){const e=c<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=o(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function C(){return"object"===typeof indexedDB}function E(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?S(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new T(i,o,n);return a}}function S(e,t){return e.replace(O,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return JSON.parse(e)}function A(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=N(h(s[0])||""),n=N(h(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},P=function(e){const t=x(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},R=function(e){const t=x(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function F(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(j(n)&&j(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function H(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function W(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=B(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=K),void 0===i.error&&(i.error=K),void 0===i.complete&&(i.complete=K);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t){return new Promise(((n,i)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class Z{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new ee(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new te(this._db.createObjectStore(e,t))}close(){this._db.close()}}class ee{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new te(this._transaction.objectStore(e))}}class te{constructor(e){this._store=e}index(e){return new ne(this._store.index(e))}createIndex(e,t,n){return new ne(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return Q(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return Q(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return Q(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Q(e,"Error clearing IndexedDB object store")}}class ne{constructor(e){this._index=e}get(e){const t=this._index.get(e);return Q(t,"Error reading from IndexedDB")}}function ie(e,t,n){return new Promise(((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{i(new Z(e.target.result))},s.onerror=e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new Z(s.result),e.oldVersion,e.newVersion,new ee(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}}))}},6365:function(e,t,n){"use strict";n.r(t),n.d(t,{afterMain:function(){return C},afterRead:function(){return y},afterWrite:function(){return T},applyStyles:function(){return D},arrow:function(){return re},auto:function(){return a},basePlacements:function(){return c},beforeMain:function(){return b},beforeRead:function(){return g},beforeWrite:function(){return E},bottom:function(){return r},clippingParents:function(){return h},computeStyles:function(){return ue},createPopper:function(){return at},createPopperBase:function(){return st},createPopperLite:function(){return lt},detectOverflow:function(){return xe},end:function(){return u},eventListeners:function(){return fe},flip:function(){return Le},hide:function(){return je},left:function(){return o},main:function(){return w},modifierPhases:function(){return k},offset:function(){return He},placements:function(){return _},popper:function(){return f},popperGenerator:function(){return rt},popperOffsets:function(){return We},preventOverflow:function(){return Ke},read:function(){return v},reference:function(){return p},right:function(){return s},start:function(){return l},top:function(){return i},variationPlacements:function(){return m},viewport:function(){return d},write:function(){return I}});var i="top",r="bottom",s="right",o="left",a="auto",c=[i,r,s,o],l="start",u="end",h="clippingParents",d="viewport",f="popper",p="reference",m=c.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+u])}),[]),_=[].concat(c,[a]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+u])}),[]),g="beforeRead",v="read",y="afterRead",b="beforeMain",w="main",C="afterMain",E="beforeWrite",I="write",T="afterWrite",k=[g,v,y,b,w,C,E,I,T];function S(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function N(e){var t=O(e).Element;return e instanceof t||e instanceof Element}function A(e){var t=O(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function x(e){if("undefined"===typeof ShadowRoot)return!1;var t=O(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function P(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];A(r)&&S(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))}function R(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});A(i)&&S(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}}var D={name:"applyStyles",enabled:!0,phase:"write",fn:P,effect:R,requires:["computeStyles"]};function L(e){return e.split("-")[0]}var M=Math.max,$=Math.min,F=Math.round;function j(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,r=1;if(A(e)&&t){var s=e.offsetHeight,o=e.offsetWidth;o>0&&(i=F(n.width)/o||1),s>0&&(r=F(n.height)/s||1)}return{width:n.width/i,height:n.height/r,top:n.top/r,right:n.right/i,bottom:n.bottom/r,left:n.left/i,x:n.left/i,y:n.top/r}}function U(e){var t=j(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&x(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function H(e){return O(e).getComputedStyle(e)}function z(e){return["table","td","th"].indexOf(S(e))>=0}function W(e){return((N(e)?e.ownerDocument:e.document)||window.document).documentElement}function V(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||W(e)}function B(e){return A(e)&&"fixed"!==H(e).position?e.offsetParent:null}function K(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&A(e)){var i=H(e);if("fixed"===i.position)return null}var r=V(e);x(r)&&(r=r.host);while(A(r)&&["html","body"].indexOf(S(r))<0){var s=H(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function Y(e){var t=O(e),n=B(e);while(n&&z(n)&&"static"===H(n).position)n=B(n);return n&&("html"===S(n)||"body"===S(n)&&"static"===H(n).position)?t:n||K(e)||t}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e,t,n){return M(e,$(t,n))}function J(e,t,n){var i=X(e,t,n);return i>n?n:i}function Q(){return{top:0,right:0,bottom:0,left:0}}function Z(e){return Object.assign({},Q(),e)}function ee(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var te=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Z("number"!==typeof e?e:ee(e,c))};function ne(e){var t,n=e.state,a=e.name,c=e.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=L(n.placement),d=G(h),f=[o,s].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var m=te(c.padding,n),_=U(l),g="y"===d?i:o,v="y"===d?r:s,y=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],b=u[d]-n.rects.reference[d],w=Y(l),C=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,E=y/2-b/2,I=m[g],T=C-_[p]-m[v],k=C/2-_[p]/2+E,S=X(I,k,T),O=d;n.modifiersData[a]=(t={},t[O]=S,t.centerOffset=S-k,t)}}function ie(e){var t=e.state,n=e.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r),r))&&q(t.elements.popper,r)&&(t.elements.arrow=r)}var re={name:"arrow",enabled:!0,phase:"main",fn:ne,effect:ie,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(e){return e.split("-")[1]}var oe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t=e.x,n=e.y,i=window,r=i.devicePixelRatio||1;return{x:F(t*r)/r||0,y:F(n*r)/r||0}}function ce(e){var t,n=e.popper,a=e.popperRect,c=e.placement,l=e.variation,h=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,_=e.isFixed,g=h.x,v=void 0===g?0:g,y=h.y,b=void 0===y?0:y,w="function"===typeof m?m({x:v,y:b}):{x:v,y:b};v=w.x,b=w.y;var C=h.hasOwnProperty("x"),E=h.hasOwnProperty("y"),I=o,T=i,k=window;if(p){var S=Y(n),N="clientHeight",A="clientWidth";if(S===O(n)&&(S=W(n),"static"!==H(S).position&&"absolute"===d&&(N="scrollHeight",A="scrollWidth")),S=S,c===i||(c===o||c===s)&&l===u){T=r;var x=_&&S===k&&k.visualViewport?k.visualViewport.height:S[N];b-=x-a.height,b*=f?1:-1}if(c===o||(c===i||c===r)&&l===u){I=s;var P=_&&S===k&&k.visualViewport?k.visualViewport.width:S[A];v-=P-a.width,v*=f?1:-1}}var R,D=Object.assign({position:d},p&&oe),L=!0===m?ae({x:v,y:b}):{x:v,y:b};return v=L.x,b=L.y,f?Object.assign({},D,(R={},R[T]=E?"0":"",R[I]=C?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",R)):Object.assign({},D,(t={},t[T]=E?b+"px":"",t[I]=C?v+"px":"",t.transform="",t))}function le(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:L(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:le,data:{}},he={passive:!0};function de(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,c=O(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,he)})),a&&c.addEventListener("resize",n.update,he),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,he)})),a&&c.removeEventListener("resize",n.update,he)}}var fe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:de,data:{}},pe={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,(function(e){return pe[e]}))}var _e={start:"end",end:"start"};function ge(e){return e.replace(/start|end/g,(function(e){return _e[e]}))}function ve(e){var t=O(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function ye(e){return j(W(e)).left+ve(e).scrollLeft}function be(e){var t=O(e),n=W(e),i=t.visualViewport,r=n.clientWidth,s=n.clientHeight,o=0,a=0;return i&&(r=i.width,s=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=i.offsetLeft,a=i.offsetTop)),{width:r,height:s,x:o+ye(e),y:a}}function we(e){var t,n=W(e),i=ve(e),r=null==(t=e.ownerDocument)?void 0:t.body,s=M(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+ye(e),c=-i.scrollTop;return"rtl"===H(r||n).direction&&(a+=M(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ce(e){var t=H(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Ee(e){return["html","body","#document"].indexOf(S(e))>=0?e.ownerDocument.body:A(e)&&Ce(e)?e:Ee(V(e))}function Ie(e,t){var n;void 0===t&&(t=[]);var i=Ee(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),s=O(i),o=r?[s].concat(s.visualViewport||[],Ce(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(Ie(V(o)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ke(e){var t=j(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Se(e,t){return t===d?Te(be(e)):N(t)?ke(t):Te(we(W(e)))}function Oe(e){var t=Ie(V(e)),n=["absolute","fixed"].indexOf(H(e).position)>=0,i=n&&A(e)?Y(e):e;return N(i)?t.filter((function(e){return N(e)&&q(e,i)&&"body"!==S(e)})):[]}function Ne(e,t,n){var i="clippingParents"===t?Oe(e):[].concat(t),r=[].concat(i,[n]),s=r[0],o=r.reduce((function(t,n){var i=Se(e,n);return t.top=M(i.top,t.top),t.right=$(i.right,t.right),t.bottom=$(i.bottom,t.bottom),t.left=M(i.left,t.left),t}),Se(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ae(e){var t,n=e.reference,a=e.element,c=e.placement,h=c?L(c):null,d=c?se(c):null,f=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2;switch(h){case i:t={x:f,y:n.y-a.height};break;case r:t={x:f,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:p};break;case o:t={x:n.x-a.width,y:p};break;default:t={x:n.x,y:n.y}}var m=h?G(h):null;if(null!=m){var _="y"===m?"height":"width";switch(d){case l:t[m]=t[m]-(n[_]/2-a[_]/2);break;case u:t[m]=t[m]+(n[_]/2-a[_]/2);break;default:}}return t}function xe(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=void 0===o?e.placement:o,l=n.boundary,u=void 0===l?h:l,m=n.rootBoundary,_=void 0===m?d:m,g=n.elementContext,v=void 0===g?f:g,y=n.altBoundary,b=void 0!==y&&y,w=n.padding,C=void 0===w?0:w,E=Z("number"!==typeof C?C:ee(C,c)),I=v===f?p:f,T=e.rects.popper,k=e.elements[b?I:v],S=Ne(N(k)?k:k.contextElement||W(e.elements.popper),u,_),O=j(e.elements.reference),A=Ae({reference:O,element:T,strategy:"absolute",placement:a}),x=Te(Object.assign({},T,A)),P=v===f?x:O,R={top:S.top-P.top+E.top,bottom:P.bottom-S.bottom+E.bottom,left:S.left-P.left+E.left,right:P.right-S.right+E.right},D=e.modifiersData.offset;if(v===f&&D){var L=D[a];Object.keys(R).forEach((function(e){var t=[s,r].indexOf(e)>=0?1:-1,n=[i,r].indexOf(e)>=0?"y":"x";R[e]+=L[n]*t}))}return R}function Pe(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=void 0===l?_:l,h=se(i),d=h?a?m:m.filter((function(e){return se(e)===h})):c,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=xe(e,{placement:n,boundary:r,rootBoundary:s,padding:o})[L(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Re(e){if(L(e)===a)return[];var t=me(e);return[ge(e),t,ge(t)]}function De(e){var t=e.state,n=e.options,c=e.name;if(!t.modifiersData[c]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,_=n.boundary,g=n.rootBoundary,v=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,C=t.options.placement,E=L(C),I=E===C,T=p||(I||!b?[me(C)]:Re(C)),k=[C].concat(T).reduce((function(e,n){return e.concat(L(n)===a?Pe(t,{placement:n,boundary:_,rootBoundary:g,padding:m,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),S=t.rects.reference,O=t.rects.popper,N=new Map,A=!0,x=k[0],P=0;P<k.length;P++){var R=k[P],D=L(R),M=se(R)===l,$=[i,r].indexOf(D)>=0,F=$?"width":"height",j=xe(t,{placement:R,boundary:_,rootBoundary:g,altBoundary:v,padding:m}),U=$?M?s:o:M?r:i;S[F]>O[F]&&(U=me(U));var q=me(U),H=[];if(h&&H.push(j[D]<=0),f&&H.push(j[U]<=0,j[q]<=0),H.every((function(e){return e}))){x=R,A=!1;break}N.set(R,H)}if(A)for(var z=b?3:1,W=function(e){var t=k.find((function(t){var n=N.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return x=t,"break"},V=z;V>0;V--){var B=W(V);if("break"===B)break}t.placement!==x&&(t.modifiersData[c]._skip=!0,t.placement=x,t.reset=!0)}}var Le={name:"flip",enabled:!0,phase:"main",fn:De,requiresIfExists:["offset"],data:{_skip:!1}};function Me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function $e(e){return[i,s,r,o].some((function(t){return e[t]>=0}))}function Fe(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=xe(t,{elementContext:"reference"}),a=xe(t,{altBoundary:!0}),c=Me(o,i),l=Me(a,r,s),u=$e(c),h=$e(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var je={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Fe};function Ue(e,t,n){var r=L(e),a=[o,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*a,[o,s].indexOf(r)>=0?{x:u,y:l}:{x:l,y:u}}function qe(e){var t=e.state,n=e.options,i=e.name,r=n.offset,s=void 0===r?[0,0]:r,o=_.reduce((function(e,n){return e[n]=Ue(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=o}var He={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qe};function ze(e){var t=e.state,n=e.name;t.modifiersData[n]=Ae({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var We={name:"popperOffsets",enabled:!0,phase:"read",fn:ze,data:{}};function Ve(e){return"x"===e?"y":"x"}function Be(e){var t=e.state,n=e.options,a=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,_=n.padding,g=n.tether,v=void 0===g||g,y=n.tetherOffset,b=void 0===y?0:y,w=xe(t,{boundary:f,rootBoundary:p,padding:_,altBoundary:m}),C=L(t.placement),E=se(t.placement),I=!E,T=G(C),k=Ve(T),S=t.modifiersData.popperOffsets,O=t.rects.reference,N=t.rects.popper,A="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,x="number"===typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(S){if(u){var D,F="y"===T?i:o,j="y"===T?r:s,q="y"===T?"height":"width",H=S[T],z=H+w[F],W=H-w[j],V=v?-N[q]/2:0,B=E===l?O[q]:N[q],K=E===l?-N[q]:-O[q],Z=t.elements.arrow,ee=v&&Z?U(Z):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Q(),ne=te[F],ie=te[j],re=X(0,O[q],ee[q]),oe=I?O[q]/2-V-re-ne-x.mainAxis:B-re-ne-x.mainAxis,ae=I?-O[q]/2+V+re+ie+x.mainAxis:K+re+ie+x.mainAxis,ce=t.elements.arrow&&Y(t.elements.arrow),le=ce?"y"===T?ce.clientTop||0:ce.clientLeft||0:0,ue=null!=(D=null==P?void 0:P[T])?D:0,he=H+oe-ue-le,de=H+ae-ue,fe=X(v?$(z,he):z,H,v?M(W,de):W);S[T]=fe,R[T]=fe-H}if(d){var pe,me="x"===T?i:o,_e="x"===T?r:s,ge=S[k],ve="y"===k?"height":"width",ye=ge+w[me],be=ge-w[_e],we=-1!==[i,o].indexOf(C),Ce=null!=(pe=null==P?void 0:P[k])?pe:0,Ee=we?ye:ge-O[ve]-N[ve]-Ce+x.altAxis,Ie=we?ge+O[ve]+N[ve]-Ce-x.altAxis:be,Te=v&&we?J(Ee,ge,Ie):X(v?Ee:ye,ge,v?Ie:be);S[k]=Te,R[k]=Te-ge}t.modifiersData[a]=R}}var Ke={name:"preventOverflow",enabled:!0,phase:"main",fn:Be,requiresIfExists:["offset"]};function Ye(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ge(e){return e!==O(e)&&A(e)?Ye(e):ve(e)}function Xe(e){var t=e.getBoundingClientRect(),n=F(t.width)/e.offsetWidth||1,i=F(t.height)/e.offsetHeight||1;return 1!==n||1!==i}function Je(e,t,n){void 0===n&&(n=!1);var i=A(t),r=A(t)&&Xe(t),s=W(t),o=j(e,r),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&(("body"!==S(t)||Ce(s))&&(a=Ge(t)),A(t)?(c=j(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=ye(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Qe(e){var t=new Map,n=new Set,i=[];function r(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),i}function Ze(e){var t=Qe(e);return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function et(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function tt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var nt={placement:"bottom",modifiers:[],strategy:"absolute"};function it(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function rt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,s=void 0===r?nt:r;return function(e,t,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},nt,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:N(e)?Ie(e):e.contextElement?Ie(e.contextElement):[],popper:Ie(t)};var a=Ze(tt([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(e){return e.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var e=r.elements,t=e.reference,n=e.popper;if(it(t,n)){r.rects={reference:Je(t,Y(n),"fixed"===r.options.strategy),popper:U(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(r=o({state:r,options:u,name:h,instance:c})||r)}else r.reset=!1,i=-1}}},update:et((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){u(),a=!0}};if(!it(e,t))return c;function l(){r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:r,name:t,instance:c,options:i}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var st=rt(),ot=[fe,We,ue,D,He,Le,Ke,re,je],at=rt({defaultModifiers:ot}),ct=[fe,We,ue,D],lt=rt({defaultModifiers:ct})},1462:function(e,t,n){n(1703),
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,i){e.exports=i(n(6365))}(0,(function(e){"use strict";function t(e){if(e&&e.__esModule)return e;const t=Object.create(null);if(e)for(const n in e)if("default"!==n){const i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}const n=t(e),i=1e6,r=1e3,s="transitionend",o=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{do{e+=Math.floor(Math.random()*i)}while(document.getElementById(e));return e},c=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},l=e=>{const t=c(e);return t&&document.querySelector(t)?t:null},u=e=>{const t=c(e);return t?document.querySelector(t):null},h=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*r):0},d=e=>{e.dispatchEvent(new Event(s))},f=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),p=e=>f(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,m=(e,t,n)=>{Object.keys(n).forEach((i=>{const r=n[i],s=t[i],a=s&&f(s)?"element":o(s);if(!new RegExp(r).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)}))},_=e=>!(!f(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),g=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),v=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?v(e.parentNode):null},y=()=>{},b=e=>{e.offsetHeight},w=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},C=[],E=e=>{"loading"===document.readyState?(C.length||document.addEventListener("DOMContentLoaded",(()=>{C.forEach((e=>e()))})),C.push(e)):e()},I=()=>"rtl"===document.documentElement.dir,T=e=>{E((()=>{const t=w();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},k=e=>{"function"===typeof e&&e()},S=(e,t,n=!0)=>{if(!n)return void k(e);const i=5,r=h(t)+i;let o=!1;const a=({target:n})=>{n===t&&(o=!0,t.removeEventListener(s,a),k(e))};t.addEventListener(s,a),setTimeout((()=>{o||d(t)}),r)},O=(e,t,n,i)=>{let r=e.indexOf(t);if(-1===r)return e[!n&&i?e.length-1:0];const s=e.length;return r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))]},N=/[^.]*(?=\..*)\.|.*/,A=/\..*/,x=/::\d+$/,P={};let R=1;const D={mouseenter:"mouseover",mouseleave:"mouseout"},L=/^(mouseenter|mouseleave)/i,M=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function $(e,t){return t&&`${t}::${R++}`||e.uidEvent||R++}function F(e){const t=$(e);return e.uidEvent=t,P[t]=P[t]||{},P[t]}function j(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&K.off(e,i.type,t),t.apply(e,[i])}}function U(e,t,n){return function i(r){const s=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return r.delegateTarget=o,i.oneOff&&K.off(e,r.type,t,n),n.apply(o,[r]);return null}}function q(e,t,n=null){const i=Object.keys(e);for(let r=0,s=i.length;r<s;r++){const s=e[i[r]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function H(e,t,n){const i="string"===typeof t,r=i?n:t;let s=B(e);const o=M.has(s);return o||(s=e),[i,r,s]}function z(e,t,n,i,r){if("string"!==typeof t||!e)return;if(n||(n=i,i=null),L.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i?i=e(i):n=e(n)}const[s,o,a]=H(t,n,i),c=F(e),l=c[a]||(c[a]={}),u=q(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=$(o,t.replace(N,"")),d=s?U(e,n,i):j(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=r,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function W(e,t,n,i,r){const s=q(t[n],i,r);s&&(e.removeEventListener(n,s,Boolean(r)),delete t[n][s.uidEvent])}function V(e,t,n,i){const r=t[n]||{};Object.keys(r).forEach((s=>{if(s.includes(i)){const i=r[s];W(e,t,n,i.originalHandler,i.delegationSelector)}}))}function B(e){return e=e.replace(A,""),D[e]||e}const K={on(e,t,n,i){z(e,t,n,i,!1)},one(e,t,n,i){z(e,t,n,i,!0)},off(e,t,n,i){if("string"!==typeof t||!e)return;const[r,s,o]=H(t,n,i),a=o!==t,c=F(e),l=t.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void W(e,c,o,s,r?n:null)}l&&Object.keys(c).forEach((n=>{V(e,c,n,t.slice(1))}));const u=c[o]||{};Object.keys(u).forEach((n=>{const i=n.replace(x,"");if(!a||t.includes(i)){const t=u[n];W(e,c,o,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!==typeof t||!e)return null;const i=w(),r=B(t),s=t!==r,o=M.has(r);let a,c=!0,l=!0,u=!1,h=null;return s&&i&&(a=i.Event(t,n),i(e).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(r,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((e=>{Object.defineProperty(h,e,{get(){return n[e]}})})),u&&h.preventDefault(),l&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},Y=new Map,G={set(e,t,n){Y.has(e)||Y.set(e,new Map);const i=Y.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(e,t){return Y.has(e)&&Y.get(e).get(t)||null},remove(e,t){if(!Y.has(e))return;const n=Y.get(e);n.delete(t),0===n.size&&Y.delete(e)}},X="5.1.3";class J{constructor(e){e=p(e),e&&(this._element=e,G.set(this._element,this.constructor.DATA_KEY,this))}dispose(){G.remove(this._element,this.constructor.DATA_KEY),K.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){S(e,t,n)}static getInstance(e){return G.get(p(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return X}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Q=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;K.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),g(this))return;const r=u(this)||this.closest(`.${i}`),s=e.getOrCreateInstance(r);s[t]()}))},Z="alert",ee="bs.alert",te=`.${ee}`,ne=`close${te}`,ie=`closed${te}`,re="fade",se="show";class oe extends J{static get NAME(){return Z}close(){const e=K.trigger(this._element,ne);if(e.defaultPrevented)return;this._element.classList.remove(se);const t=this._element.classList.contains(re);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),K.trigger(this._element,ie),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=oe.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(oe,"close"),T(oe);const ae="button",ce="bs.button",le=`.${ce}`,ue=".data-api",he="active",de='[data-bs-toggle="button"]',fe=`click${le}${ue}`;class pe extends J{static get NAME(){return ae}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(he))}static jQueryInterface(e){return this.each((function(){const t=pe.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function me(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function _e(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}K.on(document,fe,de,(e=>{e.preventDefault();const t=e.target.closest(de),n=pe.getOrCreateInstance(t);n.toggle()})),T(pe);const ge={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${_e(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${_e(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=me(e.dataset[n])})),t},getDataAttribute(e,t){return me(e.getAttribute(`data-bs-${_e(t)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},ve=3,ye={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let i=e.parentNode;while(i&&i.nodeType===Node.ELEMENT_NODE&&i.nodeType!==ve)i.matches(t)&&n.push(i),i=i.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!g(e)&&_(e)))}},be="carousel",we="bs.carousel",Ce=`.${we}`,Ee=".data-api",Ie="ArrowLeft",Te="ArrowRight",ke=500,Se=40,Oe={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Ne={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ae="next",xe="prev",Pe="left",Re="right",De={[Ie]:Re,[Te]:Pe},Le=`slide${Ce}`,Me=`slid${Ce}`,$e=`keydown${Ce}`,Fe=`mouseenter${Ce}`,je=`mouseleave${Ce}`,Ue=`touchstart${Ce}`,qe=`touchmove${Ce}`,He=`touchend${Ce}`,ze=`pointerdown${Ce}`,We=`pointerup${Ce}`,Ve=`dragstart${Ce}`,Be=`load${Ce}${Ee}`,Ke=`click${Ce}${Ee}`,Ye="carousel",Ge="active",Xe="slide",Je="carousel-item-end",Qe="carousel-item-start",Ze="carousel-item-next",et="carousel-item-prev",tt="pointer-event",nt=".active",it=".active.carousel-item",rt=".carousel-item",st=".carousel-item img",ot=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",ct="[data-bs-target]",lt="[data-bs-slide], [data-bs-slide-to]",ut='[data-bs-ride="carousel"]',ht="touch",dt="pen";class ft extends J{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=ye.findOne(at,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Oe}static get NAME(){return be}next(){this._slide(Ae)}nextWhenVisible(){!document.hidden&&_(this._element)&&this.next()}prev(){this._slide(xe)}pause(e){e||(this._isPaused=!0),ye.findOne(ot,this._element)&&(d(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=ye.findOne(it,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void K.one(this._element,Me,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?Ae:xe;this._slide(n,this._items[e])}_getConfig(e){return e={...Oe,...ge.getDataAttributes(this._element),..."object"===typeof e?e:{}},m(be,e,Ne),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Se)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Re:Pe)}_addEventListeners(){this._config.keyboard&&K.on(this._element,$e,(e=>this._keydown(e))),"hover"===this._config.pause&&(K.on(this._element,Fe,(e=>this.pause(e))),K.on(this._element,je,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===dt||e.pointerType===ht),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},i=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),ke+this._config.interval))};ye.find(st,this._element).forEach((e=>{K.on(e,Ve,(e=>e.preventDefault()))})),this._pointerEvent?(K.on(this._element,ze,(e=>t(e))),K.on(this._element,We,(e=>i(e))),this._element.classList.add(tt)):(K.on(this._element,Ue,(e=>t(e))),K.on(this._element,qe,(e=>n(e))),K.on(this._element,He,(e=>i(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=De[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?ye.find(rt,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Ae;return O(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),i=this._getItemIndex(ye.findOne(it,this._element));return K.trigger(this._element,Le,{relatedTarget:e,direction:t,from:i,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=ye.findOne(nt,this._indicatorsElement);t.classList.remove(Ge),t.removeAttribute("aria-current");const n=ye.find(ct,this._indicatorsElement);for(let i=0;i<n.length;i++)if(Number.parseInt(n[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[i].classList.add(Ge),n[i].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||ye.findOne(it,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),i=ye.findOne(it,this._element),r=this._getItemIndex(i),s=t||this._getItemByOrder(n,i),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Ae,l=c?Qe:Je,u=c?Ze:et,h=this._orderToDirection(n);if(s&&s.classList.contains(Ge))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!i||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{K.trigger(this._element,Me,{relatedTarget:s,direction:h,from:r,to:o})};if(this._element.classList.contains(Xe)){s.classList.add(u),b(s),i.classList.add(l),s.classList.add(l);const e=()=>{s.classList.remove(l,u),s.classList.add(Ge),i.classList.remove(Ge,u,l),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,i,!0)}else i.classList.remove(Ge),s.classList.add(Ge),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[Re,Pe].includes(e)?I()?e===Pe?xe:Ae:e===Pe?Ae:xe:e}_orderToDirection(e){return[Ae,xe].includes(e)?I()?e===xe?Pe:Re:e===xe?Re:Pe:e}static carouselInterface(e,t){const n=ft.getOrCreateInstance(e,t);let{_config:i}=n;"object"===typeof t&&(i={...i,...t});const r="string"===typeof t?t:i.slide;if("number"===typeof t)n.to(t);else if("string"===typeof r){if("undefined"===typeof n[r])throw new TypeError(`No method named "${r}"`);n[r]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){ft.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=u(this);if(!t||!t.classList.contains(Ye))return;const n={...ge.getDataAttributes(t),...ge.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),ft.carouselInterface(t,n),i&&ft.getInstance(t).to(i),e.preventDefault()}}K.on(document,Ke,lt,ft.dataApiClickHandler),K.on(window,Be,(()=>{const e=ye.find(ut);for(let t=0,n=e.length;t<n;t++)ft.carouselInterface(e[t],ft.getInstance(e[t]))})),T(ft);const pt="collapse",mt="bs.collapse",_t=`.${mt}`,gt=".data-api",vt={toggle:!0,parent:null},yt={toggle:"boolean",parent:"(null|element)"},bt=`show${_t}`,wt=`shown${_t}`,Ct=`hide${_t}`,Et=`hidden${_t}`,It=`click${_t}${gt}`,Tt="show",kt="collapse",St="collapsing",Ot="collapsed",Nt=`:scope .${kt} .${kt}`,At="collapse-horizontal",xt="width",Pt="height",Rt=".collapse.show, .collapse.collapsing",Dt='[data-bs-toggle="collapse"]';class Lt extends J{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=ye.find(Dt);for(let i=0,r=n.length;i<r;i++){const e=n[i],t=l(e),r=ye.find(t).filter((e=>e===this._element));null!==t&&r.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return vt}static get NAME(){return pt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=ye.find(Nt,this._config.parent);t=ye.find(Rt,this._config.parent).filter((t=>!e.includes(t)))}const n=ye.findOne(this._selector);if(t.length){const i=t.find((e=>n!==e));if(e=i?Lt.getInstance(i):null,e&&e._isTransitioning)return}const i=K.trigger(this._element,bt);if(i.defaultPrevented)return;t.forEach((t=>{n!==t&&Lt.getOrCreateInstance(t,{toggle:!1}).hide(),e||G.set(t,mt,null)}));const r=this._getDimension();this._element.classList.remove(kt),this._element.classList.add(St),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(kt,Tt),this._element.style[r]="",K.trigger(this._element,wt)},o=r[0].toUpperCase()+r.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=K.trigger(this._element,Ct);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,b(this._element),this._element.classList.add(St),this._element.classList.remove(kt,Tt);const n=this._triggerArray.length;for(let r=0;r<n;r++){const e=this._triggerArray[r],t=u(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(kt),K.trigger(this._element,Et)};this._element.style[t]="",this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Tt)}_getConfig(e){return e={...vt,...ge.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=p(e.parent),m(pt,e,yt),e}_getDimension(){return this._element.classList.contains(At)?xt:Pt}_initializeChildren(){if(!this._config.parent)return;const e=ye.find(Nt,this._config.parent);ye.find(Dt,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=u(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(Ot):e.classList.add(Ot),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=Lt.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}K.on(document,It,Dt,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=l(this),n=ye.find(t);n.forEach((e=>{Lt.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),T(Lt);const Mt="dropdown",$t="bs.dropdown",Ft=`.${$t}`,jt=".data-api",Ut="Escape",qt="Space",Ht="Tab",zt="ArrowUp",Wt="ArrowDown",Vt=2,Bt=new RegExp(`${zt}|${Wt}|${Ut}`),Kt=`hide${Ft}`,Yt=`hidden${Ft}`,Gt=`show${Ft}`,Xt=`shown${Ft}`,Jt=`click${Ft}${jt}`,Qt=`keydown${Ft}${jt}`,Zt=`keyup${Ft}${jt}`,en="show",tn="dropup",nn="dropend",rn="dropstart",sn="navbar",on='[data-bs-toggle="dropdown"]',an=".dropdown-menu",cn=".navbar-nav",ln=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",un=I()?"top-end":"top-start",hn=I()?"top-start":"top-end",dn=I()?"bottom-end":"bottom-start",fn=I()?"bottom-start":"bottom-end",pn=I()?"left-start":"right-start",mn=I()?"right-start":"left-start",_n={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},gn={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class vn extends J{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return _n}static get DefaultType(){return gn}static get NAME(){return Mt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(g(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=K.trigger(this._element,Gt,e);if(t.defaultPrevented)return;const n=vn.getParentFromElement(this._element);this._inNavbar?ge.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(cn)&&[].concat(...document.body.children).forEach((e=>K.on(e,"mouseover",y))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(en),this._element.classList.add(en),K.trigger(this._element,Xt,e)}hide(){if(g(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=K.trigger(this._element,Kt,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>K.off(e,"mouseover",y))),this._popper&&this._popper.destroy(),this._menu.classList.remove(en),this._element.classList.remove(en),this._element.setAttribute("aria-expanded","false"),ge.removeDataAttribute(this._menu,"popper"),K.trigger(this._element,Yt,e))}_getConfig(e){if(e={...this.constructor.Default,...ge.getDataAttributes(this._element),...e},m(Mt,e,this.constructor.DefaultType),"object"===typeof e.reference&&!f(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Mt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if("undefined"===typeof n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:f(this._config.reference)?t=p(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const i=this._getPopperConfig(),r=i.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=n.createPopper(t,this._menu,i),r&&ge.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(en)}_getMenuElement(){return ye.next(this._element,an)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(nn))return pn;if(e.classList.contains(rn))return mn;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(tn)?t?hn:un:t?fn:dn}_detectNavbar(){return null!==this._element.closest(`.${sn}`)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ye.find(ln,this._menu).filter(_);n.length&&O(n,t,e===Wt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=vn.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Vt||"keyup"===e.type&&e.key!==Ht))return;const t=ye.find(on);for(let n=0,i=t.length;n<i;n++){const i=vn.getInstance(t[n]);if(!i||!1===i._config.autoClose)continue;if(!i._isShown())continue;const r={relatedTarget:i._element};if(e){const t=e.composedPath(),n=t.includes(i._menu);if(t.includes(i._element)||"inside"===i._config.autoClose&&!n||"outside"===i._config.autoClose&&n)continue;if(i._menu.contains(e.target)&&("keyup"===e.type&&e.key===Ht||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(r.clickEvent=e)}i._completeHide(r)}}static getParentFromElement(e){return u(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===qt||e.key!==Ut&&(e.key!==Wt&&e.key!==zt||e.target.closest(an)):!Bt.test(e.key))return;const t=this.classList.contains(en);if(!t&&e.key===Ut)return;if(e.preventDefault(),e.stopPropagation(),g(this))return;const n=this.matches(on)?this:ye.prev(this,on)[0],i=vn.getOrCreateInstance(n);if(e.key!==Ut)return e.key===zt||e.key===Wt?(t||i.show(),void i._selectMenuItem(e)):void(t&&e.key!==qt||vn.clearMenus());i.hide()}}K.on(document,Qt,on,vn.dataApiKeydownHandler),K.on(document,Qt,an,vn.dataApiKeydownHandler),K.on(document,Jt,vn.clearMenus),K.on(document,Zt,vn.clearMenus),K.on(document,Jt,on,(function(e){e.preventDefault(),vn.getOrCreateInstance(this).toggle()})),T(vn);const yn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bn=".sticky-top";class wn{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(yn,"paddingRight",(t=>t+e)),this._setElementAttributes(bn,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),r=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(r))}px`};this._applyManipulationCallback(e,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(yn,"paddingRight"),this._resetElementAttributes(bn,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&ge.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=ge.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(ge.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){f(e)?t(e):ye.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const Cn={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},En={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},In="backdrop",Tn="fade",kn="show",Sn=`mousedown.bs.${In}`;class On{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&b(this._getElement()),this._getElement().classList.add(kn),this._emulateAnimation((()=>{k(e)}))):k(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(kn),this._emulateAnimation((()=>{this.dispose(),k(e)}))):k(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Tn),this._element=e}return this._element}_getConfig(e){return e={...Cn,..."object"===typeof e?e:{}},e.rootElement=p(e.rootElement),m(In,e,En),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),K.on(this._getElement(),Sn,(()=>{k(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(K.off(this._element,Sn),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){S(e,this._getElement(),this._config.isAnimated)}}const Nn={trapElement:null,autofocus:!0},An={trapElement:"element",autofocus:"boolean"},xn="focustrap",Pn="bs.focustrap",Rn=`.${Pn}`,Dn=`focusin${Rn}`,Ln=`keydown.tab${Rn}`,Mn="Tab",$n="forward",Fn="backward";class jn{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),K.off(document,Rn),K.on(document,Dn,(e=>this._handleFocusin(e))),K.on(document,Ln,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,K.off(document,Rn))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const i=ye.focusableChildren(n);0===i.length?n.focus():this._lastTabNavDirection===Fn?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===Mn&&(this._lastTabNavDirection=e.shiftKey?Fn:$n)}_getConfig(e){return e={...Nn,..."object"===typeof e?e:{}},m(xn,e,An),e}}const Un="modal",qn="bs.modal",Hn=`.${qn}`,zn=".data-api",Wn="Escape",Vn={backdrop:!0,keyboard:!0,focus:!0},Bn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Kn=`hide${Hn}`,Yn=`hidePrevented${Hn}`,Gn=`hidden${Hn}`,Xn=`show${Hn}`,Jn=`shown${Hn}`,Qn=`resize${Hn}`,Zn=`click.dismiss${Hn}`,ei=`keydown.dismiss${Hn}`,ti=`mouseup.dismiss${Hn}`,ni=`mousedown.dismiss${Hn}`,ii=`click${Hn}${zn}`,ri="modal-open",si="fade",oi="show",ai="modal-static",ci=".modal.show",li=".modal-dialog",ui=".modal-body",hi='[data-bs-toggle="modal"]';class di extends J{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=ye.findOne(li,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new wn}static get Default(){return Vn}static get NAME(){return Un}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=K.trigger(this._element,Xn,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ri),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),K.on(this._dialog,ni,(()=>{K.one(this._element,ti,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=K.trigger(this._element,Kn);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(oi),K.off(this._element,Zn),K.off(this._dialog,ni),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>K.off(e,Hn))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new On({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new jn({trapElement:this._element})}_getConfig(e){return e={...Vn,...ge.getDataAttributes(this._element),..."object"===typeof e?e:{}},m(Un,e,Bn),e}_showElement(e){const t=this._isAnimated(),n=ye.findOne(ui,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&b(this._element),this._element.classList.add(oi);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,K.trigger(this._element,Jn,{relatedTarget:e})};this._queueCallback(i,this._dialog,t)}_setEscapeEvent(){this._isShown?K.on(this._element,ei,(e=>{this._config.keyboard&&e.key===Wn?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Wn||this._triggerBackdropTransition()})):K.off(this._element,ei)}_setResizeEvent(){this._isShown?K.on(window,Qn,(()=>this._adjustDialog())):K.off(window,Qn)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ri),this._resetAdjustments(),this._scrollBar.reset(),K.trigger(this._element,Gn)}))}_showBackdrop(e){K.on(this._element,Zn,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(si)}_triggerBackdropTransition(){const e=K.trigger(this._element,Yn);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:i}=this._element,r=n>document.documentElement.clientHeight;!r&&"hidden"===i.overflowY||t.contains(ai)||(r||(i.overflowY="hidden"),t.add(ai),this._queueCallback((()=>{t.remove(ai),r||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!I()||n&&!e&&I())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!I()||!n&&e&&I())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=di.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}K.on(document,ii,hi,(function(e){const t=u(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),K.one(t,Xn,(e=>{e.defaultPrevented||K.one(t,Gn,(()=>{_(this)&&this.focus()}))}));const n=ye.findOne(ci);n&&di.getInstance(n).hide();const i=di.getOrCreateInstance(t);i.toggle(this)})),Q(di),T(di);const fi="offcanvas",pi="bs.offcanvas",mi=`.${pi}`,_i=".data-api",gi=`load${mi}${_i}`,vi="Escape",yi={backdrop:!0,keyboard:!0,scroll:!1},bi={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},wi="show",Ci="offcanvas-backdrop",Ei=".offcanvas.show",Ii=`show${mi}`,Ti=`shown${mi}`,ki=`hide${mi}`,Si=`hidden${mi}`,Oi=`click${mi}${_i}`,Ni=`keydown.dismiss${mi}`,Ai='[data-bs-toggle="offcanvas"]';class xi extends J{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return fi}static get Default(){return yi}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=K.trigger(this._element,Ii,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new wn).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(wi);const n=()=>{this._config.scroll||this._focustrap.activate(),K.trigger(this._element,Ti,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=K.trigger(this._element,ki);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(wi),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new wn).reset(),K.trigger(this._element,Si)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...yi,...ge.getDataAttributes(this._element),..."object"===typeof e?e:{}},m(fi,e,bi),e}_initializeBackDrop(){return new On({className:Ci,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new jn({trapElement:this._element})}_addEventListeners(){K.on(this._element,Ni,(e=>{this._config.keyboard&&e.key===vi&&this.hide()}))}static jQueryInterface(e){return this.each((function(){const t=xi.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}K.on(document,Oi,Ai,(function(e){const t=u(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),g(this))return;K.one(t,Si,(()=>{_(this)&&this.focus()}));const n=ye.findOne(Ei);n&&n!==t&&xi.getInstance(n).hide();const i=xi.getOrCreateInstance(t);i.toggle(this)})),K.on(window,gi,(()=>ye.find(Ei).forEach((e=>xi.getOrCreateInstance(e).show())))),Q(xi),T(xi);const Pi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ri=/^aria-[\w-]*$/i,Di=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Li=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Mi=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Pi.has(n)||Boolean(Di.test(e.nodeValue)||Li.test(e.nodeValue));const i=t.filter((e=>e instanceof RegExp));for(let r=0,s=i.length;r<s;r++)if(i[r].test(n))return!0;return!1},$i={"*":["class","dir","id","lang","role",Ri],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Fi(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const i=new window.DOMParser,r=i.parseFromString(e,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const e=s[o],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const i=[].concat(...e.attributes),r=[].concat(t["*"]||[],t[n]||[]);i.forEach((t=>{Mi(t,r)||e.removeAttribute(t.nodeName)}))}return r.body.innerHTML}const ji="tooltip",Ui="bs.tooltip",qi=`.${Ui}`,Hi="bs-tooltip",zi=new Set(["sanitize","allowList","sanitizeFn"]),Wi={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Vi={AUTO:"auto",TOP:"top",RIGHT:I()?"left":"right",BOTTOM:"bottom",LEFT:I()?"right":"left"},Bi={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:$i,popperConfig:null},Ki={HIDE:`hide${qi}`,HIDDEN:`hidden${qi}`,SHOW:`show${qi}`,SHOWN:`shown${qi}`,INSERTED:`inserted${qi}`,CLICK:`click${qi}`,FOCUSIN:`focusin${qi}`,FOCUSOUT:`focusout${qi}`,MOUSEENTER:`mouseenter${qi}`,MOUSELEAVE:`mouseleave${qi}`},Yi="fade",Gi="modal",Xi="show",Ji="show",Qi="out",Zi=".tooltip-inner",er=`.${Gi}`,tr="hide.bs.modal",nr="hover",ir="focus",rr="click",sr="manual";class or extends J{constructor(e,t){if("undefined"===typeof n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Bi}static get NAME(){return ji}static get Event(){return Ki}static get DefaultType(){return Wi}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(Xi))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),K.off(this._element.closest(er),tr,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=K.trigger(this._element,this.constructor.Event.SHOW),t=v(this._element),i=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!i)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(Zi).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),s=a(this.constructor.NAME);r.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&r.classList.add(Yi);const o="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,c=this._getAttachment(o);this._addAttachmentClass(c);const{container:l}=this._config;G.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.append(r),K.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=n.createPopper(this._element,r,this._getPopperConfig(c)),r.classList.add(Xi);const u=this._resolvePossibleFunction(this._config.customClass);u&&r.classList.add(...u.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{K.on(e,"mouseover",y)}));const h=()=>{const e=this._hoverState;this._hoverState=null,K.trigger(this._element,this.constructor.Event.SHOWN),e===Qi&&this._leave(null,this)},d=this.tip.classList.contains(Yi);this._queueCallback(h,this.tip,d)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==Ji&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),K.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=K.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(Xi),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>K.off(e,"mouseover",y))),this._activeTrigger[rr]=!1,this._activeTrigger[ir]=!1,this._activeTrigger[nr]=!1;const i=this.tip.classList.contains(Yi);this._queueCallback(t,this.tip,i),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(Yi,Xi),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Zi)}_sanitizeAndSetContent(e,t,n){const i=ye.findOne(n,e);t||!i?this.setElementContent(i,t):i.remove()}setElementContent(e,t){if(null!==e)return f(t)?(t=p(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Fi(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Vi[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach((e=>{if("click"===e)K.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==sr){const t=e===nr?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===nr?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;K.on(this._element,t,this._config.selector,(e=>this._enter(e))),K.on(this._element,n,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},K.on(this._element.closest(er),tr,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?ir:nr]=!0),t.getTipElement().classList.contains(Xi)||t._hoverState===Ji?t._hoverState=Ji:(clearTimeout(t._timeout),t._hoverState=Ji,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===Ji&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?ir:nr]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Qi,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===Qi&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=ge.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{zi.has(e)&&delete t[e]})),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:p(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),m(ji,e,this.constructor.DefaultType),e.sanitize&&(e.template=Fi(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return Hi}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=or.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}T(or);const ar="popover",cr="bs.popover",lr=`.${cr}`,ur="bs-popover",hr={...or.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},dr={...or.DefaultType,content:"(string|element|function)"},fr={HIDE:`hide${lr}`,HIDDEN:`hidden${lr}`,SHOW:`show${lr}`,SHOWN:`shown${lr}`,INSERTED:`inserted${lr}`,CLICK:`click${lr}`,FOCUSIN:`focusin${lr}`,FOCUSOUT:`focusout${lr}`,MOUSEENTER:`mouseenter${lr}`,MOUSELEAVE:`mouseleave${lr}`},pr=".popover-header",mr=".popover-body";class _r extends or{static get Default(){return hr}static get NAME(){return ar}static get Event(){return fr}static get DefaultType(){return dr}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),pr),this._sanitizeAndSetContent(e,this._getContent(),mr)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return ur}static jQueryInterface(e){return this.each((function(){const t=_r.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}T(_r);const gr="scrollspy",vr="bs.scrollspy",yr=`.${vr}`,br=".data-api",wr={offset:10,method:"auto",target:""},Cr={offset:"number",method:"string",target:"(string|element)"},Er=`activate${yr}`,Ir=`scroll${yr}`,Tr=`load${yr}${br}`,kr="dropdown-item",Sr="active",Or='[data-bs-spy="scroll"]',Nr=".nav, .list-group",Ar=".nav-link",xr=".nav-item",Pr=".list-group-item",Rr=`${Ar}, ${Pr}, .${kr}`,Dr=".dropdown",Lr=".dropdown-toggle",Mr="offset",$r="position";class Fr extends J{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,K.on(this._scrollElement,Ir,(()=>this._process())),this.refresh(),this._process()}static get Default(){return wr}static get NAME(){return gr}refresh(){const e=this._scrollElement===this._scrollElement.window?Mr:$r,t="auto"===this._config.method?e:this._config.method,n=t===$r?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const i=ye.find(Rr,this._config.target);i.map((e=>{const i=l(e),r=i?ye.findOne(i):null;if(r){const e=r.getBoundingClientRect();if(e.width||e.height)return[ge[t](r).top+n,i]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){K.off(this._scrollElement,yr),super.dispose()}_getConfig(e){return e={...wr,...ge.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=p(e.target)||document.documentElement,m(gr,e,Cr),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=Rr.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),n=ye.findOne(t.join(","),this._config.target);n.classList.add(Sr),n.classList.contains(kr)?ye.findOne(Lr,n.closest(Dr)).classList.add(Sr):ye.parents(n,Nr).forEach((e=>{ye.prev(e,`${Ar}, ${Pr}`).forEach((e=>e.classList.add(Sr))),ye.prev(e,xr).forEach((e=>{ye.children(e,Ar).forEach((e=>e.classList.add(Sr)))}))})),K.trigger(this._scrollElement,Er,{relatedTarget:e})}_clear(){ye.find(Rr,this._config.target).filter((e=>e.classList.contains(Sr))).forEach((e=>e.classList.remove(Sr)))}static jQueryInterface(e){return this.each((function(){const t=Fr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}K.on(window,Tr,(()=>{ye.find(Or).forEach((e=>new Fr(e)))})),T(Fr);const jr="tab",Ur="bs.tab",qr=`.${Ur}`,Hr=".data-api",zr=`hide${qr}`,Wr=`hidden${qr}`,Vr=`show${qr}`,Br=`shown${qr}`,Kr=`click${qr}${Hr}`,Yr="dropdown-menu",Gr="active",Xr="fade",Jr="show",Qr=".dropdown",Zr=".nav, .list-group",es=".active",ts=":scope > li > .active",ns='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',is=".dropdown-toggle",rs=":scope > .dropdown-menu .active";class ss extends J{static get NAME(){return jr}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Gr))return;let e;const t=u(this._element),n=this._element.closest(Zr);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?ts:es;e=ye.find(t,n),e=e[e.length-1]}const i=e?K.trigger(e,zr,{relatedTarget:this._element}):null,r=K.trigger(this._element,Vr,{relatedTarget:e});if(r.defaultPrevented||null!==i&&i.defaultPrevented)return;this._activate(this._element,n);const s=()=>{K.trigger(e,Wr,{relatedTarget:this._element}),K.trigger(this._element,Br,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const i=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?ye.children(t,es):ye.find(ts,t),r=i[0],s=n&&r&&r.classList.contains(Xr),o=()=>this._transitionComplete(e,r,n);r&&s?(r.classList.remove(Jr),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(Gr);const e=ye.findOne(rs,t.parentNode);e&&e.classList.remove(Gr),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(Gr),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),b(e),e.classList.contains(Xr)&&e.classList.add(Jr);let i=e.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains(Yr)){const t=e.closest(Qr);t&&ye.find(is,t).forEach((e=>e.classList.add(Gr))),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=ss.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}K.on(document,Kr,ns,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),g(this))return;const t=ss.getOrCreateInstance(this);t.show()})),T(ss);const os="toast",as="bs.toast",cs=`.${as}`,ls=`mouseover${cs}`,us=`mouseout${cs}`,hs=`focusin${cs}`,ds=`focusout${cs}`,fs=`hide${cs}`,ps=`hidden${cs}`,ms=`show${cs}`,_s=`shown${cs}`,gs="fade",vs="hide",ys="show",bs="showing",ws={animation:"boolean",autohide:"boolean",delay:"number"},Cs={animation:!0,autohide:!0,delay:5e3};class Es extends J{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ws}static get Default(){return Cs}static get NAME(){return os}show(){const e=K.trigger(this._element,ms);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(gs);const t=()=>{this._element.classList.remove(bs),K.trigger(this._element,_s),this._maybeScheduleHide()};this._element.classList.remove(vs),b(this._element),this._element.classList.add(ys),this._element.classList.add(bs),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(ys))return;const e=K.trigger(this._element,fs);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(vs),this._element.classList.remove(bs),this._element.classList.remove(ys),K.trigger(this._element,ps)};this._element.classList.add(bs),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(ys)&&this._element.classList.remove(ys),super.dispose()}_getConfig(e){return e={...Cs,...ge.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},m(os,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){K.on(this._element,ls,(e=>this._onInteraction(e,!0))),K.on(this._element,us,(e=>this._onInteraction(e,!1))),K.on(this._element,hs,(e=>this._onInteraction(e,!0))),K.on(this._element,ds,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Es.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(Es),T(Es);const Is={Alert:oe,Button:pe,Carousel:ft,Collapse:Lt,Dropdown:vn,Modal:di,Offcanvas:xi,Popover:_r,ScrollSpy:Fr,Tab:ss,Toast:Es,Tooltip:or};return Is}))},9017:function(e,t,n){"use strict";n.d(t,{ZF:function(){return i.ZF}});var i=n(5659),r="firebase",s="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},1813:function(e,t,n){"use strict";n.d(t,{hJ:function(){return Xe},v0:function(){return si},rh:function(){return sn},w7:function(){return ot}});n(1703);var i=n(3536),r=n(5659);function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n(7366),a=n(7805);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${r.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function C(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,r.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,r,s={}){return $(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function $(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof i.ZR)throw s;f(e,"network-request-failed")}}async function F(e,t,n,i,r={}){const s=await M(e,t,n,i,r);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function j(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?x(e.config,r):`${e.config.apiScheme}://${r}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=p(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=K(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:W(B(s.auth_time)),issuedAtTime:W(B(s.iat)),expirationTime:W(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function K(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function Y(e){const t=K(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&X(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,i=await e.getIdToken(),r=await G(e,z(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ne(s.providerUserInfo):[],a=te(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ee(e){const t=(0,i.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t){const n=await $(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=j(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ie(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return V(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:E}=t;v(y&&E,e,"internal-error");const I=re.fromJSON(this.name,E);v("string"===typeof y,e,"internal-error"),se(u,e.name),se(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),se(d,e.name),se(f,e.name),se(p,e.name),se(m,e.name),se(_,e.name),se(g,e.name);const T=new oe({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:_,lastLoginAt:g});return C&&Array.isArray(C)&&(T.providerData=C.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new re;i.updateFromServerResponse(t);const r=new oe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Z(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const ce=ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=le(this.userKey,i.apiKey,r),this.fullPersistenceKey=le("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(C(ce),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||C(ce);const s=le(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=oe._fromJSON(e,t);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new ue(r,e,n)):new ue(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,i.z$)()){return/firefox\//i.test(e)}function fe(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,i.z$)()){return/crios\//i.test(e)}function me(e=(0,i.z$)()){return/iemobile/i.test(e)}function _e(e=(0,i.z$)()){return/android/i.test(e)}function ge(e=(0,i.z$)()){return/blackberry/i.test(e)}function ve(e=(0,i.z$)()){return/webos/i.test(e)}function ye(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function be(e=(0,i.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return ye(e)||_e(e)||ve(e)||ge(e)||/windows phone/i.test(e)||me(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=he((0,i.z$)());break;case"Worker":n=`${he((0,i.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ke(e){return(0,i.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ae(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Pe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Oe{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Re(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Re(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ae(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ne(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="http://localhost";class Me extends Oe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Me(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return De(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,De(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,De(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function je(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function qe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ue)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Oe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new He({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new He({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Fe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return je(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return qe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new He({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function We(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class Ve{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ze(null!==(r=c["mode"])&&void 0!==r?r:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=We(e);try{return new Ve(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(){this.providerId=Be.PROVIDER_ID}static credential(e,t){return Re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ve.parseLink(t);return v(n,"argument-error"),Re._fromEmailAndCode(e,n.code,n.tenantId)}}Be.PROVIDER_ID="password",Be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Ke{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge extends Ye{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch(t){return null}}}Ge.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ge.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ye{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Me._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xe.credential(t,n)}catch(i){return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com",Xe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ye{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ye{constructor(){super("twitter.com")}static credential(e,t){return Me._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(i){return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await oe._fromIdTokenResponse(e,n,i),s=et(n),o=new Ze({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=et(n);return new Ze({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends i.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new tt(e,t,n,i)}}function nt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const i=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await G(e,nt(i,r,t,e),n);v(s.idToken,i,"internal-error");const o=K(s.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(e.uid===a,i,"user-mismatch"),Ze._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){const i="signIn",r=await nt(e,i,t),s=await Ze._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}function ot(e){return(0,i.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function ct(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const lt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lt,"1"),this.storage.removeItem(lt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){const e=(0,i.z$)();return fe(e)||ye(e)}const dt=1e3,ft=10;class pt extends ut{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ht()&&Ee(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);we()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ft):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),dt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pt.type="LOCAL";const mt=pt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ut{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_t.type="SESSION";const gt=_t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new yt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await vt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.receivers=[];class wt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=bt("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function Et(e){Ct().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return"undefined"!==typeof Ct()["WorkerGlobalScope"]&&"function"===typeof Ct()["importScripts"]}async function Tt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function kt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function St(){return It()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="firebaseLocalStorageDb",Nt=1,At="firebaseLocalStorage",xt="fbase_key";class Pt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Rt(e,t){return e.transaction([At],t?"readwrite":"readonly").objectStore(At)}function Dt(){const e=indexedDB.deleteDatabase(Ot);return new Pt(e).toPromise()}function Lt(){const e=indexedDB.open(Ot,Nt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(At,{keyPath:xt})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(At)?t(n):(n.close(),await Dt(),t(await Lt()))}))}))}async function Mt(e,t,n){const i=Rt(e,!0).put({[xt]:t,value:n});return new Pt(i).toPromise()}async function $t(e,t){const n=Rt(e,!1).get(t),i=await new Pt(n).toPromise();return void 0===i?null:i.value}function Ft(e,t){const n=Rt(e,!0).delete(t);return new Pt(n).toPromise()}const jt=800,Ut=3;class qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Lt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ut)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return It()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yt._getInstance(St()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tt(),!this.activeServiceWorker)return;this.sender=new wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&kt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lt();return await Mt(e,lt,"1"),await Ft(e,lt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Mt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>$t(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ft(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Rt(e,!1).getAll();return new Pt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),jt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qt.type="LOCAL";const Ht=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Wt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Bt(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Vt().appendChild(i)}))}function Kt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Kt("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt="recaptcha";async function Gt(e,t,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,e,"argument-error"),v(n.type===Yt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await at(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await zt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await $e(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(e){this.providerId=Xt.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return Gt(this.auth,e,(0,i.m9)(t))}static credential(e,t){return He._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Xt.credentialFromTaggedObject(t)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?He._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e,t){return t?C(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.PROVIDER_ID="phone",Xt.PHONE_SIGN_IN_METHOD="phone";class Qt extends Oe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return De(e,this._buildIdpRequest())}_linkToIdToken(e,t){return De(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return De(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zt(e){return st(e.auth,new Qt(e),e.bypassAuthState)}function en(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new Qt(e),e.bypassAuthState)}async function tn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new Qt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zt;case"linkViaPopup":case"linkViaRedirect":return tn;case"reauthViaPopup":case"reauthViaRedirect":return en;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new A(2e3,1e4);async function sn(e,t,n){const i=ke(e);_(e,t,Ke);const r=Jt(i,n),s=new on(i,"signInViaPopup",t,r);return s.executeNotNull()}class on extends nn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=bt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,rn.get())};e()}}on.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="pendingRedirect",cn=new Map;class ln extends nn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cn.get(this.auth._key());if(!e){try{const t=await un(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}cn.set(this.auth._key(),e)}return this.bypassAuthState||cn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function un(e,t){const n=dn(t),i=hn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function hn(e){return C(e._redirectPersistence)}function dn(e){return le(an,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t,n=!1){const i=ke(e),r=Jt(i,t),s=new ln(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn=6e5;class mn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!vn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!gn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(e))}saveEventToCache(e){this.cachedEventUids.add(_n(e)),this.lastProcessedEventTime=Date.now()}}function _n(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function gn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function vn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wn=/^https?/;async function Cn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yn(e);for(const i of t)try{if(En(i))return}catch(n){}f(e,"unauthorized-domain")}function En(e){const t=T(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!wn.test(n))return!1;if(bn.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new A(3e4,6e4);function Tn(){const e=Ct().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function kn(e){return new Promise(((t,n)=>{var i,r,s;function o(){Tn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tn(),n(p(e,"network-request-failed"))},timeout:In.get()})}if(null===(r=null===(i=Ct().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ct().gapi)||void 0===s?void 0:s.load)){const t=Kt("iframefcb");return Ct()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Bt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Sn=null,e}))}let Sn=null;function On(e){return Sn=Sn||kn(e),Sn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new A(5e3,15e3),An="__/auth/iframe",xn="emulator/auth/iframe",Pn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,xn):`https://${e.config.authDomain}/${An}`,s={apiKey:t.apiKey,appName:e.name,v:r.Jn},o=Rn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function Ln(e){const t=await On(e),n=Ct().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Dn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pn,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=p(e,"network-request-failed"),s=Ct().setTimeout((()=>{i(r)}),Nn.get());function o(){Ct().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$n=500,Fn=600,jn="_blank",Un="http://localhost";class qn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Hn(e,t,n,r=$n,s=Fn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Mn),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=pe(u)?jn:n),de(u)&&(t=t||Un,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(u)&&"_self"!==c)return zn(t||"",c),new qn(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new qn(d)}function zn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="__/auth/handler",Vn="emulator/auth/handler";function Bn(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.Jn,eventId:o};if(t instanceof Ke){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ye){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${Kn(e)}?${(0,i.xO)(l).slice(1)}`}function Kn({config:e}){return e.emulator?x(e,Vn):`https://${e.authDomain}/${Wn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="webStorageSupport";class Gn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gt,this._completeRedirectFn=fn}async _openPopup(e,t,n,i){var r;b(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Bn(e,t,n,T(),i);return Hn(e,s,bt())}async _openRedirect(e,t,n,i){return await this._originValidation(e),Et(Bn(e,t,n,T(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ln(e),n=new mn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Yn,{type:Yn},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Yn];void 0!==r&&t(!!r),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||fe()||ye()}}const Xn=Gn;class Jn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class Qn extends Jn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qn(e)}_finalizeEnroll(e,t,n){return ct(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Wt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Zn{constructor(){}static assertion(e){return Qn._fromCredential(e)}}Zn.FACTOR_ID="phone";var ei="@firebase/auth",ti="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ri(e){(0,r.Xd)(new a.wA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((t,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},a=new Te(t,i,r);return I(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new a.wA("auth-internal",(e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new ni(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ei,ti,ii(e)),(0,r.KN)(ei,ti,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e=(0,r.Mq)()){const t=(0,r.qX)(e,"auth");return t.isInitialized()?t.getImmediate():E(e,{popupRedirectResolver:Xn,persistence:[Ht,mt,gt]})}ri("Browser")},6595:function(e,t,n){"use strict";n.d(t,{N8:function(){return la},MQ:function(){return ta},jM:function(){return ea},VF:function(){return Yo},iH:function(){return Bo},t8:function(){return Go},Vx:function(){return Xo}});n(1703);var i=n(5659),r=n(7805),s=n(3536),o=n(7366);const a="@firebase/database",c="0.12.7";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Pz)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),_=new o.Yd("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const i=n.digest();return s.US.encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?(0,s.Pz)(i):i,t+=" "}return t};let b=null,w=!0;const C=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=o["in"].VERBOSE,b=_.log.bind(_),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},E=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&C(!0)),b){const t=y.apply(null,e);b(t)}},I=function(e){return function(...t){E(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);_.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw _.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+y(...e);_.warn(t)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},x="[MIN_NAME]",P="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===x||t===P)return-1;if(t===x||e===P)return 1;{const n=B(e),i=B(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Pz)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,s.Pz)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,s.Pz)(t[i]),n+=":",n+=M(e[t[i]]);return n+="}",n},$=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){(0,s.hu)(!N(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function H(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const z=new RegExp("^-?(0*)\\d{1,10}$"),W=-2147483648,V=2147483647,B=function(e){if(z.test(e)){const t=Number(e);if(t>=W&&t<=V)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class Q{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Q.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===ce)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const r=[];return F(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function _e(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",be="close",we="pLPCommand",Ce="pRTLPCB",Ee="id",Ie="pw",Te="ser",ke="cb",Se="seg",Oe="ts",Ne="d",Ae="dframe",xe=1870,Pe=30,Re=xe-Pe,De=25e3,Le=3e4;class Me{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Le)),A((()=>{if(this.isClosed_)return;this.scriptTagHolder=new $e(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ke]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),i=$(n,Re);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ae]="t",n[Ee]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $e{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=$e.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){E("frame writing exception"),r.stack&&E(r.stack),E(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Ie]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=xe))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+i+"="+e.seg+"&"+Oe+i+"="+e.ts+"&"+Ne+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(De)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,je=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class qe{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=_e(t),this.connURL=qe.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={};return r[ee]=Z,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(r[ne]=ie),t&&(r[te]=t),n&&(r[se]=n),i&&(r[ae]=i),de(e,ce,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if((0,s.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i}),this.mySock=new Ue(this.connURL,[],t)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ue(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!qe.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=$(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(je))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,qe]}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of He.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=6e4,We=5e3,Ve=10240,Be=102400,Ke="t",Ye="d",Ge="s",Xe="r",Je="e",Qe="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new He(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Be?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ve?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Ze?this.upgradeIfSecondaryHealthy_():t===Xe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Qe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ke,e);if(Ye in e){const n=e[Ye];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Xe?this.onReset_(n):t===Je?T("Server Error: "+n):t===Qe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(We))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=_t(e,0),i=_t(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=R(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Et(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);St(this)}}function Tt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),St(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function St(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Ot(e))}function Ot(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Nt}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e3,xt=3e5,Pt=3e3,Rt=3e4,Dt=1.3,Lt=3e4,Mt="server_kill",$t=3;class Ft extends rt{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ft.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=xt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,s.Pz)(r)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),Pt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Ft.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Pz)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,s.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),r))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&S(T),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$t&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$t&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new jt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new jt(x,e),i=new jt(x,t);return 0!==this.compare(n,i)}minPost(){return jt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class Ht extends Ut{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return jt.MIN}maxPost(){return new jt(P,qt)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new jt(e,qt)}toString(){return".key"}}const zt=new Ht;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Vt.RED,this.left=null!=i?i:Kt.EMPTY_NODE,this.right=null!=r?r:Kt.EMPTY_NODE}copy(e,t,n,i,r){return new Vt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0,Vt.BLACK=!1;class Bt{copy(e,t,n,i,r){return this}insert(e,t,n){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e,t){return R(e.name,t.name)}function Gt(e,t){return R(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;function Jt(e){Xt=e}Kt.EMPTY_NODE=new Bt;const Qt=function(e){return"number"===typeof e?"number:"+j(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Xt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Xt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=rn.VALUE_TYPE_ORDER.indexOf(t),r=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(i>=0,"Unknown leaf type: "+t),(0,s.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends Ut{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?R(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return jt.MIN}maxPost(){return new jt(P,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new jt(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Vt(a,o.node,Vt.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Vt(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Vt.BLACK):(a(i,Vt.BLACK),a(i,Vt.RED))}return s},o=new un(e.length),a=s(o);return new Kt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(fn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":cn}),dn}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(jt.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?hn(n,e.getCompare()):fn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new pn(u,l)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,i)=>{const r=(0,s.DV)(this.indexSet_,i);if((0,s.hu)(r,"Missing index implementation for "+i),n===fn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(jt.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),hn(n,r.getCompare())}return fn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new jt(e.name,i))),r.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===fn)return n;{const i=t.get(e.name);return i?n.remove(new jt(e.name,i)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new _n(new Kt(Gt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?mn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new jt(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?mn:this.priorityNode_;return new _n(i,s,r)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,s.hu)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(cn,((s,o)=>{t[s]=o.val(e),n++,r&&_n.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(cn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new jt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new jt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new jt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,jt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,jt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===zt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===zt?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends _n{constructor(){super(new Kt(Gt),_n.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const vn=new gn;Object.defineProperties(jt,{MIN:{value:new jt(x,_n.EMPTY_NODE)},MAX:{value:new jt(P,vn)}}),Ht.__EMPTY_NODE=_n.EMPTY_NODE,rn.__childrenNodeConstructor=_n,Jt(vn),on(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function bn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,bn(t))}if(e instanceof Array||!yn){let n=_n.EMPTY_NODE;return F(e,((t,i)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=bn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(bn(t))}{const n=[];let i=!1;const r=e;if(F(r,((e,t)=>{if("."!==e.substring(0,1)){const r=bn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new jt(e,r)))}})),0===n.length)return _n.EMPTY_NODE;const s=hn(n,Yt,(e=>e.name),Gt);if(i){const e=hn(n,cn.getCompare());return new _n(s,bn(t),new pn({".priority":e},{".priority":cn}))}return new _n(s,bn(t),pn.Default)}}sn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends Ut{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?R(e.name,t.name):r}makePost(e,t){const n=bn(e),i=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new jt(t,i)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,vn);return new jt(P,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return jt.MIN}maxPost(){return jt.MAX}makePost(e,t){const n=bn(e);return new jt(t,n)}toString(){return".value"}}const En=new Cn,In="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tn=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=In.charAt(n%64),n=Math.floor(n/64);(0,s.hu)(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=In.charAt(t[r]);return(0,s.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(e){return{type:"value",snapshotNode:e}}function Sn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function On(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Nn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function An(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){(0,s.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(On(t,a)):(0,s.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Sn(t,n)):o.trackChildChange(Nn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,((e,i)=>{t.hasChild(e)||n.trackChildChange(On(e,i))})),t.isLeafNode()||t.forEachChild(cn,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Nn(t,i,r))}else n.trackChildChange(Sn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.indexedFilter_=new xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pn.getStartPost_(e),this.endPost_=Pn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new jt(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_n.EMPTY_NODE);const r=this;return t.forEachChild(cn,((e,t)=>{r.matches(new jt(e,t))||(i=i.updateImmediateChild(e,_n.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.rangedFilter_=new Pn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new jt(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(_n.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&r(t,n)<=0;c?o++:i=i.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.hu)(a.numChildren()===this.limit_,"");const c=new jt(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(Nn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(On(t,e));const n=a.updateImmediateChild(t,_n.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(Sn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=r&&(r.trackChildChange(On(l.name,l.node)),r.trackChildChange(Sn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new Dn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ln(e){return e.loadsAllData()?new xn(e.getIndex()):e.hasLimit()?new Rn(e):new Pn(e)}function Mn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===En?n="$value":e.index_===zt?n="$key":((0,s.hu)(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Pz)(n),e.startSet_&&(t["startAt"]=(0,s.Pz)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,s.Pz)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,s.Pz)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,s.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function $n(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Fn.getListenId_(e,n),a={};this.listens_[o]=a;const c=Mn(e._queryParams);this.restRequest_(r+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Fn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mn(e._queryParams),n=e._path.toString(),i=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){S("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return{value:null,children:new Map}}function qn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Un());const r=e.children.get(i);t=ft(t),qn(r,t,n)}}function Hn(e,t,n){null!==e.value?n(t,e.value):zn(e,((e,i)=>{const r=new lt(t.toString()+"/"+e);Hn(i,r,n)}))}function zn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e4,Bn=3e4,Kn=3e5;class Yn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wn(e);const n=Vn+(Bn-Vn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,i)=>{i>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*Kn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Xn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Xn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Zn(ut(),t,this.revert)}}return(0,s.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new Zn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.source=e,this.path=t,this.type=Gn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new ei(this.source,ut()):new ei(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(e){return yt(this.path)?new ti(this.source,ut(),this.snap.getImmediateChild(e)):new ti(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Gn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new ti(this.source,ut(),t.value):new ni(this.source,ut(),t)}return(0,s.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ni(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function si(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(An(t.childName,t.snapshotNode))})),oi(e,r,"child_removed",t,i,n),oi(e,r,"child_added",t,i,n),oi(e,r,"child_moved",s,i,n),oi(e,r,"child_changed",t,i,n),oi(e,r,"value",t,i,n),r}function oi(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>ci(e,t,n))),o.forEach((n=>{const i=ai(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ai(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ci(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const i=new jt(t.childName,t.snapshotNode),r=new jt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e,t){return{eventCache:e,serverCache:t}}function ui(e,t,n,i){return li(new ii(t,n,i),e.serverCache)}function hi(e,t,n,i){return li(e.eventCache,new ii(t,n,i))}function di(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;const mi=()=>(pi||(pi=new Kt(D)),pi);class _i{constructor(e,t=mi()){this.value=e,this.children=t}static fromObject(e){let t=new _i(null);return F(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ft(e),t);if(null!=r){const e=vt(new lt(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new _i(null)}}set(e,t){if(yt(e))return new _i(t,this.children);{const n=ht(e),i=this.children.get(n)||new _i(null),r=i.set(ft(e),t),s=this.children.insert(n,r);return new _i(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new _i(null):new _i(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(ft(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new _i(null):new _i(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),i=this.children.get(n)||new _i(null),r=i.setTree(ft(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new _i(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(vt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ht(e),r=this.children.get(i);return r?r.findOnPath_(ft(e),vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ht(e),r=this.children.get(i);return r?r.foreachOnPath_(ft(e),vt(t,i),n):new _i(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.writeTree_=e}static empty(){return new gi(new _i(null))}}function vi(e,t,n){if(yt(t))return new gi(new _i(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bt(r,t);return s=s.updateChild(o,n),new gi(e.writeTree_.set(r,s))}{const i=new _i(n),r=e.writeTree_.setTree(t,i);return new gi(r)}}}function yi(e,t,n){let i=e;return F(n,((e,n)=>{i=vi(i,vt(t,e),n)})),i}function bi(e,t){if(yt(t))return gi.empty();{const n=e.writeTree_.setTree(t,new _i(null));return new gi(n)}}function wi(e,t){return null!=Ci(e,t)}function Ci(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function Ei(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,((e,n)=>{t.push(new jt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new jt(e,n.value))})),t}function Ii(e,t){if(yt(t))return e;{const n=Ci(e,t);return new gi(null!=n?new _i(n):e.writeTree_.subtree(t))}}function Ti(e){return e.writeTree_.isEmpty()}function ki(e,t){return Si(ut(),e.writeTree_,t)}function Si(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,s.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Si(vt(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(e,t){return Ji(t,e)}function Ni(e,t,n,i,r){(0,s.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=vi(e.visibleWrites,t,n)),e.lastWriteId=i}function Ai(e,t,n,i){(0,s.hu)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=yi(e.visibleWrites,t,n),e.lastWriteId=i}function xi(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Pi(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ri(t,i.path)?r=!1:Et(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Di(e),!0;if(i.snap)e.visibleWrites=bi(e.visibleWrites,i.path);else{const t=i.children;F(t,(t=>{e.visibleWrites=bi(e.visibleWrites,vt(i.path,t))}))}return!0}return!1}function Ri(e,t){if(e.snap)return Et(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Et(vt(e.path,n),t))return!0;return!1}function Di(e){e.visibleWrites=Mi(e.allWrites,Li,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Li(e){return e.visible}function Mi(e,t,n){let i=gi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Et(n,e)?(t=bt(n,e),i=vi(i,t,o.snap)):Et(e,n)&&(t=bt(e,n),i=vi(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(Et(n,e))t=bt(n,e),i=yi(i,t,o.children);else if(Et(e,n))if(t=bt(e,n),yt(t))i=yi(i,ut(),o.children);else{const e=(0,s.DV)(o.children,ht(t));if(e){const n=e.getChild(ft(t));i=vi(i,ut(),n)}}}}}return i}function $i(e,t,n,i,r){if(i||r){const s=Ii(e.visibleWrites,t);if(!r&&Ti(s))return n;if(r||null!=n||wi(s,ut())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Et(e.path,t)||Et(t,e.path))},o=Mi(e.allWrites,s,t),a=n||_n.EMPTY_NODE;return ki(o,a)}return null}{const i=Ci(e.visibleWrites,t);if(null!=i)return i;{const i=Ii(e.visibleWrites,t);if(Ti(i))return n;if(null!=n||wi(i,ut())){const e=n||_n.EMPTY_NODE;return ki(i,e)}return null}}}function Fi(e,t,n){let i=_n.EMPTY_NODE;const r=Ci(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(cn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Ii(e.visibleWrites,t);return n.forEachChild(cn,((e,t)=>{const n=ki(Ii(r,new lt(e)),t);i=i.updateImmediateChild(e,n)})),Ei(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=Ii(e.visibleWrites,t);return Ei(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function ji(e,t,n,i,r){(0,s.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(wi(e.visibleWrites,o))return null;{const t=Ii(e.visibleWrites,o);return Ti(t)?r.getChild(n):ki(t,r.getChild(n))}}function Ui(e,t,n,i){const r=vt(t,n),s=Ci(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Ii(e.visibleWrites,r);return ki(t,i.getNode().getImmediateChild(n))}return null}function qi(e,t){return Ci(e.visibleWrites,t)}function Hi(e,t,n,i,r,s,o){let a;const c=Ii(e.visibleWrites,t),l=Ci(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=ki(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function zi(){return{visibleWrites:gi.empty(),allWrites:[],lastWriteId:-1}}function Wi(e,t,n,i){return $i(e.writeTree,e.treePath,t,n,i)}function Vi(e,t){return Fi(e.writeTree,e.treePath,t)}function Bi(e,t,n,i){return ji(e.writeTree,e.treePath,t,n,i)}function Ki(e,t){return qi(e.writeTree,vt(e.treePath,t))}function Yi(e,t,n,i,r,s){return Hi(e.writeTree,e.treePath,t,n,i,r,s)}function Gi(e,t,n){return Ui(e.writeTree,e.treePath,t,n)}function Xi(e,t){return Ji(vt(e.treePath,t),e.writeTree)}function Ji(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Nn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,On(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Sn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Nn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const er=new Zi;class tr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fi(this.viewCache_),r=Yi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){return{filter:e}}function ir(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function rr(e,t,n,i,r){const o=new Qi;let a,c;if(n.type===Gn.OVERWRITE){const l=n;l.source.fromUser?a=cr(e,t,l.path,l.snap,i,r,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=ar(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===Gn.MERGE){const l=n;l.source.fromUser?a=ur(e,t,l.path,l.children,i,r,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=dr(e,t,l.path,l.children,i,r,c,o))}else if(n.type===Gn.ACK_USER_WRITE){const s=n;a=s.revert?mr(e,t,s.path,i,r,o):fr(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=pr(e,t,n.path,i,o)}const l=o.getChanges();return sr(t,a,l),{viewCache:a,changes:l}}function sr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=di(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(kn(di(t)))}}function or(e,t,n,i,r,o){const a=t.eventCache;if(null!=Ki(i,n))return t;{let c,l;if(yt(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=fi(t),r=n instanceof _n?n:_n.EMPTY_NODE,s=Vi(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=Wi(i,fi(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,s.hu)(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=Bi(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Bi(i,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Gi(i,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return ui(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ar(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const r=ft(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,er,null)}const h=hi(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new tr(r,h,s);return or(e,h,n,r,d,a)}function cr(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new tr(r,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ui(t,l,!0,e.filter.filtersNodes());else{const r=ht(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ui(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ft(n),l=a.getNode().getImmediateChild(r);let h;if(yt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===pt(s)&&e.getChild(gt(s)).isEmpty()?e:e.updateChild(s,i):_n.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=ui(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function lr(e,t){return e.eventCache.isCompleteForChild(t)}function ur(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=vt(n,i);lr(t,ht(l))&&(a=cr(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=vt(n,i);lr(t,ht(l))||(a=cr(e,a,l,c,r,s,o))})),a}function hr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function dr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?i:new _i(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=hr(e,c,i);l=ar(e,l,new lt(n),u,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=hr(e,c,i);l=ar(e,l,new lt(n),u,r,s,o,a)}})),l}function fr(e,t,n,i,r,s,o){if(null!=Ki(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ar(e,t,n,c.getNode().getChild(n),r,s,a,o);if(yt(n)){let i=new _i(null);return c.getNode().forEachChild(zt,((e,t)=>{i=i.set(new lt(e),t)})),dr(e,t,n,i,r,s,a,o)}return t}{let l=new _i(null);return i.foreach(((e,t)=>{const i=vt(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),dr(e,t,n,l,r,s,a,o)}}function pr(e,t,n,i,r){const s=t.serverCache,o=hi(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return or(e,o,n,i,er,r)}function mr(e,t,n,i,r,o){let a;if(null!=Ki(i,n))return t;{const c=new tr(i,t,r),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Wi(i,fi(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof _n,"serverChildren would be complete if leaf node"),n=Vi(i,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const r=ht(n);let s=Gi(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?e.filter.updateChild(l,r,s,ft(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,_n.EMPTY_NODE,ft(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Wi(i,fi(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Ki(i,ut()),ui(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new xn(n.getIndex()),r=Ln(n);this.processor_=nr(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(_n.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),l=new ii(a,s.isFullyInitialized(),i.filtersNodes()),u=new ii(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=li(u,l),this.eventGenerator_=new ri(this.query_)}get query(){return this.query_}}function gr(e){return e.viewCache_.serverCache.getNode()}function vr(e,t){const n=fi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function yr(e){return 0===e.eventRegistrations_.length}function br(e,t){e.eventRegistrations_.push(t)}function wr(e,t,n){const i=[];if(n){(0,s.hu)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Cr(e,t,n,i){t.type===Gn.MERGE&&null!==t.source.queryId&&((0,s.hu)(fi(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(di(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=rr(e.processor_,r,t,n,i);return ir(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Ir(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Er(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,((e,t)=>{i.push(Sn(e,t))}))}return n.isFullyInitialized()&&i.push(kn(n.getNode())),Ir(e,i,n.getNode(),t)}function Ir(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return si(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr,kr;class Sr{constructor(){this.views=new Map}}function Or(e){(0,s.hu)(!Tr,"__referenceConstructor has already been defined"),Tr=e}function Nr(){return(0,s.hu)(Tr,"Reference.ts has not been loaded"),Tr}function Ar(e){return 0===e.views.size}function xr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),Cr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Cr(s,t,n,i));return r}}function Pr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Wi(n,r?i:null),s=!1;e?s=!0:i instanceof _n?(e=Vi(n,i),s=!1):(e=_n.EMPTY_NODE,s=!1);const o=li(new ii(e,s,!1),new ii(i,r,!1));return new _r(t,o)}return o}function Rr(e,t,n,i,r,s){const o=Pr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),br(o,n),Er(o,n)}function Dr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=jr(e);if("default"===r)for(const[c,l]of e.views.entries())o=o.concat(wr(l,n,i)),yr(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(r);t&&(o=o.concat(wr(t,n,i)),yr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!jr(e)&&s.push(new(Nr())(t._repo,t._path)),{removed:s,events:o}}function Lr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Mr(e,t){let n=null;for(const i of e.views.values())n=n||vr(i,t);return n}function $r(e,t){const n=t._queryParams;if(n.loadsAllData())return Ur(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Fr(e,t){return null!=$r(e,t)}function jr(e){return null!=Ur(e)}function Ur(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){(0,s.hu)(!kr,"__referenceConstructor has already been defined"),kr=e}function Hr(){return(0,s.hu)(kr,"Reference.ts has not been loaded"),kr}let zr=1;class Wr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _i(null),this.pendingWriteTree_=zi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vr(e,t,n,i,r){return Ni(e.pendingWriteTree_,t,n,i,r),r?is(e,new ti(Xn(),t,n)):[]}function Br(e,t,n,i){Ai(e.pendingWriteTree_,t,n,i);const r=_i.fromObject(n);return is(e,new ni(Xn(),t,r))}function Kr(e,t,n=!1){const i=xi(e.pendingWriteTree_,t),r=Pi(e.pendingWriteTree_,t);if(r){let t=new _i(null);return null!=i.snap?t=t.set(ut(),!0):F(i.children,(e=>{t=t.set(new lt(e),!0)})),is(e,new Zn(i.path,t,n))}return[]}function Yr(e,t,n){return is(e,new ti(Jn(),t,n))}function Gr(e,t,n){const i=_i.fromObject(n);return is(e,new ni(Jn(),t,i))}function Xr(e,t){return is(e,new ei(Jn(),t))}function Jr(e,t,n){const i=ls(e,n);if(i){const n=us(i),r=n.path,s=n.queryId,o=bt(r,t),a=new ei(Qn(s),o);return hs(e,r,a)}return[]}function Qr(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Fr(s,t))){const a=Dr(s,t,n,i);Ar(s)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=a.removed;o=a.events;const l=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(r,((e,t)=>jr(t)));if(l&&!u){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=ds(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=os(e,i);e.listenProvider_.startListening(fs(r),as(e,r),s.hashFn,s.onComplete)}}}if(!u&&c.length>0&&!i)if(l){const n=null;e.listenProvider_.stopListening(fs(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(cs(t));e.listenProvider_.stopListening(fs(t),n)}));ps(e,c)}return o}function Zr(e,t,n,i){const r=ls(e,i);if(null!=r){const i=us(r),s=i.path,o=i.queryId,a=bt(s,t),c=new ti(Qn(o),a,n);return hs(e,s,c)}return[]}function es(e,t,n,i){const r=ls(e,i);if(r){const i=us(r),s=i.path,o=i.queryId,a=bt(s,t),c=_i.fromObject(n),l=new ni(Qn(o),a,c);return hs(e,s,l)}return[]}function ts(e,t,n){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=bt(e,i);r=r||Mr(t,n),o=o||jr(t)}));let a,c=e.syncPointTree_.get(i);if(c?(o=o||jr(c),r=r||Mr(c,ut())):(c=new Sr,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=r)a=!0;else{a=!1,r=_n.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Mr(t,ut());n&&(r=r.updateImmediateChild(e,n))}))}const l=Fr(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=cs(t);(0,s.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ms();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const u=Oi(e.pendingWriteTree_,i);let h=Rr(c,t,n,u,r,a);if(!l&&!o){const n=$r(c,t);h=h.concat(_s(e,t,n))}return h}function ns(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=bt(e,t),r=Mr(n,i);if(r)return r}));return $i(r,t,s,n,i)}function is(e,t){return rs(t,e.syncPointTree_,null,Oi(e.pendingWriteTree_,ut()))}function rs(e,t,n,i){if(yt(e.path))return ss(e,t,n,i);{const r=t.get(ut());null==n&&null!=r&&(n=Mr(r,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Xi(i,o);s=s.concat(rs(a,c,e,t))}return r&&(s=s.concat(xr(r,e,i,n))),s}}function ss(e,t,n,i){const r=t.get(ut());null==n&&null!=r&&(n=Mr(r,ut()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Xi(i,t),c=e.operationForChild(t);c&&(s=s.concat(ss(c,r,o,a)))})),r&&(s=s.concat(xr(r,e,i,n))),s}function os(e,t){const n=t.query,i=as(e,n);return{hashFn:()=>{const e=gr(t)||_n.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Jr(e,n._path,i):Xr(e,n._path);{const i=H(t,n);return Qr(e,n,null,i)}}}}function as(e,t){const n=cs(t);return e.queryToTagMap.get(n)}function cs(e){return e._path.toString()+"$"+e._queryIdentifier}function ls(e,t){return e.tagToQueryMap.get(t)}function us(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function hs(e,t,n){const i=e.syncPointTree_.get(t);(0,s.hu)(i,"Missing sync point for query tag that we're tracking");const r=Oi(e.pendingWriteTree_,t);return xr(i,n,r,null)}function ds(e){return e.fold(((e,t,n)=>{if(t&&jr(t)){const e=Ur(t);return[e]}{let e=[];return t&&(e=Lr(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}function fs(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Hr())(e._repo,e._path):e}function ps(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=cs(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ms(){return zr++}function _s(e,t,n){const i=t._path,r=as(e,t),o=os(e,n),a=e.listenProvider_.startListening(fs(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(r)(0,s.hu)(!jr(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&jr(t))return[Ur(t).query];{let e=[];return t&&(e=e.concat(Lr(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(fs(i),as(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gs(t)}node(){return this.node_}}class vs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new vs(this.syncTree_,t)}node(){return ns(this.syncTree_,this.path_)}}const ys=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},bs=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ws(e[".sv"],t,n):"object"===typeof e[".sv"]?Cs(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ws=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},Cs=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,s.hu)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,s.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Es=function(e,t,n,i){return Ts(t,new vs(n,e),i)},Is=function(e,t,n){return Ts(e,new gs(t),n)};function Ts(e,t,n){const i=e.getPriority().val(),r=bs(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=bs(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new rn(s,bn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new rn(r))),i.forEachChild(cn,((e,i)=>{const r=Ts(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ss(e,t){let n=t instanceof lt?t:new lt(t),i=e,r=ht(n);while(null!==r){const e=(0,s.DV)(i.node.children,r)||{children:{},childCount:0};i=new ks(r,i,e),n=ft(n),r=ht(n)}return i}function Os(e){return e.node.value}function Ns(e,t){e.node.value=t,Ms(e)}function As(e){return e.node.childCount>0}function xs(e){return void 0===Os(e)&&!As(e)}function Ps(e,t){F(e.node.children,((n,i)=>{t(new ks(n,e,i))}))}function Rs(e,t,n,i){n&&!i&&t(e),Ps(e,(e=>{Rs(e,t,!0,i)})),n&&i&&t(e)}function Ds(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Ls(e){return new lt(null===e.parent?e.name:Ls(e.parent)+"/"+e.name)}function Ms(e){null!==e.parent&&$s(e.parent,e.name,e)}function $s(e,t,n){const i=xs(n),r=(0,s.r3)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ms(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ms(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=/[\[\].#$\/\u0000-\u001F\u007F]/,js=/[\[\].#$\u0000-\u001F\u007F]/,Us=10485760,qs=function(e){return"string"===typeof e&&0!==e.length&&!Fs.test(e)},Hs=function(e){return"string"===typeof e&&0!==e.length&&!js.test(e)},zs=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Hs(e)},Ws=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!N(e)||e&&"object"===typeof e&&(0,s.r3)(e,".sv")},Vs=function(e,t,n,i){i&&void 0===t||Bs((0,s.gK)(e,"value"),t,n)},Bs=function(e,t,n){const i=n instanceof lt?new It(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ot(i));if("function"===typeof t)throw new Error(e+"contains a function "+Ot(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+Ot(i));if("string"===typeof t&&t.length>Us/3&&(0,s.ug)(t)>Us)throw new Error(e+"contains a string greater than "+Us+" utf8 bytes "+Ot(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(F(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!qs(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ot(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tt(i,t),Bs(e,s,i),kt(i)})),n&&r)throw new Error(e+' contains ".value" child '+Ot(i)+" in addition to actual children.")}},Ks=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=_t(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!qs(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Et(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Ys=function(e,t,n,i){if(i&&void 0===t)return;const r=(0,s.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];F(t,((e,t)=>{const i=new lt(e);if(Bs(r,t,vt(n,i)),".priority"===pt(i)&&!Ws(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)})),Ks(r,o)},Gs=function(e,t,n,i){if((!i||void 0!==n)&&!Hs(n))throw new Error((0,s.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Xs=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gs(e,t,n,i)},Js=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Qs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!qs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!zs(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function to(e,t,n){eo(e,n),io(e,(e=>Ct(e,t)))}function no(e,t,n){eo(e,n),io(e,(e=>Et(e,t)||Et(t,e)))}function io(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(ro(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ro(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&E("event: "+n.toString()),K(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="repo_interrupt",oo=25;class ao{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Un(),this.transactionQueueTree_=new ks,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function co(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||Y())e.server_=new Fn(e.repoInfo_,((t,n,i,r)=>{ho(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>fo(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Pz)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ft(e.repoInfo_,t,((t,n,i,r)=>{ho(e,t,n,i,r)}),(t=>{fo(e,t)}),(t=>{po(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new Yn(e.stats_,e.server_))),e.infoData_=new jn,e.infoSyncTree_=new Wr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Yr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),mo(e,"connected",!1),e.serverSyncTree_=new Wr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);no(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function lo(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function uo(e){return ys({timestamp:lo(e)})}function ho(e,t,n,i,r){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,s.UI)(n,(e=>bn(e)));a=es(e.serverSyncTree_,o,t,r)}else{const t=bn(n);a=Zr(e.serverSyncTree_,o,t,r)}else if(i){const t=(0,s.UI)(n,(e=>bn(e)));a=Gr(e.serverSyncTree_,o,t)}else{const t=bn(n);a=Yr(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Oo(e,o)),no(e.eventQueue_,c,a)}function fo(e,t){mo(e,"connected",t),!1===t&&yo(e)}function po(e,t){F(t,((t,n)=>{mo(e,t,n)}))}function mo(e,t,n){const i=new lt("/.info/"+t),r=bn(n);e.infoData_.updateSnapshot(i,r);const s=Yr(e.infoSyncTree_,i,r);no(e.eventQueue_,i,s)}function _o(e){return e.nextWriteId_++}function go(e,t,n,i,r){Eo(e,"set",{path:t.toString(),value:n,priority:i});const s=uo(e),o=bn(n,i),a=ns(e.serverSyncTree_,t),c=Is(o,a,s),l=_o(e),u=Vr(e.serverSyncTree_,t,c,l,!0);eo(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||S("set at "+t+" failed: "+n);const o=Kr(e.serverSyncTree_,l,!s);no(e.eventQueue_,t,o),Io(e,r,n,i)}));const h=Do(e,t);Oo(e,h),no(e.eventQueue_,h,[])}function vo(e,t,n,i){Eo(e,"update",{path:t.toString(),value:n});let r=!0;const s=uo(e),o={};if(F(n,((n,i)=>{r=!1,o[n]=Es(vt(t,n),bn(i),e.serverSyncTree_,s)})),r)E("update() called with empty data.  Don't do anything."),Io(e,i,"ok",void 0);else{const r=_o(e),s=Br(e.serverSyncTree_,t,o,r);eo(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||S("update at "+t+" failed: "+n);const a=Kr(e.serverSyncTree_,r,!o),c=a.length>0?Oo(e,t):t;no(e.eventQueue_,c,a),Io(e,i,n,s)})),F(n,(n=>{const i=Do(e,vt(t,n));Oo(e,i)})),no(e.eventQueue_,t,[])}}function yo(e){Eo(e,"onDisconnectEvents");const t=uo(e),n=Un();Hn(e.onDisconnect_,ut(),((i,r)=>{const s=Es(i,r,e.serverSyncTree_,t);qn(n,i,s)}));let i=[];Hn(n,ut(),((t,n)=>{i=i.concat(Yr(e.serverSyncTree_,t,n));const r=Do(e,t);Oo(e,r)})),e.onDisconnect_=Un(),no(e.eventQueue_,ut(),i)}function bo(e,t,n){let i;i=".info"===ht(t._path)?ts(e.infoSyncTree_,t,n):ts(e.serverSyncTree_,t,n),to(e.eventQueue_,t._path,i)}function wo(e,t,n){let i;i=".info"===ht(t._path)?Qr(e.infoSyncTree_,t,n):Qr(e.serverSyncTree_,t,n),to(e.eventQueue_,t._path,i)}function Co(e){e.persistentConnection_&&e.persistentConnection_.interrupt(so)}function Eo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function Io(e,t,n,i){t&&K((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function To(e,t,n){return ns(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function ko(e,t=e.transactionQueueTree_){if(t||Ro(e,t),Os(t)){const n=xo(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&So(e,Ls(t),n)}else As(t)&&Ps(t,(t=>{ko(e,t)}))}function So(e,t,n){const i=n.map((e=>e.currentWriteId)),r=To(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=bt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,(i=>{Eo(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Kr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ro(e,Ss(e.transactionQueueTree_,t)),ko(e,e.transactionQueueTree_),no(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)K(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Oo(e,t)}}),a)}function Oo(e,t){const n=Ao(e,t),i=Ls(n),r=xo(e,n);return No(e,r,i),i}function No(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const o=t[c],l=bt(n,o.path);let u,h=!1;if((0,s.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(Kr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=oo)h=!0,u="maxretry",r=r.concat(Kr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=To(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){Bs("transaction failed: Data returned ",i,o.path);let t=bn(i);const c="object"===typeof i&&null!=i&&(0,s.r3)(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=uo(e),h=Is(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=_o(e),a.splice(a.indexOf(l),1),r=r.concat(Vr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(Kr(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(Kr(e.serverSyncTree_,o.currentWriteId,!0))}no(e.eventQueue_,n,r),r=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?i.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):i.push((()=>t[c].onComplete(new Error(u),!1,null)))))}Ro(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)K(i[s]);ko(e,e.transactionQueueTree_)}function Ao(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Os(i))i=Ss(i,n),t=ft(t),n=ht(t);return i}function xo(e,t){const n=[];return Po(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Po(e,t,n){const i=Os(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ps(t,(t=>{Po(e,t,n)}))}function Ro(e,t){const n=Os(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ns(t,n.length>0?n:void 0)}Ps(t,(t=>{Ro(e,t)}))}function Do(e,t){const n=Ls(Ao(e,t)),i=Ss(e.transactionQueueTree_,t);return Ds(i,(t=>{Lo(e,t)})),Lo(e,i),Rs(i,(t=>{Lo(e,t)})),n}function Lo(e,t){const n=Os(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Kr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ns(t,void 0):n.length=o+1,no(e.eventQueue_,Ls(t),r);for(let e=0;e<i.length;e++)K(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function $o(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Fo=function(e,t){const n=jo(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new lt(n.pathString)}},jo=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Mo(e.substring(u,h)));const d=$o(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.Pz)(this.snapshot.exportVal())}}class qo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Wo(this._repo,this._path)}get _queryIdentifier(){const e=$n(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return $n(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof zo))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Wo extends zo{constructor(e,t){super(e,t,new Dn,!1)}get parent(){const e=gt(this._path);return null===e?null:new Wo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Vo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Ko(this.ref,e);return new Vo(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Vo(n,Ko(this.ref,t),cn))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bo(e,t){return e=(0,s.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Ko(e._root,t):e._root}function Ko(e,t){return e=(0,s.m9)(e),null===ht(e._path)?Xs("child","path",t,!1):Gs("child","path",t,!1),new Wo(e._repo,vt(e._path,t))}function Yo(e,t){e=(0,s.m9)(e),Js("push",e._path),Vs("push",t,e._path,!0);const n=lo(e._repo),i=Tn(n),r=Ko(e,i),o=Ko(e,i);let a;return a=null!=t?Go(o,t).then((()=>o)):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function Go(e,t){e=(0,s.m9)(e),Js("set",e._path),Vs("set",t,e._path,!1);const n=new s.BH;return go(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Xo(e,t){Ys("update",t,e._path,!1);const n=new s.BH;return vo(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Jo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Uo("value",this,new Vo(e.snapshotNode,new Wo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new qo(this,e,t):null}matches(e){return e instanceof Jo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Qo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new qo(this,e,t):null}createEvent(e,t){(0,s.hu)(null!=e.childName,"Child events should have a childName.");const n=Ko(new Wo(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Uo(e.type,this,new Vo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Zo(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{wo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Ho(n,s||void 0),a="value"===t?new Jo(o):new Qo(t,o);return bo(e._repo,e,a),()=>wo(e._repo,e,a)}function ea(e,t,n,i){return Zo(e,"value",t,n,i)}function ta(e,t,n,i){return Zo(e,"child_removed",t,n,i)}Or(Wo),qr(Wo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const na="FIREBASE_DATABASE_EMULATOR_HOST",ia={};let ra=!1;function sa(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Fo(s,r),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[na]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Fo(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new Q(Q.OWNER):new J(e.name,e.options,t);Qs("Invalid Firebase Database URL",c),yt(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const h=aa(l,e,u,new X(e.name,n));return new ca(h,e)}function oa(e,t){const n=ia[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Co(e),delete n[e.key]}function aa(e,t,n,i){let r=ia[t.name];r||(r={},ia[t.name]=r);let s=r[e.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ao(e,ra,n,i),r[e.toURLString()]=s,s}class ca{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(co(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(oa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function la(e=(0,i.Mq)(),t){return(0,i.qX)(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ua(e){u(i.Jn),(0,i.Xd)(new r.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sa(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(a,c,e),(0,i.KN)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ua()},8935:function(e,t,n){"use strict";n(4633);var i=Object.freeze({});function r(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function o(e){return!0===e}function a(e){return!1===e}function c(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return null!==e&&"object"===typeof e}var u=Object.prototype.toString;function h(e){return"[object Object]"===u.call(e)}function d(e){return"[object RegExp]"===u.call(e)}function f(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function m(e){return null==e?"":Array.isArray(e)||h(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function _(e){var t=parseFloat(e);return isNaN(t)?e:t}function g(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(e,t){return b.call(e,t)}function C(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var E=/-(\w)/g,I=C((function(e){return e.replace(E,(function(e,t){return t?t.toUpperCase():""}))})),T=C((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),k=/\B([A-Z])/g,S=C((function(e){return e.replace(k,"-$1").toLowerCase()}));function O(e,t){function n(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function N(e,t){return e.bind(t)}var A=Function.prototype.bind?N:O;function x(e,t){t=t||0;var n=e.length-t,i=new Array(n);while(n--)i[n]=e[n+t];return i}function P(e,t){for(var n in t)e[n]=t[n];return e}function R(e){for(var t={},n=0;n<e.length;n++)e[n]&&P(t,e[n]);return t}function D(e,t,n){}var L=function(e,t,n){return!1},M=function(e){return e};function $(e,t){if(e===t)return!0;var n=l(e),i=l(t);if(!n||!i)return!n&&!i&&String(e)===String(t);try{var r=Array.isArray(e),s=Array.isArray(t);if(r&&s)return e.length===t.length&&e.every((function(e,n){return $(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return $(e[n],t[n])}))}catch(c){return!1}}function F(e,t){for(var n=0;n<e.length;n++)if($(e[n],t))return n;return-1}function j(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var U="data-server-rendered",q=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:D,parsePlatformTagName:M,mustUseProp:L,async:!0,_lifecycleHooks:H},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function B(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var K=new RegExp("[^"+W.source+".$_\\d]");function Y(e){if(!K.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var G,X="__proto__"in{},J="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=Q&&WXEnvironment.platform.toLowerCase(),ee=J&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,ie=ee&&ee.indexOf("edge/")>0,re=(ee&&ee.indexOf("android"),ee&&/iphone|ipad|ipod|ios/.test(ee)||"ios"===Z),se=(ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee),ee&&ee.match(/firefox\/(\d+)/)),oe={}.watch,ae=!1;if(J)try{var ce={};Object.defineProperty(ce,"passive",{get:function(){ae=!0}}),window.addEventListener("test-passive",null,ce)}catch(To){}var le=function(){return void 0===G&&(G=!J&&!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),G},ue=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function he(e){return"function"===typeof e&&/native code/.test(e.toString())}var de,fe="undefined"!==typeof Symbol&&he(Symbol)&&"undefined"!==typeof Reflect&&he(Reflect.ownKeys);de="undefined"!==typeof Set&&he(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var pe=D,me=0,_e=function(){this.id=me++,this.subs=[]};_e.prototype.addSub=function(e){this.subs.push(e)},_e.prototype.removeSub=function(e){y(this.subs,e)},_e.prototype.depend=function(){_e.target&&_e.target.addDep(this)},_e.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},_e.target=null;var ge=[];function ve(e){ge.push(e),_e.target=e}function ye(){ge.pop(),_e.target=ge[ge.length-1]}var be=function(e,t,n,i,r,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},we={child:{configurable:!0}};we.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,we);var Ce=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function Ee(e){return new be(void 0,void 0,void 0,String(e))}function Ie(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Te=Array.prototype,ke=Object.create(Te),Se=["push","pop","shift","unshift","splice","sort","reverse"];Se.forEach((function(e){var t=Te[e];B(ke,e,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Oe=Object.getOwnPropertyNames(ke),Ne=!0;function Ae(e){Ne=e}var xe=function(e){this.value=e,this.dep=new _e,this.vmCount=0,B(e,"__ob__",this),Array.isArray(e)?(X?Pe(e,ke):Re(e,ke,Oe),this.observeArray(e)):this.walk(e)};function Pe(e,t){e.__proto__=t}function Re(e,t,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];B(e,s,t[s])}}function De(e,t){var n;if(l(e)&&!(e instanceof be))return w(e,"__ob__")&&e.__ob__ instanceof xe?n=e.__ob__:Ne&&!le()&&(Array.isArray(e)||h(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new xe(e)),t&&n&&n.vmCount++,n}function Le(e,t,n,i,r){var s=new _e,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var l=!r&&De(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return _e.target&&(s.depend(),l&&(l.dep.depend(),Array.isArray(t)&&Fe(t))),t},set:function(t){var i=a?a.call(e):n;t===i||t!==t&&i!==i||a&&!c||(c?c.call(e,t):n=t,l=!r&&De(t),s.notify())}})}}function Me(e,t,n){if(Array.isArray(e)&&f(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var i=e.__ob__;return e._isVue||i&&i.vmCount?n:i?(Le(i.value,t,n),i.dep.notify(),n):(e[t]=n,n)}function $e(e,t){if(Array.isArray(e)&&f(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||w(e,t)&&(delete e[t],n&&n.dep.notify())}}function Fe(e){for(var t=void 0,n=0,i=e.length;n<i;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Fe(t)}xe.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Le(e,t[n])},xe.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)De(e[t])};var je=z.optionMergeStrategies;function Ue(e,t){if(!t)return e;for(var n,i,r,s=fe?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=e[n],r=t[n],w(e,n)?i!==r&&h(i)&&h(r)&&Ue(i,r):Me(e,n,r));return e}function qe(e,t,n){return n?function(){var i="function"===typeof t?t.call(n,n):t,r="function"===typeof e?e.call(n,n):e;return i?Ue(i,r):r}:t?e?function(){return Ue("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function He(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?ze(n):n}function ze(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function We(e,t,n,i){var r=Object.create(e||null);return t?P(r,t):r}je.data=function(e,t,n){return n?qe(e,t,n):t&&"function"!==typeof t?e:qe(e,t)},H.forEach((function(e){je[e]=He})),q.forEach((function(e){je[e+"s"]=We})),je.watch=function(e,t,n,i){if(e===oe&&(e=void 0),t===oe&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var r={};for(var s in P(r,e),t){var o=r[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},je.props=je.methods=je.inject=je.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return P(r,e),t&&P(r,t),r},je.provide=qe;var Ve=function(e,t){return void 0===t?e:t};function Be(e,t){var n=e.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=I(r),o[s]={type:null})}else if(h(n))for(var a in n)r=n[a],s=I(a),o[s]=h(r)?r:{type:r};else 0;e.props=o}}function Ke(e,t){var n=e.inject;if(n){var i=e.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(h(n))for(var s in n){var o=n[s];i[s]=h(o)?P({from:s},o):{from:o}}else 0}}function Ye(e){var t=e.directives;if(t)for(var n in t){var i=t[n];"function"===typeof i&&(t[n]={bind:i,update:i})}}function Ge(e,t,n){if("function"===typeof t&&(t=t.options),Be(t,n),Ke(t,n),Ye(t),!t._base&&(t.extends&&(e=Ge(e,t.extends,n)),t.mixins))for(var i=0,r=t.mixins.length;i<r;i++)e=Ge(e,t.mixins[i],n);var s,o={};for(s in e)a(s);for(s in t)w(e,s)||a(s);function a(i){var r=je[i]||Ve;o[i]=r(e[i],t[i],n,i)}return o}function Xe(e,t,n,i){if("string"===typeof n){var r=e[t];if(w(r,n))return r[n];var s=I(n);if(w(r,s))return r[s];var o=T(s);if(w(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Je(e,t,n,i){var r=t[e],s=!w(n,e),o=n[e],a=nt(Boolean,r.type);if(a>-1)if(s&&!w(r,"default"))o=!1;else if(""===o||o===S(e)){var c=nt(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Qe(i,r,e);var l=Ne;Ae(!0),De(o),Ae(l)}return o}function Qe(e,t,n){if(w(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof i&&"Function"!==et(t.type)?i.call(e):i}}var Ze=/^\s*function (\w+)/;function et(e){var t=e&&e.toString().match(Ze);return t?t[1]:""}function tt(e,t){return et(e)===et(t)}function nt(e,t){if(!Array.isArray(t))return tt(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(tt(t[n],e))return n;return-1}function it(e,t,n){ve();try{if(t){var i=t;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,e,t,n);if(o)return}catch(To){st(To,i,"errorCaptured hook")}}}st(e,t,n)}finally{ye()}}function rt(e,t,n,i,r){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(e){return it(e,i,r+" (Promise/async)")})),s._handled=!0)}catch(To){it(To,i,r)}return s}function st(e,t,n){if(z.errorHandler)try{return z.errorHandler.call(null,e,t,n)}catch(To){To!==e&&ot(To,null,"config.errorHandler")}ot(e,t,n)}function ot(e,t,n){if(!J&&!Q||"undefined"===typeof console)throw e;console.error(e)}var at,ct=!1,lt=[],ut=!1;function ht(){ut=!1;var e=lt.slice(0);lt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&he(Promise)){var dt=Promise.resolve();at=function(){dt.then(ht),re&&setTimeout(D)},ct=!0}else if(te||"undefined"===typeof MutationObserver||!he(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())at="undefined"!==typeof setImmediate&&he(setImmediate)?function(){setImmediate(ht)}:function(){setTimeout(ht,0)};else{var ft=1,pt=new MutationObserver(ht),mt=document.createTextNode(String(ft));pt.observe(mt,{characterData:!0}),at=function(){ft=(ft+1)%2,mt.data=String(ft)},ct=!0}function _t(e,t){var n;if(lt.push((function(){if(e)try{e.call(t)}catch(To){it(To,t,"nextTick")}else n&&n(t)})),ut||(ut=!0,at()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var gt=new de;function vt(e){yt(e,gt),gt.clear()}function yt(e,t){var n,i,r=Array.isArray(e);if(!(!r&&!l(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(r){n=e.length;while(n--)yt(e[n],t)}else{i=Object.keys(e),n=i.length;while(n--)yt(e[i[n]],t)}}}var bt=C((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var i="!"===e.charAt(0);return e=i?e.slice(1):e,{name:e,once:n,capture:i,passive:t}}));function wt(e,t){function n(){var e=arguments,i=n.fns;if(!Array.isArray(i))return rt(i,null,arguments,t,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)rt(r[s],null,e,t,"v-on handler")}return n.fns=e,n}function Ct(e,t,n,i,s,a){var c,l,u,h;for(c in e)l=e[c],u=t[c],h=bt(c),r(l)||(r(u)?(r(l.fns)&&(l=e[c]=wt(l,a)),o(h.once)&&(l=e[c]=s(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,e[c]=u));for(c in t)r(e[c])&&(h=bt(c),i(h.name,t[c],h.capture))}function Et(e,t,n){var i;e instanceof be&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),y(i.fns,c)}r(a)?i=wt([c]):s(a.fns)&&o(a.merged)?(i=a,i.fns.push(c)):i=wt([a,c]),i.merged=!0,e[t]=i}function It(e,t,n){var i=t.options.props;if(!r(i)){var o={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var l in i){var u=S(l);Tt(o,c,l,u,!0)||Tt(o,a,l,u,!1)}return o}}function Tt(e,t,n,i,r){if(s(t)){if(w(t,n))return e[n]=t[n],r||delete t[n],!0;if(w(t,i))return e[n]=t[i],r||delete t[i],!0}return!1}function kt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function St(e){return c(e)?[Ee(e)]:Array.isArray(e)?Nt(e):void 0}function Ot(e){return s(e)&&s(e.text)&&a(e.isComment)}function Nt(e,t){var n,i,a,l,u=[];for(n=0;n<e.length;n++)i=e[n],r(i)||"boolean"===typeof i||(a=u.length-1,l=u[a],Array.isArray(i)?i.length>0&&(i=Nt(i,(t||"")+"_"+n),Ot(i[0])&&Ot(l)&&(u[a]=Ee(l.text+i[0].text),i.shift()),u.push.apply(u,i)):c(i)?Ot(l)?u[a]=Ee(l.text+i):""!==i&&u.push(Ee(i)):Ot(i)&&Ot(l)?u[a]=Ee(l.text+i.text):(o(e._isVList)&&s(i.tag)&&r(i.key)&&s(t)&&(i.key="__vlist"+t+"_"+n+"__"),u.push(i)));return u}function At(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function xt(e){var t=Pt(e.$options.inject,e);t&&(Ae(!1),Object.keys(t).forEach((function(n){Le(e,n,t[n])})),Ae(!0))}function Pt(e,t){if(e){for(var n=Object.create(null),i=fe?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=e[s].from,a=t;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"===typeof c?c.call(t):c}else 0}}return n}}function Rt(e,t){if(!e||!e.length)return{};for(var n={},i=0,r=e.length;i<r;i++){var s=e[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in n)n[l].every(Dt)&&delete n[l];return n}function Dt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Lt(e){return e.isComment&&e.asyncFactory}function Mt(e,t,n){var r,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&n&&n!==i&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in r={},e)e[c]&&"$"!==c[0]&&(r[c]=$t(t,c,e[c]))}else r={};for(var l in t)l in r||(r[l]=Ft(t,l));return e&&Object.isExtensible(e)&&(e._normalized=r),B(r,"$stable",o),B(r,"$key",a),B(r,"$hasNormal",s),r}function $t(e,t,n){var i=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:St(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Lt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:i,enumerable:!0,configurable:!0}),i}function Ft(e,t){return function(){return e[t]}}function jt(e,t){var n,i,r,o,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),i=0,r=e.length;i<r;i++)n[i]=t(e[i],i);else if("number"===typeof e)for(n=new Array(e),i=0;i<e;i++)n[i]=t(i+1,i);else if(l(e))if(fe&&e[Symbol.iterator]){n=[];var c=e[Symbol.iterator](),u=c.next();while(!u.done)n.push(t(u.value,n.length)),u=c.next()}else for(o=Object.keys(e),n=new Array(o.length),i=0,r=o.length;i<r;i++)a=o[i],n[i]=t(e[a],a,i);return s(n)||(n=[]),n._isVList=!0,n}function Ut(e,t,n,i){var r,s=this.$scopedSlots[e];s?(n=n||{},i&&(n=P(P({},i),n)),r=s(n)||("function"===typeof t?t():t)):r=this.$slots[e]||("function"===typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function qt(e){return Xe(this.$options,"filters",e,!0)||M}function Ht(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function zt(e,t,n,i,r){var s=z.keyCodes[t]||n;return r&&i&&!z.keyCodes[t]?Ht(r,i):s?Ht(s,e):i?S(i)!==t:void 0===e}function Wt(e,t,n,i,r){if(n)if(l(n)){var s;Array.isArray(n)&&(n=R(n));var o=function(o){if("class"===o||"style"===o||v(o))s=e;else{var a=e.attrs&&e.attrs.type;s=i||z.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=I(o),l=S(o);if(!(c in s)&&!(l in s)&&(s[o]=n[o],r)){var u=e.on||(e.on={});u["update:"+o]=function(e){n[o]=e}}};for(var a in n)o(a)}else;return e}function Vt(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Kt(i,"__static__"+e,!1)),i}function Bt(e,t,n){return Kt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Kt(e,t,n){if(Array.isArray(e))for(var i=0;i<e.length;i++)e[i]&&"string"!==typeof e[i]&&Yt(e[i],t+"_"+i,n);else Yt(e,t,n)}function Yt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Gt(e,t){if(t)if(h(t)){var n=e.on=e.on?P({},e.on):{};for(var i in t){var r=n[i],s=t[i];n[i]=r?[].concat(r,s):s}}else;return e}function Xt(e,t,n,i){t=t||{$stable:!n};for(var r=0;r<e.length;r++){var s=e[r];Array.isArray(s)?Xt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return i&&(t.$key=i),t}function Jt(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"===typeof i&&i&&(e[t[n]]=t[n+1])}return e}function Qt(e,t){return"string"===typeof e?t+e:e}function Zt(e){e._o=Bt,e._n=_,e._s=m,e._l=jt,e._t=Ut,e._q=$,e._i=F,e._m=Vt,e._f=qt,e._k=zt,e._b=Wt,e._v=Ee,e._e=Ce,e._u=Xt,e._g=Gt,e._d=Jt,e._p=Qt}function en(e,t,n,r,s){var a,c=this,l=s.options;w(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var u=o(l._compiled),h=!u;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||i,this.injections=Pt(l.inject,r),this.slots=function(){return c.$slots||Mt(e.scopedSlots,c.$slots=Rt(n,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Mt(e.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Mt(e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,i){var s=pn(a,e,t,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=l._scopeId,s.fnContext=r),s}:this._c=function(e,t,n,i){return pn(a,e,t,n,i,h)}}function tn(e,t,n,r,o){var a=e.options,c={},l=a.props;if(s(l))for(var u in l)c[u]=Je(u,l,t||i);else s(n.attrs)&&rn(c,n.attrs),s(n.props)&&rn(c,n.props);var h=new en(n,c,o,r,e),d=a.render.call(null,h._c,h);if(d instanceof be)return nn(d,n,h.parent,a,h);if(Array.isArray(d)){for(var f=St(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=nn(f[m],n,h.parent,a,h);return p}}function nn(e,t,n,i,r){var s=Ie(e);return s.fnContext=n,s.fnOptions=i,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function rn(e,t){for(var n in t)e[I(n)]=t[n]}Zt(en.prototype);var sn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;sn.prepatch(n,n)}else{var i=e.componentInstance=cn(e,Pn);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,i=t.componentInstance=e.componentInstance;$n(i,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,qn(n,"mounted")),e.data.keepAlive&&(t._isMounted?ei(n):jn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Un(t,!0):t.$destroy())}},on=Object.keys(sn);function an(e,t,n,i,a){if(!r(e)){var c=n.$options._base;if(l(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(r(e.cid)&&(u=e,e=In(u,c),void 0===e))return En(u,t,n,i,a);t=t||{},Ei(e),s(t.model)&&hn(e.options,t);var h=It(t,e,a);if(o(e.options.functional))return tn(e,h,t,n,i);var d=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}ln(t);var p=e.options.name||a,m=new be("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:i},u);return m}}}function cn(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return s(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(n)}function ln(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var i=on[n],r=t[i],s=sn[i];r===s||r&&r._merged||(t[i]=r?un(s,r):s)}}function un(e,t){var n=function(n,i){e(n,i),t(n,i)};return n._merged=!0,n}function hn(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var r=t.on||(t.on={}),o=r[i],a=t.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(r[i]=[a].concat(o)):r[i]=a}var dn=1,fn=2;function pn(e,t,n,i,r,s){return(Array.isArray(n)||c(n))&&(r=i,i=n,n=void 0),o(s)&&(r=fn),mn(e,t,n,i,r)}function mn(e,t,n,i,r){if(s(n)&&s(n.__ob__))return Ce();if(s(n)&&s(n.is)&&(t=n.is),!t)return Ce();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),r===fn?i=St(i):r===dn&&(i=kt(i)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||z.getTagNamespace(t),o=z.isReservedTag(t)?new be(z.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!s(c=Xe(e.$options,"components",t))?new be(t,n,i,void 0,void 0,e):an(c,n,e,i,t)):o=an(t,n,e,i);return Array.isArray(o)?o:s(o)?(s(a)&&_n(o,a),s(n)&&gn(n),o):Ce()}function _n(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var i=0,a=e.children.length;i<a;i++){var c=e.children[i];s(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&_n(c,t,n)}}function gn(e){l(e.style)&&vt(e.style),l(e.class)&&vt(e.class)}function vn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=Rt(t._renderChildren,r),e.$scopedSlots=i,e._c=function(t,n,i,r){return pn(e,t,n,i,r,!1)},e.$createElement=function(t,n,i,r){return pn(e,t,n,i,r,!0)};var s=n&&n.data;Le(e,"$attrs",s&&s.attrs||i,null,!0),Le(e,"$listeners",t._parentListeners||i,null,!0)}var yn,bn=null;function wn(e){Zt(e.prototype),e.prototype.$nextTick=function(e){return _t(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,r=n._parentVnode;r&&(t.$scopedSlots=Mt(r.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=r;try{bn=t,e=i.call(t._renderProxy,t.$createElement)}catch(To){it(To,t,"render"),e=t._vnode}finally{bn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=Ce()),e.parent=r,e}}function Cn(e,t){return(e.__esModule||fe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),l(e)?t.extend(e):e}function En(e,t,n,i,r){var s=Ce();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:i,tag:r},s}function In(e,t){if(o(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=bn;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),o(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var i=e.owners=[n],a=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return y(i,n)}));var h=function(e){for(var t=0,n=i.length;t<n;t++)i[t].$forceUpdate();e&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=j((function(n){e.resolved=Cn(n,t),a?i.length=0:h(!0)})),f=j((function(t){s(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,f);return l(m)&&(p(m)?r(e.resolved)&&m.then(d,f):p(m.component)&&(m.component.then(d,f),s(m.error)&&(e.errorComp=Cn(m.error,t)),s(m.loading)&&(e.loadingComp=Cn(m.loading,t),0===m.delay?e.loading=!0:c=setTimeout((function(){c=null,r(e.resolved)&&r(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(u=setTimeout((function(){u=null,r(e.resolved)&&f(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function Tn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||Lt(n)))return n}}function kn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&An(e,t)}function Sn(e,t){yn.$on(e,t)}function On(e,t){yn.$off(e,t)}function Nn(e,t){var n=yn;return function i(){var r=t.apply(null,arguments);null!==r&&n.$off(e,i)}}function An(e,t,n){yn=e,Ct(t,n||{},Sn,On,Nn,e),yn=void 0}function xn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var i=this;if(Array.isArray(e))for(var r=0,s=e.length;r<s;r++)i.$on(e[r],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var i=0,r=e.length;i<r;i++)n.$off(e[i],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var a=o.length;while(a--)if(s=o[a],s===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?x(n):n;for(var i=x(arguments,1),r='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)rt(n[s],t,i,t,r)}return t}}var Pn=null;function Rn(e){var t=Pn;return Pn=e,function(){Pn=t}}function Dn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ln(e){e.prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,s=Rn(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){qn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),qn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Mn(e,t,n){var i;return e.$el=t,e.$options.render||(e.$options.render=Ce),qn(e,"beforeMount"),i=function(){e._update(e._render(),n)},new ri(e,i,D,{before:function(){e._isMounted&&!e._isDestroyed&&qn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,qn(e,"mounted")),e}function $n(e,t,n,r,s){var o=r.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),l=!!(s||e.$options._renderChildren||c);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=s,e.$attrs=r.data.attrs||i,e.$listeners=n||i,t&&e.$options.props){Ae(!1);for(var u=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;u[f]=Je(f,p,t,e)}Ae(!0),e.$options.propsData=t}n=n||i;var m=e.$options._parentListeners;e.$options._parentListeners=n,An(e,n,m),l&&(e.$slots=Rt(s,r.context),e.$forceUpdate())}function Fn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function jn(e,t){if(t){if(e._directInactive=!1,Fn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)jn(e.$children[n]);qn(e,"activated")}}function Un(e,t){if((!t||(e._directInactive=!0,!Fn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Un(e.$children[n]);qn(e,"deactivated")}}function qn(e,t){ve();var n=e.$options[t],i=t+" hook";if(n)for(var r=0,s=n.length;r<s;r++)rt(n[r],e,null,e,i);e._hasHookEvent&&e.$emit("hook:"+t),ye()}var Hn=[],zn=[],Wn={},Vn=!1,Bn=!1,Kn=0;function Yn(){Kn=Hn.length=zn.length=0,Wn={},Vn=Bn=!1}var Gn=0,Xn=Date.now;if(J&&!te){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Xn()>document.createEvent("Event").timeStamp&&(Xn=function(){return Jn.now()})}function Qn(){var e,t;for(Gn=Xn(),Bn=!0,Hn.sort((function(e,t){return e.id-t.id})),Kn=0;Kn<Hn.length;Kn++)e=Hn[Kn],e.before&&e.before(),t=e.id,Wn[t]=null,e.run();var n=zn.slice(),i=Hn.slice();Yn(),ti(n),Zn(i),ue&&z.devtools&&ue.emit("flush")}function Zn(e){var t=e.length;while(t--){var n=e[t],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&qn(i,"updated")}}function ei(e){e._inactive=!1,zn.push(e)}function ti(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,jn(e[t],!0)}function ni(e){var t=e.id;if(null==Wn[t]){if(Wn[t]=!0,Bn){var n=Hn.length-1;while(n>Kn&&Hn[n].id>e.id)n--;Hn.splice(n+1,0,e)}else Hn.push(e);Vn||(Vn=!0,_t(Qn))}}var ii=0,ri=function(e,t,n,i,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ii,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new de,this.newDepIds=new de,this.expression="","function"===typeof t?this.getter=t:(this.getter=Y(t),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};ri.prototype.get=function(){var e;ve(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(To){if(!this.user)throw To;it(To,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&vt(e),ye(),this.cleanupDeps()}return e},ri.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ri.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ri.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ni(this)},ri.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';rt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},ri.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ri.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},ri.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var si={enumerable:!0,configurable:!0,get:D,set:D};function oi(e,t,n){si.get=function(){return this[t][n]},si.set=function(e){this[t][n]=e},Object.defineProperty(e,n,si)}function ai(e){e._watchers=[];var t=e.$options;t.props&&ci(e,t.props),t.methods&&_i(e,t.methods),t.data?li(e):De(e._data={},!0),t.computed&&di(e,t.computed),t.watch&&t.watch!==oe&&gi(e,t.watch)}function ci(e,t){var n=e.$options.propsData||{},i=e._props={},r=e.$options._propKeys=[],s=!e.$parent;s||Ae(!1);var o=function(s){r.push(s);var o=Je(s,t,n,e);Le(i,s,o),s in e||oi(e,"_props",s)};for(var a in t)o(a);Ae(!0)}function li(e){var t=e.$options.data;t=e._data="function"===typeof t?ui(t,e):t||{},h(t)||(t={});var n=Object.keys(t),i=e.$options.props,r=(e.$options.methods,n.length);while(r--){var s=n[r];0,i&&w(i,s)||V(s)||oi(e,"_data",s)}De(t,!0)}function ui(e,t){ve();try{return e.call(t,t)}catch(To){return it(To,t,"data()"),{}}finally{ye()}}var hi={lazy:!0};function di(e,t){var n=e._computedWatchers=Object.create(null),i=le();for(var r in t){var s=t[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ri(e,o||D,D,hi)),r in e||fi(e,r,s)}}function fi(e,t,n){var i=!le();"function"===typeof n?(si.get=i?pi(t):mi(n),si.set=D):(si.get=n.get?i&&!1!==n.cache?pi(t):mi(n.get):D,si.set=n.set||D),Object.defineProperty(e,t,si)}function pi(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),_e.target&&t.depend(),t.value}}function mi(e){return function(){return e.call(this,this)}}function _i(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?D:A(t[n],e)}function gi(e,t){for(var n in t){var i=t[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)vi(e,n,i[r]);else vi(e,n,i)}}function vi(e,t,n,i){return h(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,i)}function yi(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Me,e.prototype.$delete=$e,e.prototype.$watch=function(e,t,n){var i=this;if(h(t))return vi(i,e,t,n);n=n||{},n.user=!0;var r=new ri(i,e,t,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';ve(),rt(t,i,[r.value],i,s),ye()}return function(){r.teardown()}}}var bi=0;function wi(e){e.prototype._init=function(e){var t=this;t._uid=bi++,t._isVue=!0,e&&e._isComponent?Ci(t,e):t.$options=Ge(Ei(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Dn(t),kn(t),vn(t),qn(t,"beforeCreate"),xt(t),ai(t),At(t),qn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Ci(e,t){var n=e.$options=Object.create(e.constructor.options),i=t._parentVnode;n.parent=t.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ei(e){var t=e.options;if(e.super){var n=Ei(e.super),i=e.superOptions;if(n!==i){e.superOptions=n;var r=Ii(e);r&&P(e.extendOptions,r),t=e.options=Ge(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Ii(e){var t,n=e.options,i=e.sealedOptions;for(var r in n)n[r]!==i[r]&&(t||(t={}),t[r]=n[r]);return t}function Ti(e){this._init(e)}function ki(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Si(e){e.mixin=function(e){return this.options=Ge(this.options,e),this}}function Oi(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,i=n.cid,r=e._Ctor||(e._Ctor={});if(r[i])return r[i];var s=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ge(n.options,e),o["super"]=n,o.options.props&&Ni(o),o.options.computed&&Ai(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,q.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=P({},o.options),r[i]=o,o}}function Ni(e){var t=e.options.props;for(var n in t)oi(e.prototype,"_props",n)}function Ai(e){var t=e.options.computed;for(var n in t)fi(e.prototype,n,t[n])}function xi(e){q.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&h(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Pi(e){return e&&(e.Ctor.options.name||e.tag)}function Ri(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function Di(e,t){var n=e.cache,i=e.keys,r=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Li(n,s,i,r)}}}function Li(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,y(n,t)}wi(Ti),yi(Ti),xn(Ti),Ln(Ti),wn(Ti);var Mi=[String,RegExp,Array],$i={name:"keep-alive",abstract:!0,props:{include:Mi,exclude:Mi,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,i=e.vnodeToCache,r=e.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;t[r]={name:Pi(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Li(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Li(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Di(e,(function(e){return Ri(t,e)}))})),this.$watch("exclude",(function(t){Di(e,(function(e){return!Ri(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Tn(e),n=t&&t.componentOptions;if(n){var i=Pi(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!Ri(s,i))||o&&i&&Ri(o,i))return t;var a=this,c=a.cache,l=a.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[u]?(t.componentInstance=c[u].componentInstance,y(l,u),l.push(u)):(this.vnodeToCache=t,this.keyToCache=u),t.data.keepAlive=!0}return t||e&&e[0]}},Fi={KeepAlive:$i};function ji(e){var t={get:function(){return z}};Object.defineProperty(e,"config",t),e.util={warn:pe,extend:P,mergeOptions:Ge,defineReactive:Le},e.set=Me,e.delete=$e,e.nextTick=_t,e.observable=function(e){return De(e),e},e.options=Object.create(null),q.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,P(e.options.components,Fi),ki(e),Si(e),Oi(e),xi(e)}ji(Ti),Object.defineProperty(Ti.prototype,"$isServer",{get:le}),Object.defineProperty(Ti.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ti,"FunctionalRenderContext",{value:en}),Ti.version="2.6.14";var Ui=g("style,class"),qi=g("input,textarea,option,select,progress"),Hi=function(e,t,n){return"value"===n&&qi(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},zi=g("contenteditable,draggable,spellcheck"),Wi=g("events,caret,typing,plaintext-only"),Vi=function(e,t){return Xi(t)||"false"===t?"false":"contenteditable"===e&&Wi(t)?t:"true"},Bi=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Ki="http://www.w3.org/1999/xlink",Yi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Gi=function(e){return Yi(e)?e.slice(6,e.length):""},Xi=function(e){return null==e||!1===e};function Ji(e){var t=e.data,n=e,i=e;while(s(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(t=Qi(i.data,t));while(s(n=n.parent))n&&n.data&&(t=Qi(t,n.data));return Zi(t.staticClass,t.class)}function Qi(e,t){return{staticClass:er(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Zi(e,t){return s(e)||s(t)?er(e,tr(t)):""}function er(e,t){return e?t?e+" "+t:e:t||""}function tr(e){return Array.isArray(e)?nr(e):l(e)?ir(e):"string"===typeof e?e:""}function nr(e){for(var t,n="",i=0,r=e.length;i<r;i++)s(t=tr(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ir(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var rr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},sr=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),or=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ar=function(e){return sr(e)||or(e)};function cr(e){return or(e)?"svg":"math"===e?"math":void 0}var lr=Object.create(null);function ur(e){if(!J)return!0;if(ar(e))return!1;if(e=e.toLowerCase(),null!=lr[e])return lr[e];var t=document.createElement(e);return e.indexOf("-")>-1?lr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:lr[e]=/HTMLUnknownElement/.test(t.toString())}var hr=g("text,number,password,search,email,tel,url");function dr(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function fr(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pr(e,t){return document.createElementNS(rr[e],t)}function mr(e){return document.createTextNode(e)}function _r(e){return document.createComment(e)}function gr(e,t,n){e.insertBefore(t,n)}function vr(e,t){e.removeChild(t)}function yr(e,t){e.appendChild(t)}function br(e){return e.parentNode}function wr(e){return e.nextSibling}function Cr(e){return e.tagName}function Er(e,t){e.textContent=t}function Ir(e,t){e.setAttribute(t,"")}var Tr=Object.freeze({createElement:fr,createElementNS:pr,createTextNode:mr,createComment:_r,insertBefore:gr,removeChild:vr,appendChild:yr,parentNode:br,nextSibling:wr,tagName:Cr,setTextContent:Er,setStyleScope:Ir}),kr={create:function(e,t){Sr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Sr(e,!0),Sr(t))},destroy:function(e){Sr(e,!0)}};function Sr(e,t){var n=e.data.ref;if(s(n)){var i=e.context,r=e.componentInstance||e.elm,o=i.$refs;t?Array.isArray(o[n])?y(o[n],r):o[n]===r&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var Or=new be("",{},[]),Nr=["create","activate","update","remove","destroy"];function Ar(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&xr(e,t)||o(e.isAsyncPlaceholder)&&r(t.asyncFactory.error))}function xr(e,t){if("input"!==e.tag)return!0;var n,i=s(n=e.data)&&s(n=n.attrs)&&n.type,r=s(n=t.data)&&s(n=n.attrs)&&n.type;return i===r||hr(i)&&hr(r)}function Pr(e,t,n){var i,r,o={};for(i=t;i<=n;++i)r=e[i].key,s(r)&&(o[r]=i);return o}function Rr(e){var t,n,i={},a=e.modules,l=e.nodeOps;for(t=0;t<Nr.length;++t)for(i[Nr[t]]=[],n=0;n<a.length;++n)s(a[n][Nr[t]])&&i[Nr[t]].push(a[n][Nr[t]]);function u(e){return new be(l.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=l.parentNode(e);s(t)&&l.removeChild(t,e)}function f(e,t,n,i,r,a,c){if(s(e.elm)&&s(a)&&(e=a[c]=Ie(e)),e.isRootInsert=!r,!p(e,t,n,i)){var u=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),C(e),y(e,h,t),s(u)&&w(e,t),v(n,e.elm,i)):o(e.isComment)?(e.elm=l.createComment(e.text),v(n,e.elm,i)):(e.elm=l.createTextNode(e.text),v(n,e.elm,i))}}function p(e,t,n,i){var r=e.data;if(s(r)){var a=s(e.componentInstance)&&r.keepAlive;if(s(r=r.hook)&&s(r=r.init)&&r(e,!1),s(e.componentInstance))return m(e,t),v(n,e.elm,i),o(a)&&_(e,t,n,i),!0}}function m(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(w(e,t),C(e)):(Sr(e),t.push(e))}function _(e,t,n,r){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<i.activate.length;++o)i.activate[o](Or,a);t.push(a);break}v(n,e.elm,r)}function v(e,t,n){s(e)&&(s(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function y(e,t,n){if(Array.isArray(t)){0;for(var i=0;i<t.length;++i)f(t[i],n,e.elm,null,!0,t,i)}else c(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function b(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function w(e,n){for(var r=0;r<i.create.length;++r)i.create[r](Or,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(Or,e),s(t.insert)&&n.push(e))}function C(e){var t;if(s(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}s(t=Pn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function E(e,t,n,i,r,s){for(;i<=r;++i)f(n[i],s,e,t,!1,n,i)}function I(e){var t,n,r=e.data;if(s(r))for(s(t=r.hook)&&s(t=t.destroy)&&t(e),t=0;t<i.destroy.length;++t)i.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)I(e.children[n])}function T(e,t,n){for(;t<=n;++t){var i=e[t];s(i)&&(s(i.tag)?(k(i),I(i)):d(i.elm))}}function k(e,t){if(s(t)||s(e.data)){var n,r=i.remove.length+1;for(s(t)?t.listeners+=r:t=h(e.elm,r),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&k(n,t),n=0;n<i.remove.length;++n)i.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else d(e.elm)}function S(e,t,n,i,o){var a,c,u,h,d=0,p=0,m=t.length-1,_=t[0],g=t[m],v=n.length-1,y=n[0],b=n[v],w=!o;while(d<=m&&p<=v)r(_)?_=t[++d]:r(g)?g=t[--m]:Ar(_,y)?(N(_,y,i,n,p),_=t[++d],y=n[++p]):Ar(g,b)?(N(g,b,i,n,v),g=t[--m],b=n[--v]):Ar(_,b)?(N(_,b,i,n,v),w&&l.insertBefore(e,_.elm,l.nextSibling(g.elm)),_=t[++d],b=n[--v]):Ar(g,y)?(N(g,y,i,n,p),w&&l.insertBefore(e,g.elm,_.elm),g=t[--m],y=n[++p]):(r(a)&&(a=Pr(t,d,m)),c=s(y.key)?a[y.key]:O(y,t,d,m),r(c)?f(y,i,e,_.elm,!1,n,p):(u=t[c],Ar(u,y)?(N(u,y,i,n,p),t[c]=void 0,w&&l.insertBefore(e,u.elm,_.elm)):f(y,i,e,_.elm,!1,n,p)),y=n[++p]);d>m?(h=r(n[v+1])?null:n[v+1].elm,E(e,h,n,p,v,i)):p>v&&T(t,d,m)}function O(e,t,n,i){for(var r=n;r<i;r++){var o=t[r];if(s(o)&&Ar(e,o))return r}}function N(e,t,n,a,c,u){if(e!==t){s(t.elm)&&s(a)&&(t=a[c]=Ie(t));var h=t.elm=e.elm;if(o(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?P(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(s(f)&&b(t)){for(d=0;d<i.update.length;++d)i.update[d](e,t);s(d=f.hook)&&s(d=d.update)&&d(e,t)}r(t.text)?s(p)&&s(m)?p!==m&&S(h,p,m,n,u):s(m)?(s(e.text)&&l.setTextContent(h,""),E(h,null,m,0,m.length-1,n)):s(p)?T(p,0,p.length-1):s(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(e,t)}}}function A(e,t,n){if(o(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var x=g("attrs,class,staticClass,staticStyle,key");function P(e,t,n,i){var r,a=t.tag,c=t.data,l=t.children;if(i=i||c&&c.pre,t.elm=e,o(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(r=c.hook)&&s(r=r.init)&&r(t,!0),s(r=t.componentInstance)))return m(t,n),!0;if(s(a)){if(s(l))if(e.hasChildNodes())if(s(r=c)&&s(r=r.domProps)&&s(r=r.innerHTML)){if(r!==e.innerHTML)return!1}else{for(var u=!0,h=e.firstChild,d=0;d<l.length;d++){if(!h||!P(h,l[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else y(t,l,n);if(s(c)){var f=!1;for(var p in c)if(!x(p)){f=!0,w(t,n);break}!f&&c["class"]&&vt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!r(t)){var c=!1,h=[];if(r(e))c=!0,f(t,h);else{var d=s(e.nodeType);if(!d&&Ar(e,t))N(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(U)&&(e.removeAttribute(U),n=!0),o(n)&&P(e,t,h))return A(t,h,!0),e;e=u(e)}var p=e.elm,m=l.parentNode(p);if(f(t,h,p._leaveCb?null:m,l.nextSibling(p)),s(t.parent)){var _=t.parent,g=b(t);while(_){for(var v=0;v<i.destroy.length;++v)i.destroy[v](_);if(_.elm=t.elm,g){for(var y=0;y<i.create.length;++y)i.create[y](Or,_);var w=_.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Sr(_);_=_.parent}}s(m)?T([e],0,0):s(e.tag)&&I(e)}}return A(t,h,c),t.elm}s(e)&&I(e)}}var Dr={create:Lr,update:Lr,destroy:function(e){Lr(e,Or)}};function Lr(e,t){(e.data.directives||t.data.directives)&&Mr(e,t)}function Mr(e,t){var n,i,r,s=e===Or,o=t===Or,a=Fr(e.data.directives,e.context),c=Fr(t.data.directives,t.context),l=[],u=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Ur(r,"update",t,e),r.def&&r.def.componentUpdated&&u.push(r)):(Ur(r,"bind",t,e),r.def&&r.def.inserted&&l.push(r));if(l.length){var h=function(){for(var n=0;n<l.length;n++)Ur(l[n],"inserted",t,e)};s?Et(t,"insert",h):h()}if(u.length&&Et(t,"postpatch",(function(){for(var n=0;n<u.length;n++)Ur(u[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||Ur(a[n],"unbind",e,e,o)}var $r=Object.create(null);function Fr(e,t){var n,i,r=Object.create(null);if(!e)return r;for(n=0;n<e.length;n++)i=e[n],i.modifiers||(i.modifiers=$r),r[jr(i)]=i,i.def=Xe(t.$options,"directives",i.name,!0);return r}function jr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Ur(e,t,n,i,r){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,i,r)}catch(To){it(To,n.context,"directive "+e.name+" "+t+" hook")}}var qr=[kr,Dr];function Hr(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(e.data.attrs)||!r(t.data.attrs))){var i,o,a,c=t.elm,l=e.data.attrs||{},u=t.data.attrs||{};for(i in s(u.__ob__)&&(u=t.data.attrs=P({},u)),u)o=u[i],a=l[i],a!==o&&zr(c,i,o,t.data.pre);for(i in(te||ie)&&u.value!==l.value&&zr(c,"value",u.value),l)r(u[i])&&(Yi(i)?c.removeAttributeNS(Ki,Gi(i)):zi(i)||c.removeAttribute(i))}}function zr(e,t,n,i){i||e.tagName.indexOf("-")>-1?Wr(e,t,n):Bi(t)?Xi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):zi(t)?e.setAttribute(t,Vi(t,n)):Yi(t)?Xi(n)?e.removeAttributeNS(Ki,Gi(t)):e.setAttributeNS(Ki,t,n):Wr(e,t,n)}function Wr(e,t,n){if(Xi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var i=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,n)}}var Vr={create:Hr,update:Hr};function Br(e,t){var n=t.elm,i=t.data,o=e.data;if(!(r(i.staticClass)&&r(i.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Ji(t),c=n._transitionClasses;s(c)&&(a=er(a,tr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Kr,Yr={create:Br,update:Br},Gr="__r",Xr="__c";function Jr(e){if(s(e[Gr])){var t=te?"change":"input";e[t]=[].concat(e[Gr],e[t]||[]),delete e[Gr]}s(e[Xr])&&(e.change=[].concat(e[Xr],e.change||[]),delete e[Xr])}function Qr(e,t,n){var i=Kr;return function r(){var s=t.apply(null,arguments);null!==s&&ts(e,r,n,i)}}var Zr=ct&&!(se&&Number(se[1])<=53);function es(e,t,n,i){if(Zr){var r=Gn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Kr.addEventListener(e,t,ae?{capture:n,passive:i}:n)}function ts(e,t,n,i){(i||Kr).removeEventListener(e,t._wrapper||t,n)}function ns(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Kr=t.elm,Jr(n),Ct(n,i,es,ts,Qr,t.context),Kr=void 0}}var is,rs={create:ns,update:ns};function ss(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,i,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in s(c.__ob__)&&(c=t.data.domProps=P({},c)),a)n in c||(o[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),i===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var l=r(i)?"":String(i);os(o,l)&&(o.value=l)}else if("innerHTML"===n&&or(o.tagName)&&r(o.innerHTML)){is=is||document.createElement("div"),is.innerHTML="<svg>"+i+"</svg>";var u=is.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(u.firstChild)o.appendChild(u.firstChild)}else if(i!==a[n])try{o[n]=i}catch(To){}}}}function os(e,t){return!e.composing&&("OPTION"===e.tagName||as(e,t)||cs(e,t))}function as(e,t){var n=!0;try{n=document.activeElement!==e}catch(To){}return n&&e.value!==t}function cs(e,t){var n=e.value,i=e._vModifiers;if(s(i)){if(i.number)return _(n)!==_(t);if(i.trim)return n.trim()!==t.trim()}return n!==t}var ls={create:ss,update:ss},us=C((function(e){var t={},n=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function hs(e){var t=ds(e.style);return e.staticStyle?P(e.staticStyle,t):t}function ds(e){return Array.isArray(e)?R(e):"string"===typeof e?us(e):e}function fs(e,t){var n,i={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=hs(r.data))&&P(i,n)}(n=hs(e.data))&&P(i,n);var s=e;while(s=s.parent)s.data&&(n=hs(s.data))&&P(i,n);return i}var ps,ms=/^--/,_s=/\s*!important$/,gs=function(e,t,n){if(ms.test(t))e.style.setProperty(t,n);else if(_s.test(n))e.style.setProperty(S(t),n.replace(_s,""),"important");else{var i=ys(t);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)e.style[i]=n[r];else e.style[i]=n}},vs=["Webkit","Moz","ms"],ys=C((function(e){if(ps=ps||document.createElement("div").style,e=I(e),"filter"!==e&&e in ps)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<vs.length;n++){var i=vs[n]+t;if(i in ps)return i}}));function bs(e,t){var n=t.data,i=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var o,a,c=t.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},h=l||u,d=ds(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?P({},d):d;var f=fs(t,!0);for(a in h)r(f[a])&&gs(c,a,"");for(a in f)o=f[a],o!==h[a]&&gs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},Cs=/\s+/;function Es(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Cs).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Is(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Cs).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",i=" "+t+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Ts(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&P(t,ks(e.name||"v")),P(t,e),t}return"string"===typeof e?ks(e):void 0}}var ks=C((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Ss=J&&!ne,Os="transition",Ns="animation",As="transition",xs="transitionend",Ps="animation",Rs="animationend";Ss&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(As="WebkitTransition",xs="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ps="WebkitAnimation",Rs="webkitAnimationEnd"));var Ds=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ls(e){Ds((function(){Ds(e)}))}function Ms(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Es(e,t))}function $s(e,t){e._transitionClasses&&y(e._transitionClasses,t),Is(e,t)}function Fs(e,t,n){var i=Us(e,t),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Os?xs:Rs,c=0,l=function(){e.removeEventListener(a,u),n()},u=function(t){t.target===e&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),s+1),e.addEventListener(a,u)}var js=/\b(transform|all)(,|$)/;function Us(e,t){var n,i=window.getComputedStyle(e),r=(i[As+"Delay"]||"").split(", "),s=(i[As+"Duration"]||"").split(", "),o=qs(r,s),a=(i[Ps+"Delay"]||"").split(", "),c=(i[Ps+"Duration"]||"").split(", "),l=qs(a,c),u=0,h=0;t===Os?o>0&&(n=Os,u=o,h=s.length):t===Ns?l>0&&(n=Ns,u=l,h=c.length):(u=Math.max(o,l),n=u>0?o>l?Os:Ns:null,h=n?n===Os?s.length:c.length:0);var d=n===Os&&js.test(i[As+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function qs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Hs(t)+Hs(e[n])})))}function Hs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function zs(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Ts(e.data.transition);if(!r(i)&&!s(n._enterCb)&&1===n.nodeType){var o=i.css,a=i.type,c=i.enterClass,u=i.enterToClass,h=i.enterActiveClass,d=i.appearClass,f=i.appearToClass,p=i.appearActiveClass,m=i.beforeEnter,g=i.enter,v=i.afterEnter,y=i.enterCancelled,b=i.beforeAppear,w=i.appear,C=i.afterAppear,E=i.appearCancelled,I=i.duration,T=Pn,k=Pn.$vnode;while(k&&k.parent)T=k.context,k=k.parent;var S=!T._isMounted||!e.isRootInsert;if(!S||w||""===w){var O=S&&d?d:c,N=S&&p?p:h,A=S&&f?f:u,x=S&&b||m,P=S&&"function"===typeof w?w:g,R=S&&C||v,D=S&&E||y,L=_(l(I)?I.enter:I);0;var M=!1!==o&&!ne,$=Bs(P),F=n._enterCb=j((function(){M&&($s(n,A),$s(n,N)),F.cancelled?(M&&$s(n,O),D&&D(n)):R&&R(n),n._enterCb=null}));e.data.show||Et(e,"insert",(function(){var t=n.parentNode,i=t&&t._pending&&t._pending[e.key];i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),P&&P(n,F)})),x&&x(n),M&&(Ms(n,O),Ms(n,N),Ls((function(){$s(n,O),F.cancelled||(Ms(n,A),$||(Vs(L)?setTimeout(F,L):Fs(n,a,F)))}))),e.data.show&&(t&&t(),P&&P(n,F)),M||$||F()}}}function Ws(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Ts(e.data.transition);if(r(i)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var o=i.css,a=i.type,c=i.leaveClass,u=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,f=i.leave,p=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,v=i.duration,y=!1!==o&&!ne,b=Bs(f),w=_(l(v)?v.leave:v);0;var C=n._leaveCb=j((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&($s(n,u),$s(n,h)),C.cancelled?(y&&$s(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(E):E()}function E(){C.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(Ms(n,c),Ms(n,h),Ls((function(){$s(n,c),C.cancelled||(Ms(n,u),b||(Vs(w)?setTimeout(C,w):Fs(n,a,C)))}))),f&&f(n,C),y||b||C())}}function Vs(e){return"number"===typeof e&&!isNaN(e)}function Bs(e){if(r(e))return!1;var t=e.fns;return s(t)?Bs(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Ks(e,t){!0!==t.data.show&&zs(t)}var Ys=J?{create:Ks,activate:Ks,remove:function(e,t){!0!==e.data.show?Ws(e,t):t()}}:{},Gs=[Vr,Yr,rs,ls,ws,Ys],Xs=Gs.concat(qr),Js=Rr({nodeOps:Tr,modules:Xs});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&so(e,"input")}));var Qs={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Et(n,"postpatch",(function(){Qs.componentUpdated(e,t,n)})):Zs(e,t,n.context),e._vOptions=[].map.call(e.options,no)):("textarea"===n.tag||hr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",io),e.addEventListener("compositionend",ro),e.addEventListener("change",ro),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Zs(e,t,n.context);var i=e._vOptions,r=e._vOptions=[].map.call(e.options,no);if(r.some((function(e,t){return!$(e,i[t])}))){var s=e.multiple?t.value.some((function(e){return to(e,r)})):t.value!==t.oldValue&&to(t.value,r);s&&so(e,"change")}}}};function Zs(e,t,n){eo(e,t,n),(te||ie)&&setTimeout((function(){eo(e,t,n)}),0)}function eo(e,t,n){var i=t.value,r=e.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],r)s=F(i,no(o))>-1,o.selected!==s&&(o.selected=s);else if($(no(o),i))return void(e.selectedIndex!==a&&(e.selectedIndex=a));r||(e.selectedIndex=-1)}}function to(e,t){return t.every((function(t){return!$(t,e)}))}function no(e){return"_value"in e?e._value:e.value}function io(e){e.target.composing=!0}function ro(e){e.target.composing&&(e.target.composing=!1,so(e.target,"input"))}function so(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function oo(e){return!e.componentInstance||e.data&&e.data.transition?e:oo(e.componentInstance._vnode)}var ao={bind:function(e,t,n){var i=t.value;n=oo(n);var r=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&r?(n.data.show=!0,zs(n,(function(){e.style.display=s}))):e.style.display=i?s:"none"},update:function(e,t,n){var i=t.value,r=t.oldValue;if(!i!==!r){n=oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?zs(n,(function(){e.style.display=e.__vOriginalDisplay})):Ws(n,(function(){e.style.display="none"}))):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}},co={model:Qs,show:ao},lo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?uo(Tn(t.children)):e}function ho(e){var t={},n=e.$options;for(var i in n.propsData)t[i]=e[i];var r=n._parentListeners;for(var s in r)t[I(s)]=r[s];return t}function fo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function po(e){while(e=e.parent)if(e.data.transition)return!0}function mo(e,t){return t.key===e.key&&t.tag===e.tag}var _o=function(e){return e.tag||Lt(e)},go=function(e){return"show"===e.name},vo={name:"transition",props:lo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(_o),n.length)){0;var i=this.mode;0;var r=n[0];if(po(this.$vnode))return r;var s=uo(r);if(!s)return r;if(this._leaving)return fo(e,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=ho(this),l=this._vnode,u=uo(l);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),u&&u.data&&!mo(s,u)&&!Lt(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=P({},a);if("out-in"===i)return this._leaving=!0,Et(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),fo(e,r);if("in-out"===i){if(Lt(s))return l;var d,f=function(){d()};Et(a,"afterEnter",f),Et(a,"enterCancelled",f),Et(h,"delayLeave",(function(e){d=e}))}}return r}}},yo=P({tag:String,moveClass:String},lo);delete yo.mode;var bo={props:yo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,i){var r=Rn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,n,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=ho(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var l=[],u=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=e(t,null,l),this.removed=u}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(wo),e.forEach(Co),e.forEach(Eo),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,i=n.style;Ms(n,t),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(xs,n._moveCb=function e(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(xs,e),n._moveCb=null,$s(n,t))})}})))},methods:{hasMove:function(e,t){if(!Ss)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Is(n,e)})),Es(n,t),n.style.display="none",this.$el.appendChild(n);var i=Us(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function wo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Co(e){e.data.newPos=e.elm.getBoundingClientRect()}function Eo(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,r=t.top-n.top;if(i||r){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var Io={Transition:vo,TransitionGroup:bo};Ti.config.mustUseProp=Hi,Ti.config.isReservedTag=ar,Ti.config.isReservedAttr=Ui,Ti.config.getTagNamespace=cr,Ti.config.isUnknownElement=ur,P(Ti.options.directives,co),P(Ti.options.components,Io),Ti.prototype.__patch__=J?Js:D,Ti.prototype.$mount=function(e,t){return e=e&&J?dr(e):void 0,Mn(this,e,t)},J&&setTimeout((function(){z.devtools&&ue&&ue.emit("init",Ti)}),0),t["Z"]=Ti},5659:function(e,t,n){"use strict";n.d(t,{Jn:function(){return B},KN:function(){return G},Mq:function(){return Y},Xd:function(){return q},ZF:function(){return K},qX:function(){return H}});var i=n(7805),r=n(7366),s=n(3536);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.20",u=new r.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",_="@firebase/auth",g="@firebase/auth-compat",v="@firebase/database",y="@firebase/database-compat",b="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",E="@firebase/installations-compat",I="@firebase/messaging",T="@firebase/messaging-compat",k="@firebase/performance",S="@firebase/performance-compat",O="@firebase/remote-config",N="@firebase/remote-config-compat",A="@firebase/storage",x="@firebase/storage-compat",P="@firebase/firestore",R="@firebase/firestore-compat",D="firebase",L="9.6.10",M="[DEFAULT]",$={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[_]:"fire-auth",[g]:"fire-auth-compat",[v]:"fire-rtdb",[y]:"fire-rtdb-compat",[b]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[E]:"fire-iid-compat",[I]:"fire-fcm",[T]:"fire-fcm-compat",[k]:"fire-perf",[S]:"fire-perf-compat",[O]:"fire-rc",[N]:"fire-rc-compat",[A]:"fire-gcs",[x]:"fire-gcs-compat",[P]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,j=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e){const t=e.name;if(j.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;j.set(t,e);for(const n of F.values())U(n,e);return!0}function H(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},W=new s.LL("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=L;function K(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw W.create("bad-app-name",{appName:String(r)});const o=F.get(r);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw W.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of j.values())a.addComponent(i);const c=new V(e,n,a);return F.set(r,c),c}function Y(e=M){const t=F.get(e);if(!t)throw W.create("no-app",{appName:e});return t}function G(e,t,n){var r;let s=null!==(r=$[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}q(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="firebase-heartbeat-database",J=1,Q="firebase-heartbeat-store";let Z=null;function ee(){return Z||(Z=(0,s.X3)(X,J,((e,t)=>{switch(t){case 0:e.createObjectStore(Q)}})).catch((e=>{throw W.create("storage-open",{originalErrorMessage:e.message})}))),Z}async function te(e){try{const t=await ee();return t.transaction(Q).objectStore(Q).get(ie(e))}catch(t){throw W.create("storage-get",{originalErrorMessage:t.message})}}async function ne(e,t){try{const n=await ee(),i=n.transaction(Q,"readwrite"),r=i.objectStore(Q);return await r.put(t,ie(e)),i.complete}catch(n){throw W.create("storage-set",{originalErrorMessage:n.message})}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=1024,se=2592e6;class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ae(),{heartbeatsToSend:t,unsentEntries:n}=ce(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ae(){const e=new Date;return e.toISOString().substring(0,10)}function ce(e,t=re){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ue(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ue(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ue(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){q(new i.wA("platform-logger",(e=>new o(e)),"PRIVATE")),q(new i.wA("heartbeat",(e=>new oe(e)),"PRIVATE")),G(c,l,e),G(c,l,"esm2017"),G("fire-js","")}he("")},7805:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return r}});n(1703);var i=n(3536);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},7366:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return r}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.fa4c98be.js.map