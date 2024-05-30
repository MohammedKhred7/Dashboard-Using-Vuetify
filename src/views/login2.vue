<!-- الاوان :
#F1F6F9  ابيض
#394867 مزرق
#212A3E  مسود
#9BA4B5 رصاصي  -->
<template>

  <v-window v-model="step">
   <v-window-item :value="1">
 <div class="login">
        <row  class="login-card" >
           <h1 class="login__title">Login</h1>

               <v-text-field  style="color: aliceblue; margin-bottom: 5px; " :class="{ 'animated': animate }"
      @focus="startAnimation" v-model="auth.email"
                 label="Email"
                 type="email"
                 :rules="emailRules"
               ></v-text-field>
                <v-text-field   style="color: aliceblue; margin-bottom: 5px;" :class="{ 'animated': animate }"
      @focus="startAnimation" v-model="auth.password"
                 label="Password"
                 type="password"
                :rules="pwdRules"
                ></v-text-field>
           <div class="login__check">
              <btu  class="login__forgot" tile outlined dark @click="step=3">Forgot Password?</btu>
           </div>

           <button @click.prevent="LoginUser()"  class="a"><span class="span"></span>
      <span class="span"></span>
      <span class="span"></span>
      <span class="span"></span>Login</button>
      <br>

           <p class="login__register" style="font-size: 18px;">
              Don't have an account? <h4 tile outlined dark @click="step=2" >register</h4>
           </p>
         </row>
     </div>
   </v-window-item>
   <v-window-item :value="3">
 <div class="login">
        <row  class="login-card">
           <h1 class="login__title">Forgot Password</h1>

           <transition name="fade">
      <div v-show="showMessage" class="message-container">
        <p  class="message-text">{{msg}}</p>
      </div>
    </transition>
    <br>

            <v-text-field  style="color: aliceblue; margin-bottom: 5px; " :class="{ 'animated': animate }"
      @focus="startAnimation" v-model="restEmail"
                 label="Email"
                 type="email"
               ></v-text-field>
           <button @click.prevent="Forgot_Password()" class="login__button">Send</button>
           <button  class="login__button" @click="step=1">Concel</button>
        </row>
     </div>
   </v-window-item>
   <v-window-item :value="2">
 <div class="login">
        <form class="login-card" style="width: 500px;">
           <h1 class="login__title">Register</h1>

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


              <!-- <div class="login__box">
                 <i class="ri-lock-2-line login__icon"></i>

                 <div class="login__box-input">
                    <input type="password"  class="login__input" placeholder=" " v-model="signup.password">
                    <label :rules="signup.pwdRules" class="login__label">Password</label>
                    <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                 </div>
              </div> -->
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
           <button @click.prevent="SignupUser()" class="a"><span class="span"></span>
      <span class="span"></span>
      <span class="span"></span>
      <span class="span"></span>
       Sign Up</button>

           <p class="login__register" style="font-size: 18px;">
              You have an account?  <h4 tile outlined dark @click="step=1" >Login</h4>
           </p>
        </form>
     </div>
   </v-window-item>

   </v-window>

 </template>
<script>
import axios from 'axios';
export default {
data () {
 return{
 step: 1,
 restEmail:'',
 isLoading: true,
 msg:'',
 token:'',
 showMessage: false,
 animate: false,
auth:{
 email:'',
   password:'',
},
signup:{
 first_name:'',
   last_name:'',
   email:'',
   // phone:'12345',
   password:'',
   password_confirmation:'',

 },
 first_nameRules:[v => !!v || "First name required"],
 last_nameRules:[v => !!v || "Last name required"],
 emailRules:[v => !!v || "Email required"],
 pwdRules: [v => !!v || "Password required"],
     pwdConfirm: [
       v => !!v || "Confirm password",
       v => v === this.signup.password || "Passwords do not match"
     ],
}
},
mounted() {
    // Simulate loading data
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
methods: {
  startAnimation() {
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 1000); // Change the duration as per your requirement
    },
    Forgot_Password(){
      alert("SEND TO EMAIL FOR CHANGE THE PASSWORD")
      this.step=1
    },
LoginUser(){

          this.$router.push({ path: '/admin/Home'})
},

   SignupUser(){

                 this.step=1,
              this.signup.first_name='',
              this.signup.last_name='',
              this.signup.email ='',
              this.signup.phone='',
              this.signup.password = '',
              this.signup.password_confirmation=''
}
}
 }
</script>
 <style scoped>
 .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

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
    width: 550px;
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
.login__form {
 background-color: hsla(0, 0%, 10%, 0.1);
 border: 2px solid white;
 margin-inline: 1.5rem;
 padding: 2.5rem 1.5rem;
 border-radius: 1rem;
 backdrop-filter: blur(8px);
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
 .login__form {
   width: 432px;
   padding: 4rem 3rem 3.5rem;
   border-radius: 1.5rem;
 }
 .login__title {
   font-size: 2rem;
 }
}
 </style>
