// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).reject=e()}(this,(function(){"use strict";var r="function";var e={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function t(r){var t=e[r];return"function"==typeof t?t:e.default}var n={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function i(r){var e=n[r];return"function"==typeof e?e:n.default}var o={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function a(r){var e=o[r];return"function"==typeof e?e:o.default}var u={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function f(r){var e=u[r];return"function"==typeof e?e:u.default}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function h(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var p=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=h(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=h(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(r){return"string"==typeof r}var b=Math.abs,v=String.prototype.toLowerCase,d=String.prototype.toUpperCase,E=String.prototype.replace,A=/e\+(\d)$/,T=/e-(\d)$/,_=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,V=/\.0*e/,k=/(\..*[^0])0*e/;function I(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,k,"$1e"),t=E.call(t,V,"e"),t=E.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,A,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,_,"$1."),t=E.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):v.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var R=String.fromCharCode,B=isNaN,C=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,i,o,a,u,f,l;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(w(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=I(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function Y(r){var e,t,n;if(!U(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var W,$=Object.prototype,G=$.toString,Z=$.__defineGetter__,X=$.__defineSetter__,J=$.__lookupGetter__,z=$.__lookupSetter__;W=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(r,e,t.get),a&&X&&X.call(r,e,t.set),r};var q=W;function D(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=K()?function(r){var e,t,n,i,o;if(null==r)return Q.call(r);t=r[tr],o=tr,e=null!=(i=r)&&rr.call(i,o);try{r[tr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return Q.call(r)};var ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function or(r){return null!==r&&"object"==typeof r}function ar(r){return or(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ur(){return/^\s*function\s*([^(]*)/i}D(or,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(or));var fr=/^\s*function\s*([^(]*)/i;function lr(r){var e,t,n;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return ar(r)?"Buffer":t}D(ur,"REGEXP",fr);var cr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},sr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var hr="function"==typeof Float64Array?Float64Array:void 0;var pr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")},gr="function"==typeof Float32Array;var mr=Number.POSITIVE_INFINITY,wr="function"==typeof Float32Array?Float32Array:null;var br="function"==typeof Float32Array?Float32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,5e40]),t=e,r=(gr&&t instanceof Float32Array||"[object Float32Array]"===nr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===mr}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Uint32Array;var Er="function"==typeof Uint32Array?Uint32Array:null;var Ar="function"==typeof Uint32Array?Uint32Array:void 0;var Tr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},_r="function"==typeof Int32Array;var xr="function"==typeof Int32Array?Int32Array:null;var jr="function"==typeof Int32Array?Int32Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,2147483648]),t=e,r=(_r&&t instanceof Int32Array||"[object Int32Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")},kr="function"==typeof Uint16Array;var Ir="function"==typeof Uint16Array?Uint16Array:null;var Lr="function"==typeof Uint16Array?Uint16Array:void 0;var Sr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,65536,65537]),t=e,r=(kr&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Rr="function"==typeof Int16Array;var Br="function"==typeof Int16Array?Int16Array:null;var Cr="function"==typeof Int16Array?Int16Array:void 0;var Or=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([1,3.14,-3.14,32768]),t=e,r=(Rr&&t instanceof Int16Array||"[object Int16Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Fr="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Pr="function"==typeof Uint8Array?Uint8Array:void 0;var Nr=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,256,257]),t=e,r=(Fr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Ur="function"==typeof Uint8ClampedArray;var Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var $r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Ur&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===nr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Gr="function"==typeof Int8Array;var Zr="function"==typeof Int8Array?Int8Array:null;var Xr="function"==typeof Int8Array?Int8Array:void 0;var Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,128]),t=e,r=(Gr&&t instanceof Int8Array||"[object Int8Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};function zr(r){return"number"==typeof r}var qr=Number,Dr=qr.prototype.toString;var Hr=K();function Kr(r){return"object"==typeof r&&(r instanceof qr||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function Qr(r){return zr(r)||Kr(r)}D(Qr,"isPrimitive",zr),D(Qr,"isObject",Kr);var re=Number.POSITIVE_INFINITY,ee=qr.NEGATIVE_INFINITY,te=Math.floor;function ne(r){return r<re&&r>ee&&te(e=r)===e;var e}function ie(r){return zr(r)&&ne(r)}function oe(r){return Kr(r)&&ne(r.valueOf())}function ae(r){return ie(r)||oe(r)}function ue(r){return ie(r)&&r>=0}function fe(r){return oe(r)&&r.valueOf()>=0}function le(r){return ue(r)||fe(r)}D(ae,"isPrimitive",ie),D(ae,"isObject",oe),D(le,"isPrimitive",ue),D(le,"isObject",fe);var ce=Math.floor;function se(r){return ce(r)===r}function ye(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&se(r.length)&&r.length>=0&&r.length<=4294967295}var he=Math.floor;function pe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(e=r.length,he(e)===e)&&r.length>=0&&r.length<=9007199254740991;var e}var ge="function"==typeof ArrayBuffer;function me(r){return ge&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===nr(r)}function we(r){return"object"==typeof r&&null!==r&&!ir(r)}var be=/./;function ve(r){return"boolean"==typeof r}var de=Boolean,Ee=Boolean.prototype.toString;var Ae=K();function Te(r){return"object"==typeof r&&(r instanceof de||(Ae?function(r){try{return Ee.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function _e(r){return ve(r)||Te(r)}function xe(){return new Function("return this;")()}D(_e,"isPrimitive",ve),D(_e,"isObject",Te);var je="object"==typeof self?self:null,Ve="object"==typeof window?window:null,ke="object"==typeof global?global:null,Ie="object"==typeof globalThis?globalThis:null;var Le=function(r){if(arguments.length){if(!ve(r))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xe()}if(Ie)return Ie;if(je)return je;if(Ve)return Ve;if(ke)return ke;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=Le.document&&Le.document.childNodes,Re=Int8Array;var Be="function"==typeof be||"object"==typeof Re||"function"==typeof Se?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?lr(r).toLowerCase():e};function Ce(r){return"function"===Be(r)}function Oe(r,e){if(!(this instanceof Oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}D(Oe,"BYTES_PER_ELEMENT",8),D(Oe.prototype,"BYTES_PER_ELEMENT",8),D(Oe.prototype,"byteLength",16),D(Oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Oe.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Fe="function"==typeof Math.fround?Math.fround:null,Me=new vr(1);var Pe="function"==typeof Fe?Fe:function(r){return Me[0]=r,Me[0]};function Ne(r,e){if(!(this instanceof Ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Pe(r)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Pe(e)}),this}function Ue(r){return r instanceof Oe||r instanceof Ne||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Ye(r){return se(r/2)}D(Ne,"BYTES_PER_ELEMENT",4),D(Ne.prototype,"BYTES_PER_ELEMENT",4),D(Ne.prototype,"byteLength",8),D(Ne.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Ne.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var We=Object.prototype.hasOwnProperty;function $e(){return"function"==typeof er&&"symbol"==typeof er("foo")&&(e="iterator",null!=(r=er)&&We.call(r,e))&&"symbol"==typeof er.iterator;var r,e}var Ge=$e()?Symbol.iterator:null;function Ze(r,e,t){q(r,e,{configurable:!1,enumerable:!1,get:t})}function Xe(r){return r.re}function Je(r){return r.im}function ze(r,e){return new vr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function qe(r,e){return new pr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function De(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ye(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ue(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Xe(n),Je(n))}return e}function He(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ye(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ue(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Xe(o),Je(o))}return n}function Ke(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ue(n=e[i]))return null;r[o]=Xe(n),r[o+1]=Je(n),o+=2}return r}var Qe=2*vr.BYTES_PER_ELEMENT,rt=$e();function et(r){return r instanceof ot||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function tt(r){return r===ot||"Complex128Array"===r.name}function nt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Qe}function it(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Qe}function ot(){var r,e,t,n;if(e=arguments.length,!(this instanceof ot))return 0===e?new ot:1===e?new ot(arguments[0]):2===e?new ot(arguments[0],arguments[1]):new ot(arguments[0],arguments[1],arguments[2]);if(0===e)t=new vr(0);else if(1===e)if(ue(arguments[0]))t=new vr(2*arguments[0]);else if(pe(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Ue(t[0])){if(null===(t=Ke(new vr(2*n),t))){if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(arguments[0])}}else{if(nt(t))t=ze(t,0);else if(it(t))t=qe(t,0);else if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(t)}else if(me(arguments[0])){if(!se((t=arguments[0]).byteLength/Qe))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Qe,t.byteLength));t=new vr(t)}else{if(!we(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===rt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ce(t[Ge]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ce((t=t[Ge]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=De(t))instanceof Error)throw t;t=new vr(t)}else{if(!me(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!se(r/Qe))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Qe,r));if(2===e){if(!se((n=t.byteLength-r)/Qe))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Qe,n));t=new vr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Qe>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Qe));t=new vr(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}function at(r){return r.re}function ut(r){return r.im}function ft(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ye(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ue(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(at(n),ut(n))}return e}function lt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ye(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ue(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(at(o),ut(o))}return n}function ct(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ue(n=e[i]))return null;r[o]=at(n),r[o+1]=ut(n),o+=2}return r}D(ot,"BYTES_PER_ELEMENT",Qe),D(ot,"name","Complex64Array"),D(ot,"from",(function(r){var e,n,i,o,u,f,l,c,s,y,h,p;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ce(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(et(r)){if(c=r.length,i){for(u=(o=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ue(y=i.call(e,r.get(h),h)))u[p]=Xe(y),u[p+1]=Je(y);else{if(!(ye(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return o}return new this(r)}if(pe(r)){if(i){for(c=r.length,l=r.get&&r.set?a("default"):t("default"),h=0;h<c;h++)if(!Ue(l(r,h))){s=!0;break}if(s){if(!Ye(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(o=new this(c/2))._buffer,h=0;h<c;h++)u[h]=i.call(e,l(r,h),h);return o}for(u=(o=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ue(y=i.call(e,l(r,h),h)))u[p]=Xe(y),u[p+1]=Je(y);else{if(!(ye(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return o}return new this(r)}if(we(r)&&rt&&Ce(r[Ge])){if(!Ce((u=r[Ge]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?He(u,i,e):De(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(ot,"of",(function(){var r,e;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(ot.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(ot.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(ot.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(ot.prototype,"BYTES_PER_ELEMENT",ot.BYTES_PER_ELEMENT),D(ot.prototype,"copyWithin",(function(r,e){if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(ot.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ne(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ge&&D(t,Ge,(function(){return e.entries()})),t})),D(ot.prototype,"get",(function(r){var e;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ne((e=this._buffer)[r*=2],e[r+1])})),Ze(ot.prototype,"length",(function(){return this._length})),D(ot.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ue(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Xe(r),void(n[t+1]=Je(r))}if(et(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Qe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!pe(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ue(r[f])){o=!0;break}if(o){if(!Ye(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Qe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Xe(u),n[t+1]=Je(u),t+=2}}));var st=2*pr.BYTES_PER_ELEMENT,yt=$e();function ht(r){return r instanceof wt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function pt(r){return r===wt||"Complex64Array"===r.name}function gt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===st/2}function mt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===st}function wt(){var r,e,t,n;if(e=arguments.length,!(this instanceof wt))return 0===e?new wt:1===e?new wt(arguments[0]):2===e?new wt(arguments[0],arguments[1]):new wt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new pr(0);else if(1===e)if(ue(arguments[0]))t=new pr(2*arguments[0]);else if(pe(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Ue(t[0])){if(null===(t=ct(new pr(2*n),t))){if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new pr(arguments[0])}}else{if(gt(t))t=ze(t,0);else if(mt(t))t=qe(t,0);else if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new pr(t)}else if(me(arguments[0])){if(!se((t=arguments[0]).byteLength/st))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",st,t.byteLength));t=new pr(t)}else{if(!we(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===yt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ce(t[Ge]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ce((t=t[Ge]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ft(t))instanceof Error)throw t;t=new pr(t)}else{if(!me(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!se(r/st))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",st,r));if(2===e){if(!se((n=t.byteLength-r)/st))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",st,n));t=new pr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*st>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*st));t=new pr(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}D(wt,"BYTES_PER_ELEMENT",st),D(wt,"name","Complex128Array"),D(wt,"from",(function(r){var e,n,i,o,u,f,l,c,s,y,h,p;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ce(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(ht(r)){if(c=r.length,i){for(u=(o=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ue(y=i.call(e,r.get(h),h)))u[p]=at(y),u[p+1]=ut(y);else{if(!(ye(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return o}return new this(r)}if(pe(r)){if(i){for(c=r.length,l=r.get&&r.set?a("default"):t("default"),h=0;h<c;h++)if(!Ue(l(r,h))){s=!0;break}if(s){if(!Ye(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(o=new this(c/2))._buffer,h=0;h<c;h++)u[h]=i.call(e,l(r,h),h);return o}for(u=(o=new this(c))._buffer,p=0,h=0;h<c;h++){if(Ue(y=i.call(e,l(r,h),h)))u[p]=at(y),u[p+1]=ut(y);else{if(!(ye(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return o}return new this(r)}if(we(r)&&yt&&Ce(r[Ge])){if(!Ce((u=r[Ge]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?lt(u,i,e):ft(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(wt,"of",(function(){var r,e;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(wt.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(wt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(wt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(wt.prototype,"BYTES_PER_ELEMENT",wt.BYTES_PER_ELEMENT),D(wt.prototype,"copyWithin",(function(r,e){if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(wt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Oe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ge&&D(t,Ge,(function(){return e.entries()})),t})),D(wt.prototype,"get",(function(r){var e;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Oe((e=this._buffer)[r*=2],e[r+1])})),Ze(wt.prototype,"length",(function(){return this._length})),D(wt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ue(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=at(r),void(n[t+1]=ut(r))}if(ht(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new pr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!pe(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ue(r[f])){o=!0;break}if(o){if(!Ye(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new pr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=at(u),n[t+1]=ut(u),t+=2}}));var bt=[pr,vr,Vr,Tr,Or,Sr,Jr,Nr,$r,ot,wt],vt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],dt=vt.length;function Et(e){var n,o=function(r){var e;if(ir(r))return"generic";if(ar(r))return null;for(e=0;e<dt;e++)if(r instanceof bt[e])return vt[e];return cr[lr(r)]||null}(e);return typeof(n=e).get===r&&typeof n.set===r?{accessorProtocol:!0,accessors:[a(o),f(o)]}:{accessorProtocol:!1,accessors:[t(o),i(o)]}}return function(r,e,t){var n=function(r){var e=Et(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}(r);return n.accessorProtocol?function(r,e,t){var n,i,o,a,u;for(n=r.data,i=r.accessors[0],o=[],u=0;u<n.length;u++)a=i(n,u),e.call(t,a,u,n)||o.push(a);return o}(n,e,t):function(r,e,t){var n,i,o;for(n=[],o=0;o<r.length;o++)i=r[o],e.call(t,i,o,r)||n.push(i);return n}(r,e,t)}}));
//# sourceMappingURL=index.js.map
