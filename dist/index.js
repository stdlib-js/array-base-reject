"use strict";var v=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var i=v(function(g,u){
var l=require('@stdlib/array-base-arraylike2object/dist');function f(a,r,o){var t,c,e;for(t=[],e=0;e<a.length;e++)c=a[e],r.call(o,c,e,a)||t.push(c);return t}function h(a,r,o){var t,c,e,s,n;for(t=a.data,c=a.accessors[0],e=[],n=0;n<t.length;n++)s=c(t,n),r.call(o,s,n,t)||e.push(s);return e}function j(a,r,o){var t=l(a);return t.accessorProtocol?h(t,r,o):f(a,r,o)}u.exports=j
});var p=i();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
