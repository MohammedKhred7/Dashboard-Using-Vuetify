import{az as H,l as C,m as V,P as G,R as j,h as _,T as z,a8 as O,aA as D,x as S,n as f,v as x,y as R,J as F,u as W,C as k,D as J,a as m,I as Q,Q as U,H as q,G as X,A as K}from"./index.b5c87158.js";import{u as Z,V as Y,m as N,a as p}from"./VBtn.cd2b6533.js";import{M as ee}from"./loader.cf216934.js";const te=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:a}=e,u=.5,s=16;e.offsetX=t-n,e.offsetY=a-o,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<o-s&&e.up(e),e.down&&a>o+s&&e.down(e))};function ne(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function oe(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),te(n)}function se(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function ae(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>ne(t,n),touchend:t=>oe(t,n),touchmove:t=>se(t,n)}}function ie(e,n){var d,v,l;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,a=(d=t==null?void 0:t.options)!=null?d:{passive:!0},u=(v=n.instance)==null?void 0:v.$.uid;if(!o||!u)return;const s=ae(n.value);o._touchHandlers=(l=o._touchHandlers)!=null?l:Object.create(null),o._touchHandlers[u]=s,H(s).forEach(g=>{o.addEventListener(g,s[g],a)})}function ue(e,n){var u,s;const t=(u=n.value)!=null&&u.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const a=t._touchHandlers[o];H(a).forEach(d=>{t.removeEventListener(d,a[d])}),delete t._touchHandlers[o]}const P={mounted:ie,unmounted:ue},$=Symbol.for("vuetify:v-window"),L=Symbol.for("vuetify:v-window-group"),le=C({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...V(),...G(),...j()},"VWindow"),me=_()({name:"VWindow",directives:{Touch:P},props:le(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=z(e),{isRtl:a}=O(),{t:u}=D(),s=Z(e,L),d=S(),v=f(()=>a.value?!e.reverse:e.reverse),l=x(!1),g=f(()=>{const i=e.direction==="vertical"?"y":"x",h=(v.value?!l.value:l.value)?"-reverse":"";return`v-window-${i}${h}-transition`}),B=x(0),T=S(void 0),y=f(()=>s.items.value.findIndex(i=>s.selected.value.includes(i.id)));R(y,(i,r)=>{const h=s.items.value.length,E=h-1;h<=2?l.value=i<r:i===E&&r===0?l.value=!0:i===0&&r===E?l.value=!1:l.value=i<r}),F($,{transition:g,isReversed:l,transitionCount:B,transitionHeight:T,rootRef:d});const c=f(()=>e.continuous||y.value!==0),I=f(()=>e.continuous||y.value!==s.items.value.length-1);function b(){c.value&&s.prev()}function w(){I.value&&s.next()}const A=f(()=>{const i=[],r={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${v.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};i.push(c.value?t.prev?t.prev({props:r}):m(Y,r,null):m("div",null,null));const h={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${v.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return i.push(I.value?t.next?t.next({props:h}):m(Y,h,null):m("div",null,null)),i}),M=f(()=>e.touch===!1?e.touch:{...{left:()=>{v.value?b():w()},right:()=>{v.value?w():b()},start:r=>{let{originalEvent:h}=r;h.stopPropagation()}},...e.touch===!0?{}:e.touch});return W(()=>k(m(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var i,r;return[m("div",{class:"v-window__container",style:{height:T.value}},[(i=t.default)==null?void 0:i.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[A.value])]),(r=t.additional)==null?void 0:r.call(t,{group:s})]}}),[[J("touch"),M.value]])),{group:s}}}),ce=C({eager:Boolean},"lazy");function re(e,n){const t=x(!1),o=f(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const ve=C({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...V(),...N(),...ce()},"VWindowItem"),ge=_()({name:"VWindowItem",directives:{Touch:P},props:ve(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=Q($),a=p(e,L),{isBooted:u}=U();if(!o||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=x(!1),d=f(()=>u.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function v(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function l(){var c;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=X((c=o.rootRef.value)==null?void 0:c.clientHeight)),o.transitionCount.value+=1)}function g(){v()}function B(c){!s.value||K(()=>{!d.value||!s.value||!o||(o.transitionHeight.value=X(c.clientHeight))})}const T=f(()=>{const c=o.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof c!="string"?o.transition.value:c,onBeforeEnter:l,onAfterEnter:v,onEnterCancelled:g,onBeforeLeave:l,onAfterLeave:v,onLeaveCancelled:g,onEnter:B}:!1}),{hasContent:y}=re(e,a.isSelected);return W(()=>m(ee,{transition:T.value,disabled:!u.value},{default:()=>{var c;return[k(m("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[y.value&&((c=t.default)==null?void 0:c.call(t))]),[[q,a.isSelected.value]])]}})),{groupItem:a}}});export{me as V,ge as a,ce as m,re as u};
