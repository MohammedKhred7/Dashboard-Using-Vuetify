class g{constructor(i){let{x:n,y:s,width:e,height:t}=i;this.x=n,this.y=s,this.width=e,this.height=t}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function w(r,i){return{x:{before:Math.max(0,i.left-r.left),after:Math.max(0,r.right-i.right)},y:{before:Math.max(0,i.top-r.top),after:Math.max(0,r.bottom-i.bottom)}}}function x(r){return Array.isArray(r)?new g({x:r[0],y:r[1],width:0,height:0}):r.getBoundingClientRect()}function R(r){const i=r.getBoundingClientRect(),n=getComputedStyle(r),s=n.transform;if(s){let e,t,o,f,u;if(s.startsWith("matrix3d("))e=s.slice(9,-1).split(/, /),t=+e[0],o=+e[5],f=+e[12],u=+e[13];else if(s.startsWith("matrix("))e=s.slice(7,-1).split(/, /),t=+e[0],o=+e[3],f=+e[4],u=+e[5];else return new g(i);const a=n.transformOrigin,c=i.x-f-(1-t)*parseFloat(a),l=i.y-u-(1-o)*parseFloat(a.slice(a.indexOf(" ")+1)),h=t?i.width/t:r.offsetWidth+1,d=o?i.height/o:r.offsetHeight+1;return new g({x:c,y:l,width:h,height:d})}else return new g(i)}function b(r,i,n){if(typeof r.animate>"u")return{finished:Promise.resolve()};let s;try{s=r.animate(i,n)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(e=>{s.onfinish=()=>{e(s)}})),s}const W="cubic-bezier(0.4, 0, 0.2, 1)",y="cubic-bezier(0.0, 0, 0.2, 1)",O="cubic-bezier(0.4, 0, 1, 1)",p=Symbol("Forwarded refs");function m(r,i){let n=r;for(;n;){const s=Reflect.getOwnPropertyDescriptor(n,i);if(s)return s;n=Object.getPrototypeOf(n)}}function P(r){for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return r[p]=n,new Proxy(r,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,t)){const f=Reflect.get(o.value,t);return typeof f=="function"?f.bind(o.value):f}}},has(e,t){if(Reflect.has(e,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,t))return!0;return!1},set(e,t,o){if(Reflect.has(e,t))return Reflect.set(e,t,o);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const f of n)if(f.value&&Reflect.has(f.value,t))return Reflect.set(f.value,t,o);return!1},getOwnPropertyDescriptor(e,t){var f,u;const o=Reflect.getOwnPropertyDescriptor(e,t);if(o)return o;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const a of n){if(!a.value)continue;const c=(u=m(a.value,t))!=null?u:"_"in a.value?m((f=a.value._)==null?void 0:f.setupState,t):void 0;if(c)return c}for(const a of n){const c=a.value&&a.value[p];if(!c)continue;const l=c.slice();for(;l.length;){const h=l.shift(),d=m(h.value,t);if(d)return d;const v=h.value&&h.value[p];v&&l.push(...v)}}}}})}export{g as B,b as a,O as b,w as c,y as d,P as f,x as g,R as n,W as s};
