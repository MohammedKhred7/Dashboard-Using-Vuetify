import{S as f}from"./SideBare2.1cd1647a.js";import{a as g}from"./axios.bf9a55be.js";import{_ as x,a as k,b}from"./4.0a2fd4a4.js";import{_ as y,ac as w,o as v,d as V,a as t,e,t as S,w as o,b as i,p as I,g as B}from"./index.b5c87158.js";import{n as a}from"./loader.cf216934.js";import{V as C,a as h}from"./VWindowItem.b517c209.js";import{f as p,d,V as c}from"./VSheet.a2cf71c6.js";import{V as _}from"./VBtn.cd2b6533.js";import{V as P}from"./VContainer.2fff03a6.js";import{V as A}from"./VTextarea.ae3e9c29.js";import"./VInput.91923d7c.js";import"./forwardRefs.74a345f5.js";const D={data(){return{search:"",step:1,categioryID:"",loading:!1,token:localStorage.getItem("token"),categories:[],name:"",items:[]}},methods:{getData(){g.request({url:"http://127.0.0.1:8000/api/owner/comments",method:"get",headers:{Authorization:"Bearer "+this.token}}).then(l=>{alert("good"),l.data.status==!0?(console.log(l.data),this.categories=l.data.data):alert("error get ")})},additem(){this.items.push(this.info),this.info={first:"",last:"",email:"",password:""}}},components:{SideBare2:f},created(){this.getData()}},s=l=>(I("data-v-b06c4c95"),l=l(),B(),l),M={id:"c"},R={class:"box"},N={class:"header"},T=s(()=>e("time",null," 1:30 PM ",-1)),L=s(()=>e("br",null,null,-1)),W=s(()=>e("section",{class:"content"},[e("p",null,'"Chase Sapphire Reserve" is ready for Apple Pay ndkenfk femfm mkf kfmkce femk kef l,sw lwdm mfkf frfrkf frfk rkf ')],-1)),q=s(()=>e("br",null,null,-1)),z={class:"headerr"},E={style:{"margin-top":"2px"}},U=s(()=>e("br",null,null,-1)),$={class:"box"},j={class:"header"},F=s(()=>e("time",null," 1:30 PM ",-1)),G=s(()=>e("br",null,null,-1)),H=s(()=>e("section",{class:"content"},[e("p",null,'"Chase Sapphire Reserve" is ready for Apple Pay ndkenfk femfm mkf kfmkce femk kef l,sw lwdm mfkf frfrkf frfk rkf ')],-1)),J=s(()=>e("br",null,null,-1)),K={class:"headerr"},O={style:{"margin-top":"2px"}},Q=s(()=>e("br",null,null,-1)),X={class:"box"},Y={class:"header"},Z=s(()=>e("time",null," 1:30 PM ",-1)),ee=s(()=>e("br",null,null,-1)),te=s(()=>e("section",{class:"content"},[e("p",null,'"Chase Sapphire Reserve" is ready for Apple Pay ndkenfk femfm mkf kfmkce femk kef l,sw lwdm mfkf frfrkf frfk rkf ')],-1)),se=s(()=>e("br",null,null,-1)),oe={class:"headerr"},ie={style:{"margin-top":"2px"}},le=s(()=>e("br",null,null,-1)),ae={class:"replace"},ne={class:"header"},re={class:"main"},de=s(()=>e("time",null," 1:30 PM ",-1)),ce={style:{display:"flex"}},_e=s(()=>e("button",{type:"submit",class:"login__button3"},"Save",-1)),me=s(()=>e("br",null,null,-1));function he(l,n,pe,ue,r,fe){const u=w("SideBare2");return v(),V("div",M,[t(u),e("h1",null,S(r.categories),1),t(a,{class:"ri-user-3-line login__icon"}),t(C,{modelValue:r.step,"onUpdate:modelValue":n[1]||(n[1]=m=>r.step=m)},{default:o(()=>[t(h,{value:1},{default:o(()=>[t(p,{class:"listt"},{default:o(()=>[t(d,null,{default:o(()=>[e("div",R,[e("header",N,[t(c,{src:x,height:"200px",style:{"margin-top":"20px","border-radius":"20px",width:"300px","margin-left":"40px"}}),T]),L,W,q,e("header",z,[e("div",E,[i(" 435 "),t(a,{class:"i",color:"blue-lighten-2"},{default:o(()=>[i(" mdi mdi-thumb-up-outline ")]),_:1}),i(" 23 "),t(a,{class:"i",color:"red-lighten-2"},{default:o(()=>[i(" mdi mdi-thumb-down-outline")]),_:1})]),t(_,{height:"40px",width:"40px",color:"red",icon:"mdi mdi-delete-outline",style:{"margin-right":"30px","margin-top":"-5px"}})])]),U]),_:1}),t(d,null,{default:o(()=>[e("div",$,[e("header",j,[t(c,{src:k,height:"200px",style:{"margin-top":"20px","border-radius":"20px",width:"300px","margin-left":"40px"}}),F]),G,H,J,e("header",K,[e("div",O,[i(" 435 "),t(a,{class:"i",color:"blue-lighten-2"},{default:o(()=>[i(" mdi mdi-thumb-up-outline ")]),_:1}),i(" 23 "),t(a,{class:"i",color:"red-lighten-2"},{default:o(()=>[i(" mdi mdi-thumb-down-outline")]),_:1})]),t(_,{height:"40px",width:"40px",color:"red",icon:"mdi mdi-delete-outline",style:{"margin-right":"30px","margin-top":"-5px"}})])]),Q]),_:1}),t(d,null,{default:o(()=>[e("div",X,[e("header",Y,[t(c,{src:b,height:"200px",style:{"margin-top":"20px","border-radius":"20px",width:"300px","margin-left":"40px"}}),Z]),ee,te,se,e("header",oe,[e("div",ie,[i(" 435 "),t(a,{class:"i",color:"blue-lighten-2"},{default:o(()=>[i(" mdi mdi-thumb-up-outline ")]),_:1}),i(" 23 "),t(a,{class:"i",color:"red-lighten-2"},{default:o(()=>[i(" mdi mdi-thumb-down-outline")]),_:1})]),t(_,{height:"40px",width:"40px",color:"red",icon:"mdi mdi-delete-outline",style:{"margin-right":"30px","margin-top":"-5px"}})])]),le]),_:1})]),_:1})]),_:1}),t(h,{value:2},{default:o(()=>[t(p,{class:"replace_to"},{default:o(()=>[e("div",ae,[e("header",ne,[e("div",re,[t(a,{class:"icon",style:{color:"white"}},{default:o(()=>[i("mdi mdi-cached")]),_:1}),i("Replace To mohammed ")]),de]),t(P,{fluid:""},{default:o(()=>[t(A,{label:"enter text"})]),_:1}),e("div",ce,[e("button",{type:"submit",onClick:n[0]||(n[0]=m=>r.step=1),class:"login__button3"},"Cancel"),_e])]),me]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Pe=y(D,[["render",he],["__scopeId","data-v-b06c4c95"]]);export{Pe as default};
