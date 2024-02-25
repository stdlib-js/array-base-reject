// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";function t(t,a,e){var s=r(t);return s.accessorProtocol?function(r,t,a){var e,s,n,o,c;for(e=r.data,s=r.accessors[0],n=[],c=0;c<e.length;c++)o=s(e,c),t.call(a,o,c,e)||n.push(o);return n}(s,a,e):function(r,t,a){var e,s,n;for(e=[],n=0;n<r.length;n++)s=r[n],t.call(a,s,n,r)||e.push(s);return e}(t,a,e)}export{t as default};
//# sourceMappingURL=index.mjs.map
