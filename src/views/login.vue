<template>
   <img src="../assets/map.png" alt="login image" class="login__img">
   <v-window v-model="step">
    <v-window-item :value="1">
  <div class="login">
         <row  class="login__form" >
            <h1 class="login__title">Login</h1>

              <div class="col">
               <v-flex class="login__box-input2">
                <v-text-field  v-model="auth.email"
                  label="Email"
                  type="email"
                  :rules="emailRules"
                ></v-text-field>
               </v-flex>
              </div >

              <div class="col">
               <v-flex  class="login__box-input2">
                 <v-text-field  v-model="auth.password"
                  label="Password"
                  type="password"
                 :rules="pwdRules"
                 ></v-text-field>
                </v-flex>
                <br>

            </div>
            <div class="login__check">
               <div class="login__check-group">
                  <input type="checkbox" class="login__check-input" id="login-check">
                  <label for="login-check" class="login__check-label" >Remember me</label>
               </div>

               <btu  class="login__forgot" tile outlined dark @click="step=3">Forgot Password?</btu>
            </div>

            <button @click.prevent="LoginUser()" class="login__button">Login</button>

            <p class="login__register" style="font-size: 16px;">
               Don't have an account? <v-btn tile outlined dark @click="step=2" style="background: none; border: none;color: aliceblue" >register</v-btn>
            </p>
          </row>
      </div>
    </v-window-item>
    <v-window-item :value="3">
  <div class="login">
         <form  class="login__form">
            <h1 class="login__title">Forgot Password</h1>
<span class="w-full text-red-500" ></span>
            <div class="login__content">
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email"  class="login__input" placeholder=" " >
                     <label  class="login__label">Email</label>
                  </div>
               </div>

            </div>
            <button type="submit"  class="login__button">Send</button>
            <button  class="login__button" @click="step=1">Concel</button>
         </form>
      </div>
    </v-window-item>
    <v-window-item :value="2">
  <div class="login">
         <form class="login__form" style="width: 500px;">
            <h1 class="login__title">Register</h1>
            

            <div style=" width: 100%;">
              <div class="col">
               <v-flex   class="login__box-input2">
                <v-text-field  v-model="signup.first_name"
                  label="First name"
                  type="text"
                  :rules="first_nameRules"
                ></v-text-field>
               </v-flex>
              </div>

              <div class="col">
               <v-flex  class="login__box-input2">
                <v-text-field v-model="signup.last_name"
                  label="Last name"
                  type="text"
                  :rules="last_nameRules"
                ></v-text-field>
               </v-flex>
              </div >

              <div class="col">
               <v-flex class="login__box-input2">
                <v-text-field  v-model="signup.email"
                  label="Email"
                  type="email"
                  :rules="emailRules"
                ></v-text-field>
               </v-flex>
              </div >

               <!-- <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password"  class="login__input" placeholder=" " v-model="signup.password">
                     <label :rules="signup.pwdRules" class="login__label">Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div> -->
             <div class="col">
               <v-flex  class="login__box-input2">
                 <v-text-field  v-model="signup.password"
                  label="Password"
                  type="password"
                 :rules="pwdRules"
                 ></v-text-field>
                </v-flex>
             </div >

           <div class="col">
           <v-flex  class="login__box-input2">
            <v-text-field  v-model="signup.password_confirmation "
            label="Confirm Password"
            type="password"
            :rules="pwdConfirm"
            ></v-text-field>
           </v-flex>
              </div >
            </div>
            <button @click.prevent="SignupUser()"  class="login__button">Sign Up</button>

            <p class="login__register" style="font-size: 16px;">
               You have an account?  <v-btn tile outlined dark @click="step=1" style="background: none; border: none;color: aliceblue;" >Login</v-btn>
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
methods: {
 LoginUser(){
      axios.post('http://127.0.0.1:8000/api/login',this.auth)
    //  .then(console.log(this.auth))
    .then(response=>{
        console.log(response);
        if (response.data.status == true) {
          alert(response.data.message)
        }
        else{
          alert(response.data.error)
        }
      })
    },

    SignupUser(){

      axios.post('http://127.0.0.1:8000/api/register',this.signup )
      .then(response=>{
                console.log(response);
                if(response.data.status == true){
                  alert(response.data.message)
               this.signup.first_name='',
               this.signup.last_name='',
               this.signup.email ='',
               this.signup.phone='',
               this.signup.password = ''
                }
                else{
                 alert(response.data.error) }
            })
  //     let self = this;
  //  let result = axios.post("http://127.0.0.1:8000/owner/register", this.singup)
  //  if(result.status == true){
  //   self.$router.push({
  //     path: '/admin/Home'})
  //   alert("save")
  // }
}
}
  }
</script>
  <style scoped>
/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
/*=============== VARIABLES CSS ===============*/
:root {
  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --white-color: hsl(0, 0%, 100%);
  --black-color: hsl(0, 0%, 0%);
  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: "Poppins", sans-serif;
  --h1-font-size: 1.75rem;
  --normal-font-size: 1rem;
  --small-font-size: .813rem;
  /*========== Font weight ==========*/
  --font-medium: 500;
}

/*=============== BASE ===============*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body,
input,
button {
  font-size: normal;
  font-family:body;
}

body {
  color: white;
}

input,
button {
  border: none;
  outline: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
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
}
.login__forgot:hover {
  text-decoration: underline;
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
}
.login__register v-btn {
  color: white;
  font-weight: medium;
}
.login__register v-btn:hover {
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
  