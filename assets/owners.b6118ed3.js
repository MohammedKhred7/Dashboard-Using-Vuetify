import{_ as V,ac as k,o as y,c as C,w as n,V as I,a as o,b as B,e as t,C as u,aL as _,ay as m,aK as r,b4 as h,ab as A,H as N,t as d,f as F,p as S,g as U}from"./index.f97f631d.js";import{_ as D}from"./1.bc1943b7.js";import{S as v}from"./SideBare.f45af33e.js";import{a as p}from"./axios.bf9a55be.js";import{V as R}from"./VContainer.c94e2199.js";import{V as T,a as f}from"./VRow.1943341a.js";import{V as O,a as g}from"./VWindowItem.416a2cd1.js";import{V as w}from"./VCard.66bc6643.js";import{a as z,b as $,V as E,f as L,d as b}from"./VSheet.49045c13.js";import{V as q}from"./loader.d891b617.js";import{V as c}from"./VTextField.546d6d68.js";import"./VBtn.47d2b29c.js";import"./VInput.4f2dc85c.js";import"./forwardRefs.74a345f5.js";const i=a=>(S("data-v-2668376e"),a=a(),U(),a),M=i(()=>t("br",null,null,-1)),j=i(()=>t("br",null,null,-1)),K={class:"login__box"},P=i(()=>t("i",{class:"ri-user-3-line login__icon"},null,-1)),W={class:"login__box-input"},x=i(()=>t("label",{for:"login-name",class:"login__label"}," Enter New First Name",-1)),H={class:"login__box"},G=i(()=>t("i",{class:"ri-user-3-line login__icon"},null,-1)),J={class:"login__box-input"},Q=i(()=>t("label",{for:"name",class:"login__label"}," Enter New Last Name",-1)),X={class:"login__box"},Y=i(()=>t("i",{class:"ri-user-3-line login__icon"},null,-1)),Z={class:"login__box-input"},ee=i(()=>t("label",{for:"login-email",class:"login__label"},"Enter New Email",-1)),te=i(()=>t("br",null,null,-1)),se=i(()=>t("br",null,null,-1)),ae=i(()=>t("h3",{style:{color:"rgb(22, 22, 22)","text-align":"center"}},"OWNERS",-1)),le={class:"search"},oe={class:"header"},ne=i(()=>t("div",{class:"main"},[t("i",{class:"icon"}),t("div",{style:{margin:"0 10px"}},[t("p",{style:{color:"black"}},d("owner_name")),t("p",null,d("owner_email"))])],-1)),ie={class:"header"},re=i(()=>t("div",{class:"main"},[t("i",{class:"icon"}),t("div",{style:{margin:"0 10px"}},[t("p",{style:{color:"black"}},d("owner_name")),t("p",null,d("owner_email"))])],-1)),de={class:"header"},ue=i(()=>t("div",{class:"main"},[t("i",{class:"icon"}),t("div",{style:{margin:"0 10px"}},[t("p",{style:{color:"black"}},d("owner_name")),t("p",null,d("owner_email"))])],-1)),me=i(()=>t("br",null,null,-1)),pe=i(()=>t("div",{class:"btu"},[t("button",{class:"login__button2"},"Block"),t("button",{tile:"",outlined:"",dark:"",class:"login__button2"},"Edit")],-1)),ce=i(()=>t("br",null,null,-1)),_e={class:"login"},he={class:"login-card",style:{width:"500px"}},ge=i(()=>t("h1",{class:"login__title"},"Register",-1)),be={class:"message-container"},fe={class:"message-text"},we=i(()=>t("br",null,null,-1)),ve={data(){return{search:"",step:1,msg:"",showMessage:!1,animate:!1,loading:!1,ID:"",BLOCK:!1,activeIndex:null,token:localStorage.getItem("token"),owners:[],name:"",signup:{first_name:"",last_name:"",email:"",password:"",password_confirmation:""},items:[],update:[{first_name:"",last_name:"",email:""}],first_nameRules:[a=>!!a],last_nameRules:[a=>!!a],emailRules:[a=>!!a],pwdRules:[a=>!!a],pwdConfirm:[a=>!!a,a=>a===this.signup.password]}},methods:{startAnimation(){this.animate=!0,setTimeout(()=>{this.animate=!1},1e3)},save(a,e,s){this.ID=a,this.BLOCK=s,this.activeIndex=e},gitID(){this.ID==""?alert("pleas choose the owner"):this.step=2},gitID2(){this.ID==""?alert("pleas choose the owner"):p.request({url:"http://127.0.0.1:8000/api/admin/owners/"+this.ID+"/block/",method:"put",headers:{Authorization:"Bearer "+this.token}}).then(a=>{console.log(this.ID),a.data.status==!0?(alert(a.data.message),this.owners=a.data.data,this.step=1):alert("error")})},getSearch(){p.request({url:"http://127.0.0.1:8000/api/admin/owners/search/",method:"get",headers:{Authorization:"Bearer "+this.token},data:{search:this.search}}).then(a=>{a.data.status==!0?(this.search="",console.log(a.data),this.owners=a.data.data):alert("error get ")})},getOwners(){p.request({url:"http://127.0.0.1:8000/api/admin/owners",method:"get",headers:{Authorization:"Bearer "+this.token}}).then(a=>{a.data.status==!0?(console.log(a.data),this.owners=a.data.data):alert("error get ")})},updateOwner(a){p.request({url:"http://127.0.0.1:8000/api/admin/owners/"+a,method:"put",headers:{Authorization:"Bearer "+this.token},data:{first_name:this.update.first_name,last_name:this.update.last_name,email:this.update.email}}).then(e=>{console.log(a),e.data.status==!0?(alert(e.data.message),this.owners=e.data.data,this.step=1):alert("error")})},unBlockOwner(a){p.request({url:"http://127.0.0.1:8000/api/admin/owners/"+a+"/unblock/",method:"put",headers:{Authorization:"Bearer "+this.token}}).then(e=>{console.log(a),e.data.status==!0?(alert(e.data.message),this.owners=e.data.data,this.step=1):alert("error")})},additem(){this.items.push(this.info),this.info={first:"",last:"",email:"",password:""}}},components:{SideBare:v},created(){console.log(this.token),this.getOwners()}},Ve=Object.assign(ve,{__name:"owners",setup(a){return(e,s)=>{const ke=k("btu");return y(),C(I,{id:"inspire"},{default:n(()=>[o(v),o(F,null,{default:n(()=>[o(R,{class:"px-6 mt-n2"},{default:n(()=>[o(T,null,{default:n(()=>[o(O,{modelValue:e.step,"onUpdate:modelValue":s[18]||(s[18]=l=>e.step=l),style:{width:"100%",height:"100%"}},{default:n(()=>[o(g,{value:2},{default:n(()=>[M,B(),j,o(f,{class:"mt-n0",col:"12",style:{display:"flex","align-items":"center","justify-content":"center"}},{default:n(()=>[o(w,{class:"login__form3"},{default:n(()=>[o(z,{color:"#6930",class:"avatar"},{default:n(()=>[o(q,{"model-value":"60",color:"#00cce2",size:130,width:2},{default:n(()=>[o($,{size:"auto"},{default:n(()=>[o(E,{width:"120px",src:D})]),_:1})]),_:1})]),_:1}),t("div",K,[P,t("div",W,[u(t("input",{type:"text",class:"login__input",placeholder:" ","onUpdate:modelValue":s[0]||(s[0]=l=>e.update.first_name=l)},null,512),[[_,e.update.first_name]]),x])]),t("div",H,[G,t("div",J,[u(t("input",{type:"text",class:"login__input",placeholder:" ","onUpdate:modelValue":s[1]||(s[1]=l=>e.update.last_name=l)},null,512),[[_,e.update.last_name]]),Q])]),t("div",X,[Y,t("div",Z,[u(t("input",{type:"email",class:"login__input",placeholder:" ","onUpdate:modelValue":s[2]||(s[2]=l=>e.update.email=l)},null,512),[[_,e.update.email]]),ee])]),te,se,t("button",{onClick:s[3]||(s[3]=m(l=>e.updateOwner(e.ID),["prevent"])),class:"login__button"},"Save"),t("button",{onClick:s[4]||(s[4]=l=>e.step=1),class:"login__button"},"Cancel")]),_:1})]),_:1})]),_:1}),o(g,{value:1},{default:n(()=>[o(f,{class:"mt-n0",col:"12",style:{display:"flex","align-items":"center",padding:"50px","justify-content":"center"}},{default:n(()=>[o(w,{class:"login__form"},{default:n(()=>[ae,t("div",le,[u(t("input",{type:"text",placeholder:" search for owner","onUpdate:modelValue":s[5]||(s[5]=l=>e.search=l)},null,512),[[_,e.search]]),t("button",{onClick:s[6]||(s[6]=m(l=>e.getSearch(),["prevent"]))},"search")]),o(L,{class:"listt"},{default:n(()=>[o(b,{class:r({active:e.activeIndex===e.index})},{default:n(()=>[t("div",{class:"box",onClick:s[7]||(s[7]=m(l=>e.save(e.v.id,e.index,"owner_blocked"),["prevent"]))},[t("header",oe,[ne,h("",!0)])])]),_:1},8,["class"]),o(b,{class:r({active:e.activeIndex===e.index})},{default:n(()=>[t("div",{class:"box",onClick:s[8]||(s[8]=m(l=>e.save(e.v.id,e.index,"owner_blocked"),["prevent"]))},[t("header",ie,[re,h("",!0)])])]),_:1},8,["class"]),o(b,{class:r({active:e.activeIndex===e.index})},{default:n(()=>[t("div",{class:"box",onClick:s[9]||(s[9]=m(l=>e.save(e.v.id,e.index,"owner_blocked"),["prevent"]))},[t("header",de,[ue,h("",!0)])])]),_:1},8,["class"])]),_:1}),me,pe,ce,t("h3",{style:{color:"rgb(0, 0, 0)","text-align":"center"},onClick:s[10]||(s[10]=l=>e.step=3)},"Click Add New Owners")]),_:1})]),_:1})]),_:1}),o(g,{value:3},{default:n(()=>[t("div",_e,[t("form",he,[ge,o(A,{name:"fade"},{default:n(()=>[u(t("div",be,[t("p",fe,d(e.msg),1)],512),[[N,e.showMessage]])]),_:1}),we,o(c,{style:{color:"aliceblue","margin-bottom":"8px"},class:r({animated:e.animate}),onFocus:e.startAnimation,modelValue:e.signup.first_name,"onUpdate:modelValue":s[11]||(s[11]=l=>e.signup.first_name=l),label:"First name",type:"text",rules:e.first_nameRules},null,8,["class","onFocus","modelValue","rules"]),o(c,{style:{color:"aliceblue","margin-bottom":"8px"},class:r({animated:e.animate}),onFocus:e.startAnimation,modelValue:e.signup.last_name,"onUpdate:modelValue":s[12]||(s[12]=l=>e.signup.last_name=l),label:"Last name",type:"text",rules:e.last_nameRules},null,8,["class","onFocus","modelValue","rules"]),o(c,{style:{color:"aliceblue","margin-bottom":"8px"},class:r({animated:e.animate}),onFocus:e.startAnimation,modelValue:e.signup.email,"onUpdate:modelValue":s[13]||(s[13]=l=>e.signup.email=l),label:"Email",type:"email",rules:e.emailRules},null,8,["class","onFocus","modelValue","rules"]),o(c,{style:{color:"aliceblue","margin-bottom":"8px"},class:r({animated:e.animate}),onFocus:e.startAnimation,modelValue:e.signup.password,"onUpdate:modelValue":s[14]||(s[14]=l=>e.signup.password=l),label:"Password",type:"password",rules:e.pwdRules},null,8,["class","onFocus","modelValue","rules"]),o(c,{style:{color:"aliceblue","margin-bottom":"8px"},class:r({animated:e.animate}),onFocus:e.startAnimation,modelValue:e.signup.password_confirmation,"onUpdate:modelValue":s[15]||(s[15]=l=>e.signup.password_confirmation=l),label:"Confirm Password",type:"password",rules:e.pwdConfirm},null,8,["class","onFocus","modelValue","rules"]),t("button",{type:"submit",onClick:s[16]||(s[16]=()=>{}),class:"login__button3"},"Add"),t("button",{type:"submit",onClick:s[17]||(s[17]=l=>e.step=1),class:"login__button3"},"Cancel")])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),$e=V(Ve,[["__scopeId","data-v-2668376e"]]);export{$e as default};
