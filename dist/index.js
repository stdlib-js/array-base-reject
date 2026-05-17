"use strict";var v=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var i=v(function(g,u){
var l=require('@stdlib/array-base-arraylike2object/dist');function f(r,a,o){var t,c,e;for(t=[],e=0;e<r.length;e++)c=r[e],a.call(o,c,e,r)||t.push(c);return t}function h(r,a,o){var t,c,e,s,n;for(t=r.data,c=r.accessors[0],e=[],n=0;n<t.length;n++)s=c(t,n),a.call(o,s,n,t)||e.push(s);return e}function j(r,a,o){var t=l(r);return t.accessorProtocol?h(t,a,o):f(r,a,o)}u.exports=j
});var p=i();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
