module.exports=[33405,(e,t,r)=>{t.exports=e.x("child_process",()=>require("child_process"))},4446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},37702,(e,t,r)=>{t.exports=e.x("worker_threads",()=>require("worker_threads"))},27699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},6617,(e,t,r)=>{let{EventEmitter:i}=e.r(27699);class AbortSignal{constructor(){this.eventEmitter=new i,this.onabort=null,this.aborted=!1,this.reason=void 0}toString(){return"[object AbortSignal]"}get[Symbol.toStringTag](){return"AbortSignal"}removeEventListener(e,t){this.eventEmitter.removeListener(e,t)}addEventListener(e,t){this.eventEmitter.on(e,t)}dispatchEvent(e){let t={type:e,target:this},r=`on${e}`;"function"==typeof this[r]&&this[r](t),this.eventEmitter.emit(e,t)}throwIfAborted(){if(this.aborted)throw this.reason}static abort(e){let t=new n;return t.abort(),t.signal}static timeout(e){let t=new n;return setTimeout(()=>t.abort(Error("TimeoutError")),e),t.signal}}class n{constructor(){this.signal=new AbortSignal}abort(e){this.signal.aborted||(this.signal.aborted=!0,e?this.signal.reason=e:this.signal.reason=Error("AbortError"),this.signal.dispatchEvent("abort"))}toString(){return"[object AbortController]"}get[Symbol.toStringTag](){return"AbortController"}}t.exports={AbortController:n,AbortSignal}},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},22734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},92509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},85602,(e,t,r)=>{var i,n=/^(?:0|[1-9]\d*)$/;function a(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var s=Object.prototype,o=s.hasOwnProperty,l=s.toString,d=s.propertyIsEnumerable,c=Math.max;function u(e,t,r,i){return void 0===e||y(e,s[r])&&!o.call(i,r)?t:e}function h(e,t){return t=c(void 0===t?e.length-1:t,0),function(){for(var r=arguments,i=-1,n=c(r.length-t,0),s=Array(n);++i<n;)s[i]=r[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=r[i];return o[t]=s,a(e,this,o)}}function p(e,t){return!!(t=null==t?0x1fffffffffffff:t)&&("number"==typeof e||n.test(e))&&e>-1&&e%1==0&&e<t}function y(e,t){return e===t||e!=e&&t!=t}var m=Array.isArray;function f(e){var t,r,i;return null!=e&&"number"==typeof(t=e.length)&&t>-1&&t%1==0&&t<=0x1fffffffffffff&&"[object Function]"!=(i=b(r=e)?l.call(r):"")&&"[object GeneratorFunction]"!=i}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var g=(i=function(e,t,r,i){var n;!function(e,t,r,i){r||(r={});for(var n=-1,a=t.length;++n<a;){var s=t[n],l=i?i(r[s],e[s],s,r,e):void 0;!function(e,t,r){var i=e[t];o.call(e,t)&&y(i,r)&&(void 0!==r||t in e)||(e[t]=r)}(r,s,void 0===l?e[s]:l)}}(t,f(n=t)?function(e,t){var r,i,n,a=m(e)||(n=i=r=e)&&"object"==typeof n&&f(i)&&o.call(r,"callee")&&(!d.call(r,"callee")||"[object Arguments]"==l.call(r))?function(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}(e.length,String):[],s=a.length,c=!!s;for(var u in e)(t||o.call(e,u))&&!(c&&("length"==u||p(u,s)))&&a.push(u);return a}(n,!0):function(e){if(!b(e)){var t,r,i=e,n=[];if(null!=i)for(var a in Object(i))n.push(a);return n}var l=(r=(t=e)&&t.constructor,t===("function"==typeof r&&r.prototype||s)),d=[];for(var c in e)"constructor"==c&&(l||!o.call(e,c))||d.push(c);return d}(n),e,i)},h(function(e,t){var r=-1,n=t.length,a=n>1?t[n-1]:void 0,s=n>2?t[2]:void 0;for(a=i.length>3&&"function"==typeof a?(n--,a):void 0,s&&function(e,t,r){if(!b(r))return!1;var i=typeof t;return("number"==i?!!(f(r)&&p(t,r.length)):"string"==i&&t in r)&&y(r[t],e)}(t[0],t[1],s)&&(a=n<3?void 0:a,n=1),e=Object(e);++r<n;){var o=t[r];o&&i(e,o,r,a)}return e}));t.exports=h(function(e){return e.push(void 0,u),a(g,void 0,e)})},30892,(e,t,r)=>{var i=Object.prototype,n=i.hasOwnProperty,a=i.toString,s=i.propertyIsEnumerable;t.exports=function(e){var t,r,i,o,l,d,c,u;return!!(i=t=e)&&"object"==typeof i&&null!=(r=t)&&"number"==typeof(o=r.length)&&o>-1&&o%1==0&&o<=0x1fffffffffffff&&"[object Function]"!=(c=typeof(d=l=r),u=d&&("object"==c||"function"==c)?a.call(l):"")&&"[object GeneratorFunction]"!=u&&n.call(e,"callee")&&(!s.call(e,"callee")||"[object Arguments]"==a.call(e))}},24405,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isArguments=r.defaults=r.noop=void 0,r.defaults=e.r(85602),r.isArguments=e.r(30892),r.noop=function(){}},75470,(e,t,r)=>{function i(e,t,r,i){return Math.round(e/r)+" "+i+(t>=1.5*r?"s":"")}t.exports=function(e,t){t=t||{};var r,n,a,s,o=typeof e;if("string"===o&&e.length>0){var l=e;if(!((l=String(l)).length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);if(d){var c=parseFloat(d[1]);switch((d[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return 6048e5*c;case"days":case"day":case"d":return 864e5*c;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*c;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*c;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*c;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:break}}}return}if("number"===o&&isFinite(e)){return t.long?(n=Math.abs(r=e))>=864e5?i(r,n,864e5,"day"):n>=36e5?i(r,n,36e5,"hour"):n>=6e4?i(r,n,6e4,"minute"):n>=1e3?i(r,n,1e3,"second"):r+" ms":(s=Math.abs(a=e))>=864e5?Math.round(a/864e5)+"d":s>=36e5?Math.round(a/36e5)+"h":s>=6e4?Math.round(a/6e4)+"m":s>=1e3?Math.round(a/1e3)+"s":a+"ms"}throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},79208,(e,t,r)=>{t.exports=function(t){function r(e){let t,n,a,s=null;function o(...e){if(!o.enabled)return;let i=Number(new Date);o.diff=i-(t||i),o.prev=t,o.curr=i,t=i,e[0]=r.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let n=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,i)=>{if("%%"===t)return"%";n++;let a=r.formatters[i];if("function"==typeof a){let r=e[n];t=a.call(o,r),e.splice(n,1),n--}return t}),r.formatArgs.call(o,e),(o.log||r.log).apply(o,e)}return o.namespace=e,o.useColors=r.useColors(),o.color=r.selectColor(e),o.extend=i,o.destroy=r.destroy,Object.defineProperty(o,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(n!==r.namespaces&&(n=r.namespaces,a=r.enabled(e)),a),set:e=>{s=e}}),"function"==typeof r.init&&r.init(o),o}function i(e,t){let i=r(this.namespace+(void 0===t?":":t)+e);return i.log=this.log,i}function n(e,t){let r=0,i=0,n=-1,a=0;for(;r<e.length;)if(i<t.length&&(t[i]===e[r]||"*"===t[i]))"*"===t[i]?(n=i,a=r):r++,i++;else{if(-1===n)return!1;i=n+1,r=++a}for(;i<t.length&&"*"===t[i];)i++;return i===t.length}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){let e=[...r.names,...r.skips.map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){for(let t of(r.save(e),r.namespaces=e,r.names=[],r.skips=[],("string"==typeof e?e:"").trim().replace(/\s+/g,",").split(",").filter(Boolean)))"-"===t[0]?r.skips.push(t.slice(1)):r.names.push(t)},r.enabled=function(e){for(let t of r.skips)if(n(e,t))return!1;for(let t of r.names)if(n(e,t))return!0;return!1},r.humanize=e.r(75470),r.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach(e=>{r[e]=t[e]}),r.names=[],r.skips=[],r.formatters={},r.selectColor=function(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return r.colors[Math.abs(t)%r.colors.length]},r.enable(r.load()),r}},70722,(e,t,r)=>{t.exports=e.x("tty",()=>require("tty"))},46786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},16716,(e,t,r)=>{"use strict";t.exports=(e,t=process.argv)=>{let r=e.startsWith("-")?"":1===e.length?"-":"--",i=t.indexOf(r+e),n=t.indexOf("--");return -1!==i&&(-1===n||i<n)}},65179,(e,t,r)=>{"use strict";let i,n=e.r(46786),a=e.r(70722),s=e.r(16716),{env:o}=process;function l(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function d(e,t){if(0===i)return 0;if(s("color=16m")||s("color=full")||s("color=truecolor"))return 3;if(s("color=256"))return 2;if(e&&!t&&void 0===i)return 0;let r=i||0;if("dumb"===o.TERM)return r;{let e=n.release().split(".");return Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}}s("no-color")||s("no-colors")||s("color=false")||s("color=never")?i=0:(s("color")||s("colors")||s("color=true")||s("color=always"))&&(i=1),"FORCE_COLOR"in o&&(i="true"===o.FORCE_COLOR?1:"false"===o.FORCE_COLOR?0:0===o.FORCE_COLOR.length?1:Math.min(parseInt(o.FORCE_COLOR,10),3)),t.exports={supportsColor:function(e){return l(d(e,e&&e.isTTY))},stdout:l(d(!0,a.isatty(1))),stderr:l(d(!0,a.isatty(2)))}},45371,(e,t,r)=>{let i=e.r(70722),n=e.r(24361);r.init=function(e){e.inspectOpts={};let t=Object.keys(r.inspectOpts);for(let i=0;i<t.length;i++)e.inspectOpts[t[i]]=r.inspectOpts[t[i]]},r.log=function(...e){return process.stderr.write(n.formatWithOptions(r.inspectOpts,...e)+"\n")},r.formatArgs=function(e){let{namespace:i,useColors:n}=this;if(n){let r=this.color,n="\x1b[3"+(r<8?r:"8;5;"+r),a=`  ${n};1m${i} \u001B[0m`;e[0]=a+e[0].split("\n").join("\n"+a),e.push(n+"m+"+t.exports.humanize(this.diff)+"\x1b[0m")}else e[0]=(r.inspectOpts.hideDate?"":new Date().toISOString()+" ")+i+" "+e[0]},r.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},r.load=function(){return process.env.DEBUG},r.useColors=function(){return"colors"in r.inspectOpts?!!r.inspectOpts.colors:i.isatty(process.stderr.fd)},r.destroy=n.deprecate(()=>{},"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),r.colors=[6,2,3,4,5,1];try{let t=e.r(65179);t&&(t.stderr||t).level>=2&&(r.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}r.inspectOpts=Object.keys(process.env).filter(e=>/^debug_/i.test(e)).reduce((e,t)=>{let r=t.substring(6).toLowerCase().replace(/_([a-z])/g,(e,t)=>t.toUpperCase()),i=process.env[t];return i=!!/^(yes|on|true|enabled)$/i.test(i)||!/^(no|off|false|disabled)$/i.test(i)&&("null"===i?null:Number(i)),e[r]=i,e},{}),t.exports=e.r(79208)(r);let{formatters:a}=t.exports;a.o=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts).split("\n").map(e=>e.trim()).join(" ")},a.O=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts)}},63654,(e,t,r)=>{let i;r.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;let r="color: "+this.color;e.splice(1,0,r,"color: inherit");let i=0,n=0;e[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(i++,"%c"===e&&(n=i))}),e.splice(n,0,r)},r.save=function(e){try{e?r.storage.setItem("debug",e):r.storage.removeItem("debug")}catch(e){}},r.load=function(){let e;try{e=r.storage.getItem("debug")||r.storage.getItem("DEBUG")}catch(e){}return!e&&"u">typeof process&&"env"in process&&(e=process.env.DEBUG),e},r.useColors=function(){let e;return!("u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("u">typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"u">typeof navigator&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},r.storage=function(){try{return localStorage}catch(e){}}(),i=!1,r.destroy=()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))},r.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],r.log=console.debug||console.log||(()=>{}),t.exports=e.r(79208)(r);let{formatters:n}=t.exports;n.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},53976,(e,t,r)=>{"u"<typeof process||"renderer"===process.type||process.__nwjs?t.exports=e.r(63654):t.exports=e.r(45371)},50796,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.genRedactedString=r.getStringValue=r.MAX_ARGUMENT_LENGTH=void 0;let i=e.r(53976);function n(e){if(null!==e)switch(typeof e){case"boolean":case"number":return;case"object":if(Buffer.isBuffer(e))return e.toString("hex");if(Array.isArray(e))return e.join(",");try{return JSON.stringify(e)}catch(e){return}case"string":return e}}function a(e,t){let{length:r}=e;return r<=t?e:e.slice(0,t)+' ... <REDACTED full-length="'+r+'">'}r.MAX_ARGUMENT_LENGTH=200,r.getStringValue=n,r.genRedactedString=a,r.default=function(e){let t=(0,i.default)(`ioredis:${e}`);function r(...e){if(t.enabled){for(let t=1;t<e.length;t++){let r=n(e[t]);"string"==typeof r&&r.length>200&&(e[t]=a(r,200))}return t.apply(null,e)}}return Object.defineProperties(r,{namespace:{get:()=>t.namespace},enabled:{get:()=>t.enabled},destroy:{get:()=>t.destroy},log:{get:()=>t.log,set(e){t.log=e}}}),r}},85563,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=`-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;r.default={RedisCloudFixed:{ca:i},RedisCloudFlexible:{ca:i}}},63700,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.noop=r.defaults=r.Debug=r.getPackageMeta=r.zipMap=r.CONNECTION_CLOSED_ERROR_MSG=r.shuffle=r.sample=r.resolveTLSProfile=r.parseURL=r.optimizeErrorStack=r.toArg=r.convertMapToArray=r.convertObjectToArray=r.timeout=r.packObject=r.isInt=r.wrapMultiResult=r.convertBufferToString=void 0;let i=e.r(22734),n=e.r(14747),a=e.r(92509),s=e.r(24405);Object.defineProperty(r,"defaults",{enumerable:!0,get:function(){return s.defaults}}),Object.defineProperty(r,"noop",{enumerable:!0,get:function(){return s.noop}}),r.Debug=e.r(50796).default;let o=e.r(85563);function l(e){let t=parseFloat(e);return!isNaN(e)&&(0|t)===t}r.convertBufferToString=function e(t,r){if(t instanceof Buffer)return t.toString(r);if(Array.isArray(t)){let i=t.length,n=Array(i);for(let a=0;a<i;++a)n[a]=t[a]instanceof Buffer&&"utf8"===r?t[a].toString():e(t[a],r);return n}return t},r.wrapMultiResult=function(e){if(!e)return null;let t=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];r instanceof Error?t.push([r]):t.push([null,r])}return t},r.isInt=l,r.packObject=function(e){let t={},r=e.length;for(let i=1;i<r;i+=2)t[e[i-1]]=e[i];return t},r.timeout=function(e,t){let r=null,i=function(){r&&(clearTimeout(r),r=null,e.apply(this,arguments))};return r=setTimeout(i,t,Error("timeout")),i},r.convertObjectToArray=function(e){let t=[],r=Object.keys(e);for(let i=0,n=r.length;i<n;i++)t.push(r[i],e[r[i]]);return t},r.convertMapToArray=function(e){let t=[],r=0;return e.forEach(function(e,i){t[r]=i,t[r+1]=e,r+=2}),t},r.toArg=function(e){return null==e?"":String(e)},r.optimizeErrorStack=function(e,t,r){let i,n=t.split("\n"),a="";for(i=1;i<n.length&&-1!==n[i].indexOf(r);++i);for(let e=i;e<n.length;++e)a+="\n"+n[e];if(e.stack){let t=e.stack.indexOf("\n");e.stack=e.stack.slice(0,t)+a}return e},r.parseURL=function(e){if(l(e))return{port:e};let t=(0,a.parse)(e,!0,!0);t.slashes||"/"===e[0]||(e="//"+e,t=(0,a.parse)(e,!0,!0));let r=t.query||{},i={};if(t.auth){let e=t.auth.indexOf(":");i.username=-1===e?t.auth:t.auth.slice(0,e),i.password=-1===e?"":t.auth.slice(e+1)}if(t.pathname&&("redis:"===t.protocol||"rediss:"===t.protocol?t.pathname.length>1&&(i.db=t.pathname.slice(1)):i.path=t.pathname),t.host&&(i.host=t.hostname),t.port&&(i.port=t.port),"string"==typeof r.family){let e=Number.parseInt(r.family,10);Number.isNaN(e)||(i.family=e)}return(0,s.defaults)(i,r),i},r.resolveTLSProfile=function(e){let t=null==e?void 0:e.tls;"string"==typeof t&&(t={profile:t});let r=o.default[null==t?void 0:t.profile];return r&&(t=Object.assign({},r,t),delete t.profile,e=Object.assign({},e,{tls:t})),e},r.sample=function(e,t=0){let r=e.length;return t>=r?null:e[t+Math.floor(Math.random()*(r-t))]},r.shuffle=function(e){let t=e.length;for(;t>0;){let r=Math.floor(Math.random()*t);t--,[e[t],e[r]]=[e[r],e[t]]}return e},r.CONNECTION_CLOSED_ERROR_MSG="Connection is closed.",r.zipMap=function(e,t){let r=new Map;return e.forEach((e,i)=>{r.set(e,t[i])}),r};let d=null;r.getPackageMeta=async function(){if(d)return d;try{let e=(0,n.resolve)("/ROOT/lumina-factory/node_modules/bullmq/node_modules/ioredis/built/utils","..","..","package.json"),t=await i.promises.readFile(e,"utf8");return d={version:JSON.parse(t).version}}catch(e){return d={version:"error-fetching-version"}}}},19616,(e,t,r)=>{"use strict";t.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||0x1fffffffffffff,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},76697,(e,t,r)=>{"use strict";t.exports="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{}},75994,(e,t,r)=>{"use strict";let{MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:a}=e.r(19616),s=e.r(76697),o=(r=t.exports={}).re=[],l=r.safeRe=[],d=r.src=[],c=r.safeSrc=[],u=r.t={},h=0,p="[a-zA-Z0-9-]",y=[["\\s",1],["\\d",a],[p,n]],m=(e,t,r)=>{let i=(e=>{for(let[t,r]of y)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e})(t),n=h++;s(e,n,t),u[e]=n,d[n]=t,c[n]=i,o[n]=new RegExp(t,r?"g":void 0),l[n]=new RegExp(i,r?"g":void 0)};m("NUMERICIDENTIFIER","0|[1-9]\\d*"),m("NUMERICIDENTIFIERLOOSE","\\d+"),m("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),m("MAINVERSION",`(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})`),m("MAINVERSIONLOOSE",`(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})`),m("PRERELEASEIDENTIFIER",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIER]})`),m("PRERELEASEIDENTIFIERLOOSE",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIERLOOSE]})`),m("PRERELEASE",`(?:-(${d[u.PRERELEASEIDENTIFIER]}(?:\\.${d[u.PRERELEASEIDENTIFIER]})*))`),m("PRERELEASELOOSE",`(?:-?(${d[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[u.PRERELEASEIDENTIFIERLOOSE]})*))`),m("BUILDIDENTIFIER",`${p}+`),m("BUILD",`(?:\\+(${d[u.BUILDIDENTIFIER]}(?:\\.${d[u.BUILDIDENTIFIER]})*))`),m("FULLPLAIN",`v?${d[u.MAINVERSION]}${d[u.PRERELEASE]}?${d[u.BUILD]}?`),m("FULL",`^${d[u.FULLPLAIN]}$`),m("LOOSEPLAIN",`[v=\\s]*${d[u.MAINVERSIONLOOSE]}${d[u.PRERELEASELOOSE]}?${d[u.BUILD]}?`),m("LOOSE",`^${d[u.LOOSEPLAIN]}$`),m("GTLT","((?:<|>)?=?)"),m("XRANGEIDENTIFIERLOOSE",`${d[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),m("XRANGEIDENTIFIER",`${d[u.NUMERICIDENTIFIER]}|x|X|\\*`),m("XRANGEPLAIN",`[v=\\s]*(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:${d[u.PRERELEASE]})?${d[u.BUILD]}?)?)?`),m("XRANGEPLAINLOOSE",`[v=\\s]*(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:${d[u.PRERELEASELOOSE]})?${d[u.BUILD]}?)?)?`),m("XRANGE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAIN]}$`),m("XRANGELOOSE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAINLOOSE]}$`),m("COERCEPLAIN",`(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`),m("COERCE",`${d[u.COERCEPLAIN]}(?:$|[^\\d])`),m("COERCEFULL",d[u.COERCEPLAIN]+`(?:${d[u.PRERELEASE]})?`+`(?:${d[u.BUILD]})?`+"(?:$|[^\\d])"),m("COERCERTL",d[u.COERCE],!0),m("COERCERTLFULL",d[u.COERCEFULL],!0),m("LONETILDE","(?:~>?)"),m("TILDETRIM",`(\\s*)${d[u.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",m("TILDE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAIN]}$`),m("TILDELOOSE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAINLOOSE]}$`),m("LONECARET","(?:\\^)"),m("CARETTRIM",`(\\s*)${d[u.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",m("CARET",`^${d[u.LONECARET]}${d[u.XRANGEPLAIN]}$`),m("CARETLOOSE",`^${d[u.LONECARET]}${d[u.XRANGEPLAINLOOSE]}$`),m("COMPARATORLOOSE",`^${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]})$|^$`),m("COMPARATOR",`^${d[u.GTLT]}\\s*(${d[u.FULLPLAIN]})$|^$`),m("COMPARATORTRIM",`(\\s*)${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]}|${d[u.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",m("HYPHENRANGE",`^\\s*(${d[u.XRANGEPLAIN]})\\s+-\\s+(${d[u.XRANGEPLAIN]})\\s*$`),m("HYPHENRANGELOOSE",`^\\s*(${d[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[u.XRANGEPLAINLOOSE]})\\s*$`),m("STAR","(<|>)?=?\\s*\\*"),m("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),m("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},14155,(e,t,r)=>{"use strict";let i=Object.freeze({loose:!0}),n=Object.freeze({});t.exports=e=>e?"object"!=typeof e?i:e:n},68776,(e,t,r)=>{"use strict";let i=/^[0-9]+$/,n=(e,t)=>{if("number"==typeof e&&"number"==typeof t)return e===t?0:e<t?-1:1;let r=i.test(e),n=i.test(t);return r&&n&&(e*=1,t*=1),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1};t.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},53080,(e,t,r)=>{"use strict";let i=e.r(76697),{MAX_LENGTH:n,MAX_SAFE_INTEGER:a}=e.r(19616),{safeRe:s,t:o}=e.r(75994),l=e.r(14155),{compareIdentifiers:d}=e.r(68776);class c{constructor(e,t){if(t=l(t),e instanceof c)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else e=e.version;else if("string"!=typeof e)throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>n)throw TypeError(`version is longer than ${n} characters`);i("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?s[o.LOOSE]:s[o.FULL]);if(!r)throw TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>a||this.major<0)throw TypeError("Invalid major version");if(this.minor>a||this.minor<0)throw TypeError("Invalid minor version");if(this.patch>a||this.patch<0)throw TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<a)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(i("SemVer.compare",this.version,this.options,e),!(e instanceof c)){if("string"==typeof e&&e===this.version)return 0;e=new c(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return(e instanceof c||(e=new c(e,this.options)),this.major<e.major)?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:+(this.patch>e.patch)}comparePre(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return -1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let r=this.prerelease[t],n=e.prerelease[t];if(i("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;else if(r===n)continue;else return d(r,n)}while(++t)}compareBuild(e){e instanceof c||(e=new c(e,this.options));let t=0;do{let r=this.build[t],n=e.build[t];if(i("build compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;else if(r===n)continue;else return d(r,n)}while(++t)}inc(e,t,r){if(e.startsWith("pre")){if(!t&&!1===r)throw Error("invalid increment argument: identifier is empty");if(t){let e=`-${t}`.match(this.options.loose?s[o.PRERELEASELOOSE]:s[o.PRERELEASE]);if(!e||e[1]!==t)throw Error(`invalid identifier: ${t}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"release":if(0===this.prerelease.length)throw Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(0!==this.minor||0!==this.patch||0===this.prerelease.length)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(0!==this.patch||0===this.prerelease.length)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{let e=+!!Number(r);if(0===this.prerelease.length)this.prerelease=[e];else{let i=this.prerelease.length;for(;--i>=0;)"number"==typeof this.prerelease[i]&&(this.prerelease[i]++,i=-2);if(-1===i){if(t===this.prerelease.join(".")&&!1===r)throw Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let i=[t,e];!1===r&&(i=[t]),0===d(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}t.exports=c},64626,(e,t,r)=>{"use strict";let i=e.r(53080);t.exports=(e,t,r=!1)=>{if(e instanceof i)return e;try{return new i(e,t)}catch(e){if(!r)return null;throw e}}},30154,(e,t,r)=>{"use strict";let i=e.r(64626);t.exports=(e,t)=>{let r=i(e,t);return r?r.version:null}},60171,(e,t,r)=>{"use strict";let i=e.r(64626);t.exports=(e,t)=>{let r=i(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},73767,(e,t,r)=>{"use strict";let i=e.r(53080);t.exports=(e,t,r,n,a)=>{"string"==typeof r&&(a=n,n=r,r=void 0);try{return new i(e instanceof i?e.version:e,r).inc(t,n,a).version}catch(e){return null}}},82858,(e,t,r)=>{"use strict";let i=e.r(64626);t.exports=(e,t)=>{let r=i(e,null,!0),n=i(t,null,!0),a=r.compare(n);if(0===a)return null;let s=a>0,o=s?r:n,l=s?n:r,d=!!o.prerelease.length;if(l.prerelease.length&&!d){if(!l.patch&&!l.minor)return"major";if(0===l.compareMain(o))return l.minor&&!l.patch?"minor":"patch"}let c=d?"pre":"";return r.major!==n.major?c+"major":r.minor!==n.minor?c+"minor":r.patch!==n.patch?c+"patch":"prerelease"}},54536,(e,t,r)=>{"use strict";let i=e.r(53080);t.exports=(e,t)=>new i(e,t).major},44878,(e,t,r)=>{"use strict";let i=e.r(53080);t.exports=(e,t)=>new i(e,t).minor},50846,(e,t,r)=>{"use strict";let i=e.r(53080);t.exports=(e,t)=>new i(e,t).patch},55531,(e,t,r)=>{"use strict";let i=e.r(64626);t.exports=(e,t)=>{let r=i(e,t);return r&&r.prerelease.length?r.prerelease:null}},70967,(e,t,r)=>{"use strict";let i=e.r(53080);t.exports=(e,t,r)=>new i(e,r).compare(new i(t,r))},34167,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t,r)=>i(t,e,r)},40511,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t)=>i(e,t,!0)},11994,(e,t,r)=>{"use strict";let i=e.r(53080);t.exports=(e,t,r)=>{let n=new i(e,r),a=new i(t,r);return n.compare(a)||n.compareBuild(a)}},37511,(e,t,r)=>{"use strict";let i=e.r(11994);t.exports=(e,t)=>e.sort((e,r)=>i(e,r,t))},12224,(e,t,r)=>{"use strict";let i=e.r(11994);t.exports=(e,t)=>e.sort((e,r)=>i(r,e,t))},85555,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t,r)=>i(e,t,r)>0},37677,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t,r)=>0>i(e,t,r)},55504,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t,r)=>0===i(e,t,r)},43663,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t,r)=>0!==i(e,t,r)},35027,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t,r)=>i(e,t,r)>=0},74232,(e,t,r)=>{"use strict";let i=e.r(70967);t.exports=(e,t,r)=>0>=i(e,t,r)},85471,(e,t,r)=>{"use strict";let i=e.r(55504),n=e.r(43663),a=e.r(85555),s=e.r(35027),o=e.r(37677),l=e.r(74232);t.exports=(e,t,r,d)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return i(e,r,d);case"!=":return n(e,r,d);case">":return a(e,r,d);case">=":return s(e,r,d);case"<":return o(e,r,d);case"<=":return l(e,r,d);default:throw TypeError(`Invalid operator: ${t}`)}}},47214,(e,t,r)=>{"use strict";let i=e.r(53080),n=e.r(64626),{safeRe:a,t:s}=e.r(75994);t.exports=(e,t)=>{if(e instanceof i)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let i,n=t.includePrerelease?a[s.COERCERTLFULL]:a[s.COERCERTL];for(;(i=n.exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&i.index+i[0].length===r.index+r[0].length||(r=i),n.lastIndex=i.index+i[1].length+i[2].length;n.lastIndex=-1}else r=e.match(t.includePrerelease?a[s.COERCEFULL]:a[s.COERCE]);if(null===r)return null;let o=r[2],l=r[3]||"0",d=r[4]||"0",c=t.includePrerelease&&r[5]?`-${r[5]}`:"",u=t.includePrerelease&&r[6]?`+${r[6]}`:"";return n(`${o}.${l}.${d}${c}${u}`,t)}},63844,(e,t,r)=>{"use strict";let i=e.r(64626),n=e.r(19616),a=e.r(53080),s=e=>e.startsWith("pre");t.exports=(e,t,r)=>{let o,l;if(!n.RELEASE_TYPES.includes(t))return null;let d=(o=e,l=r,i(o instanceof a?o.version:o,l));return d&&((e,t)=>{if(s(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0}return e.format()})(d,t)}},113,(e,t,r)=>{"use strict";t.exports=class{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(void 0!==t)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&void 0!==t){if(this.map.size>=this.max){let e=this.map.keys().next().value;this.delete(e)}this.map.set(e,t)}return this}}},57507,(e,t,r)=>{"use strict";let i=/\s+/g;class n{constructor(e,t){if(t=s(t),e instanceof n)if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;else return new n(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().replace(i," "),this.set=this.raw.split("||").map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter(e=>!v(e[0])),0===this.set.length)this.set=[e];else if(this.set.length>1){for(const e of this.set)if(1===e.length&&K(e[0])){this.set=[e];break}}}this.formatted=void 0}get range(){if(void 0===this.formatted){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let t=this.set[e];for(let e=0;e<t.length;e++)e>0&&(this.formatted+=" "),this.formatted+=t[e].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(g,"");let t=((this.options.includePrerelease&&f)|(this.options.loose&&b))+":"+e,r=a.get(t);if(r)return r;let i=this.options.loose,n=i?c[h.HYPHENRANGELOOSE]:c[h.HYPHENRANGE];l("hyphen replace",e=e.replace(n,C(this.options.includePrerelease))),l("comparator trim",e=e.replace(c[h.COMPARATORTRIM],p)),l("tilde trim",e=e.replace(c[h.TILDETRIM],y)),l("caret trim",e=e.replace(c[h.CARETTRIM],m));let s=e.split(" ").map(e=>E(e,this.options)).join(" ").split(/\s+/).map(e=>O(e,this.options));i&&(s=s.filter(e=>(l("loose invalid filter",e,this.options),!!e.match(c[h.COMPARATORLOOSE])))),l("range list",s);let d=new Map;for(let e of s.map(e=>new o(e,this.options))){if(v(e))return[e];d.set(e.value,e)}d.size>1&&d.has("")&&d.delete("");let u=[...d.values()];return a.set(t,u),u}intersects(e,t){if(!(e instanceof n))throw TypeError("a Range is required");return this.set.some(r=>S(r,t)&&e.set.some(e=>S(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(R(this.set[t],e,this.options))return!0;return!1}}t.exports=n;let a=new(e.r(113)),s=e.r(14155),o=e.r(35297),l=e.r(76697),d=e.r(53080),{safeRe:c,src:u,t:h,comparatorTrimReplace:p,tildeTrimReplace:y,caretTrimReplace:m}=e.r(75994),{FLAG_INCLUDE_PRERELEASE:f,FLAG_LOOSE:b}=e.r(19616),g=RegExp(u[h.BUILD],"g"),v=e=>"<0.0.0-0"===e.value,K=e=>""===e.value,S=(e,t)=>{let r=!0,i=e.slice(),n=i.pop();for(;r&&i.length;)r=i.every(e=>n.intersects(e,t)),n=i.pop();return r},E=(e,t)=>(l("comp",e=e.replace(c[h.BUILD],""),t),l("caret",e=x(e,t)),l("tildes",e=k(e,t)),l("xrange",e=A(e,t)),l("stars",e=D(e,t)),e),I=e=>!e||"x"===e.toLowerCase()||"*"===e,k=(e,t)=>e.trim().split(/\s+/).map(e=>w(e,t)).join(" "),w=(e,t)=>{let r=t.loose?c[h.TILDELOOSE]:c[h.TILDE];return e.replace(r,(t,r,i,n,a)=>{let s;return l("tilde",e,t,r,i,n,a),I(r)?s="":I(i)?s=`>=${r}.0.0 <${+r+1}.0.0-0`:I(n)?s=`>=${r}.${i}.0 <${r}.${+i+1}.0-0`:a?(l("replaceTilde pr",a),s=`>=${r}.${i}.${n}-${a} <${r}.${+i+1}.0-0`):s=`>=${r}.${i}.${n} <${r}.${+i+1}.0-0`,l("tilde return",s),s})},x=(e,t)=>e.trim().split(/\s+/).map(e=>j(e,t)).join(" "),j=(e,t)=>{l("caret",e,t);let r=t.loose?c[h.CARETLOOSE]:c[h.CARET],i=t.includePrerelease?"-0":"";return e.replace(r,(t,r,n,a,s)=>{let o;return l("caret",e,t,r,n,a,s),I(r)?o="":I(n)?o=`>=${r}.0.0${i} <${+r+1}.0.0-0`:I(a)?o="0"===r?`>=${r}.${n}.0${i} <${r}.${+n+1}.0-0`:`>=${r}.${n}.0${i} <${+r+1}.0.0-0`:s?(l("replaceCaret pr",s),o="0"===r?"0"===n?`>=${r}.${n}.${a}-${s} <${r}.${n}.${+a+1}-0`:`>=${r}.${n}.${a}-${s} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${a}-${s} <${+r+1}.0.0-0`):(l("no pr"),o="0"===r?"0"===n?`>=${r}.${n}.${a}${i} <${r}.${n}.${+a+1}-0`:`>=${r}.${n}.${a}${i} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${a} <${+r+1}.0.0-0`),l("caret return",o),o})},A=(e,t)=>(l("replaceXRanges",e,t),e.split(/\s+/).map(e=>T(e,t)).join(" ")),T=(e,t)=>{e=e.trim();let r=t.loose?c[h.XRANGELOOSE]:c[h.XRANGE];return e.replace(r,(r,i,n,a,s,o)=>{l("xRange",e,r,i,n,a,s,o);let d=I(n),c=d||I(a),u=c||I(s);return"="===i&&u&&(i=""),o=t.includePrerelease?"-0":"",d?r=">"===i||"<"===i?"<0.0.0-0":"*":i&&u?(c&&(a=0),s=0,">"===i?(i=">=",c?(n=+n+1,a=0):a=+a+1,s=0):"<="===i&&(i="<",c?n=+n+1:a=+a+1),"<"===i&&(o="-0"),r=`${i+n}.${a}.${s}${o}`):c?r=`>=${n}.0.0${o} <${+n+1}.0.0-0`:u&&(r=`>=${n}.${a}.0${o} <${n}.${+a+1}.0-0`),l("xRange return",r),r})},D=(e,t)=>(l("replaceStars",e,t),e.trim().replace(c[h.STAR],"")),O=(e,t)=>(l("replaceGTE0",e,t),e.trim().replace(c[t.includePrerelease?h.GTE0PRE:h.GTE0],"")),C=e=>(t,r,i,n,a,s,o,l,d,c,u,h)=>(r=I(i)?"":I(n)?`>=${i}.0.0${e?"-0":""}`:I(a)?`>=${i}.${n}.0${e?"-0":""}`:s?`>=${r}`:`>=${r}${e?"-0":""}`,l=I(d)?"":I(c)?`<${+d+1}.0.0-0`:I(u)?`<${d}.${+c+1}.0-0`:h?`<=${d}.${c}.${u}-${h}`:e?`<${d}.${c}.${+u+1}-0`:`<=${l}`,`${r} ${l}`.trim()),R=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(l(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){let i=e[r].semver;if(i.major===t.major&&i.minor===t.minor&&i.patch===t.patch)return!0}return!1}return!0}},35297,(e,t,r)=>{"use strict";let i=Symbol("SemVer ANY");class n{static get ANY(){return i}constructor(e,t){if(t=a(t),e instanceof n)if(!!t.loose===e.loose)return e;else e=e.value;d("comparator",e=e.trim().split(/\s+/).join(" "),t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===i?this.value="":this.value=this.operator+this.semver.version,d("comp",this)}parse(e){let t=this.options.loose?s[o.COMPARATORLOOSE]:s[o.COMPARATOR],r=e.match(t);if(!r)throw TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new c(r[2],this.options.loose):this.semver=i}toString(){return this.value}test(e){if(d("Comparator.test",e,this.options.loose),this.semver===i||e===i)return!0;if("string"==typeof e)try{e=new c(e,this.options)}catch(e){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof n))throw TypeError("a Comparator is required");return""===this.operator?""===this.value||new u(e.value,t).test(this.value):""===e.operator?""===e.value||new u(this.value,t).test(e.semver):!((t=a(t)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||l(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||l(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">"))}}t.exports=n;let a=e.r(14155),{safeRe:s,t:o}=e.r(75994),l=e.r(85471),d=e.r(76697),c=e.r(53080),u=e.r(57507)},14438,(e,t,r)=>{"use strict";let i=e.r(57507);t.exports=(e,t,r)=>{try{t=new i(t,r)}catch(e){return!1}return t.test(e)}},21112,(e,t,r)=>{"use strict";let i=e.r(57507);t.exports=(e,t)=>new i(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},55451,(e,t,r)=>{"use strict";let i=e.r(53080),n=e.r(57507);t.exports=(e,t,r)=>{let a=null,s=null,o=null;try{o=new n(t,r)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!a||-1===s.compare(e))&&(s=new i(a=e,r))}),a}},41807,(e,t,r)=>{"use strict";let i=e.r(53080),n=e.r(57507);t.exports=(e,t,r)=>{let a=null,s=null,o=null;try{o=new n(t,r)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!a||1===s.compare(e))&&(s=new i(a=e,r))}),a}},75547,(e,t,r)=>{"use strict";let i=e.r(53080),n=e.r(57507),a=e.r(85555);t.exports=(e,t)=>{e=new n(e,t);let r=new i("0.0.0");if(e.test(r)||(r=new i("0.0.0-0"),e.test(r)))return r;r=null;for(let t=0;t<e.set.length;++t){let n=e.set[t],s=null;n.forEach(e=>{let t=new i(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":(!s||a(t,s))&&(s=t);break;case"<":case"<=":break;default:throw Error(`Unexpected operation: ${e.operator}`)}}),s&&(!r||a(r,s))&&(r=s)}return r&&e.test(r)?r:null}},22252,(e,t,r)=>{"use strict";let i=e.r(57507);t.exports=(e,t)=>{try{return new i(e,t).range||"*"}catch(e){return null}}},39432,(e,t,r)=>{"use strict";let i=e.r(53080),n=e.r(35297),{ANY:a}=n,s=e.r(57507),o=e.r(14438),l=e.r(85555),d=e.r(37677),c=e.r(74232),u=e.r(35027);t.exports=(e,t,r,h)=>{let p,y,m,f,b;switch(e=new i(e,h),t=new s(t,h),r){case">":p=l,y=c,m=d,f=">",b=">=";break;case"<":p=d,y=u,m=l,f="<",b="<=";break;default:throw TypeError('Must provide a hilo val of "<" or ">"')}if(o(e,t,h))return!1;for(let r=0;r<t.set.length;++r){let i=t.set[r],s=null,o=null;if(i.forEach(e=>{e.semver===a&&(e=new n(">=0.0.0")),s=s||e,o=o||e,p(e.semver,s.semver,h)?s=e:m(e.semver,o.semver,h)&&(o=e)}),s.operator===f||s.operator===b||(!o.operator||o.operator===f)&&y(e,o.semver)||o.operator===b&&m(e,o.semver))return!1}return!0}},60572,(e,t,r)=>{"use strict";let i=e.r(39432);t.exports=(e,t,r)=>i(e,t,">",r)},3199,(e,t,r)=>{"use strict";let i=e.r(39432);t.exports=(e,t,r)=>i(e,t,"<",r)},99004,(e,t,r)=>{"use strict";let i=e.r(57507);t.exports=(e,t,r)=>(e=new i(e,r),t=new i(t,r),e.intersects(t,r))},66643,(e,t,r)=>{"use strict";let i=e.r(14438),n=e.r(70967);t.exports=(e,t,r)=>{let a=[],s=null,o=null,l=e.sort((e,t)=>n(e,t,r));for(let e of l)i(e,t,r)?(o=e,s||(s=e)):(o&&a.push([s,o]),o=null,s=null);s&&a.push([s,null]);let d=[];for(let[e,t]of a)e===t?d.push(e):t||e!==l[0]?t?e===l[0]?d.push(`<=${t}`):d.push(`${e} - ${t}`):d.push(`>=${e}`):d.push("*");let c=d.join(" || "),u="string"==typeof t.raw?t.raw:String(t);return c.length<u.length?c:t}},84630,(e,t,r)=>{"use strict";let i=e.r(57507),n=e.r(35297),{ANY:a}=n,s=e.r(14438),o=e.r(70967),l=[new n(">=0.0.0-0")],d=[new n(">=0.0.0")],c=(e,t,r)=>{let i,n,c,p,y,m,f;if(e===t)return!0;if(1===e.length&&e[0].semver===a)if(1===t.length&&t[0].semver===a)return!0;else e=r.includePrerelease?l:d;if(1===t.length&&t[0].semver===a)if(r.includePrerelease)return!0;else t=d;let b=new Set;for(let t of e)">"===t.operator||">="===t.operator?i=u(i,t,r):"<"===t.operator||"<="===t.operator?n=h(n,t,r):b.add(t.semver);if(b.size>1)return null;if(i&&n&&((c=o(i.semver,n.semver,r))>0||0===c&&(">="!==i.operator||"<="!==n.operator)))return null;for(let e of b){if(i&&!s(e,String(i),r)||n&&!s(e,String(n),r))return null;for(let i of t)if(!s(e,String(i),r))return!1;return!0}let g=!!n&&!r.includePrerelease&&!!n.semver.prerelease.length&&n.semver,v=!!i&&!r.includePrerelease&&!!i.semver.prerelease.length&&i.semver;for(let e of(g&&1===g.prerelease.length&&"<"===n.operator&&0===g.prerelease[0]&&(g=!1),t)){if(f=f||">"===e.operator||">="===e.operator,m=m||"<"===e.operator||"<="===e.operator,i){if(v&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===v.major&&e.semver.minor===v.minor&&e.semver.patch===v.patch&&(v=!1),">"===e.operator||">="===e.operator){if((p=u(i,e,r))===e&&p!==i)return!1}else if(">="===i.operator&&!e.test(i.semver))return!1}if(n){if(g&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===g.major&&e.semver.minor===g.minor&&e.semver.patch===g.patch&&(g=!1),"<"===e.operator||"<="===e.operator){if((y=h(n,e,r))===e&&y!==n)return!1}else if("<="===n.operator&&!e.test(n.semver))return!1}if(!e.operator&&(n||i)&&0!==c)return!1}return(!i||!m||!!n||0===c)&&(!n||!f||!!i||0===c)&&!v&&!g&&!0},u=(e,t,r)=>{if(!e)return t;let i=o(e.semver,t.semver,r);return i>0?e:i<0||">"===t.operator&&">="===e.operator?t:e},h=(e,t,r)=>{if(!e)return t;let i=o(e.semver,t.semver,r);return i<0?e:i>0||"<"===t.operator&&"<="===e.operator?t:e};t.exports=(e,t,r={})=>{if(e===t)return!0;e=new i(e,r),t=new i(t,r);let n=!1;e:for(let i of e.set){for(let e of t.set){let t=c(i,e,r);if(n=n||null!==t,t)continue e}if(n)return!1}return!0}},51775,(e,t,r)=>{"use strict";let i=e.r(75994),n=e.r(19616),a=e.r(53080),s=e.r(68776),o=e.r(64626),l=e.r(30154),d=e.r(60171),c=e.r(73767),u=e.r(82858),h=e.r(54536),p=e.r(44878),y=e.r(50846),m=e.r(55531),f=e.r(70967),b=e.r(34167),g=e.r(40511),v=e.r(11994),K=e.r(37511),S=e.r(12224),E=e.r(85555),I=e.r(37677),k=e.r(55504),w=e.r(43663),x=e.r(35027),j=e.r(74232),A=e.r(85471),T=e.r(47214),D=e.r(63844),O=e.r(35297),C=e.r(57507),R=e.r(14438),M=e.r(21112),P=e.r(55451),N=e.r(41807),J=e.r(75547),L=e.r(22252),_=e.r(39432),F=e.r(60572),q=e.r(3199),G=e.r(99004);t.exports={parse:o,valid:l,clean:d,inc:c,diff:u,major:h,minor:p,patch:y,prerelease:m,compare:f,rcompare:b,compareLoose:g,compareBuild:v,sort:K,rsort:S,gt:E,lt:I,eq:k,neq:w,gte:x,lte:j,cmp:A,coerce:T,truncate:D,Comparator:O,Range:C,satisfies:R,toComparators:M,maxSatisfying:P,minSatisfying:N,minVersion:J,validRange:L,outside:_,gtr:F,ltr:q,intersects:G,simplifyRange:e.r(66643),subset:e.r(84630),SemVer:a,re:i.re,src:i.src,tokens:i.t,SEMVER_SPEC_VERSION:n.SEMVER_SPEC_VERSION,RELEASE_TYPES:n.RELEASE_TYPES,compareIdentifiers:s.compareIdentifiers,rcompareIdentifiers:s.rcompareIdentifiers}},88947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},62562,(e,t,r)=>{t.exports=e.x("module",()=>require("module"))},69242,(e,t,r)=>{"use strict";let i=()=>"linux"===process.platform,n=null;t.exports={isLinux:i,getReport:()=>(!n&&(i()&&process.report||(n={})),n)}},96524,(e,t,r)=>{"use strict";let i=e.r(22734);t.exports={LDD_PATH:"/usr/bin/ldd",SELF_PATH:"/proc/self/exe",readFileSync:e=>{let t=i.openSync(e,"r"),r=Buffer.alloc(2048),n=i.readSync(t,r,0,2048,0);return i.close(t,()=>{}),r.subarray(0,n)},readFile:e=>new Promise((t,r)=>{i.open(e,"r",(e,n)=>{if(e)r(e);else{let e=Buffer.alloc(2048);i.read(n,e,0,2048,0,(r,a)=>{t(e.subarray(0,a)),i.close(n,()=>{})})}})})}},27225,(e,t,r)=>{"use strict";t.exports={interpreterPath:e=>{if(e.length<64||0x7f454c46!==e.readUInt32BE(0)||2!==e.readUInt8(4)||1!==e.readUInt8(5))return null;let t=e.readUInt32LE(32),r=e.readUInt16LE(54),i=e.readUInt16LE(56);for(let n=0;n<i;n++){let i=t+n*r;if(3===e.readUInt32LE(i)){let t=e.readUInt32LE(i+8),r=e.readUInt32LE(i+32);return e.subarray(t,t+r).toString().replace(/\0.*$/g,"")}}return null}}},96346,(e,t,r)=>{"use strict";let i,n,a,s=e.r(33405),{isLinux:o,getReport:l}=e.r(69242),{LDD_PATH:d,SELF_PATH:c,readFile:u,readFileSync:h}=e.r(96524),{interpreterPath:p}=e.r(27225),y="getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true",m="",f=()=>m||new Promise(e=>{s.exec(y,(t,r)=>{e(m=t?" ":r)})}),b=()=>{if(!m)try{m=s.execSync(y,{encoding:"utf8"})}catch(e){m=" "}return m},g="glibc",v=/LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i,K="musl",S=e=>e.includes("libc.musl-")||e.includes("ld-musl-"),E=()=>{let e=l();return e.header&&e.header.glibcVersionRuntime?g:Array.isArray(e.sharedObjects)&&e.sharedObjects.some(S)?K:null},I=e=>{let[t,r]=e.split(/[\r\n]+/);return t&&t.includes(g)?g:r&&r.includes(K)?K:null},k=e=>{if(e){if(e.includes("/ld-musl-"))return K;else if(e.includes("/ld-linux-"))return g}return null},w=e=>(e=e.toString()).includes("musl")?K:e.includes("GNU C Library")?g:null,x=async()=>{if(void 0!==n)return n;n=null;try{let e=await u(d);n=w(e)}catch(e){}return n},j=async()=>{if(void 0!==i)return i;i=null;try{let e=await u(c),t=p(e);i=k(t)}catch(e){}return i},A=async()=>{let e=null;return o()&&((e=await j())||((e=await x())||(e=E()),e||(e=I(await f())))),e},T=()=>{let e=null;return o()&&((e=(()=>{if(void 0!==i)return i;i=null;try{let e=h(c),t=p(e);i=k(t)}catch(e){}return i})())||((e=(()=>{if(void 0!==n)return n;n=null;try{let e=h(d);n=w(e)}catch(e){}return n})())||(e=E()),e||(e=I(b())))),e},D=async()=>o()&&await A()!==g,O=async()=>{if(void 0!==a)return a;a=null;try{let e=(await u(d)).match(v);e&&(a=e[1])}catch(e){}return a},C=()=>{let e=l();return e.header&&e.header.glibcVersionRuntime?e.header.glibcVersionRuntime:null},R=e=>e.trim().split(/\s+/)[1],M=e=>{let[t,r,i]=e.split(/[\r\n]+/);return t&&t.includes(g)?R(t):r&&i&&r.includes(K)?R(i):null};t.exports={GLIBC:g,MUSL:K,family:A,familySync:T,isNonGlibcLinux:D,isNonGlibcLinuxSync:()=>o()&&T()!==g,version:async()=>{let e=null;return o()&&((e=await O())||(e=C()),e||(e=M(await f()))),e},versionSync:()=>{let e=null;return o()&&((e=(()=>{if(void 0!==a)return a;a=null;try{let e=h(d).match(v);e&&(a=e[1])}catch(e){}return a})())||(e=C()),e||(e=M(b()))),e}}},55696,(e,t,r)=>{var i=e.r(22734),n=e.r(14747),a=e.r(92509),s=e.r(46786),o="function"==typeof __webpack_require__?__non_webpack_require__:e.t,l=process.config&&process.config.variables||{},d=!!process.env.PREBUILDS_ONLY,c=process.versions,u=c.modules;(c.deno||process.isBun)&&(u="unsupported");var h=process.versions&&process.versions.electron||process.env.ELECTRON_RUN_AS_NODE?"electron":process.versions&&process.versions.nw?"node-webkit":"node",p=process.env.npm_config_arch||s.arch(),y=process.env.npm_config_platform||s.platform(),m=process.env.LIBC||(!function(t){if("linux"!==t)return!1;let{familySync:r,MUSL:i}=e.r(96346);return r()===i}(y)?"glibc":"musl"),f=process.env.ARM_VERSION||("arm64"===p?"8":l.arm_version)||"",b=(c.uv||"").split(".")[0];function g(e){return o(g.resolve(e))}function v(e){try{return i.readdirSync(e)}catch(e){return[]}}function K(e,t){var r=v(e).filter(t);return r[0]&&n.join(e,r[0])}function S(e){return/\.node$/.test(e)}function E(e){var t=e.split("-");if(2===t.length){var r=t[0],i=t[1].split("+");if(r&&i.length&&i.every(Boolean))return{name:e,platform:r,architectures:i}}}function I(e,t){return function(r){return null!=r&&r.platform===e&&r.architectures.includes(t)}}function k(e,t){return e.architectures.length-t.architectures.length}function w(e){var t=e.split("."),r=t.pop(),i={file:e,specificity:0};if("node"===r){for(var n=0;n<t.length;n++){var a=t[n];if("node"===a||"electron"===a||"node-webkit"===a)i.runtime=a;else if("napi"===a)i.napi=!0;else if("abi"===a.slice(0,3))i.abi=a.slice(3);else if("uv"===a.slice(0,2))i.uv=a.slice(2);else if("armv"===a.slice(0,4))i.armv=a.slice(4);else{if("glibc"!==a&&"musl"!==a)continue;i.libc=a}i.specificity++}return i}}function x(e,t){return function(r){var i;return null!=r&&(r.runtime===e||!!("node"===(i=r).runtime&&i.napi))&&(r.abi===t||!!r.napi)&&(!r.uv||r.uv===b)&&(!r.armv||r.armv===f)&&(!r.libc||r.libc===m)&&!0}}function j(e){return function(t,r){return t.runtime!==r.runtime?t.runtime===e?-1:1:t.abi!==r.abi?t.abi?-1:1:t.specificity!==r.specificity?t.specificity>r.specificity?-1:1:0}}t.exports=g,g.resolve=g.path=function(t){t=n.resolve(t||".");var r,i,s="";try{var l=(s=o(n.join(t,"package.json")).name).toUpperCase().replace(/-/g,"_");process.env[l+"_PREBUILD"]&&(t=process.env[l+"_PREBUILD"])}catch(e){r=e}if(!d){var c=K(n.join(t,"build/Release"),S);if(c)return c;var g=K(n.join(t,"build/Debug"),S);if(g)return g}var A=R(t);if(A)return A;var T=R(n.dirname(process.execPath));if(T)return T;var D=("@"==s[0]?"":"@"+s+"/")+s+"-"+y+"-"+p;try{var O=n.dirname(e.r(62562).createRequire(a.pathToFileURL(n.join(t,"package.json"))).resolve(D));return M(O)}catch(e){i=e}let C="No native build was found for "+["platform="+y,"arch="+p,"runtime="+h,"abi="+u,"uv="+b,f?"armv="+f:"","libc="+m,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"","function"==typeof __webpack_require__?"webpack=true":""].filter(Boolean).join(" ")+"\n    attempted loading from: "+t+" and package: "+D+"\n";throw r&&(C+="Error finding package.json: "+r.message+"\n"),i&&(C+="Error resolving package: "+i.message+"\n"),Error(C);function R(e){var t=v(n.join(e,"prebuilds")).map(E).filter(I(y,p)).sort(k)[0];if(t)return M(n.join(e,"prebuilds",t.name))}function M(e){var t=v(e).map(w).filter(x(h,u)).sort(j(h))[0];if(t)return n.join(e,t.file)}},g.parseTags=w,g.matchTags=x,g.compareTags=j,g.parseTuple=E,g.matchTuple=I,g.compareTuples=k},65262,(e,t,r)=>{let i="function"==typeof __webpack_require__?__non_webpack_require__:e.t;"function"==typeof i.addon?t.exports=i.addon.bind(i):t.exports=e.r(55696)},30088,(e,t,r)=>{t.exports=e.r(65262)("/ROOT/lumina-factory/node_modules/msgpackr-extract")},1915,(e,t,r)=>{t.exports=JSON.parse('{"acl":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"append":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"asking":{"arity":1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"auth":{"arity":-2,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"bgrewriteaof":{"arity":1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bgsave":{"arity":-1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bitcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"bitfield":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"bitfield_ro":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"bitop":{"arity":-4,"flags":["write","denyoom"],"keyStart":2,"keyStop":-1,"step":1},"bitpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"blmove":{"arity":6,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"blmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"blpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpoplpush":{"arity":4,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"bzmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"bzpopmax":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"bzpopmin":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"client":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"cluster":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"command":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"config":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"copy":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"dbsize":{"arity":1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"debug":{"arity":-2,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"decr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"decrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"del":{"arity":-2,"flags":["write"],"keyStart":1,"keyStop":-1,"step":1},"discard":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"dump":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"echo":{"arity":2,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"eval":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"eval_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"exec":{"arity":1,"flags":["noscript","loading","stale","skip_slowlog"],"keyStart":0,"keyStop":0,"step":0},"exists":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"expire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"failover":{"arity":-1,"flags":["admin","noscript","stale"],"keyStart":0,"keyStop":0,"step":0},"fcall":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"fcall_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"flushall":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"flushdb":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"function":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"geoadd":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"geodist":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geohash":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geopos":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadius":{"arity":-6,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadius_ro":{"arity":-6,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember":{"arity":-5,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember_ro":{"arity":-5,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearch":{"arity":-7,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearchstore":{"arity":-8,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"get":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getbit":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getdel":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getex":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"getset":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hello":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"hexists":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hget":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetall":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hgetdel":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrbyfloat":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hkeys":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmget":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hpersist":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hpttl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hrandfield":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetex":{"arity":-6,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetnx":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hstrlen":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"httl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hvals":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"incr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrbyfloat":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"info":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"keys":{"arity":2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"lastsave":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"latency":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"lcs":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":2,"step":1},"lindex":{"arity":3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"linsert":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"llen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"lmove":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"lmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"lolwut":{"arity":-1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"lpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"lpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lrem":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"lset":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"ltrim":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"memory":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"mget":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"migrate":{"arity":-6,"flags":["write","movablekeys"],"keyStart":3,"keyStop":3,"step":1},"module":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"monitor":{"arity":1,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"move":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"mset":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"msetnx":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"multi":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"object":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"persist":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"pfadd":{"arity":-2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"pfcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"pfdebug":{"arity":3,"flags":["write","denyoom","admin"],"keyStart":2,"keyStop":2,"step":1},"pfmerge":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"pfselftest":{"arity":1,"flags":["admin"],"keyStart":0,"keyStop":0,"step":0},"ping":{"arity":-1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"psetex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"psubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"psync":{"arity":-3,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"pttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"publish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"pubsub":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"punsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"quit":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"randomkey":{"arity":1,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"readonly":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"readwrite":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rename":{"arity":3,"flags":["write"],"keyStart":1,"keyStop":2,"step":1},"renamenx":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"replconf":{"arity":-1,"flags":["admin","noscript","loading","stale","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"replicaof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"reset":{"arity":1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"restore":{"arity":-4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"restore-asking":{"arity":-4,"flags":["write","denyoom","asking"],"keyStart":1,"keyStop":1,"step":1},"role":{"arity":1,"flags":["noscript","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"rpoplpush":{"arity":3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"rpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"rpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"sadd":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"save":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"scan":{"arity":-2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"scard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"script":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"sdiff":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sdiffstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"select":{"arity":2,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"set":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setbit":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setnx":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"setrange":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"shutdown":{"arity":-1,"flags":["admin","noscript","loading","stale","no_multi","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"sinter":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"sinterstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sismember":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"slaveof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"slowlog":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"smembers":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"smismember":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"smove":{"arity":4,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"sort":{"arity":-2,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"sort_ro":{"arity":-2,"flags":["readonly","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"spop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"spublish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":1,"keyStop":1,"step":1},"srandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"srem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"sscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"ssubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"strlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"subscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"substr":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"sunion":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sunionstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sunsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"swapdb":{"arity":3,"flags":["write","fast"],"keyStart":0,"keyStop":0,"step":0},"sync":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"time":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"touch":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"ttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"type":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"unlink":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":-1,"step":1},"unsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"unwatch":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"wait":{"arity":3,"flags":["noscript"],"keyStart":0,"keyStop":0,"step":0},"watch":{"arity":-2,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":1,"keyStop":-1,"step":1},"xack":{"arity":-4,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xadd":{"arity":-5,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xautoclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdelex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xgroup":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xinfo":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"xpending":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xread":{"arity":-4,"flags":["readonly","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xreadgroup":{"arity":-7,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xsetid":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xtrim":{"arity":-4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zadd":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zcard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zdiff":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zdiffstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zinter":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zinterstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zlexcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zmscore":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmax":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmin":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zrandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangestore":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"zrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zrem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zremrangebylex":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyrank":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyscore":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zscore":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zunion":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zunionstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1}}')},75761,(e,t,r)=>{"use strict";var i=e.e&&e.e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.getKeyIndexes=r.hasFlag=r.exists=r.list=void 0;let n=i(e.r(1915));r.list=Object.keys(n.default);let a={};function s(e){"string"!=typeof e&&(e=String(e));let t=e.indexOf("->");return -1===t?e.length:t}r.list.forEach(e=>{a[e]=n.default[e].flags.reduce(function(e,t){return e[t]=!0,e},{})}),r.exists=function(e,t){return e=(null==t?void 0:t.caseInsensitive)?String(e).toLowerCase():e,!!n.default[e]},r.hasFlag=function(e,t,r){if(!a[e=(null==r?void 0:r.nameCaseInsensitive)?String(e).toLowerCase():e])throw Error("Unknown command "+e);return!!a[e][t]},r.getKeyIndexes=function(e,t,r){e=(null==r?void 0:r.nameCaseInsensitive)?String(e).toLowerCase():e;let i=n.default[e];if(!i)throw Error("Unknown command "+e);if(!Array.isArray(t))throw Error("Expect args to be an array");let a=[],o=!!(r&&r.parseExternalKey),l=(e,t)=>{let r=[],i=Number(e[t]);for(let e=0;e<i;e++)r.push(e+t+1);return r},d=(e,t,r)=>{for(let i=t;i<e.length-1;i+=1)if(String(e[i]).toLowerCase()===r.toLowerCase())return i+1;return null};switch(e){case"zunionstore":case"zinterstore":case"zdiffstore":a.push(0,...l(t,1));break;case"eval":case"evalsha":case"eval_ro":case"evalsha_ro":case"fcall":case"fcall_ro":case"blmpop":case"bzmpop":a.push(...l(t,1));break;case"sintercard":case"lmpop":case"zunion":case"zinter":case"zmpop":case"zintercard":case"zdiff":a.push(...l(t,0));break;case"georadius":{a.push(0);let e=d(t,5,"STORE");e&&a.push(e);let r=d(t,5,"STOREDIST");r&&a.push(r);break}case"georadiusbymember":{a.push(0);let e=d(t,4,"STORE");e&&a.push(e);let r=d(t,4,"STOREDIST");r&&a.push(r);break}case"sort":case"sort_ro":a.push(0);for(let e=1;e<t.length-1;e++){let r=t[e];if("string"!=typeof r)continue;let i=r.toUpperCase();"GET"===i?(e+=1,"#"!==(r=t[e])&&(o?a.push([e,s(r)]):a.push(e))):"BY"===i?(e+=1,o?a.push([e,s(t[e])]):a.push(e)):"STORE"===i&&(e+=1,a.push(e))}break;case"migrate":if(""===t[2])for(let e=5;e<t.length-1;e++){let r=t[e];if("string"==typeof r&&"KEYS"===r.toUpperCase()){for(let r=e+1;r<t.length;r++)a.push(r);break}}else a.push(2);break;case"xreadgroup":case"xread":for(let r=3*("xread"!==e);r<t.length-1;r++)if("STREAMS"===String(t[r]).toUpperCase()){for(let e=r+1;e<=r+(t.length-1-r)/2;e++)a.push(e);break}break;default:if(i.step>0){let e=i.keyStart-1,r=i.keyStop>0?i.keyStop:t.length+i.keyStop+1;for(let t=e;t<r;t+=i.step)a.push(t)}}return a}},44311,(e,t,r)=>{"use strict";let i;function n(e,t){try{let e=i;return i=null,e.apply(this,arguments)}catch(e){return r.errorObj.e=e,r.errorObj}}Object.defineProperty(r,"__esModule",{value:!0}),r.tryCatch=r.errorObj=void 0,r.errorObj={e:{}},r.tryCatch=function(e){return i=e,n}},1570,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(44311);function n(e){setTimeout(function(){throw e},0)}r.default=function(e,t,r){return"function"==typeof t&&e.then(e=>{let a;(a=void 0!==r&&Object(r).spread&&Array.isArray(e)?i.tryCatch(t).apply(void 0,[null].concat(e)):void 0===e?i.tryCatch(t)(null):i.tryCatch(t)(null,e))===i.errorObj&&n(a.e)},e=>{if(!e){let t=Error(e+"");Object.assign(t,{cause:e}),e=t}let r=i.tryCatch(t)(e);r===i.errorObj&&n(r.e)}),e}},49719,(e,t,r)=>{t.exports=e.x("assert",()=>require("assert"))},13622,(e,t,r)=>{"use strict";let i=e.r(49719);class n extends Error{get name(){return this.constructor.name}}class a extends n{get name(){return this.constructor.name}}t.exports={RedisError:n,ParserError:class extends n{constructor(e,t,r){i(t),i.strictEqual(typeof r,"number");const n=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=n,this.offset=r,this.buffer=t}get name(){return this.constructor.name}},ReplyError:class extends n{constructor(e){const t=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=t}get name(){return this.constructor.name}},AbortError:a,InterruptError:class extends a{get name(){return this.constructor.name}}}},45731,(e,t,r)=>{"use strict";let i=e.r(49719),n=e.r(24361);function a(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function s(e,t,r){i(t),i.strictEqual(typeof r,"number"),Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let n=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=n,this.offset=r,this.buffer=t}function o(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let t=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=t}function l(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function d(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}n.inherits(a,Error),Object.defineProperty(a.prototype,"name",{value:"RedisError",configurable:!0,writable:!0}),n.inherits(s,a),Object.defineProperty(s.prototype,"name",{value:"ParserError",configurable:!0,writable:!0}),n.inherits(o,a),Object.defineProperty(o.prototype,"name",{value:"ReplyError",configurable:!0,writable:!0}),n.inherits(l,a),Object.defineProperty(l.prototype,"name",{value:"AbortError",configurable:!0,writable:!0}),n.inherits(d,l),Object.defineProperty(d.prototype,"name",{value:"InterruptError",configurable:!0,writable:!0}),t.exports={RedisError:a,ParserError:s,ReplyError:o,AbortError:l,InterruptError:d}},43473,(e,t,r)=>{"use strict";t.exports=55>process.version.charCodeAt(1)&&46===process.version.charCodeAt(2)?e.r(45731):e.r(13622)},49568,(e,t,r)=>{var i=[0,4129,8258,12387,16516,20645,24774,28903,33032,37161,41290,45419,49548,53677,57806,61935,4657,528,12915,8786,21173,17044,29431,25302,37689,33560,45947,41818,54205,50076,62463,58334,9314,13379,1056,5121,25830,29895,17572,21637,42346,46411,34088,38153,58862,62927,50604,54669,13907,9842,5649,1584,30423,26358,22165,18100,46939,42874,38681,34616,63455,59390,55197,51132,18628,22757,26758,30887,2112,6241,10242,14371,51660,55789,59790,63919,35144,39273,43274,47403,23285,19156,31415,27286,6769,2640,14899,10770,56317,52188,64447,60318,39801,35672,47931,43802,27814,31879,19684,23749,11298,15363,3168,7233,60846,64911,52716,56781,44330,48395,36200,40265,32407,28342,24277,20212,15891,11826,7761,3696,65439,61374,57309,53244,48923,44858,40793,36728,37256,33193,45514,41451,53516,49453,61774,57711,4224,161,12482,8419,20484,16421,28742,24679,33721,37784,41979,46042,49981,54044,58239,62302,689,4752,8947,13010,16949,21012,25207,29270,46570,42443,38312,34185,62830,58703,54572,50445,13538,9411,5280,1153,29798,25671,21540,17413,42971,47098,34713,38840,59231,63358,50973,55100,9939,14066,1681,5808,26199,30326,17941,22068,55628,51565,63758,59695,39368,35305,47498,43435,22596,18533,30726,26663,6336,2273,14466,10403,52093,56156,60223,64286,35833,39896,43963,48026,19061,23124,27191,31254,2801,6864,10931,14994,64814,60687,56684,52557,48554,44427,40424,36297,31782,27655,23652,19525,15522,11395,7392,3265,61215,65342,53085,57212,44955,49082,36825,40952,28183,32310,20053,24180,11923,16050,3793,7920],n=function(e){for(var t,r=0,i=0,n=[],a=e.length;r<a;r++)(t=e.charCodeAt(r))<128?n[i++]=t:(t<2048?n[i++]=t>>6|192:((64512&t)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(t=65536+((1023&t)<<10)+(1023&e.charCodeAt(++r)),n[i++]=t>>18|240,n[i++]=t>>12&63|128):n[i++]=t>>12|224,n[i++]=t>>6&63|128),n[i++]=63&t|128);return n},a=t.exports=function(e){for(var t,r=0,a=-1,s=0,o=0,l="string"==typeof e?n(e):e,d=l.length;r<d;){if(t=l[r++],-1===a)123===t&&(a=r);else if(125!==t)o=i[(t^o>>8)&255]^o<<8;else if(r-1!==a)return 16383&o;s=i[(t^s>>8)&255]^s<<8}return 16383&s};t.exports.generateMulti=function(e){for(var t=1,r=e.length,i=a(e[0]);t<r;)if(a(e[t++])!==i)return -1;return i}},10392,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parseBlockOption=r.parseSecondsArgument=void 0;let i=e=>{if("number"==typeof e)return e;if(Buffer.isBuffer(e))return i(e.toString());if("string"==typeof e){let t=Number(e);return Number.isFinite(t)?t:void 0}},n=e=>"string"==typeof e?e:Buffer.isBuffer(e)?e.toString():void 0;r.parseSecondsArgument=e=>{let t=i(e);if(void 0!==t)return t<=0?0:1e3*t},r.parseBlockOption=e=>{for(let t=0;t<e.length;t++){let r=n(e[t]);if(r&&"block"===r.toLowerCase()){let r=i(e[t+1]);if(void 0===r)return;if(r<=0)return 0;return r}}return null}},36314,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(75761),n=e.r(49568),a=e.r(1570),s=e.r(63700),o=e.r(10392);class l{constructor(e,t=[],r={},i){if(this.name=e,this.inTransaction=!1,this.isResolved=!1,this.transformed=!1,this.replyEncoding=r.replyEncoding,this.errorStack=r.errorStack,this.args=t.flat(),this.callback=i,this.initPromise(),r.keyPrefix){const e=r.keyPrefix instanceof Buffer;let t=e?r.keyPrefix:null;this._iterateKeys(i=>i instanceof Buffer?(null===t&&(t=Buffer.from(r.keyPrefix)),Buffer.concat([t,i])):e?Buffer.concat([r.keyPrefix,Buffer.from(String(i))]):r.keyPrefix+i)}r.readOnly&&(this.isReadOnly=!0)}static checkFlag(e,t){return t=t.toLowerCase(),!!this.getFlagMap()[e][t]}static setArgumentTransformer(e,t){this._transformer.argument[e]=t}static setReplyTransformer(e,t){this._transformer.reply[e]=t}static getFlagMap(){return this.flagMap||(this.flagMap=Object.keys(l.FLAGS).reduce((e,t)=>(e[t]={},l.FLAGS[t].forEach(r=>{e[t][r]=!0}),e),{})),this.flagMap}getSlot(){if(void 0===this.slot){let e=this.getKeys()[0];this.slot=null==e?null:n(e)}return this.slot}getKeys(){return this._iterateKeys()}toWritable(e){let t,r="*"+(this.args.length+1)+"\r\n$"+Buffer.byteLength(this.name)+"\r\n"+this.name+"\r\n";if(this.bufferMode){let e=new u;e.push(r);for(let t=0;t<this.args.length;++t){let r=this.args[t];r instanceof Buffer?0===r.length?e.push("$0\r\n\r\n"):(e.push("$"+r.length+"\r\n"),e.push(r),e.push("\r\n")):e.push("$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n")}t=e.toBuffer()}else{t=r;for(let e=0;e<this.args.length;++e){let r=this.args[e];t+="$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n"}}return t}stringifyArguments(){for(let e=0;e<this.args.length;++e){let t=this.args[e];"string"==typeof t||(t instanceof Buffer?this.bufferMode=!0:this.args[e]=(0,s.toArg)(t))}}transformReply(e){this.replyEncoding&&(e=(0,s.convertBufferToString)(e,this.replyEncoding));let t=l._transformer.reply[this.name];return t&&(e=t(e)),e}setTimeout(e){this._commandTimeoutTimer||(this._commandTimeoutTimer=setTimeout(()=>{this.isResolved||this.reject(Error("Command timed out"))},e))}setBlockingTimeout(e){if(e<=0)return;this._blockingTimeoutTimer&&(clearTimeout(this._blockingTimeoutTimer),this._blockingTimeoutTimer=void 0);let t=Date.now();void 0===this._blockingDeadline&&(this._blockingDeadline=t+e);let r=this._blockingDeadline-t;r<=0?this.resolve(null):this._blockingTimeoutTimer=setTimeout(()=>{if(this.isResolved){this._blockingTimeoutTimer=void 0;return}this._blockingTimeoutTimer=void 0,this.resolve(null)},r)}extractBlockingTimeout(){let e=this.args;if(!e||0===e.length)return;let t=this.name.toLowerCase();return l.checkFlag("LAST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[e.length-1]):l.checkFlag("FIRST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[0]):l.checkFlag("BLOCK_OPTION_COMMANDS",t)?(0,o.parseBlockOption)(e):void 0}_clearTimers(){let e=this._commandTimeoutTimer;e&&(clearTimeout(e),delete this._commandTimeoutTimer);let t=this._blockingTimeoutTimer;t&&(clearTimeout(t),delete this._blockingTimeoutTimer)}initPromise(){let e=new Promise((e,t)=>{if(!this.transformed){this.transformed=!0;let e=l._transformer.argument[this.name];e&&(this.args=e(this.args)),this.stringifyArguments()}this.resolve=this._convertValue(e),this.reject=e=>{this._clearTimers(),this.errorStack?t((0,s.optimizeErrorStack)(e,this.errorStack.stack,"/ROOT/lumina-factory/node_modules/bullmq/node_modules/ioredis/built")):t(e)}});this.promise=(0,a.default)(e,this.callback)}_iterateKeys(e=e=>e){if(void 0===this.keys&&(this.keys=[],(0,i.exists)(this.name,{caseInsensitive:!0})))for(let t of(0,i.getKeyIndexes)(this.name,this.args,{nameCaseInsensitive:!0}))this.args[t]=e(this.args[t]),this.keys.push(this.args[t]);return this.keys}_convertValue(e){return t=>{try{this._clearTimers(),e(this.transformReply(t)),this.isResolved=!0}catch(e){this.reject(e)}return this.promise}}}r.default=l,l.FLAGS={VALID_IN_SUBSCRIBER_MODE:["subscribe","psubscribe","unsubscribe","punsubscribe","ssubscribe","sunsubscribe","ping","quit"],VALID_IN_MONITOR_MODE:["monitor","auth"],ENTER_SUBSCRIBER_MODE:["subscribe","psubscribe","ssubscribe"],EXIT_SUBSCRIBER_MODE:["unsubscribe","punsubscribe","sunsubscribe"],WILL_DISCONNECT:["quit"],HANDSHAKE_COMMANDS:["auth","select","client","readonly","info"],IGNORE_RECONNECT_ON_ERROR:["client"],BLOCKING_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax","bzmpop","blmpop","xread","xreadgroup"],LAST_ARG_TIMEOUT_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax"],FIRST_ARG_TIMEOUT_COMMANDS:["bzmpop","blmpop"],BLOCK_OPTION_COMMANDS:["xread","xreadgroup"]},l._transformer={argument:{},reply:{}};let d=function(e){if(1===e.length){if(e[0]instanceof Map)return(0,s.convertMapToArray)(e[0]);if("object"==typeof e[0]&&null!==e[0])return(0,s.convertObjectToArray)(e[0])}return e},c=function(e){if(2===e.length){if(e[1]instanceof Map)return[e[0]].concat((0,s.convertMapToArray)(e[1]));if("object"==typeof e[1]&&null!==e[1])return[e[0]].concat((0,s.convertObjectToArray)(e[1]))}return e};l.setArgumentTransformer("mset",d),l.setArgumentTransformer("msetnx",d),l.setArgumentTransformer("hset",c),l.setArgumentTransformer("hmset",c),l.setReplyTransformer("hgetall",function(e){if(Array.isArray(e)){let t={};for(let r=0;r<e.length;r+=2){let i=e[r],n=e[r+1];i in t?Object.defineProperty(t,i,{value:n,configurable:!0,enumerable:!0,writable:!0}):t[i]=n}return t}return e});class u{constructor(){this.length=0,this.items=[]}push(e){this.length+=Buffer.byteLength(e),this.items.push(e)}toBuffer(){let e=Buffer.allocUnsafe(this.length),t=0;for(let r of this.items){let i=Buffer.byteLength(r);Buffer.isBuffer(r)?r.copy(e,t):e.write(r,t,i),t+=i}return e}}},34994,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(43473);class n extends i.RedisError{constructor(e,t){super(e),this.lastNodeError=t,Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}r.default=n,n.defaultMessage="Failed to refresh slots cache."},37145,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(88947);class n extends i.Readable{constructor(e){super(e),this.opt=e,this._redisCursor="0",this._redisDrained=!1}_read(){if(this._redisDrained)return void this.push(null);let e=[this._redisCursor];this.opt.key&&e.unshift(this.opt.key),this.opt.match&&e.push("MATCH",this.opt.match),this.opt.type&&e.push("TYPE",this.opt.type),this.opt.count&&e.push("COUNT",String(this.opt.count)),this.opt.noValues&&e.push("NOVALUES"),this.opt.redis[this.opt.command](e,(e,t)=>{e?this.emit("error",e):(this._redisCursor=t[0]instanceof Buffer?t[0].toString():t[0],"0"===this._redisCursor&&(this._redisDrained=!0),this.push(t[1]))})}close(){this._redisDrained=!0}}r.default=n},99149,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.executeWithAutoPipelining=r.getFirstValueInFlattenedArray=r.shouldUseAutoPipelining=r.notAllowedAutoPipelineCommands=r.kCallbacks=r.kExec=void 0;let i=e.r(24405),n=e.r(49568),a=e.r(1570),s=e.r(75761);function o(e){for(let t=0;t<e.length;t++){let r=e[t];if("string"==typeof r)return r;if(Array.isArray(r)||(0,i.isArguments)(r)){if(0===r.length)continue;return r[0]}let n=[r].flat();if(n.length>0)return n[0]}}r.kExec=Symbol("exec"),r.kCallbacks=Symbol("callbacks"),r.notAllowedAutoPipelineCommands=["auth","info","script","quit","cluster","pipeline","multi","subscribe","psubscribe","unsubscribe","unpsubscribe","select","client"],r.shouldUseAutoPipelining=function(e,t,i){return t&&e.options.enableAutoPipelining&&!e.isPipeline&&!r.notAllowedAutoPipelineCommands.includes(i)&&!e.options.autoPipeliningIgnoredCommands.includes(i)},r.getFirstValueInFlattenedArray=o,r.executeWithAutoPipelining=function e(t,l,d,c,u){if(t.isCluster&&!t.slots.length)return"wait"===t.status&&t.connect().catch(i.noop),(0,a.default)(new Promise(function(r,i){t.delayUntilReady(n=>{n?i(n):e(t,l,d,c,null).then(r,i)})}),u);let h=t.options.keyPrefix||"",p=t.isCluster?t.slots[n(`${h}${o(c)}`)].join(","):"main";if(t.isCluster&&"master"!==t.options.scaleReads&&(p+=(0,s.exists)(d)&&(0,s.hasFlag)(d,"readonly")?":read":":write"),!t._autoPipelines.has(p)){let e=t.pipeline();e[r.kExec]=!1,e[r.kCallbacks]=[],t._autoPipelines.set(p,e)}let y=t._autoPipelines.get(p);y[r.kExec]||(y[r.kExec]=!0,setImmediate(function e(t,i){if(t._runningAutoPipelines.has(i)||!t._autoPipelines.has(i))return;t._runningAutoPipelines.add(i);let n=t._autoPipelines.get(i);t._autoPipelines.delete(i);let a=n[r.kCallbacks];n[r.kCallbacks]=null,n.exec(function(r,n){if(t._runningAutoPipelines.delete(i),r)for(let e=0;e<a.length;e++)process.nextTick(a[e],r);else for(let e=0;e<a.length;e++)process.nextTick(a[e],...n[e]);t._autoPipelines.has(i)&&e(t,i)})},t,p));let m=new Promise(function(e,t){y[r.kCallbacks].push(function(r,i){r?t(r):e(i)}),"call"===l&&c.unshift(d),y[l](...c)});return(0,a.default)(m,u)}},38566,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(54799),n=e.r(36314),a=e.r(1570);r.default=class{constructor(e,t=null,r="",a=!1){this.lua=e,this.numberOfKeys=t,this.keyPrefix=r,this.readOnly=a,this.sha=(0,i.createHash)("sha1").update(e).digest("hex");const s=this.sha,o=new WeakSet;this.Command=class extends n.default{toWritable(t){let r=this.reject;return this.reject=e=>{-1!==e.message.indexOf("NOSCRIPT")&&o.delete(t),r.call(this,e)},o.has(t)?"eval"===this.name&&(this.name="evalsha",this.args[0]=s):(o.add(t),this.name="eval",this.args[0]=e),super.toWritable(t)}}}execute(e,t,r,i){"number"==typeof this.numberOfKeys&&t.unshift(this.numberOfKeys),this.keyPrefix&&(r.keyPrefix=this.keyPrefix),this.readOnly&&(r.readOnly=!0);let n=new this.Command("evalsha",[this.sha,...t],r);return n.promise=n.promise.catch(i=>{if(-1===i.message.indexOf("NOSCRIPT"))throw i;let n=new this.Command("evalsha",[this.sha,...t],r);return(e.isPipeline?e.redis:e).sendCommand(n)}),(0,a.default)(n.promise,i),e.sendCommand(n)}}},47238,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(75761),n=e.r(99149),a=e.r(36314),s=e.r(38566);class o{constructor(){this.options={},this.scriptsSet={},this.addedBuiltinSet=new Set}getBuiltinCommands(){return l.slice(0)}createBuiltinCommand(e){return{string:d(null,e,"utf8"),buffer:d(null,e,null)}}addBuiltinCommand(e){this.addedBuiltinSet.add(e),this[e]=d(e,e,"utf8"),this[e+"Buffer"]=d(e+"Buffer",e,null)}defineCommand(e,t){let r=new s.default(t.lua,t.numberOfKeys,this.options.keyPrefix,t.readOnly);this.scriptsSet[e]=r,this[e]=c(e,e,r,"utf8"),this[e+"Buffer"]=c(e+"Buffer",e,r,null)}sendCommand(e,t,r){throw Error('"sendCommand" is not implemented')}}let l=i.list.filter(e=>"monitor"!==e);function d(e,t,r){return void 0===r&&(r=t,t=null),function(...i){let s=t||i.shift(),o=i[i.length-1];"function"==typeof o?i.pop():o=void 0;let l={errorStack:this.options.showFriendlyErrorStack?Error():void 0,keyPrefix:this.options.keyPrefix,replyEncoding:r};return(0,n.shouldUseAutoPipelining)(this,e,s)?(0,n.executeWithAutoPipelining)(this,e,s,i,o):this.sendCommand(new a.default(s,i,l,o))}}function c(e,t,r,i){return function(...a){let s="function"==typeof a[a.length-1]?a.pop():void 0,o={replyEncoding:i};return(this.options.showFriendlyErrorStack&&(o.errorStack=Error()),(0,n.shouldUseAutoPipelining)(this,e,t))?(0,n.executeWithAutoPipelining)(this,e,t,a,s):r.execute(this,a,o,s)}}l.push("sentinel"),l.forEach(function(e){o.prototype[e]=d(e,e,"utf8"),o.prototype[e+"Buffer"]=d(e+"Buffer",e,null)}),o.prototype.call=d("call","utf8"),o.prototype.callBuffer=d("callBuffer",null),o.prototype.send_command=o.prototype.call,r.default=o},46592,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(49568),n=e.r(75761),a=e.r(1570),s=e.r(24361),o=e.r(36314),l=e.r(63700),d=e.r(47238);class c extends d.default{constructor(e){super(),this.redis=e,this.isPipeline=!0,this.replyPending=0,this._queue=[],this._result=[],this._transactions=0,this._shaToScript={},this.isCluster="Cluster"===this.redis.constructor.name||this.redis.isCluster,this.options=e.options,Object.keys(e.scriptsSet).forEach(t=>{let r=e.scriptsSet[t];this._shaToScript[r.sha]=r,this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),e.addedBuiltinSet.forEach(t=>{this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t});const t=this;Object.defineProperty(this,"length",{get:function(){return t._queue.length}})}fillResult(e,t){if("exec"===this._queue[t].name&&Array.isArray(e[1])){let r=e[1].length;for(let i=0;i<r;i++){if(e[1][i]instanceof Error)continue;let n=this._queue[t-(r-i)];try{e[1][i]=n.transformReply(e[1][i])}catch(t){e[1][i]=t}}}if(this._result[t]=e,--this.replyPending)return;if(this.isCluster){let e,t=!0;for(let r=0;r<this._result.length;++r){let i=this._result[r][0],a=this._queue[r];if(i){if("exec"===a.name&&"EXECABORT Transaction discarded because of previous errors."===i.message)continue;if(e){if(e.name!==i.name||e.message!==i.message){t=!1;break}}else e={name:i.name,message:i.message}}else if(!a.inTransaction&&!((0,n.exists)(a.name,{caseInsensitive:!0})&&(0,n.hasFlag)(a.name,"readonly",{nameCaseInsensitive:!0}))){t=!1;break}}if(e&&t){let t=this,r=e.message.split(" "),i=this._queue,n=!1;this._queue=[];for(let e=0;e<i.length;++e){if("ASK"===r[0]&&!n&&"asking"!==i[e].name&&(!i[e-1]||"asking"!==i[e-1].name)){let e=new o.default("asking");e.ignore=!0,this.sendCommand(e)}i[e].initPromise(),this.sendCommand(i[e]),n=i[e].inTransaction}let a=!0;void 0===this.leftRedirections&&(this.leftRedirections={});let s=function(){t.exec()},l=this.redis;if(l.handleError(e,this.leftRedirections,{moved:function(e,i){t.preferKey=i,l.slots[r[1]]?l.slots[r[1]][0]!==i&&(l.slots[r[1]]=[i]):l.slots[r[1]]=[i],l._groupsBySlot[r[1]]=l._groupsIds[l.slots[r[1]].join(";")],l.refreshSlotsCache(),t.exec()},ask:function(e,r){t.preferKey=r,t.exec()},tryagain:s,clusterDown:s,connectionClosed:s,maxRedirections:()=>{a=!1},defaults:()=>{a=!1}}),a)return}}let r=0;for(let e=0;e<this._queue.length-r;++e)this._queue[e+r].ignore&&(r+=1),this._result[e]=this._result[e+r];this.resolve(this._result.slice(0,this._result.length-r))}sendCommand(e){this._transactions>0&&(e.inTransaction=!0);let t=this._queue.length;return e.pipelineIndex=t,e.promise.then(e=>{this.fillResult([null,e],t)}).catch(e=>{this.fillResult([e],t)}),this._queue.push(e),this}addBatch(e){let t,r,i;for(let n=0;n<e.length;++n)r=(t=e[n])[0],i=t.slice(1),this[r].apply(this,i);return this}}r.default=c;let u=c.prototype.multi;c.prototype.multi=function(){return this._transactions+=1,u.apply(this,arguments)};let h=c.prototype.execBuffer;c.prototype.execBuffer=(0,s.deprecate)(function(){return this._transactions>0&&(this._transactions-=1),h.apply(this,arguments)},"Pipeline#execBuffer: Use Pipeline#exec instead"),c.prototype.exec=function(e){let t;if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(l.noop),e&&!this.nodeifiedPromise&&(this.nodeifiedPromise=!0,(0,a.default)(this.promise,e)),this.redis.delayUntilReady(t=>{t?this.reject(t):this.exec(e)}),this.promise;if(this._transactions>0)return this._transactions-=1,h.apply(this,arguments);if(this.nodeifiedPromise||(this.nodeifiedPromise=!0,(0,a.default)(this.promise,e)),this._queue.length||this.resolve([]),this.isCluster){let e=[];for(let t=0;t<this._queue.length;t++){let r=this._queue[t].getKeys();if(r.length&&e.push(r[0]),r.length&&0>i.generateMulti(r))return this.reject(Error("All the keys in a pipeline command should belong to the same slot")),this.promise}if(e.length){if((t=function(e,t){let r=i(t[0]),n=e._groupsBySlot[r];for(let r=1;r<t.length;r++)if(e._groupsBySlot[i(t[r])]!==n)return -1;return r}(this.redis,e))<0)return this.reject(Error("All keys in the pipeline should belong to the same slots allocation group")),this.promise}else t=16384*Math.random()|0}let r=this;return function(){let e,i,n=r.replyPending=r._queue.length;r.isCluster&&(e={slot:t,redis:r.redis.connectionPool.nodes.all[r.preferKey]});let a="",s={isPipeline:!0,destination:r.isCluster?e:{redis:r.redis},write(e){"string"!=typeof e?(i||(i=[]),a&&(i.push(Buffer.from(a,"utf8")),a=""),i.push(e)):a+=e,--n||(i?(a&&i.push(Buffer.from(a,"utf8")),s.destination.redis.stream.write(Buffer.concat(i))):s.destination.redis.stream.write(a),n=r._queue.length,a="",i=void 0)}};for(let t=0;t<r._queue.length;++t)r.redis.sendCommand(r._queue[t],s,e);r.promise}(),this.promise}},97283,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.addTransactionSupport=void 0;let i=e.r(63700),n=e.r(1570),a=e.r(46592);r.addTransactionSupport=function(e){e.pipeline=function(e){let t=new a.default(this);return Array.isArray(e)&&t.addBatch(e),t};let{multi:t}=e;e.multi=function(e,r){if(void 0!==r||Array.isArray(e)||(r=e,e=null),r&&!1===r.pipeline)return t.call(this);let s=new a.default(this);s.multi(),Array.isArray(e)&&s.addBatch(e);let o=s.exec;s.exec=function(e){if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(i.noop),(0,n.default)(new Promise((e,t)=>{this.redis.delayUntilReady(r=>{r?t(r):this.exec(s).then(e,t)})}),e);if(this._transactions>0&&o.call(s),this.nodeifiedPromise)return o.call(s);let t=o.call(s);return(0,n.default)(t.then(function(e){let t=e[e.length-1];if(void 0===t)throw Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");if(t[0]){t[0].previousErrors=[];for(let r=0;r<e.length-1;++r)e[r][0]&&t[0].previousErrors.push(e[r][0]);throw t[0]}return(0,i.wrapMultiResult)(t[1])}),e)};let{execBuffer:l}=s;return s.execBuffer=function(e){return this._transactions>0&&l.call(s),s.exec(e)},s};let{exec:r}=e;e.exec=function(e){return(0,n.default)(r.call(this).then(function(e){return Array.isArray(e)&&(e=(0,i.wrapMultiResult)(e)),e}),e)}}},45843,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){Object.getOwnPropertyNames(t.prototype).forEach(r=>{Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))})}},79594,(e,t,r)=>{t.exports=e.x("dns",()=>require("dns"))},86866,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_CLUSTER_OPTIONS=void 0;let i=e.r(79594);r.DEFAULT_CLUSTER_OPTIONS={clusterRetryStrategy:e=>Math.min(100+2*e,2e3),enableOfflineQueue:!0,enableReadyCheck:!0,scaleReads:"master",maxRedirections:16,retryDelayOnMoved:0,retryDelayOnFailover:100,retryDelayOnClusterDown:100,retryDelayOnTryAgain:100,slotsRefreshTimeout:1e3,useSRVRecords:!1,resolveSrv:i.resolveSrv,dnsLookup:i.lookup,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],shardedSubscribers:!1}},72715,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getConnectionName=r.weightSrvRecords=r.groupSrvRecords=r.getUniqueHostnamesFromOptions=r.normalizeNodeOptions=r.nodeKeyToRedisOptions=r.getNodeKey=void 0;let i=e.r(63700),n=e.r(4446);r.getNodeKey=function(e){return e.port=e.port||6379,e.host=e.host||"127.0.0.1",e.host+":"+e.port},r.nodeKeyToRedisOptions=function(e){let t=e.lastIndexOf(":");if(-1===t)throw Error(`Invalid node key ${e}`);return{host:e.slice(0,t),port:Number(e.slice(t+1))}},r.normalizeNodeOptions=function(e){return e.map(e=>{let t={};if("object"==typeof e)Object.assign(t,e);else if("string"==typeof e)Object.assign(t,(0,i.parseURL)(e));else if("number"==typeof e)t.port=e;else throw Error("Invalid argument "+e);return"string"==typeof t.port&&(t.port=parseInt(t.port,10)),delete t.db,t.port||(t.port=6379),t.host||(t.host="127.0.0.1"),(0,i.resolveTLSProfile)(t)})},r.getUniqueHostnamesFromOptions=function(e){let t={};return e.forEach(e=>{t[e.host]=!0}),Object.keys(t).filter(e=>!(0,n.isIP)(e))},r.groupSrvRecords=function(e){let t={};for(let r of e)t.hasOwnProperty(r.priority)?(t[r.priority].totalWeight+=r.weight,t[r.priority].records.push(r)):t[r.priority]={totalWeight:r.weight,records:[r]};return t},r.weightSrvRecords=function(e){if(1===e.records.length)return e.totalWeight=0,e.records.shift();let t=Math.floor(Math.random()*(e.totalWeight+e.records.length)),r=0;for(let[i,n]of e.records.entries())if((r+=1+n.weight)>t)return e.totalWeight-=n.weight,e.records.splice(i,1),n},r.getConnectionName=function(e,t){let r=`ioredis-cluster(${e})`;return t?`${r}:${t}`:r}},90745,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(72715),n=e.r(63700),a=e.r(37159),s=(0,n.Debug)("cluster:subscriber");r.default=class{constructor(e,t,r=!1){this.connectionPool=e,this.emitter=t,this.isSharded=r,this.started=!1,this.subscriber=null,this.slotRange=[],this.onSubscriberEnd=()=>{this.started?(s("subscriber has disconnected, selecting a new one..."),this.selectSubscriber()):s("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.")},this.connectionPool.on("-node",(e,t)=>{this.started&&this.subscriber&&(0,i.getNodeKey)(this.subscriber.options)===t&&(s("subscriber has left, selecting a new one..."),this.selectSubscriber())}),this.connectionPool.on("+node",()=>{this.started&&!this.subscriber&&(s("a new node is discovered and there is no subscriber, selecting a new one..."),this.selectSubscriber())})}getInstance(){return this.subscriber}associateSlotRange(e){return this.isSharded&&(this.slotRange=e),this.slotRange}start(){this.started=!0,this.selectSubscriber(),s("started")}stop(){this.started=!1,this.subscriber&&(this.subscriber.disconnect(),this.subscriber=null)}isStarted(){return this.started}selectSubscriber(){let e=this.lastActiveSubscriber;e&&(e.off("end",this.onSubscriberEnd),e.disconnect()),this.subscriber&&(this.subscriber.off("end",this.onSubscriberEnd),this.subscriber.disconnect());let t=(0,n.sample)(this.connectionPool.getNodes());if(!t){s("selecting subscriber failed since there is no node discovered in the cluster yet"),this.subscriber=null;return}let{options:r}=t;s("selected a subscriber %s:%s",r.host,r.port);let o="subscriber";this.isSharded&&(o="ssubscriber"),this.subscriber=new a.default({port:r.port,host:r.host,username:r.username,password:r.password,enableReadyCheck:!0,connectionName:(0,i.getConnectionName)(o,r.connectionName),lazyConnect:!0,tls:r.tls,retryStrategy:null}),this.subscriber.on("error",n.noop),this.subscriber.on("moved",()=>{this.emitter.emit("forceRefresh")}),this.subscriber.once("end",this.onSubscriberEnd);let l={subscribe:[],psubscribe:[],ssubscribe:[]};if(e){let t=e.condition||e.prevCondition;t&&t.subscriber&&(l.subscribe=t.subscriber.channels("subscribe"),l.psubscribe=t.subscriber.channels("psubscribe"),l.ssubscribe=t.subscriber.channels("ssubscribe"))}if(l.subscribe.length||l.psubscribe.length||l.ssubscribe.length){let e=0;for(let t of["subscribe","psubscribe","ssubscribe"]){let r=l[t];if(0!=r.length)if(s("%s %d channels",t,r.length),"ssubscribe"===t)for(let i of r)e+=1,this.subscriber[t](i).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{s("failed to ssubscribe to channel: %s",i)});else e+=1,this.subscriber[t](r).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{s("failed to %s %d channels",t,r.length)})}}else this.lastActiveSubscriber=this.subscriber;for(let e of["message","messageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)});for(let e of["pmessage","pmessageBuffer"])this.subscriber.on(e,(t,r,i)=>{this.emitter.emit(e,t,r,i)});if(!0==this.isSharded)for(let e of["smessage","smessageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)})}}},36477,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(27699),n=e.r(63700),a=e.r(72715),s=e.r(37159),o=(0,n.Debug)("cluster:connectionPool");class l extends i.EventEmitter{constructor(e){super(),this.redisOptions=e,this.nodes={all:{},master:{},slave:{}},this.specifiedOptions={}}getNodes(e="all"){let t=this.nodes[e];return Object.keys(t).map(e=>t[e])}getInstanceByKey(e){return this.nodes.all[e]}getSampleInstance(e){let t=Object.keys(this.nodes[e]),r=(0,n.sample)(t);return this.nodes[e][r]}addMasterNode(e){let t=(0,a.getNodeKey)(e.options),r=this.createRedisFromOptions(e,e.options.readOnly);return!e.options.readOnly&&(this.nodes.all[t]=r,this.nodes.master[t]=r,!0)}createRedisFromOptions(e,t){return new s.default((0,n.defaults)({retryStrategy:null,enableOfflineQueue:!0,readOnly:t},e,this.redisOptions,{lazyConnect:!0}))}findOrCreate(e,t=!1){let r,i=(0,a.getNodeKey)(e);return t=!!t,this.specifiedOptions[i]?Object.assign(e,this.specifiedOptions[i]):this.specifiedOptions[i]=e,this.nodes.all[i]?(r=this.nodes.all[i]).options.readOnly!==t&&(r.options.readOnly=t,o("Change role of %s to %s",i,t?"slave":"master"),r[t?"readonly":"readwrite"]().catch(n.noop),t?(delete this.nodes.master[i],this.nodes.slave[i]=r):(delete this.nodes.slave[i],this.nodes.master[i]=r)):(o("Connecting to %s as %s",i,t?"slave":"master"),r=this.createRedisFromOptions(e,t),this.nodes.all[i]=r,this.nodes[t?"slave":"master"][i]=r,r.once("end",()=>{this.removeNode(i),this.emit("-node",r,i),Object.keys(this.nodes.all).length||this.emit("drain")}),this.emit("+node",r,i),r.on("error",function(e){this.emit("nodeError",e,i)})),r}reset(e){o("Reset with %O",e);let t={};e.forEach(e=>{let r=(0,a.getNodeKey)(e);e.readOnly&&t[r]||(t[r]=e)}),Object.keys(this.nodes.all).forEach(e=>{t[e]||(o("Disconnect %s because the node does not hold any slot",e),this.nodes.all[e].disconnect(),this.removeNode(e))}),Object.keys(t).forEach(e=>{let r=t[e];this.findOrCreate(r,r.readOnly)})}removeNode(e){let{nodes:t}=this;t.all[e]&&(o("Remove %s from the pool",e),delete t.all[e]),delete t.master[e],delete t.slave[e]}}r.default=l},21195,(e,t,r)=>{"use strict";function i(e,t){var t=t||{};this._capacity=t.capacity,this._head=0,this._tail=0,Array.isArray(e)?this._fromArray(e):(this._capacityMask=3,this._list=[,,,,])}i.prototype.peekAt=function(e){var t=e;if(t===(0|t)){var r=this.size();if(!(t>=r)&&!(t<-r))return t<0&&(t+=r),t=this._head+t&this._capacityMask,this._list[t]}},i.prototype.get=function(e){return this.peekAt(e)},i.prototype.peek=function(){if(this._head!==this._tail)return this._list[this._head]},i.prototype.peekFront=function(){return this.peek()},i.prototype.peekBack=function(){return this.peekAt(-1)},Object.defineProperty(i.prototype,"length",{get:function(){return this.size()}}),i.prototype.size=function(){return this._head===this._tail?0:this._head<this._tail?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},i.prototype.unshift=function(e){if(0==arguments.length)return this.size();var t=this._list.length;return(this._head=this._head-1+t&this._capacityMask,this._list[this._head]=e,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.pop(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},i.prototype.shift=function(){var e=this._head;if(e!==this._tail){var t=this._list[e];return this._list[e]=void 0,this._head=e+1&this._capacityMask,e<2&&this._tail>1e4&&this._tail<=this._list.length>>>2&&this._shrinkArray(),t}},i.prototype.push=function(e){if(0==arguments.length)return this.size();var t=this._tail;return(this._list[t]=e,this._tail=t+1&this._capacityMask,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.shift(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},i.prototype.pop=function(){var e=this._tail;if(e!==this._head){var t=this._list.length;this._tail=e-1+t&this._capacityMask;var r=this._list[this._tail];return this._list[this._tail]=void 0,this._head<2&&e>1e4&&e<=t>>>2&&this._shrinkArray(),r}},i.prototype.removeOne=function(e){var t,r=e;if(r===(0|r)&&this._head!==this._tail){var i=this.size(),n=this._list.length;if(!(r>=i)&&!(r<-i)){r<0&&(r+=i),r=this._head+r&this._capacityMask;var a=this._list[r];if(e<i/2){for(t=e;t>0;t--)this._list[r]=this._list[r=r-1+n&this._capacityMask];this._list[r]=void 0,this._head=this._head+1+n&this._capacityMask}else{for(t=i-1-e;t>0;t--)this._list[r]=this._list[r=r+1+n&this._capacityMask];this._list[r]=void 0,this._tail=this._tail-1+n&this._capacityMask}return a}}},i.prototype.remove=function(e,t){var r,i,n=e,a=t;if(n===(0|n)&&this._head!==this._tail){var s=this.size(),o=this._list.length;if(!(n>=s)&&!(n<-s)&&!(t<1)){if(n<0&&(n+=s),1===t||!t)return(r=[,])[0]=this.removeOne(n),r;if(0===n&&n+t>=s)return r=this.toArray(),this.clear(),r;for(n+t>s&&(t=s-n),r=Array(t),i=0;i<t;i++)r[i]=this._list[this._head+n+i&this._capacityMask];if(n=this._head+n&this._capacityMask,e+t===s){for(this._tail=this._tail-t+o&this._capacityMask,i=t;i>0;i--)this._list[n=n+1+o&this._capacityMask]=void 0;return r}if(0===e){for(this._head=this._head+t+o&this._capacityMask,i=t-1;i>0;i--)this._list[n=n+1+o&this._capacityMask]=void 0;return r}if(n<s/2){for(this._head=this._head+e+t+o&this._capacityMask,i=e;i>0;i--)this.unshift(this._list[n=n-1+o&this._capacityMask]);for(n=this._head-1+o&this._capacityMask;a>0;)this._list[n=n-1+o&this._capacityMask]=void 0,a--;e<0&&(this._tail=n)}else{for(this._tail=n,n=n+t+o&this._capacityMask,i=s-(t+e);i>0;i--)this.push(this._list[n++]);for(n=this._tail;a>0;)this._list[n=n+1+o&this._capacityMask]=void 0,a--}return this._head<2&&this._tail>1e4&&this._tail<=o>>>2&&this._shrinkArray(),r}}},i.prototype.splice=function(e,t){var r=e;if(r===(0|r)){var i=this.size();if(r<0&&(r+=i),!(r>i))if(!(arguments.length>2))return this.remove(r,t);else{var n,a,s,o=arguments.length,l=this._list.length,d=2;if(!i||r<i/2){for(n=0,a=Array(r);n<r;n++)a[n]=this._list[this._head+n&this._capacityMask];for(0===t?(s=[],r>0&&(this._head=this._head+r+l&this._capacityMask)):(s=this.remove(r,t),this._head=this._head+r+l&this._capacityMask);o>d;)this.unshift(arguments[--o]);for(n=r;n>0;n--)this.unshift(a[n-1])}else{var c=(a=Array(i-(r+t))).length;for(n=0;n<c;n++)a[n]=this._list[this._head+r+t+n&this._capacityMask];for(0===t?(s=[],r!=i&&(this._tail=this._head+r+l&this._capacityMask)):(s=this.remove(r,t),this._tail=this._tail-c+l&this._capacityMask);d<o;)this.push(arguments[d++]);for(n=0;n<c;n++)this.push(a[n])}return s}}},i.prototype.clear=function(){this._list=Array(this._list.length),this._head=0,this._tail=0},i.prototype.isEmpty=function(){return this._head===this._tail},i.prototype.toArray=function(){return this._copyArray(!1)},i.prototype._fromArray=function(e){var t=e.length,r=this._nextPowerOf2(t);this._list=Array(r),this._capacityMask=r-1,this._tail=t;for(var i=0;i<t;i++)this._list[i]=e[i]},i.prototype._copyArray=function(e,t){var r,i=this._list,n=i.length,a=this.length;if((t|=a)==a&&this._head<this._tail)return this._list.slice(this._head,this._tail);var s=Array(t),o=0;if(e||this._head>this._tail){for(r=this._head;r<n;r++)s[o++]=i[r];for(r=0;r<this._tail;r++)s[o++]=i[r]}else for(r=this._head;r<this._tail;r++)s[o++]=i[r];return s},i.prototype._growArray=function(){if(0!=this._head){var e=this._copyArray(!0,this._list.length<<1);this._tail=this._list.length,this._head=0,this._list=e}else this._tail=this._list.length,this._list.length<<=1;this._capacityMask=this._capacityMask<<1|1},i.prototype._shrinkArray=function(){this._list.length>>>=1,this._capacityMask>>>=1},i.prototype._nextPowerOf2=function(e){return Math.max(1<<Math.log(e)/Math.log(2)+1,4)},t.exports=i},60330,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(63700),n=e.r(21195),a=(0,i.Debug)("delayqueue");r.default=class{constructor(){this.queues={},this.timeouts={}}push(e,t,r){let i=r.callback||process.nextTick;this.queues[e]||(this.queues[e]=new n),this.queues[e].push(t),this.timeouts[e]||(this.timeouts[e]=setTimeout(()=>{i(()=>{this.timeouts[e]=null,this.execute(e)})},r.timeout))}execute(e){let t=this.queues[e];if(!t)return;let{length:r}=t;if(r)for(a("send %d commands in %s queue",r,e),this.queues[e]=null;t.length>0;)t.shift()()}}},26363,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(72715),n=e.r(63700),a=e.r(37159),s=(0,n.Debug)("cluster:subscriberGroup:shardedSubscriber"),o="idle",l="starting",d="connected",c="stopping",u="ended",h={[o]:[l,c,u],[l]:[d,c,u],[d]:[c,u],[c]:[u],[u]:[]};r.default=class{constructor(e,t,r){var s;for(const l of(this.emitter=e,this.status=o,this.instance=null,this.connectPromise=null,this.messageListeners=new Map,this.onEnd=()=>{this.updateStatus(u),this.emitter.emit("-node",this.instance,this.nodeKey)},this.onError=e=>{this.emitter.emit("nodeError",e,this.nodeKey)},this.onMoved=()=>{this.emitter.emit("moved")},this.instance=new a.default((0,n.defaults)({enableReadyCheck:!1,enableOfflineQueue:!0,connectionName:(0,i.getConnectionName)("ssubscriber",t.connectionName),retryStrategy:null,lazyConnect:!0},t,r)),this.lazyConnect=null==(s=null==r?void 0:r.lazyConnect)||s,this.nodeKey=(0,i.getNodeKey)(t),this.instance.on("end",this.onEnd),this.instance.on("error",this.onError),this.instance.on("moved",this.onMoved),["smessage","smessageBuffer"])){const e=(...e)=>{this.emitter.emit(l,...e)};this.messageListeners.set(l,e),this.instance.on(l,e)}}async start(){if(this.connectPromise)return this.connectPromise;if(this.status!==l&&this.status!==d){if(this.status===u||!this.instance)throw Error(`Sharded subscriber ${this.nodeKey} cannot be restarted once ended.`);this.updateStatus(l),this.connectPromise=this.instance.connect();try{await this.connectPromise,this.updateStatus(d)}catch(e){throw this.updateStatus(u),e}finally{this.connectPromise=null}}}stop(){this.updateStatus(c),this.instance&&(this.instance.disconnect(),this.instance.removeAllListeners(),this.messageListeners.clear(),this.instance=null),this.updateStatus(u),s("stopped %s",this.nodeKey)}isStarted(){return[d,l].includes(this.status)}get subscriberStatus(){return this.status}isHealthy(){return(this.status===o||this.status===d||this.status===l)&&null!==this.instance}getInstance(){return this.instance}getNodeKey(){return this.nodeKey}isLazyConnect(){return this.lazyConnect}updateStatus(e){if(this.status!==e){if(!h[this.status].includes(e))return void s("Invalid status transition for %s: %s -> %s",this.nodeKey,this.status,e);this.status=e}}}},61929,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(63700),n=e.r(72715),a=e.r(49568),s=e.r(26363),o=(0,i.Debug)("cluster:subscriberGroup");class l{constructor(e,t){this.subscriberGroupEmitter=e,this.options=t,this.shardedSubscribers=new Map,this.clusterSlots=[],this.subscriberToSlotsIndex=new Map,this.channels=new Map,this.failedAttemptsByNode=new Map,this.isResetting=!1,this.pendingReset=null,this.handleSubscriberConnectFailed=(e,t)=>{let r=(this.failedAttemptsByNode.get(t)||0)+1;this.failedAttemptsByNode.set(t,r);let i=Math.min(r,l.MAX_RETRY_ATTEMPTS),n=Math.min(l.BASE_BACKOFF_MS*2**i,l.MAX_BACKOFF_MS),a=Math.floor(.5*n*(Math.random()-.5)),s=Math.max(0,n+a);o("Failed to connect subscriber for %s. Refreshing slots in %dms",t,s),this.subscriberGroupEmitter.emit("subscriberConnectFailed",{delay:s,error:e})},this.handleSubscriberConnectSucceeded=e=>{this.failedAttemptsByNode.delete(e)}}getResponsibleSubscriber(e){let t=this.clusterSlots[e][0],r=this.shardedSubscribers.get(t);return r&&"idle"===r.subscriberStatus&&r.start().then(()=>{this.handleSubscriberConnectSucceeded(r.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,r.getNodeKey())}),r}addChannels(e){let t=a(e[0]);for(let r of e)if(a(r)!==t)return -1;let r=this.channels.get(t);return r?this.channels.set(t,r.concat(e)):this.channels.set(t,e),Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}removeChannels(e){let t=a(e[0]);for(let r of e)if(a(r)!==t)return -1;let r=this.channels.get(t);if(r){let i=r.filter(t=>!e.includes(t));this.channels.set(t,i)}return Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}stop(){for(let e of this.shardedSubscribers.values())e.stop();this.pendingReset=null,this.shardedSubscribers.clear(),this.subscriberToSlotsIndex.clear()}start(){let e=[];for(let t of this.shardedSubscribers.values())this.shouldStartSubscriber(t)&&(e.push(t.start().then(()=>{this.handleSubscriberConnectSucceeded(t.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,t.getNodeKey())})),this.subscriberGroupEmitter.emit("+subscriber"));return Promise.all(e)}async reset(e,t){if(this.isResetting){this.pendingReset={slots:e,nodes:t};return}this.isResetting=!0;try{let r=this._refreshSlots(e),i=this.hasUnhealthySubscribers();if(!r&&!i)return void o("No topology change detected or failed subscribers. Skipping reset.");for(let[e,t]of this.shardedSubscribers){if(this.subscriberToSlotsIndex.has(e)&&t.isHealthy()){o("Skipping deleting subscriber for %s",e);continue}o("Removing subscriber for %s",e),t.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")}let a=[];for(let[e,r]of this.subscriberToSlotsIndex){let r=this.shardedSubscribers.get(e);if(r&&r.isHealthy()){o("Skipping creating new subscriber for %s",e),!r.isStarted()&&this.shouldStartSubscriber(r)&&a.push(r.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)}));continue}r&&!r.isHealthy()&&(o("Replacing subscriber for %s",e),r.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")),o("Creating new subscriber for %s",e);let i=t.find(t=>(0,n.getNodeKey)(t.options)===e);if(!i){o("Failed to find node for key %s",e);continue}let l=new s.default(this.subscriberGroupEmitter,i.options,this.options.redisOptions);this.shardedSubscribers.set(e,l),this.shouldStartSubscriber(l)&&a.push(l.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)})),this.subscriberGroupEmitter.emit("+subscriber")}await Promise.all(a),this._resubscribe(),this.subscriberGroupEmitter.emit("subscribersReady")}finally{if(this.isResetting=!1,this.pendingReset){let{slots:e,nodes:t}=this.pendingReset;this.pendingReset=null,await this.reset(e,t)}}}_refreshSlots(e){if(this._slotsAreEqual(e)&&this.subscriberToSlotsIndex.size>0)return o("Nothing to refresh because the new cluster map is equal to the previous one."),!1;o("Refreshing the slots of the subscriber group."),this.subscriberToSlotsIndex=new Map;for(let t=0;t<e.length;t++){let r=e[t][0];this.subscriberToSlotsIndex.has(r)||this.subscriberToSlotsIndex.set(r,[]),this.subscriberToSlotsIndex.get(r).push(Number(t))}return this.clusterSlots=JSON.parse(JSON.stringify(e)),!0}_resubscribe(){this.shardedSubscribers&&this.shardedSubscribers.forEach((e,t)=>{let r=this.subscriberToSlotsIndex.get(t);r&&r.forEach(r=>{let i=e.getInstance(),n=this.channels.get(r);if(n&&n.length>0){if(!i||"end"===i.status)return;"ready"===i.status?i.ssubscribe(...n).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)}):i.once("ready",()=>{i.ssubscribe(...n).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)})})}})})}_slotsAreEqual(e){return void 0!==this.clusterSlots&&JSON.stringify(this.clusterSlots)===JSON.stringify(e)}hasUnhealthySubscribers(){let e=Array.from(this.shardedSubscribers.values()).some(e=>!e.isHealthy()),t=Array.from(this.subscriberToSlotsIndex.keys()).some(e=>!this.shardedSubscribers.has(e));return e||t}shouldStartSubscriber(e){if(e.isStarted())return!1;if(!e.isLazyConnect())return!0;let t=this.subscriberToSlotsIndex.get(e.getNodeKey());return!!t&&t.some(e=>{let t=this.channels.get(e);return!!(t&&t.length>0)})}}r.default=l,l.MAX_RETRY_ATTEMPTS=10,l.MAX_BACKOFF_MS=2e3,l.BASE_BACKOFF_MS=100},6661,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(75761),n=e.r(27699),a=e.r(43473),s=e.r(1570),o=e.r(36314),l=e.r(34994),d=e.r(37159),c=e.r(37145),u=e.r(97283),h=e.r(63700),p=e.r(45843),y=e.r(47238),m=e.r(86866),f=e.r(90745),b=e.r(36477),g=e.r(60330),v=e.r(72715),K=e.r(21195),S=e.r(61929),E=(0,h.Debug)("cluster"),I=new WeakSet;class k extends y.default{constructor(e,t={}){if(super(),this.slots=[],this._groupsIds={},this._groupsBySlot=Array(16384),this.isCluster=!0,this.retryAttempts=0,this.delayQueue=new g.default,this.offlineQueue=new K,this.isRefreshing=!1,this._refreshSlotsCacheCallbacks=[],this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this._readyDelayedCallbacks=[],this.connectionEpoch=0,n.EventEmitter.call(this),this.startupNodes=e,this.options=(0,h.defaults)({},t,m.DEFAULT_CLUSTER_OPTIONS,this.options),this.options.shardedSubscribers&&this.createShardedSubscriberGroup(),this.options.redisOptions&&this.options.redisOptions.keyPrefix&&!this.options.keyPrefix&&(this.options.keyPrefix=this.options.redisOptions.keyPrefix),"function"!=typeof this.options.scaleReads&&-1===["all","master","slave"].indexOf(this.options.scaleReads))throw Error('Invalid option scaleReads "'+this.options.scaleReads+'". Expected "all", "master", "slave" or a custom function');this.connectionPool=new b.default(this.options.redisOptions),this.connectionPool.on("-node",(e,t)=>{this.emit("-node",e)}),this.connectionPool.on("+node",e=>{this.emit("+node",e)}),this.connectionPool.on("drain",()=>{this.setStatus("close")}),this.connectionPool.on("nodeError",(e,t)=>{this.emit("node error",e,t)}),this.subscriber=new f.default(this.connectionPool,this),this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(e=>{E("connecting failed: %s",e)})}connect(){return new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status)return void t(Error("Redis is already connecting/connected"));let r=++this.connectionEpoch;this.setStatus("connecting"),this.resolveStartupNodeHostnames().then(i=>{let n;if(this.connectionEpoch!==r){E("discard connecting after resolving startup nodes because epoch not match: %d != %d",r,this.connectionEpoch),t(new a.RedisError("Connection is discarded because a new connection is made"));return}if("connecting"!==this.status){E("discard connecting after resolving startup nodes because the status changed to %s",this.status),t(new a.RedisError("Connection is aborted"));return}this.connectionPool.reset(i),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{E("Error while starting subscribers: %s",e)});let s=()=>{this.setStatus("ready"),this.retryAttempts=0,this.executeOfflineCommands(),this.resetNodesRefreshInterval(),e()},o=()=>{this.invokeReadyDelayedCallbacks(void 0),this.removeListener("close",n),this.manuallyClosing=!1,this.setStatus("connect"),this.options.enableReadyCheck?this.readyCheck((e,t)=>{e||t?(E("Ready check failed (%s). Reconnecting...",e||t),"connect"===this.status&&this.disconnect(!0)):s()}):s()};n=()=>{let e=Error("None of startup nodes is available");this.removeListener("refresh",o),this.invokeReadyDelayedCallbacks(e),t(e)},this.once("refresh",o),this.once("close",n),this.once("close",this.handleCloseEvent.bind(this)),this.refreshSlotsCache(e=>{e&&e.message===l.default.defaultMessage&&(d.default.prototype.silentEmit.call(this,"error",e),this.connectionPool.reset([]))}),this.subscriber.start(),this.options.shardedSubscribers&&this.shardedSubscribers.start().catch(e=>{E("Error while starting subscribers: %s",e)})}).catch(e=>{this.setStatus("close"),this.handleCloseEvent(e),this.invokeReadyDelayedCallbacks(e),t(e)})})}disconnect(e=!1){let t=this.status;this.setStatus("disconnecting"),e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null,E("Canceled reconnecting attempts")),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t?(this.setStatus("close"),this.handleCloseEvent()):this.connectionPool.reset([])}quit(e){let t=this.status;if(this.setStatus("disconnecting"),this.manuallyClosing=!0,this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t){let t=(0,s.default)(Promise.resolve("OK"),e);return setImmediate((function(){this.setStatus("close"),this.handleCloseEvent()}).bind(this)),t}return(0,s.default)(Promise.all(this.nodes().map(e=>e.quit().catch(e=>{if(e.message===h.CONNECTION_CLOSED_ERROR_MSG)return"OK";throw e}))).then(()=>"OK"),e)}duplicate(e=[],t={}){return new k(e.length>0?e:this.startupNodes.slice(0),Object.assign({},this.options,t))}nodes(e="all"){if("all"!==e&&"master"!==e&&"slave"!==e)throw Error('Invalid role "'+e+'". Expected "all", "master" or "slave"');return this.connectionPool.getNodes(e)}delayUntilReady(e){this._readyDelayedCallbacks.push(e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}refreshSlotsCache(e){if(e&&this._refreshSlotsCacheCallbacks.push(e),this.isRefreshing)return;this.isRefreshing=!0;let t=this,r=e=>{for(let t of(this.isRefreshing=!1,this._refreshSlotsCacheCallbacks))t(e);this._refreshSlotsCacheCallbacks=[]},i=(0,h.shuffle)(this.connectionPool.getNodes()),n=null;!function e(a){if(a===i.length)return r(new l.default(l.default.defaultMessage,n));let s=i[a],o=`${s.options.host}:${s.options.port}`;E("getting slot cache from %s",o),t.getInfoFromNode(s,function(i){switch(t.status){case"close":case"end":return r(Error("Cluster is disconnected."));case"disconnecting":return r(Error("Cluster is disconnecting."))}i?(t.emit("node error",i,o),n=i,e(a+1)):(t.emit("refresh"),r())})}(0)}sendCommand(e,t,r){if("wait"===this.status&&this.connect().catch(h.noop),"end"===this.status)return e.reject(Error(h.CONNECTION_CLOSED_ERROR_MSG)),e.promise;let n=this.options.scaleReads;"master"!==n&&(e.isReadOnly||(0,i.exists)(e.name)&&(0,i.hasFlag)(e.name,"readonly")||(n="master"));let s=r?r.slot:e.getSlot(),l={},d=this;if(!r&&!I.has(e)){I.add(e);let t=e.reject;e.reject=function(r){let i=c.bind(null,!0);d.handleError(r,l,{moved:function(t,r){E("command %s is moved to %s",e.name,r),s=Number(t),d.slots[t]?d.slots[t][0]=r:d.slots[t]=[r],d._groupsBySlot[t]=d._groupsIds[d.slots[t].join(";")],d.connectionPool.findOrCreate(d.natMapper(r)),c(),E("refreshing slot caches... (triggered by MOVED error)"),d.refreshSlotsCache()},ask:function(t,r){E("command %s is required to ask %s:%s",e.name,r);let i=d.natMapper(r);d.connectionPool.findOrCreate(i),c(!1,`${i.host}:${i.port}`)},tryagain:i,clusterDown:i,connectionClosed:i,maxRedirections:function(r){t.call(e,r)},defaults:function(){t.call(e,r)}})}}function c(i,l){let c;if("end"===d.status)return void e.reject(new a.AbortError("Cluster is ended."));if("ready"===d.status||"cluster"===e.name){if(r&&r.redis)c=r.redis;else if(o.default.checkFlag("ENTER_SUBSCRIBER_MODE",e.name)||o.default.checkFlag("EXIT_SUBSCRIBER_MODE",e.name)){if(d.options.shardedSubscribers&&("ssubscribe"==e.name||"sunsubscribe"==e.name)){let t=d.shardedSubscribers.getResponsibleSubscriber(s);if(!t)return void e.reject(new a.AbortError(`No sharded subscriber for slot: ${s}`));let r=-1;"ssubscribe"==e.name&&(r=d.shardedSubscribers.addChannels(e.getKeys())),"sunsubscribe"==e.name&&(r=d.shardedSubscribers.removeChannels(e.getKeys())),-1!==r?c=t.getInstance():e.reject(new a.AbortError("Possible CROSSSLOT error: All channels must hash to the same slot"))}else c=d.subscriber.getInstance();if(!c)return void e.reject(new a.AbortError("No subscriber for the cluster"))}else{if(!i){if("number"==typeof s&&d.slots[s]){let t=d.slots[s];if("function"==typeof n){let r=t.map(function(e){return d.connectionPool.getInstanceByKey(e)});Array.isArray(c=n(r,e))&&(c=(0,h.sample)(c)),c||(c=r[0])}else{let e;e="all"===n?(0,h.sample)(t):"slave"===n&&t.length>1?(0,h.sample)(t,1):t[0],c=d.connectionPool.getInstanceByKey(e)}}l&&(c=d.connectionPool.getInstanceByKey(l)).asking()}c||(c=("function"==typeof n?null:d.connectionPool.getSampleInstance(n))||d.connectionPool.getSampleInstance("all"))}r&&!r.redis&&(r.redis=c)}c?c.sendCommand(e,t):d.options.enableOfflineQueue?d.offlineQueue.push({command:e,stream:t,node:r}):e.reject(Error("Cluster isn't ready and enableOfflineQueue options is false"))}return c(),e.promise}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}handleError(e,t,r){if(void 0===t.value?t.value=this.options.maxRedirections:t.value-=1,t.value<=0)return void r.maxRedirections(Error("Too many Cluster redirections. Last error: "+e));let i=e.message.split(" ");if("MOVED"===i[0]){let e=this.options.retryDelayOnMoved;e&&"number"==typeof e?this.delayQueue.push("moved",r.moved.bind(null,i[1],i[2]),{timeout:e}):r.moved(i[1],i[2])}else"ASK"===i[0]?r.ask(i[1],i[2]):"TRYAGAIN"===i[0]?this.delayQueue.push("tryagain",r.tryagain,{timeout:this.options.retryDelayOnTryAgain}):"CLUSTERDOWN"===i[0]&&this.options.retryDelayOnClusterDown>0?this.delayQueue.push("clusterdown",r.connectionClosed,{timeout:this.options.retryDelayOnClusterDown,callback:this.refreshSlotsCache.bind(this)}):e.message===h.CONNECTION_CLOSED_ERROR_MSG&&this.options.retryDelayOnFailover>0&&"ready"===this.status?this.delayQueue.push("failover",r.connectionClosed,{timeout:this.options.retryDelayOnFailover,callback:this.refreshSlotsCache.bind(this)}):r.defaults()}resetOfflineQueue(){this.offlineQueue=new K}clearNodesRefreshInterval(){this.slotsTimer&&(clearTimeout(this.slotsTimer),this.slotsTimer=null)}resetNodesRefreshInterval(){if(this.slotsTimer||!this.options.slotsRefreshInterval)return;let e=()=>{this.slotsTimer=setTimeout(()=>{E('refreshing slot caches... (triggered by "slotsRefreshInterval" option)'),this.refreshSlotsCache(()=>{e()})},this.options.slotsRefreshInterval)};e()}setStatus(e){E("status: %s -> %s",this.status||"[empty]",e),this.status=e,process.nextTick(()=>{this.emit(e)})}handleCloseEvent(e){var t;let r;e&&E("closed because %s",e),this.manuallyClosing||"function"!=typeof this.options.clusterRetryStrategy||(r=this.options.clusterRetryStrategy.call(this,++this.retryAttempts,e)),"number"==typeof r?(this.setStatus("reconnecting"),this.reconnectTimeout=setTimeout(()=>{this.reconnectTimeout=null,E("Cluster is disconnected. Retrying after %dms",r),this.connect().catch(function(e){E("Got error %s when reconnecting. Ignoring...",e)})},r)):(this.options.shardedSubscribers&&(null==(t=this.subscriberGroupEmitter)||t.removeAllListeners()),this.setStatus("end"),this.flushQueue(Error("None of startup nodes is available")))}flushQueue(e){let t;for(;t=this.offlineQueue.shift();)t.command.reject(e)}executeOfflineCommands(){if(this.offlineQueue.length){let e;E("send %d commands in offline queue",this.offlineQueue.length);let t=this.offlineQueue;for(this.resetOfflineQueue();e=t.shift();)this.sendCommand(e.command,e.stream,e.node)}}natMapper(e){let t="string"==typeof e?e:`${e.host}:${e.port}`,r=null;return(this.options.natMap&&"function"==typeof this.options.natMap?r=this.options.natMap(t):this.options.natMap&&"object"==typeof this.options.natMap&&(r=this.options.natMap[t]),r)?(E("NAT mapping %s -> %O",t,r),Object.assign({},r)):"string"==typeof e?(0,v.nodeKeyToRedisOptions)(e):e}getInfoFromNode(e,t){if(!e)return t(Error("Node is disconnected"));let r=e.duplicate({enableOfflineQueue:!0,enableReadyCheck:!1,retryStrategy:null,connectionName:(0,v.getConnectionName)("refresher",this.options.redisOptions&&this.options.redisOptions.connectionName)});r.on("error",h.noop),r.cluster("SLOTS",(0,h.timeout)((e,i)=>{if(r.disconnect(),e)return E("error encountered running CLUSTER.SLOTS: %s",e),t(e);if("disconnecting"===this.status||"close"===this.status||"end"===this.status){E("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s",i.length,this.status),t();return}let n=[];E("cluster slots result count: %d",i.length);for(let e=0;e<i.length;++e){let t=i[e],r=t[0],a=t[1],s=[];for(let e=2;e<t.length;e++){if(!t[e][0])continue;let r=this.natMapper({host:t[e][0],port:t[e][1]});r.readOnly=2!==e,n.push(r),s.push(r.host+":"+r.port)}E("cluster slots result [%d]: slots %d~%d served by %s",e,r,a,s);for(let e=r;e<=a;e++)this.slots[e]=s}this._groupsIds=Object.create(null);let a=0;for(let e=0;e<16384;e++){let t=(this.slots[e]||[]).join(";");if(!t.length){this._groupsBySlot[e]=void 0;continue}this._groupsIds[t]||(this._groupsIds[t]=++a),this._groupsBySlot[e]=this._groupsIds[t]}this.connectionPool.reset(n),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{E("Error while starting subscribers: %s",e)}),t()},this.options.slotsRefreshTimeout))}invokeReadyDelayedCallbacks(e){for(let t of this._readyDelayedCallbacks)process.nextTick(t,e);this._readyDelayedCallbacks=[]}readyCheck(e){this.cluster("INFO",(t,r)=>{let i;if(t)return e(t);if("string"!=typeof r)return e();let n=r.split("\r\n");for(let e=0;e<n.length;++e){let t=n[e].split(":");if("cluster_state"===t[0]){i=t[1];break}}"fail"===i?(E("cluster state not ok (%s)",i),e(null,i)):e()})}resolveSrv(e){return new Promise((t,r)=>{this.options.resolveSrv(e,(e,i)=>{if(e)return r(e);let n=this,a=(0,v.groupSrvRecords)(i),s=Object.keys(a).sort((e,t)=>parseInt(e)-parseInt(t));!function e(i){if(!s.length)return r(i);let o=a[s[0]],l=(0,v.weightSrvRecords)(o);o.records.length||s.shift(),n.dnsLookup(l.name).then(e=>t({host:e,port:l.port}),e)}()})})}dnsLookup(e){return new Promise((t,r)=>{this.options.dnsLookup(e,(i,n)=>{i?(E("failed to resolve hostname %s to IP: %s",e,i.message),r(i)):(E("resolved hostname %s to IP %s",e,n),t(n))})})}async resolveStartupNodeHostnames(){if(!Array.isArray(this.startupNodes)||0===this.startupNodes.length)throw Error("`startupNodes` should contain at least one node.");let e=(0,v.normalizeNodeOptions)(this.startupNodes),t=(0,v.getUniqueHostnamesFromOptions)(e);if(0===t.length)return e;let r=await Promise.all(t.map((this.options.useSRVRecords?this.resolveSrv:this.dnsLookup).bind(this))),i=(0,h.zipMap)(t,r);return e.map(e=>{let t=i.get(e.host);return t?this.options.useSRVRecords?Object.assign({},e,t):Object.assign({},e,{host:t}):e})}createScanStream(e,{key:t,options:r={}}){return new c.default({objectMode:!0,key:t,redis:this,command:e,...r})}createShardedSubscriberGroup(){this.subscriberGroupEmitter=new n.EventEmitter,this.shardedSubscribers=new S.default(this.subscriberGroupEmitter,this.options);let e=e=>{e instanceof l.default&&this.disconnect(!0)};for(let t of(this.subscriberGroupEmitter.on("-node",(t,r)=>{this.emit("-node",t,r),this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("subscriberConnectFailed",({delay:t,error:r})=>{this.emit("error",r),setTimeout(()=>{this.refreshSlotsCache(e)},t)}),this.subscriberGroupEmitter.on("moved",()=>{this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("-subscriber",()=>{this.emit("-subscriber")}),this.subscriberGroupEmitter.on("+subscriber",()=>{this.emit("+subscriber")}),this.subscriberGroupEmitter.on("nodeError",(e,t)=>{this.emit("nodeError",e,t)}),this.subscriberGroupEmitter.on("subscribersReady",()=>{this.emit("subscribersReady")}),["smessage","smessageBuffer"]))this.subscriberGroupEmitter.on(t,(e,r,i)=>{this.emit(t,e,r,i)})}}(0,p.default)(k,n.EventEmitter),(0,u.addTransactionSupport)(k.prototype),r.default=k},55004,(e,t,r)=>{t.exports=e.x("tls",()=>require("tls"))},41180,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=(0,e.r(63700).Debug)("AbstractConnector");r.default=class{constructor(e){this.connecting=!1,this.disconnectTimeout=e}check(e){return!0}disconnect(){if(this.connecting=!1,this.stream){let e=this.stream,t=setTimeout(()=>{i("stream %s:%s still open, destroying it",e.remoteAddress,e.remotePort),e.destroy()},this.disconnectTimeout);e.on("close",()=>clearTimeout(t)),e.end()}}}},25124,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(4446),n=e.r(55004),a=e.r(63700),s=e.r(41180);class o extends s.default{constructor(e){super(e.disconnectTimeout),this.options=e}connect(e){let t,{options:r}=this;return this.connecting=!0,"path"in r&&r.path?t={path:r.path}:(t={},"port"in r&&null!=r.port&&(t.port=r.port),"host"in r&&null!=r.host&&(t.host=r.host),"family"in r&&null!=r.family&&(t.family=r.family)),r.tls&&Object.assign(t,r.tls),new Promise((e,s)=>{process.nextTick(()=>{if(!this.connecting)return void s(Error(a.CONNECTION_CLOSED_ERROR_MSG));try{r.tls?this.stream=(0,n.connect)(t):this.stream=(0,i.createConnection)(t)}catch(e){s(e);return}this.stream.once("error",e=>{this.firstError=e}),e(this.stream)})})}}r.default=o},8098,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{constructor(e){this.cursor=0,this.sentinels=e.slice(0)}next(){let e=this.cursor>=this.sentinels.length;return{done:e,value:e?void 0:this.sentinels[this.cursor++]}}reset(e){e&&this.sentinels.length>1&&1!==this.cursor&&this.sentinels.unshift(...this.sentinels.splice(this.cursor-1)),this.cursor=0}add(e){for(let r=0;r<this.sentinels.length;r++){var t;if(t=this.sentinels[r],(e.host||"127.0.0.1")===(t.host||"127.0.0.1")&&(e.port||26379)===(t.port||26379))return!1}return this.sentinels.push(e),!0}toString(){return`${JSON.stringify(this.sentinels)} @${this.cursor}`}}},52560,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.FailoverDetector=void 0;let i=(0,e.r(63700).Debug)("FailoverDetector"),n="+switch-master";r.FailoverDetector=class{constructor(e,t){this.isDisconnected=!1,this.connector=e,this.sentinels=t}cleanup(){for(let e of(this.isDisconnected=!0,this.sentinels))e.client.disconnect()}async subscribe(){i("Starting FailoverDetector");let e=[];for(let t of this.sentinels){let r=t.client.subscribe(n).catch(e=>{i("Failed to subscribe to failover messages on sentinel %s:%s (%s)",t.address.host||"127.0.0.1",t.address.port||26739,e.message)});e.push(r),t.client.on("message",e=>{this.isDisconnected||e!==n||this.disconnect()})}await Promise.all(e)}disconnect(){this.isDisconnected=!0,i("Failover detected, disconnecting"),this.connector.disconnect()}}},35502,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SentinelIterator=void 0;let i=e.r(4446),n=e.r(63700),a=e.r(55004),s=e.r(8098);r.SentinelIterator=s.default;let o=e.r(41180),l=e.r(37159),d=e.r(52560),c=(0,n.Debug)("SentinelConnector");class u extends o.default{constructor(e){if(super(e.disconnectTimeout),this.options=e,this.emitter=null,this.failoverDetector=null,!this.options.sentinels.length)throw Error("Requires at least one sentinel to connect to.");if(!this.options.name)throw Error("Requires the name of master.");this.sentinelIterator=new s.default(this.options.sentinels)}check(e){let t=!e.role||this.options.role===e.role;return t||(c("role invalid, expected %s, but got %s",this.options.role,e.role),this.sentinelIterator.next(),this.sentinelIterator.next(),this.sentinelIterator.reset(!0)),t}disconnect(){super.disconnect(),this.failoverDetector&&this.failoverDetector.cleanup()}connect(e){let t;this.connecting=!0,this.retryAttempts=0;let r=async()=>{let s=this.sentinelIterator.next();if(s.done){this.sentinelIterator.reset(!1);let i="function"==typeof this.options.sentinelRetryStrategy?this.options.sentinelRetryStrategy(++this.retryAttempts):null,n="number"!=typeof i?"All sentinels are unreachable and retry is disabled.":`All sentinels are unreachable. Retrying from scratch after ${i}ms.`;t&&(n+=` Last error: ${t.message}`),c(n);let a=Error(n);if("number"==typeof i)return e("error",a),await new Promise(e=>setTimeout(e,i)),r();throw a}let o=null,l=null;try{o=await this.resolve(s.value)}catch(e){l=e}if(!this.connecting)throw Error(n.CONNECTION_CLOSED_ERROR_MSG);let d=s.value.host+":"+s.value.port;if(o)return c("resolved: %s:%s from sentinel %s",o.host,o.port,d),this.options.enableTLSForSentinelMode&&this.options.tls?(Object.assign(o,this.options.tls),this.stream=(0,a.connect)(o),this.stream.once("secureConnect",this.initFailoverDetector.bind(this))):(this.stream=(0,i.createConnection)(o),this.stream.once("connect",this.initFailoverDetector.bind(this))),this.stream.once("error",e=>{this.firstError=e}),this.stream;{let i=l?"failed to connect to sentinel "+d+" because "+l.message:"connected to sentinel "+d+" successfully, but got an invalid reply: "+o;return c(i),e("sentinelError",Error(i)),l&&(t=l),r()}};return r()}async updateSentinels(e){if(!this.options.updateSentinels)return;let t=await e.sentinel("sentinels",this.options.name);Array.isArray(t)&&(t.map(n.packObject).forEach(e=>{if(-1===(e.flags?e.flags.split(","):[]).indexOf("disconnected")&&e.ip&&e.port){let t=this.sentinelNatResolve(h(e));this.sentinelIterator.add(t)&&c("adding sentinel %s:%s",t.host,t.port)}}),c("Updated internal sentinels: %s",this.sentinelIterator))}async resolveMaster(e){let t=await e.sentinel("get-master-addr-by-name",this.options.name);return await this.updateSentinels(e),this.sentinelNatResolve(Array.isArray(t)?{host:t[0],port:Number(t[1])}:null)}async resolveSlave(e){let t=await e.sentinel("slaves",this.options.name);if(!Array.isArray(t))return null;let r=t.map(n.packObject).filter(e=>e.flags&&!e.flags.match(/(disconnected|s_down|o_down)/));return this.sentinelNatResolve(function(e,t){let r;if(0===e.length)return null;if("function"==typeof t)r=t(e);else if(null!==t&&"object"==typeof t){let i=Array.isArray(t)?t:[t];i.sort((e,t)=>(e.prio||(e.prio=1),t.prio||(t.prio=1),e.prio<t.prio)?-1:+(e.prio>t.prio));for(let t=0;t<i.length;t++){for(let n=0;n<e.length;n++){let a=e[n];if(a.ip===i[t].ip&&a.port===i[t].port){r=a;break}}if(r)break}}return r||(r=(0,n.sample)(e)),h(r)}(r,this.options.preferredSlaves))}sentinelNatResolve(e){if(!e||!this.options.natMap)return e;let t=`${e.host}:${e.port}`,r=e;return"function"==typeof this.options.natMap?r=this.options.natMap(t)||e:"object"==typeof this.options.natMap&&(r=this.options.natMap[t]||e),r}connectToSentinel(e,t){return new l.default({port:e.port||26379,host:e.host,username:this.options.sentinelUsername||null,password:this.options.sentinelPassword||null,family:e.family||("path"in this.options&&this.options.path?void 0:this.options.family),tls:this.options.sentinelTLS,retryStrategy:null,enableReadyCheck:!1,connectTimeout:this.options.connectTimeout,commandTimeout:this.options.sentinelCommandTimeout,...t})}async resolve(e){let t=this.connectToSentinel(e);t.on("error",p);try{if("slave"===this.options.role)return await this.resolveSlave(t);return await this.resolveMaster(t)}finally{t.disconnect()}}async initFailoverDetector(){var e;if(!this.options.failoverDetector)return;this.sentinelIterator.reset(!0);let t=[];for(;t.length<this.options.sentinelMaxConnections;){let{done:e,value:r}=this.sentinelIterator.next();if(e)break;let i=this.connectToSentinel(r,{lazyConnect:!0,retryStrategy:this.options.sentinelReconnectStrategy});i.on("reconnecting",()=>{var e;null==(e=this.emitter)||e.emit("sentinelReconnecting")}),t.push({address:r,client:i})}this.sentinelIterator.reset(!1),this.failoverDetector&&this.failoverDetector.cleanup(),this.failoverDetector=new d.FailoverDetector(this,t),await this.failoverDetector.subscribe(),null==(e=this.emitter)||e.emit("failoverSubscribed")}}function h(e){return{host:e.ip,port:Number(e.port)}}function p(){}r.default=u},83858,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SentinelConnector=r.StandaloneConnector=void 0,r.StandaloneConnector=e.r(25124).default,r.SentinelConnector=e.r(35502).default},8067,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(43473);class n extends i.AbortError{constructor(e){super(`Reached the max retries per request limit (which is ${e}). Refer to "maxRetriesPerRequest" option for details.`),Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}r.default=n},96586,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MaxRetriesPerRequestError=void 0,r.MaxRetriesPerRequestError=e.r(8067).default},874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},99348,(e,t,r)=>{t.exports=e.x("string_decoder",()=>require("string_decoder"))},95363,(e,t,r)=>{"use strict";let i=e.r(874).Buffer,n=new(e.r(99348)).StringDecoder,a=e.r(43473),s=a.ReplyError,o=a.ParserError;var l=i.allocUnsafe(32768),d=0,c=null,u=0,h=0;function p(e){let t=e.offset,r=e.buffer,i=r.length-1;for(var n=t;n<i;)if(13===r[n++]){if(e.offset=n+1,!0===e.optionReturnBuffers)return e.buffer.slice(t,n-1);return e.buffer.toString("utf8",t,n-1)}}function y(e){let t=e.buffer.length-1;for(var r=e.offset,i=0;r<t;){let t=e.buffer[r++];if(13===t)return e.offset=r+1,i;i=10*i+(t-48)}}function m(e,t,r){e.arrayCache.push(t),e.arrayPos.push(r)}function f(e){let t=e.arrayCache.pop();var r=e.arrayPos.pop();if(e.arrayCache.length){let i=f(e);if(void 0===i)return void m(e,t,r);t[r++]=i}return b(e,t,r)}function b(e,t,r){let i=e.buffer.length;for(;r<t.length;){let n=e.offset;if(e.offset>=i)return void m(e,t,r);let a=g(e,e.buffer[e.offset++]);if(void 0===a){e.arrayCache.length||e.bufferCache.length||(e.offset=n),m(e,t,r);return}t[r]=a,r++}return t}function g(e,t){switch(t){case 36:let r=y(e);if(void 0===r)return;if(r<0)return null;let i=e.offset+r;if(i+2>e.buffer.length){e.bigStrSize=i+2,e.totalChunkSize=e.buffer.length,e.bufferCache.push(e.buffer);return}let n=e.offset;return(e.offset=i+2,!0===e.optionReturnBuffers)?e.buffer.slice(n,i):e.buffer.toString("utf8",n,i);case 43:return p(e);case 42:let a;return void 0===(a=y(e))?void 0:a<0?null:b(e,Array(a),0);case 58:return!0===e.optionStringNumbers?function(e){let t=e.buffer.length-1;var r=e.offset,i=0,n="";for(45===e.buffer[r]&&(n+="-",r++);r<t;){var a=e.buffer[r++];if(13===a)return e.offset=r+1,0!==i&&(n+=i),n;i>0x19999998?(n+=10*i+(a-48),i=0):48===a&&0===i?n+=0:i=10*i+(a-48)}}(e):function(e){let t=e.buffer.length-1;var r=e.offset,i=0,n=1;for(45===e.buffer[r]&&(n=-1,r++);r<t;){let t=e.buffer[r++];if(13===t)return e.offset=r+1,n*i;i=10*i+(t-48)}}(e);case 45:var l=p(e);if(void 0!==l)return!0===e.optionReturnBuffers&&(l=l.toString()),new s(l);return;default:let d;return d=new o("Protocol error, got "+JSON.stringify(String.fromCharCode(t))+" as reply type byte",JSON.stringify(e.buffer),e.offset),void(e.buffer=null,e.returnFatalError(d))}}function v(){if(l.length>51200)if(1===u||h>2*u){let e=Math.floor(l.length/10),t=e<d?d:e;d=0,l=l.slice(t,l.length)}else h++,u--;else clearInterval(c),u=0,h=0,c=null}t.exports=class{constructor(e){if(!e)throw TypeError("Options are mandatory.");if("function"!=typeof e.returnError||"function"!=typeof e.returnReply)throw TypeError("The returnReply and returnError options have to be functions.");this.setReturnBuffers(!!e.returnBuffers),this.setStringNumbers(!!e.stringNumbers),this.returnError=e.returnError,this.returnFatalError=e.returnFatalError||e.returnError,this.returnReply=e.returnReply,this.reset()}reset(){this.offset=0,this.buffer=null,this.bigStrSize=0,this.totalChunkSize=0,this.bufferCache=[],this.arrayCache=[],this.arrayPos=[]}setReturnBuffers(e){if("boolean"!=typeof e)throw TypeError("The returnBuffers argument has to be a boolean");this.optionReturnBuffers=e}setStringNumbers(e){if("boolean"!=typeof e)throw TypeError("The stringNumbers argument has to be a boolean");this.optionStringNumbers=e}execute(e){if(null===this.buffer)this.buffer=e,this.offset=0;else if(0===this.bigStrSize){let t=this.buffer.length,r=t-this.offset,n=i.allocUnsafe(r+e.length);if(this.buffer.copy(n,0,this.offset,t),e.copy(n,r,0,e.length),this.buffer=n,this.offset=0,this.arrayCache.length){let e=f(this);if(void 0===e)return;this.returnReply(e)}}else if(this.totalChunkSize+e.length>=this.bigStrSize){this.bufferCache.push(e);var t=this.optionReturnBuffers?function(e){let t=e.bufferCache,r=e.offset,n=e.bigStrSize-r-2;var a=t.length,s=e.bigStrSize-e.totalChunkSize;if(e.offset=s,s<=2){if(2===a)return t[0].slice(r,t[0].length+s-2);a--,s=t[t.length-2].length+s}l.length<n+d&&(d>0x6f00000&&(d=0x3200000),l=i.allocUnsafe(n*(n>0x4b00000?2:3)+d),d=0,u++,null===c&&(c=setInterval(v,50)));let o=d;t[0].copy(l,o,r,t[0].length),d+=t[0].length-r;for(var h=1;h<a-1;h++)t[h].copy(l,d),d+=t[h].length;return t[h].copy(l,d,0,s-2),d+=s-2,l.slice(o,d)}(this):function(e){let t=e.bufferCache,r=e.offset;var i=t.length,a=e.bigStrSize-e.totalChunkSize;if(e.offset=a,a<=2){if(2===i)return t[0].toString("utf8",r,t[0].length+a-2);i--,a=t[t.length-2].length+a}for(var s=n.write(t[0].slice(r)),o=1;o<i-1;o++)s+=n.write(t[o]);return s+n.end(t[o].slice(0,a-2))}(this);if(this.bigStrSize=0,this.bufferCache=[],this.buffer=e,this.arrayCache.length&&(this.arrayCache[0][this.arrayPos[0]++]=t,void 0===(t=f(this))))return;this.returnReply(t)}else{this.bufferCache.push(e),this.totalChunkSize+=e.length;return}for(;this.offset<this.buffer.length;){let e=this.offset,t=this.buffer[this.offset++],r=g(this,t);if(void 0===r){this.arrayCache.length||this.bufferCache.length||(this.offset=e);return}45===t?this.returnError(r):this.returnReply(r)}this.buffer=null}}},88308,(e,t,r)=>{"use strict";t.exports=e.r(95363)},16556,(e,t,r)=>{"use strict";function i(e){return"unsubscribe"===e?"subscribe":"punsubscribe"===e?"psubscribe":"sunsubscribe"===e?"ssubscribe":e}Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{constructor(){this.set={subscribe:{},psubscribe:{},ssubscribe:{}}}add(e,t){this.set[i(e)][t]=!0}del(e,t){delete this.set[i(e)][t]}channels(e){return Object.keys(this.set[i(e)])}isEmpty(){return 0===this.channels("subscribe").length&&0===this.channels("psubscribe").length&&0===this.channels("ssubscribe").length}}},62154,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(36314),n=e.r(63700),a=e.r(88308),s=e.r(16556),o=(0,n.Debug)("dataHandler");r.default=class{constructor(e,t){this.redis=e;const r=new a({stringNumbers:t.stringNumbers,returnBuffers:!0,returnError:e=>{this.returnError(e)},returnFatalError:e=>{this.returnFatalError(e)},returnReply:e=>{this.returnReply(e)}});e.stream.prependListener("data",e=>{r.execute(e)}),e.stream.resume()}returnFatalError(e){e.message+=". Please report this.",this.redis.recoverFromFatalError(e,e,{offlineQueue:!1})}returnError(e){let t=this.shiftCommand(e);if(t){if(e.command={name:t.command.name,args:t.command.args},"ssubscribe"==t.command.name&&e.message.includes("MOVED"))return void this.redis.emit("moved");this.redis.handleReconnection(e,t)}}returnReply(e){if(this.handleMonitorReply(e)||this.handleSubscriberReply(e))return;let t=this.shiftCommand(e);t&&(i.default.checkFlag("ENTER_SUBSCRIBER_MODE",t.command.name)?(this.redis.condition.subscriber=new s.default,this.redis.condition.subscriber.add(t.command.name,e[1].toString()),d(t.command,e[2])||this.redis.commandQueue.unshift(t)):i.default.checkFlag("EXIT_SUBSCRIBER_MODE",t.command.name)?c(t.command,e[2])||this.redis.commandQueue.unshift(t):t.command.resolve(e))}handleSubscriberReply(e){if(!this.redis.condition.subscriber)return!1;let t=Array.isArray(e)?e[0].toString():null;switch(o('receive reply "%s" in subscriber mode',t),t){case"message":this.redis.listeners("message").length>0&&this.redis.emit("message",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("messageBuffer",e[1],e[2]);break;case"pmessage":{let t=e[1].toString();this.redis.listeners("pmessage").length>0&&this.redis.emit("pmessage",t,e[2].toString(),e[3].toString()),this.redis.emit("pmessageBuffer",t,e[2],e[3]);break}case"smessage":this.redis.listeners("smessage").length>0&&this.redis.emit("smessage",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("smessageBuffer",e[1],e[2]);break;case"ssubscribe":case"subscribe":case"psubscribe":{let r=e[1].toString();this.redis.condition.subscriber.add(t,r);let i=this.shiftCommand(e);if(!i)return;d(i.command,e[2])||this.redis.commandQueue.unshift(i);break}case"sunsubscribe":case"unsubscribe":case"punsubscribe":{let r=e[1]?e[1].toString():null;r&&this.redis.condition.subscriber.del(t,r);let i=e[2];0===Number(i)&&(this.redis.condition.subscriber=!1);let n=this.shiftCommand(e);if(!n)return;c(n.command,i)||this.redis.commandQueue.unshift(n);break}default:{let t=this.shiftCommand(e);if(!t)return;t.command.resolve(e)}}return!0}handleMonitorReply(e){if("monitoring"!==this.redis.status)return!1;let t=e.toString();if("OK"===t)return!1;let r=t.indexOf(" "),i=t.slice(0,r),n=t.indexOf('"'),a=t.slice(n+1,-1).split('" "').map(e=>e.replace(/\\"/g,'"')),s=t.slice(r+2,n-2).split(" ");return this.redis.emit("monitor",i,a,s[1],s[0]),!0}shiftCommand(e){let t=this.redis.commandQueue.shift();if(!t){let t=Error("Command queue state error. If you can reproduce this, please report it."+(e instanceof Error?` Last error: ${e.message}`:` Last reply: ${e.toString()}`));return this.redis.emit("error",t),null}return t}};let l=new WeakMap;function d(e,t){let r=l.has(e)?l.get(e):e.args.length;return(r-=1)<=0?(e.resolve(t),l.delete(e),!0):(l.set(e,r),!1)}function c(e,t){let r=l.has(e)?l.get(e):e.args.length;return 0===r?0===Number(t)&&(l.delete(e),e.resolve(t),!0):(r-=1)<=0?(e.resolve(t),!0):(l.set(e,r),!1)}},18534,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.readyHandler=r.errorHandler=r.closeHandler=r.connectHandler=void 0;let i=e.r(43473),n=e.r(36314),a=e.r(96586),s=e.r(63700),o=e.r(62154),l=(0,s.Debug)("connection");function d(e){let t=new i.AbortError("Command aborted due to connection close");return t.command={name:e.name,args:e.args},t}r.connectHandler=function(e){return function(){var t;e.setStatus("connect"),e.resetCommandQueue();let i=!1,{connectionEpoch:n}=e;e.condition.auth&&e.auth(e.condition.auth,function(t){n===e.connectionEpoch&&t&&(-1!==t.message.indexOf("no password is set")?console.warn("[WARN] Redis server does not require a password, but a password was supplied."):-1!==t.message.indexOf("without any password configured for the default user")?console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied"):-1!==t.message.indexOf("wrong number of arguments for 'auth' command")?console.warn("[ERROR] The server returned \"wrong number of arguments for 'auth' command\". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under."):(i=!0,e.recoverFromFatalError(t,t)))}),e.condition.select&&e.select(e.condition.select).catch(t=>{e.silentEmit("error",t)}),new o.default(e,{stringNumbers:e.options.stringNumbers});let a=[];e.options.connectionName&&(l("set the connection name [%s]",e.options.connectionName),a.push(e.client("setname",e.options.connectionName).catch(s.noop))),e.options.disableClientInfo||(l("set the client info"),a.push((0,s.getPackageMeta)().then(t=>e.client("SETINFO","LIB-VER",t.version).catch(s.noop)).catch(s.noop)),a.push(e.client("SETINFO","LIB-NAME",(null==(t=e.options)?void 0:t.clientInfoTag)?`ioredis(${e.options.clientInfoTag})`:"ioredis").catch(s.noop))),Promise.all(a).catch(s.noop).finally(()=>{e.options.enableReadyCheck||r.readyHandler(e)(),e.options.enableReadyCheck&&e._readyCheck(function(t,a){n===e.connectionEpoch&&(t?i||e.recoverFromFatalError(Error("Ready check failed: "+t.message),t):e.connector.check(a)?r.readyHandler(e)():e.disconnect(!0))})})}},r.closeHandler=function(e){return function(){let r=e.status;if(e.setStatus("close"),e.commandQueue.length&&function(e){var t;let r=0;for(let i=0;i<e.length;){let n=null==(t=e.peekAt(i))?void 0:t.command,a=n.pipelineIndex;if((void 0===a||0===a)&&(r=0),void 0!==a&&a!==r++){e.remove(i,1),n.reject(d(n));continue}i++}}(e.commandQueue),e.offlineQueue.length&&function(e){var t;for(let r=0;r<e.length;){let i=null==(t=e.peekAt(r))?void 0:t.command;if("multi"===i.name)break;if("exec"===i.name){e.remove(r,1),i.reject(d(i));break}i.inTransaction?(e.remove(r,1),i.reject(d(i))):r++}}(e.offlineQueue),"ready"===r&&(e.prevCondition||(e.prevCondition=e.condition),e.commandQueue.length&&(e.prevCommandQueue=e.commandQueue)),e.manuallyClosing)return e.manuallyClosing=!1,l("skip reconnecting since the connection is manually closed."),t();if("function"!=typeof e.options.retryStrategy)return l("skip reconnecting because `retryStrategy` is not a function"),t();let i=e.options.retryStrategy(++e.retryAttempts);if("number"!=typeof i)return l("skip reconnecting because `retryStrategy` doesn't return a number"),t();l("reconnect in %sms",i),e.setStatus("reconnecting",i),e.reconnectTimeout=setTimeout(function(){e.reconnectTimeout=null,e.connect().catch(s.noop)},i);let{maxRetriesPerRequest:n}=e.options;"number"==typeof n&&(n<0?l("maxRetriesPerRequest is negative, ignoring..."):0==e.retryAttempts%(n+1)&&(l("reach maxRetriesPerRequest limitation, flushing command queue..."),e.flushQueue(new a.MaxRetriesPerRequestError(n))))};function t(){e.setStatus("end"),e.flushQueue(Error(s.CONNECTION_CLOSED_ERROR_MSG))}},r.errorHandler=function(e){return function(t){l("error: %s",t),e.silentEmit("error",t)}},r.readyHandler=function(e){return function(){if(e.setStatus("ready"),e.retryAttempts=0,e.options.monitor){e.call("monitor").then(()=>e.setStatus("monitoring"),t=>e.emit("error",t));let{sendCommand:t}=e;e.sendCommand=function(r){return n.default.checkFlag("VALID_IN_MONITOR_MODE",r.name)?t.call(e,r):(r.reject(Error("Connection is in monitoring mode, can't process commands.")),r.promise)},e.once("close",function(){delete e.sendCommand});return}let t=e.prevCondition?e.prevCondition.select:e.condition.select;if(e.options.readOnly&&(l("set the connection to readonly mode"),e.readonly().catch(s.noop)),e.prevCondition){let r=e.prevCondition;if(e.prevCondition=null,r.subscriber&&e.options.autoResubscribe){e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t));let i=r.subscriber.channels("subscribe");i.length&&(l("subscribe %d channels",i.length),e.subscribe(i));let n=r.subscriber.channels("psubscribe");n.length&&(l("psubscribe %d channels",n.length),e.psubscribe(n));let a=r.subscriber.channels("ssubscribe");if(a.length)for(let t of(l("ssubscribe %s",a.length),a))e.ssubscribe(t)}}if(e.prevCommandQueue)if(e.options.autoResendUnfulfilledCommands)for(l("resend %d unfulfilled commands",e.prevCommandQueue.length);e.prevCommandQueue.length>0;){let t=e.prevCommandQueue.shift();t.select!==e.condition.select&&"select"!==t.command.name&&e.select(t.select),e.sendCommand(t.command,t.stream)}else e.prevCommandQueue=null;if(e.offlineQueue.length){l("send %d commands in offline queue",e.offlineQueue.length);let t=e.offlineQueue;for(e.resetOfflineQueue();t.length>0;){let r=t.shift();r.select!==e.condition.select&&"select"!==r.command.name&&e.select(r.select),e.sendCommand(r.command,r.stream)}}e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t))}}},43651,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_REDIS_OPTIONS=void 0,r.DEFAULT_REDIS_OPTIONS={port:6379,host:"localhost",family:0,connectTimeout:1e4,disconnectTimeout:2e3,retryStrategy:function(e){return Math.min(50*e,2e3)},keepAlive:0,noDelay:!0,connectionName:null,disableClientInfo:!1,clientInfoTag:void 0,sentinels:null,name:null,role:"master",sentinelRetryStrategy:function(e){return Math.min(10*e,1e3)},sentinelReconnectStrategy:function(){return 6e4},natMap:null,enableTLSForSentinelMode:!1,updateSentinels:!0,failoverDetector:!1,username:null,password:null,db:0,enableOfflineQueue:!0,enableReadyCheck:!0,autoResubscribe:!0,autoResendUnfulfilledCommands:!0,lazyConnect:!1,keyPrefix:"",reconnectOnError:null,readOnly:!1,stringNumbers:!1,maxRetriesPerRequest:20,maxLoadingRetryTime:1e4,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],sentinelMaxConnections:10,blockingTimeoutGrace:100}},37159,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=e.r(75761),n=e.r(27699),a=e.r(1570),s=e.r(6661),o=e.r(36314),l=e.r(83858),d=e.r(35502),c=e.r(18534),u=e.r(43651),h=e.r(37145),p=e.r(97283),y=e.r(63700),m=e.r(45843),f=e.r(47238),b=e.r(24405),g=e.r(21195),v=(0,y.Debug)("redis");class K extends f.default{constructor(e,t,r){if(super(),this.status="wait",this.isCluster=!1,this.reconnectTimeout=null,this.connectionEpoch=0,this.retryAttempts=0,this.manuallyClosing=!1,this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this.parseOptions(e,t,r),n.EventEmitter.call(this),this.resetCommandQueue(),this.resetOfflineQueue(),this.options.Connector)this.connector=new this.options.Connector(this.options);else if(this.options.sentinels){const e=new d.default(this.options);e.emitter=this,this.connector=e}else this.connector=new l.StandaloneConnector(this.options);this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(b.noop)}static createClient(...e){return new K(...e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}connect(e){let t=new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status)return void t(Error("Redis is already connecting/connected"));this.connectionEpoch+=1,this.setStatus("connecting");let{options:r}=this;this.condition={select:r.db,auth:r.username?[r.username,r.password]:r.password,subscriber:!1};let i=this;(0,a.default)(this.connector.connect(function(e,t){i.silentEmit(e,t)}),function(n,a){if(n){i.flushQueue(n),i.silentEmit("error",n),t(n),i.setStatus("end");return}let s=r.tls?"secureConnect":"connect";if("sentinels"in r&&r.sentinels&&!r.enableTLSForSentinelMode&&(s="connect"),i.stream=a,r.noDelay&&a.setNoDelay(!0),"number"==typeof r.keepAlive&&(a.connecting?a.once(s,()=>{a.setKeepAlive(!0,r.keepAlive)}):a.setKeepAlive(!0,r.keepAlive)),a.connecting){if(a.once(s,c.connectHandler(i)),r.connectTimeout){let e=!1;a.setTimeout(r.connectTimeout,function(){if(e)return;a.setTimeout(0),a.destroy();let t=Error("connect ETIMEDOUT");t.errorno="ETIMEDOUT",t.code="ETIMEDOUT",t.syscall="connect",c.errorHandler(i)(t)}),a.once(s,function(){e=!0,a.setTimeout(0)})}}else if(a.destroyed){let e=i.connector.firstError;e&&process.nextTick(()=>{c.errorHandler(i)(e)}),process.nextTick(c.closeHandler(i))}else process.nextTick(c.connectHandler(i));a.destroyed||(a.once("error",c.errorHandler(i)),a.once("close",c.closeHandler(i)));let o=function(){i.removeListener("close",l),e()};var l=function(){i.removeListener("ready",o),t(Error(y.CONNECTION_CLOSED_ERROR_MSG))};i.once("ready",o),i.once("close",l)})});return(0,a.default)(t,e)}disconnect(e=!1){e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),"wait"===this.status?c.closeHandler(this)():this.connector.disconnect()}end(){this.disconnect()}duplicate(e){return new K({...this.options,...e})}get mode(){var e;return this.options.monitor?"monitor":(null==(e=this.condition)?void 0:e.subscriber)?"subscriber":"normal"}monitor(e){let t=this.duplicate({monitor:!0,lazyConnect:!1});return(0,a.default)(new Promise(function(e,r){t.once("error",r),t.once("monitoring",function(){e(t)})}),e)}sendCommand(e,t){var r,n;if("wait"===this.status&&this.connect().catch(b.noop),"end"===this.status)return e.reject(Error(y.CONNECTION_CLOSED_ERROR_MSG)),e.promise;if((null==(r=this.condition)?void 0:r.subscriber)&&!o.default.checkFlag("VALID_IN_SUBSCRIBER_MODE",e.name))return e.reject(Error("Connection in subscriber mode, only subscriber commands may be used")),e.promise;"number"==typeof this.options.commandTimeout&&e.setTimeout(this.options.commandTimeout);let a=this.getBlockingTimeoutInMs(e),s="ready"===this.status||!t&&"connect"===this.status&&(0,i.exists)(e.name,{caseInsensitive:!0})&&((0,i.hasFlag)(e.name,"loading",{nameCaseInsensitive:!0})||o.default.checkFlag("HANDSHAKE_COMMANDS",e.name));if(this.stream&&this.stream.writable?this.stream._writableState&&this.stream._writableState.ended&&(s=!1):s=!1,s)v.enabled&&v("write command[%s]: %d -> %s(%o)",this._getDescription(),null==(n=this.condition)?void 0:n.select,e.name,e.args),t?"isPipeline"in t&&t.isPipeline?t.write(e.toWritable(t.destination.redis.stream)):t.write(e.toWritable(t)):this.stream.write(e.toWritable(this.stream)),this.commandQueue.push({command:e,stream:t,select:this.condition.select}),void 0!==a&&e.setBlockingTimeout(a),o.default.checkFlag("WILL_DISCONNECT",e.name)&&(this.manuallyClosing=!0),void 0!==this.options.socketTimeout&&void 0===this.socketTimeoutTimer&&this.setSocketTimeout();else{if(!this.options.enableOfflineQueue)return e.reject(Error("Stream isn't writeable and enableOfflineQueue options is false")),e.promise;if("quit"===e.name&&0===this.offlineQueue.length)return this.disconnect(),e.resolve(Buffer.from("OK")),e.promise;if(v.enabled&&v("queue command[%s]: %d -> %s(%o)",this._getDescription(),this.condition.select,e.name,e.args),this.offlineQueue.push({command:e,stream:t,select:this.condition.select}),o.default.checkFlag("BLOCKING_COMMANDS",e.name)){let t=this.getConfiguredBlockingTimeout();void 0!==t&&e.setBlockingTimeout(t)}}if("select"===e.name&&(0,y.isInt)(e.args[0])){let t=parseInt(e.args[0],10);this.condition.select!==t&&(this.condition.select=t,this.emit("select",t),v("switch to db [%d]",this.condition.select))}return e.promise}getBlockingTimeoutInMs(e){var t;if(!o.default.checkFlag("BLOCKING_COMMANDS",e.name))return;let r=this.getConfiguredBlockingTimeout();if(void 0===r)return;let i=e.extractBlockingTimeout();return"number"==typeof i?i>0?i+(null!=(t=this.options.blockingTimeoutGrace)?t:u.DEFAULT_REDIS_OPTIONS.blockingTimeoutGrace):r:null===i?r:void 0}getConfiguredBlockingTimeout(){if("number"==typeof this.options.blockingTimeout&&this.options.blockingTimeout>0)return this.options.blockingTimeout}setSocketTimeout(){this.socketTimeoutTimer=setTimeout(()=>{this.stream.destroy(Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`)),this.socketTimeoutTimer=void 0},this.options.socketTimeout),this.stream.once("data",()=>{clearTimeout(this.socketTimeoutTimer),this.socketTimeoutTimer=void 0,0!==this.commandQueue.length&&this.setSocketTimeout()})}scanStream(e){return this.createScanStream("scan",{options:e})}scanBufferStream(e){return this.createScanStream("scanBuffer",{options:e})}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}silentEmit(e,t){let r;if("error"!==e||(r=t,"end"!==this.status&&(!this.manuallyClosing||!(r instanceof Error)||r.message!==y.CONNECTION_CLOSED_ERROR_MSG&&"connect"!==r.syscall&&"read"!==r.syscall)))return this.listeners(e).length>0?this.emit.apply(this,arguments):(r&&r instanceof Error&&console.error("[ioredis] Unhandled error event:",r.stack),!1)}recoverFromFatalError(e,t,r){this.flushQueue(t,r),this.silentEmit("error",t),this.disconnect(!0)}handleReconnection(e,t){var r;let i=!1;switch(this.options.reconnectOnError&&!o.default.checkFlag("IGNORE_RECONNECT_ON_ERROR",t.command.name)&&(i=this.options.reconnectOnError(e)),i){case 1:case!0:"reconnecting"!==this.status&&this.disconnect(!0),t.command.reject(e);break;case 2:"reconnecting"!==this.status&&this.disconnect(!0),(null==(r=this.condition)?void 0:r.select)!==t.select&&"select"!==t.command.name&&this.select(t.select),this.sendCommand(t.command);break;default:t.command.reject(e)}}_getDescription(){let e;return e="path"in this.options&&this.options.path?this.options.path:this.stream&&this.stream.remoteAddress&&this.stream.remotePort?this.stream.remoteAddress+":"+this.stream.remotePort:"host"in this.options&&this.options.host?this.options.host+":"+this.options.port:"",this.options.connectionName&&(e+=` (${this.options.connectionName})`),e}resetCommandQueue(){this.commandQueue=new g}resetOfflineQueue(){this.offlineQueue=new g}parseOptions(...e){let t={},r=!1;for(let i=0;i<e.length;++i){let n=e[i];if(null!=n)if("object"==typeof n)(0,b.defaults)(t,n);else if("string"==typeof n)(0,b.defaults)(t,(0,y.parseURL)(n)),n.startsWith("rediss://")&&(r=!0);else if("number"==typeof n)t.port=n;else throw Error("Invalid argument "+n)}r&&(0,b.defaults)(t,{tls:!0}),(0,b.defaults)(t,K.defaultOptions),"string"==typeof t.port&&(t.port=parseInt(t.port,10)),"string"==typeof t.db&&(t.db=parseInt(t.db,10)),this.options=(0,y.resolveTLSProfile)(t)}setStatus(e,t){v.enabled&&v("status[%s]: %s -> %s",this._getDescription(),this.status||"[empty]",e),this.status=e,process.nextTick(this.emit.bind(this,e,t))}createScanStream(e,{key:t,options:r={}}){return new h.default({objectMode:!0,key:t,redis:this,command:e,...r})}flushQueue(e,t){let r;if((t=(0,b.defaults)({},t,{offlineQueue:!0,commandQueue:!0})).offlineQueue)for(;r=this.offlineQueue.shift();)r.command.reject(e);if(t.commandQueue&&this.commandQueue.length>0)for(this.stream&&this.stream.removeAllListeners("data");r=this.commandQueue.shift();)r.command.reject(e)}_readyCheck(e){let t=this;this.info(function(r,i){if(r)return r.message&&r.message.includes("NOPERM")?(console.warn(`Skipping the ready check because INFO command fails: "${r.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`),e(null,{})):e(r);if("string"!=typeof i)return e(null,i);let n={},a=i.split("\r\n");for(let e=0;e<a.length;++e){let[t,...r]=a[e].split(":"),i=r.join(":");i&&(n[t]=i)}if(n.loading&&"0"!==n.loading){let r=1e3*(n.loading_eta_seconds||1),i=t.options.maxLoadingRetryTime&&t.options.maxLoadingRetryTime<r?t.options.maxLoadingRetryTime:r;v("Redis server still loading, trying again in "+i+"ms"),setTimeout(function(){t._readyCheck(e)},i)}else e(null,n)}).catch(b.noop)}}K.Cluster=s.default,K.Command=o.default,K.defaultOptions=u.DEFAULT_REDIS_OPTIONS,(0,m.default)(K,n.EventEmitter),(0,p.addTransactionSupport)(K.prototype),r.default=K},34855,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.print=r.ReplyError=r.SentinelIterator=r.SentinelConnector=r.AbstractConnector=r.Pipeline=r.ScanStream=r.Command=r.Cluster=r.Redis=r.default=void 0,r=t.exports=e.r(37159).default;var i=e.r(37159);Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i.default}});var n=e.r(37159);Object.defineProperty(r,"Redis",{enumerable:!0,get:function(){return n.default}});var a=e.r(6661);Object.defineProperty(r,"Cluster",{enumerable:!0,get:function(){return a.default}});var s=e.r(36314);Object.defineProperty(r,"Command",{enumerable:!0,get:function(){return s.default}});var o=e.r(37145);Object.defineProperty(r,"ScanStream",{enumerable:!0,get:function(){return o.default}});var l=e.r(46592);Object.defineProperty(r,"Pipeline",{enumerable:!0,get:function(){return l.default}});var d=e.r(41180);Object.defineProperty(r,"AbstractConnector",{enumerable:!0,get:function(){return d.default}});var c=e.r(35502);Object.defineProperty(r,"SentinelConnector",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(r,"SentinelIterator",{enumerable:!0,get:function(){return c.SentinelIterator}}),r.ReplyError=e.r(43473).ReplyError,Object.defineProperty(r,"Promise",{get:()=>(console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used."),Promise),set(e){console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.")}}),r.print=function(e,t){e?console.log("Error: "+e):console.log("Reply: "+t)}},20549,(e,t,r)=>{"use strict";let i;Object.defineProperty(r,"__esModule",{value:!0});class n extends Error{}class a extends n{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class s extends n{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class o extends n{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class l extends n{}class d extends n{constructor(e){super(`Invalid unit ${e}`)}}class c extends n{}class u extends n{constructor(){super("Zone is an abstract class")}}let h="numeric",p="short",y="long",m={year:h,month:h,day:h},f={year:h,month:p,day:h},b={year:h,month:p,day:h,weekday:p},g={year:h,month:y,day:h},v={year:h,month:y,day:h,weekday:y},K={hour:h,minute:h},S={hour:h,minute:h,second:h},E={hour:h,minute:h,second:h,timeZoneName:p},I={hour:h,minute:h,second:h,timeZoneName:y},k={hour:h,minute:h,hourCycle:"h23"},w={hour:h,minute:h,second:h,hourCycle:"h23"},x={hour:h,minute:h,second:h,hourCycle:"h23",timeZoneName:p},j={hour:h,minute:h,second:h,hourCycle:"h23",timeZoneName:y},A={year:h,month:h,day:h,hour:h,minute:h},T={year:h,month:h,day:h,hour:h,minute:h,second:h},D={year:h,month:p,day:h,hour:h,minute:h},O={year:h,month:p,day:h,hour:h,minute:h,second:h},C={year:h,month:p,day:h,weekday:p,hour:h,minute:h},R={year:h,month:y,day:h,hour:h,minute:h,timeZoneName:p},M={year:h,month:y,day:h,hour:h,minute:h,second:h,timeZoneName:p},P={year:h,month:y,day:h,weekday:y,hour:h,minute:h,timeZoneName:y},N={year:h,month:y,day:h,weekday:y,hour:h,minute:h,second:h,timeZoneName:y};class J{get type(){throw new u}get name(){throw new u}get ianaName(){return this.name}get isUniversal(){throw new u}offsetName(e,t){throw new u}formatOffset(e,t){throw new u}offset(e){throw new u}equals(e){throw new u}get isValid(){throw new u}}let L=null;class _ extends J{static get instance(){return null===L&&(L=new _),L}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:r}){return e4(e,t,r)}formatOffset(e,t){return e7(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let F=new Map,q={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},G=new Map;class V extends J{static create(e){let t=G.get(e);return void 0===t&&G.set(e,t=new V(e)),t}static resetCache(){G.clear(),F.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}}constructor(e){super(),this.zoneName=e,this.valid=V.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:r}){return e4(e,t,r,this.name)}formatOffset(e,t){return e7(this.offset(e),t)}offset(e){var t;let r;if(!this.valid)return NaN;let i=new Date(e);if(isNaN(i))return NaN;let n=(t=this.name,void 0===(r=F.get(t))&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),F.set(t,r)),r),[a,s,o,l,d,c,u]=n.formatToParts?function(e,t){let r=e.formatToParts(t),i=[];for(let e=0;e<r.length;e++){let{type:t,value:n}=r[e],a=q[t];"era"===t?i[a]=n:eJ(a)||(i[a]=parseInt(n,10))}return i}(n,i):function(e,t){let r=e.format(t).replace(/\u200E/g,""),[,i,n,a,s,o,l,d]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r);return[a,i,n,s,o,l,d]}(n,i);"BC"===l&&(a=-Math.abs(a)+1);let h=e0({year:a,month:s,day:o,hour:24===d?0:d,minute:c,second:u,millisecond:0}),p=+i,y=p%1e3;return(h-(p-=y>=0?y:1e3+y))/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let U={},B=new Map;function Y(e,t={}){let r=JSON.stringify([e,t]),i=B.get(r);return void 0===i&&(i=new Intl.DateTimeFormat(e,t),B.set(r,i)),i}let z=new Map,W=new Map,$=null,H=new Map;function Q(e){let t=H.get(e);return void 0===t&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),H.set(e,t)),t}let Z=new Map;function X(e,t,r,i){let n=e.listingMode();return"error"===n?null:"en"===n?r(t):i(t)}class ee{constructor(e,t,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:n,...a}=r;if(!t||Object.keys(a).length>0){const t={useGrouping:!1,...r};r.padTo>0&&(t.minimumIntegerDigits=r.padTo),this.inf=function(e,t={}){let r=JSON.stringify([e,t]),i=z.get(r);return void 0===i&&(i=new Intl.NumberFormat(e,t),z.set(r,i)),i}(e,t)}}format(e){if(!this.inf)return eY(this.floor?Math.floor(e):eH(e,3),this.padTo);{let t=this.floor?Math.floor(e):e;return this.inf.format(t)}}}class et{constructor(e,t,r){let i;if(this.opts=r,this.originalZone=void 0,this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){const t=-1*(e.offset/60),r=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;0!==e.offset&&V.create(r).valid?(i=r,this.dt=e):(i="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const n={...this.opts};n.timeZone=n.timeZone||i,this.dtf=Y(t,n)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if("timeZoneName"!==e.type)return e;{let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class er{constructor(e,t,r){this.opts={style:"long",...r},!t&&eF()&&(this.rtf=function(e,t={}){let{base:r,...i}=t,n=JSON.stringify([e,i]),a=W.get(n);return void 0===a&&(a=new Intl.RelativeTimeFormat(e,t),W.set(n,a)),a}(e,r))}format(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,r="always",i=!1){let n={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===r&&a){let r="days"===e;switch(t){case 1:return r?"tomorrow":`next ${n[e][0]}`;case -1:return r?"yesterday":`last ${n[e][0]}`;case 0:return r?"today":`this ${n[e][0]}`}}let s=Object.is(t,-0)||t<0,o=Math.abs(t),l=1===o,d=n[e],c=i?l?d[1]:d[2]||d[1]:l?n[e][0]:e;return s?`${o} ${c} ago`:`in ${o} ${c}`}(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}let ei={firstDay:1,minimalDays:4,weekend:[6,7]};class en{static fromOpts(e){return en.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,t,r,i,n=!1){let a=e||eE.defaultLocale;return new en(a||(n?"en-US":$||($=new Intl.DateTimeFormat().resolvedOptions().locale)),t||eE.defaultNumberingSystem,r||eE.defaultOutputCalendar,eU(i)||eE.defaultWeekSettings,a)}static resetCache(){$=null,B.clear(),z.clear(),W.clear(),H.clear(),Z.clear()}static fromObject({locale:e,numberingSystem:t,outputCalendar:r,weekSettings:i}={}){return en.create(e,t,r,i)}constructor(e,t,r,i,n){const[a,s,o]=function(e){let t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));let r=e.indexOf("-u-");if(-1===r)return[e];{let t,i;try{t=Y(e).resolvedOptions(),i=e}catch(a){let n=e.substring(0,r);t=Y(n).resolvedOptions(),i=n}let{numberingSystem:n,calendar:a}=t;return[i,n,a]}}(e);this.locale=a,this.numberingSystem=t||s||null,this.outputCalendar=r||o||null,this.weekSettings=i,this.intl=function(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=n,this.fastNumbersCached=null}get fastNumbers(){return null==this.fastNumbersCached&&(this.fastNumbersCached=(!this.numberingSystem||"latn"===this.numberingSystem)&&("latn"===this.numberingSystem||!this.locale||this.locale.startsWith("en")||"latn"===Q(this.locale).numberingSystem)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?en.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,eU(e.weekSettings)||this.weekSettings,e.defaultToEN||!1):this}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return X(this,e,ti,()=>{let r="ja"===this.intl||this.intl.startsWith("ja-"),i=(t&=!r)?{month:e,day:"numeric"}:{month:e},n=t?"format":"standalone";if(!this.monthsCache[n][e]){let t=r?e=>this.dtFormatter(e,i).format():e=>this.extract(e,i,"month");this.monthsCache[n][e]=function(e){let t=[];for(let r=1;r<=12;r++){let i=rW.utc(2009,r,1);t.push(e(i))}return t}(t)}return this.monthsCache[n][e]})}weekdays(e,t=!1){return X(this,e,to,()=>{let r=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=t?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=function(e){let t=[];for(let r=1;r<=7;r++){let i=rW.utc(2016,11,13+r);t.push(e(i))}return t}(e=>this.extract(e,r,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return X(this,void 0,()=>tl,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[rW.utc(2016,11,13,9),rW.utc(2016,11,13,19)].map(t=>this.extract(t,e,"dayperiod"))}return this.meridiemCache})}eras(e){return X(this,e,th,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[rW.utc(-40,1,1),rW.utc(2017,1,1)].map(e=>this.extract(e,t,"era"))),this.eraCache[e]})}extract(e,t,r){let i=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===r);return i?i.value:null}numberFormatter(e={}){return new ee(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new et(e,this.intl,t)}relFormatter(e={}){return new er(this.intl,this.isEnglish(),e)}listFormatter(e={}){return function(e,t={}){let r=JSON.stringify([e,t]),i=U[r];return i||(i=new Intl.ListFormat(e,t),U[r]=i),i}(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||Q(this.intl).locale.startsWith("en-us")}getWeekSettings(){if(this.weekSettings)return this.weekSettings;if(!eq())return ei;var e=this.locale;let t=Z.get(e);if(!t){let r=new Intl.Locale(e);"minimalDays"in(t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo)||(t={...ei,...t}),Z.set(e,t)}return t}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let ea=null;class es extends J{static get utcInstance(){return null===ea&&(ea=new es(0)),ea}static instance(e){return 0===e?es.utcInstance:new es(e)}static parseSpecifier(e){if(e){let t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new es(e6(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${e7(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${e7(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return e7(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class eo extends J{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function el(e,t){if(eJ(e)||null===e)return t;if(e instanceof J)return e;if("string"==typeof e){let r=e.toLowerCase();return"default"===r?t:"local"===r||"system"===r?_.instance:"utc"===r||"gmt"===r?es.utcInstance:es.parseSpecifier(r)||V.create(e)}if(eL(e))return es.instance(e);if("object"==typeof e&&"offset"in e&&"function"==typeof e.offset)return e;else return new eo(e)}let ed={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ec={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},eu=ed.hanidec.replace(/[\[|\]]/g,"").split(""),eh=new Map;function ep({numberingSystem:e},t=""){let r=e||"latn",i=eh.get(r);void 0===i&&(i=new Map,eh.set(r,i));let n=i.get(t);return void 0===n&&(n=RegExp(`${ed[r]}${t}`),i.set(t,n)),n}let ey=()=>Date.now(),em="system",ef=null,eb=null,eg=null,ev=60,eK,eS=null;class eE{static get now(){return ey}static set now(e){ey=e}static set defaultZone(e){em=e}static get defaultZone(){return el(em,_.instance)}static get defaultLocale(){return ef}static set defaultLocale(e){ef=e}static get defaultNumberingSystem(){return eb}static set defaultNumberingSystem(e){eb=e}static get defaultOutputCalendar(){return eg}static set defaultOutputCalendar(e){eg=e}static get defaultWeekSettings(){return eS}static set defaultWeekSettings(e){eS=eU(e)}static get twoDigitCutoffYear(){return ev}static set twoDigitCutoffYear(e){ev=e%100}static get throwOnInvalid(){return eK}static set throwOnInvalid(e){eK=e}static resetCaches(){en.resetCache(),V.resetCache(),rW.resetCache(),eh.clear()}}class eI{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}let ek=[0,31,59,90,120,151,181,212,243,273,304,334],ew=[0,31,60,91,121,152,182,213,244,274,305,335];function ex(e,t){return new eI("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function ej(e,t,r){let i=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&i.setUTCFullYear(i.getUTCFullYear()-1900);let n=i.getUTCDay();return 0===n?7:n}function eA(e,t){let r=eQ(e)?ew:ek,i=r.findIndex(e=>e<t),n=t-r[i];return{month:i+1,day:n}}function eT(e,t){return(e-t+7)%7+1}function eD(e,t=4,r=1){let{year:i,month:n,day:a}=e,s=a+(eQ(i)?ew:ek)[n-1],o=eT(ej(i,n,a),r),l=Math.floor((s-o+14-t)/7),d;return l<1?l=e2(d=i-1,t,r):l>e2(i,t,r)?(d=i+1,l=1):d=i,{weekYear:d,weekNumber:l,weekday:o,...e9(e)}}function eO(e,t=4,r=1){let{weekYear:i,weekNumber:n,weekday:a}=e,s=eT(ej(i,1,t),r),o=eZ(i),l=7*n+a-s-7+t,d;l<1?l+=eZ(d=i-1):l>o?(d=i+1,l-=eZ(i)):d=i;let{month:c,day:u}=eA(d,l);return{year:d,month:c,day:u,...e9(e)}}function eC(e){let{year:t,month:r,day:i}=e,n=i+(eQ(t)?ew:ek)[r-1];return{year:t,ordinal:n,...e9(e)}}function eR(e){let{year:t,ordinal:r}=e,{month:i,day:n}=eA(t,r);return{year:t,month:i,day:n,...e9(e)}}function eM(e,t){if(!(!eJ(e.localWeekday)||!eJ(e.localWeekNumber)||!eJ(e.localWeekYear)))return{minDaysInFirstWeek:4,startOfWeek:1};if(!eJ(e.weekday)||!eJ(e.weekNumber)||!eJ(e.weekYear))throw new l("Cannot mix locale-based week fields with ISO-based week fields");return eJ(e.localWeekday)||(e.weekday=e.localWeekday),eJ(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),eJ(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}function eP(e){let t=e_(e.year),r=eB(e.month,1,12),i=eB(e.day,1,eX(e.year,e.month));return t?r?!i&&ex("day",e.day):ex("month",e.month):ex("year",e.year)}function eN(e){let{hour:t,minute:r,second:i,millisecond:n}=e,a=eB(t,0,23)||24===t&&0===r&&0===i&&0===n,s=eB(r,0,59),o=eB(i,0,59),l=eB(n,0,999);return a?s?o?!l&&ex("millisecond",n):ex("second",i):ex("minute",r):ex("hour",t)}function eJ(e){return void 0===e}function eL(e){return"number"==typeof e}function e_(e){return"number"==typeof e&&e%1==0}function eF(){try{return"u">typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function eq(){try{return"u">typeof Intl&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch(e){return!1}}function eG(e,t,r){if(0!==e.length)return e.reduce((e,i)=>{let n=[t(i),i];return e&&r(e[0],n[0])===e[0]?e:n},null)[1]}function eV(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eU(e){if(null==e)return null;if("object"!=typeof e)throw new c("Week settings must be an object");if(!eB(e.firstDay,1,7)||!eB(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!eB(e,1,7)))throw new c("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function eB(e,t,r){return e_(e)&&e>=t&&e<=r}function eY(e,t=2){return e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function ez(e){if(!eJ(e)&&null!==e&&""!==e)return parseInt(e,10)}function eW(e){if(!eJ(e)&&null!==e&&""!==e)return parseFloat(e)}function e$(e){if(!eJ(e)&&null!==e&&""!==e)return Math.floor(1e3*parseFloat("0."+e))}function eH(e,t,r="round"){let i=10**t;switch(r){case"expand":return e>0?Math.ceil(e*i)/i:Math.floor(e*i)/i;case"trunc":return Math.trunc(e*i)/i;case"round":return Math.round(e*i)/i;case"floor":return Math.floor(e*i)/i;case"ceil":return Math.ceil(e*i)/i;default:throw RangeError(`Value rounding ${r} is out of range`)}}function eQ(e){return e%4==0&&(e%100!=0||e%400==0)}function eZ(e){return eQ(e)?366:365}function eX(e,t){var r;let i=(r=t-1)-12*Math.floor(r/12)+1;return 2===i?eQ(e+(t-i)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][i-1]}function e0(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(e.year,e.month-1,e.day),+t}function e1(e,t,r){return-eT(ej(e,1,t),r)+t-1}function e2(e,t=4,r=1){let i=e1(e,t,r),n=e1(e+1,t,r);return(eZ(e)-i+n)/7}function e3(e){return e>99?e:e>eE.twoDigitCutoffYear?1900+e:2e3+e}function e4(e,t,r,i=null){let n=new Date(e),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};i&&(a.timeZone=i);let s={timeZoneName:t,...a},o=new Intl.DateTimeFormat(r,s).formatToParts(n).find(e=>"timezonename"===e.type.toLowerCase());return o?o.value:null}function e6(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);let i=parseInt(t,10)||0,n=r<0||Object.is(r,-0)?-i:i;return 60*r+n}function e5(e){let t=Number(e);if("boolean"==typeof e||""===e||!Number.isFinite(t))throw new c(`Invalid unit value ${e}`);return t}function e8(e,t){let r={};for(let i in e)if(eV(e,i)){let n=e[i];if(null==n)continue;r[t(i)]=e5(n)}return r}function e7(e,t){let r=Math.trunc(Math.abs(e/60)),i=Math.trunc(Math.abs(e%60)),n=e>=0?"+":"-";switch(t){case"short":return`${n}${eY(r,2)}:${eY(i,2)}`;case"narrow":return`${n}${r}${i>0?`:${i}`:""}`;case"techie":return`${n}${eY(r,2)}${eY(i,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function e9(e){return["hour","minute","second","millisecond"].reduce((t,r)=>(t[r]=e[r],t),{})}let te=["January","February","March","April","May","June","July","August","September","October","November","December"],tt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tr=["J","F","M","A","M","J","J","A","S","O","N","D"];function ti(e){switch(e){case"narrow":return[...tr];case"short":return[...tt];case"long":return[...te];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}let tn=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ta=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ts=["M","T","W","T","F","S","S"];function to(e){switch(e){case"narrow":return[...ts];case"short":return[...ta];case"long":return[...tn];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}let tl=["AM","PM"],td=["Before Christ","Anno Domini"],tc=["BC","AD"],tu=["B","A"];function th(e){switch(e){case"narrow":return[...tu];case"short":return[...tc];case"long":return[...td];default:return null}}function tp(e,t){let r="";for(let i of e)i.literal?r+=i.val:r+=t(i.val);return r}let ty={D:m,DD:f,DDD:g,DDDD:v,t:K,tt:S,ttt:E,tttt:I,T:k,TT:w,TTT:x,TTTT:j,f:A,ff:D,fff:R,ffff:P,F:T,FF:O,FFF:M,FFFF:N};class tm{static create(e,t={}){return new tm(e,t)}static parseFormat(e){let t=null,r="",i=!1,n=[];for(let a=0;a<e.length;a++){let s=e.charAt(a);"'"===s?((r.length>0||i)&&n.push({literal:i||/^\s+$/.test(r),val:""===r?"'":r}),t=null,r="",i=!i):i||s===t?r+=s:(r.length>0&&n.push({literal:/^\s+$/.test(r),val:r}),r=s,t=s)}return r.length>0&&n.push({literal:i||/^\s+$/.test(r),val:r}),n}static macroTokenToFormatOpts(e){return ty[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,r){if(this.opts.forceSimple)return eY(e,t);let i={...this.opts};return t>0&&(i.padTo=t),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(e)}formatDateTimeFromString(e,t){let r="en"===this.loc.listingMode(),i=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,n=(t,r)=>this.loc.extract(e,t,r),a=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",s=(t,i)=>r?ti(t)[e.month-1]:n(i?{month:t}:{month:t,day:"numeric"},"month"),o=(t,i)=>r?to(t)[e.weekday-1]:n(i?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),l=t=>{let r=tm.macroTokenToFormatOpts(t);return r?this.formatWithSystemDefault(e,r):t},d=t=>r?th(t)[e.year<0?0:1]:n({era:t},"era"),c=t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return r?tl[e.hour<12?0:1]:n({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return i?n({day:"numeric"},"day"):this.num(e.day);case"dd":return i?n({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return o("short",!0);case"cccc":return o("long",!0);case"ccccc":return o("narrow",!0);case"EEE":return o("short",!1);case"EEEE":return o("long",!1);case"EEEEE":return o("narrow",!1);case"L":return i?n({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?n({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return s("short",!0);case"LLLL":return s("long",!0);case"LLLLL":return s("narrow",!0);case"M":return i?n({month:"numeric"},"month"):this.num(e.month);case"MM":return i?n({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return s("short",!1);case"MMMM":return s("long",!1);case"MMMMM":return s("narrow",!1);case"y":return i?n({year:"numeric"},"year"):this.num(e.year);case"yy":return i?n({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?n({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?n({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return l(t)}};return tp(tm.parseFormat(t),c)}formatDurationFromString(e,t){let r="negativeLargestOnly"===this.opts.signMode?-1:1,i=e=>{switch(e[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},n=(e,t)=>n=>{let a=i(n);if(!a)return n;{let i,s=t.isNegativeDuration&&a!==t.largestUnit?r:1;return i="negativeLargestOnly"===this.opts.signMode&&a!==t.largestUnit?"never":"all"===this.opts.signMode?"always":"auto",this.num(e.get(a)*s,n.length,i)}},a=tm.parseFormat(t),s=a.reduce((e,{literal:t,val:r})=>t?e:e.concat(r),[]),o=e.shiftTo(...s.map(i).filter(e=>e)),l={isNegativeDuration:o<0,largestUnit:Object.keys(o.values)[0]};return tp(a,n(o,l))}}let tf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function tb(...e){let t=e.reduce((e,t)=>e+t.source,"");return RegExp(`^${t}$`)}function tg(...e){return t=>e.reduce(([e,r,i],n)=>{let[a,s,o]=n(t,i);return[{...e,...a},s||r,o]},[{},null,1]).slice(0,2)}function tv(e,...t){if(null==e)return[null,null];for(let[r,i]of t){let t=r.exec(e);if(t)return i(t)}return[null,null]}function tK(...e){return(t,r)=>{let i,n={};for(i=0;i<e.length;i++)n[e[i]]=ez(t[r+i]);return[n,null,r+i]}}let tS=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,tE=`(?:${tS.source}?(?:\\[(${tf.source})\\])?)?`,tI=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,tk=RegExp(`${tI.source}${tE}`),tw=RegExp(`(?:[Tt]${tk.source})?`),tx=tK("weekYear","weekNumber","weekDay"),tj=tK("year","ordinal"),tA=RegExp(`${tI.source} ?(?:${tS.source}|(${tf.source}))?`),tT=RegExp(`(?: ${tA.source})?`);function tD(e,t,r){let i=e[t];return eJ(i)?r:ez(i)}function tO(e,t){return[{hours:tD(e,t,0),minutes:tD(e,t+1,0),seconds:tD(e,t+2,0),milliseconds:e$(e[t+3])},null,t+4]}function tC(e,t){let r=!e[t]&&!e[t+1],i=e6(e[t+1],e[t+2]);return[{},r?null:es.instance(i),t+3]}function tR(e,t){return[{},e[t]?V.create(e[t]):null,t+1]}let tM=RegExp(`^T?${tI.source}$`),tP=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function tN(e){let[t,r,i,n,a,s,o,l,d]=e,c="-"===t[0],u=l&&"-"===l[0],h=(e,t=!1)=>void 0!==e&&(t||e&&c)?-e:e;return[{years:h(eW(r)),months:h(eW(i)),weeks:h(eW(n)),days:h(eW(a)),hours:h(eW(s)),minutes:h(eW(o)),seconds:h(eW(l),"-0"===l),milliseconds:h(e$(d),u)}]}let tJ={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function tL(e,t,r,i,n,a,s){let o={year:2===t.length?e3(ez(t)):ez(t),month:tt.indexOf(r)+1,day:ez(i),hour:ez(n),minute:ez(a)};return s&&(o.second=ez(s)),e&&(o.weekday=e.length>3?tn.indexOf(e)+1:ta.indexOf(e)+1),o}let t_=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function tF(e){let[,t,r,i,n,a,s,o,l,d,c,u]=e;return[tL(t,n,i,r,a,s,o),new es(l?tJ[l]:d?0:e6(c,u))]}let tq=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tG=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,tV=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function tU(e){let[,t,r,i,n,a,s,o]=e;return[tL(t,n,i,r,a,s,o),es.utcInstance]}function tB(e){let[,t,r,i,n,a,s,o]=e;return[tL(t,o,r,i,n,a,s),es.utcInstance]}let tY=tb(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,tw),tz=tb(/(\d{4})-?W(\d\d)(?:-?(\d))?/,tw),tW=tb(/(\d{4})-?(\d{3})/,tw),t$=tb(tk),tH=tg(function(e,t){return[{year:tD(e,t),month:tD(e,t+1,1),day:tD(e,t+2,1)},null,t+3]},tO,tC,tR),tQ=tg(tx,tO,tC,tR),tZ=tg(tj,tO,tC,tR),tX=tg(tO,tC,tR),t0=tg(tO),t1=tb(/(\d{4})-(\d\d)-(\d\d)/,tT),t2=tb(tA),t3=tg(tO,tC,tR),t4="Invalid Duration",t6={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},t5={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...t6},t8={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:0x1e18558,milliseconds:31556952e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:7889238,milliseconds:7889238e3},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...t6},t7=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],t9=t7.slice(0).reverse();function re(e,t,r=!1){return new rn({values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function rt(e,t){var r;let i=null!=(r=t.milliseconds)?r:0;for(let r of t9.slice(1))t[r]&&(i+=t[r]*e[r].milliseconds);return i}function rr(e,t){let r=0>rt(e,t)?-1:1;t7.reduceRight((i,n)=>{if(eJ(t[n]))return i;if(i){let a=t[i]*r,s=e[n][i],o=Math.floor(a/s);t[n]+=o*r,t[i]-=o*s*r}return n},null),t7.reduce((r,i)=>{if(eJ(t[i]))return r;if(r){let n=t[r]%1;t[r]-=n,t[i]+=n*e[r][i]}return i},null)}function ri(e){let t={};for(let[r,i]of Object.entries(e))0!==i&&(t[r]=i);return t}class rn{constructor(e){const t="longterm"===e.conversionAccuracy;let r=t?t8:t5;e.matrix&&(r=e.matrix),this.values=e.values,this.loc=e.loc||en.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(e,t){return rn.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(null==e||"object"!=typeof e)throw new c(`Duration.fromObject: argument expected to be an object, got ${null===e?"null":typeof e}`);return new rn({values:e8(e,rn.normalizeUnit),loc:en.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(eL(e))return rn.fromMillis(e);if(rn.isDuration(e))return e;if("object"==typeof e)return rn.fromObject(e);throw new c(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){let[r]=tv(e,[tP,tN]);return r?rn.fromObject(r,t):rn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){let[r]=tv(e,[tM,t0]);return r?rn.fromObject(r,t):rn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the Duration is invalid");let r=e instanceof eI?e:new eI(e,t);if(!eE.throwOnInvalid)return new rn({invalid:r});throw new o(r)}static normalizeUnit(e){let t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new d(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let r={...t,floor:!1!==t.round&&!1!==t.floor};return this.isValid?tm.create(this.loc,r).formatDurationFromString(this,e):t4}toHuman(e={}){if(!this.isValid)return t4;let t=!1!==e.showZeros,r=t7.map(r=>{let i=this.values[r];return eJ(i)||0===i&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:r.slice(0,-1)}).format(i)}).filter(e=>e);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return 0!==this.years&&(e+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(e+=eH(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},rW.fromMillis(t,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?rt(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let t=rn.fromDurationLike(e),r={};for(let e of t7)(eV(t.values,e)||eV(this.values,e))&&(r[e]=t.get(e)+this.get(e));return re(this,{values:r},!0)}minus(e){if(!this.isValid)return this;let t=rn.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let r of Object.keys(this.values))t[r]=e5(e(this.values[r],r));return re(this,{values:t},!0)}get(e){return this[rn.normalizeUnit(e)]}set(e){return this.isValid?re(this,{values:{...this.values,...e8(e,rn.normalizeUnit)}}):this}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:r,matrix:i}={}){return re(this,{loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:i,conversionAccuracy:r})}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return rr(this.matrix,e),re(this,{values:e},!0)}rescale(){return this.isValid?re(this,{values:ri(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(...e){let t;if(!this.isValid||0===e.length)return this;e=e.map(e=>rn.normalizeUnit(e));let r={},i={},n=this.toObject();for(let a of t7)if(e.indexOf(a)>=0){t=a;let e=0;for(let t in i)e+=this.matrix[t][a]*i[t],i[t]=0;eL(n[a])&&(e+=n[a]);let s=Math.trunc(e);r[a]=s,i[a]=(1e3*e-1e3*s)/1e3}else eL(n[a])&&(i[a]=n[a]);for(let e in i)0!==i[e]&&(r[t]+=e===t?i[e]:i[e]/this.matrix[t][e]);return rr(this.matrix,r),re(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t];return re(this,{values:e},!0)}removeZeros(){return this.isValid?re(this,{values:ri(this.values)},!0):this}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;for(let i of t7){var t,r;if(t=this.values[i],r=e.values[i],void 0===t||0===t?void 0!==r&&0!==r:t!==r)return!1}return!0}}let ra="Invalid Interval";class rs{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the Interval is invalid");let r=e instanceof eI?e:new eI(e,t);if(!eE.throwOnInvalid)return new rs({invalid:r});throw new s(r)}static fromDateTimes(e,t){var r,i;let n=r$(e),a=r$(t),s=(r=n,i=a,r&&r.isValid?i&&i.isValid?i<r?rs.invalid("end before start",`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${i.toISO()}`):null:rs.invalid("missing or invalid end"):rs.invalid("missing or invalid start"));return null==s?new rs({start:n,end:a}):s}static after(e,t){let r=rn.fromDurationLike(t),i=r$(e);return rs.fromDateTimes(i,i.plus(r))}static before(e,t){let r=rn.fromDurationLike(t),i=r$(e);return rs.fromDateTimes(i.minus(r),i)}static fromISO(e,t){let[r,i]=(e||"").split("/",2);if(r&&i){let e,n,a,s;try{n=(e=rW.fromISO(r,t)).isValid}catch(e){n=!1}try{s=(a=rW.fromISO(i,t)).isValid}catch(e){s=!1}if(n&&s)return rs.fromDateTimes(e,a);if(n){let r=rn.fromISO(i,t);if(r.isValid)return rs.after(e,r)}else if(s){let e=rn.fromISO(r,t);if(e.isValid)return rs.before(a,e)}}return rs.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",t){let r;if(!this.isValid)return NaN;let i=this.start.startOf(e,t);return Math.floor((r=(r=null!=t&&t.useLocaleWeeks?this.end.reconfigure({locale:i.locale}):this.end).startOf(e,t)).diff(i,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set({start:e,end:t}={}){return this.isValid?rs.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];let t=e.map(r$).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,n=0;for(;i<this.e;){let e=t[n]||this.e,a=+e>+this.e?this.e:e;r.push(rs.fromDateTimes(i,a)),i=a,n+=1}return r}splitBy(e){let t=rn.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];let{s:r}=this,i=1,n,a=[];for(;r<this.e;){let e=this.start.plus(t.mapUnits(e=>e*i));n=+e>+this.e?this.e:e,a.push(rs.fromDateTimes(r,n)),r=n,i+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!!this.isValid&&!!e.isValid&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let t=this.s>e.s?this.s:e.s,r=this.e<e.e?this.e:e.e;return t>=r?null:rs.fromDateTimes(t,r)}union(e){if(!this.isValid)return this;let t=this.s<e.s?this.s:e.s,r=this.e>e.e?this.e:e.e;return rs.fromDateTimes(t,r)}static merge(e){let[t,r]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],r)=>t?t.overlaps(r)||t.abutsStart(r)?[e,t.union(r)]:[e.concat([t]),r]:[e,r],[[],null]);return r&&t.push(r),t}static xor(e){let t=null,r=0,i=[],n=e.map(e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}]);for(let e of Array.prototype.concat(...n).sort((e,t)=>e.time-t.time))1===(r+="s"===e.type?1:-1)?t=e.time:(t&&+t!=+e.time&&i.push(rs.fromDateTimes(t,e.time)),t=null);return rs.merge(i)}difference(...e){return rs.xor([this].concat(e)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ra}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=m,t={}){return this.isValid?tm.create(this.s.loc.clone(t),e).formatInterval(this):ra}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:ra}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ra}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:ra}toFormat(e,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:ra}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):rn.invalid(this.invalidReason)}mapEndpoints(e){return rs.fromDateTimes(e(this.s),e(this.e))}}class ro{static hasDST(e=eE.defaultZone){let t=rW.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return V.isValidZone(e)}static normalizeZone(e){return el(e,eE.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||en.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||en.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||en.create(e)).getWeekendDays().slice()}static months(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null,outputCalendar:n="gregory"}={}){return(i||en.create(t,r,n)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null,outputCalendar:n="gregory"}={}){return(i||en.create(t,r,n)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null}={}){return(i||en.create(t,r,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null}={}){return(i||en.create(t,r,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return en.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return en.create(t,null,"gregory").eras(e)}static features(){return{relative:eF(),localeWeek:eq()}}}function rl(e,t){let r=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),i=r(t)-r(e);return Math.floor(rn.fromMillis(i).as("days"))}function rd(e,t=e=>e){return{regex:e,deser:([e])=>t(function(e){let t=parseInt(e,10);if(!isNaN(t))return t;t="";for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(-1!==e[r].search(ed.hanidec))t+=eu.indexOf(e[r]);else for(let e in ec){let[r,n]=ec[e];i>=r&&i<=n&&(t+=i-r)}}return parseInt(t,10)}(e))}}let rc=String.fromCharCode(160),ru=`[ ${rc}]`,rh=RegExp(ru,"g");function rp(e){return e.replace(/\./g,"\\.?").replace(rh,ru)}function ry(e){return e.replace(/\./g,"").replace(rh," ").toLowerCase()}function rm(e,t){return null===e?null:{regex:RegExp(e.map(rp).join("|")),deser:([r])=>e.findIndex(e=>ry(r)===ry(e))+t}}function rf(e,t){return{regex:e,deser:([,e,t])=>e6(e,t),groups:t}}function rb(e){return{regex:e,deser:([e])=>e}}let rg={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}},rv=null;function rK(e,t){return Array.prototype.concat(...e.map(e=>(function(e,t){if(e.literal)return e;let r=rI(tm.macroTokenToFormatOpts(e.val),t);return null==r||r.includes(void 0)?e:r})(e,t)))}class rS{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=rK(tm.parseFormat(t),e),this.units=this.tokens.map(t=>{let r,i,n,a,s,o,l,d,c,u,h,p,y;return r=ep(e),i=ep(e,"{2}"),n=ep(e,"{3}"),a=ep(e,"{4}"),s=ep(e,"{6}"),o=ep(e,"{1,2}"),l=ep(e,"{1,3}"),d=ep(e,"{1,6}"),c=ep(e,"{1,9}"),u=ep(e,"{2,4}"),h=ep(e,"{4,6}"),p=e=>({regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:([e])=>e,literal:!0}),(y=(y=>{if(t.literal)return p(y);switch(y.val){case"G":return rm(e.eras("short"),0);case"GG":return rm(e.eras("long"),0);case"y":return rd(d);case"yy":case"kk":return rd(u,e3);case"yyyy":case"kkkk":return rd(a);case"yyyyy":return rd(h);case"yyyyyy":return rd(s);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return rd(o);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return rd(i);case"MMM":return rm(e.months("short",!0),1);case"MMMM":return rm(e.months("long",!0),1);case"LLL":return rm(e.months("short",!1),1);case"LLLL":return rm(e.months("long",!1),1);case"o":case"S":return rd(l);case"ooo":case"SSS":return rd(n);case"u":return rb(c);case"uu":return rb(o);case"uuu":case"E":case"c":return rd(r);case"a":return rm(e.meridiems(),0);case"EEE":return rm(e.weekdays("short",!1),1);case"EEEE":return rm(e.weekdays("long",!1),1);case"ccc":return rm(e.weekdays("short",!0),1);case"cccc":return rm(e.weekdays("long",!0),1);case"Z":case"ZZ":return rf(RegExp(`([+-]${o.source})(?::(${i.source}))?`),2);case"ZZZ":return rf(RegExp(`([+-]${o.source})(${i.source})?`),2);case"z":return rb(/[a-z_+-/]{1,256}?/i);case" ":return rb(/[^\S\n\r]/);default:return p(y)}})(t)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}).token=t,y}),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){const[e,t]=function(e){let t=e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,"");return[`^${t}$`,e]}(this.units);this.regex=RegExp(e,"i"),this.handlers=t}}explainFromTokens(e){if(!this.isValid)return{input:e,tokens:this.tokens,invalidReason:this.invalidReason};{let t,r,[i,n]=function(e,t,r){let i=e.match(t);if(!i)return[i,{}];{let e={},t=1;for(let n in r)if(eV(r,n)){let a=r[n],s=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(i.slice(t,t+s))),t+=s}return[i,e]}}(e,this.regex,this.handlers),[a,s,o]=n?(r=null,eJ(n.z)||(r=V.create(n.z)),eJ(n.Z)||(r||(r=new es(n.Z)),t=n.Z),eJ(n.q)||(n.M=(n.q-1)*3+1),eJ(n.h)||(n.h<12&&1===n.a?n.h+=12:12===n.h&&0===n.a&&(n.h=0)),0===n.G&&n.y&&(n.y=-n.y),eJ(n.u)||(n.S=e$(n.u)),[Object.keys(n).reduce((e,t)=>{let r=(e=>{switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}})(t);return r&&(e[r]=n[t]),e},{}),r,t]):[null,null,void 0];if(eV(n,"a")&&eV(n,"H"))throw new l("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:i,matches:n,result:a,zone:s,specificOffset:o}}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function rE(e,t,r){return new rS(e,r).explainFromTokens(t)}function rI(e,t){if(!e)return null;let r=tm.create(t,e).dtFormatter((rv||(rv=rW.fromMillis(0x16a2e5618e3)),rv)),i=r.formatToParts(),n=r.resolvedOptions();return i.map(t=>(function(e,t,r){let{type:i,value:n}=e;if("literal"===i){let e=/^\s+$/.test(n);return{literal:!e,val:e?" ":n}}let a=t[i],s=i;"hour"===i&&(s=null!=t.hour12?t.hour12?"hour12":"hour24":null!=t.hourCycle?"h11"===t.hourCycle||"h12"===t.hourCycle?"hour12":"hour24":r.hour12?"hour12":"hour24");let o=rg[s];if("object"==typeof o&&(o=o[a]),o)return{literal:!1,val:o}})(t,e,n))}let rk="Invalid DateTime";function rw(e){return new eI("unsupported zone",`the zone "${e.name}" is not supported`)}function rx(e){return null===e.weekData&&(e.weekData=eD(e.c)),e.weekData}function rj(e){return null===e.localWeekData&&(e.localWeekData=eD(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function rA(e,t){let r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new rW({...r,...t,old:r})}function rT(e,t,r){let i=e-60*t*1e3,n=r.offset(i);if(t===n)return[i,t];i-=(n-t)*6e4;let a=r.offset(i);return n===a?[i,n]:[e-60*Math.min(n,a)*1e3,Math.max(n,a)]}function rD(e,t){let r=new Date(e+=60*t*1e3);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function rO(e,t){let r=e.o,i=e.c.year+Math.trunc(t.years),n=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),a={...e.c,year:i,month:n,day:Math.min(e.c.day,eX(i,n))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},s=rn.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),[o,l]=rT(e0(a),r,e.zone);return 0!==s&&(o+=s,l=e.zone.offset(o)),{ts:o,o:l}}function rC(e,t,r,i,n,a){let{setZone:s,zone:o}=r;if((!e||0===Object.keys(e).length)&&!t)return rW.invalid(new eI("unparsable",`the input "${n}" can't be parsed as ${i}`));{let i=rW.fromObject(e,{...r,zone:t||o,specificOffset:a});return s?i:i.setZone(o)}}function rR(e,t,r=!0){return e.isValid?tm.create(en.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function rM(e,t,r){let i=e.c.year>9999||e.c.year<0,n="";if(i&&e.c.year>=0&&(n+="+"),n+=eY(e.c.year,i?6:4),"year"===r)return n;if(t){if(n+="-",n+=eY(e.c.month),"month"===r)return n;n+="-"}else if(n+=eY(e.c.month),"month"===r)return n;return n+eY(e.c.day)}function rP(e,t,r,i,n,a,s){let o=!r||0!==e.c.millisecond||0!==e.c.second,l="";switch(s){case"day":case"month":case"year":break;default:if(l+=eY(e.c.hour),"hour"===s)break;if(t){if(l+=":",l+=eY(e.c.minute),"minute"===s)break;o&&(l+=":",l+=eY(e.c.second))}else{if(l+=eY(e.c.minute),"minute"===s)break;o&&(l+=eY(e.c.second))}if("second"===s)break;o&&(!i||0!==e.c.millisecond)&&(l+=".",l+=eY(e.c.millisecond,3))}return n&&(e.isOffsetFixed&&0===e.offset&&!a?l+="Z":e.o<0?(l+="-",l+=eY(Math.trunc(-e.o/60)),l+=":",l+=eY(Math.trunc(-e.o%60))):(l+="+",l+=eY(Math.trunc(e.o/60)),l+=":",l+=eY(Math.trunc(e.o%60)))),a&&(l+="["+e.zone.ianaName+"]"),l}let rN={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},rJ={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},rL={ordinal:1,hour:0,minute:0,second:0,millisecond:0},r_=["year","month","day","hour","minute","second","millisecond"],rF=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],rq=["year","ordinal","hour","minute","second","millisecond"];function rG(e){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new d(e);return t}function rV(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return rG(e)}}function rU(e,t){let r,n,a=el(t.zone,eE.defaultZone);if(!a.isValid)return rW.invalid(rw(a));let s=en.fromObject(t);if(eJ(e.year))r=eE.now();else{for(let t of r_)eJ(e[t])&&(e[t]=rN[t]);let t=eP(e)||eN(e);if(t)return rW.invalid(t);let s=function(e){if(void 0===i&&(i=eE.now()),"iana"!==e.type)return e.offset(i);let t=e.name,r=rz.get(t);return void 0===r&&(r=e.offset(i),rz.set(t,r)),r}(a);[r,n]=rT(e0(e),s,a)}return new rW({ts:r,zone:a,loc:s,o:n})}function rB(e,t,r){let i=!!eJ(r.round)||r.round,n=eJ(r.rounding)?"trunc":r.rounding,a=(e,a)=>(e=eH(e,i||r.calendary?0:2,r.calendary?"round":n),t.loc.clone(r).relFormatter(r).format(e,a)),s=i=>r.calendary?t.hasSame(e,i)?0:t.startOf(i).diff(e.startOf(i),i).get(i):t.diff(e,i).get(i);if(r.unit)return a(s(r.unit),r.unit);for(let e of r.units){let t=s(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,r.units[r.units.length-1])}function rY(e){let t={},r;return e.length>0&&"object"==typeof e[e.length-1]?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let rz=new Map;class rW{constructor(e){const t=e.zone||eE.defaultZone;let r=e.invalid||(Number.isNaN(e.ts)?new eI("invalid input"):null)||(t.isValid?null:rw(t));this.ts=eJ(e.ts)?eE.now():e.ts;let i=null,n=null;if(!r)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[i,n]=[e.old.c,e.old.o];else{const a=eL(e.o)&&!e.old?e.o:t.offset(this.ts);i=(r=Number.isNaN((i=rD(this.ts,a)).year)?new eI("invalid input"):null)?null:i,n=r?null:a}this._zone=t,this.loc=e.loc||en.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=n,this.isLuxonDateTime=!0}static now(){return new rW({})}static local(){let[e,t]=rY(arguments),[r,i,n,a,s,o,l]=t;return rU({year:r,month:i,day:n,hour:a,minute:s,second:o,millisecond:l},e)}static utc(){let[e,t]=rY(arguments),[r,i,n,a,s,o,l]=t;return e.zone=es.utcInstance,rU({year:r,month:i,day:n,hour:a,minute:s,second:o,millisecond:l},e)}static fromJSDate(e,t={}){let r="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(r))return rW.invalid("invalid input");let i=el(t.zone,eE.defaultZone);return i.isValid?new rW({ts:r,zone:i,loc:en.fromObject(t)}):rW.invalid(rw(i))}static fromMillis(e,t={}){if(eL(e))if(e<-864e13||e>864e13)return rW.invalid("Timestamp out of range");else return new rW({ts:e,zone:el(t.zone,eE.defaultZone),loc:en.fromObject(t)});throw new c(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(eL(e))return new rW({ts:1e3*e,zone:el(t.zone,eE.defaultZone),loc:en.fromObject(t)});throw new c("fromSeconds requires a numerical input")}static fromObject(e,t={}){var r;let i,n;e=e||{};let a=el(t.zone,eE.defaultZone);if(!a.isValid)return rW.invalid(rw(a));let s=en.fromObject(t),o=e8(e,rV),{minDaysInFirstWeek:d,startOfWeek:c}=eM(o,s),u=eE.now(),h=eJ(t.specificOffset)?a.offset(u):t.specificOffset,p=!eJ(o.ordinal),y=!eJ(o.year),m=!eJ(o.month)||!eJ(o.day),f=y||m,b=o.weekYear||o.weekNumber;if((f||p)&&b)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&p)throw new l("Can't mix ordinal dates with month/day");let g=b||o.weekday&&!f,v,K,S=rD(u,h);g?(v=rF,K=rJ,S=eD(S,d,c)):p?(v=rq,K=rL,S=eC(S)):(v=r_,K=rN);let E=!1;for(let e of v)eJ(o[e])?E?o[e]=K[e]:o[e]=S[e]:E=!0;let I=(g?function(e,t=4,r=1){let i=e_(e.weekYear),n=eB(e.weekNumber,1,e2(e.weekYear,t,r)),a=eB(e.weekday,1,7);return i?n?!a&&ex("weekday",e.weekday):ex("week",e.weekNumber):ex("weekYear",e.weekYear)}(o,d,c):p?(i=e_(o.year),n=eB(o.ordinal,1,eZ(o.year)),i?!n&&ex("ordinal",o.ordinal):ex("year",o.year)):eP(o))||eN(o);if(I)return rW.invalid(I);let[k,w]=(r=g?eO(o,d,c):p?eR(o):o,rT(e0(r),h,a)),x=new rW({ts:k,zone:a,o:w,loc:s});return o.weekday&&f&&e.weekday!==x.weekday?rW.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${x.toISO()}`):x.isValid?x:rW.invalid(x.invalid)}static fromISO(e,t={}){let[r,i]=tv(e,[tY,tH],[tz,tQ],[tW,tZ],[t$,tX]);return rC(r,i,t,"ISO 8601",e)}static fromRFC2822(e,t={}){let[r,i]=tv(e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[t_,tF]);return rC(r,i,t,"RFC 2822",e)}static fromHTTP(e,t={}){let[r,i]=tv(e,[tq,tU],[tG,tU],[tV,tB]);return rC(r,i,t,"HTTP",t)}static fromFormat(e,t,r={}){if(eJ(e)||eJ(t))throw new c("fromFormat requires an input string and a format");let{locale:i=null,numberingSystem:n=null}=r,[a,s,o,l]=function(e,t,r){let{result:i,zone:n,specificOffset:a,invalidReason:s}=rE(e,t,r);return[i,n,a,s]}(en.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0}),e,t);return l?rW.invalid(l):rC(a,s,r,`format ${t}`,e,o)}static fromString(e,t,r={}){return rW.fromFormat(e,t,r)}static fromSQL(e,t={}){let[r,i]=tv(e,[t1,tH],[t2,t3]);return rC(r,i,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new c("need to specify a reason the DateTime is invalid");let r=e instanceof eI?e:new eI(e,t);if(!eE.throwOnInvalid)return new rW({invalid:r});throw new a(r)}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let r=rI(e,en.fromObject(t));return r?r.map(e=>e?e.val:null).join(""):null}static expandFormat(e,t={}){return rK(tm.parseFormat(e),en.fromObject(t)).map(e=>e.val).join("")}static resetCache(){i=void 0,rz.clear()}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?rx(this).weekYear:NaN}get weekNumber(){return this.isValid?rx(this).weekNumber:NaN}get weekday(){return this.isValid?rx(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?rj(this).weekday:NaN}get localWeekNumber(){return this.isValid?rj(this).weekNumber:NaN}get localWeekYear(){return this.isValid?rj(this).weekYear:NaN}get ordinal(){return this.isValid?eC(this.c).ordinal:NaN}get monthShort(){return this.isValid?ro.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ro.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ro.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ro.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=e0(this.c),t=this.zone.offset(e-864e5),r=this.zone.offset(e+864e5),i=this.zone.offset(e-6e4*t),n=this.zone.offset(e-6e4*r);if(i===n)return[this];let a=e-6e4*i,s=e-6e4*n,o=rD(a,i),l=rD(s,n);return o.hour===l.hour&&o.minute===l.minute&&o.second===l.second&&o.millisecond===l.millisecond?[rA(this,{ts:a}),rA(this,{ts:s})]:[this]}get isInLeapYear(){return eQ(this.year)}get daysInMonth(){return eX(this.year,this.month)}get daysInYear(){return this.isValid?eZ(this.year):NaN}get weeksInWeekYear(){return this.isValid?e2(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?e2(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:r,calendar:i}=tm.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:r,outputCalendar:i}}toUTC(e=0,t={}){return this.setZone(es.instance(e),t)}toLocal(){return this.setZone(eE.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:r=!1}={}){if((e=el(e,eE.defaultZone)).equals(this.zone))return this;{if(!e.isValid)return rW.invalid(rw(e));let n=this.ts;if(t||r){var i;let t=e.offset(this.ts),r=this.toObject();[n]=(i=e,rT(e0(r),t,i))}return rA(this,{ts:n,zone:e})}}reconfigure({locale:e,numberingSystem:t,outputCalendar:r}={}){return rA(this,{loc:this.loc.clone({locale:e,numberingSystem:t,outputCalendar:r})})}setLocale(e){return this.reconfigure({locale:e})}set(e){var t,r,i;let n;if(!this.isValid)return this;let a=e8(e,rV),{minDaysInFirstWeek:s,startOfWeek:o}=eM(a,this.loc),d=!eJ(a.weekYear)||!eJ(a.weekNumber)||!eJ(a.weekday),c=!eJ(a.ordinal),u=!eJ(a.year),h=!eJ(a.month)||!eJ(a.day),p=a.weekYear||a.weekNumber;if((u||h||c)&&p)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&c)throw new l("Can't mix ordinal dates with month/day");d?n=eO({...eD(this.c,s,o),...a},s,o):eJ(a.ordinal)?(n={...this.toObject(),...a},eJ(a.day)&&(n.day=Math.min(eX(n.year,n.month),n.day))):n=eR({...eC(this.c),...a});let[y,m]=(t=n,r=this.o,i=this.zone,rT(e0(t),r,i));return rA(this,{ts:y,o:m})}plus(e){return this.isValid?rA(this,rO(this,rn.fromDurationLike(e))):this}minus(e){return this.isValid?rA(this,rO(this,rn.fromDurationLike(e).negate())):this}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let r={},i=rn.normalizeUnit(e);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0}if("weeks"===i)if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(r.weekNumber=this.weekNumber-1),r.weekday=e}else r.weekday=1;return"quarters"===i&&(r.month=(Math.ceil(this.month/3)-1)*3+1),this.set(r)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?tm.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):rk}toLocaleString(e=m,t={}){return this.isValid?tm.create(this.loc.clone(t),e).formatDateTime(this):rk}toLocaleParts(e={}){return this.isValid?tm.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:n=!1,precision:a="milliseconds"}={}){if(!this.isValid)return null;a=rG(a);let s="extended"===e,o=rM(this,s,a);return r_.indexOf(a)>=3&&(o+="T"),o+=rP(this,s,t,r,i,n,a)}toISODate({format:e="extended",precision:t="day"}={}){return this.isValid?rM(this,"extended"===e,rG(t)):null}toISOWeekDate(){return rR(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:n=!1,format:a="extended",precision:s="milliseconds"}={}){return this.isValid?(s=rG(s),(i&&r_.indexOf(s)>=3?"T":"")+rP(this,"extended"===a,t,e,r,n,s)):null}toRFC2822(){return rR(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return rR(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?rM(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(t||e)&&(r&&(i+=" "),t?i+="z":e&&(i+="ZZ")),rR(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():rk}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",r={}){if(!this.isValid||!e.isValid)return rn.invalid("created by diffing an invalid DateTime");let i={locale:this.locale,numberingSystem:this.numberingSystem,...r},n=(Array.isArray(t)?t:[t]).map(rn.normalizeUnit),a=e.valueOf()>this.valueOf(),s=function(e,t,r,i){let[n,a,s,o]=function(e,t,r){let i,n,a={},s=e;for(let[o,l]of[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],["months",(e,t)=>t.month-e.month+(t.year-e.year)*12],["weeks",(e,t)=>{let r=rl(e,t);return(r-r%7)/7}],["days",rl]])r.indexOf(o)>=0&&(i=o,a[o]=l(e,t),(n=s.plus(a))>t?(a[o]--,(e=s.plus(a))>t&&(n=e,a[o]--,e=s.plus(a))):e=n);return[e,a,n,i]}(e,t,r),l=t-n,d=r.filter(e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0);0===d.length&&(s<t&&(s=n.plus({[o]:1})),s!==n&&(a[o]=(a[o]||0)+l/(s-n)));let c=rn.fromObject(a,i);return d.length>0?rn.fromMillis(l,i).shiftTo(...d).plus(c):c}(a?this:e,a?e:this,n,i);return a?s.negate():s}diffNow(e="milliseconds",t={}){return this.diff(rW.now(),e,t)}until(e){return this.isValid?rs.fromDateTimes(this,e):this}hasSame(e,t,r){if(!this.isValid)return!1;let i=e.valueOf(),n=this.setZone(e.zone,{keepLocalTime:!0});return n.startOf(t,r)<=i&&i<=n.endOf(t,r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let t=e.base||rW.fromObject({},{zone:this.zone}),r=e.padding?this<t?-e.padding:e.padding:0,i=["years","months","days","hours","minutes","seconds"],n=e.unit;return Array.isArray(e.unit)&&(i=e.unit,n=void 0),rB(t,this.plus(r),{...e,numeric:"always",units:i,unit:n})}toRelativeCalendar(e={}){return this.isValid?rB(e.base||rW.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(rW.isDateTime))throw new c("min requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.min)}static max(...e){if(!e.every(rW.isDateTime))throw new c("max requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,r={}){let{locale:i=null,numberingSystem:n=null}=r;return rE(en.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0}),e,t)}static fromStringExplain(e,t,r={}){return rW.fromFormatExplain(e,t,r)}static buildFormatParser(e,t={}){let{locale:r=null,numberingSystem:i=null}=t;return new rS(en.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e)}static fromFormatParser(e,t,r={}){if(eJ(e)||eJ(t))throw new c("fromFormatParser requires an input string and a format parser");let{locale:i=null,numberingSystem:n=null}=r,a=en.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0});if(!a.equals(t.locale))throw new c(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`);let{result:s,zone:o,specificOffset:l,invalidReason:d}=t.explainFromTokens(e);return d?rW.invalid(d):rC(s,o,r,`format ${t.format}`,e,l)}static get DATE_SHORT(){return m}static get DATE_MED(){return f}static get DATE_MED_WITH_WEEKDAY(){return b}static get DATE_FULL(){return g}static get DATE_HUGE(){return v}static get TIME_SIMPLE(){return K}static get TIME_WITH_SECONDS(){return S}static get TIME_WITH_SHORT_OFFSET(){return E}static get TIME_WITH_LONG_OFFSET(){return I}static get TIME_24_SIMPLE(){return k}static get TIME_24_WITH_SECONDS(){return w}static get TIME_24_WITH_SHORT_OFFSET(){return x}static get TIME_24_WITH_LONG_OFFSET(){return j}static get DATETIME_SHORT(){return A}static get DATETIME_SHORT_WITH_SECONDS(){return T}static get DATETIME_MED(){return D}static get DATETIME_MED_WITH_SECONDS(){return O}static get DATETIME_MED_WITH_WEEKDAY(){return C}static get DATETIME_FULL(){return R}static get DATETIME_FULL_WITH_SECONDS(){return M}static get DATETIME_HUGE(){return P}static get DATETIME_HUGE_WITH_SECONDS(){return N}}function r$(e){if(rW.isDateTime(e))return e;if(e&&e.valueOf&&eL(e.valueOf()))return rW.fromJSDate(e);if(e&&"object"==typeof e)return rW.fromObject(e);throw new c(`Unknown datetime argument: ${e}, of type ${typeof e}`)}r.DateTime=rW,r.Duration=rn,r.FixedOffsetZone=es,r.IANAZone=V,r.Info=ro,r.Interval=rs,r.InvalidZone=eo,r.Settings=eE,r.SystemZone=_,r.VERSION="3.7.2",r.Zone=J},72163,(e,t,r)=>{"use strict";var i=e.r(20549);function n(e,t){var r={zone:t};if(e?e instanceof n?this._date=e._date:e instanceof Date?this._date=i.DateTime.fromJSDate(e,r):"number"==typeof e?this._date=i.DateTime.fromMillis(e,r):"string"==typeof e&&(this._date=i.DateTime.fromISO(e,r),this._date.isValid||(this._date=i.DateTime.fromRFC2822(e,r)),this._date.isValid||(this._date=i.DateTime.fromSQL(e,r)),this._date.isValid||(this._date=i.DateTime.fromFormat(e,"EEE, d MMM yyyy HH:mm:ss",r))):this._date=i.DateTime.local(),!this._date||!this._date.isValid)throw Error("CronDate: unhandled timestamp: "+JSON.stringify(e));t&&t!==this._date.zoneName&&(this._date=this._date.setZone(t))}n.prototype.addYear=function(){this._date=this._date.plus({years:1})},n.prototype.addMonth=function(){this._date=this._date.plus({months:1}).startOf("month")},n.prototype.addDay=function(){this._date=this._date.plus({days:1}).startOf("day")},n.prototype.addHour=function(){var e=this._date;this._date=this._date.plus({hours:1}).startOf("hour"),this._date<=e&&(this._date=this._date.plus({hours:1}))},n.prototype.addMinute=function(){var e=this._date;this._date=this._date.plus({minutes:1}).startOf("minute"),this._date<e&&(this._date=this._date.plus({hours:1}))},n.prototype.addSecond=function(){var e=this._date;this._date=this._date.plus({seconds:1}).startOf("second"),this._date<e&&(this._date=this._date.plus({hours:1}))},n.prototype.subtractYear=function(){this._date=this._date.minus({years:1})},n.prototype.subtractMonth=function(){this._date=this._date.minus({months:1}).endOf("month").startOf("second")},n.prototype.subtractDay=function(){this._date=this._date.minus({days:1}).endOf("day").startOf("second")},n.prototype.subtractHour=function(){var e=this._date;this._date=this._date.minus({hours:1}).endOf("hour").startOf("second"),this._date>=e&&(this._date=this._date.minus({hours:1}))},n.prototype.subtractMinute=function(){var e=this._date;this._date=this._date.minus({minutes:1}).endOf("minute").startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},n.prototype.subtractSecond=function(){var e=this._date;this._date=this._date.minus({seconds:1}).startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},n.prototype.getDate=function(){return this._date.day},n.prototype.getFullYear=function(){return this._date.year},n.prototype.getDay=function(){var e=this._date.weekday;return 7==e?0:e},n.prototype.getMonth=function(){return this._date.month-1},n.prototype.getHours=function(){return this._date.hour},n.prototype.getMinutes=function(){return this._date.minute},n.prototype.getSeconds=function(){return this._date.second},n.prototype.getMilliseconds=function(){return this._date.millisecond},n.prototype.getTime=function(){return this._date.valueOf()},n.prototype.getUTCDate=function(){return this._getUTC().day},n.prototype.getUTCFullYear=function(){return this._getUTC().year},n.prototype.getUTCDay=function(){var e=this._getUTC().weekday;return 7==e?0:e},n.prototype.getUTCMonth=function(){return this._getUTC().month-1},n.prototype.getUTCHours=function(){return this._getUTC().hour},n.prototype.getUTCMinutes=function(){return this._getUTC().minute},n.prototype.getUTCSeconds=function(){return this._getUTC().second},n.prototype.toISOString=function(){return this._date.toUTC().toISO()},n.prototype.toJSON=function(){return this._date.toJSON()},n.prototype.setDate=function(e){this._date=this._date.set({day:e})},n.prototype.setFullYear=function(e){this._date=this._date.set({year:e})},n.prototype.setDay=function(e){this._date=this._date.set({weekday:e})},n.prototype.setMonth=function(e){this._date=this._date.set({month:e+1})},n.prototype.setHours=function(e){this._date=this._date.set({hour:e})},n.prototype.setMinutes=function(e){this._date=this._date.set({minute:e})},n.prototype.setSeconds=function(e){this._date=this._date.set({second:e})},n.prototype.setMilliseconds=function(e){this._date=this._date.set({millisecond:e})},n.prototype._getUTC=function(){return this._date.toUTC()},n.prototype.toString=function(){return this.toDate().toString()},n.prototype.toDate=function(){return this._date.toJSDate()},n.prototype.isLastDayOfMonth=function(){var e=this._date.plus({days:1}).startOf("day");return this._date.month!==e.month},n.prototype.isLastWeekdayOfMonth=function(){var e=this._date.plus({days:7}).startOf("day");return this._date.month!==e.month},t.exports=n},36921,(e,t,r)=>{"use strict";function i(e){return{start:e,count:1}}function n(e,t){e.end=t,e.step=t-e.start,e.count=2}function a(e,t,r){t&&(2===t.count?(e.push(i(t.start)),e.push(i(t.end))):e.push(t)),r&&e.push(r)}t.exports=function(e){for(var t=[],r=void 0,s=0;s<e.length;s++){var o=e[s];"number"!=typeof o?(a(t,r,i(o)),r=void 0):r?1===r.count?n(r,o):r.step===o-r.end?(r.count++,r.end=o):2===r.count?(t.push(i(r.start)),n(r=i(r.end),o)):(a(t,r),r=i(o)):r=i(o)}return a(t,r),t}},48221,(e,t,r)=>{"use strict";var i=e.r(36921);t.exports=function(e,t,r){var n=i(e);if(1===n.length){var a=n[0],s=a.step;if(1===s&&a.start===t&&a.end===r)return"*";if(1!==s&&a.start===t&&a.end===r-s+1)return"*/"+s}for(var o=[],l=0,d=n.length;l<d;++l){var c=n[l];if(1===c.count){o.push(c.start);continue}var s=c.step;if(1===c.step){o.push(c.start+"-"+c.end);continue}var u=0==c.start?c.count-1:c.count;c.step*u>c.end?o=o.concat(Array.from({length:c.end-c.start+1}).map(function(e,t){var r=c.start+t;return(r-c.start)%c.step==0?r:null}).filter(function(e){return null!=e})):c.end===r-c.step+1?o.push(c.start+"/"+c.step):o.push(c.start+"-"+c.end+"/"+c.step)}return o.join(",")}},84961,(e,t,r)=>{"use strict";var i=e.r(72163),n=e.r(48221);function a(e,t){this._options=t,this._utc=t.utc||!1,this._tz=this._utc?"UTC":t.tz,this._currentDate=new i(t.currentDate,this._tz),this._startDate=t.startDate?new i(t.startDate,this._tz):null,this._endDate=t.endDate?new i(t.endDate,this._tz):null,this._isIterator=t.iterator||!1,this._hasIterated=!1,this._nthDayOfWeek=t.nthDayOfWeek||0,this.fields=a._freezeFields(e)}a.map=["second","minute","hour","dayOfMonth","month","dayOfWeek"],a.predefined={"@yearly":"0 0 1 1 *","@monthly":"0 0 1 * *","@weekly":"0 0 * * 0","@daily":"0 0 * * *","@hourly":"0 * * * *"},a.constraints=[{min:0,max:59,chars:[]},{min:0,max:59,chars:[]},{min:0,max:23,chars:[]},{min:1,max:31,chars:["L"]},{min:1,max:12,chars:[]},{min:0,max:7,chars:["L"]}],a.daysInMonth=[31,29,31,30,31,30,31,31,30,31,30,31],a.aliases={month:{jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},dayOfWeek:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}},a.parseDefaults=["0","*","*","*","*","*"],a.standardValidCharacters=/^[,*\d/-]+$/,a.dayOfWeekValidCharacters=/^[?,*\dL#/-]+$/,a.dayOfMonthValidCharacters=/^[?,*\dL/-]+$/,a.validCharacters={second:a.standardValidCharacters,minute:a.standardValidCharacters,hour:a.standardValidCharacters,dayOfMonth:a.dayOfMonthValidCharacters,month:a.standardValidCharacters,dayOfWeek:a.dayOfWeekValidCharacters},a._isValidConstraintChar=function(e,t){return"string"==typeof t&&e.chars.some(function(e){return t.indexOf(e)>-1})},a._parseField=function(e,t,r){switch(e){case"month":case"dayOfWeek":var i=a.aliases[e];t=t.replace(/[a-z]{3}/gi,function(e){if(void 0!==i[e=e.toLowerCase()])return i[e];throw Error('Validation error, cannot resolve alias "'+e+'"')})}if(!a.validCharacters[e].test(t))throw Error("Invalid characters, got value: "+t);function n(e){var t=e.split("/");if(t.length>2)throw Error("Invalid repeat: "+e);return t.length>1?(t[0]==+t[0]&&(t=[t[0]+"-"+r.max,t[1]]),s(t[0],t[t.length-1])):s(e,1)}function s(t,i){var n=[],a=t.split("-");if(a.length>1){if(a.length<2)return+t;if(!a[0].length){if(!a[1].length)throw Error("Invalid range: "+t);return+t}var s=+a[0],o=+a[1];if(Number.isNaN(s)||Number.isNaN(o)||s<r.min||o>r.max)throw Error("Constraint error, got range "+s+"-"+o+" expected range "+r.min+"-"+r.max);if(s>o)throw Error("Invalid range: "+t);var l=+i;if(Number.isNaN(l)||l<=0)throw Error("Constraint error, cannot repeat at every "+l+" time.");"dayOfWeek"===e&&o%7==0&&n.push(0);for(var d=s;d<=o;d++)-1===n.indexOf(d)&&l>0&&l%i==0?(l=1,n.push(d)):l++;return n}return Number.isNaN(+t)?t:+t}return -1!==t.indexOf("*")?t=t.replace(/\*/g,r.min+"-"+r.max):-1!==t.indexOf("?")&&(t=t.replace(/\?/g,r.min+"-"+r.max)),function(t){var i=[];function s(t){if(t instanceof Array)for(var n=0,s=t.length;n<s;n++){var o=t[n];if(a._isValidConstraintChar(r,o)){i.push(o);continue}if("number"!=typeof o||Number.isNaN(o)||o<r.min||o>r.max)throw Error("Constraint error, got value "+o+" expected range "+r.min+"-"+r.max);i.push(o)}else{if(a._isValidConstraintChar(r,t))return void i.push(t);var l=+t;if(Number.isNaN(l)||l<r.min||l>r.max)throw Error("Constraint error, got value "+t+" expected range "+r.min+"-"+r.max);"dayOfWeek"===e&&(l%=7),i.push(l)}}var o=t.split(",");if(!o.every(function(e){return e.length>0}))throw Error("Invalid list value format");if(o.length>1)for(var l=0,d=o.length;l<d;l++)s(n(o[l]));else s(n(t));return i.sort(a._sortCompareFn),i}(t)},a._sortCompareFn=function(e,t){var r="number"==typeof e,i="number"==typeof t;return r&&i?e-t:!r&&i?1:r&&!i?-1:e.localeCompare(t)},a._handleMaxDaysInMonth=function(e){if(1===e.month.length){var t=a.daysInMonth[e.month[0]-1];if(e.dayOfMonth[0]>t)throw Error("Invalid explicit day of month definition");return e.dayOfMonth.filter(function(e){return"L"===e||e<=t}).sort(a._sortCompareFn)}},a._freezeFields=function(e){for(var t=0,r=a.map.length;t<r;++t){var i=a.map[t],n=e[i];e[i]=Object.freeze(n)}return Object.freeze(e)},a.prototype._applyTimezoneShift=function(e,t,r){if("Month"===r||"Day"===r){var i=e.getTime();e[t+r](),i===e.getTime()&&(0===e.getMinutes()&&0===e.getSeconds()?e.addHour():59===e.getMinutes()&&59===e.getSeconds()&&e.subtractHour())}else{var n=e.getHours();e[t+r]();var a=e.getHours(),s=a-n;2===s?24!==this.fields.hour.length&&(this._dstStart=a):0===s&&0===e.getMinutes()&&0===e.getSeconds()&&24!==this.fields.hour.length&&(this._dstEnd=a)}},a.prototype._findSchedule=function(e){function t(e,t){for(var r=0,i=t.length;r<i;r++)if(t[r]>=e)return t[r]===e;return t[0]===e}function r(e){return e.length>0&&e.some(function(e){return"string"==typeof e&&e.indexOf("L")>=0})}for(var n=(e=e||!1)?"subtract":"add",s=new i(this._currentDate,this._tz),o=this._startDate,l=this._endDate,d=s.getTime(),c=0;c<1e4;){if(c++,e){if(o&&s.getTime()-o.getTime()<0)throw Error("Out of the timespan range")}else if(l&&l.getTime()-s.getTime()<0)throw Error("Out of the timespan range");var u=t(s.getDate(),this.fields.dayOfMonth);r(this.fields.dayOfMonth)&&(u=u||s.isLastDayOfMonth());var h=t(s.getDay(),this.fields.dayOfWeek);r(this.fields.dayOfWeek)&&(h=h||this.fields.dayOfWeek.some(function(e){if(!r([e]))return!1;var t=Number.parseInt(e[0])%7;if(Number.isNaN(t))throw Error("Invalid last weekday of the month expression: "+e);return s.getDay()===t&&s.isLastWeekdayOfMonth()}));var p=this.fields.dayOfMonth.length>=a.daysInMonth[s.getMonth()],y=this.fields.dayOfWeek.length===a.constraints[5].max-a.constraints[5].min+1,m=s.getHours();if(!u&&(!h||y)||!p&&y&&!u||p&&!y&&!h||this._nthDayOfWeek>0&&!function(e,t){if(t<6){if(8>e.getDate()&&1===t)return!0;var r=e.getDate()%7?1:0;return Math.floor((e.getDate()-e.getDate()%7)/7)+r===t}return!1}(s,this._nthDayOfWeek)){this._applyTimezoneShift(s,n,"Day");continue}if(!t(s.getMonth()+1,this.fields.month)){this._applyTimezoneShift(s,n,"Month");continue}if(t(m,this.fields.hour)){if(this._dstEnd===m&&!e){this._dstEnd=null,this._applyTimezoneShift(s,"add","Hour");continue}}else if(this._dstStart!==m){this._dstStart=null,this._applyTimezoneShift(s,n,"Hour");continue}else if(!t(m-1,this.fields.hour)){s[n+"Hour"]();continue}if(!t(s.getMinutes(),this.fields.minute)){this._applyTimezoneShift(s,n,"Minute");continue}if(!t(s.getSeconds(),this.fields.second)){this._applyTimezoneShift(s,n,"Second");continue}if(d===s.getTime()){"add"===n||0===s.getMilliseconds()?this._applyTimezoneShift(s,n,"Second"):s.setMilliseconds(0);continue}break}if(c>=1e4)throw Error("Invalid expression, loop limit exceeded");return this._currentDate=new i(s,this._tz),this._hasIterated=!0,s},a.prototype.next=function(){var e=this._findSchedule();return this._isIterator?{value:e,done:!this.hasNext()}:e},a.prototype.prev=function(){var e=this._findSchedule(!0);return this._isIterator?{value:e,done:!this.hasPrev()}:e},a.prototype.hasNext=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},a.prototype.hasPrev=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(!0),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},a.prototype.iterate=function(e,t){var r=[];if(e>=0)for(var i=0,n=e;i<n;i++)try{var a=this.next();r.push(a),t&&t(a,i)}catch(e){break}else for(var i=0,n=e;i>n;i--)try{var a=this.prev();r.push(a),t&&t(a,i)}catch(e){break}return r},a.prototype.reset=function(e){this._currentDate=new i(e||this._options.currentDate)},a.prototype.stringify=function(e){for(var t=[],r=+!e,i=a.map.length;r<i;++r){var s=a.map[r],o=this.fields[s],l=a.constraints[r];"dayOfMonth"===s&&1===this.fields.month.length?l={min:1,max:a.daysInMonth[this.fields.month[0]-1]}:"dayOfWeek"===s&&(l={min:0,max:6},o=7===o[o.length-1]?o.slice(0,-1):o),t.push(n(o,l.min,l.max))}return t.join(" ")},a.parse=function(e,t){var r=this;return"function"==typeof t&&(t={}),function(e,t){t||(t={}),void 0===t.currentDate&&(t.currentDate=new i(void 0,r._tz)),a.predefined[e]&&(e=a.predefined[e]);var n=[],s=(e+"").trim().split(/\s+/);if(s.length>6)throw Error("Invalid cron expression");for(var o=a.map.length-s.length,l=0,d=a.map.length;l<d;++l){var c=a.map[l],u=s[s.length>d?l:l-o];if(l<o||!u)n.push(a._parseField(c,a.parseDefaults[l],a.constraints[l]));else{var h="dayOfWeek"===c?function(e){var r=e.split("#");if(r.length>1){var i=+r[r.length-1];if(/,/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");if(/\//.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");if(/-/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");if(r.length>2||Number.isNaN(i)||i<1||i>5)throw Error("Constraint error, invalid dayOfWeek occurrence number (#)");return t.nthDayOfWeek=i,r[0]}return e}(u):u;n.push(a._parseField(c,h,a.constraints[l]))}}for(var p={},l=0,d=a.map.length;l<d;l++)p[a.map[l]]=n[l];var y=a._handleMaxDaysInMonth(p);return p.dayOfMonth=y||p.dayOfMonth,new a(p,t)}(e,t)},a.fieldsToExpression=function(e,t){for(var r={},i=0,n=a.map.length;i<n;++i){var s=a.map[i],o=e[s];!function(e,t,r){if(!t)throw Error("Validation error, Field "+e+" is missing");if(0===t.length)throw Error("Validation error, Field "+e+" contains no values");for(var i=0,n=t.length;i<n;i++){var s=t[i];if(!a._isValidConstraintChar(r,s)&&("number"!=typeof s||Number.isNaN(s)||s<r.min||s>r.max))throw Error("Constraint error, got value "+s+" expected range "+r.min+"-"+r.max)}}(s,o,a.constraints[i]);for(var l=[],d=-1;++d<o.length;)l[d]=o[d];if((o=l.sort(a._sortCompareFn).filter(function(e,t,r){return!t||e!==r[t-1]})).length!==l.length)throw Error("Validation error, Field "+s+" contains duplicate values");r[s]=o}var c=a._handleMaxDaysInMonth(r);return r.dayOfMonth=c||r.dayOfMonth,new a(r,t||{})},t.exports=a},42397,(e,t,r)=>{"use strict";var i=e.r(84961);function n(){}n._parseEntry=function(e){var t=e.split(" ");if(6===t.length)return{interval:i.parse(e)};if(t.length>6)return{interval:i.parse(t.slice(0,6).join(" ")),command:t.slice(6,t.length)};throw Error("Invalid entry: "+e)},n.parseExpression=function(e,t){return i.parse(e,t)},n.fieldsToExpression=function(e,t){return i.fieldsToExpression(e,t)},n.parseString=function(e){for(var t=e.split("\n"),r={variables:{},expressions:[],errors:{}},i=0,a=t.length;i<a;i++){var s=t[i],o=null,l=s.trim();if(l.length>0)if(l.match(/^#/))continue;else if(o=l.match(/^(.*)=(.*)$/))r.variables[o[1]]=o[2];else{var d=null;try{d=n._parseEntry("0 "+l),r.expressions.push(d.interval)}catch(e){r.errors[l]=e}}}return r},n.parseFile=function(t,r){e.r(22734).readFile(t,function(e,t){return e?void r(e):r(null,n.parseString(t.toString()))})},t.exports=n},34737,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.TARGET_URL_HEADER=void 0,r.withMiddleware=function(...e){let t=e=>"function"==typeof e;return r=>i(this,void 0,void 0,function*(){let i=Object.assign({},r);for(let r of e.filter(t))i=yield r(i);return i})},r.withProxy=function(e){return t=>{var i;let n;return t.headers&&r.TARGET_URL_HEADER in t.headers?Promise.resolve(t):(i=e.when,n={isBrowser:!1},"function"==typeof i?i(n):"always"===i||n.isBrowser)?Promise.resolve(Object.assign(Object.assign({},t),{url:e.targetUrl,headers:Object.assign(Object.assign({},t.headers||{}),{[r.TARGET_URL_HEADER]:t.url})})):Promise.resolve(t)}},r.TARGET_URL_HEADER="x-fal-target-url"},3425,(e,t,r)=>{"use strict";function i(e){if("number"!=typeof e||isNaN(e))throw Error(`Timeout must be a number, got ${e}`);if(e<=r.MIN_REQUEST_TIMEOUT_SECONDS)throw Error(`Timeout must be greater than ${r.MIN_REQUEST_TIMEOUT_SECONDS} seconds`);return e.toString()}Object.defineProperty(r,"__esModule",{value:!0}),r.RUNNER_HINT_HEADER=r.QUEUE_PRIORITY_HEADER=r.REQUEST_TIMEOUT_TYPE_HEADER=r.REQUEST_TIMEOUT_HEADER=r.MIN_REQUEST_TIMEOUT_SECONDS=void 0,r.validateTimeoutHeader=i,r.buildTimeoutHeaders=function(e){return void 0===e?{}:{[r.REQUEST_TIMEOUT_HEADER]:i(e)}},r.MIN_REQUEST_TIMEOUT_SECONDS=1,r.REQUEST_TIMEOUT_HEADER="x-fal-request-timeout",r.REQUEST_TIMEOUT_TYPE_HEADER="x-fal-request-timeout-type",r.QUEUE_PRIORITY_HEADER="x-fal-queue-priority",r.RUNNER_HINT_HEADER="x-fal-runner-hint"},6128,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.ValidationError=r.ApiError=void 0,r.defaultResponseHandler=l,r.resultResponseHandler=function(e){return i(this,void 0,void 0,function*(){return{data:yield l(e),requestId:e.headers.get(a)||""}})};let n=e.r(3425),a="x-fal-request-id";class s extends Error{constructor({message:e,status:t,body:r,requestId:i,timeoutType:n}){super(e),this.name="ApiError",this.status=t,this.body=r,this.requestId=i||"",this.timeoutType=n}get isUserTimeout(){return 504===this.status&&"user"===this.timeoutType}}r.ApiError=s;class o extends s{constructor(e){super(e),this.name="ValidationError"}get fieldErrors(){return"string"==typeof this.body.detail?[{loc:["body"],msg:this.body.detail,type:"value_error"}]:this.body.detail||[]}getFieldErrors(e){return this.fieldErrors.filter(t=>t.loc[t.loc.length-1]===e)}}function l(e){return i(this,void 0,void 0,function*(){var t;let{status:r,statusText:i}=e,l=null!=(t=e.headers.get("Content-Type"))?t:"",d=e.headers.get(a)||void 0,c=e.headers.get(n.REQUEST_TIMEOUT_TYPE_HEADER)||void 0;if(!e.ok){if(l.includes("application/json")){let t=yield e.json();throw new(422===r?o:s)({message:t.message||i,status:r,body:t,requestId:d,timeoutType:c})}throw new s({message:`HTTP ${r}: ${i}`,status:r,requestId:d,timeoutType:c})}return l.includes("application/json")?e.json():l.includes("text/html")?e.text():l.includes("application/octet-stream")?e.arrayBuffer():e.text()})}r.ValidationError=o},72651,(e,t,r)=>{"use strict";let i;var n=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};function a(e){if(e.split("/").length>1)return e;let[,t,r]=/^([0-9]+)-([a-zA-Z0-9-]+)$/.exec(e)||[];if(t&&r)return`${t}/${r}`;throw Error(`Invalid app id: ${e}. Must be in the format <appOwner>/<appId>`)}Object.defineProperty(r,"__esModule",{value:!0}),r.ensureEndpointIdFormat=a,r.parseEndpointId=function(e){let t=a(e).split("/");return s.includes(t[0])?{owner:t[1],alias:t[2],path:t.slice(3).join("/")||void 0,namespace:t[0]}:{owner:t[0],alias:t[1],path:t.slice(2).join("/")||void 0}},r.resolveEndpointPath=function(e,t,r){return t?`/${t.replace(/^\/+/,"")}`:e.endsWith(r)?void 0:r},r.isValidUrl=function(e){try{let{host:t}=new URL(e);return/(fal\.(ai|run))$/.test(t)}catch(e){return!1}},r.throttle=function(e,t,r=!1){let i,n;return(...a)=>{!n&&r?(e(...a),n=Date.now()):(i&&clearTimeout(i),i=setTimeout(()=>{Date.now()-n>=t&&(e(...a),n=Date.now())},t-(Date.now()-n)))}},r.isReact=function(){if(void 0===i){let e=Error().stack;i=!!e&&(e.includes("node_modules/react-dom/")||e.includes("node_modules/next/"))}return i},r.isPlainObject=function(e){return!!e&&Object.getPrototypeOf(e)===Object.prototype},r.sleep=function(e){return n(this,void 0,void 0,function*(){return new Promise(t=>setTimeout(t,e))})};let s=["workflows","comfy"]},94437,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_RETRY_OPTIONS=r.DEFAULT_RETRYABLE_STATUS_CODES=void 0,r.isRetryableNetworkError=o,r.isRetryableError=l,r.calculateBackoffDelay=d,r.executeWithRetry=function(e,t,r){return i(this,void 0,void 0,function*(){let i,n={totalAttempts:0,totalDelay:0};for(let s=0;s<=t.maxRetries;s++){n.totalAttempts++;try{return{result:yield e(),metrics:n}}catch(o){if(i=o,n.lastError=o,s===t.maxRetries||!l(o,t.retryableStatusCodes))throw o;let e=d(s,t.baseDelay,t.maxDelay,t.backoffMultiplier,t.enableJitter);n.totalDelay+=e,r&&r(s+1,o,e),yield(0,a.sleep)(e)}}throw i})};let n=e.r(6128),a=e.r(72651);r.DEFAULT_RETRYABLE_STATUS_CODES=[429,502,503,504],r.DEFAULT_RETRY_OPTIONS={maxRetries:3,baseDelay:1e3,maxDelay:3e4,backoffMultiplier:2,retryableStatusCodes:r.DEFAULT_RETRYABLE_STATUS_CODES,enableJitter:!0};let s=new Set(["ECONNABORTED","ECONNREFUSED","ECONNRESET","EAI_AGAIN","EHOSTUNREACH","ENETUNREACH","ENOTFOUND","EPIPE","ETIMEDOUT","UND_ERR_BODY_TIMEOUT","UND_ERR_CONNECT_TIMEOUT","UND_ERR_HEADERS_TIMEOUT","UND_ERR_SOCKET"]);function o(e){if(!e||"object"!=typeof e)return!1;let t=new Set,r=e,i=!1;for(;r&&"object"==typeof r&&!t.has(r);){t.add(r);let e=r.name;if("AbortError"===e||"TimeoutError"===e)return!1;let n=r.code;"string"==typeof n&&s.has(n)&&(i=!0),r=r.cause}return!!(i||e instanceof TypeError&&"string"==typeof e.message&&/fetch failed/i.test(e.message))}function l(e,t){return e instanceof n.ApiError?!e.isUserTimeout&&t.includes(e.status):o(e)}function d(e,t,r,i,n){let a=Math.min(t*Math.pow(i,e),r);if(n){let e=.25*a*(2*Math.random()-1);return Math.max(0,a+e)}return a}},52651,(e,t,r)=>{t.exports={name:"@fal-ai/client",description:"The fal.ai client for JavaScript and TypeScript",version:"1.10.1",license:"MIT",repository:{type:"git",url:"https://github.com/fal-ai/fal-js.git",directory:"libs/client"},keywords:["fal","client","ai","ml","typescript"],exports:{".":"./src/index.js","./endpoints":"./src/types/endpoints.js"},typesVersions:{"*":{endpoints:["src/types/endpoints.d.ts"]}},main:"./src/index.js",types:"./src/index.d.ts",dependencies:{"@msgpack/msgpack":"^3.0.0-beta2","eventsource-parser":"^1.1.2",robot3:"^0.4.1"},engines:{node:">=18.0.0"},type:"commonjs"}},37740,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isBrowser=function(){return!1},r.getUserAgent=function(){if(null!==i)return i;let t=e.r(52651);return i=`${t.name}/${t.version}`};let i=null},78038,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.credentialsFromEnv=void 0,r.resolveDefaultFetch=o,r.createConfig=function(e){var t;let r=Object.assign(Object.assign(Object.assign({},l),e),{fetch:null!=(t=e.fetch)?t:o(),retry:Object.assign(Object.assign({},a.DEFAULT_RETRY_OPTIONS),e.retry||{})});if(e.proxyUrl){let t="string"==typeof e.proxyUrl?{url:e.proxyUrl}:e.proxyUrl;r=Object.assign(Object.assign({},r),{requestMiddleware:(0,i.withMiddleware)(r.requestMiddleware,(0,i.withProxy)({targetUrl:t.url,when:t.when}))})}let{credentials:n,suppressLocalCredentialsWarning:d}=r,c="function"==typeof n?n():n;return(0,s.isBrowser)()&&c&&!d&&console.warn("The fal credentials are exposed in the browser's environment. That's not recommended for production use cases."),r},r.getRestApiUrl=function(){return"https://rest.fal.ai"};let i=e.r(34737),n=e.r(6128),a=e.r(94437),s=e.r(37740);function o(){if("u"<typeof fetch)throw Error("Your environment does not support fetch. Please provide your own fetch implementation.");return fetch}r.credentialsFromEnv=()=>{if("u">typeof process&&process.env&&(void 0!==process.env.FAL_KEY||void 0!==process.env.FAL_KEY_ID&&void 0!==process.env.FAL_KEY_SECRET))return void 0!==process.env.FAL_KEY?process.env.FAL_KEY:process.env.FAL_KEY_ID?`${process.env.FAL_KEY_ID}:${process.env.FAL_KEY_SECRET}`:void 0};let l={credentials:r.credentialsFromEnv,suppressLocalCredentialsWarning:!1,requestMiddleware:e=>Promise.resolve(e),responseHandler:n.defaultResponseHandler,retry:a.DEFAULT_RETRY_OPTIONS}},26496,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})},n=e.e&&e.e.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};Object.defineProperty(r,"__esModule",{value:!0}),r.dispatchRequest=function(e){return i(this,void 0,void 0,function*(){var t;let r,{targetUrl:d,input:c,config:u,options:h={}}=e,{credentials:p,requestMiddleware:y,responseHandler:m,fetch:f}=u,b=Object.assign(Object.assign({},u.retry),h.retry||{}),g=()=>i(this,void 0,void 0,function*(){var t,r,i;let a=(0,s.isBrowser)()?{}:{"User-Agent":(0,s.getUserAgent)()},o="function"==typeof p?p():p,{method:u,url:b,headers:g}=yield y({method:(null!=(r=null!=(t=e.method)?t:h.method)?r:"post").toUpperCase(),url:d,headers:e.headers}),v=Object.assign(Object.assign(Object.assign(Object.assign({},o?{Authorization:`Key ${o}`}:{}),{Accept:"application/json","Content-Type":"application/json"}),a),null!=g?g:{}),{responseHandler:K,retry:S}=h,E=n(h,["responseHandler","retry"]),I=yield f(b,Object.assign(Object.assign(Object.assign(Object.assign({},E),{method:u,headers:Object.assign(Object.assign({},v),null!=(i=E.headers)?i:{})}),!l&&{mode:"cors"}),{signal:h.signal,body:"get"!==u.toLowerCase()&&c?JSON.stringify(c):void 0}));return yield(null!=K?K:m)(I)});for(let e=0;e<=b.maxRetries;e++)try{return yield g()}catch(n){if(r=n,e===b.maxRetries||!(0,a.isRetryableError)(n,b.retryableStatusCodes)||(null==(t=h.signal)?void 0:t.aborted))throw n;let i=(0,a.calculateBackoffDelay)(e,b.baseDelay,b.maxDelay,b.backoffMultiplier,b.enableJitter);yield(0,o.sleep)(i)}throw r})},r.buildUrl=function(e,t={}){var r,i;let n=(null!=(r=t.method)?r:"post").toLowerCase(),a=(null!=(i=t.path)?i:"").replace(/^\//,"").replace(/\/{2,}/,"/"),s=t.input,l=Object.assign(Object.assign({},t.query||{}),"get"===n?s:{}),d=Object.keys(l).length>0?`?${new URLSearchParams(l).toString()}`:"";if((0,o.isValidUrl)(e)){let t=e.endsWith("/")?e:`${e}/`;return`${t}${a}${d}`}let c=(0,o.ensureEndpointIdFormat)(e),u=t.subdomain?`${t.subdomain}.`:"",h=`https://${u}fal.run/${c}/${a}`;return`${h.replace(/\/$/,"")}${d}`};let a=e.r(94437),s=e.r(37740),o=e.r(72651),l="u">typeof navigator&&(null==navigator?void 0:navigator.userAgent)==="Cloudflare-Workers"},25416,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.OBJECT_LIFECYCYLE_PREFERENCE_HEADER=void 0,r.getExpirationDurationSeconds=l,r.buildObjectLifecycleHeaders=function(e){let t=d(e);return t?{[r.OBJECT_LIFECYCYLE_PREFERENCE_HEADER]:JSON.stringify(t)}:{}},r.createStorageClient=function({config:e}){let t={upload:(t,r)=>i(this,void 0,void 0,function*(){let s=null==r?void 0:r.lifecycle;if(t.size>0x5a00000)return yield function(e,t,r){return i(this,void 0,void 0,function*(){let{fetch:s,responseHandler:o}=t,l=e.type||"application/octet-stream",{upload_url:u,file_url:h}=yield function(e,t,r,s){return i(this,void 0,void 0,function*(){let i=e.name||`${Date.now()}.${c(r)}`,o={},l=d(s);return l&&(o["X-Fal-Object-Lifecycle"]=JSON.stringify(l)),yield(0,a.dispatchRequest)({method:"POST",targetUrl:`${(0,n.getRestApiUrl)()}/storage/upload/initiate-multipart?storage_type=fal-cdn-v3`,input:{content_type:r,file_name:i},config:t,headers:o})})}(e,t,l,r),p=Math.ceil(e.size/0xa00000),y=new URL(u),m=[];for(let r=0;r<p;r++){let n=0xa00000*r,a=Math.min(n+0xa00000,e.size),s=e.slice(n,a),o=r+1,l=`${y.origin}${y.pathname}/${o}${y.search}`;m.push((yield function e(t,r,n){return i(this,arguments,void 0,function*(t,r,i,n=3){if(0===n)throw Error("Part upload failed, retries exhausted");let{fetch:a,responseHandler:s}=i;try{let e=yield a(t,{method:"PUT",body:r});return yield s(e)}catch(a){return yield e(t,r,i,n-1)}})}(l,s,t)))}let f=`${y.origin}${y.pathname}/complete${y.search}`,b=yield s(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({parts:m.map(e=>({partNumber:e.partNumber,etag:e.etag}))})});return yield o(b),h})}(t,e,s);let o=t.type||"application/octet-stream",{fetch:l,responseHandler:u}=e,{upload_url:h,file_url:p}=yield function(e,t,r,s){return i(this,void 0,void 0,function*(){let i=e.name||`${Date.now()}.${c(r)}`,o={},l=d(s);return l&&(o["X-Fal-Object-Lifecycle"]=JSON.stringify(l)),yield(0,a.dispatchRequest)({method:"POST",targetUrl:`${(0,n.getRestApiUrl)()}/storage/upload/initiate?storage_type=fal-cdn-v3`,input:{content_type:r,file_name:i},config:t,headers:o})})}(t,e,o,s),y=yield l(h,{method:"PUT",body:t,headers:{"Content-Type":t.type||"application/octet-stream"}});return yield u(y),p}),transformInput:e=>i(this,void 0,void 0,function*(){if(Array.isArray(e))return Promise.all(e.map(e=>t.transformInput(e)));if(e instanceof Blob)return yield t.upload(e);if((0,s.isPlainObject)(e)){let r=Object.entries(e).map(e=>i(this,[e],void 0,function*([e,r]){return[e,(yield t.transformInput(r))]}));return Object.fromEntries((yield Promise.all(r)))}return e})};return t};let n=e.r(78038),a=e.r(26496),s=e.r(72651);r.OBJECT_LIFECYCYLE_PREFERENCE_HEADER="x-fal-object-lifecycle-preference";let o={never:void 0,immediate:60,"1h":3600,"1d":86400,"7d":604800,"30d":2592e3,"1y":31536e3};function l(e){let{expiresIn:t}=e;if(void 0!==t)return"number"==typeof t?t:o[t]}function d(e){if(!e)return;let t=l(e),r={};return void 0!==t&&(r.expiration_duration_seconds=t),void 0!==e.initialAcl&&(r.initial_acl=e.initialAcl),Object.keys(r).length>0?r:void 0}function c(e){var t;let[,r]=e.split("/");return null!=(t=r.split(/[-;]/)[0])?t:"bin"}},29509,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let i=[239,187,191];r.createParser=function(e){let t,r,n,a,s,o,l;return d(),{feed:function(d){var c;r=r?r+d:d,t&&(c=r,i.every((e,t)=>c.charCodeAt(t)===e))&&(r=r.slice(i.length)),t=!1;let u=r.length,h=0,p=!1;for(;h<u;){let t;p&&("\n"===r[h]&&++h,p=!1);let i=-1,d=a;for(let e=n;i<0&&e<u;++e)":"===(t=r[e])&&d<0?d=e-h:"\r"===t?(p=!0,i=e-h):"\n"===t&&(i=e-h);if(i<0){n=u-h,a=d;break}n=0,a=-1,function(t,r,i,n){if(0===n){l.length>0&&(e({type:"event",id:s,event:o||void 0,data:l.slice(0,-1)}),l="",s=void 0),o=void 0;return}let a=i<0,d=t.slice(r,r+(a?n:i)),c=0;c=a?n:" "===t[r+i+1]?i+2:i+1;let u=r+c,h=n-c,p=t.slice(u,u+h).toString();if("data"===d)l+=p?"".concat(p,"\n"):"\n";else if("event"===d)o=p;else if("id"!==d||p.includes("\0")){if("retry"===d){let t=parseInt(p,10);Number.isNaN(t)||e({type:"reconnect-interval",value:t})}}else s=p}(r,h,d,i),h+=i+1}h===u?r="":h>0&&(r=r.slice(h))},reset:d};function d(){t=!0,r="",n=0,a=-1,s=void 0,o=void 0,l=""}}},42156,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.TOKEN_EXPIRATION_SECONDS=void 0,r.getTemporaryAuthToken=function(e,t){return i(this,void 0,void 0,function*(){let i=(0,s.parseEndpointId)(e),o=yield(0,a.dispatchRequest)({method:"POST",targetUrl:`${(0,n.getRestApiUrl)()}/tokens/`,config:t,input:{allowed_apps:[i.alias],token_expiration:r.TOKEN_EXPIRATION_SECONDS}});return"string"!=typeof o&&o.detail?o.detail:o})};let n=e.r(78038),a=e.r(26496),s=e.r(72651);r.TOKEN_EXPIRATION_SECONDS=120},10868,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})},n=e.e&&e.e.__await||function(e){return this instanceof n?(this.v=e,this):new n(e)},a=e.e&&e.e.__asyncGenerator||function(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,a=r.apply(e,t||[]),s=[];return i={},o("next"),o("throw"),o("return",function(e){return function(t){return Promise.resolve(t).then(e,c)}}),i[Symbol.asyncIterator]=function(){return this},i;function o(e,t){a[e]&&(i[e]=function(t){return new Promise(function(r,i){s.push([e,t,r,i])>1||l(e,t)})},t&&(i[e]=t(i[e])))}function l(e,t){try{var r;(r=a[e](t)).value instanceof n?Promise.resolve(r.value.v).then(d,c):u(s[0][2],r)}catch(e){u(s[0][3],e)}}function d(e){l("next",e)}function c(e){l("throw",e)}function u(e,t){e(t),s.shift(),s.length&&l(s[0][0],s[0][1])}};Object.defineProperty(r,"__esModule",{value:!0}),r.FalStream=void 0,r.createStreamingClient=function({config:e,storage:t}){return{stream(r,n){return i(this,void 0,void 0,function*(){let i=n.input?yield t.transformInput(n.input):void 0;return new h(r,e,Object.assign(Object.assign({},n),{input:i}))})}}};let s=e.r(29509),o=e.r(42156),l=e.r(26496),d=e.r(6128),c=e.r(72651),u="text/event-stream";class h{constructor(e,t,r){var n;this.listeners=new Map,this.buffer=[],this.currentData=void 0,this.lastEventTimestamp=0,this.streamClosed=!1,this._requestId=null,this.abortController=new AbortController,this.start=()=>i(this,void 0,void 0,function*(){var e,t,r;let{endpointId:n,options:a}=this,{input:s,method:d="post",connectionMode:h="server",tokenProvider:p}=a;try{if("client"===h){let r=(0,c.ensureEndpointIdFormat)(n),i=null!=(e=(0,c.resolveEndpointPath)(n,void 0,"/stream"))?e:"",l=p?()=>p(`${r}${i}`):()=>(console.warn('[fal.stream] Using the default token provider is deprecated. Please provide a `tokenProvider` function when using `connectionMode: "client"`. See https://docs.fal.ai/fal-client/authentication for more information.'),(0,o.getTemporaryAuthToken)(n,this.config)),h=yield l(),{fetch:y}=this.config,m=new URL(this.url);m.searchParams.set("fal_jwt_token",h);let f=yield y(m.toString(),{method:d.toUpperCase(),headers:{accept:null!=(t=a.accept)?t:u,"content-type":"application/json"},body:s&&"get"!==d?JSON.stringify(s):void 0,signal:this.abortController.signal});return this._requestId=f.headers.get("x-fal-request-id"),yield this.handleResponse(f)}return yield(0,l.dispatchRequest)({method:d.toUpperCase(),targetUrl:this.url,input:s,config:this.config,options:{headers:{accept:null!=(r=a.accept)?r:u},responseHandler:e=>i(this,void 0,void 0,function*(){return this._requestId=e.headers.get("x-fal-request-id"),yield this.handleResponse(e)}),signal:this.abortController.signal}})}catch(e){this.handleError(e)}}),this.handleResponse=e=>i(this,void 0,void 0,function*(){var t,r;if(!e.ok){try{yield(0,d.defaultResponseHandler)(e)}catch(e){this.emit("error",e)}return}let n=e.body;if(!n)return void this.emit("error",new d.ApiError({message:"Response body is empty.",status:400,body:void 0,requestId:this._requestId||void 0}));if(!(null!=(t=e.headers.get("content-type"))?t:"").startsWith(u)){let e=n.getReader(),t=()=>{e.read().then(({done:e,value:r})=>{e?this.emit("done",this.currentData):(this.buffer.push(r),this.currentData=r,this.emit("data",r),t())})};t();return}let a=new TextDecoder("utf-8"),o=e.body.getReader(),l=(0,s.createParser)(e=>{if("event"===e.type){let t=e.data;try{let e=JSON.parse(t);this.buffer.push(e),this.currentData=e,this.emit("data",e),this.emit("message",e)}catch(e){this.emit("error",e)}}}),c=null!=(r=this.options.timeout)?r:15e3,h=()=>i(this,void 0,void 0,function*(){let{value:e,done:t}=yield o.read();this.lastEventTimestamp=Date.now(),l.feed(a.decode(e)),Date.now()-this.lastEventTimestamp>c&&this.emit("error",new d.ApiError({message:`Event stream timed out after ${(c/1e3).toFixed(0)} seconds with no messages.`,status:408,requestId:this._requestId||void 0})),t?this.emit("done",this.currentData):h().catch(this.handleError)});h().catch(this.handleError)}),this.handleError=e=>{var t;if("AbortError"===e.name||this.signal.aborted)return;let r=e instanceof d.ApiError?e:new d.ApiError({message:null!=(t=e.message)?t:"An unknown error occurred",status:500,requestId:this._requestId||void 0});this.emit("error",r)},this.on=(e,t)=>{var r;this.listeners.has(e)||this.listeners.set(e,[]),null==(r=this.listeners.get(e))||r.push(t)},this.emit=(e,t)=>{for(let r of this.listeners.get(e)||[])r(t)},this.done=()=>i(this,void 0,void 0,function*(){return this.donePromise}),this.abort=e=>{this.streamClosed||this.abortController.abort(e)},this.endpointId=e,this.config=t,this.url=null!=(n=r.url)?n:(0,l.buildUrl)(e,{path:(0,c.resolveEndpointPath)(e,void 0,"/stream"),query:r.queryParams}),this.options=r,this.donePromise=new Promise((e,t)=>{this.streamClosed&&t(new d.ApiError({message:"Streaming connection is already closed.",status:400,body:void 0,requestId:this._requestId||void 0})),this.signal.addEventListener("abort",()=>{var t;e(null!=(t=this.currentData)?t:{})}),this.on("done",t=>{this.streamClosed=!0,e(t)}),this.on("error",e=>{this.streamClosed=!0,t(e)})}),r.signal&&r.signal.addEventListener("abort",()=>{this.abortController.abort()}),this.start().catch(this.handleError)}[Symbol.asyncIterator](){return a(this,arguments,function*(){let e=!0,t=()=>e=!1;for(this.on("error",t),this.on("done",t);e||this.buffer.length>0;){let e=this.buffer.shift();e&&(yield yield n(e)),yield n(new Promise(e=>setTimeout(e,16)))}})}get signal(){return this.abortController.signal}get requestId(){return this._requestId}}r.FalStream=h},50408,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})},n=e.e&&e.e.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};Object.defineProperty(r,"__esModule",{value:!0}),r.createQueueClient=void 0;let a=e.r(3425),s=e.r(26496),o=e.r(6128),l=e.r(94437),d=e.r(25416),c=e.r(10868),u=e.r(72651),h={maxRetries:3,baseDelay:1e3,maxDelay:6e4,retryableStatusCodes:l.DEFAULT_RETRYABLE_STATUS_CODES},p={maxRetries:5,baseDelay:1e3,maxDelay:3e4,retryableStatusCodes:[...l.DEFAULT_RETRYABLE_STATUS_CODES,500]};r.createQueueClient=({config:e,storage:t})=>{let r={submit(r,o){return i(this,void 0,void 0,function*(){let{webhookUrl:i,priority:l,hint:c,startTimeout:u,headers:p,storageSettings:y}=o,m=n(o,["webhookUrl","priority","hint","startTimeout","headers","storageSettings"]),f=o.input?yield t.transformInput(o.input):void 0,b=Object.fromEntries(Object.entries(null!=p?p:{}).map(([e,t])=>[e.toLowerCase(),t]));return(0,s.dispatchRequest)({method:o.method,targetUrl:(0,s.buildUrl)(r,Object.assign(Object.assign({},m),{subdomain:"queue",query:i?{fal_webhook:i}:void 0})),headers:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},b),(0,d.buildObjectLifecycleHeaders)(y)),{[a.QUEUE_PRIORITY_HEADER]:null!=l?l:"normal"}),c&&{[a.RUNNER_HINT_HEADER]:c}),(0,a.buildTimeoutHeaders)(u)),input:f,config:e,options:{signal:o.abortSignal,retry:h}})})},status(t,r){return i(this,arguments,void 0,function*(t,{requestId:r,logs:i=!1,abortSignal:n}){let a=(0,u.parseEndpointId)(t),o=a.namespace?`${a.namespace}/`:"";return(0,s.dispatchRequest)({method:"get",targetUrl:(0,s.buildUrl)(`${o}${a.owner}/${a.alias}`,{subdomain:"queue",query:{logs:i?"1":"0"},path:`/requests/${r}/status`}),config:e,options:{signal:n,retry:p}})})},streamStatus(t,r){return i(this,arguments,void 0,function*(t,{requestId:r,logs:i=!1,connectionMode:n}){let a=(0,u.parseEndpointId)(t),o=a.namespace?`${a.namespace}/`:"",l={logs:i?"1":"0"},d=(0,s.buildUrl)(`${o}${a.owner}/${a.alias}`,{subdomain:"queue",path:`/requests/${r}/status/stream`,query:l});return new c.FalStream(t,e,{url:d,method:"get",connectionMode:n,queryParams:l})})},subscribeToStatus(e,t){return i(this,void 0,void 0,function*(){let n,a=t.requestId,s=t.timeout,o=()=>{};if("streaming"===t.mode){let i=yield r.streamStatus(e,{requestId:a,logs:t.logs,connectionMode:"connectionMode"in t?t.connectionMode:void 0}),l=[];s&&(n=setTimeout(()=>{throw i.abort(),r.cancel(e,{requestId:a}).catch(o),Error(`Client timed out waiting for the request to complete after ${s}ms`)},s)),i.on("data",e=>{t.onQueueUpdate&&("logs"in e&&Array.isArray(e.logs)&&e.logs.length>0&&l.push(...e.logs),t.onQueueUpdate("logs"in e?Object.assign(Object.assign({},e),{logs:l}):e))});let d=yield i.done();return n&&clearTimeout(n),d}return new Promise((l,d)=>{var c;let u,h="pollInterval"in t&&"number"==typeof t.pollInterval&&null!=(c=t.pollInterval)?c:500,p=()=>{n&&clearTimeout(n),u&&clearTimeout(u)};s&&(n=setTimeout(()=>{p(),r.cancel(e,{requestId:a}).catch(o),d(Error(`Client timed out waiting for the request to complete after ${s}ms`))},s));let y=()=>i(this,void 0,void 0,function*(){var i;try{let n=yield r.status(e,{requestId:a,logs:null!=(i=t.logs)&&i,abortSignal:t.abortSignal});if(t.onQueueUpdate&&t.onQueueUpdate(n),"COMPLETED"===n.status){p(),l(n);return}u=setTimeout(y,h)}catch(e){p(),d(e)}});y().catch(d)})})},result(t,r){return i(this,arguments,void 0,function*(t,{requestId:r,abortSignal:i}){let n=(0,u.parseEndpointId)(t),a=n.namespace?`${n.namespace}/`:"";return(0,s.dispatchRequest)({method:"get",targetUrl:(0,s.buildUrl)(`${a}${n.owner}/${n.alias}`,{subdomain:"queue",path:`/requests/${r}`}),config:Object.assign(Object.assign({},e),{responseHandler:o.resultResponseHandler}),options:{signal:i,retry:h}})})},cancel(t,r){return i(this,arguments,void 0,function*(t,{requestId:r,abortSignal:i}){let n=(0,u.parseEndpointId)(t),a=n.namespace?`${n.namespace}/`:"";yield(0,s.dispatchRequest)({method:"put",targetUrl:(0,s.buildUrl)(`${a}${n.owner}/${n.alias}`,{subdomain:"queue",path:`/requests/${r}/cancel`}),config:e,options:{signal:i}})})}};return r}},11105,e=>{"use strict";let t=new TextEncoder;function r(e,t,r){let i=t,n=i+r,a=[],s="";for(;i<n;){let t=e[i++];if((128&t)==0)a.push(t);else if((224&t)==192){let r=63&e[i++];a.push((31&t)<<6|r)}else if((240&t)==224){let r=63&e[i++],n=63&e[i++];a.push((31&t)<<12|r<<6|n)}else if((248&t)==240){let r=(7&t)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++];r>65535&&(r-=65536,a.push(r>>>10&1023|55296),r=56320|1023&r),a.push(r)}else a.push(t);a.length>=4096&&(s+=String.fromCharCode(...a),a.length=0)}return a.length>0&&(s+=String.fromCharCode(...a)),s}let i=new TextDecoder;class n{type;data;constructor(e,t){this.type=e,this.data=t}}class a extends Error{constructor(e){super(e),Object.setPrototypeOf(this,Object.create(a.prototype)),Object.defineProperty(this,"name",{configurable:!0,enumerable:!1,value:a.name})}}function s(e,t,r){let i=Math.floor(r/0x100000000);e.setUint32(t,i),e.setUint32(t+4,r)}function o(e,t){return 0x100000000*e.getInt32(t)+e.getUint32(t+4)}function l({sec:e,nsec:t}){if(e>=0&&t>=0&&e<=0x3ffffffff)if(0===t&&e<=0xffffffff){let t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,e),t}else{let r=e/0x100000000,i=new Uint8Array(8),n=new DataView(i.buffer);return n.setUint32(0,t<<2|3&r),n.setUint32(4,0|e),i}{let r=new Uint8Array(12),i=new DataView(r.buffer);return i.setUint32(0,t),s(i,4,e),r}}function d(e){let t=e.getTime(),r=Math.floor(t/1e3),i=(t-1e3*r)*1e6,n=Math.floor(i/1e9);return{sec:r+n,nsec:i-1e9*n}}function c(e){return e instanceof Date?l(d(e)):null}function u(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength);switch(e.byteLength){case 4:return{sec:t.getUint32(0),nsec:0};case 8:{let e=t.getUint32(0);return{sec:(3&e)*0x100000000+t.getUint32(4),nsec:e>>>2}}case 12:return{sec:o(t,4),nsec:t.getUint32(0)};default:throw new a(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${e.length}`)}}function h(e){let t=u(e);return new Date(1e3*t.sec+t.nsec/1e6)}let p={type:-1,encode:c,decode:h};class y{static defaultCodec=new y;__brand;builtInEncoders=[];builtInDecoders=[];encoders=[];decoders=[];constructor(){this.register(p)}register({type:e,encode:t,decode:r}){if(e>=0)this.encoders[e]=t,this.decoders[e]=r;else{let i=-1-e;this.builtInEncoders[i]=t,this.builtInDecoders[i]=r}}tryToEncode(e,t){for(let r=0;r<this.builtInEncoders.length;r++){let i=this.builtInEncoders[r];if(null!=i){let a=i(e,t);if(null!=a)return new n(-1-r,a)}}for(let r=0;r<this.encoders.length;r++){let i=this.encoders[r];if(null!=i){let a=i(e,t);if(null!=a)return new n(r,a)}}return e instanceof n?e:null}decode(e,t,r){let i=t<0?this.builtInDecoders[-1-t]:this.decoders[t];return i?i(e,t,r):new n(t,e)}}function m(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e instanceof ArrayBuffer||"u">typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer?new Uint8Array(e):Uint8Array.from(e)}class f{extensionCodec;context;useBigInt64;maxDepth;initialBufferSize;sortKeys;forceFloat32;ignoreUndefined;forceIntegerToFloat;pos;view;bytes;entered=!1;constructor(e){this.extensionCodec=e?.extensionCodec??y.defaultCodec,this.context=e?.context,this.useBigInt64=e?.useBigInt64??!1,this.maxDepth=e?.maxDepth??100,this.initialBufferSize=e?.initialBufferSize??2048,this.sortKeys=e?.sortKeys??!1,this.forceFloat32=e?.forceFloat32??!1,this.ignoreUndefined=e?.ignoreUndefined??!1,this.forceIntegerToFloat=e?.forceIntegerToFloat??!1,this.pos=0,this.view=new DataView(new ArrayBuffer(this.initialBufferSize)),this.bytes=new Uint8Array(this.view.buffer)}clone(){return new f({extensionCodec:this.extensionCodec,context:this.context,useBigInt64:this.useBigInt64,maxDepth:this.maxDepth,initialBufferSize:this.initialBufferSize,sortKeys:this.sortKeys,forceFloat32:this.forceFloat32,ignoreUndefined:this.ignoreUndefined,forceIntegerToFloat:this.forceIntegerToFloat})}reinitializeState(){this.pos=0}encodeSharedRef(e){if(this.entered)return this.clone().encodeSharedRef(e);try{return this.entered=!0,this.reinitializeState(),this.doEncode(e,1),this.bytes.subarray(0,this.pos)}finally{this.entered=!1}}encode(e){if(this.entered)return this.clone().encode(e);try{return this.entered=!0,this.reinitializeState(),this.doEncode(e,1),this.bytes.slice(0,this.pos)}finally{this.entered=!1}}doEncode(e,t){if(t>this.maxDepth)throw Error(`Too deep objects in depth ${t}`);null==e?this.encodeNil():"boolean"==typeof e?this.encodeBoolean(e):"number"==typeof e?this.forceIntegerToFloat?this.encodeNumberAsFloat(e):this.encodeNumber(e):"string"==typeof e?this.encodeString(e):this.useBigInt64&&"bigint"==typeof e?this.encodeBigInt64(e):this.encodeObject(e,t)}ensureBufferSizeToWrite(e){let t=this.pos+e;this.view.byteLength<t&&this.resizeBuffer(2*t)}resizeBuffer(e){let t=new ArrayBuffer(e),r=new Uint8Array(t),i=new DataView(t);r.set(this.bytes),this.view=i,this.bytes=r}encodeNil(){this.writeU8(192)}encodeBoolean(e){!1===e?this.writeU8(194):this.writeU8(195)}encodeNumber(e){!this.forceIntegerToFloat&&Number.isSafeInteger(e)?e>=0?e<128?this.writeU8(e):e<256?(this.writeU8(204),this.writeU8(e)):e<65536?(this.writeU8(205),this.writeU16(e)):e<0x100000000?(this.writeU8(206),this.writeU32(e)):this.useBigInt64?this.encodeNumberAsFloat(e):(this.writeU8(207),this.writeU64(e)):e>=-32?this.writeU8(224|e+32):e>=-128?(this.writeU8(208),this.writeI8(e)):e>=-32768?(this.writeU8(209),this.writeI16(e)):e>=-0x80000000?(this.writeU8(210),this.writeI32(e)):this.useBigInt64?this.encodeNumberAsFloat(e):(this.writeU8(211),this.writeI64(e)):this.encodeNumberAsFloat(e)}encodeNumberAsFloat(e){this.forceFloat32?(this.writeU8(202),this.writeF32(e)):(this.writeU8(203),this.writeF64(e))}encodeBigInt64(e){e>=BigInt(0)?(this.writeU8(207),this.writeBigUint64(e)):(this.writeU8(211),this.writeBigInt64(e))}writeStringHeader(e){if(e<32)this.writeU8(160+e);else if(e<256)this.writeU8(217),this.writeU8(e);else if(e<65536)this.writeU8(218),this.writeU16(e);else if(e<0x100000000)this.writeU8(219),this.writeU32(e);else throw Error(`Too long string: ${e} bytes in UTF-8`)}encodeString(e){let r=function(e){let t=e.length,r=0,i=0;for(;i<t;){let n=e.charCodeAt(i++);if((0xffffff80&n)==0){r++;continue}if((0xfffff800&n)==0)r+=2;else{if(n>=55296&&n<=56319&&i<t){let t=e.charCodeAt(i);(64512&t)==56320&&(++i,n=((1023&n)<<10)+(1023&t)+65536)}(0xffff0000&n)==0?r+=3:r+=4}}return r}(e);this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),function(e,r,i){if(e.length>50)t.encodeInto(e,r.subarray(i));else!function(e,t,r){let i=e.length,n=r,a=0;for(;a<i;){let r=e.charCodeAt(a++);if((0xffffff80&r)==0){t[n++]=r;continue}if((0xfffff800&r)==0)t[n++]=r>>6&31|192;else{if(r>=55296&&r<=56319&&a<i){let t=e.charCodeAt(a);(64512&t)==56320&&(++a,r=((1023&r)<<10)+(1023&t)+65536)}(0xffff0000&r)==0?t[n++]=r>>12&15|224:(t[n++]=r>>18&7|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128}t[n++]=63&r|128}}(e,r,i)}(e,this.bytes,this.pos),this.pos+=r}encodeObject(e,t){let r=this.extensionCodec.tryToEncode(e,this.context);if(null!=r)this.encodeExtension(r);else if(Array.isArray(e))this.encodeArray(e,t);else if(ArrayBuffer.isView(e))this.encodeBinary(e);else if("object"==typeof e)this.encodeMap(e,t);else throw Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`)}encodeBinary(e){let t=e.byteLength;if(t<256)this.writeU8(196),this.writeU8(t);else if(t<65536)this.writeU8(197),this.writeU16(t);else if(t<0x100000000)this.writeU8(198),this.writeU32(t);else throw Error(`Too large binary: ${t}`);let r=m(e);this.writeU8a(r)}encodeArray(e,t){let r=e.length;if(r<16)this.writeU8(144+r);else if(r<65536)this.writeU8(220),this.writeU16(r);else if(r<0x100000000)this.writeU8(221),this.writeU32(r);else throw Error(`Too large array: ${r}`);for(let r of e)this.doEncode(r,t+1)}countWithoutUndefined(e,t){let r=0;for(let i of t)void 0!==e[i]&&r++;return r}encodeMap(e,t){let r=Object.keys(e);this.sortKeys&&r.sort();let i=this.ignoreUndefined?this.countWithoutUndefined(e,r):r.length;if(i<16)this.writeU8(128+i);else if(i<65536)this.writeU8(222),this.writeU16(i);else if(i<0x100000000)this.writeU8(223),this.writeU32(i);else throw Error(`Too large map object: ${i}`);for(let i of r){let r=e[i];this.ignoreUndefined&&void 0===r||(this.encodeString(i),this.doEncode(r,t+1))}}encodeExtension(e){if("function"==typeof e.data){let t=e.data(this.pos+6),r=t.length;if(r>=0x100000000)throw Error(`Too large extension object: ${r}`);this.writeU8(201),this.writeU32(r),this.writeI8(e.type),this.writeU8a(t);return}let t=e.data.length;if(1===t)this.writeU8(212);else if(2===t)this.writeU8(213);else if(4===t)this.writeU8(214);else if(8===t)this.writeU8(215);else if(16===t)this.writeU8(216);else if(t<256)this.writeU8(199),this.writeU8(t);else if(t<65536)this.writeU8(200),this.writeU16(t);else if(t<0x100000000)this.writeU8(201),this.writeU32(t);else throw Error(`Too large extension object: ${t}`);this.writeI8(e.type),this.writeU8a(e.data)}writeU8(e){this.ensureBufferSizeToWrite(1),this.view.setUint8(this.pos,e),this.pos++}writeU8a(e){let t=e.length;this.ensureBufferSizeToWrite(t),this.bytes.set(e,this.pos),this.pos+=t}writeI8(e){this.ensureBufferSizeToWrite(1),this.view.setInt8(this.pos,e),this.pos++}writeU16(e){this.ensureBufferSizeToWrite(2),this.view.setUint16(this.pos,e),this.pos+=2}writeI16(e){this.ensureBufferSizeToWrite(2),this.view.setInt16(this.pos,e),this.pos+=2}writeU32(e){this.ensureBufferSizeToWrite(4),this.view.setUint32(this.pos,e),this.pos+=4}writeI32(e){this.ensureBufferSizeToWrite(4),this.view.setInt32(this.pos,e),this.pos+=4}writeF32(e){this.ensureBufferSizeToWrite(4),this.view.setFloat32(this.pos,e),this.pos+=4}writeF64(e){this.ensureBufferSizeToWrite(8),this.view.setFloat64(this.pos,e),this.pos+=8}writeU64(e){var t,r;this.ensureBufferSizeToWrite(8),t=this.view,r=this.pos,t.setUint32(r,e/0x100000000),t.setUint32(r+4,e),this.pos+=8}writeI64(e){this.ensureBufferSizeToWrite(8),s(this.view,this.pos,e),this.pos+=8}writeBigUint64(e){this.ensureBufferSizeToWrite(8),this.view.setBigUint64(this.pos,e),this.pos+=8}writeBigInt64(e){this.ensureBufferSizeToWrite(8),this.view.setBigInt64(this.pos,e),this.pos+=8}}function b(e){return`${e<0?"-":""}0x${Math.abs(e).toString(16).padStart(2,"0")}`}let g="array",v="map_key",K="map_value",S=e=>{if("string"==typeof e||"number"==typeof e)return e;throw new a("The type of key must be string or number but "+typeof e)};class E{stack=[];stackHeadPosition=-1;get length(){return this.stackHeadPosition+1}top(){return this.stack[this.stackHeadPosition]}pushArrayState(e){let t=this.getUninitializedStateFromPool();t.type=g,t.position=0,t.size=e,t.array=Array(e)}pushMapState(e){let t=this.getUninitializedStateFromPool();t.type=v,t.readCount=0,t.size=e,t.map={}}getUninitializedStateFromPool(){return this.stackHeadPosition++,this.stackHeadPosition===this.stack.length&&this.stack.push({type:void 0,size:0,array:void 0,position:0,readCount:0,map:void 0,key:null}),this.stack[this.stackHeadPosition]}release(e){if(this.stack[this.stackHeadPosition]!==e)throw Error("Invalid stack state. Released state is not on top of the stack.");e.type===g&&(e.size=0,e.array=void 0,e.position=0,e.type=void 0),(e.type===v||e.type===K)&&(e.size=0,e.map=void 0,e.readCount=0,e.type=void 0),this.stackHeadPosition--}reset(){this.stack.length=0,this.stackHeadPosition=-1}}let I=new DataView(new ArrayBuffer(0)),k=new Uint8Array(I.buffer);try{I.getInt8(0)}catch(e){if(!(e instanceof RangeError))throw Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access")}let w=RangeError("Insufficient data"),x=new class{hit=0;miss=0;caches;maxKeyLength;maxLengthPerKey;constructor(e=16,t=16){this.maxKeyLength=e,this.maxLengthPerKey=t,this.caches=[];for(let e=0;e<this.maxKeyLength;e++)this.caches.push([])}canBeCached(e){return e>0&&e<=this.maxKeyLength}find(e,t,r){let i=this.caches[r-1];t:for(let n of i){let i=n.bytes;for(let n=0;n<r;n++)if(i[n]!==e[t+n])continue t;return n.str}return null}store(e,t){let r=this.caches[e.length-1],i={bytes:e,str:t};r.length>=this.maxLengthPerKey?r[Math.random()*r.length|0]=i:r.push(i)}decode(e,t,i){let n=this.find(e,t,i);if(null!=n)return this.hit++,n;this.miss++;let a=r(e,t,i),s=Uint8Array.prototype.slice.call(e,t,t+i);return this.store(s,a),a}};class j{extensionCodec;context;useBigInt64;rawStrings;maxStrLength;maxBinLength;maxArrayLength;maxMapLength;maxExtLength;keyDecoder;mapKeyConverter;totalPos=0;pos=0;view=I;bytes=k;headByte=-1;stack=new E;entered=!1;constructor(e){this.extensionCodec=e?.extensionCodec??y.defaultCodec,this.context=e?.context,this.useBigInt64=e?.useBigInt64??!1,this.rawStrings=e?.rawStrings??!1,this.maxStrLength=e?.maxStrLength??0xffffffff,this.maxBinLength=e?.maxBinLength??0xffffffff,this.maxArrayLength=e?.maxArrayLength??0xffffffff,this.maxMapLength=e?.maxMapLength??0xffffffff,this.maxExtLength=e?.maxExtLength??0xffffffff,this.keyDecoder=e?.keyDecoder!==void 0?e.keyDecoder:x,this.mapKeyConverter=e?.mapKeyConverter??S}clone(){return new j({extensionCodec:this.extensionCodec,context:this.context,useBigInt64:this.useBigInt64,rawStrings:this.rawStrings,maxStrLength:this.maxStrLength,maxBinLength:this.maxBinLength,maxArrayLength:this.maxArrayLength,maxMapLength:this.maxMapLength,maxExtLength:this.maxExtLength,keyDecoder:this.keyDecoder})}reinitializeState(){this.totalPos=0,this.headByte=-1,this.stack.reset()}setBuffer(e){let t=m(e);this.bytes=t,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.pos=0}appendBuffer(e){if(-1!==this.headByte||this.hasRemaining(1)){let t=this.bytes.subarray(this.pos),r=m(e),i=new Uint8Array(t.length+r.length);i.set(t),i.set(r,t.length),this.setBuffer(i)}else this.setBuffer(e)}hasRemaining(e){return this.view.byteLength-this.pos>=e}createExtraByteError(e){let{view:t,pos:r}=this;return RangeError(`Extra ${t.byteLength-r} of ${t.byteLength} byte(s) found at buffer[${e}]`)}decode(e){if(this.entered)return this.clone().decode(e);try{this.entered=!0,this.reinitializeState(),this.setBuffer(e);let t=this.doDecodeSync();if(this.hasRemaining(1))throw this.createExtraByteError(this.pos);return t}finally{this.entered=!1}}*decodeMulti(e){if(this.entered){let t=this.clone();yield*t.decodeMulti(e);return}try{for(this.entered=!0,this.reinitializeState(),this.setBuffer(e);this.hasRemaining(1);)yield this.doDecodeSync()}finally{this.entered=!1}}async decodeAsync(e){if(this.entered)return this.clone().decodeAsync(e);try{let t;this.entered=!0;let r=!1;for await(let i of e){if(r)throw this.entered=!1,this.createExtraByteError(this.totalPos);this.appendBuffer(i);try{t=this.doDecodeSync(),r=!0}catch(e){if(!(e instanceof RangeError))throw e}this.totalPos+=this.pos}if(r){if(this.hasRemaining(1))throw this.createExtraByteError(this.totalPos);return t}let{headByte:i,pos:n,totalPos:a}=this;throw RangeError(`Insufficient data in parsing ${b(i)} at ${a} (${n} in the current buffer)`)}finally{this.entered=!1}}decodeArrayStream(e){return this.decodeMultiAsync(e,!0)}decodeStream(e){return this.decodeMultiAsync(e,!1)}async *decodeMultiAsync(e,t){if(this.entered){let r=this.clone();yield*r.decodeMultiAsync(e,t);return}try{this.entered=!0;let r=t,i=-1;for await(let n of e){if(t&&0===i)throw this.createExtraByteError(this.totalPos);this.appendBuffer(n),r&&(i=this.readArraySize(),r=!1,this.complete());try{for(;yield this.doDecodeSync(),0!=--i;);}catch(e){if(!(e instanceof RangeError))throw e}this.totalPos+=this.pos}}finally{this.entered=!1}}doDecodeSync(){r:for(;;){let e,t=this.readHeadByte();if(t>=224)e=t-256;else if(t<192)if(t<128)e=t;else if(t<144){let r=t-128;if(0!==r){this.pushMapState(r),this.complete();continue}e={}}else if(t<160){let r=t-144;if(0!==r){this.pushArrayState(r),this.complete();continue}e=[]}else{let r=t-160;e=this.decodeString(r,0)}else if(192===t)e=null;else if(194===t)e=!1;else if(195===t)e=!0;else if(202===t)e=this.readF32();else if(203===t)e=this.readF64();else if(204===t)e=this.readU8();else if(205===t)e=this.readU16();else if(206===t)e=this.readU32();else if(207===t)e=this.useBigInt64?this.readU64AsBigInt():this.readU64();else if(208===t)e=this.readI8();else if(209===t)e=this.readI16();else if(210===t)e=this.readI32();else if(211===t)e=this.useBigInt64?this.readI64AsBigInt():this.readI64();else if(217===t){let t=this.lookU8();e=this.decodeString(t,1)}else if(218===t){let t=this.lookU16();e=this.decodeString(t,2)}else if(219===t){let t=this.lookU32();e=this.decodeString(t,4)}else if(220===t){let t=this.readU16();if(0!==t){this.pushArrayState(t),this.complete();continue}e=[]}else if(221===t){let t=this.readU32();if(0!==t){this.pushArrayState(t),this.complete();continue}e=[]}else if(222===t){let t=this.readU16();if(0!==t){this.pushMapState(t),this.complete();continue}e={}}else if(223===t){let t=this.readU32();if(0!==t){this.pushMapState(t),this.complete();continue}e={}}else if(196===t){let t=this.lookU8();e=this.decodeBinary(t,1)}else if(197===t){let t=this.lookU16();e=this.decodeBinary(t,2)}else if(198===t){let t=this.lookU32();e=this.decodeBinary(t,4)}else if(212===t)e=this.decodeExtension(1,0);else if(213===t)e=this.decodeExtension(2,0);else if(214===t)e=this.decodeExtension(4,0);else if(215===t)e=this.decodeExtension(8,0);else if(216===t)e=this.decodeExtension(16,0);else if(199===t){let t=this.lookU8();e=this.decodeExtension(t,1)}else if(200===t){let t=this.lookU16();e=this.decodeExtension(t,2)}else if(201===t){let t=this.lookU32();e=this.decodeExtension(t,4)}else throw new a(`Unrecognized type byte: ${b(t)}`);this.complete();let r=this.stack;for(;r.length>0;){let t=r.top();if(t.type===g)if(t.array[t.position]=e,t.position++,t.position===t.size)e=t.array,r.release(t);else continue r;else if(t.type===v){if("__proto__"===e)throw new a("The key __proto__ is not allowed");t.key=this.mapKeyConverter(e),t.type=K;continue r}else if(t.map[t.key]=e,t.readCount++,t.readCount===t.size)e=t.map,r.release(t);else{t.key=null,t.type=v;continue r}}return e}}readHeadByte(){return -1===this.headByte&&(this.headByte=this.readU8()),this.headByte}complete(){this.headByte=-1}readArraySize(){let e=this.readHeadByte();switch(e){case 220:return this.readU16();case 221:return this.readU32();default:if(e<160)return e-144;throw new a(`Unrecognized array type byte: ${b(e)}`)}}pushMapState(e){if(e>this.maxMapLength)throw new a(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);this.stack.pushMapState(e)}pushArrayState(e){if(e>this.maxArrayLength)throw new a(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);this.stack.pushArrayState(e)}decodeString(e,t){return!this.rawStrings||this.stateIsMapKey()?this.decodeUtf8String(e,t):this.decodeBinary(e,t)}decodeUtf8String(e,t){let n;if(e>this.maxStrLength)throw new a(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);if(this.bytes.byteLength<this.pos+t+e)throw w;let s=this.pos+t;return n=this.stateIsMapKey()&&this.keyDecoder?.canBeCached(e)?this.keyDecoder.decode(this.bytes,s,e):function(e,t,n){let a;if(!(n>200))return r(e,t,n);return a=e.subarray(t,t+n),i.decode(a)}(this.bytes,s,e),this.pos+=t+e,n}stateIsMapKey(){return this.stack.length>0&&this.stack.top().type===v}decodeBinary(e,t){if(e>this.maxBinLength)throw new a(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);if(!this.hasRemaining(e+t))throw w;let r=this.pos+t,i=this.bytes.subarray(r,r+e);return this.pos+=t+e,i}decodeExtension(e,t){if(e>this.maxExtLength)throw new a(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);let r=this.view.getInt8(this.pos+t),i=this.decodeBinary(e,t+1);return this.extensionCodec.decode(i,r,this.context)}lookU8(){return this.view.getUint8(this.pos)}lookU16(){return this.view.getUint16(this.pos)}lookU32(){return this.view.getUint32(this.pos)}readU8(){let e=this.view.getUint8(this.pos);return this.pos++,e}readI8(){let e=this.view.getInt8(this.pos);return this.pos++,e}readU16(){let e=this.view.getUint16(this.pos);return this.pos+=2,e}readI16(){let e=this.view.getInt16(this.pos);return this.pos+=2,e}readU32(){let e=this.view.getUint32(this.pos);return this.pos+=4,e}readI32(){let e=this.view.getInt32(this.pos);return this.pos+=4,e}readU64(){var e,t;let r=(e=this.view,t=this.pos,0x100000000*e.getUint32(t)+e.getUint32(t+4));return this.pos+=8,r}readI64(){let e=o(this.view,this.pos);return this.pos+=8,e}readU64AsBigInt(){let e=this.view.getBigUint64(this.pos);return this.pos+=8,e}readI64AsBigInt(){let e=this.view.getBigInt64(this.pos);return this.pos+=8,e}readF32(){let e=this.view.getFloat32(this.pos);return this.pos+=4,e}readF64(){let e=this.view.getFloat64(this.pos);return this.pos+=8,e}}async function*A(e){let t=e.getReader();try{for(;;){let{done:e,value:r}=await t.read();if(e)return;yield r}}finally{t.releaseLock()}}function T(e){return null!=e[Symbol.asyncIterator]?e:A(e)}async function D(e,t){let r=T(e);return new j(t).decodeAsync(r)}e.s([],58478),e.i(58478),e.s(["DecodeError",0,a,"Decoder",0,j,"EXT_TIMESTAMP",0,-1,"Encoder",0,f,"ExtData",0,n,"ExtensionCodec",0,y,"decode",0,function(e,t){return new j(t).decode(e)},"decodeArrayStream",0,function(e,t){let r=T(e);return new j(t).decodeArrayStream(r)},"decodeAsync",0,D,"decodeMulti",0,function(e,t){return new j(t).decodeMulti(e)},"decodeMultiStream",0,function(e,t){let r=T(e);return new j(t).decodeStream(r)},"decodeTimestampExtension",0,h,"decodeTimestampToTimeSpec",0,u,"encode",0,function(e,t){return new f(t).encodeSharedRef(e)},"encodeDateToTimeSpec",0,d,"encodeTimeSpecToTimestamp",0,l,"encodeTimestampExtension",0,c],11105)},4180,(e,t,r)=>{"use strict";function i(e){return{enumerable:!0,value:e}}function n(e){return{enumerable:!0,writable:!0,value:e}}Object.defineProperty(r,"__esModule",{value:!0});let a={},s=()=>!0,o=()=>({}),l=e=>e,d=(e,t,r,i)=>e.apply(r,i)&&t.apply(r,i),c=(e,t,r,[i,n])=>t.call(r,e.call(r,i,n),n),u=(e,t)=>Object.freeze(Object.create(e,t));function h(e,t,r){return e.reduce((e,t)=>function(...i){return r(e,t,this,i)},t)}function p(e){return u(this,{fn:i(e)})}let y={},m=p.bind(y),f={},b=p.bind(f);function g(e,t){return t.filter(t=>e.isPrototypeOf(t))}function v(e,t,...r){let n=h(g(f,r).map(e=>e.fn),s,d),a=h(g(y,r).map(e=>e.fn),l,c);return u(this,{from:i(e),to:i(t),guards:i(n),reducers:i(a)})}let K={},S={},E=v.bind(K),I=v.bind(S,null);function k(e,t,r){return D(t,e,r,this.immediates)||e}function w(e){let t=new Map;for(let r of e)t.has(r.from)||t.set(r.from,[]),t.get(r.from).push(r);return t}let x={enter:l},j={enter(e,t,r){let n=this.fn.call(t,t.context,r);return T.isPrototypeOf(n)?u(A,{machine:i(n),transitions:i(this.transitions)}).enter(e,t,r):(n.then(e=>t.send({type:"done",data:e})).catch(e=>t.send({type:"error",error:e})),e)}},A={enter(e,t,r){if(t.child=C(this.machine,e=>{t.onChange(e),t.child==e&&e.machine.state.value.final&&(delete t.child,t.send({type:"done",data:e.context}))},t.context,r),t.child.machine.state.value.final){let r=t.child.context;return delete t.child,D(t,e,{type:"done",data:r},this.transitions.get("done"))}return e}},T={get state(){return{name:this.current,value:this.states[this.current]}}};function D(e,t,r,n){let{context:s}=e;for(let{to:o,guards:l,reducers:d}of n)if(l(s,r)){e.context=d.call(e,s,r);let n=t.original||t,l=u(n,{current:i(o),original:{value:n}});return a._onEnter&&a._onEnter(t,o,e.context,s,r),l.state.value.enter(l,e,r)}}let O={send(e){this.machine=function(e,t){let r=t.type||t,{machine:i}=e,{value:n,name:s}=i.state;return n.transitions.has(r)?D(e,i,t,n.transitions.get(r))||i:(a._send&&a._send(r,s),i)}(this,e),this.onChange(this)}};function C(e,t,r,a){let s=Object.create(O,{machine:n(e),context:n(e.context(r,a)),onChange:i(t)});return s.send=s.send.bind(s),s.machine=s.machine.state.value.enter(s.machine,s,a),s}r.action=e=>m((t,r)=>!!~e(t,r)&&t),r.createMachine=function(e,t,r=o){return"string"!=typeof e&&(r=t||o,e=Object.keys(t=e)[0]),a._create&&a._create(e,t),u(T,{context:i(r),current:i(e),states:i(t)})},r.d=a,r.guard=b,r.immediate=I,r.interpret=C,r.invoke=function(e,...t){let r=i(w(t));return T.isPrototypeOf(e)?u(A,{machine:i(e),transitions:r}):u(j,{fn:i(e),transitions:r})},r.reduce=m,r.state=function(...e){let t=g(K,e),r=g(S,e),n={final:i(0===e.length),transitions:i(w(t))};return r.length&&(n.immediates=i(r),n.enter=i(k)),u(x,n)},r.transition=E},30632,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.createRealtimeClient=function({config:e}){return{connect(t,r){let c,u,h,{clientOnly:p=(0,d.isReact)()&&!(0,l.isBrowser)(),connectionKey:S=crypto.randomUUID(),maxBuffering:E,path:I,throttleInterval:k=128,encodeMessage:w,decodeMessage:x,tokenProvider:j,tokenExpirationSeconds:A}=r;if(p&&!(0,l.isBrowser)())return v;let T=null!=w?w:e=>e instanceof Uint8Array?e:(0,n.encode)(e),D=null!=x?x:e=>(function(e){return i(this,void 0,void 0,function*(){if("string"==typeof e)return JSON.parse(e);let t=e=>i(this,void 0,void 0,function*(){return e instanceof Uint8Array?e:e instanceof Blob?new Uint8Array((yield e.arrayBuffer())):new Uint8Array(e)});return e instanceof ArrayBuffer||e instanceof Uint8Array||e instanceof Blob?(0,n.decode)((yield t(e))):e})})(e),O=0;b.set(S,{decodeMessage:D,onError:r.onError,onResult:r.onResult});let C=function(e,t,r){if(!f.has(e)){let i=(0,a.interpret)(y,r);f.set(e,{service:i,throttledSend:t>0?(0,d.throttle)(i.send,t,!0):i.send})}return f.get(e)}(S,k,({context:r,machine:i,send:n})=>{var a;let{enqueuedMessage:l,token:p,websocket:y}=r;if(u=l,"active"===i.current&&l&&(null==y?void 0:y.readyState)===WebSocket.OPEN&&n({type:"send",message:l}),"authRequired"===i.current&&void 0===p&&c!==i.current){n({type:"initiateAuth"});let r=++O,i=(0,d.ensureEndpointIdFormat)(t),o=null!=(a=(0,d.resolveEndpointPath)(t,I,"/realtime"))?a:"",l=j?()=>j(`${i}${o}`):()=>(console.warn("[fal.realtime] Using the default token provider is deprecated. Please provide a `tokenProvider` function to `fal.realtime.connect()`. See https://docs.fal.ai/model-apis/client#client-side-usage-with-token-provider for more information."),(0,s.getTemporaryAuthToken)(t,e)),c=j?A:s.TOKEN_EXPIRATION_SECONDS,u=void 0!==c?()=>{clearTimeout(h),h=setTimeout(()=>{r===O&&l().then(e=>{r===O&&(queueMicrotask(()=>{n({type:"authenticated",token:e})}),u())}).catch(()=>{r!==O||(h=setTimeout(()=>{u()},Math.round(.05*c*1e3)))})},Math.round(.9*c*1e3))}:g;l().then(e=>{queueMicrotask(()=>{n({type:"authenticated",token:e})}),u()}).catch(e=>{queueMicrotask(()=>{n({type:"unauthorized",error:e})})})}if("connecting"===i.current&&c!==i.current&&void 0!==p){let e=new WebSocket(function(e,{token:t,maxBuffering:r,path:i}){var n;if(void 0!==r&&(r<1||r>60))throw Error("The `maxBuffering` must be between 1 and 60 (inclusive)");let a=new URLSearchParams({fal_jwt_token:t});void 0!==r&&a.set("max_buffering",r.toFixed(0));let s=(0,d.ensureEndpointIdFormat)(e),o=null!=(n=(0,d.resolveEndpointPath)(e,i,"/realtime"))?n:"";return`wss://fal.run/${s}${o}?${a.toString()}`}(t,{token:p,maxBuffering:E,path:I}));e.onopen=()=>{var t,r;n({type:"connected",websocket:e});let i=null!=(r=null==(t=C.service.context)?void 0:t.enqueuedMessage)?r:u;i&&(e.send(T(i)),C.service.context=Object.assign(Object.assign({},C.service.context),{enqueuedMessage:void 0}))},e.onclose=e=>{if(e.code!==m){let{onError:t=g}=b.get(S);t(new o.ApiError({message:`Error closing the connection: ${e.reason}`,status:e.code}))}n({type:"connectionClosed",code:e.code})},e.onerror=e=>{let{onError:t=g}=b.get(S);t(new o.ApiError({message:"Unknown error",status:500}))},e.onmessage=e=>{let{decodeMessage:t=D,onResult:r,onError:i=g}=b.get(S);!function({data:e,decodeMessage:t,onResult:r,onError:i,send:n}){Promise.resolve(t?t(e):e).then(e=>{if("error"===e.status&&"Unauthorized"===e.error)return void n({type:"unauthorized",error:Error("Unauthorized")});if("error"!==e.status&&"x-fal-message"!==e.type&&!K(e))return void r(e);if(K(e)){if("TIMEOUT"===e.error)return;i(new o.ApiError({message:`${e.error}: ${e.reason}`,status:400,body:e}));return}}).catch(e=>{var t;i(new o.ApiError({message:null!=(t=null==e?void 0:e.message)?t:"Failed to decode realtime message",status:400}))})}({data:e.data,decodeMessage:t,onResult:r,onError:i,send:n})}}"active"===c&&"active"!==i.current&&(clearTimeout(h),h=void 0),c=i.current});return{send:e=>{C.throttledSend({type:"send",message:T(e)})},close:()=>{C.service.send({type:"close"})}}}}};let n=e.r(11105),a=e.r(4180),s=e.r(42156),o=e.r(6128),l=e.r(37740),d=e.r(72651);function c(e,t){return Object.assign(Object.assign({},e),{enqueuedMessage:t.message})}function u(e){return e.websocket&&e.websocket.readyState===WebSocket.OPEN&&e.websocket.close(),Object.assign(Object.assign({},e),{websocket:void 0})}function h(e){return Object.assign(Object.assign({},e),{token:void 0})}function p(e,t){return Object.assign(Object.assign({},e),{token:t.token})}let y=(0,a.createMachine)("idle",{idle:(0,a.state)((0,a.transition)("send","connecting",(0,a.reduce)(c)),(0,a.transition)("close","idle",(0,a.reduce)(u))),connecting:(0,a.state)((0,a.transition)("connecting","connecting"),(0,a.transition)("connected","active",(0,a.reduce)(function(e,t){return Object.assign(Object.assign({},e),{websocket:t.websocket})})),(0,a.transition)("connectionClosed","idle",(0,a.reduce)(u)),(0,a.transition)("send","connecting",(0,a.reduce)(c)),(0,a.transition)("close","idle",(0,a.reduce)(u)),(0,a.immediate)("authRequired",(0,a.guard)(function(e){return void 0===e.token}))),authRequired:(0,a.state)((0,a.transition)("initiateAuth","authInProgress"),(0,a.transition)("send","authRequired",(0,a.reduce)(c)),(0,a.transition)("close","idle",(0,a.reduce)(u))),authInProgress:(0,a.state)((0,a.transition)("authenticated","connecting",(0,a.reduce)(p)),(0,a.transition)("unauthorized","idle",(0,a.reduce)(h),(0,a.reduce)(u)),(0,a.transition)("send","authInProgress",(0,a.reduce)(c)),(0,a.transition)("close","idle",(0,a.reduce)(u))),active:(0,a.state)((0,a.transition)("send","active",(0,a.reduce)(function(e,t){return e.websocket&&e.websocket.readyState===WebSocket.OPEN?(t.message instanceof Uint8Array||"string"==typeof t.message?e.websocket.send(t.message):e.websocket.send((0,n.encode)(t.message)),Object.assign(Object.assign({},e),{enqueuedMessage:void 0})):Object.assign(Object.assign({},e),{enqueuedMessage:t.message})})),(0,a.transition)("authenticated","active",(0,a.reduce)(p)),(0,a.transition)("unauthorized","idle",(0,a.reduce)(h)),(0,a.transition)("connectionClosed","idle",(0,a.reduce)(h),(0,a.reduce)(u)),(0,a.transition)("close","idle",(0,a.reduce)(h),(0,a.reduce)(u)))},()=>({enqueuedMessage:void 0})),m=1e3,f=new Map,b=new Map,g=()=>{},v={send:g,close:g};function K(e){return"x-fal-error"===e.type}},39709,(e,t,r)=>{"use strict";var i=e.e&&e.e.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,a){function s(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.createFalClient=function(e={}){let t=(0,n.createConfig)(e),r=(0,c.createStorageClient)({config:t}),h=(0,s.createQueueClient)({config:t,storage:r}),p=(0,u.createStreamingClient)({config:t,storage:r});return{queue:h,realtime:(0,o.createRealtimeClient)({config:t}),storage:r,streaming:p,stream:p.stream,run(e){return i(this,arguments,void 0,function*(e,i={}){let n=i.input?yield r.transformInput(i.input):void 0;return(0,l.dispatchRequest)({method:i.method,targetUrl:(0,l.buildUrl)(e,i),input:n,headers:Object.assign(Object.assign({},(0,c.buildObjectLifecycleHeaders)(i.storageSettings)),(0,a.buildTimeoutHeaders)(i.startTimeout)),config:Object.assign(Object.assign({},t),{responseHandler:d.resultResponseHandler}),options:{signal:i.abortSignal,retry:{maxRetries:3,baseDelay:500,maxDelay:15e3}}})})},subscribe:(e,t)=>i(this,void 0,void 0,function*(){let{request_id:r}=yield h.submit(e,t);return t.onEnqueue&&t.onEnqueue(r),yield h.subscribeToStatus(e,Object.assign({requestId:r},t)),h.result(e,{requestId:r})})}};let n=e.r(78038),a=e.r(3425),s=e.r(50408),o=e.r(30632),l=e.r(26496),d=e.r(6128),c=e.r(25416),u=e.r(10868)},13924,(e,t,r)=>{"use strict";function i(e){return e&&e.status&&e.response_url}Object.defineProperty(r,"__esModule",{value:!0}),r.isQueueStatus=i,r.isCompletedQueueStatus=function(e){return i(e)&&"COMPLETED"===e.status}},96710,(e,t,r)=>{"use strict";let i;var n=e.e&&e.e.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),a=e.e&&e.e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(r,"__esModule",{value:!0}),r.fal=r.parseEndpointId=r.isRetryableError=r.ValidationError=r.ApiError=r.withProxy=r.withMiddleware=r.createFalClient=void 0;let s=e.r(39709);var o=e.r(39709);Object.defineProperty(r,"createFalClient",{enumerable:!0,get:function(){return o.createFalClient}});var l=e.r(34737);Object.defineProperty(r,"withMiddleware",{enumerable:!0,get:function(){return l.withMiddleware}}),Object.defineProperty(r,"withProxy",{enumerable:!0,get:function(){return l.withProxy}});var d=e.r(6128);Object.defineProperty(r,"ApiError",{enumerable:!0,get:function(){return d.ApiError}}),Object.defineProperty(r,"ValidationError",{enumerable:!0,get:function(){return d.ValidationError}});var c=e.r(94437);Object.defineProperty(r,"isRetryableError",{enumerable:!0,get:function(){return c.isRetryableError}}),a(e.r(13924),r);var u=e.r(72651);Object.defineProperty(r,"parseEndpointId",{enumerable:!0,get:function(){return u.parseEndpointId}}),i=(0,s.createFalClient)(),r.fal={config(e){i=(0,s.createFalClient)(e)},get queue(){return i.queue},get realtime(){return i.realtime},get storage(){return i.storage},get streaming(){return i.streaming},run:(e,t)=>i.run(e,t),subscribe:(e,t)=>i.subscribe(e,t),stream:(e,t)=>i.stream(e,t)}},79914,e=>{"use strict";let t,r,i,n,a,s,o,l;class d{static normalize(e){return Number.isFinite(e)?{type:"fixed",delay:e}:e||void 0}static calculate(e,t,r,i,n){if(e)return(function(e,t){if(e.type in d.builtinStrategies)return d.builtinStrategies[e.type](e.delay,e.jitter);if(t)return t;throw Error(`Unknown backoff strategy ${e.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`)})(e,n)(t,e.type,r,i)}}d.builtinStrategies={fixed:function(e,t=0){return function(){return t>0?Math.floor(Math.random()*e*t+e*(1-t)):e}},exponential:function(e,t=0){return function(r){if(!(t>0))return Math.round(Math.pow(2,r-1)*e);{let i=Math.round(Math.pow(2,r-1)*e);return Math.floor(Math.random()*i*t+i*(1-t))}}}};var c,u,h,p,y,m,f,b,g,v,K,S,E,I,k,w,x,j,A,T,D,O,C,R,M,P,N=e.i(33405),J=e.i(4446),L=e.i(37702);(c=v||(v={}))[c.Init=0]="Init",c[c.Start=1]="Start",c[c.Stop=2]="Stop",c[c.GetChildrenValuesResponse=3]="GetChildrenValuesResponse",c[c.GetIgnoredChildrenFailuresResponse=4]="GetIgnoredChildrenFailuresResponse",c[c.GetDependenciesCountResponse=5]="GetDependenciesCountResponse",c[c.MoveToWaitingChildrenResponse=6]="MoveToWaitingChildrenResponse",c[c.Cancel=7]="Cancel",c[c.GetDependenciesResponse=8]="GetDependenciesResponse",(u=K||(K={}))[u.JobNotExist=-1]="JobNotExist",u[u.JobLockNotExist=-2]="JobLockNotExist",u[u.JobNotInState=-3]="JobNotInState",u[u.JobPendingChildren=-4]="JobPendingChildren",u[u.ParentJobNotExist=-5]="ParentJobNotExist",u[u.JobLockMismatch=-6]="JobLockMismatch",u[u.ParentJobCannotBeReplaced=-7]="ParentJobCannotBeReplaced",u[u.JobBelongsToJobScheduler=-8]="JobBelongsToJobScheduler",u[u.JobHasFailedChildren=-9]="JobHasFailedChildren",u[u.SchedulerJobIdCollision=-10]="SchedulerJobIdCollision",u[u.SchedulerJobSlotsBusy=-11]="SchedulerJobSlotsBusy",(h=S||(S={}))[h.Completed=0]="Completed",h[h.Error=1]="Error",h[h.Failed=2]="Failed",h[h.InitFailed=3]="InitFailed",h[h.InitCompleted=4]="InitCompleted",h[h.Log=5]="Log",h[h.MoveToDelayed=6]="MoveToDelayed",h[h.MoveToWait=7]="MoveToWait",h[h.Progress=8]="Progress",h[h.Update=9]="Update",h[h.GetChildrenValues=10]="GetChildrenValues",h[h.GetIgnoredChildrenFailures=11]="GetIgnoredChildrenFailures",h[h.GetDependenciesCount=12]="GetDependenciesCount",h[h.MoveToWaitingChildren=13]="MoveToWaitingChildren",h[h.GetDependencies=14]="GetDependencies",(p=E||(E={}))[p.ONE_MINUTE=1]="ONE_MINUTE",p[p.FIVE_MINUTES=5]="FIVE_MINUTES",p[p.FIFTEEN_MINUTES=15]="FIFTEEN_MINUTES",p[p.THIRTY_MINUTES=30]="THIRTY_MINUTES",p[p.ONE_HOUR=60]="ONE_HOUR",p[p.ONE_WEEK=10080]="ONE_WEEK",p[p.TWO_WEEKS=20160]="TWO_WEEKS",p[p.ONE_MONTH=80640]="ONE_MONTH",(y=I||(I={})).QueueName="bullmq.queue.name",y.QueueOperation="bullmq.queue.operation",y.BulkCount="bullmq.job.bulk.count",y.BulkNames="bullmq.job.bulk.names",y.JobName="bullmq.job.name",y.JobId="bullmq.job.id",y.JobKey="bullmq.job.key",y.JobIds="bullmq.job.ids",y.JobAttemptsMade="bullmq.job.attempts.made",y.DeduplicationKey="bullmq.job.deduplication.key",y.JobOptions="bullmq.job.options",y.JobProgress="bullmq.job.progress",y.QueueDrainDelay="bullmq.queue.drain.delay",y.QueueGrace="bullmq.queue.grace",y.QueueCleanLimit="bullmq.queue.clean.limit",y.QueueRateLimit="bullmq.queue.rate.limit",y.JobType="bullmq.job.type",y.QueueOptions="bullmq.queue.options",y.QueueEventMaxLength="bullmq.queue.event.max.length",y.QueueJobsState="bullmq.queue.jobs.state",y.WorkerOptions="bullmq.worker.options",y.WorkerName="bullmq.worker.name",y.WorkerId="bullmq.worker.id",y.WorkerRateLimit="bullmq.worker.rate.limit",y.WorkerDoNotWaitActive="bullmq.worker.do.not.wait.active",y.WorkerForceClose="bullmq.worker.force.close",y.WorkerStalledJobs="bullmq.worker.stalled.jobs",y.WorkerFailedJobs="bullmq.worker.failed.jobs",y.WorkerJobsToExtendLocks="bullmq.worker.jobs.to.extend.locks",y.JobFinishedTimestamp="bullmq.job.finished.timestamp",y.JobAttemptFinishedTimestamp="bullmq.job.attempt_finished_timestamp",y.JobProcessedTimestamp="bullmq.job.processed.timestamp",y.JobResult="bullmq.job.result",y.JobFailedReason="bullmq.job.failed.reason",y.FlowName="bullmq.flow.name",y.JobSchedulerId="bullmq.job.scheduler.id",y.JobStatus="bullmq.job.status",(m=k||(k={})).QueueJobsCount="bullmq.queue.jobs",m.JobsCompleted="bullmq.jobs.completed",m.JobsFailed="bullmq.jobs.failed",m.JobsDelayed="bullmq.jobs.delayed",m.JobsRetried="bullmq.jobs.retried",m.JobsWaiting="bullmq.jobs.waiting",m.JobsWaitingChildren="bullmq.jobs.waiting_children",m.JobDuration="bullmq.job.duration",(f=w||(w={}))[f.INTERNAL=0]="INTERNAL",f[f.SERVER=1]="SERVER",f[f.CLIENT=2]="CLIENT",f[f.PRODUCER=3]="PRODUCER",f[f.CONSUMER=4]="CONSUMER";var _=e.i(27699);let F={1:"Uncaught Fatal Exception",2:"Unused",3:"Internal JavaScript Parse Error",4:"Internal JavaScript Evaluation Failure",5:"Fatal Error",6:"Non-function Internal Exception Handler",7:"Internal Exception Handler Run-Time Failure",8:"Unused",9:"Invalid Argument",10:"Internal JavaScript Run-Time Failure",12:"Invalid Debug Argument",13:"Unfinished Top-Level Await"};class q extends _.EventEmitter{constructor(e,t,r={useWorkerThreads:!1}){super(),this.mainFile=e,this.processFile=t,this.opts=r,this._exitCode=null,this._signalCode=null,this._killed=!1}get pid(){if(this.childProcess)return this.childProcess.pid;if(this.worker)return Math.abs(this.worker.threadId);throw Error("No child process or worker thread")}get exitCode(){return this._exitCode}get signalCode(){return this._signalCode}get killed(){return this.childProcess?this.childProcess.killed:this._killed}async init(){let e,t=await V(process.execArgv);this.opts.useWorkerThreads?this.worker=e=new L.Worker(this.mainFile,Object.assign({execArgv:t,stdin:!0,stdout:!0,stderr:!0},this.opts.workerThreadsOptions?this.opts.workerThreadsOptions:{})):this.childProcess=e=(0,N.fork)(this.mainFile,[],Object.assign({execArgv:t,stdio:"pipe"},this.opts.workerForkOptions?this.opts.workerForkOptions:{})),e.on("exit",(t,r)=>{this._exitCode=t,r=void 0===r?null:r,this._signalCode=r,this._killed=!0,this.emit("exit",t,r),e.removeAllListeners(),this.removeAllListeners()}),e.on("error",(...e)=>this.emit("error",...e)),e.on("message",(...e)=>this.emit("message",...e)),e.on("close",(...e)=>this.emit("close",...e)),e.stdout.pipe(process.stdout),e.stderr.pipe(process.stderr),await this.initChild()}async send(e){return new Promise((t,r)=>{this.childProcess?this.childProcess.send(e,e=>{e?r(e):t()}):this.worker?t(this.worker.postMessage(e)):t()})}killProcess(e="SIGKILL"){this.childProcess?this.childProcess.kill(e):this.worker&&this.worker.terminate()}async kill(e="SIGKILL",t){var r;if(this.hasProcessExited())return;let i=(r=this.childProcess||this.worker,new Promise(e=>{r.once("exit",()=>e())}));if(this.killProcess(e),void 0!==t&&(0===t||isFinite(t))){let e=setTimeout(()=>{this.hasProcessExited()||this.killProcess("SIGKILL")},t);await i,clearTimeout(e)}await i}async initChild(){let e=new Promise((e,t)=>{let r=n=>{if(Object.values(S).includes(n.cmd)){if(n.cmd===S.InitCompleted)e();else if(n.cmd===S.InitFailed){let e=Error();e.stack=n.err.stack,e.message=n.err.message,t(e)}this.off("message",r),this.off("close",i)}},i=(e,n)=>{e>128&&(e-=128);let a=F[e]||`Unknown exit code ${e}`;t(Error(`Error initializing child: ${a} and signal ${n}`)),this.off("message",r),this.off("close",i)};this.on("message",r),this.on("close",i)});await this.send({cmd:v.Init,value:this.processFile}),await e}hasProcessExited(){return!!(null!==this.exitCode||this.signalCode)}}let G=async()=>new Promise(e=>{let t=(0,J.createServer)();t.listen(0,()=>{let{port:r}=t.address();t.close(()=>e(r))})}),V=async e=>{let t=[],r=[];for(let i=0;i<e.length;i++){let n=e[i];if(-1===n.indexOf("--inspect"))t.push(n);else{let e=n.split("=")[0],t=await G();r.push(`${e}=${t}`)}}return t.concat(r)};var U=e.i(14747);class B{constructor({mainFile:e=U.join(process.cwd(),"dist/esm/classes/main.js"),useWorkerThreads:t,workerForkOptions:r,workerThreadsOptions:i}){this.retained={},this.free={},this.opts={mainFile:e,useWorkerThreads:t,workerForkOptions:r,workerThreadsOptions:i}}async retain(e){let t=this.getFree(e).pop();if(t)return this.retained[t.pid]=t,t;(t=new q(this.opts.mainFile,e,{useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions})).on("exit",this.remove.bind(this,t));try{if(await t.init(),null!==t.exitCode||null!==t.signalCode)throw Error("Child exited before it could be retained");return this.retained[t.pid]=t,t}catch(e){throw console.error(e),this.release(t),e}}release(e){delete this.retained[e.pid],this.getFree(e.processFile).push(e)}remove(e){delete this.retained[e.pid];let t=this.getFree(e.processFile),r=t.indexOf(e);r>-1&&t.splice(r,1)}async kill(e,t="SIGKILL"){return this.remove(e),e.kill(t,3e4)}async clean(){let e=Object.values(this.retained).concat(this.getAllFree());this.retained={},this.free={},await Promise.all(e.map(e=>this.kill(e,"SIGTERM")))}getFree(e){return this.free[e]=this.free[e]||[]}getAllFree(){return Object.values(this.free).reduce((e,t)=>e.concat(t),[])}}var Y=e.i(6617);t=globalThis.AbortController?globalThis.AbortController:Y.AbortController;class z extends t{}var W=e.i(54799),$=e.i(63700);class H extends Error{constructor(e,t){super(null!=e?e:"Connection is closed"),this.cause=t,this.name="ConnectionClosedError",Object.setPrototypeOf(this,new.target.prototype)}}var Q=e.i(51775);let Z={value:null};function X(e,t,r){try{return e.apply(t,r)}catch(e){return Z.value=e,Z}}function ee(e){let t={};for(let r=0;r<e.length;r+=2)t[e[r]]=e[r+1];return t}function et(e){let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&void 0!==e[r]&&(t[t.length]=r,t[t.length]=e[r]);return t}function er(e,t){return new Promise(r=>{let i,n=()=>{null==t||t.signal.removeEventListener("abort",n),clearTimeout(i),r()};i=setTimeout(n,e),null==t||t.signal.addEventListener("abort",n)})}function ei(e,t){let r=e.getMaxListeners();e.setMaxListeners(r+t)}let en={de:"deduplication",fpof:"failParentOnFailure",cpof:"continueParentOnFailure",idof:"ignoreDependencyOnFailure",kl:"keepLogs",rdof:"removeDependencyOnFailure"},ea=Object.assign(Object.assign({},Object.entries(en).reduce((e,[t,r])=>(e[r]=t,e),{})),{debounce:"de"});function es(e){return!!e&&["connect","disconnect","duplicate"].every(t=>"function"==typeof e[t])}function eo(e){return es(e)&&!!e.isCluster}function el(e){if(e)return`${e.queue}:${e.id}`}let ed=/ERR unknown command ['`]\s*client\s*['`]/;function ec(e){if(e instanceof H)return!1;let{code:t,message:r}=e;return r!==$.CONNECTION_CLOSED_ERROR_MSG&&!r.includes("ECONNREFUSED")&&"ECONNREFUSED"!==t}let eu=(e,t,r,i="redis")=>{if(r===i){let r=Q.valid(Q.coerce(e));return Q.lt(r,t)}return!1},eh=e=>{let t={};for(let r of Object.entries(e))t[r[0]]=JSON.parse(r[1]);return t};async function ep(e,t,r,i,n,a,s){if(!e)return a();{let o,{tracer:l,contextManager:d}=e,c=d.active();s&&(o=d.fromMetadata(c,s));let u=n?`${i} ${n}`:i,h=l.startSpan(u,{kind:t},o);try{let e,n;return h.setAttributes({[I.QueueName]:r,[I.QueueOperation]:i}),e=t===w.CONSUMER&&o?h.setSpanOnContext(o):h.setSpanOnContext(c),2==a.length&&(n=d.getMetadata(e)),await d.with(e,()=>a(h,n))}catch(e){throw h.recordException(e),e}finally{h.end()}}}function ey(){if("function"==typeof W.randomUUID)return(0,W.randomUUID)();let e=(0,W.randomBytes)(16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,[e.toString("hex",0,4),e.toString("hex",4,6),e.toString("hex",6,8),e.toString("hex",8,10),e.toString("hex",10,16)].join("-")}(b=x||(x={}))[b.Idle=0]="Idle",b[b.Started=1]="Started",b[b.Terminating=2]="Terminating",b[b.Errored=3]="Errored";var em=e.i(67305),ef=e.i(24361);try{j=new TextDecoder}catch(e){}var eb=0;let eg=[];var ev=eg,eK=0,eS={},eE=0,eI=0,ek=[],ew={useRecords:!1,mapsAsObjects:!0};class ex{}let ej=new ex;ej.name="MessagePack 0xC1";var eA=!1,eT=2;class eD{constructor(e){e&&(!1===e.useRecords&&void 0===e.mapsAsObjects&&(e.mapsAsObjects=!0),e.sequential&&!1!==e.trusted&&(e.trusted=!0,!e.structures&&!1!=e.useRecords&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(A)return e6(()=>(e5(),this?this.unpack(e,t):eD.prototype.unpack.call(ew,e,t)));e.buffer||e.constructor!==ArrayBuffer||(e="u">typeof Buffer?Buffer.from(e):new Uint8Array(e)),"object"==typeof t?(T=t.end||e.length,eb=t.start||0):(eb=0,T=t>-1?t:e.length),eK=0,eI=0,O=null,ev=eg,C=null,A=e;try{M=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(t){if(A=null,e instanceof Uint8Array)throw t;throw Error("Source must be a Uint8Array or Buffer but was a "+(e&&"object"==typeof e?e.constructor.name:typeof e))}return this instanceof eD?(eS=this,this.structures?D=this.structures:(!D||D.length>0)&&(D=[])):(eS=ew,(!D||D.length>0)&&(D=[])),eO(t)}unpackMultiple(e,t){let r,i=0;try{eA=!0;let n=e.length,a=this?this.unpack(e,n):e7.unpack(e,n);if(t){if(!1===t(a,i,eb))return;for(;eb<n;)if(i=eb,!1===t(eO(),i,eb))return}else{for(r=[a];eb<n;)i=eb,r.push(eO());return r}}catch(e){throw e.lastPosition=i,e.values=r,e}finally{eA=!1,e5()}}_mergeStructures(e,t){this._onLoadedStructures&&(e=this._onLoadedStructures(e)),Object.isFrozen(e=e||[])&&(e=e.map(e=>e.slice(0)));for(let t=0,r=e.length;t<r;t++){let r=e[t];r&&(r.isShared=!0,t>=32&&(r.highByte=t-32>>5))}for(let r in e.sharedLength=e.length,t||[])if(r>=0){let i=e[r],n=t[r];n&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[r]=i),e[r]=n)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function eO(e){try{let t;if(!eS.trusted&&!eA){let e=D.sharedLength||0;e<D.length&&(D.length=e)}if(eS._readStruct&&A[eb]<64&&A[eb]>=32?(t=eS._readStruct(A,eb,T),A=null,!(e&&e.lazy)&&t&&(t=t.toJSON()),eb=T):t=eR(),C&&(eb=C.postBundlePosition,C=null),eA&&(D.restoreStructures=null),eb==T)D&&D.restoreStructures&&eC(),D=null,A=null,R&&(R=null);else if(eb>T)throw Error("Unexpected end of MessagePack data");else if(!eA){let e;try{e=JSON.stringify(t,(e,t)=>"bigint"==typeof t?`${t}n`:t).slice(0,100)}catch(t){e="(JSON view not available "+t+")"}throw Error("Data read, but end of buffer not reached "+e)}return t}catch(e){throw D&&D.restoreStructures&&eC(),e5(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||eb>T)&&(e.incomplete=!0),e}}function eC(){for(let e in D.restoreStructures)D[e]=D.restoreStructures[e];D.restoreStructures=null}function eR(){let e=A[eb++];if(e<160)if(e<128)if(e<64)return e;else{let t=D[63&e]||eS.getStructures&&eJ()[63&e];return t?(t.read||(t.read=eP(t,63&e)),t.read()):e}else if(e<144){if(e-=128,eS.mapsAsObjects){let t={};for(let r=0;r<e;r++){let e=eZ();"__proto__"===e&&(e="__proto_"),t[e]=eR()}return t}{let t=new Map;for(let r=0;r<e;r++)t.set(eR(),eR());return t}}else{let t=Array(e-=144);for(let r=0;r<e;r++)t[r]=eR();return eS.freezeData?Object.freeze(t):t}if(e<192){let t=e-160;if(eI>=eb)return O.slice(eb-eE,(eb+=t)-eE);if(0==eI&&T<140){let e=t<16?ez(t):eY(t);if(null!=e)return e}return eL(t)}{let t;switch(e){case 192:return null;case 193:if(C){if((t=eR())>0)return C[1].slice(C.position1,C.position1+=t);return C[0].slice(C.position0,C.position0-=t)}return ej;case 194:return!1;case 195:return!0;case 196:if(void 0===(t=A[eb++]))throw Error("Unexpected end of buffer");return e$(t);case 197:return t=M.getUint16(eb),eb+=2,e$(t);case 198:return t=M.getUint32(eb),eb+=4,e$(t);case 199:return eH(A[eb++]);case 200:return t=M.getUint16(eb),eb+=2,eH(t);case 201:return t=M.getUint32(eb),eb+=4,eH(t);case 202:if(t=M.getFloat32(eb),eS.useFloat32>2){let e=e8[(127&A[eb])<<1|A[eb+1]>>7];return eb+=4,(e*t+(t>0?.5:-.5)|0)/e}return eb+=4,t;case 203:return t=M.getFloat64(eb),eb+=8,t;case 204:return A[eb++];case 205:return t=M.getUint16(eb),eb+=2,t;case 206:return t=M.getUint32(eb),eb+=4,t;case 207:return"number"===eS.int64AsType?t=0x100000000*M.getUint32(eb)+M.getUint32(eb+4):"string"===eS.int64AsType?t=M.getBigUint64(eb).toString():"auto"===eS.int64AsType?(t=M.getBigUint64(eb))<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=M.getBigUint64(eb),eb+=8,t;case 208:return M.getInt8(eb++);case 209:return t=M.getInt16(eb),eb+=2,t;case 210:return t=M.getInt32(eb),eb+=4,t;case 211:return"number"===eS.int64AsType?t=0x100000000*M.getInt32(eb)+M.getUint32(eb+4):"string"===eS.int64AsType?t=M.getBigInt64(eb).toString():"auto"===eS.int64AsType?(t=M.getBigInt64(eb))>=BigInt(-2)<<BigInt(52)&&t<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=M.getBigInt64(eb),eb+=8,t;case 212:if(114==(t=A[eb++]))return e0(63&A[eb++]);{let e=ek[t];if(e)if(e.read)return eb++,e.read(eR());else if(e.noBuffer)return eb++,e();else return e(A.subarray(eb,++eb));throw Error("Unknown extension "+t)}case 213:if(114==(t=A[eb]))return eb++,e0(63&A[eb++],A[eb++]);return eH(2);case 214:return eH(4);case 215:return eH(8);case 216:return eH(16);case 217:if(t=A[eb++],eI>=eb)return O.slice(eb-eE,(eb+=t)-eE);return e_(t);case 218:if(t=M.getUint16(eb),eb+=2,eI>=eb)return O.slice(eb-eE,(eb+=t)-eE);return eF(t);case 219:if(t=M.getUint32(eb),eb+=4,eI>=eb)return O.slice(eb-eE,(eb+=t)-eE);return eq(t);case 220:return t=M.getUint16(eb),eb+=2,eV(t);case 221:return t=M.getUint32(eb),eb+=4,eV(t);case 222:return t=M.getUint16(eb),eb+=2,eU(t);case 223:return t=M.getUint32(eb),eb+=4,eU(t);default:if(e>=224)return e-256;if(void 0===e){let e=Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}throw Error("Unknown MessagePack token "+e)}}}let eM=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function eP(e,t){function r(){if(r.count++>eT){let i;try{i=e.read=Function("r","return function(){return "+(eS.freezeData?"Object.freeze":"")+"({"+e.map(e=>"__proto__"===e?"__proto_:r()":eM.test(e)?e+":r()":"["+JSON.stringify(e)+"]:r()").join(",")+"})}")(eR)}catch(e){return eT=1/0,r()}return 0===e.highByte&&(e.read=eN(t,e.read)),i()}let i={};for(let t=0,r=e.length;t<r;t++){let r=e[t];"__proto__"===r&&(r="__proto_"),i[r]=eR()}return eS.freezeData?Object.freeze(i):i}return(r.count=0,0===e.highByte)?eN(t,r):r}let eN=(e,t)=>function(){let r=A[eb++];if(0===r)return t();let i=e<32?-(e+(r<<5)):e+(r<<5),n=D[i]||eJ()[i];if(!n)throw Error("Record id is not defined for "+i);return n.read||(n.read=eP(n,e)),n.read()};function eJ(){let e=e6(()=>(A=null,eS.getStructures()));return D=eS._mergeStructures(e,D)}var eL=eG,e_=eG,eF=eG,eq=eG;function eG(e){let t;if(e<16&&(t=ez(e)))return t;if(e>64&&j)return j.decode(A.subarray(eb,eb+=e));let r=eb+e,i=[];for(t="";eb<r;){let e=A[eb++];if((128&e)==0)i.push(e);else if((224&e)==192){let t=(31&e)<<6|63&A[eb++];t<128?i.push(65533):i.push(t)}else if((240&e)==224){let t=(31&e)<<12|(63&A[eb++])<<6|63&A[eb++];t<2048||t>=55296&&t<=57343?i.push(65533):i.push(t)}else if((248&e)==240){let t=(7&e)<<18|(63&A[eb++])<<12|(63&A[eb++])<<6|63&A[eb++];t<65536||t>1114111?i.push(65533):(t>65535&&(t-=65536,i.push(t>>>10&1023|55296),t=56320|1023&t),i.push(t))}else i.push(65533);i.length>=4096&&(t+=eB.apply(String,i),i.length=0)}return i.length>0&&(t+=eB.apply(String,i)),t}function eV(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=eR();return eS.freezeData?Object.freeze(t):t}function eU(e){if(eS.mapsAsObjects){let t={};for(let r=0;r<e;r++){let e=eZ();"__proto__"===e&&(e="__proto_"),t[e]=eR()}return t}{let t=new Map;for(let r=0;r<e;r++)t.set(eR(),eR());return t}}var eB=String.fromCharCode;function eY(e){let t=eb,r=Array(e);for(let i=0;i<e;i++){let e=A[eb++];if((128&e)>0){eb=t;return}r[i]=e}return eB.apply(String,r)}function ez(e){if(e<4)if(e<2)if(0===e)return"";else{let e=A[eb++];if((128&e)>1){eb-=1;return}return eB(e)}else{let t=A[eb++],r=A[eb++];if((128&t)>0||(128&r)>0){eb-=2;return}if(e<3)return eB(t,r);let i=A[eb++];if((128&i)>0){eb-=3;return}return eB(t,r,i)}{let t=A[eb++],r=A[eb++],i=A[eb++],n=A[eb++];if((128&t)>0||(128&r)>0||(128&i)>0||(128&n)>0){eb-=4;return}if(e<6)if(4===e)return eB(t,r,i,n);else{let e=A[eb++];if((128&e)>0){eb-=5;return}return eB(t,r,i,n,e)}if(e<8){let a=A[eb++],s=A[eb++];if((128&a)>0||(128&s)>0){eb-=6;return}if(e<7)return eB(t,r,i,n,a,s);let o=A[eb++];if((128&o)>0){eb-=7;return}return eB(t,r,i,n,a,s,o)}{let a=A[eb++],s=A[eb++],o=A[eb++],l=A[eb++];if((128&a)>0||(128&s)>0||(128&o)>0||(128&l)>0){eb-=8;return}if(e<10)if(8===e)return eB(t,r,i,n,a,s,o,l);else{let e=A[eb++];if((128&e)>0){eb-=9;return}return eB(t,r,i,n,a,s,o,l,e)}if(e<12){let d=A[eb++],c=A[eb++];if((128&d)>0||(128&c)>0){eb-=10;return}if(e<11)return eB(t,r,i,n,a,s,o,l,d,c);let u=A[eb++];if((128&u)>0){eb-=11;return}return eB(t,r,i,n,a,s,o,l,d,c,u)}{let d=A[eb++],c=A[eb++],u=A[eb++],h=A[eb++];if((128&d)>0||(128&c)>0||(128&u)>0||(128&h)>0){eb-=12;return}if(e<14)if(12===e)return eB(t,r,i,n,a,s,o,l,d,c,u,h);else{let e=A[eb++];if((128&e)>0){eb-=13;return}return eB(t,r,i,n,a,s,o,l,d,c,u,h,e)}{let p=A[eb++],y=A[eb++];if((128&p)>0||(128&y)>0){eb-=14;return}if(e<15)return eB(t,r,i,n,a,s,o,l,d,c,u,h,p,y);let m=A[eb++];if((128&m)>0){eb-=15;return}return eB(t,r,i,n,a,s,o,l,d,c,u,h,p,y,m)}}}}}function eW(){let e,t=A[eb++];if(t<192)e=t-160;else switch(t){case 217:e=A[eb++];break;case 218:e=M.getUint16(eb),eb+=2;break;case 219:e=M.getUint32(eb),eb+=4;break;default:throw Error("Expected string")}return eG(e)}function e$(e){return eS.copyBuffers?Uint8Array.prototype.slice.call(A,eb,eb+=e):A.subarray(eb,eb+=e)}function eH(e){let t=A[eb++];if(ek[t]){let r;return ek[t](A.subarray(eb,r=eb+=e),e=>{eb=e;try{return eR()}finally{eb=r}})}throw Error("Unknown extension type "+t)}var eQ=Array(4096);function eZ(){let e,t=A[eb++];if(!(t>=160)||!(t<192))return eb--,eX(eR());if(t-=160,eI>=eb)return O.slice(eb-eE,(eb+=t)-eE);if(!(0==eI&&T<180))return eL(t);let r=(t<<5^(t>1?M.getUint16(eb):t>0?A[eb]:0))&4095,i=eQ[r],n=eb,a=eb+t-3,s=0;if(i&&i.bytes==t){for(;n<a;){if((e=M.getUint32(n))!=i[s++]){n=0x70000000;break}n+=4}for(a+=3;n<a;)if((e=A[n++])!=i[s++]){n=0x70000000;break}if(n===a)return eb=n,i.string;a-=3,n=eb}for(i=[],eQ[r]=i,i.bytes=t;n<a;)e=M.getUint32(n),i.push(e),n+=4;for(a+=3;n<a;)e=A[n++],i.push(e);let o=t<16?ez(t):eY(t);return null!=o?i.string=o:i.string=eL(t)}function eX(e){if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e||"bigint"==typeof e)return e.toString();if(null==e)return e+"";if(eS.allowArraysInMapKeys&&Array.isArray(e)&&e.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return e.flat().toString();throw Error(`Invalid property type for record: ${typeof e}`)}let e0=(e,t)=>{let r=eR().map(eX),i=e;void 0!==t&&(e=e<32?-((t<<5)+e):(t<<5)+e,r.highByte=t);let n=D[e];return n&&(n.isShared||eA)&&((D.restoreStructures||(D.restoreStructures=[]))[e]=n),D[e]=r,r.read=eP(r,i),r.read()};ek[0]=()=>{},ek[0].noBuffer=!0,ek[66]=e=>{let t=e.byteLength%8||8,r=BigInt(128&e[0]?e[0]-256:e[0]);for(let i=1;i<t;i++)r<<=BigInt(8),r+=BigInt(e[i]);if(e.byteLength!==t){let i=new DataView(e.buffer,e.byteOffset,e.byteLength),n=(e,t)=>{let r=t-e;if(r<=40){let r=i.getBigUint64(e);for(let n=e+8;n<t;n+=8)r<<=BigInt(64),r|=i.getBigUint64(n);return r}let a=e+(r>>4<<3),s=n(e,a),o=n(a,t);return s<<BigInt((t-a)*8)|o};r=r<<BigInt((i.byteLength-t)*8)|n(t,i.byteLength)}return r};let e1={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:"function"==typeof AggregateError?AggregateError:null};ek[101]=()=>{let e=eR();if(!e1[e[0]]){let t=Error(e[1],{cause:e[2]});return t.name=e[0],t}return e1[e[0]](e[1],{cause:e[2]})},ek[105]=e=>{let t;if(!1===eS.structuredClone)throw Error("Structured clone extension is disabled");let r=M.getUint32(eb-4);R||(R=new Map);let i=A[eb],n={target:t=i>=144&&i<160||220==i||221==i?[]:i>=128&&i<144||222==i||223==i?new Map:(i>=199&&i<=201||i>=212&&i<=216)&&115===A[eb+1]?new Set:{}};R.set(r,n);let a=eR();if(!n.used)return n.target=a;if(Object.assign(t,a),t instanceof Map)for(let[e,r]of a.entries())t.set(e,r);if(t instanceof Set)for(let e of Array.from(a))t.add(e);return t},ek[112]=e=>{if(!1===eS.structuredClone)throw Error("Structured clone extension is disabled");let t=M.getUint32(eb-4),r=R.get(t);return r.used=!0,r.target},ek[115]=()=>new Set(eR());let e2=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(e=>e+"Array"),e3="object"==typeof globalThis?globalThis:window;ek[116]=e=>{let t=e[0],r=Uint8Array.prototype.slice.call(e,1).buffer,i=e2[t];if(!i){if(16===t)return r;if(17===t)return new DataView(r);throw Error("Could not find typed array for code "+t)}return new e3[i](r)},ek[120]=()=>{let e=eR();return new RegExp(e[0],e[1])};let e4=[];function e6(e){eS&&eS._onSaveState&&eS._onSaveState();let t=T,r=eb,i=eK,n=eE,a=eI,s=O,o=ev,l=R,d=C,c=new Uint8Array(A.slice(0,T)),u=D,h=D.slice(0,D.length),p=eS,y=eA,m=e();return T=t,eb=r,eK=i,eE=n,eI=a,O=s,ev=o,R=l,C=d,A=c,eA=y,(D=u).splice(0,D.length,...h),eS=p,M=new DataView(A.buffer,A.byteOffset,A.byteLength),m}function e5(){A=null,R=null,D=null}ek[98]=e=>{let t=(e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3],r=eb;return eb+=t-e.length,C=e4,(C=[eW(),eW()]).position0=0,C.position1=0,C.postBundlePosition=eb,eb=r,eR()},ek[255]=e=>4==e.length?new Date((0x1000000*e[0]+(e[1]<<16)+(e[2]<<8)+e[3])*1e3):8==e.length?new Date(((e[0]<<22)+(e[1]<<14)+(e[2]<<6)+(e[3]>>2))/1e6+((3&e[3])*0x100000000+0x1000000*e[4]+(e[5]<<16)+(e[6]<<8)+e[7])*1e3):12==e.length?new Date(((e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3])/1e6+((128&e[4]?-0x1000000000000:0)+0x10000000000*e[6]+0x100000000*e[7]+0x1000000*e[8]+(e[9]<<16)+(e[10]<<8)+e[11])*1e3):new Date("invalid");let e8=Array(147);for(let e=0;e<256;e++)e8[e]=+("1e"+Math.floor(45.15-.30103*e));var e7=new eD({useRecords:!1});e7.unpack,e7.unpackMultiple,e7.unpack,new Uint8Array(new Float32Array(1).buffer,0,4),eD.SUPPORTS_STRUCT_HOOKS=!0;try{r=new TextEncoder}catch(e){}let e9="u">typeof Buffer,te=e9?function(e){return Buffer.allocUnsafeSlow(e)}:Uint8Array,tt=e9?Buffer:Uint8Array,tr=e9?0x100000000:0x7fd00000,ti=0,tn=null,ta=/[\u0080-\uFFFF]/,ts=Symbol("record-id");class to extends eD{constructor(e){let t,d,c,u;super(e),this.offset=0;let h=tt.prototype.utf8Write?function(e,t){return a.utf8Write(e,t,a.byteLength-t)}:!!r&&!!r.encodeInto&&function(e,t){return r.encodeInto(e,a.subarray(t)).written},p=this;e||(e={});let y=e&&e.sequential,m=e.structures||e.saveStructures,f=e.maxSharedStructures;if(null==f&&(f=32*!!m),f>8160)throw Error("Maximum maxSharedStructure is 8160");e.structuredClone&&void 0==e.moreTypes&&(this.moreTypes=!0);let b=e.maxOwnStructures;null==b&&(b=m?32:64),this.structures||!1==e.useRecords||(this.structures=[]);let g=f>32||b+f>64,v=f+64,K=f+b+64;if(K>8256)throw Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let S=[],E=0,I=0;this.pack=this.encode=function(e,r){let i;if(a||(o=(a=new te(8192)).dataView||(a.dataView=new DataView(a.buffer,0,8192)),ti=0),(l=a.length-10)-ti<2048?(o=(a=new te(a.length)).dataView||(a.dataView=new DataView(a.buffer,0,a.length)),l=a.length-10,ti=0):ti=ti+7&0x7ffffff8,t=ti,r&tv&&(ti+=255&r),u=p.structuredClone?new Map:null,p.bundleStrings&&"string"!=typeof e?(tn=[]).size=1/0:tn=null,c=p.structures){c.uninitialized&&(c=p._mergeStructures(p.getStructures()));let e=c.sharedLength||0;if(e>f)throw Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+c.sharedLength);if(!c.transitions){c.transitions=Object.create(null);for(let t=0;t<e;t++){let e=c[t];if(!e)continue;let r,i=c.transitions;for(let t=0,n=e.length;t<n;t++){let n=e[t];(r=i[n])||(r=i[n]=Object.create(null)),i=r}i[ts]=t+64}this.lastNamedStructuresLength=e}y||(c.nextId=e+64)}d&&(d=!1);try{p._writeStruct&&e&&"object"==typeof e?e.constructor===Object?O(e):e.constructor===Map||Array.isArray(e)||n.some(t=>e instanceof t)?x(e):O(e.toJSON?e.toJSON():e):x(e);let i=tn;if(tn&&tu(t,x,0),u&&u.idsToInsert){let e=u.idsToInsert.sort((e,t)=>e.offset>t.offset?1:-1),r=e.length,n=-1;for(;i&&r>0;){let a=e[--r].offset+t;a<i.stringsPosition+t&&-1===n&&(n=0),a>i.position+t?n>=0&&(n+=6):(n>=0&&(o.setUint32(i.position+t,o.getUint32(i.position+t)+n),n=-1),i=i.previous,r++)}n>=0&&i&&o.setUint32(i.position+t,o.getUint32(i.position+t)+n),(ti+=6*e.length)>l&&C(ti),p.offset=ti;let s=function(e,t){let r,i=6*t.length,n=e.length-i;for(;r=t.pop();){let t=r.offset,a=r.id;e.copyWithin(t+i,t,n);let s=t+(i-=6);e[s++]=214,e[s++]=105,e[s++]=a>>24,e[s++]=a>>16&255,e[s++]=a>>8&255,e[s++]=255&a,n=t}return e}(a.subarray(t,ti),e);return u=null,s}if(p.offset=ti,r&tb)return a.start=t,a.end=ti,a;return a.subarray(t,ti)}catch(e){throw i=e,e}finally{if(c&&(k(),d&&p.saveStructures)){let n=c.sharedLength||0,s=a.subarray(t,ti),o=(p._prepareStructures||function(e,t){return e.isCompatible=e=>{let r=!e||(t.lastNamedStructuresLength||0)===e.length;return r||t._mergeStructures(e),r},e})(c,p);if(!i){if(!1===p.saveStructures(o,o.isCompatible))return p.pack(e,r);return p.lastNamedStructuresLength=n,a.length>0x40000000&&(a=null),s}}a.length>0x40000000&&(a=null),r&tg&&(ti=t)}};const k=()=>{I<10&&I++;let e=c.sharedLength||0;if(c.length>e&&!y&&(c.length=e),E>1e4)c.transitions=null,I=0,E=0,S.length>0&&(S=[]);else if(S.length>0&&!y){for(let e=0,t=S.length;e<t;e++)S[e][ts]=0;S=[]}},w=e=>{var t=e.length;t<16?a[ti++]=144|t:t<65536?(a[ti++]=220,a[ti++]=t>>8,a[ti++]=255&t):(a[ti++]=221,o.setUint32(ti,t),ti+=4);for(let r=0;r<t;r++)x(e[r])},x=e=>{ti>l&&(a=C(ti));var r,s=typeof e;if("string"===s){let i,n=e.length;if(tn&&n>=4&&n<4096){if((tn.size+=n)>21760){let e,r,i=(tn[0]?3*tn[0].length+tn[1].length:0)+10;ti+i>l&&(a=C(ti+i)),tn.position?(r=tn,a[ti]=200,ti+=3,a[ti++]=98,e=ti-t,ti+=4,tu(t,x,0),o.setUint16(e+t-3,ti-t-e)):(a[ti++]=214,a[ti++]=98,e=ti-t,ti+=4),(tn=["",""]).previous=r,tn.size=0,tn.position=e}let r=ta.test(e);tn[+!r]+=e,a[ti++]=193,x(r?-n:n);return}i=n<32?1:n<256?2:n<65536?3:5;let s=3*n;if(ti+s>l&&(a=C(ti+s)),n<64||!h){let t,s,o,l=ti+i;for(t=0;t<n;t++)(s=e.charCodeAt(t))<128?a[l++]=s:(s<2048?a[l++]=s>>6|192:((64512&s)==55296&&(64512&(o=e.charCodeAt(t+1)))==56320?(s=65536+((1023&s)<<10)+(1023&o),t++,a[l++]=s>>18|240,a[l++]=s>>12&63|128):a[l++]=s>>12|224,a[l++]=s>>6&63|128),a[l++]=63&s|128);r=l-ti-i}else r=h(e,ti+i);r<32?a[ti++]=160|r:r<256?(i<2&&a.copyWithin(ti+2,ti+1,ti+1+r),a[ti++]=217,a[ti++]=r):r<65536?(i<3&&a.copyWithin(ti+3,ti+2,ti+2+r),a[ti++]=218,a[ti++]=r>>8,a[ti++]=255&r):(i<5&&a.copyWithin(ti+5,ti+3,ti+3+r),a[ti++]=219,o.setUint32(ti,r),ti+=4),ti+=r}else if("number"===s)if(e>>>0===e)e<32||e<128&&!1===this.useRecords||e<64&&!this._writeStruct?a[ti++]=e:e<256?(a[ti++]=204,a[ti++]=e):e<65536?(a[ti++]=205,a[ti++]=e>>8,a[ti++]=255&e):(a[ti++]=206,o.setUint32(ti,e),ti+=4);else if((0|e)===e)e>=-32?a[ti++]=256+e:e>=-128?(a[ti++]=208,a[ti++]=e+256):e>=-32768?(a[ti++]=209,o.setInt16(ti,e),ti+=2):(a[ti++]=210,o.setInt32(ti,e),ti+=4);else{let t;if((t=this.useFloat32)>0&&e<0x100000000&&e>=-0x80000000){let r;if(a[ti++]=202,o.setFloat32(ti,e),t<4||(0|(r=e*e8[(127&a[ti])<<1|a[ti+1]>>7]))===r){ti+=4;return}ti--}a[ti++]=203,o.setFloat64(ti,e),ti+=8}else if("object"===s||"function"===s)if(e){if(u){let r=u.get(e);if(r){r.id||(r.id=(u.idsToInsert||(u.idsToInsert=[])).push(r)),a[ti++]=214,a[ti++]=112,o.setUint32(ti,r.id),ti+=4;return}u.set(e,{offset:ti-t})}let d=e.constructor;if(d===Object)D(e);else if(d===Array)w(e);else if(d===Map)if(this.mapAsEmptyObject)a[ti++]=128;else for(let[t,i]of((r=e.size)<16?a[ti++]=128|r:r<65536?(a[ti++]=222,a[ti++]=r>>8,a[ti++]=255&r):(a[ti++]=223,o.setUint32(ti,r),ti+=4),e))x(t),x(i);else{for(let t=0,r=i.length;t<r;t++)if(e instanceof n[t]){let r,n=i[t];if(n.write){n.type&&(a[ti++]=212,a[ti++]=n.type,a[ti++]=0);let t=n.write.call(this,e);t===e?Array.isArray(e)?w(e):D(e):x(t);return}let s=a,d=o,c=ti;a=null;try{r=n.pack.call(this,e,e=>(a=s,s=null,(ti+=e)>l&&C(ti),{target:a,targetView:o,position:ti-e}),x)}finally{s&&(a=s,o=d,ti=c,l=a.length-10)}r&&(r.length+ti>l&&C(r.length+ti),ti=tc(r,a,ti,n.type));return}if(Array.isArray(e))w(e);else{if(e.toJSON){let t=e.toJSON();if(t!==e)return x(t)}if("function"===s)return x(this.writeFunction&&this.writeFunction(e));D(e)}}}else a[ti++]=192;else if("boolean"===s)a[ti++]=e?195:194;else if("bigint"===s){if(e<0x8000000000000000&&e>=-0x8000000000000000)a[ti++]=211,o.setBigInt64(ti,e);else if(e<0xffffffffffffffff&&e>0)a[ti++]=207,o.setBigUint64(ti,e);else if(this.largeBigIntToFloat)a[ti++]=203,o.setFloat64(ti,Number(e));else if(this.largeBigIntToString)return x(e.toString());else if(this.useBigIntExtension||this.moreTypes){let t,r=e<0?BigInt(-1):BigInt(0);if(e>>BigInt(65536)===r){let i=BigInt(0xffffffffffffffff)-BigInt(1),n=[];for(;n.push(e&i),e>>BigInt(63)!==r;)e>>=BigInt(64);(t=new Uint8Array(new BigUint64Array(n).buffer)).reverse()}else{let r=e<0,i=(r?~e:e).toString(16);if(i.length%2?i="0"+i:parseInt(i.charAt(0),16)>=8&&(i="00"+i),e9)t=Buffer.from(i,"hex");else{t=new Uint8Array(i.length/2);for(let e=0;e<t.length;e++)t[e]=parseInt(i.slice(2*e,2*e+2),16)}if(r)for(let e=0;e<t.length;e++)t[e]=~t[e]}t.length+ti>l&&C(t.length+ti),ti=tc(t,a,ti,66);return}else throw RangeError(e+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string");ti+=8}else if("undefined"===s)this.encodeUndefinedAsNil?a[ti++]=192:(a[ti++]=212,a[ti++]=0,a[ti++]=0);else throw Error("Unknown type: "+s)},j=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?e=>{let t,r;if(this.skipValues)for(let r in t=[],e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(r))&&!this.skipValues.includes(e[r])&&t.push(r);else t=Object.keys(e);let i=t.length;if(i<16?a[ti++]=128|i:i<65536?(a[ti++]=222,a[ti++]=i>>8,a[ti++]=255&i):(a[ti++]=223,o.setUint32(ti,i),ti+=4),this.coercibleKeyAsNumber)for(let n=0;n<i;n++){let i=Number(r=t[n]);x(isNaN(i)?r:i),x(e[r])}else for(let n=0;n<i;n++)x(r=t[n]),x(e[r])}:e=>{a[ti++]=222;let r=ti-t;ti+=2;let i=0;for(let t in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&(x(t),x(e[t]),i++);if(i>65535)throw Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');a[r+++t]=i>>8,a[r+t]=255&i},A=!1===this.useRecords?j:e.progressiveRecords&&!g?e=>{let r,i,n=c.transitions||(c.transitions=Object.create(null)),s=ti++-t;for(let a in e)if("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(a)){if(i=n[a])n=i;else{let o=Object.keys(e),l=n;n=c.transitions;let d=0;for(let e=0,t=o.length;e<t;e++){let t=o[e];!(i=n[t])&&(i=n[t]=Object.create(null),d++),n=i}s+t+1==ti?(ti--,R(n,o,d)):M(n,o,s,d),r=!0,n=l[a]}x(e[a])}if(!r){let r=n[ts];r?a[s+t]=r:M(n,Object.keys(e),s,0)}}:e=>{let t,r=c.transitions||(c.transitions=Object.create(null)),i=0;for(let n in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(n))&&(!(t=r[n])&&(t=r[n]=Object.create(null),i++),r=t);let n=r[ts];for(let t in n?n>=96&&g?(a[ti++]=(31&(n-=96))+96,a[ti++]=n>>5):a[ti++]=n:R(r,r.__keys__||Object.keys(e),i),e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&x(e[t])},T="function"==typeof this.useRecords&&this.useRecords,D=T?e=>{T(e)?A(e):j(e)}:A,O=e=>{let r=p._writeStruct(e,a,t,ti,c,C,(e,t,r)=>{if(r)return d=!0;ti=t;let i=a;return(x(e),k(),i!==a)?{position:ti,targetView:o,target:a}:ti});if(0===r)return D(e);ti=r},C=e=>{let r;if(e>0x1000000){if(e-t>tr)throw Error("Packed buffer would be larger than maximum buffer size");r=Math.min(tr,4096*Math.round(Math.max((e-t)*(e>0x4000000?1.25:2),4194304)/4096))}else r=(Math.max(e-t<<2,a.length-1)>>12)+1<<12;let i=new te(r);return o=i.dataView||(i.dataView=new DataView(i.buffer,0,r)),e=Math.min(e,a.length),a.copy?a.copy(i,0,t,e):i.set(a.slice(t,e)),ti-=t,t=0,l=i.length-10,a=i},R=(e,t,r)=>{let i=c.nextId;i||(i=64),i<v&&this.shouldShareStructure&&!this.shouldShareStructure(t)?((i=c.nextOwnId)<K||(i=v),c.nextOwnId=i+1):(i>=K&&(i=v),c.nextId=i+1);let n=t.highByte=i>=96&&g?i-96>>5:-1;e[ts]=i,e.__keys__=t,c[i-64]=t,i<v?(t.isShared=!0,c.sharedLength=i-63,d=!0,n>=0?(a[ti++]=(31&i)+96,a[ti++]=n):a[ti++]=i):(n>=0?(a[ti++]=213,a[ti++]=114,a[ti++]=(31&i)+96,a[ti++]=n):(a[ti++]=212,a[ti++]=114,a[ti++]=i),r&&(E+=I*r),S.length>=b&&(S.shift()[ts]=0),S.push(e),x(t))},M=(e,r,i,n)=>{let o=a,d=ti,c=l,u=t;ti=0,t=0,(a=s)||(s=a=new te(8192)),l=a.length-10,R(e,r,n),s=a;let h=ti;if(a=o,ti=d,l=c,t=u,h>1){let e=ti+h-1;e>l&&C(e);let r=i+t;a.copyWithin(r+h,r+1,ti),a.set(s.slice(0,h),r),ti=e}else a[i+t]=s[0]}}useBuffer(e){(a=e).dataView||(a.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength)),o=a.dataView,ti=0}set position(e){ti=e}get position(){return ti}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}function tl(e,t,r,i){let n=e.byteLength;if(n+1<256){var{target:a,position:s}=r(4+n);a[s++]=199,a[s++]=n+1}else if(n+1<65536){var{target:a,position:s}=r(5+n);a[s++]=200,a[s++]=n+1>>8,a[s++]=n+1&255}else{var{target:a,position:s,targetView:o}=r(7+n);a[s++]=201,o.setUint32(s,n+1),s+=4}a[s++]=116,a[s++]=t,e.buffer||(e=new Uint8Array(e)),a.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),s)}function td(e,t){let r=e.byteLength;if(r<256){var i,n,{target:i,position:n}=t(r+2);i[n++]=196,i[n++]=r}else if(r<65536){var{target:i,position:n}=t(r+3);i[n++]=197,i[n++]=r>>8,i[n++]=255&r}else{var{target:i,position:n,targetView:a}=t(r+5);i[n++]=198,a.setUint32(n,r),n+=4}i.set(e,n)}function tc(e,t,r,i){let n=e.length;switch(n){case 1:t[r++]=212;break;case 2:t[r++]=213;break;case 4:t[r++]=214;break;case 8:t[r++]=215;break;case 16:t[r++]=216;break;default:n<256?(t[r++]=199,t[r++]=n):(n<65536?(t[r++]=200,t[r++]=n>>8):(t[r++]=201,t[r++]=n>>24,t[r++]=n>>16&255,t[r++]=n>>8&255),t[r++]=255&n)}return t[r++]=i,t.set(e,r),r+=n}function tu(e,t,r){if(tn.length>0){o.setUint32(tn.position+e,ti+r-tn.position-e),tn.stringsPosition=ti-e;let i=tn;tn=null,t(i[0]),t(i[1])}}n=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,ex],i=[{pack(e,t,r){let i=e.getTime()/1e3;if((this.useTimestamp32||0===e.getMilliseconds())&&i>=0&&i<0x100000000){let{target:e,targetView:r,position:n}=t(6);e[n++]=214,e[n++]=255,r.setUint32(n,i)}else if(i>0&&i<0x100000000){let{target:r,targetView:n,position:a}=t(10);r[a++]=215,r[a++]=255,n.setUint32(a,4e6*e.getMilliseconds()+(i/1e3/0x100000000|0)),n.setUint32(a+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return t(0),r(this.onInvalidDate());let{target:e,targetView:i,position:n}=t(3);e[n++]=212,e[n++]=255,e[n++]=255}else{let{target:r,targetView:n,position:a}=t(15);r[a++]=199,r[a++]=12,r[a++]=255,n.setUint32(a,1e6*e.getMilliseconds()),n.setBigInt64(a+4,BigInt(Math.floor(i)))}}},{pack(e,t,r){if(this.setAsEmptyObject)return t(0),r({});let i=Array.from(e),{target:n,position:a}=t(3*!!this.moreTypes);this.moreTypes&&(n[a++]=212,n[a++]=115,n[a++]=0),r(i)}},{pack(e,t,r){let{target:i,position:n}=t(3*!!this.moreTypes);this.moreTypes&&(i[n++]=212,i[n++]=101,i[n++]=0),r([e.name,e.message,e.cause])}},{pack(e,t,r){let{target:i,position:n}=t(3*!!this.moreTypes);this.moreTypes&&(i[n++]=212,i[n++]=120,i[n++]=0),r([e.source,e.flags])}},{pack(e,t){this.moreTypes?tl(e,16,t):td(e9?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let r=e.constructor;r!==tt&&this.moreTypes?tl(e,e2.indexOf(r.name),t):td(e,t)}},{pack(e,t){this.moreTypes?tl(e,17,t):td(e9?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let{target:r,position:i}=t(1);r[i]=193}}],to.SUPPORTS_STRUCT_HOOKS=!0;let th=new to({useRecords:!1});th.pack,th.pack;let{NEVER:tp,ALWAYS:ty,DECIMAL_ROUND:tm,DECIMAL_FIT:tf}={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4},tb=512,tg=1024,tv=2048;var tK=e.i(88947);if(tK.Transform,tK.Transform,e.i(62562),void 0===process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED||"true"!==process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase()){let t;try{(t=e.r(30088))&&function(e){function t(t){return function(r){let i=ev[eK++];if(null==i){if(C)return eG(r);let n=A.byteOffset,a=e(eb-t+n,T+n,A.buffer);if("string"==typeof a)i=a,ev=eg;else if(eK=1,eI=1,void 0===(i=(ev=a)[0]))throw Error("Unexpected end of buffer")}let n=i.length;return n<=r?(eb+=r,i):(O=i,eE=eb,eI=eb+n,eb+=r,i.slice(0,r))}}eL=t(1),e_=t(2),eF=t(3),eq=t(5)}(t.extractStrings)}catch(e){}}let tS="5.78.1";class tE extends Error{constructor(e="bullmq:unrecoverable"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}let tI=new to({useRecords:!1,encodeUndefinedAsNil:!0}).pack;class tk{constructor(e){this.queue=e,this.version=tS;const t=this.queue.keys;this.moveToFinishedKeys=[t.wait,t.active,t.prioritized,t.events,t.stalled,t.limiter,t.delayed,t.paused,t.meta,t.pc,void 0,void 0,void 0,void 0]}execCommand(e,t,r){let i=`${t}:${this.version}`;return e.runCommand(i,r)}async isJobInList(e,t){let r=await this.queue.client;return Number.isInteger(eu(this.queue.redisVersion,"6.0.6",this.queue.databaseType)?await this.execCommand(r,"isJobInList",[e,t]):await r.lpos(e,t))}addDelayedJobArgs(e,t,r){let i=this.queue.keys,n=[i.marker,i.meta,i.id,i.delayed,i.completed,i.events];return n.push(tI(r),e.data,t),n}addDelayedJob(e,t,r,i){let n=this.addDelayedJobArgs(t,r,i);return this.execCommand(e,"addDelayedJob",n)}addPrioritizedJobArgs(e,t,r){let i=this.queue.keys,n=[i.marker,i.meta,i.id,i.prioritized,i.delayed,i.completed,i.active,i.events,i.pc];return n.push(tI(r),e.data,t),n}addPrioritizedJob(e,t,r,i){let n=this.addPrioritizedJobArgs(t,r,i);return this.execCommand(e,"addPrioritizedJob",n)}addParentJobArgs(e,t,r){let i=this.queue.keys,n=[i.meta,i.id,i.delayed,i["waiting-children"],i.completed,i.events];return n.push(tI(r),e.data,t),n}addParentJob(e,t,r,i){let n=this.addParentJobArgs(t,r,i);return this.execCommand(e,"addParentJob",n)}addStandardJobArgs(e,t,r){let i=this.queue.keys,n=[i.wait,i.paused,i.meta,i.id,i.completed,i.delayed,i.active,i.events,i.marker];return n.push(tI(r),e.data,t),n}addStandardJob(e,t,r,i){let n=this.addStandardJobArgs(t,r,i);return this.execCommand(e,"addStandardJob",n)}async addJob(e,t,r,i,n={}){let a,s,o=this.queue.keys,l=t.parent,d=[o[""],void 0!==i?i:"",t.name,t.timestamp,t.parentKey||null,n.parentDependenciesKey||null,l,t.repeatJobKey,t.deduplicationId?`${o.de}:${t.deduplicationId}`:null];if(r.repeat){let e=Object.assign({},r.repeat);e.startDate&&(e.startDate=+new Date(e.startDate)),e.endDate&&(e.endDate=+new Date(e.endDate)),a=tI(Object.assign(Object.assign({},r),{repeat:e}))}else a=tI(r);if((s=n.addToWaitingChildren?await this.addParentJob(e,t,a,d):"number"==typeof r.delay&&r.delay>0?await this.addDelayedJob(e,t,a,d):r.priority?await this.addPrioritizedJob(e,t,a,d):await this.addStandardJob(e,t,a,d))<0)throw this.finishedErrors({code:s,parentKey:n.parentKey,command:"addJob"});return s}pauseArgs(e){let t="wait",r="paused";e||(t="paused",r="wait");let i=[t,r,"meta","prioritized"].map(e=>this.queue.toKey(e));return i.push(this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.marker),i.concat([e?"paused":"resumed"])}async pause(e){let t=await this.queue.client,r=this.pauseArgs(e);return this.execCommand(t,"pause",r)}addRepeatableJobArgs(e,t,r,i){let n=this.queue.keys;return[n.repeat,n.delayed].concat([t,tI(r),i,e,n[""]])}async addRepeatableJob(e,t,r,i){let n=await this.queue.client,a=this.addRepeatableJobArgs(e,t,r,i);return this.execCommand(n,"addRepeatableJob",a)}async removeDeduplicationKey(e,t){let r=await this.queue.client,i=this.queue.keys,n=[`${i.de}:${e}`];return this.execCommand(r,"removeDeduplicationKey",n.concat([t]))}async addJobScheduler(e,t,r,i,n,a,s){let o=await this.queue.client,l=this.queue.keys,d=[l.repeat,l.delayed,l.wait,l.paused,l.meta,l.prioritized,l.marker,l.id,l.events,l.pc,l.active],c=[t,tI(n),e,r,tI(i),tI(a),Date.now(),l[""],s?this.queue.toKey(s):""],u=await this.execCommand(o,"addJobScheduler",d.concat(c));if("number"==typeof u&&u<0)throw this.finishedErrors({code:u,command:"addJobScheduler"});return u}async updateRepeatableJobMillis(e,t,r,i){let n=[this.queue.keys.repeat,r,t,i];return this.execCommand(e,"updateRepeatableJobMillis",n)}async updateJobSchedulerNextMillis(e,t,r,i,n){let a=await this.queue.client,s=this.queue.keys,o=[s.repeat,s.delayed,s.wait,s.paused,s.meta,s.prioritized,s.marker,s.id,s.events,s.pc,n?this.queue.toKey(n):"",s.active],l=[t,e,r,tI(i),Date.now(),s[""],n];return this.execCommand(a,"updateJobScheduler",o.concat(l))}removeRepeatableArgs(e,t,r){let i=this.queue.keys;return[i.repeat,i.delayed,i.events].concat([e,this.getRepeatConcatOptions(t,r),r,i[""]])}getRepeatConcatOptions(e,t){return t&&t.split(":").length>2?t:e}async removeRepeatable(e,t,r){let i=await this.queue.client,n=this.removeRepeatableArgs(e,t,r);return this.execCommand(i,"removeRepeatable",n)}async removeJobScheduler(e){let t=await this.queue.client,r=this.queue.keys,i=[r.repeat,r.delayed,r.events],n=[e,r[""]];return this.execCommand(t,"removeJobScheduler",i.concat(n))}removeArgs(e,t){let r=[e,"repeat"].map(e=>this.queue.toKey(e)),i=[e,+!!t,this.queue.toKey("")];return r.concat(i)}async remove(e,t){let r=await this.queue.client,i=this.removeArgs(e,t),n=await this.execCommand(r,"removeJob",i);if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"removeJob"});return n}async removeUnprocessedChildren(e){let t=await this.queue.client,r=[this.queue.toKey(e),this.queue.keys.meta,this.queue.toKey(""),e];await this.execCommand(t,"removeUnprocessedChildren",r)}async extendLock(e,t,r,i){i=i||await this.queue.client;let n=[this.queue.toKey(e)+":lock",this.queue.keys.stalled,t,r,e];return this.execCommand(i,"extendLock",n)}async extendLocks(e,t,r){let i=await this.queue.client,n=[this.queue.keys.stalled,this.queue.toKey(""),tI(t),tI(e),r];return this.execCommand(i,"extendLocks",n)}async updateData(e,t){let r=await this.queue.client,i=[this.queue.toKey(e.id)],n=JSON.stringify(t),a=await this.execCommand(r,"updateData",i.concat([n]));if(a<0)throw this.finishedErrors({code:a,jobId:e.id,command:"updateData"})}async updateProgress(e,t){let r=await this.queue.client,i=[this.queue.toKey(e),this.queue.keys.events,this.queue.keys.meta],n=JSON.stringify(t),a=await this.execCommand(r,"updateProgress",i.concat([e,n]));if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"updateProgress"})}async addLog(e,t,r){let i=await this.queue.client,n=[this.queue.toKey(e),this.queue.toKey(e)+":logs"],a=await this.execCommand(i,"addLog",n.concat([e,t,r||""]));if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"addLog"});return a}moveToFinishedArgs(e,t,r,i,n,a,s,o=!0,l){var d,c,u,h,p,y,m;let f=this.queue.keys,b=this.queue.opts,g="completed"===n?b.removeOnComplete:b.removeOnFail,v=this.queue.toKey(`metrics:${n}`),K=this.moveToFinishedKeys;K[10]=f[n],K[11]=this.queue.toKey(null!=(d=e.id)?d:""),K[12]=v,K[13]=this.queue.keys.marker;let S=this.getKeepJobs(i,g),E=[e.id,s,r,void 0===t?"null":t,n,!o||this.queue.closing?0:1,f[""],tI({token:a,name:b.name,keepJobs:S,limiter:b.limiter,lockDuration:b.lockDuration,attempts:e.opts.attempts,maxMetricsSize:(null==(c=b.metrics)?void 0:c.maxDataPoints)?null==(u=b.metrics)?void 0:u.maxDataPoints:"",fpof:!!(null==(h=e.opts)?void 0:h.failParentOnFailure),cpof:!!(null==(p=e.opts)?void 0:p.continueParentOnFailure),idof:!!(null==(y=e.opts)?void 0:y.ignoreDependencyOnFailure),rdof:!!(null==(m=e.opts)?void 0:m.removeDependencyOnFailure)}),l?tI(et(l)):void 0];return K.concat(E)}getKeepJobs(e,t){return void 0===e?t||{count:e?0:-1}:"object"==typeof e?e:"number"==typeof e?{count:e}:{count:e?0:-1}}async moveToFinished(e,t){let r=await this.queue.client,i=await this.execCommand(r,"moveToFinished",t);if(i<0)throw this.finishedErrors({code:i,jobId:e,command:"moveToFinished",state:"active"});if(void 0!==i)return tw(i)}drainArgs(e){let t=this.queue.keys;return[t.wait,t.paused,t.delayed,t.prioritized,t.repeat].concat([t[""],e?"1":"0"])}async drain(e){let t=await this.queue.client,r=this.drainArgs(e);return this.execCommand(t,"drain",r)}removeChildDependencyArgs(e,t){return[this.queue.keys[""]].concat([this.queue.toKey(e),t])}async removeChildDependency(e,t){let r=await this.queue.client,i=this.removeChildDependencyArgs(e,t),n=await this.execCommand(r,"removeChildDependency",i);switch(n){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:n,jobId:e,parentKey:t,command:"removeChildDependency"})}}getRangesArgs(e,t,r,i){let n=this.queue.keys,a=e.map(e=>"waiting"===e?"wait":e);return[n[""]].concat([t,r,i?"1":"0",...a])}async getRanges(e,t=0,r=1,i=!1){let n=await this.queue.client,a=this.getRangesArgs(e,t,r,i);return await this.execCommand(n,"getRanges",a)}getCountsArgs(e){let t=this.queue.keys,r=e.map(e=>"waiting"===e?"wait":e);return[t[""]].concat([...r])}async getCounts(e){let t=await this.queue.client,r=this.getCountsArgs(e);return await this.execCommand(t,"getCounts",r)}getCountsPerPriorityArgs(e){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized].concat(e)}async getCountsPerPriority(e){let t=await this.queue.client,r=this.getCountsPerPriorityArgs(e);return await this.execCommand(t,"getCountsPerPriority",r)}getDependencyCountsArgs(e,t){return[`${e}:processed`,`${e}:dependencies`,`${e}:failed`,`${e}:unsuccessful`].map(e=>this.queue.toKey(e)).concat(t)}async getDependencyCounts(e,t){let r=await this.queue.client,i=this.getDependencyCountsArgs(e,t);return await this.execCommand(r,"getDependencyCounts",i)}moveToCompletedArgs(e,t,r,i,n=!1){let a=Date.now();return this.moveToFinishedArgs(e,t,"returnvalue",r,"completed",i,a,n)}moveToFailedArgs(e,t,r,i,n=!1,a){let s=Date.now();return this.moveToFinishedArgs(e,t,"failedReason",r,"failed",i,s,n,a)}async isFinished(e,t=!1){let r=await this.queue.client,i=["completed","failed",e].map(e=>this.queue.toKey(e));return this.execCommand(r,"isFinished",i.concat([e,t?"1":""]))}async getState(e){let t=await this.queue.client,r=["completed","failed","delayed","active","wait","paused","waiting-children","prioritized"].map(e=>this.queue.toKey(e));return eu(this.queue.redisVersion,"6.0.6",this.queue.databaseType)?this.execCommand(t,"getState",r.concat([e])):this.execCommand(t,"getStateV2",r.concat([e]))}async changeDelay(e,t){let r=await this.queue.client,i=this.changeDelayArgs(e,t),n=await this.execCommand(r,"changeDelay",i);if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"changeDelay",state:"delayed"})}changeDelayArgs(e,t){let r=Date.now();return[this.queue.keys.delayed,this.queue.keys.meta,this.queue.keys.marker,this.queue.keys.events].concat([t,JSON.stringify(r),e,this.queue.toKey(e)])}async changePriority(e,t=0,r=!1){let i=await this.queue.client,n=this.changePriorityArgs(e,t,r),a=await this.execCommand(i,"changePriority",n);if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"changePriority"})}changePriorityArgs(e,t=0,r=!1){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.marker].concat([t,this.queue.toKey(""),e,+!!r])}moveToDelayedArgs(e,t,r,i,n={}){let a=this.queue.keys,s=this.queue.opts,o=[a.marker,a.active,a.prioritized,a.delayed,this.queue.toKey(e),a.events,a.meta,a.stalled,a.wait,a.limiter,a.paused,a.pc],l=n.fetchNext&&!this.queue.closing?1:0;return o.concat([this.queue.keys[""],t,e,r,i,n.skipAttempt?"1":"0",n.fieldsToUpdate?tI(et(n.fieldsToUpdate)):void 0,l,l?tI({token:r,lockDuration:s.lockDuration,limiter:s.limiter,name:s.name}):void 0])}moveToWaitingChildrenArgs(e,t,r){let i=Date.now(),n=el(r.child);return["active","waiting-children",e,`${e}:dependencies`,`${e}:unsuccessful`,"stalled","events"].map(e=>this.queue.toKey(e)).concat([t,null!=n?n:"",JSON.stringify(i),e,this.queue.toKey("")])}isMaxedArgs(){let e=this.queue.keys;return[e.meta,e.active]}async isMaxed(){let e=await this.queue.client,t=this.isMaxedArgs();return!!await this.execCommand(e,"isMaxed",t)}async moveToDelayed(e,t,r,i="0",n={}){let a=await this.queue.client,s=this.moveToDelayedArgs(e,t,i,r,n),o=await this.execCommand(a,"moveToDelayed",s);if(o<0)throw this.finishedErrors({code:o,jobId:e,command:"moveToDelayed",state:"active"});if(void 0!==o)return tw(o)}async moveToWaitingChildren(e,t,r={}){let i=await this.queue.client,n=this.moveToWaitingChildrenArgs(e,t,r),a=await this.execCommand(i,"moveToWaitingChildren",n);switch(a){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:a,jobId:e,command:"moveToWaitingChildren",state:"active"})}}getRateLimitTtlArgs(e){return[this.queue.keys.limiter,this.queue.keys.meta].concat([null!=e?e:"0"])}async getRateLimitTtl(e){let t=await this.queue.client,r=this.getRateLimitTtlArgs(e);return this.execCommand(t,"getRateLimitTtl",r)}async cleanJobsInSet(e,t,r=0){let i=await this.queue.client;return this.execCommand(i,"cleanJobsInSet",[this.queue.toKey(e),this.queue.toKey("events"),this.queue.toKey("repeat"),this.queue.toKey(""),t,r,e])}getJobSchedulerArgs(e){return[this.queue.keys.repeat].concat([e])}async getJobScheduler(e){let t=await this.queue.client,r=this.getJobSchedulerArgs(e);return this.execCommand(t,"getJobScheduler",r)}retryJobArgs(e,t,r,i={}){return[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.paused,this.queue.toKey(e),this.queue.keys.meta,this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.prioritized,this.queue.keys.pc,this.queue.keys.marker,this.queue.keys.stalled].concat([this.queue.toKey(""),Date.now(),(t?"R":"L")+"PUSH",e,r,i.fieldsToUpdate?tI(et(i.fieldsToUpdate)):void 0])}async retryJob(e,t,r="0",i={}){let n=await this.queue.client,a=this.retryJobArgs(e,t,r,i),s=await this.execCommand(n,"retryJob",a);if(s<0)throw this.finishedErrors({code:s,jobId:e,command:"retryJob",state:"active"})}moveJobsToWaitArgs(e,t,r){return[this.queue.toKey(""),this.queue.keys.events,this.queue.toKey(e),this.queue.toKey("wait"),this.queue.toKey("paused"),this.queue.keys.meta,this.queue.keys.active,this.queue.keys.marker].concat([t,r,e])}async retryJobs(e="failed",t=1e3,r=new Date().getTime()){let i=await this.queue.client,n=this.moveJobsToWaitArgs(e,t,r);return this.execCommand(i,"moveJobsToWait",n)}async promoteJobs(e=1e3){let t=await this.queue.client,r=this.moveJobsToWaitArgs("delayed",e,Number.MAX_VALUE);return this.execCommand(t,"moveJobsToWait",r)}async reprocessJob(e,t,r={}){let i=await this.queue.client,n=[this.queue.toKey(e.id),this.queue.keys.events,this.queue.toKey(t),this.queue.keys.wait,this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.active,this.queue.keys.marker],a=[e.id,(e.opts.lifo?"R":"L")+"PUSH","failed"===t?"failedReason":"returnvalue",t,r.resetAttemptsMade?"1":"0",r.resetAttemptsStarted?"1":"0"],s=await this.execCommand(i,"reprocessJob",n.concat(a));if(1!==s)throw this.finishedErrors({code:s,jobId:e.id,command:"reprocessJob",state:t})}async getMetrics(e,t=0,r=-1){let i=await this.queue.client,n=[this.queue.toKey(`metrics:${e}`),this.queue.toKey(`metrics:${e}:data`)];return await this.execCommand(i,"getMetrics",n.concat([t,r]))}async moveToActive(e,t,r){let i=this.queue.opts,n=this.queue.keys,a=[n.wait,n.active,n.prioritized,n.events,n.stalled,n.limiter,n.delayed,n.paused,n.meta,n.pc,n.marker],s=[n[""],Date.now(),tI({token:t,lockDuration:i.lockDuration,limiter:i.limiter,name:r})];return tw(await this.execCommand(e,"moveToActive",a.concat(s)))}async promote(e){let t=await this.queue.client,r=[this.queue.keys.delayed,this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.events,this.queue.keys.marker],i=[this.queue.toKey(""),e],n=await this.execCommand(t,"promote",r.concat(i));if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"promote",state:"delayed"})}moveStalledJobsToWaitArgs(){let e=this.queue.opts;return[this.queue.keys.stalled,this.queue.keys.wait,this.queue.keys.active,this.queue.keys["stalled-check"],this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.marker,this.queue.keys.events,this.queue.keys.repeat].concat([e.maxStalledCount,this.queue.toKey(""),Date.now(),e.stalledInterval])}async moveStalledJobsToWait(){let e=await this.queue.client,t=this.moveStalledJobsToWaitArgs();return this.execCommand(e,"moveStalledJobsToWait",t)}async moveJobFromActiveToWait(e,t="0"){let r=await this.queue.client,i=[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.stalled,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.limiter,this.queue.keys.prioritized,this.queue.keys.marker,this.queue.keys.events],n=[e,t,this.queue.toKey(e)],a=await this.execCommand(r,"moveJobFromActiveToWait",i.concat(n));if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"moveJobFromActiveToWait",state:"active"});return a}async obliterate(e){let t=await this.queue.client,r=[this.queue.keys.meta,this.queue.toKey("")],i=[e.count,e.force?"force":null],n=await this.execCommand(t,"obliterate",r.concat(i));if(n<0)switch(n){case -1:throw Error("Cannot obliterate non-paused queue");case -2:throw Error("Cannot obliterate queue with active jobs")}return n}async paginate(e,t){let r=await this.queue.client,i=[e],n=t.end>=0?t.end-t.start+1:1/0,a="0",s=0,o,l,d,c=[],u=[];do{let e=[t.start+c.length,t.end,a,s,5];t.fetchJobs&&e.push(1),[a,s,o,l,d]=await this.execCommand(r,"paginate",i.concat(e)),c=c.concat(o),d&&d.length&&(u=u.concat(d.map(ee)))}while("0"!=a&&c.length<n)if(!(c.length&&Array.isArray(c[0])))return{cursor:a,items:c.map(e=>({id:e})),total:l,jobs:u};{let e=[];for(let t=0;t<c.length;t++){let[r,i]=c[t];try{e.push({id:r,v:JSON.parse(i)})}catch(t){e.push({id:r,err:t.message})}}return{cursor:a,items:e,total:l,jobs:u}}}finishedErrors({code:e,jobId:t,parentKey:r,command:i,state:n}){let a;switch(e){case K.JobNotExist:a=Error(`Missing key for job ${t}. ${i}`);break;case K.JobLockNotExist:a=Error(`Missing lock for job ${t}. ${i}`);break;case K.JobNotInState:a=Error(`Job ${t} is not in the ${n} state. ${i}`);break;case K.JobPendingChildren:a=Error(`Job ${t} has pending dependencies. ${i}`);break;case K.ParentJobNotExist:a=Error(`Missing key for parent job ${r}. ${i}`);break;case K.JobLockMismatch:a=Error(`Lock mismatch for job ${t}. Cmd ${i} from ${n}`);break;case K.ParentJobCannotBeReplaced:a=Error(`The parent job ${r} cannot be replaced. ${i}`);break;case K.JobBelongsToJobScheduler:a=Error(`Job ${t} belongs to a job scheduler and cannot be removed directly. ${i}`);break;case K.JobHasFailedChildren:a=new tE(`Cannot complete job ${t} because it has at least one failed child. ${i}`);break;case K.SchedulerJobIdCollision:a=Error(`Cannot create job scheduler iteration - job ID already exists. ${i}`);break;case K.SchedulerJobSlotsBusy:a=Error(`Cannot create job scheduler iteration - current and next time slots already have jobs. ${i}`);break;default:a=Error(`Unknown code ${e} error for ${t}. ${i}`)}return a.code=e,a}async removeOrphanedJobs(e,t,r){let i=await this.queue.client,n=[this.queue.toKey(""),t.length,...t,r.length,...r,...e];return this.execCommand(i,"removeOrphanedJobs",n)}}function tw(e){if(e){let t=[null,e[1],e[2],e[3]];return e[0]&&(t[0]=ee(e[0])),t}return[]}let tx=e=>new tk({keys:e.keys,client:e.client,get redisVersion(){return e.redisVersion},toKey:e.toKey,opts:e.opts,closing:e.closing,databaseType:e.databaseType}),tj=(0,ef.debuglog)("bull");class tA{constructor(e,t,r,i={},n){this.queue=e,this.name=t,this.data=r,this.opts=i,this.id=n,this.progress=0,this.returnvalue=null,this.stacktrace=null,this.delay=0,this.priority=0,this.attemptsStarted=0,this.attemptsMade=0,this.stalledCounter=0;const a=this.opts,{repeatJobKey:s}=a,o=(0,em.__rest)(a,["repeatJobKey"]);this.opts=Object.assign({attempts:0},o),this.delay=this.opts.delay,this.priority=this.opts.priority||0,this.repeatJobKey=s,this.timestamp=i.timestamp?i.timestamp:Date.now(),this.opts.backoff=d.normalize(i.backoff),this.parentKey=el(i.parent),i.parent&&(this.parent={id:i.parent.id,queueKey:i.parent.queue},i.failParentOnFailure&&(this.parent.fpof=!0),i.removeDependencyOnFailure&&(this.parent.rdof=!0),i.ignoreDependencyOnFailure&&(this.parent.idof=!0),i.continueParentOnFailure&&(this.parent.cpof=!0)),this.debounceId=i.debounce?i.debounce.id:void 0,this.deduplicationId=i.deduplication?i.deduplication.id:this.debounceId,this.toKey=e.toKey.bind(e),this.createScripts(),this.queueQualifiedName=e.qualifiedName}static async create(e,t,r,i){let n=await e.client,a=new this(e,t,r,i,i&&i.jobId);return a.id=await a.addJob(n,{parentKey:a.parentKey,parentDependenciesKey:a.parentKey?`${a.parentKey}:dependencies`:""}),a}static async createBulk(e,t){let r=await e.client,i=t.map(t=>{var r;return new this(e,t.name,t.data,t.opts,null==(r=t.opts)?void 0:r.jobId)}),n=r.pipeline();for(let e of i)e.addJob(n,{parentKey:e.parentKey,parentDependenciesKey:e.parentKey?`${e.parentKey}:dependencies`:""});let a=await n.exec();for(let e=0;e<a.length;++e){let[t,r]=a[e];if(t)throw t;i[e].id=r}return i}static fromJSON(e,t,r){let i=JSON.parse(t.data||"{}"),n=tA.optsFromJSON(t.opts),a=new this(e,t.name,i,n,t.id||r);return a.progress=JSON.parse(t.progress||"0"),a.delay=parseInt(t.delay),a.priority=parseInt(t.priority),a.timestamp=parseInt(t.timestamp),t.finishedOn&&(a.finishedOn=parseInt(t.finishedOn)),t.processedOn&&(a.processedOn=parseInt(t.processedOn)),t.rjk&&(a.repeatJobKey=t.rjk),t.deid&&(a.debounceId=t.deid,a.deduplicationId=t.deid),t.failedReason&&(a.failedReason=t.failedReason),a.attemptsStarted=parseInt(t.ats||"0"),a.attemptsMade=parseInt(t.attemptsMade||t.atm||"0"),a.stalledCounter=parseInt(t.stc||"0"),t.defa&&(a.deferredFailure=t.defa),a.stacktrace=function(e){if(!e)return[];let t=X(JSON.parse,JSON,[e]);return t!==Z&&t instanceof Array?t:[]}(t.stacktrace),"string"==typeof t.returnvalue&&(a.returnvalue=tT(t.returnvalue)),t.parentKey?a.parentKey=t.parentKey:a.parentKey=void 0,t.parent?a.parent=JSON.parse(t.parent):a.parent=void 0,t.pb&&(a.processedBy=t.pb),t.nrjid&&(a.nextRepeatableJobId=t.nrjid),a}createScripts(){this.scripts=tx(this.queue)}static optsFromJSON(e,t=en){let r=Object.entries(JSON.parse(e||"{}")),i={};for(let e of r){let[r,n]=e;t[r]?i[t[r]]=n:"tm"===r?i.telemetry=Object.assign(Object.assign({},i.telemetry),{metadata:n}):"omc"===r?i.telemetry=Object.assign(Object.assign({},i.telemetry),{omitContext:n}):i[r]=n}return i}static async fromId(e,t){if(t){let r=await e.client,i=await r.hgetall(e.toKey(t));return!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(i)?this.fromJSON(e,i,t):void 0}}static addJobLog(e,t,r,i){return e.scripts.addLog(t,r,i)}toJSON(){let{queue:e,scripts:t}=this;return(0,em.__rest)(this,["queue","scripts"])}asJSON(){var e={id:this.id,name:this.name,data:JSON.stringify(void 0===this.data?{}:this.data),opts:tA.optsAsJSON(this.opts),parent:this.parent?Object.assign({},this.parent):void 0,parentKey:this.parentKey,progress:this.progress,attemptsMade:this.attemptsMade,attemptsStarted:this.attemptsStarted,stalledCounter:this.stalledCounter,finishedOn:this.finishedOn,processedOn:this.processedOn,timestamp:this.timestamp,failedReason:JSON.stringify(this.failedReason),stacktrace:JSON.stringify(this.stacktrace),debounceId:this.debounceId,deduplicationId:this.deduplicationId,repeatJobKey:this.repeatJobKey,returnvalue:JSON.stringify(this.returnvalue),nrjid:this.nextRepeatableJobId};let t={};for(let r in e)void 0!==e[r]&&(t[r]=e[r]);return t}static optsAsJSON(e={},t=ea){let r=Object.entries(e),i={};for(let[e,n]of r)void 0!==n&&(e in t?i[t[e]]=n:"telemetry"===e?(void 0!==n.metadata&&(i.tm=n.metadata),void 0!==n.omitContext&&(i.omc=n.omitContext)):i[e]=n);return i}asJSONSandbox(){return Object.assign(Object.assign({},this.asJSON()),{queueName:this.queueName,queueQualifiedName:this.queueQualifiedName,prefix:this.prefix})}updateData(e){return this.data=e,this.scripts.updateData(this,e)}async updateProgress(e){this.progress=e,await this.scripts.updateProgress(this.id,e),this.queue.emit("progress",this,e)}async log(e){return tA.addJobLog(this.queue,this.id,e,this.opts.keepLogs)}async removeChildDependency(){return!!await this.scripts.removeChildDependency(this.id,this.parentKey)&&(this.parent=void 0,this.parentKey=void 0,!0)}async clearLogs(e){let t=await this.queue.client,r=this.toKey(this.id)+":logs";e?await t.ltrim(r,-e,-1):await t.del(r)}async remove({removeChildren:e=!0}={}){await this.queue.waitUntilReady();let t=this.queue;if(await this.scripts.remove(this.id,e))t.emit("removed",this);else throw Error(`Job ${this.id} could not be removed because it is locked by another worker`)}async removeUnprocessedChildren(){let e=this.id;await this.scripts.removeUnprocessedChildren(e)}extendLock(e,t){return this.scripts.extendLock(this.id,e,t)}async moveToCompleted(e,t,r=!0){return this.queue.trace(w.INTERNAL,"complete",this.queue.name,async i=>{this.setSpanJobAttributes(i),await this.queue.waitUntilReady(),this.returnvalue=e||void 0;let n=X(JSON.stringify,JSON,[e]);if(n===Z)throw Z.value;let a=this.scripts.moveToCompletedArgs(this,n,this.opts.removeOnComplete,t,r),s=await this.scripts.moveToFinished(this.id,a);return this.finishedOn=a[this.scripts.moveToFinishedKeys.length+1],this.attemptsMade+=1,this.recordJobMetrics("completed"),s})}async moveToWait(e){let t=await this.scripts.moveJobFromActiveToWait(this.id,e);return this.recordJobMetrics("waiting"),t}async shouldRetryJob(e){if(!(this.attemptsMade+1<this.opts.attempts)||this.discarded||e instanceof tE||"UnrecoverableError"==e.name)return[!1,0];{let t=this.queue.opts,r=await d.calculate(this.opts.backoff,this.attemptsMade+1,e,this,t.settings&&t.settings.backoffStrategy);return[-1!=r,-1==r?0:r]}}async moveToFailed(e,t,r=!1){this.failedReason=null==e?void 0:e.message;let[i,n]=await this.shouldRetryJob(e);return this.queue.trace(w.INTERNAL,this.getSpanOperation(i,n),this.queue.name,async(a,s)=>{var o,l;let d,c,u;this.setSpanJobAttributes(a),(null==(l=null==(o=this.opts)?void 0:o.telemetry)?void 0:l.omitContext)||!s||(d=s),this.updateStacktrace(e);let h={failedReason:this.failedReason,stacktrace:JSON.stringify(this.stacktrace),tm:d};if(i)n?(c=await this.scripts.moveToDelayed(this.id,Date.now(),n,t,{fieldsToUpdate:h,fetchNext:r}),this.recordJobMetrics("delayed")):(c=await this.scripts.retryJob(this.id,this.opts.lifo,t,{fieldsToUpdate:h}),this.recordJobMetrics("retried"));else{let e=this.scripts.moveToFailedArgs(this,this.failedReason,this.opts.removeOnFail,t,r,h);c=await this.scripts.moveToFinished(this.id,e),u=e[this.scripts.moveToFinishedKeys.length+1],this.recordJobMetrics("failed")}return u&&"number"==typeof u&&(this.finishedOn=u),n&&"number"==typeof n&&(this.delay=n),this.attemptsMade+=1,c})}getSpanOperation(e,t){return e?t?"delay":"retry":"fail"}recordJobMetrics(e){var t,r;let i=null==(r=null==(t=this.queue.opts)?void 0:t.telemetry)?void 0:r.meter;if(!i)return;let n={[I.QueueName]:this.queue.name,[I.JobName]:this.name,[I.JobStatus]:e},a={completed:k.JobsCompleted,failed:k.JobsFailed,delayed:k.JobsDelayed,retried:k.JobsRetried,waiting:k.JobsWaiting,"waiting-children":k.JobsWaitingChildren}[e];if(i.createCounter(a,{description:`Number of jobs ${e}`,unit:"1"}).add(1,n),this.processedOn){let e=Date.now()-this.processedOn;i.createHistogram(k.JobDuration,{description:"Job processing duration",unit:"ms"}).record(e,n)}}isCompleted(){return this.isInZSet("completed")}isFailed(){return this.isInZSet("failed")}isDelayed(){return this.isInZSet("delayed")}isWaitingChildren(){return this.isInZSet("waiting-children")}isActive(){return this.isInList("active")}async isWaiting(){return await this.isInList("wait")||await this.isInList("paused")}get queueName(){return this.queue.name}get prefix(){return this.queue.opts.prefix}getState(){return this.scripts.getState(this.id)}async changeDelay(e){await this.scripts.changeDelay(this.id,e),this.delay=e}async changePriority(e){await this.scripts.changePriority(this.id,e.priority,e.lifo),this.priority=e.priority||0}async getChildrenValues(){let e=await this.queue.client,t=await e.hgetall(this.toKey(`${this.id}:processed`));if(t)return eh(t)}async getIgnoredChildrenFailures(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getFailedChildrenValues(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getDependencies(e={}){let t=(await this.queue.client).pipeline();if(e.processed||e.unprocessed||e.ignored||e.failed){let r,i,n,a,s,o,l,d,c={cursor:0,count:20},u=[];if(e.processed){u.push("processed");let r=Object.assign(Object.assign({},c),e.processed);t.hscan(this.toKey(`${this.id}:processed`),r.cursor,{COUNT:r.count})}if(e.unprocessed){u.push("unprocessed");let r=Object.assign(Object.assign({},c),e.unprocessed);t.sscan(this.toKey(`${this.id}:dependencies`),r.cursor,{COUNT:r.count})}if(e.ignored){u.push("ignored");let r=Object.assign(Object.assign({},c),e.ignored);t.hscan(this.toKey(`${this.id}:failed`),r.cursor,{COUNT:r.count})}if(e.failed){u.push("failed");let i=Object.assign(Object.assign({},c),e.failed);r=i.cursor+i.count,t.zrange(this.toKey(`${this.id}:unsuccessful`),i.cursor,i.count-1)}let h=await t.exec();return u.forEach((e,t)=>{switch(e){case"processed":{i=h[t][1][0];let e=h[t][1][1],r={};for(let t=0;t<e.length;++t)t%2&&(r[e[t-1]]=JSON.parse(e[t]));n=r;break}case"failed":o=h[t][1];break;case"ignored":{l=h[t][1][0];let e=h[t][1][1],r={};for(let t=0;t<e.length;++t)t%2&&(r[e[t-1]]=e[t]);d=r;break}case"unprocessed":a=h[t][1][0],s=h[t][1][1]}}),Object.assign(Object.assign(Object.assign(Object.assign({},i?{processed:n,nextProcessedCursor:Number(i)}:{}),l?{ignored:d,nextIgnoredCursor:Number(l)}:{}),r?{failed:o,nextFailedCursor:r}:{}),a?{unprocessed:s,nextUnprocessedCursor:Number(a)}:{})}{t.hgetall(this.toKey(`${this.id}:processed`)),t.smembers(this.toKey(`${this.id}:dependencies`)),t.hgetall(this.toKey(`${this.id}:failed`)),t.zrange(this.toKey(`${this.id}:unsuccessful`),0,-1);let[[e,r],[i,n],[a,s],[o,l]]=await t.exec();return{processed:eh(r),unprocessed:n,failed:l,ignored:s}}}async getDependenciesCount(e={}){let t=[];Object.entries(e).forEach(([e,r])=>{r&&t.push(e)});let r=t.length?t:["processed","unprocessed","ignored","failed"],i=await this.scripts.getDependencyCounts(this.id,r),n={};return i.forEach((e,t)=>{n[`${r[t]}`]=e||0}),n}async waitUntilFinished(e,t){await this.queue.waitUntilReady();let r=this.id;return new Promise(async(i,n)=>{let a;function s(e){c(),i(e.returnvalue)}function o(e){c(),n(Error(e.failedReason||e))}t&&(a=setTimeout(()=>o(`Job wait ${this.name} timed out before finishing, no finish notification arrived after ${t}ms (id=${r})`),t));let l=`completed:${r}`,d=`failed:${r}`;e.on(l,s),e.on(d,o),this.queue.on("closing",o);let c=()=>{clearInterval(a),e.removeListener(l,s),e.removeListener(d,o),this.queue.removeListener("closing",o)};await e.waitUntilReady();let[u,h]=await this.scripts.isFinished(r,!0);0!=u&&(-1==u||2==u?o({failedReason:h}):s({returnvalue:tT(h)}))})}async moveToDelayed(e,t){let r=Date.now(),i=e-r,n=i>0?i:0;await this.scripts.moveToDelayed(this.id,r,n,t,{skipAttempt:!0}),this.delay=n,this.recordJobMetrics("delayed")}async moveToWaitingChildren(e,t={}){let r=await this.scripts.moveToWaitingChildren(this.id,e,t);return r&&this.recordJobMetrics("waiting-children"),r}async promote(){let e=this.id;await this.scripts.promote(e),this.delay=0}async retry(e="failed",t={}){await this.scripts.reprocessJob(this,e,t),this.failedReason=null,this.finishedOn=null,this.processedOn=null,this.returnvalue=null,t.resetAttemptsMade&&(this.attemptsMade=0),t.resetAttemptsStarted&&(this.attemptsStarted=0)}discard(){this.discarded=!0}async isInZSet(e){let t=await this.queue.client;return null!==await t.zscore(this.queue.toKey(e),this.id)}async isInList(e){return this.scripts.isJobInList(this.queue.toKey(e),this.id)}addJob(e,t){let r=this.asJSON();return this.validateOptions(r),this.scripts.addJob(e,r,r.opts,this.id,t)}async removeDeduplicationKey(){return!!this.deduplicationId&&await this.scripts.removeDeduplicationKey(this.deduplicationId,this.id)>0}validateOptions(e){var t,r,i,n,a,s,o,l,d;if(this.opts.sizeLimit&&(d=e.data,Buffer.byteLength(d,"utf8")>this.opts.sizeLimit))throw Error(`The size of job ${this.name} exceeds the limit ${this.opts.sizeLimit} bytes`);if(this.opts.delay&&this.opts.repeat&&!(null==(t=this.opts.repeat)?void 0:t.count))throw Error("Delay and repeat options cannot be used together");let c=["removeDependencyOnFailure","failParentOnFailure","continueParentOnFailure","ignoreDependencyOnFailure"].filter(e=>this.opts[e]);if(c.length>1){let e=c.join(", ");throw Error(`The following options cannot be used together: ${e}`)}if(null==(r=this.opts)?void 0:r.jobId){if(`${parseInt(this.opts.jobId,10)}`===(null==(i=this.opts)?void 0:i.jobId))throw Error("Custom Id cannot be integers");if((null==(n=this.opts)?void 0:n.jobId.includes(":"))&&(null==(s=null==(a=this.opts)?void 0:a.jobId)?void 0:s.split(":").length)!==3)throw Error("Custom Id cannot contain :")}if(this.opts.priority){if(Math.trunc(this.opts.priority)!==this.opts.priority)throw Error("Priority should not be float");if(this.opts.priority>2097152)throw Error("Priority should be between 0 and 2097152")}if(this.opts.deduplication){if(!(null==(o=this.opts.deduplication)?void 0:o.id))throw Error("Deduplication id must be provided");if(this.parentKey)throw Error("Deduplication and parent options cannot be used together")}if(this.opts.debounce){if(!(null==(l=this.opts.debounce)?void 0:l.id))throw Error("Debounce id must be provided");if(this.parentKey)throw Error("Debounce and parent options cannot be used together")}if("object"==typeof this.opts.backoff&&"number"==typeof this.opts.backoff.jitter&&(this.opts.backoff.jitter<0||this.opts.backoff.jitter>1))throw Error("Jitter should be between 0 and 1")}updateStacktrace(e){this.stacktrace=this.stacktrace||[],(null==e?void 0:e.stack)&&(this.stacktrace.push(e.stack),0===this.opts.stackTraceLimit?this.stacktrace=[]:this.opts.stackTraceLimit&&(this.stacktrace=this.stacktrace.slice(-this.opts.stackTraceLimit)))}setSpanJobAttributes(e){null==e||e.setAttributes({[I.JobName]:this.name,[I.JobId]:this.id})}}function tT(e){let t=X(JSON.parse,JSON,[e]);if(t!==Z)return t;tj("corrupted returnvalue: "+e,t)}class tD{constructor(e="bull"){this.prefix=e}getKeys(e){let t={};return["","active","wait","waiting-children","paused","id","delayed","prioritized","stalled-check","completed","failed","stalled","repeat","limiter","meta","events","pc","marker","de"].forEach(r=>{t[r]=this.toKey(e,r)}),t}toKey(e,t){return`${this.getQueueQualifiedName(e)}:${t}`}getQueueQualifiedName(e){return`${this.prefix}:${e}`}}var tO=_,tC=e.i(34855);e.s([],85283),e.i(85283);let tR={name:"addDelayedJob",content:`--[[
  Adds a delayed job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - computes timestamp.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'delayed'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (use custom instead of one generated automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[2]
local idKey = KEYS[3]
local delayedKey = KEYS[4]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local opts = cmsgpack.unpack(ARGV[3])
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, delayedKey, deduplicationKey,
  eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
    opts, timestamp, parentKey, parentData, repeatJobKey)
addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, KEYS[1], delay)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6};e.s(["addDelayedJob",0,tR],91122),e.i(91122);let tM={name:"addJobScheduler",content:`--[[
  Adds a job scheduler, i.e. a job factory that creates jobs based on a given schedule (repeat options).
    Input:
      KEYS[1]  'repeat' key
      KEYS[2]  'delayed' key
      KEYS[3]  'wait' key
      KEYS[4]  'paused' key
      KEYS[5]  'meta' key
      KEYS[6]  'prioritized' key
      KEYS[7]  'marker' key
      KEYS[8]  'id' key
      KEYS[9]  'events' key
      KEYS[10] 'pc' priority counter
      KEYS[11] 'active' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  pattern?
            [4]  endDate?
            [5]  every?
      ARGV[3] jobs scheduler id
      ARGV[4] Json stringified template data
      ARGV[5] mspacked template opts
      ARGV[6] msgpacked delayed opts
      ARGV[7] timestamp
      ARGV[8] prefix key
      ARGV[9] producer key
      Output:
        repeatableKey  - OK
]] local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local eventsKey = KEYS[9]
local nextMillis = ARGV[1]
local jobSchedulerId = ARGV[3]
local templateOpts = cmsgpack.unpack(ARGV[5])
local now = tonumber(ARGV[7])
local prefixKey = ARGV[8]
local jobOpts = cmsgpack.unpack(ARGV[6])
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function addJobFromScheduler(jobKey, jobId, opts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId, repeatDelay)
  opts['delay'] = repeatDelay
  opts['jobId'] = jobId
  storeAndEnqueueJob(eventsKey, jobKey, jobId, name, data, opts,
      timestamp, nil, nil, jobSchedulerId, maxEvents,
      waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
      priorityCounter, delayedKey, markerKey)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
--[[
  Function to store a job scheduler
]]
local function storeJobScheduler(schedulerId, schedulerKey, repeatKey, nextMillis, opts,
  templateData, templateOpts)
  rcall("ZADD", repeatKey, nextMillis, schedulerId)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['limit'] then
    table.insert(optionalValues, "limit")
    table.insert(optionalValues, opts['limit'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['startDate'] then
    table.insert(optionalValues, "startDate")
    table.insert(optionalValues, opts['startDate'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  if opts['offset'] then
    table.insert(optionalValues, "offset")
    table.insert(optionalValues, opts['offset'])
  else
    local offset = rcall("HGET", schedulerKey, "offset")
    if offset then
      table.insert(optionalValues, "offset")
      table.insert(optionalValues, tonumber(offset))
    end
  end
  local jsonTemplateOpts = cjson.encode(templateOpts)
  if jsonTemplateOpts and jsonTemplateOpts ~= '{}' then
    table.insert(optionalValues, "opts")
    table.insert(optionalValues, jsonTemplateOpts)
  end
  if templateData and templateData ~= '{}' then
    table.insert(optionalValues, "data")
    table.insert(optionalValues, templateData)
  end
  table.insert(optionalValues, "ic")
  table.insert(optionalValues, rcall("HGET", schedulerKey, "ic") or 1)
  rcall("DEL", schedulerKey) -- remove all attributes and then re-insert new ones
  rcall("HMSET", schedulerKey, "name", opts['name'], unpack(optionalValues))
end
local function getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
    local nextMillis
    if not prevMillis then
        if startDate then
            -- Assuming startDate is passed as milliseconds from JavaScript
            nextMillis = tonumber(startDate)
            nextMillis = nextMillis > now and nextMillis or now
        else
            nextMillis = now
            -- For the first iteration with no startDate and an explicit
            -- offset, align nextMillis to the next offset slot strictly
            -- after now. Without this the user-supplied offset is
            -- recorded but ignored, and the first job fires at now
            -- instead of the next aligned timestamp (issue #3705).
            if offset and offset > 0 then
                local aligned = math.floor(nextMillis / every) * every + offset
                if aligned <= nextMillis then
                    aligned = aligned + every
                end
                nextMillis = aligned
            end
        end
    else
        nextMillis = prevMillis + every
        -- check if we may have missed some iterations
        if nextMillis < now then
            nextMillis = math.floor(now / every) * every + every + (offset or 0)
        end
    end
    if not offset or offset == 0 then
        local timeSlot = math.floor(nextMillis / every) * every;
        offset = nextMillis - timeSlot;
    end
    -- Return a tuple nextMillis, offset
    return math.floor(nextMillis), math.floor(offset)
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local schedulerKey = repeatKey .. ":" .. jobSchedulerId
local maxEvents = getOrSetMaxEvents(metaKey)
local templateData = ARGV[4]
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
if prevMillis then
    prevMillis = tonumber(prevMillis)
end
local schedulerOpts = cmsgpack.unpack(ARGV[2])
local every = schedulerOpts['every']
-- For backwards compatibility we also check the offset from the job itself.
-- could be removed in future major versions.
local jobOffset = jobOpts['repeat'] and jobOpts['repeat']['offset'] or 0
local offset = schedulerOpts['offset'] or jobOffset or 0
local newOffset = offset
local updatedEvery = false
if every then
    -- if we changed the 'every' value we need to reset millis to nil
    local millis = prevMillis
    if prevMillis then
        local prevEvery = tonumber(rcall("HGET", schedulerKey, "every"))
        if prevEvery ~= every then
            millis = nil
            updatedEvery = true
        end
    end
    local startDate = schedulerOpts['startDate']
    nextMillis, newOffset = getJobSchedulerEveryNextMillis(millis, every, now, offset, startDate)
end
local function removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey, jobId, metaKey,
    eventsKey)
    if rcall("ZSCORE", delayedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", delayedKey, jobId)
        return true
    elseif rcall("ZSCORE", prioritizedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", prioritizedKey, jobId)
        return true
    else
        local pausedOrWaitKey = waitKey
        if isQueuePaused(metaKey) then
            pausedOrWaitKey = pausedKey
        end
        if rcall("LREM", pausedOrWaitKey, 1, jobId) > 0 then
            removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
            return true
        end
    end
    return false
end
local removedPrevJob = false
if prevMillis then
    local currentJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    local currentJobKey = schedulerKey .. ":" .. prevMillis
    -- In theory it should always exist the currentJobKey if there is a prevMillis unless something has
    -- gone really wrong.
    if rcall("EXISTS", currentJobKey) == 1 then
        removedPrevJob = removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey, currentJobId,
            metaKey, eventsKey)
    end
end
if removedPrevJob then
    -- The jobs has been removed and we want to replace it, so lets use the same millis.
    if every and not updatedEvery then
        nextMillis = prevMillis
    end
else
    -- Special case where no job was removed, and we need to add the next iteration.
    schedulerOpts['offset'] = newOffset
end
-- Check for job ID collision with existing jobs (in any state)
local jobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
local jobKey = prefixKey .. jobId
-- If there's already a job with this ID, in a state 
-- that is not updatable (active, completed, failed) we must 
-- handle the collision
local hasCollision = false
if rcall("EXISTS", jobKey) == 1 then
    if every then
        -- For 'every' case: try next time slot to avoid collision
        local nextSlotMillis = nextMillis + every
        local nextSlotJobId = "repeat:" .. jobSchedulerId .. ":" .. nextSlotMillis
        local nextSlotJobKey = prefixKey .. nextSlotJobId
        if rcall("EXISTS", nextSlotJobKey) == 0 then
            -- Next slot is free, use it
            nextMillis = nextSlotMillis
            jobId = nextSlotJobId
        else
            -- Next slot also has a job, return error code
            return -11 -- SchedulerJobSlotsBusy
        end
    else
        hasCollision = true
    end
end
local delay = nextMillis - now
-- Fast Clamp delay to minimum of 0
if delay < 0 then
    delay = 0
end
local nextJobKey = schedulerKey .. ":" .. nextMillis
if not hasCollision or removedPrevJob then
    -- jobId already calculated above during collision check
    storeJobScheduler(jobSchedulerId, schedulerKey, repeatKey, nextMillis, schedulerOpts, templateData, templateOpts)
    rcall("INCR", KEYS[8])
    addJobFromScheduler(nextJobKey, jobId, jobOpts, waitKey, pausedKey, KEYS[11], metaKey, prioritizedKey, KEYS[10],
        delayedKey, KEYS[7], eventsKey, schedulerOpts['name'], maxEvents, now, templateData, jobSchedulerId, delay)
elseif hasCollision then
    -- For 'pattern' case: return error code
    return -10 -- SchedulerJobIdCollision
end
if ARGV[9] ~= "" then
    rcall("HSET", ARGV[9], "nrjid", jobId)
end
return {jobId .. "", delay}
`,keys:11};e.s(["addJobScheduler",0,tM],52319),e.i(52319);let tP={name:"addLog",content:`--[[
  Add job log
  Input:
    KEYS[1] job id key
    KEYS[2] job logs key
    ARGV[1] id
    ARGV[2] log
    ARGV[3] keepLogs
  Output:
    -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
  local logCount = rcall("RPUSH", KEYS[2], ARGV[2])
  if ARGV[3] ~= '' then
    local keepLogs = tonumber(ARGV[3])
    rcall("LTRIM", KEYS[2], -keepLogs, -1)
    return math.min(keepLogs, logCount)
  end
  return logCount
else
  return -1
end
`,keys:2};e.s(["addLog",0,tP],13395),e.i(13395);let tN={name:"addParentJob",content:`--[[
  Adds a parent job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - adds the job to the waiting-children zset
    Input:
      KEYS[1] 'meta'
      KEYS[2] 'id'
      KEYS[3] 'delayed'
      KEYS[4] 'waiting-children'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[1]
local idKey = KEYS[2]
local delayedKey = KEYS[3]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationId = opts['de'] and opts['de']['id']
if deduplicationId then
    local deduplicationJobId = deduplicateJobWithoutReplace(deduplicationId, opts['de'],
        jobId, deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
        parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationJobId then
        return deduplicationJobId
    end
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local waitChildrenKey = KEYS[4]
rcall("ZADD", waitChildrenKey, timestamp, jobId)
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
      "waiting-children", "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6};e.s(["addParentJob",0,tN],9173),e.i(9173);let tJ={name:"addPrioritizedJob",content:`--[[
  Adds a prioritized job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'prioritized'
      KEYS[5] 'delayed'
      KEYS[6] 'completed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] 'pc' priority counter
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]] 
local metaKey = KEYS[2]
local idKey = KEYS[3]
local priorityKey = KEYS[4]
local completedKey = KEYS[6]
local activeKey = KEYS[7]
local eventsKey = KEYS[8]
local priorityCounterKey = KEYS[9]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[5],
  deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
                                 opts, timestamp, parentKey, parentData,
                                 repeatJobKey)
-- Add the job to the prioritized set
local isPausedOrMaxed = isQueuePausedOrMaxed(metaKey, activeKey)
addJobWithPriority( KEYS[1], priorityKey, priority, jobId, priorityCounterKey, isPausedOrMaxed)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9};e.s(["addPrioritizedJob",0,tJ],82936),e.i(82936);let tL={name:"addRepeatableJob",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      KEYS[2] 'delayed' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  pattern?
            [4]  endDate?
            [5]  every?
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      ARGV[4] custom key
      ARGV[5] prefix key
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local nextMillis = ARGV[1]
local legacyCustomKey = ARGV[3]
local customKey = ARGV[4]
local prefixKey = ARGV[5]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function storeRepeatableJob(repeatKey, customKey, nextMillis, rawOpts)
  rcall("ZADD", repeatKey, nextMillis, customKey)
  local opts = cmsgpack.unpack(rawOpts)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  rcall("HMSET", repeatKey .. ":" .. customKey, "name", opts['name'],
    unpack(optionalValues))
  return customKey
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local prevMillis = rcall("ZSCORE", repeatKey, customKey)
if prevMillis then
  local delayedJobId =  "repeat:" .. customKey .. ":" .. prevMillis
  local nextDelayedJobId =  repeatKey .. ":" .. customKey .. ":" .. nextMillis
  if rcall("ZSCORE", delayedKey, delayedJobId)
   and rcall("EXISTS", nextDelayedJobId) ~= 1 then
    removeJob(delayedJobId, true, prefixKey, true --[[remove debounce key]])
    rcall("ZREM", delayedKey, delayedJobId)
  end
end
-- Keep backwards compatibility with old repeatable jobs (<= 3.0.0)
if rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
  return storeRepeatableJob(repeatKey, legacyCustomKey, nextMillis, ARGV[2])
end
return storeRepeatableJob(repeatKey, customKey, nextMillis, ARGV[2])
`,keys:2};e.s(["addRepeatableJob",0,tL],66898),e.i(66898);let t_={name:"addStandardJob",content:`--[[
  Adds a job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - if delayed:
      - computes timestamp.
      - adds to delayed zset.
      - Emits a global event 'delayed' if the job is delayed.
    - if not delayed
      - Adds the jobId to the wait/paused list in one of three ways:
         - LIFO
         - FIFO
         - prioritized.
      - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'wait',
      KEYS[2] 'paused'
      KEYS[3] 'meta'
      KEYS[4] 'id'
      KEYS[5] 'completed'
      KEYS[6] 'delayed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] marker key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local eventsKey = KEYS[8]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", KEYS[4])
local metaKey = KEYS[3]
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, KEYS[5], eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[6],
  deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[1], KEYS[2])
-- LIFO or FIFO
local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
addJobInTargetList(target, KEYS[9], pushCmd, isPausedOrMaxed, jobId)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9};e.s(["addStandardJob",0,t_],24792),e.i(24792);let tF={name:"changeDelay",content:`--[[
  Change job delay when it is in delayed set.
  Input:
    KEYS[1] delayed key
    KEYS[2] meta key
    KEYS[3] marker key
    KEYS[4] events stream
    ARGV[1] delay
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] job key
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in delayed set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", ARGV[4]) == 1 then
  local jobId = ARGV[3]
  local delay = tonumber(ARGV[1])
  local score, delayedTimestamp = getDelayedScore(KEYS[1], ARGV[2], delay)
  local numRemovedElements = rcall("ZREM", KEYS[1], jobId)
  if numRemovedElements < 1 then
    return -3
  end
  rcall("HSET", ARGV[4], "delay", delay)
  rcall("ZADD", KEYS[1], score, jobId)
  local maxEvents = getOrSetMaxEvents(KEYS[2])
  rcall("XADD", KEYS[4], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(KEYS[3], KEYS[1])
  return 0
else
  return -1
end`,keys:4};e.s(["changeDelay",0,tF],41771),e.i(41771);let tq={name:"changePriority",content:`--[[
  Change job priority
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] 'active'
    KEYS[6] 'pc' priority counter
    KEYS[7] 'marker'
    ARGV[1] priority value
    ARGV[2] prefix key
    ARGV[3] job id
    ARGV[4] lifo
    Output:
       0  - OK
      -1  - Missing job
]]
local jobId = ARGV[3]
local jobKey = ARGV[2] .. jobId
local priority = tonumber(ARGV[1])
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
local function reAddJobWithNewPriority( prioritizedKey, markerKey, targetKey,
    priorityCounter, lifo, priority, jobId, isPausedOrMaxed)
    if priority == 0 then
        local pushCmd = lifo and 'RPUSH' or 'LPUSH'
        addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
    else
        if lifo then
            pushBackJobWithPriority(prioritizedKey, priority, jobId)
        else
            addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
                priorityCounter, isPausedOrMaxed)
        end
    end
end
if rcall("EXISTS", jobKey) == 1 then
    local metaKey = KEYS[3]
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[5], KEYS[1], KEYS[2])
    local prioritizedKey = KEYS[4]
    local priorityCounterKey = KEYS[6]
    local markerKey = KEYS[7]
    -- Re-add with the new priority
    if rcall("ZREM", prioritizedKey, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    elseif rcall("LREM", target, -1, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    end
    rcall("HSET", jobKey, "priority", priority)
    return 0
else
    return -1
end
`,keys:7};e.s(["changePriority",0,tq],90319),e.i(90319);let tG={name:"cleanJobsInSet",content:`--[[
  Remove jobs from the specific set.
  Input:
    KEYS[1]  set key,
    KEYS[2]  events stream key
    KEYS[3]  repeat key
    ARGV[1]  jobKey prefix
    ARGV[2]  timestamp
    ARGV[3]  limit the number of jobs to be removed. 0 is unlimited
    ARGV[4]  set name, can be any of 'wait', 'active', 'paused', 'delayed', 'completed', or 'failed'
]]
local rcall = redis.call
local repeatKey = KEYS[3]
local rangeStart = 0
local rangeEnd = -1
local limit = tonumber(ARGV[3])
-- If we're only deleting _n_ items, avoid retrieving all items
-- for faster performance
--
-- Start from the tail of the list, since that's where oldest elements
-- are generally added for FIFO lists
if limit > 0 then
  rangeStart = -1 - limit + 1
  rangeEnd = -1
end
-- Includes
--[[
  Function to clean job list.
  Returns jobIds and deleted count number.
]]
-- Includes
--[[
  Function to get the latest saved timestamp.
]]
local function getTimestamp(jobKey, attributes)
  if #attributes == 1 then
    return rcall("HGET", jobKey, attributes[1])
  end
  local jobTs
  for _, ts in ipairs(rcall("HMGET", jobKey, unpack(attributes))) do
    if (ts) then
      jobTs = ts
      break
    end
  end
  return jobTs
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function cleanList(listKey, jobKeyPrefix, rangeStart, rangeEnd,
  timestamp, isWaiting, jobSchedulersKey)
  local jobs = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  local deleted = {}
  local deletedCount = 0
  local jobTS
  local deletionMarker = ''
  local jobIdsLen = #jobs
  for i, job in ipairs(jobs) do
    if limit > 0 and deletedCount >= limit then
      break
    end
    local jobKey = jobKeyPrefix .. job
    if (isWaiting or rcall("EXISTS", jobKey .. ":lock") == 0) and
      not isJobSchedulerJob(job, jobKey, jobSchedulersKey) then
      -- Find the right timestamp of the job to compare to maxTimestamp:
      -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
      -- * processedOn represents when the job was last attempted, but it doesn't get populated until
      --   the job is first tried
      -- * timestamp is the original job submission time
      -- Fetch all three of these (in that order) and use the first one that is set so that we'll leave jobs
      -- that have been active within the grace period:
      jobTS = getTimestamp(jobKey, {"finishedOn", "processedOn", "timestamp"})
      if (not jobTS or jobTS <= timestamp) then
        -- replace the entry with a deletion marker; the actual deletion will
        -- occur at the end of the script
        rcall("LSET", listKey, rangeEnd - jobIdsLen + i, deletionMarker)
        removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]])
        deletedCount = deletedCount + 1
        table.insert(deleted, job)
      end
    end
  end
  rcall("LREM", listKey, 0, deletionMarker)
  return {deleted, deletedCount}
end
--[[
  Function to clean job set.
  Returns jobIds and deleted count number.
]] 
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  We use ZRANGEBYSCORE to make the case where we're deleting a limited number
  of items in a sorted set only run a single iteration. If we simply used
  ZRANGE, we may take a long time traversing through jobs that are within the
  grace period.
]]
local function getJobsInZset(zsetKey, rangeEnd, limit)
  if limit > 0 then
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd, "LIMIT", 0, limit)
  else
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd)
  end
end
local function cleanSet(
    setKey,
    jobKeyPrefix,
    rangeEnd,
    timestamp,
    limit,
    attributes,
    isFinished,
    jobSchedulersKey)
    local jobs = getJobsInZset(setKey, rangeEnd, limit)
    local deleted = {}
    local deletedCount = 0
    local jobTS
    for i, job in ipairs(jobs) do
        if limit > 0 and deletedCount >= limit then
            break
        end
        local jobKey = jobKeyPrefix .. job
        -- Extract a Job Scheduler Id from jobId ("repeat:job-scheduler-id:millis") 
        -- and check if it is in the scheduled jobs
        if not (jobSchedulersKey and isJobSchedulerJob(job, jobKey, jobSchedulersKey)) then
            if isFinished then
                removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                deletedCount = deletedCount + 1
                table.insert(deleted, job)
            else
                -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
                jobTS = getTimestamp(jobKey, attributes)
                if (not jobTS or jobTS <= timestamp) then
                    removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                    deletedCount = deletedCount + 1
                    table.insert(deleted, job)
                end
            end
        end
    end
    if (#deleted > 0) then
        for from, to in batches(#deleted, 7000) do
            rcall("ZREM", setKey, unpack(deleted, from, to))
        end
    end
    return {deleted, deletedCount}
end
local result
if ARGV[4] == "active" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], false --[[ hasFinished ]],
                      repeatKey)
elseif ARGV[4] == "delayed" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"processedOn", "timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "prioritized" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "wait" or ARGV[4] == "paused" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], true --[[ hasFinished ]],
                      repeatKey)
else
  rangeEnd = ARGV[2]
  -- No need to pass repeat key as in that moment job won't be related to a job scheduler
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"finishedOn"}, true  --[[ hasFinished ]])
end
rcall("XADD", KEYS[2], "*", "event", "cleaned", "count", result[2])
return result[1]
`,keys:3};e.s(["cleanJobsInSet",0,tG],18949),e.i(18949);let tV={name:"drain",content:`--[[
  Drains the queue, removes all jobs that are waiting
  or delayed, but not active, completed or failed
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'delayed'
    KEYS[4] 'prioritized'
    KEYS[5] 'jobschedulers' (repeat)
    ARGV[1]  queue key prefix
    ARGV[2]  should clean delayed jobs
]]
local rcall = redis.call
local queueBaseKey = ARGV[1]
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
-- We must not remove delayed jobs if they are associated to a job scheduler.
local scheduledJobs = {}
local jobSchedulers = rcall("ZRANGE", KEYS[5], 0, -1, "WITHSCORES")
-- For every job scheduler, get the current delayed job id.
for i = 1, #jobSchedulers, 2 do
    local jobSchedulerId = jobSchedulers[i]
    local jobSchedulerMillis = jobSchedulers[i + 1]
    local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. jobSchedulerMillis
    scheduledJobs[delayedJobId] = true
end
removeListJobs(KEYS[1], true, queueBaseKey, 0, scheduledJobs) -- wait
removeListJobs(KEYS[2], true, queueBaseKey, 0, scheduledJobs) -- paused
if ARGV[2] == "1" then
  removeZSetJobs(KEYS[3], true, queueBaseKey, 0, scheduledJobs) -- delayed
end
removeZSetJobs(KEYS[4], true, queueBaseKey, 0, scheduledJobs) -- prioritized
`,keys:5};e.s(["drain",0,tV],59302),e.i(59302);let tU={name:"extendLock",content:`--[[
  Extend lock and removes the job from the stalled set.
  Input:
    KEYS[1] 'lock',
    KEYS[2] 'stalled'
    ARGV[1]  token
    ARGV[2]  lock duration in milliseconds
    ARGV[3]  jobid
  Output:
    "1" if lock extended successfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  --   if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2], "XX") then
  if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2]) then
    rcall("SREM", KEYS[2], ARGV[3])
    return 1
  end
end
return 0
`,keys:2};e.s(["extendLock",0,tU],48333),e.i(48333);let tB={name:"extendLocks",content:`--[[
  Extend locks for multiple jobs and remove them from the stalled set if successful.
  Return the list of job IDs for which the operation failed.
  KEYS[1] = stalled key
  ARGV[1] = baseKey
  ARGV[2] = tokens
  ARGV[3] = jobIds
  ARGV[4] = lockDuration (ms)
  Output:
    An array of failed job IDs. If empty, all succeeded.
]]
local rcall = redis.call
local stalledKey = KEYS[1]
local baseKey = ARGV[1]
local tokens = cmsgpack.unpack(ARGV[2])
local jobIds = cmsgpack.unpack(ARGV[3])
local lockDuration = ARGV[4]
local jobCount = #jobIds
local failedJobs = {}
for i = 1, jobCount, 1 do
    local lockKey = baseKey .. jobIds[i] .. ':lock'
    local jobId = jobIds[i]
    local token = tokens[i]
    local currentToken = rcall("GET", lockKey)
    if currentToken then
        if currentToken == token then
            local setResult = rcall("SET", lockKey, token, "PX", lockDuration)
            if setResult then
                rcall("SREM", stalledKey, jobId)
            else
                table.insert(failedJobs, jobId)
            end
        else
            table.insert(failedJobs, jobId)
        end
    else
        table.insert(failedJobs, jobId)
    end
end
return failedJobs
`,keys:1};e.s(["extendLocks",0,tB],47637),e.i(47637);let tY={name:"getCounts",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1...] types
]]
local rcall = redis.call;
local prefix = KEYS[1]
local results = {}
for i = 1, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        results[#results+1] = count-1
      else
        results[#results+1] = 0
      end
    else
      results[#results+1] = rcall("LLEN", stateKey)
    end
  elseif ARGV[i] == "active" then
    results[#results+1] = rcall("LLEN", stateKey)
  else
    results[#results+1] = rcall("ZCARD", stateKey)
  end
end
return results
`,keys:1};e.s(["getCounts",0,tY],560),e.i(560);let tz={name:"getCountsPerPriority",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1] wait key
      KEYS[2] paused key
      KEYS[3] meta key
      KEYS[4] prioritized key
      ARGV[1...] priorities
]]
local rcall = redis.call
local results = {}
local waitKey = KEYS[1]
local pausedKey = KEYS[2]
local prioritizedKey = KEYS[4]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
for i = 1, #ARGV do
  local priority = tonumber(ARGV[i])
  if priority == 0 then
    if isQueuePaused(KEYS[3]) then
      results[#results+1] = rcall("LLEN", pausedKey)
    else
      results[#results+1] = rcall("LLEN", waitKey)
    end
  else
    results[#results+1] = rcall("ZCOUNT", prioritizedKey,
      priority * 0x100000000, (priority + 1)  * 0x100000000 - 1)
  end
end
return results
`,keys:4};e.s(["getCountsPerPriority",0,tz],8910),e.i(8910);let tW={name:"getDependencyCounts",content:`--[[
  Get counts per child states
    Input:
      KEYS[1]    processed key
      KEYS[2]    unprocessed key
      KEYS[3]    ignored key
      KEYS[4]    failed key
      ARGV[1...] types
]]
local rcall = redis.call;
local processedKey = KEYS[1]
local unprocessedKey = KEYS[2]
local ignoredKey = KEYS[3]
local failedKey = KEYS[4]
local results = {}
for i = 1, #ARGV do
  if ARGV[i] == "processed" then
    results[#results+1] = rcall("HLEN", processedKey)
  elseif ARGV[i] == "unprocessed" then
    results[#results+1] = rcall("SCARD", unprocessedKey)
  elseif ARGV[i] == "ignored" then
    results[#results+1] = rcall("HLEN", ignoredKey)
  else
    results[#results+1] = rcall("ZCARD", failedKey)
  end
end
return results
`,keys:4};e.s(["getDependencyCounts",0,tW],75944),e.i(75944);let t$={name:"getJobScheduler",content:`--[[
  Get job scheduler record.
  Input:
    KEYS[1] 'repeat' key
    ARGV[1] id
]]
local rcall = redis.call
local jobSchedulerKey = KEYS[1] .. ":" .. ARGV[1]
local score = rcall("ZSCORE", KEYS[1], ARGV[1])
if score then
  return {rcall("HGETALL", jobSchedulerKey), score} -- get job data
end
return {nil, nil}
`,keys:1};e.s(["getJobScheduler",0,t$],59065),e.i(59065);let tH={name:"getMetrics",content:`--[[
  Get metrics
  Input:
    KEYS[1] 'metrics' key
    KEYS[2] 'metrics data' key
    ARGV[1] start index
    ARGV[2] end index
]]
local rcall = redis.call;
local metricsKey = KEYS[1]
local dataKey = KEYS[2]
local metrics = rcall("HMGET", metricsKey, "count", "prevTS", "prevCount")
local data = rcall("LRANGE", dataKey, tonumber(ARGV[1]), tonumber(ARGV[2]))
local numPoints = rcall("LLEN", dataKey)
return {metrics, data, numPoints}
`,keys:2};e.s(["getMetrics",0,tH],92943),e.i(92943);let tQ={name:"getRanges",content:`--[[
  Get job ids per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1]    start
      ARGV[2]    end
      ARGV[3]    asc
      ARGV[4...] types
]]
local rcall = redis.call
local prefix = KEYS[1]
local rangeStart = tonumber(ARGV[1])
local rangeEnd = tonumber(ARGV[2])
local asc = ARGV[3]
local results = {}
local function getRangeInList(listKey, asc, rangeStart, rangeEnd, results)
  if asc == "1" then
    local modifiedRangeStart
    local modifiedRangeEnd
    if rangeStart == -1 then
      modifiedRangeStart = 0
    else
      modifiedRangeStart = -(rangeStart + 1)
    end
    if rangeEnd == -1 then
      modifiedRangeEnd = 0
    else
      modifiedRangeEnd = -(rangeEnd + 1)
    end
    results[#results+1] = rcall("LRANGE", listKey,
      modifiedRangeEnd,
      modifiedRangeStart)
  else
    results[#results+1] = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  end
end
for i = 4, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
      else
        results[#results+1] = {}
      end
    else
      getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
    end
  elseif ARGV[i] == "active" then
    getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
  else
    if asc == "1" then
      results[#results+1] = rcall("ZRANGE", stateKey, rangeStart, rangeEnd)
    else
      results[#results+1] = rcall("ZREVRANGE", stateKey, rangeStart, rangeEnd)
    end
  end
end
return results
`,keys:1};e.s(["getRanges",0,tQ],70737),e.i(70737);let tZ={name:"getRateLimitTtl",content:`--[[
  Get rate limit ttl
    Input:
      KEYS[1] 'limiter'
      KEYS[2] 'meta'
      ARGV[1] maxJobs
]]
local rcall = redis.call
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
local rateLimiterKey = KEYS[1]
if ARGV[1] ~= "0" then
  return getRateLimitTTL(tonumber(ARGV[1]), rateLimiterKey)
else
  local rateLimitMax = rcall("HGET", KEYS[2], "max")
  if rateLimitMax then
    return getRateLimitTTL(tonumber(rateLimitMax), rateLimiterKey)
  end
  return rcall("PTTL", rateLimiterKey)
end
`,keys:2};e.s(["getRateLimitTtl",0,tZ],76366),e.i(76366);let tX={name:"getState",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'prioritized'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
-- Includes
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local active_items = rcall("LRANGE", KEYS[4] , 0, -1)
if checkItemInList(active_items, ARGV[1]) ~= nil then
  return "active"
end
local wait_items = rcall("LRANGE", KEYS[5] , 0, -1)
if checkItemInList(wait_items, ARGV[1]) ~= nil then
  return "waiting"
end
local paused_items = rcall("LRANGE", KEYS[6] , 0, -1)
if checkItemInList(paused_items, ARGV[1]) ~= nil then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7], ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8};e.s(["getState",0,tX],18295),e.i(18295);let t0={name:"getStateV2",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
if rcall("LPOS", KEYS[4] , ARGV[1]) then
  return "active"
end
if rcall("LPOS", KEYS[5] , ARGV[1]) then
  return "waiting"
end
if rcall("LPOS", KEYS[6] , ARGV[1]) then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7] , ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8};e.s(["getStateV2",0,t0],29065),e.i(29065);let t1={name:"isFinished",content:`--[[
  Checks if a job is finished (.i.e. is in the completed or failed set)
  Input: 
    KEYS[1] completed key
    KEYS[2] failed key
    KEYS[3] job key
    ARGV[1] job id
    ARGV[2] return value?
  Output:
    0 - Not finished.
    1 - Completed.
    2 - Failed.
   -1 - Missing job. 
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[3]) ~= 1 then
  if ARGV[2] == "1" then
    return {-1,"Missing key for job " .. KEYS[3] .. ". isFinished"}
  end  
  return -1
end
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  if ARGV[2] == "1" then
    local returnValue = rcall("HGET", KEYS[3], "returnvalue")
    return {1,returnValue}
  end
  return 1
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  if ARGV[2] == "1" then
    local failedReason = rcall("HGET", KEYS[3], "failedReason")
    return {2,failedReason}
  end
  return 2
end
if ARGV[2] == "1" then
  return {0}
end
return 0
`,keys:3};e.s(["isFinished",0,t1],65892),e.i(65892);let t2={name:"isJobInList",content:`--[[
  Checks if job is in a given list.
  Input:
    KEYS[1]
    ARGV[1]
  Output:
    1 if element found in the list.
]]
-- Includes
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local items = redis.call("LRANGE", KEYS[1] , 0, -1)
return checkItemInList(items, ARGV[1])
`,keys:1};e.s(["isJobInList",0,t2],80614),e.i(80614);let t3={name:"isMaxed",content:`--[[
  Checks if queue is maxed.
  Input:
    KEYS[1] meta key
    KEYS[2] active key
  Output:
    1 if element found in the list.
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if queue is maxed or not.
]]
local function isQueueMaxed(queueMetaKey, activeKey)
  local maxConcurrency = rcall("HGET", queueMetaKey, "concurrency")
  if maxConcurrency then
    local activeCount = rcall("LLEN", activeKey)
    if activeCount >= tonumber(maxConcurrency) then
      return true
    end
  end
  return false
end
return isQueueMaxed(KEYS[1], KEYS[2])
`,keys:2};e.s(["isMaxed",0,t3],63810),e.i(63810);let t4={name:"moveJobFromActiveToWait",content:`--[[
  Function to move job from active state to wait.
  Input:
    KEYS[1]  active key
    KEYS[2]  wait key
    KEYS[3]  stalled key
    KEYS[4]  paused key
    KEYS[5]  meta key
    KEYS[6]  limiter key
    KEYS[7]  prioritized key
    KEYS[8]  marker key
    KEYS[9]  event key
    ARGV[1] job id
    ARGV[2] lock token
    ARGV[3] job id key
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local jobId = ARGV[1]
local token = ARGV[2]
local jobKey = ARGV[3]
if rcall("EXISTS", jobKey) == 0 then
  return -1
end
local errorCode = removeLock(jobKey, KEYS[3], token, jobId)
if errorCode < 0 then
  return errorCode
end
local metaKey = KEYS[5]
local removed = rcall("LREM", KEYS[1], 1, jobId)
if removed > 0 then
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[1], KEYS[2], KEYS[4])
  local priority = tonumber(rcall("HGET", ARGV[3], "priority")) or 0
  if priority > 0 then
    pushBackJobWithPriority(KEYS[7], priority, jobId)
  else
    addJobInTargetList(target, KEYS[8], "RPUSH", isPausedOrMaxed, jobId)
  end
  local maxEvents = getOrSetMaxEvents(metaKey)
  -- Emit waiting event
  rcall("XADD", KEYS[9], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", jobId, "prev", "active")
end
local pttl = rcall("PTTL", KEYS[6])
if pttl > 0 then
  return pttl
else
  return 0
end
`,keys:9};e.s(["moveJobFromActiveToWait",0,t4],65856),e.i(65856);let t6={name:"moveJobsToWait",content:`--[[
  Move completed, failed or delayed jobs to wait.
  Note: Does not support jobs with priorities.
  Input:
    KEYS[1] base key
    KEYS[2] events stream
    KEYS[3] state key (failed, completed, delayed)
    KEYS[4] 'wait'
    KEYS[5] 'paused'
    KEYS[6] 'meta'
    KEYS[7] 'active'
    KEYS[8] 'marker'
    ARGV[1] count
    ARGV[2] timestamp
    ARGV[3] prev state
  Output:
    1  means the operation is not completed
    0  means the operation is completed
]]
local maxCount = tonumber(ARGV[1])
local timestamp = tonumber(ARGV[2])
local rcall = redis.call;
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local metaKey = KEYS[6]
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[4], KEYS[5])
local jobs = rcall('ZRANGEBYSCORE', KEYS[3], 0, timestamp, 'LIMIT', 0, maxCount)
if (#jobs > 0) then
    if ARGV[3] == "failed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "failedReason")
        end
    elseif ARGV[3] == "completed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "returnvalue")
        end
    end
    local maxEvents = getOrSetMaxEvents(metaKey)
    for i, key in ipairs(jobs) do
        -- Emit waiting event
        rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event",
              "waiting", "jobId", key, "prev", ARGV[3]);
    end
    for from, to in batches(#jobs, 7000) do
        rcall("ZREM", KEYS[3], unpack(jobs, from, to))
        rcall("LPUSH", target, unpack(jobs, from, to))
    end
    addBaseMarkerIfNeeded(KEYS[8], isPausedOrMaxed)
end
maxCount = maxCount - #jobs
if (maxCount <= 0) then return 1 end
return 0
`,keys:8};e.s(["moveJobsToWait",0,t6],63040),e.i(63040);let t5={name:"moveStalledJobsToWait",content:`--[[
  Move stalled jobs to wait.
    Input:
      KEYS[1] 'stalled' (SET)
      KEYS[2] 'wait',   (LIST)
      KEYS[3] 'active', (LIST)
      KEYS[4] 'stalled-check', (KEY)
      KEYS[5] 'meta', (KEY)
      KEYS[6] 'paused', (LIST)
      KEYS[7] 'marker'
      KEYS[8] 'event stream' (STREAM)
      KEYS[9] 'repeat' key
      ARGV[1]  Max stalled job count
      ARGV[2]  queue.toKey('')
      ARGV[3]  timestamp
      ARGV[4]  max check time
    Events:
      'stalled' with stalled job id.
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to move job to wait to be picked up by a waiting worker.
]]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey,
  jobId, pushCmd)
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
  addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId", jobId, 'prev', 'active')
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
local stalledKey = KEYS[1]
local waitKey = KEYS[2]
local activeKey = KEYS[3]
local stalledCheckKey = KEYS[4]
local metaKey = KEYS[5]
local pausedKey = KEYS[6]
local markerKey = KEYS[7]
local eventStreamKey = KEYS[8]
local repeatKey = KEYS[9]
local maxStalledJobCount = tonumber(ARGV[1])
local queueKeyPrefix = ARGV[2]
local timestamp = ARGV[3]
local maxCheckTime = ARGV[4]
if rcall("EXISTS", stalledCheckKey) == 1 then
    return {}
end
rcall("SET", stalledCheckKey, timestamp, "PX", maxCheckTime)
-- Trim events before emitting them to avoid trimming events emitted in this script
trimEvents(metaKey, eventStreamKey)
-- Move all stalled jobs to wait
local stalling = rcall('SMEMBERS', stalledKey)
local stalled = {}
if (#stalling > 0) then
    rcall('DEL', stalledKey)
    -- Remove from active list
    for i, jobId in ipairs(stalling) do
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            -- If the jobId is a delay marker ID we just remove it.
            rcall("LREM", activeKey, 1, jobId)
        else
            local jobKey = queueKeyPrefix .. jobId
            -- Check that the lock is also missing, then we can handle this job as really stalled.
            if (rcall("EXISTS", jobKey .. ":lock") == 0) then
                --  Remove from the active queue.
                local removed = rcall("LREM", activeKey, 1, jobId)
                if (removed > 0) then
                    -- If this job has been stalled too many times, such as if it crashes the worker, then fail it.
                    local stalledCount = rcall("HINCRBY", jobKey, "stc", 1)
                    -- Check if this is a repeatable job by looking at job options
                    local jobSchedulerId = rcall("HGET", jobKey, "rjk")
                    local isRepeatableJob = false
                    if jobSchedulerId then
                        local schedulerKey = repeatKey .. ":" .. jobSchedulerId
                        if rcall("EXISTS", schedulerKey) == 1 then
                            isRepeatableJob = true
                        else
                            -- TODO: remove this check in v6, as it is only needed for legacy repeatable jobs
                            -- that stored the scheduler id in the job key but did not create the scheduler hash key
                            local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
                            if prevMillis then
                                isRepeatableJob = true
                            end
                        end
                    end
                    -- Only fail job if it exceeds stall limit AND is not a repeatable job
                    if stalledCount > maxStalledJobCount and not isRepeatableJob then
                        local failedReason = "job stalled more than allowable limit"
                        rcall("HSET", jobKey, "defa", failedReason)
                    end
                    moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey, jobId,
                        "RPUSH")
                    -- Emit the stalled event
                    rcall("XADD", eventStreamKey, "*", "event", "stalled", "jobId", jobId)
                    table.insert(stalled, jobId)
                end
            end
        end
    end
end
-- Mark potentially stalled jobs
local active = rcall('LRANGE', activeKey, 0, -1)
if (#active > 0) then
    for from, to in batches(#active, 7000) do
        rcall('SADD', stalledKey, unpack(active, from, to))
    end
end
return stalled
`,keys:9};e.s(["moveStalledJobsToWait",0,t5],3124),e.i(3124);let t8={name:"moveToActive",content:`--[[
  Move next job to be processed to active, lock it and fetch its data. The job
  may be delayed, in that case we need to move it to the delayed set instead.
  This operation guarantees that the worker owns the job during the lock
  expiration time. The worker is responsible of keeping the lock fresh
  so that no other worker picks this job again.
  Input:
    KEYS[1] wait key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] stream events key
    KEYS[5] stalled key
    -- Rate limiting
    KEYS[6] rate limiter key
    KEYS[7] delayed key
    -- Delayed jobs
    KEYS[8] paused key
    KEYS[9] meta key
    KEYS[10] pc priority counter
    -- Marker
    KEYS[11] marker key
    -- Arguments
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] opts
    opts - token - lock token
    opts - lockDuration
    opts - limiter
    opts - name - worker name
]]
local rcall = redis.call
local waitKey = KEYS[1]
local activeKey = KEYS[2]
local eventStreamKey = KEYS[4]
local rateLimiterKey = KEYS[6]
local delayedKey = KEYS[7]
local opts = cmsgpack.unpack(ARGV[3])
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration = getTargetQueueList(KEYS[9],
    activeKey, waitKey, KEYS[8])
-- Check if there are delayed jobs that we can move to wait.
local markerKey = KEYS[11]
promoteDelayedJobs(delayedKey, markerKey, target, KEYS[3], eventStreamKey, ARGV[1],
                   ARGV[2], KEYS[10], isPausedOrMaxed)
local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
-- Check if we are rate limited first.
if expireTime > 0 then return {0, 0, expireTime, 0} end
-- paused or maxed queue
if isPausedOrMaxed then return {0, 0, 0, 0} end
local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
-- no job ID, try non-blocking move from wait to active
local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
-- Markers in waitlist DEPRECATED in v5: Will be completely removed in v6.
if jobId and string.sub(jobId, 1, 2) == "0:" then
    rcall("LREM", activeKey, 1, jobId)
    jobId = rcall("RPOPLPUSH", waitKey, activeKey)
end
if jobId then
    return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                   maxJobs, limiterDuration, markerKey, opts)
else
    jobId = moveJobFromPrioritizedToActive(KEYS[3], activeKey, KEYS[10])
    if jobId then
        return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                       maxJobs, limiterDuration, markerKey, opts)
    end
end
-- Return the timestamp for the next delayed job if any.
local nextTimestamp = getNextDelayedTimestamp(delayedKey)
if nextTimestamp ~= nil then return {0, 0, 0, nextTimestamp} end
return {0, 0, 0, 0}
`,keys:11};e.s(["moveToActive",0,t8],74060),e.i(74060);let t7={name:"moveToDelayed",content:`--[[
  Moves job from active to delayed set.
  Input:
    KEYS[1] marker key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] delayed key
    KEYS[5] job key
    KEYS[6] events stream
    KEYS[7] meta key
    KEYS[8] stalled key
    KEYS[9] wait key
    KEYS[10] rate limiter key
    KEYS[11] paused key
    KEYS[12] pc priority counter
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] queue token
    ARGV[5] delay value
    ARGV[6] skip attempt
    ARGV[7] optional job fields to update
    ARGV[8] fetch next?
    ARGV[9] opts
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in active set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to fetch the next job to process.
  Tries to get the next job to avoid an extra roundtrip if the queue is
  not closing and not rate limited.
  Input:
    waitKey - wait list key
    activeKey - active list key
    prioritizedKey - prioritized sorted set key
    eventStreamKey - event stream key
    rateLimiterKey - rate limiter key
    delayedKey - delayed sorted set key
    pausedKey - paused list key
    metaKey - meta hash key
    pcKey - priority counter key
    markerKey - marker key
    prefix - keys prefix
    timestamp - current timestamp
    opts - options table:
      token (required) - lock token used when locking jobs
      lockDuration (required) - lock duration for acquired jobs
      limiter (optional) - rate limiter options table (e.g. { max = number })
]]
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function fetchNextJob(waitKey, activeKey, prioritizedKey, eventStreamKey,
    rateLimiterKey, delayedKey, pausedKey, metaKey, pcKey, markerKey, prefix,
    timestamp, opts)
    local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration =
        getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Check if there are delayed jobs that can be promoted
    promoteDelayedJobs(delayedKey, markerKey, target, prioritizedKey,
        eventStreamKey, prefix, timestamp, pcKey, isPausedOrMaxed)
    local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
    -- Check if we are rate limited first.
    local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
    if expireTime > 0 then
        return {0, 0, expireTime, 0}
    end
    -- paused or maxed queue
    if isPausedOrMaxed then
        return {0, 0, 0, 0}
    end
    local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
    local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
    if jobId then
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            rcall("LREM", activeKey, 1, jobId)
            -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
            -- but if ID is 0:0, then there is at least 1 prioritized job to process
            if jobId == "0:0" then
                jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
                return prepareJobForProcessing(prefix, rateLimiterKey,
                    eventStreamKey, jobId, timestamp, maxJobs,
                    limiterDuration, markerKey, opts)
            end
        else
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    else
        jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
        if jobId then
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    end
    -- Return the timestamp for the next delayed job if any.
    local nextTimestamp = getNextDelayedTimestamp(delayedKey)
    if nextTimestamp ~= nil then
        -- The result is guaranteed to be positive, since the
        -- ZRANGEBYSCORE command would have return a job otherwise.
        return {0, 0, 0, nextTimestamp}
    end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobKey = KEYS[5]
local markerKey = KEYS[1]
local metaKey = KEYS[7]
local token = ARGV[4] 
if rcall("EXISTS", jobKey) == 1 then
    local errorCode = removeLock(jobKey, KEYS[8], token, ARGV[3])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobKey, ARGV[7])
    local delayedKey = KEYS[4]
    local jobId = ARGV[3]
    local delay = tonumber(ARGV[5])
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if numRemovedElements < 1 then return -3 end
    local score, delayedTimestamp = getDelayedScore(delayedKey, ARGV[2], delay)
    if ARGV[6] == "0" then
        rcall("HINCRBY", jobKey, "atm", 1)
    end
    rcall("HSET", jobKey, "delay", ARGV[5])
    local maxEvents = getOrSetMaxEvents(metaKey)
    rcall("ZADD", delayedKey, score, jobId)
    rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
          "jobId", jobId, "delay", delayedTimestamp)
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[8] == "1") then
        local opts = cmsgpack.unpack(ARGV[9])
        local result = fetchNextJob(KEYS[9], KEYS[2], KEYS[3], KEYS[6],
            KEYS[10], KEYS[4], KEYS[11], metaKey, KEYS[12], markerKey,
            ARGV[1], ARGV[2], opts)
        if result and type(result[1]) == "table" then
            return result
        end
    end
    -- Check if we need to push a marker job to wake up sleeping workers.
    addDelayMarkerIfNeeded(markerKey, delayedKey)
    return 0
else
    return -1
end
`,keys:12};e.s(["moveToDelayed",0,t7],84329),e.i(84329);let t9={name:"moveToFinished",content:`--[[
  Move job from active to a finished status (completed or failed)
  A job can only be moved to completed if it was active.
  The job must be locked before it can be moved to a finished status,
  and the lock must be released in this script.
    Input:
      KEYS[1] wait key
      KEYS[2] active key
      KEYS[3] prioritized key
      KEYS[4] event stream key
      KEYS[5] stalled key
      -- Rate limiting
      KEYS[6] rate limiter key
      KEYS[7] delayed key
      KEYS[8] paused key
      KEYS[9] meta key
      KEYS[10] pc priority counter
      KEYS[11] completed/failed key
      KEYS[12] jobId key
      KEYS[13] metrics key
      KEYS[14] marker key
      ARGV[1]  jobId
      ARGV[2]  timestamp
      ARGV[3]  msg property returnvalue / failedReason
      ARGV[4]  return value / failed reason
      ARGV[5]  target (completed/failed)
      ARGV[6]  fetch next?
      ARGV[7]  keys prefix
      ARGV[8]  opts
      ARGV[9]  job fields to update
      opts - token - lock token
      opts - keepJobs
      opts - lockDuration - lock duration in milliseconds
      opts - attempts max attempts
      opts - maxMetricsSize
      opts - fpof - fail parent on fail
      opts - cpof - continue parent on fail
      opts - idof - ignore dependency on fail
      opts - rdof - remove dependency on fail
      opts - name - worker name
    Output:
      0 OK
      -1 Missing key.
      -2 Missing lock.
      -3 Job not in active set
      -4 Job has pending children
      -6 Lock is not owned by this client
      -9 Job has failed children
    Events:
      'completed/failed'
]]
local rcall = redis.call
--- Includes
--[[
  Functions to collect metrics based on a current and previous count of jobs.
  Granularity is fixed at 1 minute.
]]
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
local function collectMetrics(metaKey, dataPointsList, maxDataPoints,
                                 timestamp)
    -- Increment current count
    local count = rcall("HINCRBY", metaKey, "count", 1) - 1
    -- Compute how many data points we need to add to the list, N.
    local prevTS = rcall("HGET", metaKey, "prevTS")
    if not prevTS then
        -- If prevTS is nil, set it to the current timestamp
        rcall("HSET", metaKey, "prevTS", timestamp, "prevCount", 0)
        return
    end
    local N = math.min(math.floor(timestamp / 60000) - math.floor(prevTS / 60000), tonumber(maxDataPoints))
    if N > 0 then
        local delta = count - rcall("HGET", metaKey, "prevCount")
        -- If N > 1, add N-1 zeros to the list
        if N > 1 then
            local points = {}
            points[1] = delta
            for i = 2, N do
                points[i] = 0
            end
            for from, to in batches(#points, 7000) do
                rcall("LPUSH", dataPointsList, unpack(points, from, to))
            end
        else
            -- LPUSH delta to the list
            rcall("LPUSH", dataPointsList, delta)
        end
        -- LTRIM to keep list to its max size
        rcall("LTRIM", dataPointsList, 0, maxDataPoints - 1)
        -- update prev count with current count
        rcall("HSET", metaKey, "prevCount", count, "prevTS", timestamp)
    end
end
--[[
  Function to fetch the next job to process.
  Tries to get the next job to avoid an extra roundtrip if the queue is
  not closing and not rate limited.
  Input:
    waitKey - wait list key
    activeKey - active list key
    prioritizedKey - prioritized sorted set key
    eventStreamKey - event stream key
    rateLimiterKey - rate limiter key
    delayedKey - delayed sorted set key
    pausedKey - paused list key
    metaKey - meta hash key
    pcKey - priority counter key
    markerKey - marker key
    prefix - keys prefix
    timestamp - current timestamp
    opts - options table:
      token (required) - lock token used when locking jobs
      lockDuration (required) - lock duration for acquired jobs
      limiter (optional) - rate limiter options table (e.g. { max = number })
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function fetchNextJob(waitKey, activeKey, prioritizedKey, eventStreamKey,
    rateLimiterKey, delayedKey, pausedKey, metaKey, pcKey, markerKey, prefix,
    timestamp, opts)
    local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration =
        getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Check if there are delayed jobs that can be promoted
    promoteDelayedJobs(delayedKey, markerKey, target, prioritizedKey,
        eventStreamKey, prefix, timestamp, pcKey, isPausedOrMaxed)
    local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
    -- Check if we are rate limited first.
    local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
    if expireTime > 0 then
        return {0, 0, expireTime, 0}
    end
    -- paused or maxed queue
    if isPausedOrMaxed then
        return {0, 0, 0, 0}
    end
    local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
    local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
    if jobId then
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            rcall("LREM", activeKey, 1, jobId)
            -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
            -- but if ID is 0:0, then there is at least 1 prioritized job to process
            if jobId == "0:0" then
                jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
                return prepareJobForProcessing(prefix, rateLimiterKey,
                    eventStreamKey, jobId, timestamp, maxJobs,
                    limiterDuration, markerKey, opts)
            end
        else
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    else
        jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
        if jobId then
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    end
    -- Return the timestamp for the next delayed job if any.
    local nextTimestamp = getNextDelayedTimestamp(delayedKey)
    if nextTimestamp ~= nil then
        -- The result is guaranteed to be positive, since the
        -- ZRANGEBYSCORE command would have return a job otherwise.
        return {0, 0, 0, nextTimestamp}
    end
end
--[[
  Function to recursively move from waitingChildren to failed.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local handleChildFailureAndMoveParentToWait = function (parentQueueKey, parentKey, parentId, jobIdKey, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    local parentDelayedKey = parentQueueKey .. ":delayed"
    local parentWaitingChildrenOrDelayedKey
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentWaitingChildrenKey
    elseif rcall("ZSCORE", parentDelayedKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentDelayedKey
      rcall("HSET", parentKey, "delay", 0)
    end
    if parentWaitingChildrenOrDelayedKey then
      rcall("ZREM", parentWaitingChildrenOrDelayedKey, parentId)
      local deferredFailure = "child " .. jobIdKey .. " failed"
      rcall("HSET", parentKey, "defa", deferredFailure)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    else
      if not rcall("ZSCORE", parentQueueKey .. ":failed", parentId) then
        local deferredFailure = "child " .. jobIdKey .. " failed"
        rcall("HSET", parentKey, "defa", deferredFailure)
      end
    end
  end
end
local moveChildFromDependenciesIfNeeded = function (rawParentData, childKey, failedReason, timestamp)
  if rawParentData then
    local parentData = cjson.decode(rawParentData)
    local parentKey = parentData['queueKey'] .. ':' .. parentData['id']
    local parentDependenciesChildrenKey = parentKey .. ":dependencies"
    if parentData['fpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentUnsuccessfulChildrenKey = parentKey .. ":unsuccessful"
        rcall("ZADD", parentUnsuccessfulChildrenKey, timestamp, childKey)
        handleChildFailureAndMoveParentToWait(
          parentData['queueKey'],
          parentKey,
          parentData['id'],
          childKey,
          timestamp
        )
      end
    elseif parentData['cpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentFailedChildrenKey = parentKey .. ":failed"
        rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        moveParentToWaitIfNeeded(parentData['queueKey'], parentKey, parentData['id'], timestamp)
      end
    elseif parentData['idof'] or parentData['rdof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        moveParentToWaitIfNoPendingDependencies(parentData['queueKey'], parentDependenciesChildrenKey,
          parentKey, parentData['id'], timestamp)
        if parentData['idof'] then
          local parentFailedChildrenKey = parentKey .. ":failed"
          rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        end
      end
    end
  end
end
--[[
  Function to remove deduplication key if needed
  when a job is moved to completed or failed states.
]]
local function removeDeduplicationKeyIfNeededOnFinalization(prefixKey,
  deduplicationId, jobId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local pttl = rcall("PTTL", deduplicationKey)
    if pttl == 0 then
      return rcall("DEL", deduplicationKey)
    end
    if pttl == -1 then
      local currentJobId = rcall('GET', deduplicationKey)
      if currentJobId and currentJobId == jobId then
        return rcall("DEL", deduplicationKey)
      end
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Functions to remove jobs by max age.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix, maxLimit)
  local start = timestamp - maxAge * 1000
  local jobIds = rcall("ZREVRANGEBYSCORE", targetSet, start, "-inf", "LIMIT", 0, maxLimit)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  if #jobIds > 0 then
    if #jobIds < maxLimit then
      rcall("ZREMRANGEBYSCORE", targetSet, "-inf", start)
    else
      for from, to in batches(#jobIds, 7000) do
        rcall("ZREM", targetSet, unpack(jobIds, from, to))
      end
    end
  end
end
--[[
  Functions to remove jobs by max count.
]]
-- Includes
local function removeJobsByMaxCount(maxCount, targetSet, prefix)
  local start = maxCount
  local jobIds = rcall("ZREVRANGE", targetSet, start, -1)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYRANK", targetSet, 0, -(maxCount + 1))
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to create a new job from stored dedup-next data
  when a deduplicated job with keepLastIfActive finishes.
  At most one next job is created per deduplication ID.
  Multiple triggers while active overwrite the dedup-next data,
  so only the latest data is used.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function requeueDeduplicatedJob(prefix, deduplicationId, eventStreamKey,
    metaKey, activeKey, waitKey, pausedKey, markerKey, prioritizedKey,
    priorityCounterKey, delayedKey, timestamp)
  local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
  if rcall("EXISTS", deduplicationNextKey) == 1 then
    local nextData = rcall("HMGET", deduplicationNextKey,
        "name", "data", "opts", "pk", "pd", "pdk", "rjk", "jid")
    -- Always increment the counter to keep it monotonic
    local nextId = rcall("INCR", prefix .. "id") .. ""
    local storedJobId = nextData[8] -- index 8 = "jid" (8th field in the HMGET call above)
    local newJobId
    if storedJobId then
      newJobId = storedJobId
    else
      newJobId = nextId
    end
    local newJobIdKey = prefix .. newJobId
    local newOpts = cjson.decode(nextData[3])
    local deduplicationKey = prefix .. "de:" .. deduplicationId
    local parentKey = nextData[4] or nil
    local parentData = nextData[5] or nil
    local parentDependenciesKey = nextData[6] or nil
    local repeatJobKey = nextData[7] or nil
    -- Set dedup key for the new job (without TTL when keepLastIfActive,
    -- so the key outlives the job's active duration)
    local deOpts = newOpts['de']
    if deOpts and deOpts['keepLastIfActive'] then
      rcall('SET', deduplicationKey, newJobId)
    else
      setDeduplicationKey(deduplicationKey, newJobId, deOpts)
    end
    -- Store and enqueue using the shared helper (handles priority/lifo/delayed)
    local maxEvents = getOrSetMaxEvents(metaKey)
    storeAndEnqueueJob(eventStreamKey, newJobIdKey, newJobId, nextData[1], nextData[2],
        newOpts, timestamp, parentKey, parentData, repeatJobKey, maxEvents,
        waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
        priorityCounterKey, delayedKey, markerKey)
    -- Register as child dependency if the job has a parent
    if parentDependenciesKey then
      rcall("SADD", parentDependenciesKey, newJobIdKey)
    end
    -- Only delete the dedup-next hash after the job is fully created,
    -- so that if any step above errors, the data is not permanently lost.
    rcall("DEL", deduplicationNextKey)
  end
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobIdKey = KEYS[12]
if rcall("EXISTS", jobIdKey) == 1 then -- Make sure job exists
    -- Make sure it does not have pending dependencies
    -- It must happen before removing lock
    if ARGV[5] == "completed" then
        if rcall("SCARD", jobIdKey .. ":dependencies") ~= 0 then
            return -4
        end
        if rcall("ZCARD", jobIdKey .. ":unsuccessful") ~= 0 then
            return -9
        end
    end
    local opts = cmsgpack.unpack(ARGV[8])
    local token = opts['token']
    local errorCode = removeLock(jobIdKey, KEYS[5], token, ARGV[1])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobIdKey, ARGV[9]);
    local attempts = opts['attempts']
    local maxMetricsSize = opts['maxMetricsSize']
    local maxCount = opts['keepJobs']['count']
    local maxAge = opts['keepJobs']['age']
    local maxLimit = opts['keepJobs']['limit'] or 1000
    local jobAttributes = rcall("HMGET", jobIdKey, "parentKey", "parent", "deid")
    local parentKey = jobAttributes[1] or ""
    local parentId = ""
    local parentQueueKey = ""
    if jobAttributes[2] then -- TODO: need to revisit this logic if it's still needed
        local jsonDecodedParent = cjson.decode(jobAttributes[2])
        parentId = jsonDecodedParent['id']
        parentQueueKey = jsonDecodedParent['queueKey']
    end
    local jobId = ARGV[1]
    local timestamp = ARGV[2]
    -- Remove from active list (if not active we shall return error)
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if (numRemovedElements < 1) then
        return -3
    end
    local eventStreamKey = KEYS[4]
    local metaKey = KEYS[9]
    -- Trim events before emitting them to avoid trimming events emitted in this script
    trimEvents(metaKey, eventStreamKey)
    local prefix = ARGV[7]
    removeDeduplicationKeyIfNeededOnFinalization(prefix, jobAttributes[3], jobId)
    -- Check if there is requeue data for this dedup ID (keepLastIfActive mode)
    if jobAttributes[3] then
      requeueDeduplicatedJob(prefix, jobAttributes[3], eventStreamKey,
          metaKey, KEYS[2], KEYS[1], KEYS[8], KEYS[14], KEYS[3], KEYS[10],
          KEYS[7], timestamp)
    end
    -- If job has a parent we need to
    -- 1) remove this job id from parents dependencies
    -- 2) move the job Id to parent "processed" set
    -- 3) push the results into parent "results" list
    -- 4) if parent's dependencies is empty, then move parent to "wait/paused". Note it may be a different queue!.
    if parentId == "" and parentKey ~= "" then
        parentId = getJobIdFromKey(parentKey)
        parentQueueKey = getJobKeyPrefix(parentKey, ":" .. parentId)
    end
    if parentId ~= "" then
        if ARGV[5] == "completed" then
            local dependenciesSet = parentKey .. ":dependencies"
            if rcall("SREM", dependenciesSet, jobIdKey) == 1 then
                updateParentDepsIfNeeded(parentKey, parentQueueKey, dependenciesSet, parentId, jobIdKey, ARGV[4],
                    timestamp)
            end
        else
            moveChildFromDependenciesIfNeeded(jobAttributes[2], jobIdKey, ARGV[4], timestamp)
        end
    end
    local attemptsMade = rcall("HINCRBY", jobIdKey, "atm", 1)
    -- Remove job?
    if maxCount ~= 0 then
        local targetSet = KEYS[11]
        -- Add to complete/failed set
        rcall("ZADD", targetSet, timestamp, jobId)
        rcall("HSET", jobIdKey, ARGV[3], ARGV[4], "finishedOn", timestamp)
        -- "returnvalue" / "failedReason" and "finishedOn"
        if ARGV[5] == "failed" then
            rcall("HDEL", jobIdKey, "defa")
        end
        -- Remove old jobs?
        if maxAge ~= nil then
            removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix, maxLimit)
        end
        if maxCount ~= nil and maxCount > 0 then
            removeJobsByMaxCount(maxCount, targetSet, prefix)
        end
    else
        removeJobKeys(jobIdKey)
        if parentKey ~= "" then
            -- TODO: when a child is removed when finished, result or failure in parent
            -- must not be deleted, those value references should be deleted when the parent
            -- is deleted
            removeParentDependencyKey(jobIdKey, false, parentKey, jobAttributes[3])
        end
    end
    rcall("XADD", eventStreamKey, "*", "event", ARGV[5], "jobId", jobId, ARGV[3], ARGV[4], "prev", "active")
    if ARGV[5] == "failed" then
        if tonumber(attemptsMade) >= tonumber(attempts) then
            rcall("XADD", eventStreamKey, "*", "event", "retries-exhausted", "jobId", jobId, "attemptsMade",
                attemptsMade)
        end
    end
    -- Collect metrics
    if maxMetricsSize ~= "" then
        collectMetrics(KEYS[13], KEYS[13] .. ':data', maxMetricsSize, timestamp)
    end
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[6] == "1") then
        local result = fetchNextJob(KEYS[1], KEYS[2], KEYS[3], eventStreamKey,
            KEYS[6], KEYS[7], KEYS[8], metaKey, KEYS[10], KEYS[14], prefix,
            timestamp, opts)
        if result then
            return result
        end
    end
    local waitLen = rcall("LLEN", KEYS[1])
    if waitLen == 0 then
        local activeLen = rcall("LLEN", KEYS[2])
        if activeLen == 0 then
            local prioritizedLen = rcall("ZCARD", KEYS[3])
            if prioritizedLen == 0 then
                rcall("XADD", eventStreamKey, "*", "event", "drained")
            end
        end
    end
    return 0
else
    return -1
end
`,keys:14};e.s(["moveToFinished",0,t9],90308),e.i(90308);let re={name:"moveToWaitingChildren",content:`--[[
  Moves job from active to waiting children set.
  Input:
    KEYS[1] active key
    KEYS[2] wait-children key
    KEYS[3] job key
    KEYS[4] job dependencies key
    KEYS[5] job unsuccessful key
    KEYS[6] stalled key
    KEYS[7] events key
    ARGV[1] token
    ARGV[2] child key
    ARGV[3] timestamp
    ARGV[4] jobId
    ARGV[5] prefix
  Output:
    0 - OK
    1 - There are not pending dependencies.
   -1 - Missing job.
   -2 - Missing lock
   -3 - Job not in active set
   -9 - Job has failed children
]]
local rcall = redis.call
local activeKey = KEYS[1]
local waitingChildrenKey = KEYS[2]
local jobKey = KEYS[3]
local jobDependenciesKey = KEYS[4]
local jobUnsuccessfulKey = KEYS[5]
local stalledKey = KEYS[6]
local eventStreamKey = KEYS[7]
local token = ARGV[1]
local timestamp = ARGV[3]
local jobId = ARGV[4]
--- Includes
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local function removeJobFromActive(activeKey, stalledKey, jobKey, jobId,
    token)
  local errorCode = removeLock(jobKey, stalledKey, token, jobId)
  if errorCode < 0 then
    return errorCode
  end
  local numRemovedElements = rcall("LREM", activeKey, -1, jobId)
  if numRemovedElements < 1 then
    return -3
  end
  return 0
end
local function moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
    jobKey, jobId, timestamp, token)
  local errorCode = removeJobFromActive(activeKey, stalledKey, jobKey, jobId, token)
  if errorCode < 0 then
    return errorCode
  end
  local score = tonumber(timestamp)
  rcall("ZADD", waitingChildrenKey, score, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting-children", "jobId", jobId, 'prev', 'active')
  return 0
end
if rcall("EXISTS", jobKey) == 1 then
  if rcall("ZCARD", jobUnsuccessfulKey) ~= 0 then
    return -9
  else
    if ARGV[2] ~= "" then
      if rcall("SISMEMBER", jobDependenciesKey, ARGV[2]) ~= 0 then
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    else
      if rcall("SCARD", jobDependenciesKey) ~= 0 then 
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    end    
  end
end
return -1
`,keys:7};e.s(["moveToWaitingChildren",0,re],67771),e.i(67771);let rt={name:"obliterate",content:`--[[
  Completely obliterates a queue and all of its contents
  This command completely destroys a queue including all of its jobs, current or past 
  leaving no trace of its existence. Since this script needs to iterate to find all the job
  keys, consider that this call may be slow for very large queues.
  The queue needs to be "paused" or it will return an error
  If the queue has currently active jobs then the script by default will return error,
  however this behaviour can be overridden using the 'force' option.
  Input:
    KEYS[1] meta
    KEYS[2] base
    ARGV[1] count
    ARGV[2] force
]]
local maxCount = tonumber(ARGV[1])
local baseKey = KEYS[2]
local rcall = redis.call
-- Includes
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
local function removeLockKeys(keys)
  for i, key in ipairs(keys) do
    rcall("DEL", baseKey .. key .. ':lock')
  end
end
-- 1) Check if paused, if not return with error.
if rcall("HEXISTS", KEYS[1], "paused") ~= 1 then
  return -1 -- Error, NotPaused
end
-- 2) Check if there are active jobs, if there are and not "force" return error.
local activeKey = baseKey .. 'active'
local activeJobs = getListItems(activeKey, maxCount)
if (#activeJobs > 0) then
  if(ARGV[2] == "") then 
    return -2 -- Error, ExistActiveJobs
  end
end
removeLockKeys(activeJobs)
maxCount = removeJobs(activeJobs, true, baseKey, maxCount)
rcall("LTRIM", activeKey, #activeJobs, -1)
if(maxCount <= 0) then
  return 1
end
local delayedKey = baseKey .. 'delayed'
maxCount = removeZSetJobs(delayedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local repeatKey = baseKey .. 'repeat'
local repeatJobsIds = getZSetItems(repeatKey, maxCount)
for i, key in ipairs(repeatJobsIds) do
  local jobKey = repeatKey .. ":" .. key
  rcall("DEL", jobKey)
end
if(#repeatJobsIds > 0) then
  for from, to in batches(#repeatJobsIds, 7000) do
    rcall("ZREM", repeatKey, unpack(repeatJobsIds, from, to))
  end
end
maxCount = maxCount - #repeatJobsIds
if(maxCount <= 0) then
  return 1
end
local completedKey = baseKey .. 'completed'
maxCount = removeZSetJobs(completedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local pausedKey = baseKey .. 'paused'
maxCount = removeListJobs(pausedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local prioritizedKey = baseKey .. 'prioritized'
maxCount = removeZSetJobs(prioritizedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local failedKey = baseKey .. 'failed'
maxCount = removeZSetJobs(failedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
if(maxCount > 0) then
  rcall("DEL",
    baseKey .. 'events',
    baseKey .. 'delay',
    baseKey .. 'stalled-check',
    baseKey .. 'stalled',
    baseKey .. 'id',
    baseKey .. 'pc',
    baseKey .. 'marker',
    baseKey .. 'meta',
    baseKey .. 'metrics:completed',
    baseKey .. 'metrics:completed:data',
    baseKey .. 'metrics:failed',
    baseKey .. 'metrics:failed:data')
  return 0
else
  return 1
end
`,keys:2};e.s(["obliterate",0,rt],21313),e.i(21313);let rr={name:"paginate",content:`--[[
    Paginate a set or hash
    Input:
      KEYS[1] key pointing to the set or hash to be paginated.
      ARGV[1]  page start offset
      ARGV[2]  page end offset (-1 for all the elements)
      ARGV[3]  cursor
      ARGV[4]  offset
      ARGV[5]  max iterations
      ARGV[6]  fetch jobs?
    Output:
      [cursor, offset, items, numItems]
]]
local rcall = redis.call
-- Includes
--[[
  Function to achieve pagination for a set or hash.
  This function simulates pagination in the most efficient way possible
  for a set using sscan or hscan.
  The main limitation is that sets are not order preserving, so the
  pagination is not stable. This means that if the set is modified
  between pages, the same element may appear in different pages.
]] -- Maximum number of elements to be returned by sscan per iteration.
local maxCount = 100
-- Finds the cursor, and returns the first elements available for the requested page.
local function findPage(key, command, pageStart, pageSize, cursor, offset,
                        maxIterations, fetchJobs)
    local items = {}
    local jobs = {}
    local iterations = 0
    repeat
        -- Iterate over the set using sscan/hscan.
        local result = rcall(command, key, cursor, "COUNT", maxCount)
        cursor = result[1]
        local members = result[2]
        local step = 1
        if command == "HSCAN" then
            step = 2
        end
        if #members == 0 then
            -- If the result is empty, we can return the result.
            return cursor, offset, items, jobs
        end
        local chunkStart = offset
        local chunkEnd = offset + #members / step
        local pageEnd = pageStart + pageSize
        if chunkEnd < pageStart then
            -- If the chunk is before the page, we can skip it.
            offset = chunkEnd
        elseif chunkStart > pageEnd then
            -- If the chunk is after the page, we can return the result.
            return cursor, offset, items, jobs
        else
            -- If the chunk is overlapping the page, we need to add the elements to the result.
            for i = 1, #members, step do
                if offset >= pageEnd then
                    return cursor, offset, items, jobs
                end
                if offset >= pageStart then
                    local index = #items + 1
                    if fetchJobs ~= nil then
                        jobs[#jobs+1] = rcall("HGETALL", members[i])
                    end
                    if step == 2 then
                        items[index] = {members[i], members[i + 1]}
                    else
                        items[index] = members[i]
                    end
                end
                offset = offset + 1
            end
        end
        iterations = iterations + 1
    until cursor == "0" or iterations >= maxIterations
    return cursor, offset, items, jobs
end
local key = KEYS[1]
local scanCommand = "SSCAN"
local countCommand = "SCARD"
local type = rcall("TYPE", key)["ok"]
if type == "none" then
    return {0, 0, {}, 0}
elseif type == "hash" then
    scanCommand = "HSCAN"
    countCommand = "HLEN"
elseif type ~= "set" then
    return
        redis.error_reply("Pagination is only supported for sets and hashes.")
end
local numItems = rcall(countCommand, key)
local startOffset = tonumber(ARGV[1])
local endOffset = tonumber(ARGV[2])
if endOffset == -1 then 
  endOffset = numItems
end
local pageSize = (endOffset - startOffset) + 1
local cursor, offset, items, jobs = findPage(key, scanCommand, startOffset,
                                       pageSize, ARGV[3], tonumber(ARGV[4]),
                                       tonumber(ARGV[5]), ARGV[6])
return {cursor, offset, items, numItems, jobs}
`,keys:1};e.s(["paginate",0,rr],2763),e.i(2763);let ri={name:"pause",content:`--[[
  Pauses or resumes a queue globally.
  Input:
    KEYS[1] 'wait' or 'paused'
    KEYS[2] 'paused' or 'wait'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] events stream key
    KEYS[6] 'delayed'
    KEYS[7] 'marker'
    ARGV[1] 'paused' or 'resumed'
  Event:
    publish paused or resumed event.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
local markerKey = KEYS[7]
local hasJobs = rcall("EXISTS", KEYS[1]) == 1
--TODO: check this logic to be reused when changing a delay
if hasJobs then rcall("RENAME", KEYS[1], KEYS[2]) end
if ARGV[1] == "paused" then
    rcall("HSET", KEYS[3], "paused", 1)
    rcall("DEL", markerKey)
else
    rcall("HDEL", KEYS[3], "paused")
    if hasJobs or rcall("ZCARD", KEYS[4]) > 0 then
        -- Add marker if there are waiting or priority jobs
        rcall("ZADD", markerKey, 0, "0")
    else
        addDelayMarkerIfNeeded(markerKey, KEYS[6])
    end
end
rcall("XADD", KEYS[5], "*", "event", ARGV[1]);
`,keys:7};e.s(["pause",0,ri],94257),e.i(94257);let rn={name:"promote",content:`--[[
  Promotes a job that is currently "delayed" to the "waiting" state
    Input:
      KEYS[1] 'delayed'
      KEYS[2] 'wait'
      KEYS[3] 'paused'
      KEYS[4] 'meta'
      KEYS[5] 'prioritized'
      KEYS[6] 'active'
      KEYS[7] 'pc' priority counter
      KEYS[8] 'event stream'
      KEYS[9] 'marker'
      ARGV[1]  queue.toKey('')
      ARGV[2]  jobId
    Output:
       0 - OK
      -3 - Job not in delayed zset.
    Events:
      'waiting'
]]
local rcall = redis.call
local jobId = ARGV[2]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
if rcall("ZREM", KEYS[1], jobId) == 1 then
    local jobKey = ARGV[1] .. jobId
    local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
    local metaKey = KEYS[4]
    local markerKey = KEYS[9]
    -- Remove delayed "marker" from the wait list if there is any.
    -- Since we are adding a job we do not need the marker anymore.
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[6], KEYS[2], KEYS[3])
    local marker = rcall("LINDEX", target, 0)
    if marker and string.sub(marker, 1, 2) == "0:" then rcall("LPOP", target) end
    if priority == 0 then
        -- LIFO or FIFO
        addJobInTargetList(target, markerKey, "LPUSH", isPausedOrMaxed, jobId)
    else
        addJobWithPriority(markerKey, KEYS[5], priority, jobId, KEYS[7], isPausedOrMaxed)
    end
    rcall("XADD", KEYS[8], "*", "event", "waiting", "jobId", jobId, "prev",
          "delayed");
    rcall("HSET", jobKey, "delay", 0)
    return 0
else
    return -3
end
`,keys:9};e.s(["promote",0,rn],57504),e.i(57504);let ra={name:"releaseLock",content:`--[[
  Release lock
    Input:
      KEYS[1] 'lock',
      ARGV[1]  token
      ARGV[2]  lock duration in milliseconds
    Output:
      "OK" if lock extended successfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  return rcall("DEL", KEYS[1])
else
  return 0
end
`,keys:1};e.s(["releaseLock",0,ra],49502),e.i(49502);let rs={name:"removeChildDependency",content:`--[[
  Break parent-child dependency by removing
  child reference from parent
  Input:
    KEYS[1] 'key' prefix,
    ARGV[1] job key
    ARGV[2] parent key
    Output:
       0  - OK
       1  - There is not relationship.
      -1  - Missing job key
      -5  - Missing parent key
]]
local rcall = redis.call
local jobKey = ARGV[1]
local parentKey = ARGV[2]
-- Includes
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
if rcall("EXISTS", jobKey) ~= 1 then return -1 end
if rcall("EXISTS", parentKey) ~= 1 then return -5 end
if removeParentDependencyKey(jobKey, false, parentKey, KEYS[1], nil) then
  rcall("HDEL", jobKey, "parentKey", "parent")
  return 0
else
  return 1
end`,keys:1};e.s(["removeChildDependency",0,rs],85006),e.i(85006);let ro={name:"removeDeduplicationKey",content:`--[[
  Remove deduplication key if it matches the job id.
  Input:
    KEYS[1] deduplication key
    ARGV[1] job id
  Output:
    0 - false
    1 - true
]]
local rcall = redis.call
local deduplicationKey = KEYS[1]
local jobId = ARGV[1]
local currentJobId = rcall('GET', deduplicationKey)
if currentJobId and currentJobId == jobId then
  return rcall("DEL", deduplicationKey)
end
return 0
`,keys:1};e.s(["removeDeduplicationKey",0,ro],21064),e.i(21064);let rl={name:"removeJob",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] repeat key
      ARGV[1] jobId
      ARGV[2] remove children
      ARGV[3] queue prefix
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        local deduplicationId = rcall("HGET", jobKey, "deid")
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobId, deduplicationId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local jobId = ARGV[1]
local shouldRemoveChildren = ARGV[2]
local prefix = ARGV[3]
local jobKey = KEYS[1]
local repeatKey = KEYS[2]
if isJobSchedulerJob(jobId, jobKey, repeatKey) then
    return -8
end
if not isLocked(prefix, jobId, shouldRemoveChildren) then
    local options = {
        removeChildren = shouldRemoveChildren == "1",
        ignoreProcessed = false,
        ignoreLocked = false
    }
    removeJobWithChildren(prefix, jobId, nil, options)
    return 1
end
return 0
`,keys:2};e.s(["removeJob",0,rl],30658),e.i(30658);let rd={name:"removeJobScheduler",content:`--[[
  Removes a job scheduler and its next scheduled job.
  Input:
    KEYS[1] job schedulers key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] job scheduler id
    ARGV[2] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local jobSchedulerId = ARGV[1]
local prefix = ARGV[2]
local millis = rcall("ZSCORE", KEYS[1], jobSchedulerId)
if millis then
  -- Delete next programmed job.
  local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. millis
  if(rcall("ZREM", KEYS[2], delayedJobId) == 1) then
    removeJobKeys(prefix .. delayedJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", delayedJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], jobSchedulerId) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. jobSchedulerId)
  return 0
end
return 1
`,keys:3};e.s(["removeJobScheduler",0,rd],95635),e.i(95635);let rc={name:"removeOrphanedJobs",content:`--[[
  Removes orphaned job keys that exist in Redis but are not referenced
  in any queue state set. Checks each candidate atomically.
  Input:
    KEYS[1]  base prefix key including trailing colon (e.g. bull:queueName:)
    ARGV[1]  number of state key suffixes
    ARGV[2 .. 1+N]  state key suffixes (e.g. active, wait, completed, ...)
    ARGV[2+N]  number of job sub-key suffixes
    ARGV[3+N .. 2+N+M]  job sub-key suffixes (e.g. logs, dependencies, ...)
    ARGV[3+N+M .. end]  candidate job IDs to check
  Output:
    number of removed jobs
]]
local rcall = redis.call
local basePrefix = KEYS[1]
-- Parse state key suffixes and cache their full key names + types.
local stateKeyCount = tonumber(ARGV[1])
local stateKeys = {}
local stateKeyTypes = {}
for i = 1, stateKeyCount do
  local fullKey = basePrefix .. ARGV[1 + i]
  stateKeys[i] = fullKey
  stateKeyTypes[i] = rcall('TYPE', fullKey)['ok']
end
-- Parse job sub-key suffixes.
local subKeyCountIdx = 2 + stateKeyCount
local subKeyCount = tonumber(ARGV[subKeyCountIdx])
local subKeySuffixes = {}
for i = 1, subKeyCount do
  subKeySuffixes[i] = ARGV[subKeyCountIdx + i]
end
-- Process candidate job IDs.
local candidateStart = subKeyCountIdx + subKeyCount + 1
local removedCount = 0
for c = candidateStart, #ARGV do
  local jobId = ARGV[c]
  local found = false
  for i = 1, stateKeyCount do
    local kt = stateKeyTypes[i]
    if kt == 'list' then
      if rcall('LPOS', stateKeys[i], jobId) then
        found = true
        break
      end
    elseif kt == 'zset' then
      if rcall('ZSCORE', stateKeys[i], jobId) then
        found = true
        break
      end
    elseif kt == 'set' then
      if rcall('SISMEMBER', stateKeys[i], jobId) == 1 then
        found = true
        break
      end
    end
  end
  if not found then
    local jobKey = basePrefix .. jobId
    local keysToDelete = { jobKey }
    for _, suffix in ipairs(subKeySuffixes) do
      keysToDelete[#keysToDelete + 1] = jobKey .. ':' .. suffix
    end
    rcall('DEL', unpack(keysToDelete))
    removedCount = removedCount + 1
  end
end
return removedCount
`,keys:1};e.s(["removeOrphanedJobs",0,rc],94539),e.i(94539);let ru={name:"removeRepeatable",content:`--[[
  Removes a repeatable job
  Input:
    KEYS[1] repeat jobs key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] old repeat job id
    ARGV[2] options concat
    ARGV[3] repeat job key
    ARGV[4] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
local millis = rcall("ZSCORE", KEYS[1], ARGV[2])
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
-- legacy removal TODO: remove in next breaking change
if millis then
  -- Delete next programmed job.
  local repeatJobId = ARGV[1] .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed");
  end
end
if(rcall("ZREM", KEYS[1], ARGV[2]) == 1) then
  return 0
end
-- new removal
millis = rcall("ZSCORE", KEYS[1], ARGV[3])
if millis then
  -- Delete next programmed job.
  local repeatJobId = "repeat:" .. ARGV[3] .. ":" .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], ARGV[3]) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. ARGV[3])
  return 0
end
return 1
`,keys:3};e.s(["removeRepeatable",0,ru],75844),e.i(75844);let rh={name:"removeUnprocessedChildren",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] meta key
      ARGV[1] prefix
      ARGV[2] jobId
    Events:
      'removed' for every children removed
]]
-- Includes
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        local deduplicationId = rcall("HGET", jobKey, "deid")
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobId, deduplicationId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local prefix = ARGV[1]
local jobId = ARGV[2]
local jobKey = KEYS[1]
local metaKey = KEYS[2]
local options = {
  removeChildren = "1",
  ignoreProcessed = true,
  ignoreLocked = true
}
removeJobChildren(prefix, jobKey, options) 
`,keys:2};e.s(["removeUnprocessedChildren",0,rh],34253),e.i(34253);let rp={name:"reprocessJob",content:`--[[
  Attempts to reprocess a job
  Input:
    KEYS[1] job key
    KEYS[2] events stream
    KEYS[3] job state
    KEYS[4] wait key
    KEYS[5] meta
    KEYS[6] paused key
    KEYS[7] active key
    KEYS[8] marker key
    ARGV[1] job.id
    ARGV[2] (job.opts.lifo ? 'R' : 'L') + 'PUSH'
    ARGV[3] propVal - failedReason/returnvalue
    ARGV[4] prev state - failed/completed
    ARGV[5] reset attemptsMade - "1" or "0"
    ARGV[6] reset attemptsStarted - "1" or "0"
  Output:
     1 means the operation was a success
    -1 means the job does not exist
    -3 means the job was not found in the expected set.
]]
local rcall = redis.call;
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local jobKey = KEYS[1]
if rcall("EXISTS", jobKey) == 1 then
  local jobId = ARGV[1]
  if (rcall("ZREM", KEYS[3], jobId) == 1) then
    local attributesToRemove = {}
    if ARGV[5] == "1" then
      table.insert(attributesToRemove, "atm")
    end
    if ARGV[6] == "1" then
      table.insert(attributesToRemove, "ats")
    end
    rcall("HDEL", jobKey, "finishedOn", "processedOn", ARGV[3], unpack(attributesToRemove))
    local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[7], KEYS[4], KEYS[6])
    addJobInTargetList(target, KEYS[8], ARGV[2], isPausedOrMaxed, jobId)
    local parentKey = rcall("HGET", jobKey, "parentKey")
    if parentKey and rcall("EXISTS", parentKey) == 1 then
      if ARGV[4] == "failed" then
        if rcall("ZREM", parentKey .. ":unsuccessful", jobKey) == 1 or
          rcall("ZREM", parentKey .. ":failed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      else
        if rcall("HDEL", parentKey .. ":processed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      end
    end
    local maxEvents = getOrSetMaxEvents(KEYS[5])
    -- Emit waiting event
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId, "prev", ARGV[4]);
    return 1
  else
    return -3
  end
else
  return -1
end
`,keys:8};e.s(["reprocessJob",0,rp],30854),e.i(30854);let ry={name:"retryJob",content:`--[[
  Retries a failed job by moving it back to the wait queue.
    Input:
      KEYS[1]  'active',
      KEYS[2]  'wait'
      KEYS[3]  'paused'
      KEYS[4]  job key
      KEYS[5]  'meta'
      KEYS[6]  events stream
      KEYS[7]  delayed key
      KEYS[8]  prioritized key
      KEYS[9]  'pc' priority counter
      KEYS[10] 'marker'
      KEYS[11] 'stalled'
      ARGV[1]  key prefix
      ARGV[2]  timestamp
      ARGV[3]  pushCmd
      ARGV[4]  jobId
      ARGV[5]  token
      ARGV[6]  optional job fields to update
    Events:
      'waiting'
    Output:
     0  - OK
     -1 - Missing key
     -2 - Missing lock
     -3 - Job not in active set
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[1], KEYS[2], KEYS[3])
local markerKey = KEYS[10]
-- Check if there are delayed jobs that we can move to wait.
-- test example: when there are delayed jobs between retries
promoteDelayedJobs(KEYS[7], markerKey, target, KEYS[8], KEYS[6], ARGV[1], ARGV[2], KEYS[9], isPausedOrMaxed)
local jobKey = KEYS[4]
if rcall("EXISTS", jobKey) == 1 then
  local errorCode = removeLock(jobKey, KEYS[11], ARGV[5], ARGV[4]) 
  if errorCode < 0 then
    return errorCode
  end
  updateJobFields(jobKey, ARGV[6])
  local numRemovedElements = rcall("LREM", KEYS[1], -1, ARGV[4])
  if (numRemovedElements < 1) then return -3 end
  local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
  --need to re-evaluate after removing job from active
  isPausedOrMaxed = isQueuePausedOrMaxed(KEYS[5], KEYS[1])
  -- Standard or priority add
  if priority == 0 then
    addJobInTargetList(target, markerKey, ARGV[3], isPausedOrMaxed, ARGV[4])
  else
    addJobWithPriority(markerKey, KEYS[8], priority, ARGV[4], KEYS[9], isPausedOrMaxed)
  end
  rcall("HINCRBY", jobKey, "atm", 1)
  local maxEvents = getOrSetMaxEvents(KEYS[5])
  -- Emit waiting event
  rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", ARGV[4], "prev", "active")
  return 0
else
  return -1
end
`,keys:11};e.s(["retryJob",0,ry],55061),e.i(55061);let rm={name:"saveStacktrace",content:`--[[
  Save stacktrace and failedReason.
  Input:
    KEYS[1] job key
    ARGV[1]  stacktrace
    ARGV[2]  failedReason
  Output:
     0 - OK
    -1 - Missing key
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then
  rcall("HMSET", KEYS[1], "stacktrace", ARGV[1], "failedReason", ARGV[2])
  return 0
else
  return -1
end
`,keys:1};e.s(["saveStacktrace",0,rm],94940),e.i(94940);let rf={name:"updateData",content:`--[[
  Update job data
  Input:
    KEYS[1] Job id key
    ARGV[1] data
  Output:
    0 - OK
   -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS",KEYS[1]) == 1 then -- // Make sure job exists
  rcall("HSET", KEYS[1], "data", ARGV[1])
  return 0
else
  return -1
end
`,keys:1};e.s(["updateData",0,rf],81265),e.i(81265);let rb={name:"updateJobScheduler",content:`--[[
  Updates a job scheduler and adds next delayed job
  Input:
    KEYS[1]  'repeat' key
    KEYS[2]  'delayed'
    KEYS[3]  'wait' key
    KEYS[4]  'paused' key
    KEYS[5]  'meta'
    KEYS[6]  'prioritized' key
    KEYS[7]  'marker',
    KEYS[8]  'id'
    KEYS[9]  events stream key
    KEYS[10] 'pc' priority counter
    KEYS[11] producer key
    KEYS[12] 'active' key
    ARGV[1] next milliseconds
    ARGV[2] jobs scheduler id
    ARGV[3] Json stringified delayed data
    ARGV[4] msgpacked delayed opts
    ARGV[5] timestamp
    ARGV[6] prefix key
    ARGV[7] producer id
    Output:
      next delayed job id  - OK
]] local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local nextMillis = tonumber(ARGV[1])
local jobSchedulerId = ARGV[2]
local timestamp = tonumber(ARGV[5])
local prefixKey = ARGV[6]
local producerId = ARGV[7]
local jobOpts = cmsgpack.unpack(ARGV[4])
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function addJobFromScheduler(jobKey, jobId, opts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId, repeatDelay)
  opts['delay'] = repeatDelay
  opts['jobId'] = jobId
  storeAndEnqueueJob(eventsKey, jobKey, jobId, name, data, opts,
      timestamp, nil, nil, jobSchedulerId, maxEvents,
      waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
      priorityCounter, delayedKey, markerKey)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
    local nextMillis
    if not prevMillis then
        if startDate then
            -- Assuming startDate is passed as milliseconds from JavaScript
            nextMillis = tonumber(startDate)
            nextMillis = nextMillis > now and nextMillis or now
        else
            nextMillis = now
            -- For the first iteration with no startDate and an explicit
            -- offset, align nextMillis to the next offset slot strictly
            -- after now. Without this the user-supplied offset is
            -- recorded but ignored, and the first job fires at now
            -- instead of the next aligned timestamp (issue #3705).
            if offset and offset > 0 then
                local aligned = math.floor(nextMillis / every) * every + offset
                if aligned <= nextMillis then
                    aligned = aligned + every
                end
                nextMillis = aligned
            end
        end
    else
        nextMillis = prevMillis + every
        -- check if we may have missed some iterations
        if nextMillis < now then
            nextMillis = math.floor(now / every) * every + every + (offset or 0)
        end
    end
    if not offset or offset == 0 then
        local timeSlot = math.floor(nextMillis / every) * every;
        offset = nextMillis - timeSlot;
    end
    -- Return a tuple nextMillis, offset
    return math.floor(nextMillis), math.floor(offset)
end
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
-- Validate that scheduler exists.
-- If it does not exist we should not iterate anymore.
if prevMillis then
    prevMillis = tonumber(prevMillis)
    local schedulerKey = repeatKey .. ":" .. jobSchedulerId
    local schedulerAttributes = rcall("HMGET", schedulerKey, "name", "data", "every", "startDate", "offset")
    local every = tonumber(schedulerAttributes[3])
    local now = tonumber(timestamp)
    -- If every is not found in scheduler attributes, try to get it from job options
    if not every and jobOpts['repeat'] and jobOpts['repeat']['every'] then
        every = tonumber(jobOpts['repeat']['every'])
    end
    if every then
        local startDate = schedulerAttributes[4]
        local jobOptsOffset = jobOpts['repeat'] and jobOpts['repeat']['offset'] or 0
        local offset = schedulerAttributes[5] or jobOptsOffset or 0
        local newOffset
        nextMillis, newOffset = getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
        if not offset then
            rcall("HSET", schedulerKey, "offset", newOffset)
            jobOpts['repeat']['offset'] = newOffset
        end
    end
    local nextDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
    local nextDelayedJobKey = schedulerKey .. ":" .. nextMillis
    local currentDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    if producerId == currentDelayedJobId then
        local eventsKey = KEYS[9]
        local maxEvents = getOrSetMaxEvents(metaKey)
        if rcall("EXISTS", nextDelayedJobKey) ~= 1 then
            rcall("ZADD", repeatKey, nextMillis, jobSchedulerId)
            rcall("HINCRBY", schedulerKey, "ic", 1)
            rcall("INCR", KEYS[8])
            -- TODO: remove this workaround in next breaking change,
            -- all job-schedulers must save job data
            local templateData = schedulerAttributes[2] or ARGV[3]
            if templateData and templateData ~= '{}' then
                rcall("HSET", schedulerKey, "data", templateData)
            end
            local delay = nextMillis - now
            -- Fast Clamp delay to minimum of 0
            if delay < 0 then
                delay = 0
            end
            jobOpts["delay"] = delay
            addJobFromScheduler(nextDelayedJobKey, nextDelayedJobId, jobOpts, waitKey, pausedKey, KEYS[12], metaKey,
                prioritizedKey, KEYS[10], delayedKey, KEYS[7], eventsKey, schedulerAttributes[1], maxEvents, ARGV[5],
                templateData or '{}', jobSchedulerId, delay)
            -- TODO: remove this workaround in next breaking change
            if KEYS[11] ~= "" then
                rcall("HSET", KEYS[11], "nrjid", nextDelayedJobId)
            end
            return nextDelayedJobId .. "" -- convert to string
        else
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "duplicated", "jobId", nextDelayedJobId)
        end
    end
end
`,keys:12};e.s(["updateJobScheduler",0,rb],1734),e.i(1734);let rg={name:"updateProgress",content:`--[[
  Update job progress
  Input:
    KEYS[1] Job id key
    KEYS[2] event stream key
    KEYS[3] meta key
    ARGV[1] id
    ARGV[2] progress
  Output:
     0 - OK
    -1 - Missing job.
  Event:
    progress(jobId, progress)
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
    local maxEvents = getOrSetMaxEvents(KEYS[3])
    rcall("HSET", KEYS[1], "progress", ARGV[2])
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "progress",
          "jobId", ARGV[1], "data", ARGV[2]);
    return 0
else
    return -1
end
`,keys:3};e.s(["updateProgress",0,rg],56179),e.i(56179);let rv={name:"updateRepeatableJobMillis",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      ARGV[1] next milliseconds
      ARGV[2] custom key
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local nextMillis = ARGV[1]
local customKey = ARGV[2]
local legacyCustomKey = ARGV[3]
if rcall("ZSCORE", repeatKey, customKey) then
    rcall("ZADD", repeatKey, nextMillis, customKey)
    return customKey
elseif rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
    rcall("ZADD", repeatKey, nextMillis, legacyCustomKey)
    return legacyCustomKey
end
return ''
`,keys:1};e.s(["updateRepeatableJobMillis",0,rv],62922),e.i(62922),e.s(["addDelayedJob",0,tR,"addJobScheduler",0,tM,"addLog",0,tP,"addParentJob",0,tN,"addPrioritizedJob",0,tJ,"addRepeatableJob",0,tL,"addStandardJob",0,t_,"changeDelay",0,tF,"changePriority",0,tq,"cleanJobsInSet",0,tG,"drain",0,tV,"extendLock",0,tU,"extendLocks",0,tB,"getCounts",0,tY,"getCountsPerPriority",0,tz,"getDependencyCounts",0,tW,"getJobScheduler",0,t$,"getMetrics",0,tH,"getRanges",0,tQ,"getRateLimitTtl",0,tZ,"getState",0,tX,"getStateV2",0,t0,"isFinished",0,t1,"isJobInList",0,t2,"isMaxed",0,t3,"moveJobFromActiveToWait",0,t4,"moveJobsToWait",0,t6,"moveStalledJobsToWait",0,t5,"moveToActive",0,t8,"moveToDelayed",0,t7,"moveToFinished",0,t9,"moveToWaitingChildren",0,re,"obliterate",0,rt,"paginate",0,rr,"pause",0,ri,"promote",0,rn,"releaseLock",0,ra,"removeChildDependency",0,rs,"removeDeduplicationKey",0,ro,"removeJob",0,rl,"removeJobScheduler",0,rd,"removeOrphanedJobs",0,rc,"removeRepeatable",0,ru,"removeUnprocessedChildren",0,rh,"reprocessJob",0,rp,"retryJob",0,ry,"saveStacktrace",0,rm,"updateData",0,rf,"updateJobScheduler",0,rb,"updateProgress",0,rg,"updateRepeatableJobMillis",0,rv],77799);var rK=e.i(77799);let rS=new WeakMap;function rE(e){if(!0===e.__bullmq_iredis)return e;let t=rS.get(e);if(t)return t;let r=!0===e.isCluster,i=new Map,n=Object.create(null);n.__bullmq_iredis=!0,n.isCluster=r,n.runCommand=(t,r)=>e[t](r),n.pipeline=(...t)=>rI(e.pipeline(...t)),n.multi=(...t)=>rI(e.multi(...t)),"function"==typeof e.duplicate&&(n.duplicate=t=>{var i;if(r){let r=(null==(i=e.options)?void 0:i.redisOptions)||{},n=t?Object.assign(Object.assign({},r),t):r;return rE(e.duplicate(void 0,{redisOptions:n}))}return rE(e.duplicate(t))}),n.hset=(t,r,...i)=>{if("string"==typeof r)return e.hset(t,r,...i);let n=[t];for(let[e,t]of Object.entries(r))n.push(e,t);return e.hset(...n)},n.set=(t,r,i,...n)=>{if("string"==typeof i||null==i)return e.set(t,r,...null!=i?[i,...n]:[]);let a=[t,r];return null!=i.PX?a.push("PX",i.PX):null!=i.EX&&a.push("EX",i.EX),e.set(...a)},n.zrange=(t,r,i,n,...a)=>"string"==typeof n?e.zrange(t,r,i,n,...a):(null==n?void 0:n.WITHSCORES)?e.zrange(t,r,i,"WITHSCORES"):e.zrange(t,r,i),n.zrevrange=(t,r,i,n,...a)=>"string"==typeof n?e.zrevrange(t,r,i,n,...a):(null==n?void 0:n.WITHSCORES)?e.zrevrange(t,r,i,"WITHSCORES"):e.zrevrange(t,r,i),n.xadd=(t,r,i,...n)=>{if("string"==typeof i)return e.xadd(t,r,i,...n);let a=n[0],s=[t];for(let[e,t]of((null==a?void 0:a.MAXLEN)!=null&&(s.push("MAXLEN"),!1!==a.approximate&&s.push("~"),s.push(a.MAXLEN)),s.push(r),Object.entries(i)))s.push(e,t);return e.xadd(...s)},n.xread=(t,...r)=>{if("string"==typeof t)return e.xread(t,...r);let i=r[0],n=[];for(let e of((null==i?void 0:i.BLOCK)!=null&&n.push("BLOCK",i.BLOCK),(null==i?void 0:i.COUNT)!=null&&n.push("COUNT",i.COUNT),n.push("STREAMS"),t))n.push(e.key);for(let e of t)n.push(e.id);return e.xread(...n)},n.xtrim=(t,r,i,...n)=>{if("string"==typeof i||0===n.length)return e.xtrim(t,r,i,...n);let a=n[0],s=[t,r];return(null==a?void 0:a.approximate)!==!1&&s.push("~"),s.push(i),e.xtrim(...s)},n.clientSetName=t=>e.client("SETNAME",t),n.clientList=()=>e.client("LIST"),n.scan=(t,...r)=>{if(0===r.length||"string"==typeof r[0]||"function"==typeof r[0])return e.scan(t,...r);let i=r[0],n=[t];return(null==i?void 0:i.MATCH)!=null&&n.push("MATCH",i.MATCH),(null==i?void 0:i.COUNT)!=null&&n.push("COUNT",i.COUNT),e.scan(...n)};let a=new Proxy(e,{get(e,t){if(t in n)return n[t];let r=Reflect.get(e,t,e);if("function"!=typeof r)return r;if(Object.prototype.hasOwnProperty.call(e,t))return r.bind(e);let a=i.get(t);if(void 0!==a)return a;let s=r.bind(e);return i.set(t,s),s},set:(e,t,r)=>t in n?(n[t]=r,!0):(i.delete(t),Reflect.set(e,t,r)),deleteProperty:(e,t)=>!(t in n)&&(i.delete(t),Reflect.deleteProperty(e,t)),has:(e,t)=>t in n||Reflect.has(e,t)});return rS.set(e,a),a}function rI(e){e.runCommand=function(t,r){return e[t](r),e};let t=e.hset.bind(e);e.hset=function(r,i){let n=[r];for(let[e,t]of Object.entries(i))n.push(e,t);return t(...n),e};let r=e.hscan.bind(e);e.hscan=function(t,i,n){return(null==n?void 0:n.COUNT)!=null?r(t,i,"COUNT",n.COUNT):r(t,i),e};let i=e.sscan.bind(e);return e.sscan=function(t,r,n){return(null==n?void 0:n.COUNT)!=null?i(t,r,"COUNT",n.COUNT):i(t,r),e},e}function rk(e){return!!e&&"object"==typeof e&&(!0===e.__bullmq_iredis||"function"==typeof e.runCommand&&"function"==typeof e.defineCommand&&"function"==typeof e.pipeline&&"function"==typeof e.multi&&"function"==typeof e.duplicate&&"function"==typeof e.scanStream&&"function"==typeof e.connect&&"function"==typeof e.disconnect&&"function"==typeof e.on&&"string"==typeof e.status&&"boolean"==typeof e.isCluster)}let rw=Symbol("bullmqClusterReconnectPromise"),rx=Symbol("bullmqClusterPatchedForBlocking"),rj=Symbol("bullmqClusterOriginalBzpopmin"),rA=Symbol("bullmqClusterWrappedBzpopmin"),rT=Symbol("bullmqClusterPatchRefCount"),rD=Symbol("bullmqClusterClosingRefCount");class rO extends tO.EventEmitter{constructor(e,t){if(super(),this.extraOptions=t,this.capabilities={canDoubleTimeout:!1,canBlockFor1Ms:!0},this.status="initializing",this.dbType="redis",this.packageVersion=tS,this.disabledBlockingClusterReconnect=!1,this.extraOptions=Object.assign({shared:!1,blocking:!0,skipVersionCheck:!1,skipWaitingForReady:!1,clusterReconnectTimeoutMs:3e4},t),es(e)){if(this._client=rk(e)?e:rE(e),this._client.options.keyPrefix)throw Error("BullMQ: ioredis does not support ioredis prefixes, use the prefix option instead.");this._client.isCluster?this.opts=this._client.options.redisOptions:this.opts=this._client.options,this.checkBlockingOptions("BullMQ: Your redis options maxRetriesPerRequest must be null.",this.opts,!0)}else this.checkBlockingOptions("BullMQ: WARNING! Your redis options maxRetriesPerRequest must be null and will be overridden by BullMQ.",e),this.opts=Object.assign({port:6379,host:"127.0.0.1",retryStrategy:function(e){return Math.max(Math.min(Math.exp(e),2e4),1e3)}},e),this.extraOptions.blocking&&(this.opts.maxRetriesPerRequest=null);this.skipVersionCheck=(null==t?void 0:t.skipVersionCheck)||!!(this.opts&&this.opts.skipVersionCheck),this.handleClientError=e=>{this.emit("error",e)},this.handleClientClose=()=>{this.emit("close")},this.handleClientReady=()=>{this.emit("ready")},this.initializing=this.init(),this.initializing.catch(e=>this.emit("error",e))}checkBlockingOptions(e,t,r=!1){if(this.extraOptions.blocking&&t&&t.maxRetriesPerRequest)if(r)throw Error(e);else console.error(e)}static async waitUntilReady(e){let t,r,i;if("ready"!==e.status&&!("connect"===e.status&&eo(e))){if("wait"===e.status)return e.connect();if("end"===e.status)throw new H($.CONNECTION_CLOSED_ERROR_MSG);try{await new Promise((n,a)=>{let s;i=e=>{s=e},t=()=>{n()},r=()=>{"end"!==e.status?a(s||new H($.CONNECTION_CLOSED_ERROR_MSG)):s?a(s):n()},ei(e,3),e.once("ready",t),e.on("end",r),e.once("error",i)})}finally{e.removeListener("end",r),e.removeListener("error",i),e.removeListener("ready",t),ei(e,-3)}}}get client(){return this.initializing}loadCommands(e,t){let r=t||rK;for(let t in r){let i=`${r[t].name}:${e}`;this._client[i]||this._client.defineCommand(i,{numberOfKeys:r[t].keys,lua:r[t].content})}}async init(){if(!this._client)if(rO.clientFactory)this._client=rO.clientFactory(this.opts);else{let e=this.opts,{url:t}=e,r=(0,em.__rest)(e,["url"]),i=t?new tC.default(t,r):new tC.default(r);this._client=rE(i)}if(ei(this._client,3),this._client.on("error",this.handleClientError),this._client.on("close",this.handleClientClose),this._client.on("ready",this.handleClientReady),this.patchBlockingClusterClient(),this.extraOptions.skipWaitingForReady||await rO.waitUntilReady(this._client),this.loadCommands(this.packageVersion),"end"!==this._client.status){let e=await this.getRedisVersionAndType();if(this.version=e.version,this.dbType=e.databaseType,!0!==this.skipVersionCheck&&!this.closing){if(eu(this.version,rO.minimumVersion,this.dbType))throw Error(`Redis version needs to be greater or equal than ${rO.minimumVersion} Current: ${this.version}`);eu(this.version,rO.recommendedMinimumVersion,this.dbType)&&console.warn(`It is highly recommended to use a minimum Redis version of ${rO.recommendedMinimumVersion}
             Current: ${this.version}`)}this.capabilities={canDoubleTimeout:!eu(this.version,"6.0.0",this.dbType),canBlockFor1Ms:!eu(this.version,"7.0.8",this.dbType)},this.status="ready"}return this._client}patchBlockingClusterClient(){var e;let t=this._client;if(!this.extraOptions.blocking||!eo(t)||"function"!=typeof t.bzpopmin)return;let r=null!=(e=this.extraOptions.clusterReconnectTimeoutMs)?e:3e4;if(t[rT]=(t[rT]||0)+1,this.patchedBlockingClusterClient=t,t[rx])return;let i=t.bzpopmin,n=async(...e)=>{await rO.reconnectClusterIfNeeded(t,r);try{return await i.apply(t,e)}catch(e){if(rO.shouldReconnectClusterAfterError(t,e))try{await rO.reconnectCluster(t,r)}catch(e){}throw e}};t[rj]=i,t[rA]=n,t[rx]=!0,t.bzpopmin=n}disableBlockingClusterReconnect(){let e=this.patchedBlockingClusterClient;e&&!this.disabledBlockingClusterReconnect&&(e[rD]=(e[rD]||0)+1,this.disabledBlockingClusterReconnect=!0)}releaseBlockingClusterClientPatch(){let e=this.patchedBlockingClusterClient;if(!e)return;if(this.disabledBlockingClusterReconnect){let t=(e[rD]||1)-1;t>0?e[rD]=t:delete e[rD],this.disabledBlockingClusterReconnect=!1}let t=(e[rT]||1)-1;if(t>0){e[rT]=t,this.patchedBlockingClusterClient=void 0;return}e[rj]&&e.bzpopmin===e[rA]&&(e.bzpopmin=e[rj]),delete e[rT],delete e[rD],delete e[rj],delete e[rA],delete e[rx],this.patchedBlockingClusterClient=void 0}static isClusterWithEmptyNodes(e){return"function"==typeof e.nodes&&0===e.nodes().length}static isReconnectingDisabled(e){let t=e[rT]||0,r=e[rD]||0;return 0===t||r>=t||"end"===e.status||"closing"===e.status}static async reconnectClusterIfNeeded(e,t){!rO.isReconnectingDisabled(e)&&rO.isClusterWithEmptyNodes(e)&&await rO.reconnectCluster(e,t)}static shouldReconnectClusterAfterError(e,t){var r,i;if(rO.isReconnectingDisabled(e))return!1;let n=[t.message,null==(r=t.cause)?void 0:r.message,null==(i=t.lastNodeError)?void 0:i.message].join(" ");return rO.isClusterWithEmptyNodes(e)||/Command timed out|Failed to refresh slots cache/i.test(n)}static async reconnectCluster(e,t){rO.isReconnectingDisabled(e)||(e[rw]||(e[rw]=rO.connectClusterWithTimeout(e,t).finally(()=>{e[rw]=null})),await e[rw])}static async connectClusterWithTimeout(e,t){let r;e.disconnect(!1);try{await Promise.race([e.connect(),new Promise((e,i)=>{var n;null==(n=(r=setTimeout(()=>{i(new H(`BullMQ: cluster reconnect timed out after ${t}ms`))},t)).unref)||n.call(r)})])}finally{r&&clearTimeout(r)}}async disconnect(e=!0){let t=await this.client;if("end"!==t.status){let r,i;if(!e)return t.disconnect();let n=new Promise((e,n)=>{ei(t,2),t.once("end",e),t.once("error",n),r=e,i=n});t.disconnect();try{await n}finally{ei(t,-2),t.removeListener("end",r),t.removeListener("error",i)}}}async reconnect(){return(await this.client).connect()}async close(e=!1){var t;if(!this.closing){let r=this.status;this.status="closing",this.closing=!0,this.disableBlockingClusterReconnect();try{"ready"===r&&await this.initializing,this.extraOptions.shared||("initializing"==r||e?(this._client.disconnect(),null==(t=this.initializing)||t.catch(()=>{})):await this._client.quit(),this._client.status="end")}catch(e){if(ec(e))throw e}finally{this.releaseBlockingClusterClientPatch(),this._client.off("error",this.handleClientError),this._client.off("close",this.handleClientClose),this._client.off("ready",this.handleClientReady),ei(this._client,-3),this.removeAllListeners(),this.status="closed"}}}async getRedisVersionAndType(){let e;if(this.skipVersionCheck)return{version:rO.minimumVersion,databaseType:"redis"};let t=await this._client.info(),r="redis_version:",i="maxmemory_policy:",n=t.split(/\r?\n/),a="redis";for(let t=0;t<n.length;t++){let s=n[t];if(s.includes("dragonfly_version:")||s.includes("server:Dragonfly")?(a="dragonfly",0===s.indexOf("dragonfly_version:")&&(e=s.substr(18))):s.includes("valkey_version:")||s.includes("server:Valkey")?(a="valkey",0===s.indexOf("valkey_version:")&&(e=s.substr(15))):0===s.indexOf(r)&&(e=s.substr(r.length),"redis"===a&&(a="redis")),0===s.indexOf(i)){let e=s.substr(i.length);"noeviction"!==e&&console.warn(`IMPORTANT! Eviction policy is ${e}. It should be "noeviction"`)}}if(!e){for(let t of n)if(t.includes("version:")){let r=t.split(":");if(r.length>=2){e=r[1];break}}}return{version:e||rO.minimumVersion,databaseType:a}}get redisVersion(){return this.version}get databaseType(){return this.dbType}}rO.minimumVersion="5.0.0",rO.recommendedMinimumVersion="6.2.0",_.EventEmitter;var rC=_;function rR(e){return 1===e.length&&Array.isArray(e[0])?e[0]:e}function rM(e){return(null==e?void 0:e.message)==="Disconnects client"||(null==e?void 0:e.message)==="The client is closed"||(null==e?void 0:e.message)==="Connection is closed."}class rP extends rC.EventEmitter{get status(){return this.statusOverride?this.statusOverride:this.raw.isReady?"ready":this.raw.isOpen?"connect":this.hasConnected?"end":"wait"}set status(e){if("end"===e&&(this.destroying=!0,this.raw.isOpen))try{this.raw.quit().catch(()=>{})}catch(e){}this.statusOverride=e}get options(){var e;return null!=(e=this.raw.options)?e:{}}set options(e){}constructor(e){super(),this.raw=e,this.scripts=new Map,this.hasConnected=!1,this.destroying=!1,this.isCluster=!1,e.on("ready",()=>{this.hasConnected=!0,this.connectionName?this.raw.clientSetName(this.connectionName).then(()=>this.emit("ready"),()=>this.emit("ready")):this.emit("ready")}),e.on("error",e=>{this.destroying&&rM(e)||this.emit("error",e)}),e.on("end",()=>this.emit("close")),e.on("reconnecting",()=>this.emit("reconnecting")),e.isOpen||(this.connectPromise=e.connect().then(()=>{this.connectPromise=void 0},e=>{this.connectPromise=void 0}))}async connect(){return this.connectPromise?this.connectPromise:this.raw.isOpen?void(!this.raw.isReady&&await new Promise((e,t)=>{let r=()=>{a(),e()},i=e=>{a(),t(e)},n=()=>{a(),t(Error("Connection ended before ready event"))},a=()=>{this.off("ready",r),this.off("error",i),this.off("end",n)};this.once("ready",r),this.once("error",i),this.once("end",n)})):(this.connectPromise=this.raw.connect().then(()=>{this.connectPromise=void 0},e=>{throw this.connectPromise=void 0,e}),this.connectPromise)}disconnect(e=!1){this.destroying=!0,e||(this.statusOverride="end");try{this.raw.isOpen&&this.raw.destroy()}catch(e){}this.emit("close"),e?(this.statusOverride=void 0,this.emit("reconnecting"),this.connect().catch(e=>{rM(e)||this.emit("error",e)}).finally(()=>{this.destroying=!1})):this.emit("end")}async quit(){if(this.destroying||"end"===this.statusOverride)return setImmediate(()=>{this.emit("end"),this.emit("close")}),"OK";this.destroying=!0;try{if(this.raw.isOpen)try{await this.raw.quit()}catch(e){}}catch(e){}return this.statusOverride="end",setImmediate(()=>{this.emit("end"),this.emit("close")}),"OK"}duplicate(...e){let t=new rP(this.raw.duplicate());for(let[e,r]of this.scripts)t.scripts.set(e,r),t[e]=(...r)=>t.runCommand(e,r);let r=e[0];return r&&"object"==typeof r&&r.connectionName&&(t.connectionName=r.connectionName),t}defineCommand(e,t){let r=(0,W.createHash)("sha1").update(t.lua).digest("hex");this.scripts.set(e,{sha:r,lua:t.lua,numberOfKeys:t.numberOfKeys}),this[e]=(...t)=>this.runCommand(e,t),this.raw.scriptLoad(t.lua).catch(()=>{})}async runCommand(e,t){var r,i;let n=this.scripts.get(e);if(!n)throw Error(`BullMQ: unknown command "${e}"`);let a=rR(t),{sha:s,lua:o,numberOfKeys:l}=n,d=a.slice(0,l).map(String),c=a.slice(l).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));try{return await this.raw.evalSha(s,{keys:d,arguments:c})}catch(e){if(this.destroying&&rM(e))return null;if(rM(e))throw new H(e.message,e);if(null==(i=null==(r=null==e?void 0:e.message)?void 0:r.includes)?void 0:i.call(r,"NOSCRIPT"))try{return await this.raw.eval(o,{keys:d,arguments:c})}catch(e){if(this.destroying&&rM(e))return null;if(rM(e))throw new H(e.message,e);throw e}throw e}}multi(){return new rN(this.raw.multi(),this.scripts)}pipeline(){return this.multi()}async hgetall(e){let t=await this.raw.hGetAll(e);return null!=t?t:{}}async hget(e,t){var r;return null!=(r=await this.raw.hGet(e,t))?r:null}async hmget(e,...t){return(await this.raw.hmGet(e,t)).map(e=>null!=e?e:null)}async hset(e,t,...r){if("object"==typeof t)return await this.raw.hSet(e,t);let i={};i[t]=String(r[0]);for(let e=1;e<r.length;e+=2)i[String(r[e])]=String(r[e+1]);return await this.raw.hSet(e,i)}async hdel(e,...t){return await this.raw.hDel(e,t)}async hexists(e,t){return+!!await this.raw.hExists(e,t)}async get(e){var t;return null!=(t=await this.raw.get(e))?t:null}async set(e,t,r){let i={};return(null==r?void 0:r.PX)!=null?i.PX=r.PX:(null==r?void 0:r.EX)!=null&&(i.EX=r.EX),await this.raw.set(e,String(t),i)}async del(...e){return 0===e.length?0:await this.raw.del(e)}async zrange(e,t,r,i){if(null==i?void 0:i.WITHSCORES){let i=await this.raw.zRangeWithScores(e,t,r),n=[];for(let e of i)n.push(e.value,String(e.score));return n}return await this.raw.zRange(e,t,r)}async zrevrange(e,t,r,i){if(null==i?void 0:i.WITHSCORES){let i=await this.raw.zRangeWithScores(e,t,r,{REV:!0}),n=[];for(let e of i)n.push(e.value,String(e.score));return n}return await this.raw.zRange(e,t,r,{REV:!0})}async zcard(e){return await this.raw.zCard(e)}async zscore(e,t){let r=await this.raw.zScore(e,t);return null!=r?String(r):null}async lrange(e,t,r){return await this.raw.lRange(e,t,r)}async llen(e){return await this.raw.lLen(e)}async ltrim(e,t,r){return await this.raw.lTrim(e,t,r),"OK"}async lpos(e,t){var r;return null!=(r=await this.raw.lPos(e,t))?r:null}async smembers(e){return await this.raw.sMembers(e)}async xadd(e,t,r,i){let n={};(null==i?void 0:i.MAXLEN)!=null&&(n.TRIM={strategy:"MAXLEN",threshold:i.MAXLEN,strategyModifier:!1===i.approximate?void 0:"~"});let a={};for(let[e,t]of Object.entries(r))a[e]=String(t);return await this.raw.xAdd(e,t,a,n)}async xread(e,t){let r,i={};(null==t?void 0:t.BLOCK)!=null&&(i.BLOCK=t.BLOCK),(null==t?void 0:t.COUNT)!=null&&(i.COUNT=t.COUNT);let n=e.map(e=>({key:e.key,id:e.id}));try{r=await this.raw.xRead(n,i)}catch(e){if(this.destroying&&rM(e))return null;if(rM(e))throw new H(e.message,e);throw e}return r?r.map(e=>[e.name,e.messages.map(e=>[e.id,Object.entries(e.message).flat()])]):null}async xtrim(e,t,r,i){let n=(null==i?void 0:i.approximate)===!1?void 0:"~";return await this.raw.xTrim(e,t,r,{strategyModifier:n})}async bzpopmin(e,t){let r;try{r=await this.raw.bzPopMin(e,t)}catch(e){if(this.destroying&&rM(e))return null;if(rM(e))throw new H(e.message,e);throw e}return r?[r.key,r.value,String(r.score)]:null}async info(){return await this.raw.info()}async clientSetName(e){return await this.raw.clientSetName(e)}async clientList(){return await this.raw.sendCommand(["CLIENT","LIST"])}async scan(e,t){let r={};(null==t?void 0:t.MATCH)&&(r.MATCH=t.MATCH),(null==t?void 0:t.COUNT)&&(r.COUNT=t.COUNT);let i=await this.raw.scan(String(e),r);return[String(i.cursor),i.keys]}scanStream(e){let t=this.raw,r=this.connectPromise,i={};e.match&&(i.MATCH=e.match),e.count&&(i.COUNT=e.count);let n=new tK.Readable({objectMode:!0,async read(){var e,a,s,o;try{r&&await r;try{for(var l,d=!0,c=(0,em.__asyncValues)(t.scanIterator(i));!(e=(l=await c.next()).done);d=!0)if(o=l.value,d=!1,!n.push(Array.isArray(o)?o:[o]))return}catch(e){a={error:e}}finally{try{!d&&!e&&(s=c.return)&&await s.call(c)}finally{if(a)throw a.error}}n.push(null)}catch(e){n.destroy(e)}}});return n}async keys(e){return await this.raw.keys(e)}async exists(...e){return 0===e.length?0:await this.raw.exists(e)}async zadd(e,...t){let r=[];for(let e=0;e<t.length;e+=2)r.push({score:Number(t[e]),value:String(t[e+1])});return await this.raw.zAdd(e,r)}async zrem(e,...t){return await this.raw.zRem(e,t)}async xlen(e){return await this.raw.xLen(e)}async xrevrange(e,t,r,...i){let n={};return"COUNT"===i[0]&&(n.COUNT=Number(i[1])),(await this.raw.xRevRange(e,t,r,n)).map(e=>[e.id,Object.entries(e.message).flat()])}async sadd(e,...t){return await this.raw.sAdd(e,t.map(String))}async scard(e){return await this.raw.sCard(e)}async lpush(e,...t){return await this.raw.lPush(e,t)}async rpop(e){return await this.raw.rPop(e)}async incr(e){return await this.raw.incr(e)}async incrby(e,t){return await this.raw.incrBy(e,t)}async flushall(){return await this.raw.flushAll()}}class rN{constructor(e,t){this.raw=e,this.scripts=t,this.transformers=[]}addIdentityTransformer(){this.transformers.push(e=>e)}hgetall(e){return this.raw.hGetAll(e),this.addIdentityTransformer(),this}hset(e,t){return this.raw.hSet(e,t),this.addIdentityTransformer(),this}hscan(e,t,r){let i={};return(null==r?void 0:r.COUNT)!=null&&(i.COUNT=r.COUNT),this.raw.hScan(e,String(t),i),this.transformers.push(e=>{if(!e)return["0",[]];let t=[];for(let r of e.entries||[])t.push(r.field,r.value);return[String(e.cursor),t]}),this}smembers(e){return this.raw.sMembers(e),this.addIdentityTransformer(),this}sscan(e,t,r){let i={};return(null==r?void 0:r.COUNT)!=null&&(i.COUNT=r.COUNT),this.raw.sScan(e,String(t),i),this.transformers.push(e=>e?[String(e.cursor),e.members||[]]:["0",[]]),this}zrange(e,t,r){return this.raw.zRange(e,t,r),this.addIdentityTransformer(),this}lrange(e,t,r){return this.raw.lRange(e,t,r),this.addIdentityTransformer(),this}llen(e){return this.raw.lLen(e),this.addIdentityTransformer(),this}del(...e){return e.length>0&&(this.raw.del(e),this.addIdentityTransformer()),this}runCommand(e,t){let r=this.scripts.get(e);if(!r)throw Error(`BullMQ: unknown command "${e}" in transaction`);let i=rR(t),{sha:n,lua:a,numberOfKeys:s}=r,o=i.slice(0,s).map(String),l=i.slice(s).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));return this.raw.evalSha(n,{keys:o,arguments:l}),this.addIdentityTransformer(),this}async exec(){let e=await this.raw.exec();return e?e.map((e,t)=>{if(e instanceof Error)return[e,null];let r=this.transformers[t];return[null,r?r(e):e]}):null}}var rJ=_;function rL(e){return 1===e.length&&Array.isArray(e[0])?e[0]:e}function r_(e){return null==e?[]:Array.isArray(e)?e.map(String):e instanceof Set?Array.from(e,e=>String(e)):[]}class rF extends rJ.EventEmitter{get status(){return this.statusOverride?this.statusOverride:this.closed?"end":this.raw.connected?"ready":this.hasConnected?"end":"wait"}set status(e){"end"===e&&(this.closing=!0,this.closed=!0),this.statusOverride=e}get options(){return{}}set options(e){}constructor(e,t){super(),this.raw=e,this.scripts=new Map,this.loadedScriptShas=new Set,this.hasConnected=!1,this.closed=!1,this.closing=!1,this.reconnecting=!1,this.reconnectTimer=null,this.reconnectAttempts=0,this.maxReconnectDelay=2e4,this.isCluster=!1,this._setupCallbacks(),(null==t?void 0:t.lazyConnect)||this.connect().catch(()=>{})}_setupCallbacks(){this.raw.onconnect=()=>{this.hasConnected=!0,this.closed=!1,this.closing=!1,this.reconnecting=!1,this.reconnectAttempts=0,this.statusOverride=void 0,this.loadedScriptShas.clear(),this.connectionName?this.clientSetName(this.connectionName).then(()=>this.emit("ready"),()=>this.emit("ready")):this.emit("ready")},this.raw.onclose=e=>{if(this.closing){this.closed=!0,this.emit("close"),this.emit("end");return}this.closed=!0,this.emit("close"),e&&this.emit("error",e),this._scheduleReconnect()}}_scheduleReconnect(){if(this.closing||this.reconnecting)return;this.reconnecting=!0,this.reconnectAttempts++;let e=Math.max(Math.min(100*Math.exp(this.reconnectAttempts),this.maxReconnectDelay),1e3);this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,this.closing){this.reconnecting=!1;return}try{let e=new this.raw.constructor(this.raw.url);this.raw=e,this.closed=!1,this.connecting=void 0,this._setupCallbacks(),await e.connect()}catch(e){this.reconnecting=!1,this.closing||this._scheduleReconnect()}},e)}async connect(){if(this.raw.connected){this.hasConnected=!0,this.closed=!1,this.closing=!1,this.statusOverride=void 0;return}if(!this.connecting){if(this.closed=!1,this.closing=!1,this.statusOverride=void 0,this.hasConnected&&!this.raw.connected){let e=this.raw.constructor;this.raw=new e(this.raw.url),this._setupCallbacks()}this.connecting=this.raw.connect().then(()=>{this.hasConnected=!0,this.closed=!1,this.closing=!1,this.statusOverride=void 0}).finally(()=>{this.connecting=void 0})}await this.connecting}_closeRaw(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.reconnecting=!1;let e=this.raw;e.onconnect=()=>{},e.onclose=()=>{},e.onerror=()=>{},e.connected&&setImmediate(()=>{try{e.connected&&e.close()}catch(e){}})}disconnect(e){if(!this.closed||e)if(e){this.closed=!0,this.statusOverride=void 0;let e=this.raw;e.onclose=()=>{},e.connected&&setImmediate(()=>{try{e.connected&&e.close()}catch(e){}}),this.emit("close"),this._scheduleReconnect()}else this.closing=!0,this.closed=!0,this.statusOverride="end",this._closeRaw(),this.emit("close"),this.emit("end")}async quit(){return this.closed?setImmediate(()=>{this.emit("end"),this.emit("close")}):(this.closing=!0,this.closed=!0,this.statusOverride="end",this._closeRaw(),setImmediate(()=>{this.emit("end"),this.emit("close")})),"OK"}duplicate(...e){let t=new rF(new this.raw.constructor(this.raw.url));for(let[e,r]of this.scripts)t.scripts.set(e,r),t[e]=(...r)=>t.runCommand(e,r);let r=e[0];return r&&"object"==typeof r&&r.connectionName&&(t.connectionName=r.connectionName),t}defineCommand(e,t){let r=(0,W.createHash)("sha1").update(t.lua).digest("hex");this.scripts.set(e,{sha:r,lua:t.lua,numberOfKeys:t.numberOfKeys}),this[e]=(...t)=>this.runCommand(e,t)}async runCommand(e,t){let r=this.scripts.get(e);if(!r)throw Error(`BullMQ: unknown command "${e}"`);let i=rL(t),{sha:n,lua:a,numberOfKeys:s}=r,o=i.slice(0,s).map(String),l=i.slice(s).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e)),d=[n,String(o.length),...o,...l];return(async()=>{var e,t;try{let e=await this.sendCommand("EVALSHA",d);return this.loadedScriptShas.add(n),e}catch(r){if(null==(t=null==(e=null==r?void 0:r.message)?void 0:e.includes)?void 0:t.call(e,"NOSCRIPT")){let e=[a,String(o.length),...o,...l],t=await this.sendCommand("EVAL",e);return this.loadedScriptShas.add(n),t}throw r}})()}async ensureScriptsLoaded(e){let t=[],r=new Set;for(let i of e)this.loadedScriptShas.has(i.sha)||r.has(i.sha)||(r.add(i.sha),t.push(i));0!==t.length&&await Promise.all(t.map(async e=>{await this.sendCommand("SCRIPT",["LOAD",e.lua]),this.loadedScriptShas.add(e.sha)}))}sendCommand(e,t){return this.closing||this.closed?Promise.reject(new H("Connection is closed")):this.raw.send(e,t).catch(e=>{var t;let r;if("Socket closed unexpectedly"===(r=null!=(t=null==e?void 0:e.message)?t:"")||r.startsWith("Connection closed")||"Connection is closed."===r||"Connection has failed"===r)return Promise.reject(new H(this.closing||this.closed?"Connection is closed":e.message,e));throw e})}multi(){return new rq(this.raw,this.scripts,!0,this)}pipeline(){return new rq(this.raw,this.scripts,!1,this)}async hgetall(e){let t=await this.sendCommand("HGETALL",[e]);if(!t||Array.isArray(t)&&0===t.length)return{};if(Array.isArray(t)){let e={};for(let r=0;r<t.length;r+=2)e[String(t[r])]=String(t[r+1]);return e}return t}async hget(e,t){let r=await this.sendCommand("HGET",[e,t]);return null!=r?r:null}async hmget(e,...t){return(await this.sendCommand("HMGET",[e,...t])||[]).map(e=>null!=e?e:null)}async hset(e,t,...r){let i;if("object"==typeof t)for(let[r,n]of(i=[e],Object.entries(t)))i.push(r,String(n));else{i=[e,t,String(r[0])];for(let e=1;e<r.length;e+=2)i.push(String(r[e]),String(r[e+1]))}return await this.sendCommand("HSET",i)}async hdel(e,...t){return await this.sendCommand("HDEL",[e,...t])}async hexists(e,t){let r=await this.sendCommand("HEXISTS",[e,t]);return+(!0===r||1===r)}async get(e){let t=await this.sendCommand("GET",[e]);return null!=t?t:null}async set(e,t,r){let i=[e,String(t)];return(null==r?void 0:r.PX)!=null?i.push("PX",String(r.PX)):(null==r?void 0:r.EX)!=null&&i.push("EX",String(r.EX)),await this.sendCommand("SET",i)}async del(...e){return 0===e.length?0:await this.sendCommand("DEL",e)}async zrange(e,t,r,i){let n=[e,String(t),String(r)];(null==i?void 0:i.WITHSCORES)&&n.push("WITHSCORES");let a=await this.sendCommand("ZRANGE",n);return a?(null==i?void 0:i.WITHSCORES)&&a.length>0&&Array.isArray(a[0])?a.flatMap(e=>[String(e[0]),String(e[1])]):a.map(String):[]}async zrevrange(e,t,r,i){let n=[e,String(t),String(r)];(null==i?void 0:i.WITHSCORES)&&n.push("WITHSCORES"),n.push("REV");let a=await this.sendCommand("ZRANGE",n);return a?(null==i?void 0:i.WITHSCORES)&&a.length>0&&Array.isArray(a[0])?a.flatMap(e=>[String(e[0]),String(e[1])]):a.map(String):[]}async zcard(e){return await this.sendCommand("ZCARD",[e])}async zscore(e,t){let r=await this.sendCommand("ZSCORE",[e,t]);return null!=r?String(r):null}async lrange(e,t,r){return(await this.sendCommand("LRANGE",[e,String(t),String(r)])||[]).map(String)}async llen(e){return await this.sendCommand("LLEN",[e])}async ltrim(e,t,r){return await this.sendCommand("LTRIM",[e,String(t),String(r)]),"OK"}async lpos(e,t){let r=await this.sendCommand("LPOS",[e,t]);return null!=r?r:null}async smembers(e){return r_(await this.sendCommand("SMEMBERS",[e]))}async xadd(e,t,r,i){let n=[e];for(let[e,a]of((null==i?void 0:i.MAXLEN)!=null&&(n.push("MAXLEN"),!1!==i.approximate&&n.push("~"),n.push(String(i.MAXLEN))),n.push(t),Object.entries(r)))n.push(e,String(a));return await this.raw.send("XADD",n)}async xread(e,t){let r,i=[];for(let r of((null==t?void 0:t.COUNT)!=null&&i.push("COUNT",String(t.COUNT)),(null==t?void 0:t.BLOCK)!=null&&i.push("BLOCK",String(t.BLOCK)),i.push("STREAMS"),e))i.push(r.key);for(let t of e)i.push(t.id);try{r=await this.sendCommand("XREAD",i)}catch(e){if(this.closing)return null;throw e}return r?Array.isArray(r)?r.map(e=>[String(e[0]),(e[1]||[]).map(e=>[String(e[0]),(e[1]||[]).map(String)])]):Object.entries(r).map(([e,t])=>[e,(t||[]).map(e=>[String(e[0]),(e[1]||[]).map(String)])]):null}async xtrim(e,t,r,i){let n=[e,t];return(null==i?void 0:i.approximate)!==!1&&n.push("~"),n.push(String(r)),await this.sendCommand("XTRIM",n)}async bzpopmin(e,t){let r;try{r=await this.sendCommand("BZPOPMIN",[e,String(t)])}catch(e){if(this.closing)return null;throw e}return r&&0!==r.length?[String(r[0]),String(r[1]),String(r[2])]:null}async info(){return await this.sendCommand("INFO",[])}async clientSetName(e){return await this.sendCommand("CLIENT",["SETNAME",e])}async clientList(){return await this.sendCommand("CLIENT",["LIST"])}async scan(e,t){let r=[String(e)];(null==t?void 0:t.MATCH)&&r.push("MATCH",t.MATCH),(null==t?void 0:t.COUNT)&&r.push("COUNT",String(t.COUNT));let i=await this.sendCommand("SCAN",r),n=i[1];return[String(i[0]),Array.isArray(n)?n.map(String):[]]}scanStream(e){let t=this,r="0",i=!1,n=new tK.Readable({objectMode:!0,async read(){if(i&&"0"===r)return void n.push(null);i=!0;try{for(;;){let[i,a]=await t.scan(r,{MATCH:e.match,COUNT:e.count});if(r=i,a.length>0){n.push(a),"0"===r&&n.push(null);return}if("0"===r)return void n.push(null)}}catch(e){n.destroy(e)}}});return n}async keys(e){return(await this.sendCommand("KEYS",[e])||[]).map(String)}async exists(...e){if(0===e.length)return 0;let t=await this.sendCommand("EXISTS",e);return"boolean"==typeof t?+!!t:t}async zadd(e,...t){let r=[e];for(let e=0;e<t.length;e+=2)r.push(String(t[e]),String(t[e+1]));return await this.sendCommand("ZADD",r)}async zrem(e,...t){return await this.sendCommand("ZREM",[e,...t])}async xlen(e){return await this.sendCommand("XLEN",[e])}async xrevrange(e,t,r,...i){let n=[e,t,r];"COUNT"===i[0]&&n.push("COUNT",String(i[1]));let a=await this.sendCommand("XREVRANGE",n);return a?a.map(e=>[String(e[0]),(e[1]||[]).map(String)]):[]}async sadd(e,...t){return await this.sendCommand("SADD",[e,...t.map(String)])}async scard(e){return await this.sendCommand("SCARD",[e])}async lpush(e,...t){return await this.sendCommand("LPUSH",[e,...t])}async rpop(e){let t=await this.sendCommand("RPOP",[e]);return null!=t?t:null}async incr(e){return await this.sendCommand("INCR",[e])}async incrby(e,t){return await this.sendCommand("INCRBY",[e,String(t)])}async flushall(){return await this.sendCommand("FLUSHALL",[])}}class rq{constructor(e,t,r,i){this.raw=e,this.scripts=t,this.transactional=r,this.adapter=i,this.commands=[],this.transformers=[],this.scriptsToLoad=[]}addCommand(e,t,r){this.commands.push({cmd:e,args:t}),this.transformers.push(r||(e=>e))}hgetall(e){return this.addCommand("HGETALL",[e],e=>{if(!e||Array.isArray(e)&&0===e.length)return{};if(Array.isArray(e)){let t={};for(let r=0;r<e.length;r+=2)t[String(e[r])]=String(e[r+1]);return t}return e}),this}hset(e,t){let r=[e];for(let[e,i]of Object.entries(t))r.push(e,String(i));return this.addCommand("HSET",r),this}hscan(e,t,r){let i=[e,String(t)];return(null==r?void 0:r.COUNT)!=null&&i.push("COUNT",String(r.COUNT)),this.addCommand("HSCAN",i,e=>e&&Array.isArray(e)?[String(e[0]),r_(e[1])]:["0",[]]),this}smembers(e){return this.addCommand("SMEMBERS",[e],e=>r_(e)),this}sscan(e,t,r){let i=[e,String(t)];return(null==r?void 0:r.COUNT)!=null&&i.push("COUNT",String(r.COUNT)),this.addCommand("SSCAN",i,e=>e&&Array.isArray(e)?[String(e[0]),r_(e[1])]:["0",[]]),this}zrange(e,t,r){return this.addCommand("ZRANGE",[e,String(t),String(r)],e=>Array.isArray(e)?e.map(String):[]),this}lrange(e,t,r){return this.addCommand("LRANGE",[e,String(t),String(r)],e=>Array.isArray(e)?e.map(String):[]),this}llen(e){return this.addCommand("LLEN",[e]),this}del(...e){return e.length>0&&this.addCommand("DEL",e),this}runCommand(e,t){let r=this.scripts.get(e);if(!r)throw Error(`BullMQ: unknown command "${e}" in transaction`);let i=rL(t),{sha:n,numberOfKeys:a}=r,s=i.slice(0,a).map(String),o=i.slice(a).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));return this.scriptsToLoad.push(r),this.addCommand("EVALSHA",[n,String(s.length),...s,...o]),this}async exec(){if(0===this.commands.length)return[];if(this.scriptsToLoad.length>0&&await this.adapter.ensureScriptsLoaded(this.scriptsToLoad),!this.transactional)return(await Promise.allSettled(this.commands.map(({cmd:e,args:t})=>this.adapter.sendCommand(e,t)))).map((e,t)=>{if("rejected"===e.status)return[e.reason,null];let r=this.transformers[t];return[null,r?r(e.value):e.value]});let e=e=>{};try{for(let{cmd:t,args:r}of(this.raw.send("MULTI",[]).catch(e),this.commands))this.raw.send(t,r).catch(e);let t=await this.raw.send("EXEC",[]);if(!t)return null;return t.map((e,t)=>{if(e instanceof Error)return[e,null];let r=this.transformers[t],i=r?r(e):e;return[null,i]})}catch(e){try{await this.raw.send("DISCARD",[])}catch(e){}throw e}}}var rG=e.i(42397),rV=_;class rU extends rV.EventEmitter{constructor(e,t={connection:{}},r=rO,i=!1){if(super(),this.name=e,this.opts=t,this.closed=!1,this.hasBlockingConnection=!1,this.hasBlockingConnection=i,this.opts=Object.assign({prefix:"bull"},t),!e)throw Error("Queue name must be provided");if(e.includes(":"))throw Error("Queue name cannot contain :");this.connection=new r(t.connection,{shared:es(t.connection),blocking:i,skipVersionCheck:t.skipVersionCheck,skipWaitingForReady:t.skipWaitingForReady}),this.connection.on("error",e=>this.emit("error",e)),this.connection.on("close",()=>{this.closing||this.emit("ioredis:close")});const n=new tD(t.prefix);this.qualifiedName=n.getQueueQualifiedName(e),this.keys=n.getKeys(e),this.toKey=t=>n.toKey(e,t),this.createScripts()}get client(){return this.connection.client}createScripts(){this.scripts=tx(this)}get redisVersion(){return this.connection.redisVersion}get databaseType(){return this.connection.databaseType}get Job(){return tA}emit(e,...t){try{return super.emit(e,...t)}catch(e){try{return super.emit("error",e)}catch(e){return console.error(e),!1}}}waitUntilReady(){return this.client}base64Name(){return Buffer.from(this.name).toString("base64")}clientName(e=""){let t=this.base64Name();return`${this.opts.prefix}:${t}${e}`}async close(){this.closing||(this.closing=this.connection.close()),await this.closing,this.closed=!0}disconnect(){return this.connection.disconnect()}async checkConnectionError(e,t=5e3){try{return await e()}catch(e){if(ec(e)&&this.emit("error",e),this.closing||!t)return;await er(t)}}trace(e,t,r,i,n){return ep(this.opts.telemetry,e,this.name,t,r,i,n)}}class rB extends rU{constructor(e,t,r){super(e,t,r),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||rY}async upsertJobScheduler(e,t,r,i,n,{override:a,producerId:s}){let o,{every:l,limit:d,pattern:c,offset:u}=t;if(c&&l)throw Error("Both .pattern and .every options are defined for this repeatable job");if(!c&&!l)throw Error("Either .pattern or .every options must be defined for this repeatable job");if(t.immediately&&t.startDate)throw Error("Both .immediately and .startDate options are defined for this repeatable job");t.immediately&&t.every&&console.warn("Using option immediately with every does not affect the job's schedule. Job will run immediately anyway.");let h=t.count?t.count+1:1;if(void 0!==t.limit&&h>t.limit)return;let p=Date.now(),{endDate:y}=t;if(y&&p>new Date(y).getTime())return;let m=n.prevMillis||0;p=m<p?p:m;let{immediately:f}=t,b=(0,em.__rest)(t,["immediately"]),g=l&&u?u:null;if(c&&(o=await this.repeatStrategy(p,t,r))<p&&(o=p),o||l)return this.trace(w.PRODUCER,"add",`${this.name}.${r}`,async(u,m)=>{var f,v;let K=n.telemetry;if(m){let e=null==(f=n.telemetry)?void 0:f.omitContext,t=(null==(v=n.telemetry)?void 0:v.metadata)||!e&&m;(t||e)&&(K={metadata:t,omitContext:e})}let S=this.getNextJobOpts(o,e,Object.assign(Object.assign({},n),{repeat:b,telemetry:K}),h,g);if(a){o<p&&(o=p);let[a,h]=await this.scripts.addJobScheduler(e,o,JSON.stringify(void 0===i?{}:i),tA.optsAsJSON(n),{name:r,startDate:t.startDate?new Date(t.startDate).getTime():void 0,endDate:y?new Date(y).getTime():void 0,tz:t.tz,pattern:c,every:l,limit:d,offset:g},tA.optsAsJSON(S),s),m="string"==typeof h?parseInt(h,10):h,f=new this.Job(this,r,i,Object.assign(Object.assign({},S),{delay:m}),a);return f.id=a,null==u||u.setAttributes({[I.JobSchedulerId]:e,[I.JobId]:f.id}),f}{let t=await this.scripts.updateJobSchedulerNextMillis(e,o,JSON.stringify(void 0===i?{}:i),tA.optsAsJSON(S),s);if(t){let n=new this.Job(this,r,i,S,t);return n.id=t,null==u||u.setAttributes({[I.JobSchedulerId]:e,[I.JobId]:n.id}),n}}})}getNextJobOpts(e,t,r,i,n){var a,s;let o=this.getSchedulerNextJobId({jobSchedulerId:t,nextMillis:e}),l=Date.now(),d=e+n-l,c=Object.assign(Object.assign({},r),{jobId:o,delay:d<0?0:d,timestamp:l,prevMillis:e,repeatJobKey:t});return c.repeat=Object.assign(Object.assign({},r.repeat),{offset:n,count:i,startDate:(null==(a=r.repeat)?void 0:a.startDate)?new Date(r.repeat.startDate).getTime():void 0,endDate:(null==(s=r.repeat)?void 0:s.endDate)?new Date(r.repeat.endDate).getTime():void 0}),c}async removeJobScheduler(e){return this.scripts.removeJobScheduler(e)}async getSchedulerData(e,t,r){let i=await e.hgetall(this.toKey("repeat:"+t));return this.transformSchedulerData(t,i,r)}transformSchedulerData(e,t,r){if(t&&Object.keys(t).length>0){let i={key:e,name:t.name,next:r};return t.ic&&(i.iterationCount=parseInt(t.ic)),t.limit&&(i.limit=parseInt(t.limit)),t.startDate&&(i.startDate=parseInt(t.startDate)),t.endDate&&(i.endDate=parseInt(t.endDate)),t.tz&&(i.tz=t.tz),t.pattern&&(i.pattern=t.pattern),t.every&&(i.every=parseInt(t.every)),t.offset&&(i.offset=parseInt(t.offset)),(t.data||t.opts)&&(i.template=this.getTemplateFromJSON(t.data,t.opts)),i}if(e.includes(":"))return this.keyToData(e,r)}keyToData(e,t){let r=e.split(":"),i=r.slice(4).join(":")||null;return{key:e,name:r[0],id:r[1]||null,endDate:parseInt(r[2])||null,tz:r[3]||null,pattern:i,next:t}}async isJobScheduler(e){let t=await this.client;return 1===await t.hexists(`${this.keys.repeat}:${e}`,"ic")}async getScheduler(e){let[t,r]=await this.scripts.getJobScheduler(e);return this.transformSchedulerData(e,t?ee(t):null,r?parseInt(r):null)}getTemplateFromJSON(e,t){let r={};return e&&(r.data=JSON.parse(e)),t&&(r.opts=tA.optsFromJSON(t)),r}async getJobSchedulers(e=0,t=-1,r=!1){let i=await this.client,n=this.keys.repeat,a=r?await i.zrange(n,e,t,{WITHSCORES:!0}):await i.zrevrange(n,e,t,{WITHSCORES:!0}),s=[];for(let e=0;e<a.length;e+=2)s.push(this.getSchedulerData(i,a[e],parseInt(a[e+1])));return Promise.all(s)}async getSchedulersCount(){let e=this.keys.repeat;return(await this.client).zcard(e)}getSchedulerNextJobId({nextMillis:e,jobSchedulerId:t}){return`repeat:${t}:${e}`}}let rY=(e,t)=>{let{pattern:r}=t,i=new Date(e),n=t.startDate&&new Date(t.startDate),a=(0,rG.parseExpression)(r,Object.assign(Object.assign({},t),{currentDate:n>i?n:i}));try{if(t.immediately)return new Date().getTime();return a.next().getTime()}catch(e){}};class rz{constructor(e,t){this.worker=e,this.opts=t,this.trackedJobs=new Map,this.closed=!1}start(){!this.closed&&this.opts.lockRenewTime>0&&this.startLockExtenderTimer()}async extendLocks(e){await this.worker.trace(w.INTERNAL,"extendLocks",this.worker.name,async t=>{null==t||t.setAttributes({[I.WorkerId]:this.opts.workerId,[I.WorkerName]:this.opts.workerName,[I.WorkerJobsToExtendLocks]:e});try{let t=e.map(e=>{var t;return(null==(t=this.trackedJobs.get(e))?void 0:t.token)||""}),r=await this.worker.extendJobLocks(e,t,this.opts.lockDuration);if(r.length>0)for(let e of(this.worker.emit("lockRenewalFailed",r),r))this.worker.emit("error",Error(`could not renew lock for job ${e}`));let i=e.filter(e=>!r.includes(e));i.length>0&&this.worker.emit("locksRenewed",{count:i.length,jobIds:i})}catch(e){this.worker.emit("error",e)}})}startLockExtenderTimer(){clearTimeout(this.lockRenewalTimer),this.closed||(this.lockRenewalTimer=setTimeout(async()=>{let e=Date.now(),t=[];for(let r of this.trackedJobs.keys()){let{ts:i,token:n,abortController:a}=this.trackedJobs.get(r);if(!i){this.trackedJobs.set(r,{token:n,ts:e,abortController:a});continue}i+this.opts.lockRenewTime/2<e&&(this.trackedJobs.set(r,{token:n,ts:e,abortController:a}),t.push(r))}t.length&&await this.extendLocks(t),this.startLockExtenderTimer()},this.opts.lockRenewTime/2))}async close(){this.closed||(this.closed=!0,this.lockRenewalTimer&&(clearTimeout(this.lockRenewalTimer),this.lockRenewalTimer=void 0),this.trackedJobs.clear())}trackJob(e,t,r,i=!1){let n=i?new z:void 0;return!this.closed&&e&&this.trackedJobs.set(e,{token:t,ts:r,abortController:n}),n}untrackJob(e){this.trackedJobs.delete(e)}getActiveJobCount(){return this.trackedJobs.size}isRunning(){return!this.closed&&void 0!==this.lockRenewalTimer}cancelJob(e,t){let r=this.trackedJobs.get(e);return null!=r&&!!r.abortController&&(r.abortController.abort(t),!0)}cancelAllJobs(e){for(let t of this.trackedJobs.values())t.abortController&&t.abortController.abort(e)}getTrackedJobIds(){return Array.from(this.trackedJobs.keys())}}function rW(e){return String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n")}class r$ extends rU{getJob(e){return this.Job.fromId(this,e)}commandByType(e,t,r){return e.map(e=>{e="waiting"===e?"wait":e;let i=this.toKey(e);switch(e){case"completed":case"failed":case"delayed":case"prioritized":case"repeat":case"waiting-children":return r(i,t?"zcard":"zrange");case"active":case"wait":case"paused":return r(i,t?"llen":"lrange")}})}sanitizeJobTypes(e){let t="string"==typeof e?[e]:e;if(Array.isArray(t)&&t.length>0){let e=[...t];return -1!==e.indexOf("waiting")&&e.push("paused"),[...new Set(e)]}return["active","completed","delayed","failed","paused","prioritized","waiting","waiting-children"]}async count(){return await this.getJobCountByTypes("waiting","paused","delayed","prioritized","waiting-children")}async getRateLimitTtl(e){return this.scripts.getRateLimitTtl(e)}async getDebounceJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getDeduplicationJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getGlobalConcurrency(){let e=await this.client,t=await e.hget(this.keys.meta,"concurrency");return t?Number(t):null}async getGlobalRateLimit(){let e=await this.client,[t,r]=await e.hmget(this.keys.meta,"max","duration");return t&&r?{max:Number(t),duration:Number(r)}:null}async getJobCountByTypes(...e){return Object.values(await this.getJobCounts(...e)).reduce((e,t)=>e+t,0)}async getJobCounts(...e){let t=this.sanitizeJobTypes(e),r=await this.scripts.getCounts(t),i={};return r.forEach((e,r)=>{i[t[r]]=e||0}),i}async recordJobCountsMetric(...e){var t;let r=await this.getJobCounts(...e),i=null==(t=this.opts.telemetry)?void 0:t.meter;if(i&&"function"==typeof i.createGauge){let e=i.createGauge(k.QueueJobsCount,{description:"Number of jobs in the queue by state",unit:"{jobs}"});for(let[t,i]of Object.entries(r))e.record(i,{[I.QueueName]:this.name,[I.QueueJobsState]:t})}return r}getJobState(e){return this.scripts.getState(e)}async getMeta(){let e=await this.client,t=await e.hgetall(this.keys.meta),{concurrency:r,max:i,duration:n,paused:a,"opts.maxLenEvents":s}=t,o=(0,em.__rest)(t,["concurrency","max","duration","paused","opts.maxLenEvents"]);return r&&(o.concurrency=Number(r)),s&&(o.maxLenEvents=Number(s)),i&&(o.max=Number(i)),n&&(o.duration=Number(n)),o.paused="1"===a,o}getCompletedCount(){return this.getJobCountByTypes("completed")}getFailedCount(){return this.getJobCountByTypes("failed")}getDelayedCount(){return this.getJobCountByTypes("delayed")}getActiveCount(){return this.getJobCountByTypes("active")}getPrioritizedCount(){return this.getJobCountByTypes("prioritized")}async getCountsPerPriority(e){let t=[...new Set(e)],r=await this.scripts.getCountsPerPriority(t),i={};return r.forEach((e,r)=>{i[`${t[r]}`]=e||0}),i}getWaitingCount(){return this.getJobCountByTypes("waiting")}getWaitingChildrenCount(){return this.getJobCountByTypes("waiting-children")}getWaiting(e=0,t=-1){return this.getJobs(["waiting"],e,t,!0)}getWaitingChildren(e=0,t=-1){return this.getJobs(["waiting-children"],e,t,!0)}getActive(e=0,t=-1){return this.getJobs(["active"],e,t,!0)}getDelayed(e=0,t=-1){return this.getJobs(["delayed"],e,t,!0)}getPrioritized(e=0,t=-1){return this.getJobs(["prioritized"],e,t,!0)}getCompleted(e=0,t=-1){return this.getJobs(["completed"],e,t,!1)}getFailed(e=0,t=-1){return this.getJobs(["failed"],e,t,!1)}async getDependencies(e,t,r,i){let n=this.toKey("processed"==t?`${e}:processed`:`${e}:dependencies`),{items:a,total:s,jobs:o}=await this.scripts.paginate(n,{start:r,end:i,fetchJobs:!0});return{items:a,jobs:o,total:s}}async getRanges(e,t=0,r=1,i=!1){let n=[];this.commandByType(e,!1,(e,t)=>{switch(t){case"lrange":n.push("lrange");break;case"zrange":n.push("zrange")}});let a=await this.scripts.getRanges(e,t,r,i),s=[];return a.forEach((e,t)=>{let r=e||[];s=i&&"lrange"===n[t]?s.concat(r.reverse()):s.concat(r)}),[...new Set(s)]}async getJobs(e,t=0,r=-1,i=!1){let n=this.sanitizeJobTypes(e);return Promise.all((await this.getRanges(n,t,r,i)).map(e=>this.Job.fromId(this,e)))}async getJobLogs(e,t=0,r=-1,i=!0){let n=(await this.client).multi(),a=this.toKey(e+":logs");i?n.lrange(a,t,r):n.lrange(a,-(r+1),-(t+1)),n.llen(a);let s=await n.exec();return i||s[0][1].reverse(),{logs:s[0][1],count:s[1][1]}}async baseGetClients(e){let t=await this.client;try{if(t.isCluster&&"function"==typeof t.nodes){let r=t.nodes(),i=[];for(let t=0;t<r.length;t++){let n=r[t],a="function"==typeof n.clientList?await n.clientList():await n.client("LIST"),s=this.parseClientList(a,e);i.push(s)}return i.reduce((e,t)=>e.length>t.length?e:t,[])}{let r=await t.clientList();return this.parseClientList(r,e)}}catch(e){if(!ed.test(e.message))throw e;return[{name:"GCP does not support client list"}]}}getWorkers(){let e=`${this.clientName()}`,t=`${this.clientName()}:w:`;return this.baseGetClients(r=>r&&(r===e||r.startsWith(t)))}async getWorkersCount(){return(await this.getWorkers()).length}async getQueueEvents(){let e=`${this.clientName()}:qe`;return this.baseGetClients(t=>t===e)}async getMetrics(e,t=0,r=-1){let[i,n,a]=await this.scripts.getMetrics(e,t,r);return{meta:{count:parseInt(i[0]||"0",10),prevTS:parseInt(i[1]||"0",10),prevCount:parseInt(i[2]||"0",10)},data:n.map(e=>+e||0),count:a}}parseClientList(e,t){let r=e.split(/\r?\n/),i=[];return r.forEach(e=>{let r={};e.split(" ").forEach(function(e){let t=e.indexOf("="),i=e.substring(0,t),n=e.substring(t+1);r[i]=n});let n=r.name;t(n)&&(r.name=this.name,r.rawname=n,i.push(r))}),i}async exportPrometheusMetrics(e){let t=await this.getJobCounts(),r=[];r.push("# HELP bullmq_job_count Number of jobs in the queue by state"),r.push("# TYPE bullmq_job_count gauge");let i=rW(this.name),n=e?Object.keys(e).reduce((t,r)=>`${t}, ${r}="${rW(e[r])}"`,""):"";for(let[e,a]of Object.entries(t))r.push(`bullmq_job_count{queue="${i}", state="${e}"${n}} ${a}`);let[a,s]=await Promise.all([this.getMetrics("completed"),this.getMetrics("failed")]);return r.push("# HELP bullmq_job_completed_total Total number of completed jobs"),r.push("# TYPE bullmq_job_completed_total counter"),r.push(`bullmq_job_completed_total{queue="${i}"${n}} ${a.meta.count}`),r.push("# HELP bullmq_job_failed_total Total number of failed jobs"),r.push("# TYPE bullmq_job_failed_total counter"),r.push(`bullmq_job_failed_total{queue="${i}"${n}} ${s.meta.count}`),r.join("\n")}}class rH extends rU{constructor(e,t,r){super(e,t,r),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||rZ,this.repeatKeyHashAlgorithm=t.settings&&t.settings.repeatKeyHashAlgorithm||"md5"}async updateRepeatableJob(e,t,r,{override:i}){var n;let a=Object.assign({},r.repeat);null!=a.pattern||(a.pattern=a.cron),delete a.cron;let s=a.count?a.count+1:1;if(void 0!==a.limit&&s>a.limit)return;let o=Date.now(),{endDate:l}=a;if(l&&o>new Date(l).getTime())return;let d=r.prevMillis||0;o=d<o?o:d;let c=await this.repeatStrategy(o,a,e),{every:u,pattern:h}=a,p=!!((u||h)&&a.immediately),y=p&&u?o-c:void 0;if(c){let o;!d&&r.jobId&&(a.jobId=r.jobId);let m=rQ(e,a),f=null!=(n=r.repeat.key)?n:this.hash(m);if(i)o=await this.scripts.addRepeatableJob(f,c,{name:e,endDate:l?new Date(l).getTime():void 0,tz:a.tz,pattern:h,every:u},m);else{let e=await this.client;o=await this.scripts.updateRepeatableJobMillis(e,f,c,m)}let{immediately:b}=a,g=(0,em.__rest)(a,["immediately"]);return this.createNextJob(e,c,o,Object.assign(Object.assign({},r),{repeat:Object.assign({offset:y},g)}),t,s,p)}}async createNextJob(e,t,r,i,n,a,s){let o=this.getRepeatJobKey(e,t,r,n),l=Date.now(),d=t+(i.repeat.offset?i.repeat.offset:0)-l,c=Object.assign(Object.assign({},i),{jobId:o,delay:d<0||s?0:d,timestamp:l,prevMillis:t,repeatJobKey:r});return c.repeat=Object.assign(Object.assign({},i.repeat),{count:a}),this.Job.create(this,e,n,c)}getRepeatJobKey(e,t,r,i){return r.split(":").length>2?this.getRepeatJobId({name:e,nextMillis:t,namespace:this.hash(r),jobId:null==i?void 0:i.id}):this.getRepeatDelayedJobId({customKey:r,nextMillis:t})}async removeRepeatable(e,t,r){var i;let n=rQ(e,Object.assign(Object.assign({},t),{jobId:r})),a=null!=(i=t.key)?i:this.hash(n),s=this.getRepeatJobId({name:e,nextMillis:"",namespace:this.hash(n),jobId:null!=r?r:t.jobId,key:t.key});return this.scripts.removeRepeatable(s,n,a)}async removeRepeatableByKey(e){let t=this.keyToData(e),r=this.getRepeatJobId({name:t.name,nextMillis:"",namespace:this.hash(e),jobId:t.id});return this.scripts.removeRepeatable(r,"",e)}async getRepeatableData(e,t,r){let i=await e.hgetall(this.toKey("repeat:"+t));return i?{key:t,name:i.name,endDate:parseInt(i.endDate)||null,tz:i.tz||null,pattern:i.pattern||null,every:i.every||null,next:r}:this.keyToData(t,r)}keyToData(e,t){let r=e.split(":"),i=r.slice(4).join(":")||null;return{key:e,name:r[0],id:r[1]||null,endDate:parseInt(r[2])||null,tz:r[3]||null,pattern:i,next:t}}async getRepeatableJobs(e=0,t=-1,r=!1){let i=await this.client,n=this.keys.repeat,a=r?await i.zrange(n,e,t,{WITHSCORES:!0}):await i.zrevrange(n,e,t,{WITHSCORES:!0}),s=[];for(let e=0;e<a.length;e+=2)s.push(this.getRepeatableData(i,a[e],parseInt(a[e+1])));return Promise.all(s)}async getRepeatableCount(){return(await this.client).zcard(this.toKey("repeat"))}hash(e){return(0,W.createHash)(this.repeatKeyHashAlgorithm).update(e).digest("hex")}getRepeatDelayedJobId({nextMillis:e,customKey:t}){return`repeat:${t}:${e}`}getRepeatJobId({name:e,nextMillis:t,namespace:r,jobId:i,key:n}){let a=null!=n?n:this.hash(`${e}${i||""}${r}`);return`repeat:${a}:${t}`}}function rQ(e,t){let r=t.endDate?new Date(t.endDate).getTime():"",i=t.tz||"",n=t.pattern||String(t.every)||"",a=t.jobId?t.jobId:"";return`${e}:${a}:${r}:${i}:${n}`}let rZ=(e,t)=>{let r=t.pattern;if(r&&t.every)throw Error("Both .pattern and .every options are defined for this repeatable job");if(t.every)return Math.floor(e/t.every)*t.every+(t.immediately?0:t.every);let i=new Date(t.startDate&&new Date(t.startDate)>new Date(e)?t.startDate:e),n=(0,rG.parseExpression)(r,Object.assign(Object.assign({},t),{currentDate:i}));try{if(t.immediately)return new Date().getTime();return n.next().getTime()}catch(e){}};class rX extends r${constructor(e,t,r){var i;super(e,Object.assign({},t),r),this.token=ey(),this.libName="bullmq",this.jobsOpts=null!=(i=null==t?void 0:t.defaultJobOptions)?i:{},this.waitUntilReady().then(e=>{if(!this.closing&&!(null==t?void 0:t.skipMetasUpdate))return e.hset(this.keys.meta,this.metaValues)}).catch(e=>{})}emit(e,...t){return super.emit(e,...t)}off(e,t){return super.off(e,t),this}on(e,t){return super.on(e,t),this}once(e,t){return super.once(e,t),this}get defaultJobOptions(){return Object.assign({},this.jobsOpts)}get metaValues(){var e,t,r,i;return{"opts.maxLenEvents":null!=(i=null==(r=null==(t=null==(e=this.opts)?void 0:e.streams)?void 0:t.events)?void 0:r.maxLen)?i:1e4,version:`${this.libName}:${tS}`}}async getVersion(){let e=await this.client;return await e.hget(this.keys.meta,"version")}get repeat(){return new Promise(async e=>{this._repeat||(this._repeat=new rH(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._repeat.on("error",this.emit.bind(this,"error"))),e(this._repeat)})}get jobScheduler(){return new Promise(async e=>{this._jobScheduler||(this._jobScheduler=new rB(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._jobScheduler.on("error",this.emit.bind(this,"error"))),e(this._jobScheduler)})}async setGlobalConcurrency(e){return(await this.client).hset(this.keys.meta,{concurrency:e})}async setGlobalRateLimit(e,t){return(await this.client).hset(this.keys.meta,{max:e,duration:t})}async removeGlobalConcurrency(){return(await this.client).hdel(this.keys.meta,"concurrency")}async removeGlobalRateLimit(){return(await this.client).hdel(this.keys.meta,"max","duration")}async add(e,t,r){return this.trace(w.PRODUCER,"add",`${this.name}.${e}`,async(i,n)=>{var a;!n||(null==(a=null==r?void 0:r.telemetry)?void 0:a.omitContext)||(r=Object.assign(Object.assign({},r),{telemetry:{metadata:n}}));let s=await this.addJob(e,t,r);return null==i||i.setAttributes({[I.JobName]:e,[I.JobId]:s.id}),s})}async addJob(e,t,r){if(r&&r.repeat){if(r.repeat.endDate&&+new Date(r.repeat.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.repeat).updateRepeatableJob(e,t,Object.assign(Object.assign({},this.jobsOpts),r),{override:!0})}{let i=null==r?void 0:r.jobId;if("0"==i||(null==i?void 0:i.startsWith("0:")))throw Error("JobId cannot be '0' or start with 0:");let n=Object.assign(Object.assign(Object.assign({},this.jobsOpts),r),{jobId:i}),a=await this.Job.create(this,e,t,n);return this.emit("waiting",a),a}}async addBulk(e){return this.trace(w.PRODUCER,"addBulk",this.name,async(t,r)=>(t&&t.setAttributes({[I.BulkNames]:e.map(e=>e.name),[I.BulkCount]:e.length}),await this.Job.createBulk(this,e.map(e=>{var t,i,n,a,s,o;let l=null==(t=e.opts)?void 0:t.telemetry;if(r){let t=null==(n=null==(i=e.opts)?void 0:i.telemetry)?void 0:n.omitContext,o=(null==(s=null==(a=e.opts)?void 0:a.telemetry)?void 0:s.metadata)||!t&&r;(o||t)&&(l={metadata:o,omitContext:t})}let d=Object.assign(Object.assign(Object.assign({},this.jobsOpts),e.opts),{jobId:null==(o=e.opts)?void 0:o.jobId,telemetry:l});return{name:e.name,data:e.data,opts:d}}))))}async upsertJobScheduler(e,t,r){var i,n;if(t.endDate&&+new Date(t.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.jobScheduler).upsertJobScheduler(e,t,null!=(i=null==r?void 0:r.name)?i:e,null!=(n=null==r?void 0:r.data)?n:{},Object.assign(Object.assign({},this.jobsOpts),null==r?void 0:r.opts),{override:!0})}async pause(){await this.trace(w.INTERNAL,"pause",this.name,async()=>{await this.scripts.pause(!0),this.emit("paused")})}async close(){await this.trace(w.INTERNAL,"close",this.name,async()=>{!this.closing&&this._repeat&&await this._repeat.close(),await super.close()})}async rateLimit(e){await this.trace(w.INTERNAL,"rateLimit",this.name,async t=>{null==t||t.setAttributes({[I.QueueRateLimit]:e}),await this.client.then(t=>t.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,{PX:e}))})}async resume(){await this.trace(w.INTERNAL,"resume",this.name,async()=>{await this.scripts.pause(!1),this.emit("resumed")})}async isPaused(){let e=await this.client;return 1===await e.hexists(this.keys.meta,"paused")}isMaxed(){return this.scripts.isMaxed()}async getRepeatableJobs(e,t,r){return(await this.repeat).getRepeatableJobs(e,t,r)}async getJobScheduler(e){return(await this.jobScheduler).getScheduler(e)}async getJobSchedulers(e,t,r){return(await this.jobScheduler).getJobSchedulers(e,t,r)}async getJobSchedulersCount(){return(await this.jobScheduler).getSchedulersCount()}async removeRepeatable(e,t,r){return this.trace(w.INTERNAL,"removeRepeatable",`${this.name}.${e}`,async i=>{null==i||i.setAttributes({[I.JobName]:e,[I.JobId]:r});let n=await this.repeat;return!await n.removeRepeatable(e,t,r)})}async removeJobScheduler(e){let t=await this.jobScheduler;return!await t.removeJobScheduler(e)}async removeDebounceKey(e){return this.trace(w.INTERNAL,"removeDebounceKey",`${this.name}`,async t=>{null==t||t.setAttributes({[I.JobKey]:e});let r=await this.client;return await r.del(`${this.keys.de}:${e}`)})}async removeDeduplicationKey(e){return this.trace(w.INTERNAL,"removeDeduplicationKey",`${this.name}`,async t=>(null==t||t.setAttributes({[I.DeduplicationKey]:e}),(await this.client).del(`${this.keys.de}:${e}`)))}async removeRateLimitKey(){return(await this.client).del(this.keys.limiter)}async removeRepeatableByKey(e){return this.trace(w.INTERNAL,"removeRepeatableByKey",`${this.name}`,async t=>{null==t||t.setAttributes({[I.JobKey]:e});let r=await this.repeat;return!await r.removeRepeatableByKey(e)})}async remove(e,{removeChildren:t=!0}={}){return this.trace(w.INTERNAL,"remove",this.name,async r=>{null==r||r.setAttributes({[I.JobId]:e,[I.JobOptions]:JSON.stringify({removeChildren:t})});let i=await this.scripts.remove(e,t);return 1===i&&this.emit("removed",e),i})}async updateJobProgress(e,t){await this.trace(w.INTERNAL,"updateJobProgress",this.name,async r=>{null==r||r.setAttributes({[I.JobId]:e,[I.JobProgress]:JSON.stringify(t)}),await this.scripts.updateProgress(e,t),this.emit("progress",e,t)})}async addJobLog(e,t,r){return tA.addJobLog(this,e,t,r)}async drain(e=!1){await this.trace(w.INTERNAL,"drain",this.name,async t=>{null==t||t.setAttributes({[I.QueueDrainDelay]:e}),await this.scripts.drain(e)})}async clean(e,t,r="completed"){return this.trace(w.INTERNAL,"clean",this.name,async i=>{let n=t||1/0,a=Math.min(1e4,n),s=Date.now()-e,o=0,l=[],d="waiting"===r?"wait":r;for(;o<n;){let e=await this.scripts.cleanJobsInSet(d,s,a);if(this.emit("cleaned",e,d),o+=e.length,l.push(...e),e.length<a)break}return null==i||i.setAttributes({[I.QueueGrace]:e,[I.JobType]:r,[I.QueueCleanLimit]:n,[I.JobIds]:l}),l})}async obliterate(e){await this.trace(w.INTERNAL,"obliterate",this.name,async()=>{await this.pause();let t=0;do t=await this.scripts.obliterate(Object.assign({force:!1,count:1e3},e));while(t)})}async retryJobs(e={}){await this.trace(w.PRODUCER,"retryJobs",this.name,async t=>{null==t||t.setAttributes({[I.QueueOptions]:JSON.stringify(e)});let r=0;do r=await this.scripts.retryJobs(e.state,e.count,e.timestamp);while(r)})}async promoteJobs(e={}){await this.trace(w.INTERNAL,"promoteJobs",this.name,async t=>{null==t||t.setAttributes({[I.QueueOptions]:JSON.stringify(e)});let r=0;do r=await this.scripts.promoteJobs(e.count);while(r)})}async trimEvents(e){return this.trace(w.INTERNAL,"trimEvents",this.name,async t=>{null==t||t.setAttributes({[I.QueueEventMaxLength]:e});let r=await this.client;return await r.xtrim(this.keys.events,"MAXLEN",e,{approximate:!0})})}async removeDeprecatedPriorityKey(){return(await this.client).del(this.toKey("priority"))}async removeOrphanedJobs(e=1e3,t=0){let r=await this.client,i=new Set(Object.keys(this.keys)),n=Object.keys(this.keys).filter(e=>""!==e),a=["logs","dependencies","processed","failed","unsuccessful","lock"],s=this.qualifiedName+":",o=s+"*",l=0,d="0";do{let[c,u]=await r.scan(d,{MATCH:o,COUNT:e});d=c;let h=new Set;for(let e of u){let t=e.slice(s.length);if(i.has(t))continue;let r=t.indexOf(":");if(-1!==r){let e=t.slice(0,r);if(i.has(e))continue}let n=-1===r?t:t.slice(0,r);if(-1!==r){let e=t.slice(r+1);if(!a.includes(e))continue}h.add(n)}if(0===h.size)continue;if(l+=await this.scripts.removeOrphanedJobs([...h],n,a)||0,t>0&&l>=t)break}while("0"!==d)return l}}var r0=e.i(22734),r1=e.i(92509);class r2{constructor(e){this.value=void 0,this.next=null,this.value=e}}class r3{constructor(){this.length=0,this.head=null,this.tail=null}push(e){let t=new r2(e);return this.length?this.tail.next=t:this.head=t,this.tail=t,this.length+=1,t}shift(){if(!this.length)return null;{let e=this.head;return this.head=this.head.next,this.length-=1,e}}}class r4{constructor(e=!1){this.ignoreErrors=e,this.queue=new r3,this.pending=new Set,this.newPromise()}add(e){this.pending.add(e),e.then(t=>{this.pending.delete(e),0===this.queue.length&&this.resolvePromise(t),this.queue.push(t)}).catch(t=>{this.ignoreErrors&&this.queue.push(void 0),this.pending.delete(e),this.rejectPromise(t)})}async waitAll(){await Promise.all(this.pending)}numTotal(){return this.pending.size+this.queue.length}numPending(){return this.pending.size}numQueued(){return this.queue.length}resolvePromise(e){this.resolve(e),this.newPromise()}rejectPromise(e){this.reject(e),this.newPromise()}newPromise(){this.nextPromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}async wait(){return this.nextPromise}async fetch(){var e;if(0!==this.pending.size||0!==this.queue.length){for(;0===this.queue.length;)try{await this.wait()}catch(e){this.ignoreErrors||console.error("Unexpected Error in AsyncFifoQueue",e)}return null==(e=this.queue.shift())?void 0:e.value}}}class r6 extends Error{constructor(e="bullmq:movedToDelayed"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}let r5="bullmq:rateLimitExceeded";class r8 extends Error{constructor(e=r5){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class r7 extends Error{constructor(e="bullmq:movedToWaitingChildren"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class r9 extends Error{constructor(e="bullmq:movedToWait"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class ie extends rU{static RateLimitError(){return new r8}constructor(e,t,r,i){if(super(e,Object.assign(Object.assign({drainDelay:5,concurrency:1,lockDuration:3e4,maximumRateLimitDelay:3e4,maxStalledCount:1,stalledInterval:3e4,autorun:!0,runRetryDelay:15e3},r),{blockingConnection:!0}),i),this.abortDelayController=null,this.blockUntil=0,this.drained=!1,this.limitUntil=0,this.processorAcceptsSignal=!1,this.stalledCheckerRunning=!1,this.waiting=null,this.running=!1,this.mainLoopRunning=null,!r||!r.connection)throw Error("Worker requires a connection");if("number"!=typeof this.opts.maxStalledCount||this.opts.maxStalledCount<0)throw Error("maxStalledCount must be greater or equal than 0");if("number"==typeof this.opts.maxStartedAttempts&&this.opts.maxStartedAttempts<0)throw Error("maxStartedAttempts must be greater or equal than 0");if("number"!=typeof this.opts.stalledInterval||this.opts.stalledInterval<=0)throw Error("stalledInterval must be greater than 0");if("number"!=typeof this.opts.drainDelay||this.opts.drainDelay<=0)throw Error("drainDelay must be greater than 0");if(this.concurrency=this.opts.concurrency,this.opts.lockRenewTime=this.opts.lockRenewTime||this.opts.lockDuration/2,this.id=ey(),this.createLockManager(),t){if("function"==typeof t)this.processFn=t,this.processorAcceptsSignal=t.length>=3;else{if(t instanceof r1.URL){if(!r0.existsSync(t))throw Error(`URL ${t} does not exist in the local file system`);t=t.href}else{const e=t+([".js",".ts",".flow",".cjs",".mjs"].includes(U.extname(t))?"":".js");if(!r0.existsSync(e))throw Error(`File ${e} does not exist`)}const e=U.dirname(module.filename||"/ROOT/lumina-factory/node_modules/bullmq/dist/esm/classes/worker.js"),r=U.join(e,"main-worker.js"),i=U.join(e,"main.js");let n=this.opts.useWorkerThreads?r:i;try{r0.statSync(n)}catch(t){const e=this.opts.useWorkerThreads?"main-worker.js":"main.js";n=U.join(process.cwd(),`dist/cjs/classes/${e}`),r0.statSync(n)}this.childPool=new B({mainFile:n,useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions}),this.createSandbox(t),this.processorAcceptsSignal=!0}this.opts.autorun&&this.run().catch(e=>this.emit("error",e))}const n=this.clientName()+(this.opts.name?`:w:${this.opts.name}`:"");this.blockingConnection=new rO(es(r.connection)?(rk(r.connection)?r.connection:rE(r.connection)).duplicate({connectionName:n}):Object.assign(Object.assign({},r.connection),{connectionName:n}),{shared:!1,blocking:!0,skipVersionCheck:r.skipVersionCheck}),this.blockingConnection.on("error",e=>this.emit("error",e)),this.blockingConnection.on("ready",()=>setTimeout(()=>this.emit("ready"),0))}createLockManager(){this.lockManager=new rz(this,{lockRenewTime:this.opts.lockRenewTime,lockDuration:this.opts.lockDuration,workerId:this.id,workerName:this.opts.name})}createSandbox(e){let t;this.processFn=(t=this.childPool,async function(r,i,n){let a,s,o,l;try{let d=new Promise((d,c)=>{(async()=>{try{o=(e,t)=>{c(Error("Unexpected exit code: "+e+" signal: "+t))},(a=await t.retain(e)).on("exit",o),s=async e=>{var t,i,n,s,o;try{switch(e.cmd){case S.Completed:d(e.value);break;case S.Failed:case S.Error:{let t=Error();Object.assign(t,e.value),c(t);break}case S.Progress:await r.updateProgress(e.value);break;case S.Log:await r.log(e.value);break;case S.MoveToDelayed:await r.moveToDelayed(null==(t=e.value)?void 0:t.timestamp,null==(i=e.value)?void 0:i.token);break;case S.MoveToWait:await r.moveToWait(null==(n=e.value)?void 0:n.token);break;case S.MoveToWaitingChildren:{let t=await r.moveToWaitingChildren(null==(s=e.value)?void 0:s.token,null==(o=e.value)?void 0:o.opts);a.send({requestId:e.requestId,cmd:v.MoveToWaitingChildrenResponse,value:t})}break;case S.Update:await r.updateData(e.value);break;case S.GetChildrenValues:{let t=await r.getChildrenValues();a.send({requestId:e.requestId,cmd:v.GetChildrenValuesResponse,value:t})}break;case S.GetIgnoredChildrenFailures:{let t=await r.getIgnoredChildrenFailures();a.send({requestId:e.requestId,cmd:v.GetIgnoredChildrenFailuresResponse,value:t})}break;case S.GetDependenciesCount:{let t=await r.getDependenciesCount(e.value);a.send({requestId:e.requestId,cmd:v.GetDependenciesCountResponse,value:t})}break;case S.GetDependencies:{let t=await r.getDependencies(e.value);a.send({requestId:e.requestId,cmd:v.GetDependenciesResponse,value:t})}}}catch(e){c(e)}},a.on("message",s),a.send({cmd:v.Start,job:r.asJSONSandbox(),token:i}),n&&(l=()=>{try{a.send({cmd:v.Cancel,value:n.reason})}catch(e){}},n.aborted?l():n.addEventListener("abort",l,{once:!0}))}catch(e){c(e)}})()});return await d,d}finally{n&&l&&n.removeEventListener("abort",l),a&&(a.off("message",s),a.off("exit",o),null===a.exitCode&&null===a.signalCode&&t.release(a))}}).bind(this)}async extendJobLocks(e,t,r){return this.scripts.extendLocks(e,t,r)}emit(e,...t){return super.emit(e,...t)}off(e,t){return super.off(e,t),this}on(e,t){return super.on(e,t),this}once(e,t){return super.once(e,t),this}callProcessJob(e,t,r){return this.processFn(e,t,r)}createJob(e,t){return this.Job.fromJSON(this,e,t)}async waitUntilReady(){return await super.waitUntilReady(),this.blockingConnection.client}cancelJob(e,t){return this.lockManager.cancelJob(e,t)}cancelAllJobs(e){this.lockManager.cancelAllJobs(e)}set concurrency(e){if("number"!=typeof e||e<1||!isFinite(e))throw Error("concurrency must be a finite number greater than 0");this._concurrency=e}get concurrency(){return this._concurrency}get repeat(){return new Promise(async e=>{if(!this._repeat){let e=await this.client;this._repeat=new rH(this.name,Object.assign(Object.assign({},this.opts),{connection:e})),this._repeat.on("error",this.emit.bind(this,"error"))}e(this._repeat)})}get jobScheduler(){return new Promise(async e=>{if(!this._jobScheduler){let e=await this.client;this._jobScheduler=new rB(this.name,Object.assign(Object.assign({},this.opts),{connection:e})),this._jobScheduler.on("error",this.emit.bind(this,"error"))}e(this._jobScheduler)})}async run(){if(!this.processFn)throw Error("No process function is defined.");if(this.running)throw Error("Worker is already running.");try{if(this.running=!0,this.closing||this.paused)return;await this.startStalledCheckTimer(),this.opts.skipLockRenewal||this.lockManager.start();let e=await this.client,t=await this.blockingConnection.client;this.mainLoopRunning=this.mainLoop(e,t),await this.mainLoopRunning}finally{this.running=!1}}async waitForRateLimit(){var e;let t=this.limitUntil;if(t>Date.now()){null==(e=this.abortDelayController)||e.abort(),this.abortDelayController=new z;let r=this.getRateLimitDelay(t-Date.now());await this.delay(r,this.abortDelayController),this.drained=!1,this.limitUntil=0}}async mainLoop(e,t){let r=new r4,i=0;for(;!this.closing&&!this.paused||r.numTotal()>0;){let n;for(;!this.closing&&!this.paused&&!this.waiting&&r.numTotal()<this._concurrency&&!this.isRateLimited();){let n=`${this.id}:${i++}`,a=this.retryIfFailed(()=>this._getNextJob(e,t,n,{block:!0}),{delayInMs:this.opts.runRetryDelay,onlyEmitError:!0});if(r.add(a),this.waiting&&r.numTotal()>1||!await a&&r.numTotal()>1||this.blockUntil)break}do n=await r.fetch();while(!n&&r.numQueued()>0)if(n){let e=n.token;r.add(this.processJob(n,e,()=>r.numTotal()<=this._concurrency))}else 0===r.numQueued()&&await this.waitForRateLimit()}}async getNextJob(e,{block:t=!0}={}){var r,i;let n=await this._getNextJob(await this.client,await this.blockingConnection.client,e,{block:t});return this.trace(w.INTERNAL,"getNextJob",this.name,async e=>(null==e||e.setAttributes({[I.WorkerId]:this.id,[I.QueueName]:this.name,[I.WorkerName]:this.opts.name,[I.WorkerOptions]:JSON.stringify({block:t}),[I.JobId]:null==n?void 0:n.id}),n),null==(i=null==(r=null==n?void 0:n.opts)?void 0:r.telemetry)?void 0:i.metadata)}async _getNextJob(e,t,r,{block:i=!0}={}){let n;if(!this.paused&&!this.closing){if(this.drained&&i&&!this.limitUntil&&!this.waiting){this.waiting=this.waitForJob(t,this.blockUntil);try{this.blockUntil=await this.waiting,(this.blockUntil<=0||this.blockUntil-Date.now()<1)&&(n=await this.moveToActive(e,r,this.opts.name))}finally{this.waiting=null}}else this.isRateLimited()||(n=await this.moveToActive(e,r,this.opts.name));return n&&this.emit("active",n,"waiting"),n}}async rateLimit(e){await this.trace(w.INTERNAL,"rateLimit",this.name,async t=>{null==t||t.setAttributes({[I.WorkerId]:this.id,[I.WorkerRateLimit]:e}),await this.client.then(t=>t.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,{PX:e}))})}get minimumBlockTimeout(){return this.blockingConnection.capabilities.canBlockFor1Ms?.001:.002}isRateLimited(){return this.limitUntil>Date.now()}async moveToActive(e,t,r){let[i,n,a,s]=await this.scripts.moveToActive(e,t,r);return this.updateDelays(a,s),this.nextJobFromJobData(i,n,t)}async waitForJob(e,t){let r;if(this.paused)return 1/0;try{if(!this.closing&&!this.isRateLimited()){let i=this.getBlockTimeout(t);if(i>0){i=this.blockingConnection.capabilities.canDoubleTimeout?i:Math.ceil(i),r=setTimeout(async()=>{e.disconnect(!this.closing)},1e3*i+1e3),this.updateDelays();let n=await e.bzpopmin(this.keys.marker,i);if(n){let[,e,r]=n;if(e){let e=parseInt(r);if(t&&e>t)return t;return e}}}return 0}}catch(e){ec(e)&&this.emit("error",e),this.closing||await this.delay()}finally{clearTimeout(r)}return 1/0}getBlockTimeout(e){let t=this.opts;if(!e)return Math.max(t.drainDelay,this.minimumBlockTimeout);{let t=e-Date.now();return t<=0?t:t<1e3*this.minimumBlockTimeout?this.minimumBlockTimeout:Math.min(t/1e3,10)}}getRateLimitDelay(e){return Math.min(e,this.opts.maximumRateLimitDelay)}async delay(e,t){await er(e||100,t)}updateDelays(e=0,t=0){let r=Math.max(e,0);r>0?this.limitUntil=Date.now()+r:this.limitUntil=0,this.blockUntil=Math.max(t,0)||0}async nextJobFromJobData(e,t,r){if(e){this.drained=!1;let i=this.createJob(e,t);i.token=r;try{await this.retryIfFailed(async()=>{let e=!!i.repeatJobKey,t=e&&i.repeatJobKey.split(":").length>=5,r=e&&!t;if(t){let e=await this.jobScheduler;r=await e.isJobScheduler(i.repeatJobKey)}if(r){let e=await this.jobScheduler;await e.upsertJobScheduler(i.repeatJobKey,i.opts.repeat,i.name,i.data,i.opts,{override:!1,producerId:i.id})}else if(i.opts.repeat){let e=await this.repeat;await e.updateRepeatableJob(i.name,i.data,i.opts,{override:!1})}},{delayInMs:this.opts.runRetryDelay})}catch(r){let e=r instanceof Error?r.message:String(r),t=Error(`Failed to add repeatable job for next iteration: ${e}`);this.emit("error",t);return}return i}this.drained||(this.emit("drained"),this.drained=!0)}async processJob(e,t,r=()=>!0){var i,n;let a=null==(n=null==(i=e.opts)?void 0:i.telemetry)?void 0:n.metadata;return this.trace(w.CONSUMER,"process",this.name,async i=>{null==i||i.setAttributes({[I.WorkerId]:this.id,[I.WorkerName]:this.opts.name,[I.JobId]:e.id,[I.JobName]:e.name});let n=this.lockManager.trackJob(e.id,t,e.processedOn,this.processorAcceptsSignal);try{let a=this.getUnrecoverableErrorMessage(e);if(a)return await this.retryIfFailed(()=>(this.lockManager.untrackJob(e.id),this.handleFailed(new tE(a),e,t,r,i)),{delayInMs:this.opts.runRetryDelay,span:i});let s=await this.callProcessJob(e,t,n?n.signal:void 0);return await this.retryIfFailed(()=>(this.lockManager.untrackJob(e.id),this.handleCompleted(s,e,t,r,i)),{delayInMs:this.opts.runRetryDelay,span:i})}catch(n){return await this.retryIfFailed(()=>(this.lockManager.untrackJob(e.id),this.handleFailed(n,e,t,r,i)),{delayInMs:this.opts.runRetryDelay,span:i,onlyEmitError:!0})}finally{this.lockManager.untrackJob(e.id);let t=Date.now();null==i||i.setAttributes({[I.JobFinishedTimestamp]:t,[I.JobAttemptFinishedTimestamp]:e.finishedOn||t,[I.JobProcessedTimestamp]:e.processedOn})}},a)}getUnrecoverableErrorMessage(e){return e.deferredFailure?e.deferredFailure:this.opts.maxStartedAttempts&&this.opts.maxStartedAttempts<e.attemptsStarted?"job started more than allowable limit":void 0}async handleCompleted(e,t,r,i=()=>!0,n){if(!this.connection.closing){let a=await t.moveToCompleted(e,r,i()&&!(this.closing||this.paused));if(this.emit("completed",t,e,"active"),null==n||n.addEvent("job completed",{[I.JobResult]:JSON.stringify(e)}),null==n||n.setAttributes({[I.JobAttemptsMade]:t.attemptsMade}),Array.isArray(a)){let[e,t,i,n]=a;return this.updateDelays(i,n),this.nextJobFromJobData(e,t,r)}}}async handleFailed(e,t,r,i=()=>!0,n){if(!this.connection.closing){if(e.message===r5){let e=await this.moveLimitedBackToWait(t,r);this.limitUntil=e>0?Date.now()+e:0;return}let a=i()&&!(this.closing||this.paused);if(e instanceof r6||"DelayedError"==e.name||e instanceof r9||"WaitingError"==e.name||e instanceof r7||"WaitingChildrenError"==e.name){if(!a)return;let e=await this.client;return this.moveToActive(e,r,this.opts.name)}let s=await t.moveToFailed(e,r,a);if(this.emit("failed",t,e,"active"),null==n||n.addEvent("job failed",{[I.JobFailedReason]:e.message}),null==n||n.setAttributes({[I.JobAttemptsMade]:t.attemptsMade}),Array.isArray(s)){let[e,t,i,n]=s;return this.updateDelays(i,n),this.nextJobFromJobData(e,t,r)}}}async pause(e){await this.trace(w.INTERNAL,"pause",this.name,async t=>{var r;null==t||t.setAttributes({[I.WorkerId]:this.id,[I.WorkerName]:this.opts.name,[I.WorkerDoNotWaitActive]:e}),this.paused||(this.paused=!0,e||await this.whenCurrentJobsFinished(),null==(r=this.stalledCheckStopper)||r.call(this),this.emit("paused"))})}resume(){(!this.running||this.paused)&&this.trace(w.INTERNAL,"resume",this.name,e=>{null==e||e.setAttributes({[I.WorkerId]:this.id,[I.WorkerName]:this.opts.name}),this.paused=!1,this.running?this.startStalledCheckTimer().catch(e=>{this.emit("error",e)}):this.processFn&&this.run(),this.emit("resumed")}).catch(e=>{this.emit("error",e)})}isPaused(){return!!this.paused}isRunning(){return this.running}async close(e=!1){return this.closing?this.closing:(this.closing=(async()=>{await this.trace(w.INTERNAL,"close",this.name,async t=>{var r,i;for(let i of(null==t||t.setAttributes({[I.WorkerId]:this.id,[I.WorkerName]:this.opts.name,[I.WorkerForceClose]:e}),this.emit("closing","closing queue"),null==(r=this.abortDelayController)||r.abort(),[()=>e||this.whenCurrentJobsFinished(!1),()=>this.lockManager.close(),()=>{var e;return null==(e=this.childPool)?void 0:e.clean()},()=>this.blockingConnection.close(e),()=>this.connection.close(e)]))try{await i()}catch(e){this.emit("error",e)}null==(i=this.stalledCheckStopper)||i.call(this),this.closed=!0,this.emit("closed")})})(),await this.closing)}async startStalledCheckTimer(){this.opts.skipStalledCheck||this.closing||this.stalledCheckerRunning||await this.trace(w.INTERNAL,"startStalledCheckTimer",this.name,async e=>{null==e||e.setAttributes({[I.WorkerId]:this.id,[I.WorkerName]:this.opts.name}),this.stalledCheckerRunning=!0,this.stalledChecker().catch(e=>{this.emit("error",e)}).finally(()=>{this.stalledCheckerRunning=!1})})}async stalledChecker(){for(;!(this.closing||this.paused);)await this.checkConnectionError(()=>this.moveStalledJobsToWait()),await new Promise(e=>{let t=setTimeout(e,this.opts.stalledInterval);this.stalledCheckStopper=()=>{clearTimeout(t),e()}})}async whenCurrentJobsFinished(e=!0){this.mainLoopRunning?(await this.blockingConnection.disconnect(!0),await this.mainLoopRunning):e=!1,e&&await this.blockingConnection.reconnect()}async retryIfFailed(e,t){var r;let i=0,n=t.maxRetries||1/0;do try{return await e()}catch(e){if(null==(r=t.span)||r.recordException(e.message),ec(e)){if(this.paused||this.closing||this.emit("error",e),t.onlyEmitError)return;throw e}if(!t.delayInMs||this.closing||this.closed||await this.delay(t.delayInMs,this.abortDelayController),i+1>=n)throw e}while(++i<n)}async moveStalledJobsToWait(){await this.trace(w.INTERNAL,"moveStalledJobsToWait",this.name,async e=>{let t=await this.scripts.moveStalledJobsToWait();null==e||e.setAttributes({[I.WorkerId]:this.id,[I.WorkerName]:this.opts.name,[I.WorkerStalledJobs]:t}),t.forEach(t=>{null==e||e.addEvent("job stalled",{[I.JobId]:t}),this.emit("stalled",t,"active")})})}moveLimitedBackToWait(e,t){return e.moveToWait(t)}}(g=P||(P={})).blocking="blocking",g.normal="normal";var it=e.i(52031),ir=e.i(7039),ii=e.i(51699),ia=e.i(96710);function is(){let e=process.env.FAL_KEY;if(!e)throw Error("FAL_KEY environment variable is not set");ia.fal.config({credentials:e})}async function io(e){let t=[];(!e.prompt||e.prompt.trim().length<3)&&t.push("Prompt must be at least 3 characters"),(!Array.isArray(e.image_urls)||e.image_urls.length<2)&&t.push("At least 2 image URLs are required (decor + product)"),(e.num_images<1||e.num_images>4)&&t.push("num_images must be between 1 and 4");let r=await (0,ir.getConfigArray)("supported_resolutions",["0.5K","1K","2K","4K"]);e.resolution&&!r.includes(e.resolution)&&t.push(`Unsupported resolution: ${e.resolution}`);let i=await (0,ir.getConfigArray)("supported_aspect_ratios",["16:9","4:3","1:1","4:5","9:16","4:1","1:4","8:1","1:8"]);return e.aspect_ratio&&!i.includes(e.aspect_ratio)&&t.push(`Unsupported aspect ratio: ${e.aspect_ratio}`),{valid:0===t.length,errors:t}}async function il(e){let t={prompt:e.prompt,image_urls:[e.decorImageUrl,e.productImageUrl],num_images:Math.min(4,Math.max(1,e.numImages))};return e.resolution&&(t.resolution=e.resolution),e.aspectRatio&&(t.aspect_ratio=e.aspectRatio),"number"==typeof e.seed&&(t.seed=e.seed),"high"===e.thinkingLevel&&(t.thinking_level="high"),t.limit_generations=!0,t}async function id(e){is();let t=await (0,ir.getConfigString)("fal_api_endpoint","https://queue.fal.run/fal-ai/nano-banana-2/edit"),r=await (0,ir.getConfigString)("fal_api_model","fal-ai/nano-banana-2/edit"),i=t.includes("queue.fal.run")?t:`https://queue.fal.run/${r}`;return await ia.fal.queue.submit(i,{input:e})}async function ic(e){is();let t=await (0,ir.getConfigString)("fal_api_endpoint","https://queue.fal.run/fal-ai/nano-banana-2/edit"),r=await (0,ir.getConfigString)("fal_api_model","fal-ai/nano-banana-2/edit"),i=t.includes("queue.fal.run")?t:`https://queue.fal.run/${r}`;return ia.fal.queue.status(i,{requestId:e})}async function iu(e){is();let t=await (0,ir.getConfigString)("fal_api_endpoint","https://queue.fal.run/fal-ai/nano-banana-2/edit"),r=await (0,ir.getConfigString)("fal_api_model","fal-ai/nano-banana-2/edit"),i=t.includes("queue.fal.run")?t:`https://queue.fal.run/${r}`;return ia.fal.queue.result(i,{requestId:e})}let ih={url:process.env.REDIS_URL||"redis://localhost:6379",maxRetriesPerRequest:null},ip=null;function iy(){return ip||(ip=new rX("lumina-generation",{connection:ih,defaultJobOptions:{attempts:3,backoff:{type:"exponential",delay:5e3},removeOnComplete:{count:100},removeOnFail:{count:500}}})),ip}async function im(e,t){let r=(0,it.createAdminClient)(),{data:i}=await r.from("production_batches").select("*").eq("id",e).single();if(!i)throw Error("Batch not found");let{data:n}=await r.from("dna_profiles").select("*").eq("id",i.dna_profile_id).single(),{data:a}=await r.from("image_nodes").select("*").eq("batch_id",e).eq("status","pending");if(!a||0===a.length)return;let s=await (0,ir.getConfigNumber)("max_concurrent_jobs",4),o=a.map((e,r)=>({name:`generate-${e.id}`,data:{nodeId:e.id,batchId:i.id,userId:t,dnaProfileId:i.dna_profile_id,productImageUrl:e.original_image_url,seed:e.seed_used??Math.floor(1e6*Math.random()),index:r,cost:e.cost}}));await iy().addBulk(o),await r.from("production_batches").update({status:"processing",updated_at:new Date().toISOString()}).eq("id",e),ib||function(e=4){ib||(ib=new ie("lumina-generation",async e=>ig(e),{connection:ih,concurrency:e,limiter:{max:10,duration:6e4}})).on("failed",(e,t)=>{console.error(`Job ${e?.id} failed:`,t)})}(s)}new Proxy({},{get:(e,t)=>iy()[t]});let ib=null;async function ig(e){var t;let r,i,n,a,{nodeId:s,batchId:o,userId:l,dnaProfileId:d,productImageUrl:c,seed:u,cost:h}=e.data,p=(0,it.createAdminClient)(),{data:y}=await p.from("dna_profiles").select("*").eq("id",d).single();if(!y)return void await iK(p,s,o,l,h,"DNA profile not found");let m=await il({prompt:(t=y,r=t.base_prompt?.trim()||"",i=t.product_position,n=Math.round(100*t.product_scale),a=`Product placed ${i} of frame, approximately ${n}% of frame height. Match the lighting, shadows, reflections, and mood of the reference studio exactly. Photorealistic product photography, seamless integration.`,r?`${r}. ${a}`:a),decorImageUrl:y.decor_image_url,productImageUrl:c,numImages:1,resolution:y.resolution,aspectRatio:y.aspect_ratio,seed:u,thinkingLevel:"low"}),f=await io(m);if(!f.valid)return void await iK(p,s,o,l,h,f.errors.join("; "));await p.from("image_nodes").update({status:"processing",updated_at:new Date().toISOString()}).eq("id",s);try{let e=(await id(m)).request_id,t=await iv(e,12e4);if(!t||!t.images||0===t.images.length)throw Error("No images returned from fal.ai");let r=t.images[0].url;await p.from("image_nodes").update({generated_image_url:r,status:"success",seed_used:u,updated_at:new Date().toISOString()}).eq("id",s),await iS(p,o)}catch(t){let e=t instanceof Error?t.message:String(t);await iK(p,s,o,l,h,e)}}async function iv(e,t){let r=Date.now();for(;Date.now()-r<t;){let t=await ic(e);if("COMPLETED"===t.status)return iu(e);if("FAILED"===t.status)throw Error("fal.ai job failed");await new Promise(e=>setTimeout(e,3e3))}throw Error("fal.ai job polling timeout")}async function iK(e,t,r,i,n,a){await e.from("image_nodes").update({status:"failed",error_reason:a,updated_at:new Date().toISOString()}).eq("id",t),n>0&&await (0,ii.refundCredits)(i,n,{batchId:r,nodeId:t,description:`Refund for failed node: ${a}`}),await iS(e,r)}async function iS(e,t){let{data:r}=await e.from("image_nodes").select("status").eq("batch_id",t);if(!r)return;let i=r.length,n=r.filter(e=>"success"===e.status).length,a=r.filter(e=>"failed"===e.status).length,s=r.filter(e=>"processing"===e.status).length;await e.from("production_batches").update({total_images:i,successful_images:n,failed_images:a,status:s>0?"processing":0===a?"completed":"partial_error",updated_at:new Date().toISOString()}).eq("id",t)}e.s(["enqueueBatch",0,im],79914)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__18sost9._.js.map