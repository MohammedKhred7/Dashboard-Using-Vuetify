import{h as b,m as f,$ as H,u as C,a as n,l as D,O as v,F as p,P as G,R as J,T as K,n as P,C as Q,D as U}from"./index.f97f631d.js";import{h as I,b as S,V as W}from"./VSheet.49045c13.js";import{g as T,n as x,e as g,p as X,m as Y,q as Z,D as ee,z as ae,A as te,a as ne,r as de,i as ie,R as le,t as se,j as ce,k as re,u as ue,v as ve,E as oe,B as me,C as ye,d as ke,s as ge,L as be,o as fe}from"./loader.d891b617.js";const Ce=b()({name:"VCardActions",props:f(),setup(e,l){let{slots:t}=l;return H({VBtn:{slim:!0,variant:"text"}}),C(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=I("v-card-subtitle"),Ve=I("v-card-title"),Ae=D({appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:[String,Number],title:[String,Number],...f(),...T()},"VCardItem"),he=b()({name:"VCardItem",props:Ae(),setup(e,l){let{slots:t}=l;return C(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),m=!!(s||t.append),y=!!(e.title!=null||t.title),k=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(p,null,[e.prependAvatar&&n(S,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(x,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[y&&n(Ve,{key:"title"},{default:()=>{var d,i;return[(i=(d=t.title)==null?void 0:d.call(t))!=null?i:e.title]}}),k&&n(Ie,{key:"subtitle"},{default:()=>{var d,i;return[(i=(d=t.subtitle)==null?void 0:d.call(t))!=null?i:e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),m&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(p,null,[e.appendIcon&&n(x,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(S,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),pe=I("v-card-text"),Pe=D({appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...X(),...f(),...T(),...Y(),...Z(),...ee(),...ae(),...te(),...ne(),...de(),...G(),...J(),...ie({variant:"elevated"})},"VCard"),Te=b()({name:"VCard",directives:{Ripple:le},props:Pe(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:o}=K(e),{borderClasses:s}=se(e),{colorClasses:m,colorStyles:y,variantClasses:k}=ce(e),{densityClasses:c}=re(e),{dimensionStyles:d}=ue(e),{elevationClasses:i}=ve(e),{loaderClasses:B}=oe(e),{locationStyles:L}=me(e),{positionClasses:_}=ye(e),{roundedClasses:R}=ke(e),r=ge(e,t),N=P(()=>e.link!==!1&&r.isLink.value),u=P(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return C(()=>{const F=N.value?"a":e.tag,E=!!(a.title||e.title!=null),O=!!(a.subtitle||e.subtitle!=null),j=E||O,M=!!(a.append||e.appendAvatar||e.appendIcon),$=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),w=j||$||M,z=!!(a.text||e.text!=null);return Q(n(F,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u.value},o.value,s.value,m.value,c.value,i.value,B.value,_.value,R.value,k.value,e.class],style:[y.value,d.value,L.value,e.style],href:r.href.value,onClick:u.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var V;return[q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(W,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(he,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&n(pe,{key:"text"},{default:()=>{var A,h;return[(h=(A=a.text)==null?void 0:A.call(a))!=null?h:e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&n(Ce,null,{default:a.actions}),fe(u.value,"v-card")]}}),[[U("ripple"),u.value&&e.ripple]])}),{}}});export{Te as V,Ve as a,Ie as b,he as c,pe as d};
