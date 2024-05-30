<template>
    <v-app
      id="inspire" >
    <!-- <img src="/u.jpg" alt="login image" class="login__img"> -->
      <SideBare />
      <v-main>
        <v-container class="px-6 mt-n2" >
          <v-row>
            <v-window v-model="step"  style="width:100%;height: 100%;">
              <v-window-item :value="2">
            <br> <br>
            <v-col  class="mt-n0" col="12" style="display: flex;
            align-items: center;
            justify-content: center;">
            <v-card class="login__form3">
                          <v-sheet color="#6930"  class="avatar">
      <v-progress-circular
        model-value="60"
        color="#00cce2"
        :size="130"
        :width="2"
      >
      <v-avatar size="auto">
      <v-img
      width="120px"
        src="/1.jpg"
      />
    </v-avatar>

    </v-progress-circular>
</v-sheet>
              <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>
                  <div class="login__box-input">
                     <input type="text"  class="login__input" placeholder=" " v-model="update.first_name">
                     <label for="login-name" class="login__label"> Enter New First Name</label>
                  </div>
               </div>
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>
                  <div class="login__box-input">
                     <input type="text"  class="login__input" placeholder=" " v-model="update.last_name">
                     <label for="name" class="login__label"> Enter New Last Name</label>
                  </div>
               </div>
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>
                  <div class="login__box-input">
                     <input type="email"  class="login__input" placeholder=" " v-model="update.email">
                     <label for="login-email" class="login__label">Enter New Email</label>
                  </div>
               </div>
               <br>
               <br>
               <button  @click.prevent="updateOwner(ID)" class="login__button">Save</button>
               <button  @click="step=1" class="login__button">Cancel</button>
            </v-card  >
          </v-col  >
        </v-window-item>
            <v-window-item :value="1">
            <v-col  class="mt-n0" col="12" style="display: flex;
            align-items: center; padding: 50px;
            justify-content: center;">
            <v-card class="login__form" >
              <h3 style="color: rgb(22, 22, 22); text-align: center;" >OWNERS</h3>
              <div class="search">
               <input type="text"  placeholder=" search for owner"  v-model="search">
              <button @click.prevent="getSearch()" >search</button>
            </div>
            <v-list class="listt"  >
          <!-- <v-list-item  v-for=" v,index in owners" :class="{ active: activeIndex === index }">
            <div class="box" @click.prevent="save(v.id,index,v['owner_blocked'])">
			<header class="header">
				<div class="main">
          <i class="icon"></i>
          <div style="margin: 0 10px; "><p style="color: black;">{{ v["owner_name"] }}</p>
          <p >{{ v["owner_email"] }}</p>
        </div>
				</div>
        <btu v-if="v['owner_blocked']== 'True'" class="login__button3" style="text-align: center; background-color: brown;"  @click.prevent="unBlockOwner(v.id)" >Unblocked</btu>
			</header>
		             </div>
                </v-list-item> -->
                          <v-list-item   :class="{ active: activeIndex === index }">
            <div class="box" @click.prevent="save(v.id,index,'owner_blocked')">
              <!-- <span style="display: none;">  {{ ID =  v["Owner's ID"]}} </span> -->
			<header class="header">
				<div class="main">
          <i class="icon"></i>
          <div style="margin: 0 10px; "><p style="color: black;">{{ "owner_name" }}</p>
          <p >{{ "owner_email" }}</p>
        </div>
				</div>
        <btu v-if="'owner_blocked'== 'True'" class="login__button3" style="text-align: center; background-color: brown;" >Unblocked</btu>
			</header>
		             </div>
                </v-list-item>
                <v-list-item   :class="{ active: activeIndex === index }">
                  <div class="box" @click.prevent="save(v.id,index,'owner_blocked')">
                    <!-- <span style="display: none;">  {{ ID =  v["Owner's ID"]}} </span> -->
            <header class="header">
              <div class="main">
                <i class="icon"></i>
                <div style="margin: 0 10px; "><p style="color: black;">{{ "owner_name" }}</p>
                <p >{{ "owner_email" }}</p>
              </div>
              </div>
              <btu v-if="'owner_blocked'== 'True'" class="login__button3" style="text-align: center; background-color: brown;" >Unblocked</btu>
            </header>
                       </div>
                      </v-list-item>
                      <v-list-item   :class="{ active: activeIndex === index }">
                        <div class="box" @click.prevent="save(v.id,index,'owner_blocked')">
                          <!-- <span style="display: none;">  {{ ID =  v["Owner's ID"]}} </span> -->
                  <header class="header">
                    <div class="main">
                      <i class="icon"></i>
                      <div style="margin: 0 10px; "><p style="color: black;">{{ "owner_name" }}</p>
                      <p >{{ "owner_email" }}</p>
                    </div>
                    </div>
                    <btu v-if="'owner_blocked'== 'True'" class="login__button3" style="text-align: center; background-color: brown;" >Unblocked</btu>
                  </header>
                             </div>
                            </v-list-item>
            </v-list>
            <br>
            <div class="btu">
                <button   class="login__button2">Block</button>
             <button  tile outlined dark  class="login__button2">Edit</button>
            </div>
              <br>
              <h3 style="color: rgb(0, 0, 0); text-align: center;" @click="step=3" >Click Add New Owners</h3>
            </v-card>
          </v-col>
        </v-window-item>
            <v-window-item :value="3">
              <div class="login">
        <form class="login-card" style="width: 500px;">
           <h1 class="login__title">Register</h1>
           <transition name="fade">
      <div v-show="showMessage" class="message-container">
        <p  class="message-text">{{msg}}</p>
      </div>
    </transition>
    <br>

               <v-text-field style="color: aliceblue; margin-bottom: 8px; " :class="{ 'animated': animate }"
      @focus="startAnimation" v-model="signup.first_name"
                 label="First name"
                 type="text"
                 :rules="first_nameRules"
               ></v-text-field>

               <v-text-field style="color: aliceblue; margin-bottom: 8px; " :class="{ 'animated': animate }"
      @focus="startAnimation" v-model="signup.last_name"
                 label="Last name"
                 type="text"
                 :rules="last_nameRules"
               ></v-text-field>

               <v-text-field style="color: aliceblue; margin-bottom: 8px; " :class="{ 'animated': animate }"
      @focus="startAnimation"  v-model="signup.email"
                 label="Email"
                 type="email"
                 :rules="emailRules"
               ></v-text-field>
                <v-text-field style="color: aliceblue; margin-bottom: 8px; " :class="{ 'animated': animate }"
      @focus="startAnimation" v-model="signup.password"
                 label="Password"
                 type="password"
                :rules="pwdRules"
                ></v-text-field>

           <v-text-field style="color: aliceblue; margin-bottom: 8px; " :class="{ 'animated': animate }"
      @focus="startAnimation"  v-model="signup.password_confirmation "
           label="Confirm Password"
           type="password"
           :rules="pwdConfirm"
           ></v-text-field>
           <button type="submit" @click="" class="login__button3">Add</button>
               <button type="submit" @click="step=1" class="login__button3">Cancel</button>
        </form>
     </div>
        </v-window-item>
        </v-window >
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>

  <script setup>
  import SideBare from "@/components/SideBare.vue";

  </script>
  <script>
 import axios from 'axios';
export default {
data () {
 return{
 search:'',
 step: 1,
 msg:'',
 showMessage: false,
 animate: false,
 loading: false,
 ID:'',
 BLOCK:false,
 activeIndex: null,
 token: localStorage.getItem('token'),
 owners:[],
  name:'',
  signup:{
 first_name:'',
   last_name:'',
   email:'',
   password:'',
   password_confirmation:'',
 },
     items:[],
      update:[{
        first_name:'',
        last_name:'',
        email:'',
      }
  ],
  first_nameRules:[v => !!v ],
 last_nameRules:[v => !!v ],
 emailRules:[v => !!v ],
 pwdRules: [v => !!v ],
     pwdConfirm: [
       v => !!v ,
       v => v === this.signup.password
     ],
  }
},
  methods:{
    startAnimation() {
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 1000); // Change the duration as per your requirement
    },
    save(id,index,block){
this.ID=id;
this.BLOCK=block;
this.activeIndex = index;
    },
    gitID(){
      if (this.ID == '') {
        alert("pleas choose the owner")
      }
      else{
        this.step=2;
      }
    },
    gitID2(){
      if (this.ID == '') {
        alert("pleas choose the owner")
      }
      else{
        axios
    .request({
      url: "http://127.0.0.1:8000/api/admin/owners/"+this.ID+"/block/",
      method: "put",
       headers: {
        Authorization: "Bearer " + this.token,
       },
      })
        .then(response => {
          console.log(this.ID)
          if (response.data.status == true) {
          alert(response.data.message);
          this.owners = response.data.data;
          this.step=1;
         // this.loading = false
       }
          else{
            alert("error")
          }
        })
      }
    },
    getSearch() {
      axios.request({
      url: "http://127.0.0.1:8000/api/admin/owners/search/",
      method: "get",
       headers: {
        Authorization: "Bearer " + this.token
       },
       data:{
       search:this.search,
       }
      })
      .then(response=> {
       if (response.data.status == true) {
        this.search='';
        console.log(response.data);
          this.owners = response.data.data;
       }
       else{
        alert("error get ")
       }
          // this.loading = false
        })
      },
    getOwners() {
      axios.request({
      url: "http://127.0.0.1:8000/api/admin/owners",
      method: "get",
       headers: {
        Authorization: "Bearer " + this.token
       }
      })
      .then(response=> {
       if (response.data.status == true) {
        console.log(response.data);
          this.owners = response.data.data;
       }
       else{
        alert("error get ")
       }
          // this.loading = false
        })
      },
      updateOwner(id) {
        axios
    .request({
      url: "http://127.0.0.1:8000/api/admin/owners/"+id,
      method: "put",
       headers: {
        Authorization: "Bearer " + this.token,
       },
       data:{
        first_name: this.update.first_name,
        last_name:  this.update.last_name,
        email:      this.update.email
       }
      })
        .then(response => {
          console.log(id)
          if (response.data.status == true) {
          alert(response.data.message);
          this.owners = response.data.data;
          this.step=1;
         // this.loading = false
       }
          else{
            alert("error")
          }
        })
      },
      unBlockOwner(id) {
        axios
    .request({
      url: "http://127.0.0.1:8000/api/admin/owners/"+id+"/unblock/",
      method: "put",
       headers: {
        Authorization: "Bearer " + this.token,
       },
      })
        .then(response => {
          console.log(id)
          if (response.data.status == true) {
          alert(response.data.message);
          this.owners = response.data.data;
          this.step=1;
         // this.loading = false
       }
          else{
            alert("error")
          }
        })
      },
    additem(){
      this.items.push(this.info)
       this.info={
        first:'',
        last:'',
        email:'',
        password:'',
      }
    },
  },
  components: {
    SideBare,
  },
  created() {
   console.log(this.token);
   this.getOwners();

        }
};
  </script>
 <style scoped>
  /* register */


  .custom-button {
  background-color: #2196f3;
  color: #ffffff;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: #1976d2;
}

.message-container {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  margin-top: 16px;
}

.message-text {
  color: #333333;
  font-size: 18px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* butten animation and style in login */

 .animated {
  animation: shake 1s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
 .a{
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 5px;
  letter-spacing: 4px;
  margin-bottom: 25px;
  width: 60%;
  left: 98px;
}

.a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}
.span{
  position: absolute;
  display: block;
 }
 .span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}
@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}
.span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}
.span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}
.span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
  .login-card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background-color: #002738;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
  }

  .login-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #ffffff;
    animation: fade-in 0.5s ease-out;
  }

  .login-btn {
    margin-top: 16px;
    animation: pulse 1s infinite;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

/*=============== LOGIN ===============*/
.avatar{
  display: grid;
    justify-content: center;
}
.col{
margin-bottom: 10px;
}
.login {
 position: relative;
 height: 100vh;
 display: grid;
 align-items: center;
}
.login__img {
 position: absolute;
 width: 100%;
 height: 100%;
 object-fit: cover;
 object-position: center;
}

.login__title {
 text-align: center;
 color: white;
 font-size: h1;
 font-weight: medium;
 margin-bottom: 2rem;
}
.login__content, .login__box {
 display: grid;
}
.login__content {
 row-gap: 1.75rem;
 margin-bottom: 1.5rem;
}
.login__content2 {
 margin-bottom: 3px;
}
.login__box {
 grid-template-columns: max-content 1fr;
 align-items: center;
 column-gap: 0.75rem;
 border-bottom: 2px solid white;
}
.login__icon, .login__eye {
 font-size: 1.25rem;
}
.login__input {
 width: 100%;
 padding-block: 0.8rem;
 background: none;
 color: white;
 position: relative;
 z-index: 1;
}
.login__box-input {
 position: relative;
}
.login__box-input2 {
 position: relative;
 color: rgb(0, 0, 0);
 font-weight: bold;
}

.login__label {
 position: absolute;
 left: 0;
 top: 13px;
 font-weight: medium;
 transition: top 0.3s, font-size 0.3s;
}
.login__eye {
 position: absolute;
 right: 0;
 top: 18px;
 z-index: 10;
 cursor: pointer;
}
.login__box:nth-child(2) input {
 padding-right: 1.8rem;
}
.login__check, .login__check-group {
 display: flex;
 align-items: center;
 justify-content: space-between;
}
.login__check {
 margin-bottom: 1.5rem;
}
.login__check-label, .login__forgot, .login__register {
 font-size: small;
}
.login__check-group {
 column-gap: 0.5rem;
}
.login__check-input {
 width: 16px;
 height: 16px;
}
.login__forgot {
 color: white;
 font-size: 18px;
}
.login__forgot:hover {
 text-decoration: underline;
 color: #03e9f4;
}
.login__button {
 width: 100%;
 padding: 1rem;
 border-radius: 0.5rem;
 background-color: white;
 font-weight:medium;
 cursor: pointer;
 margin-bottom: 2rem;
}
.login__register {
 text-align: center;
 font-size: 18px;
 color: #fff;
}
.login__register h4 {
  font-size: 20px;
 color:#03e9f4;
}
.login__register h4:hover {
 text-decoration: underline;
}

/* Input focus move up label */
.login__input:focus + .login__label {
 top: -12px;
 font-size:small;
}

/* Input focus sticky top label */
.login__input:not(:placeholder-shown).login__input:not(:focus) + .login__label {
 top: -12px;
 font-size: small;
}

/*=============== BREAKPOINTS ===============*/
/* For medium devices */
@media screen and (min-width: 576px) {
 .login {
   justify-content: center;
 }
 .login__title {
   font-size: 2rem;
 }
}
  /* ............. */
 .upload{
   visibility: hidden;
   width: 100%;
    padding-block: 0.8rem;
    background:none;
    color: white;
 }
 .search{
   margin: 1px 1px;
   padding: 10px;
 }
 .search input{
   width: 70%;
 margin: 20px 10px;
   padding-block: 0.8rem;
   border-radius: 0.5rem  ;
 background-color: whitesmoke;
 color: black;
 border-style:inherit 20px #00cce2 ;
 }
 .search button{

   width: 20%;
   padding-block: 0.8rem;
   border-radius: 0.5rem;
 background-color: #00cce2;
   position: relative;
   z-index: 1;
   color: white;
 }
 .login__title {
  color: white;
 text-align: center;
 font-size: 30px;
 font-weight: medium;
 margin-bottom: 2rem;
 }
 .login__form2 {
 background-color: hsla(0, 0%, 10%, 0.1);
 border: 2px solid white;
 margin-inline: 1.5rem;
 padding: 2.5rem 1.5rem;
 border-radius: 1rem;
 backdrop-filter: blur(8px);
 width: 500px; height: 300px;
 }
 .login__button2 {
 width:40%;
 margin: 0 6px;
 padding: 10px;
 border-radius: 0.5rem;
 background-color: #00cce2;
 font-weight: bold;
 cursor: pointer;
 color: white;

 }
 .btu{
 display: flex;
 justify-content: center;
 }
 .conn{

 display: contents;
 position: absolute;
 }
 .con{
   display: block;
   position: absolute;
   right: 20px;
 }
 .icon{
   padding: 0 20px;
 }
 .listt{
   width: 100%;
   height: 400px;
   background-color: #003f46;
 border-radius: 0.5rem;

 }

 /* .listt :hover{
   background:#ececec;
   box-shadow: 20px black;

 } */
 .login__button3 {
   width: 35%;
   padding: 1rem;
   margin: 0 30px;
   border-radius: 0.5rem;
   background-color: #00cce2;
   color: white;
   font-weight: bold;
   cursor: pointer;
 }
 .login__button {
   width: 100%;
   padding: 1rem;
   border-radius: 0.5rem;
   background-color: white;
   font-weight: bold;
   cursor: pointer;
   margin-bottom: 2rem;
 }
 .login__content, .login__box {
   display: grid;
 }
 .login__content {
   row-gap: 1.75rem;
   margin-bottom: 1.5rem;
 }
 .login__box {
   grid-template-columns: max-content 1fr;
   align-items: center;
   column-gap: 0.75rem;
   border-bottom: 2px solid white;
 }
 .login__icon, .login__eye {
   font-size: 1.25rem;
 }
 .login__input {
   width: 100%;
   padding-block: 0.8rem;
   background: none;
   color: white;
   position: relative;
   z-index: 1;
 }
 .login__box-input {
   position: relative;
 }
 .login__label {
   position: absolute;
   color: white;
   left: 0;
   top: 13px;
   font-weight: medium;
   transition: top 0.3s, font-size 0.3s;
 }
 .login__form {
   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
   transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
 border: 2px solid rgb(236, 236, 236);
 margin-inline: 1.5rem;
 padding: 2.5rem 1.5rem;
 border-radius: 1rem;
 backdrop-filter: blur(8px);
 width: 70%;
 }
 .login__form3 {
   background: #003f46;
   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
   transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
 border: 2px solid rgb(236, 236, 236);
 margin-inline: 1.5rem;
 padding: 2.5rem 1.5rem;
 border-radius: 1rem;
 backdrop-filter: blur(8px);
 width: 70%;
 }
 .login__eye {
   position: absolute;
   right: 0;
   top: 18px;
   z-index: 10;
   cursor: pointer;
 }
 .login__box:nth-child(2) input {
   padding-right: 1.8rem;
 }
 .login__input:focus + .login__label {
   top: -12px;
   font-size: small;
 }

 /* Input focus sticky top label */
 .login__input:not(:placeholder-shown).login__input:not(:focus) + .login__label {
   top: -12px;
   font-size: small;
 }
 .box {
   background-color: #f7f7f7;
   position: relative;
   display: inline-block;
  padding: 10px 10px ;
   width: 95%;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
   transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
   margin: 2px ;
 }

 .box::after {
   content: "";
   border-radius: 5px;
   position: absolute;
   z-index: -1;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
   -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44);
   transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44);

   &:nth-child(2) {
     top: calc(50% + 9px);
     z-index: 0;
     transform: scale(0.98);
     background-color: hsla(0, 0, 100%, 0.8)
   }
 &:nth-child(3) {
     top: calc(50% + 18px);
     z-index: 0;
     transform: scale(0.96);
     background-color: hsla(0, 0, 100%, 0.6)
   }
 }
 .content{
  margin: 2px;
  display: flex;
 }
 .box:hover {
   -webkit-transform: scale(1.10, 1.10);
   transform: scale(1.10, 1.10);
 }
.active {
  background-color:#00cce2;
  color: black;
}
 .login__icon {
   font-size: 1.25rem;

 }

 .header {
     display: flex;
     justify-content: space-between;
     font-size: 0.9rem;
     color: #555454;
   }

 .main {
     display: flex;
     align-items: center;
     justify-content: center;
   }

 .footer {
     color: #555454;
     font-size: 0.9rem;
   }

 .icon {
   width: 50px;
   height: 50px;
   margin-right: 8px;
   border-radius: 5px;
   background-color: #222;
   display: block;
 }
 </style>
