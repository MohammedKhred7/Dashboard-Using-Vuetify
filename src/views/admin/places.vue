<template>
  <v-app >
  <!-- <img src="/u.jpg" alt="login image" class="login__img"> -->
    <SideBare />
    <v-main>
      <v-container class="px-6 mt-n2" >
        <br> 
        <v-row>

          <v-col  class="mt-n4" col="12"  >
            <h3 style="color: rgb(22, 22, 22); text-align: center;" >Places</h3>
              <div class="search">
               <input type="text"  placeholder=" search for owner" >
              <button type="submit"  >search</button>
            </div>

              <v-window v-model="step">
                <v-window-item :value="2">
                  <div class="info">
        <row  class="login-card" >
           <h1 class="login__title" style="color: #F1F6F9;">information of the place</h1>
           <br>
<div class="group">
               <v-text-field  style="color: aliceblue; margin-bottom: 5px; margin: 0 10px; color: #F1F6F9; " :class="{ 'animated': animate }"
      @focus="startAnimation" 
                 label="Name"
                 type="text"
                 :rules="emailRules"
               ></v-text-field>

             <v-select style="color: aliceblue; margin-bottom: 5px; margin: 0 10px;" :class="{ 'animated': animate }"
                @focus="startAnimation" 
                v-model="selectedOption"
                :items="category"
                item-title="category_title"
                item-value="value" 
                label="Select an Categories"
              ></v-select>

                <v-select style="color: aliceblue; margin-bottom: 5px; margin: 0 10px;" :class="{ 'animated': animate }"
      @focus="startAnimation" 
    v-model="select"
    :items="owner"
    item-title="owner_name"
    item-value="value" 
    label="Select an Owners "
  ></v-select> 
              </div>
        <div class="group">
        <v-text-field   style="color: aliceblue; margin-bottom: 5px; margin: 0 10px;" :class="{ 'animated': animate }"
      @focus="startAnimation" 
                 label="Address"
                 type="text"
                :rules="pwdRules"
                ></v-text-field>
                <v-file-input   style="color: aliceblue; margin-bottom: 5px;margin: 0 10px; color: #F1F6F9;" :class="{ 'animated': animate }"
      @focus="startAnimation" 
                 label="Images"
                 accept=".jpg, .jpeg, .png"
                 multiple
                 prepend-icon="mdi mdi-camera"
                ></v-file-input>
                <v-file-input   style="color: aliceblue; margin-bottom: 5px;margin: 0 10px; color: #F1F6F9;" :class="{ 'animated': animate }"
      @focus="startAnimation" 
                 label="Images"
                 accept=".jpg, .jpeg, .png"
                 multiple
                 prepend-icon="mdi mdi-camera"
                ></v-file-input>
              </div>
              <div class="group">
                <v-textarea style="color: aliceblue; margin-bottom: 5px;margin: 0 10px; color: #F1F6F9;" :class="{ 'animated': animate }"
      @focus="startAnimation" 
          label="Description"
          rows="3"
          variant="filled"
          auto-grow
          shaped
        ></v-textarea></div>
        <div class="group">
               <v-text-field  style="color: aliceblue; margin-bottom: 5px; margin: 0 10px; color: #F1F6F9; " :class="{ 'animated': animate }"
      @focus="startAnimation" 
                 label="Longitude"
                 type="text"
                 :rules="emailRules"
               ></v-text-field>

               <v-text-field  style="color: aliceblue; margin-bottom: 5px; margin: 0 10px; color: #F1F6F9; " :class="{ 'animated': animate }"
      @focus="startAnimation" 
                 label="Latitude"
                 type="text"
                 :rules="emailRules"
               ></v-text-field>

               <v-text-field  style="color: aliceblue; margin-bottom: 5px; margin: 0 10px; color: #F1F6F9; " :class="{ 'animated': animate }"
      @focus="startAnimation" 
                 label="Zome"
                 type="text"
                 :rules="emailRules"
               ></v-text-field>
              </div>
              

        </row>
        </div>
        </v-window-item>
        <v-window-item  :value="3">
        <v-row>
          <v-col>
            <v-card class="login__form2"   >
              <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>
  
                  <div class="login__box-input">
                     <input type="email"  class="login__input" placeholder=" ">
                     <label for="login-email" class="login__label">Longitude</label>
                  </div>
               </div>
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>
  
                  <div class="login__box-input">
                     <input type="email"  class="login__input" placeholder=" " >
                     <label for="login-email" class="login__label">Latitude</label>
                  </div>
               </div>
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>
  
                  <div class="login__box-input">
                     <input type="email"  class="login__input" placeholder=" " >
                     <label for="login-email" class="login__label">Zome</label>
                  </div>
               </div>
               <br>
               <button type="submit"  class="login__button2">delete</button>
               <button type="submit"  class="login__button2">update</button>
              <br>
            </v-card>
          </v-col>
        </v-row>
        </v-window-item>
        <v-window-item :value="1">
        <v-card class="login__form" >
              <Map />
            </v-card>
          </v-window-item>
            </v-window>
            <div style="display: flex; margin-top: 20px;" >
            <button  @click="step=2" class="login__button2">Add</button>
            <button   @click="step=3" class="login__button2">Edit</button>
            <button  class="login__button2">delete</button>
          </div>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBare from "@/components/SideBare.vue";
import Map from "@/components/Map.vue"

</script>
<script>
import axios from 'axios';
export default {
data () {
return{
step: 1,
msg:'',
showMessage: false,
animate: false,
loading: false,
ID:'',
category:[],
// selectedOption:'',
BLOCK:false,
activeIndex: null,
token: localStorage.getItem('token'),
owner:[],
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
  getCategory() {
      axios.request({
      url: "http://127.0.0.1:8000/api/admin/categories",
      method: "get",
       headers: {
        Authorization: "Bearer " + this.token
       }
      })
      .then(response=> {
       if (response.data.status == true) {
        console.log(response.data);
          this.category = response.data.data;
       }
       })
        .catch(error => {
      console.error(error);
    });
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
          this.owner = response.data.data;
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
},
components: {
  SideBare,
  Map,
},
created() {
 console.log(this.token);
 this.getCategory() 
 this.getOwners();

      }
};
</script>
<style scoped>
.group{
  display: flex;
}
/* butten animation and style in login */

.animated {
  margin: 10px 10px;
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
.con{

  display: block;
  position: absolute;
  right: 20px;
}
.icon{
  padding: 0 20px;
}
.list{
  background-color: hsla(0, 0%, 10%, 0.1); 
border: 2px solid white;
 backdrop-filter: blur(8px);
}

.list :hover{
  background: rgb(219, 219, 219);
  box-shadow: 20px black;
  
}
.login__button {
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #00cce2;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  color: white;
}
.login__button2 {
  width: 40%;
  margin: 0 20px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #00cce2;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5rem;
  color: white;
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
  left: 0;
  top: 13px;
  font-weight: medium;
  transition: top 0.3s, font-size 0.3s;
  color: beige;
}
.login__form {
  background-color: #003f46;
  border: 2px solid #00cce2;
  margin-inline: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  width: 94%;
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
.avatar{
top: 30px;
  position: absolute;
  right: 300px;
}
.divvv{
  background-color: #003f46;
border: 2px solid white;
border-radius: 20px;
padding: 39px 42px ;
}

.divv{
  background-color: #003f46;
border: 2px solid white;
border-radius: 20px;
padding: 48px 30px ;
}
.div{
  padding: 40px 40px;
  border-radius: 20px;
background-color: #003f46;
border: 2px solid white;
}
.login__form2 {
  background-color: #003f46;
  border: 2px solid #00cce2;
  margin-inline: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  width: 500px; height: 300px;
}
.info {
  background-color: #002738;
  margin-inline: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  width: 90%; height: 100%;
}
.login__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
