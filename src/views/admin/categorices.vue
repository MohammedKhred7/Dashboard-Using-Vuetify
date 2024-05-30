<template>
  <v-app
    id="inspire">
  <!-- <img src="/u.jpg" alt="login image" class="login__img"> -->
    <SideBare />
    <v-main>
      <v-container class="px-6 mt-n2" >

        <v-row>
          <br> <br>
          <v-col  cols="12" sm="11" >
            <v-card class="login-card">
              <v-window v-model="step"  style="width:100%;height: 100%;">
          <v-window-item :value="1">
          <h1 class="login-title">CATEGORIES</h1>
              <div class="login__box">
                  <i class="ri-user-3-line login__icon" ></i>

                  <div class="login__box-input">
                     <input type="email"  class="login__input" placeholder=" " v-model="name">
                     <label for="login-email" class="login__label">Enter new categiroy</label>
                  </div>
               </div>
               <br>
               <button @click.prevent="addData()" class="login__button">Add</button>
               <div class="search">
             <input type="text"  placeholder=" search for user" v-model="search" >
            <button  @click.prevent="getSearch()" >search</button>
          </div>
              </v-window-item >

              <v-window-item :value="2">
                <h1 class="login-title">UPDATE NAME GATEGIORY</h1>
          <div class="login__box">
              <i class="ri-user-3-line login__icon" ></i>

              <div class="login__box-input">
                 <input type="email"  class="login__input" placeholder=" " v-model="name">
                 <label for="login-email" class="login__label">Enter new name categiory </label>
              </div>
           </div>
           <br>
           <button @click.prevent="updateData(categioryID)" class="login__button">save</button>
           <button @click="step=1" class="login__button">cancel</button>
          <br>

          </v-window-item >
              </v-window >
              <v-list class="list"   >
                  <v-list-item  >
                    <template v-slot:prepend >
                     <v-list-item-title class="li" >{{ 'mohammed' }}</v-list-item-title>
                     <div class="con">
                       <button  style="color: darkgoldenrod;" class="icon">UPDATE</button>
                       <button  style="color: red;"  class="icon">DELETE</button>
                    </div>
                       </template>
                       </v-list-item>
                       <v-list-item  >
                        <template v-slot:prepend >
                         <v-list-item-title class="li" >{{ 'Ahmed' }}</v-list-item-title>
                         <div class="con">
                           <button  style="color: darkgoldenrod;" class="icon">UPDATE</button>
                           <button  style="color: red;"  class="icon">DELETE</button>
                        </div>
                           </template>
                           </v-list-item>
                           <v-list-item  >
                            <template v-slot:prepend >
                             <v-list-item-title class="li" >{{ 'Salem' }}</v-list-item-title>
                             <div class="con">
                               <button  style="color: darkgoldenrod;" class="icon">UPDATE</button>
                               <button  style="color: red;"  class="icon">DELETE</button>
                            </div>
                               </template>
                               </v-list-item>
                               <v-list-item  >
                                <template v-slot:prepend >
                                 <v-list-item-title class="li" >{{ 'mohammed' }}</v-list-item-title>
                                 <div class="con">
                                   <button  style="color: darkgoldenrod;" class="icon">UPDATE</button>
                                   <button  style="color: red;"  class="icon">DELETE</button>
                                </div>
                                   </template>
                                   </v-list-item>
                                   <v-list-item  >
                                    <template v-slot:prepend >
                                     <v-list-item-title class="li" >{{ 'Saeed' }}</v-list-item-title>
                                     <div class="con">
                                       <button  style="color: darkgoldenrod;" class="icon">UPDATE</button>
                                       <button  style="color: red;"  class="icon">DELETE</button>
                                    </div>
                                       </template>
                                       </v-list-item>
              </v-list>
            </v-card>
          </v-col>


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
 categioryID:'',
 loading: false,
 token: localStorage.getItem('token'),
  categories:[],
  name:'',
     items:[],


  }
},
  methods:{
    gitID(cate){
this.categioryID=cate;
this.step=2;
    },
    getSearch() {
      axios.request({
      url: "http://127.0.0.1:8000/api/admin/categories/search/",
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
          this.categories = response.data.data;
       }
       else{
        alert("error get ")
       }
          // this.loading = false
        })
      },
    getData() {
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
          this.categories = response.data.data;
       }
       else{
        alert("error get ")
       }
          // this.loading = false
        })
      },
      addData() {
        axios
    .request({
      url: "http://127.0.0.1:8000/api/admin/categories",
      method: "POST",
       headers: {
        Authorization: "Bearer " + this.token,
       },
       data:{
        name:this.name
       }
      })
      .then(response=> {
       if (response.data.status == true) {
        console.log(response);
         alert(response.data.message);
         this.name=''

         // this.loading = false
       }
          else{
            alert("error")
          }
        })
      },
      updateData(cate) {
        axios
    .request({
      url: "http://127.0.0.1:8000/api/admin/categories/"+cate,
      method: "put",
       headers: {
        Authorization: "Bearer " + this.token,
       },
       data:{
        name:this.name
       }
      })
        .then(response => {
          if (response.data.status == true) {
          alert(response.data.message);
          this.categories = response.data.data;
          this.step=1;
         // this.loading = false
       }
          else{
            alert("error")
          }
        })
      },
      deleteData(cate) {
        let ok = confirm("Are you sure to delete the categiory ?");
                if (ok) {
        axios
    .request({
      url: "http://127.0.0.1:8000/api/admin/categories/"+cate,
      method: "delete",
       headers: {
        Authorization: "Bearer " + this.token,
       },
      })
        .then(response => {
          alert(response.data.message);
          this.categories = response.data.data;
          // this.loading = false
        })
      }
      },
    additem(){
      this.items.push(this.info)
       this.info={
      name:'',
      }
    },
  },
  components: {
    SideBare,
  },
  created() {
            this.getData();

        }
};
</script>
<style scoped>
.search{
 margin: 1px 1px;
 padding: 10px;
}
.search input{
 width: 75%;
margin: 10px 5px;
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
.li{
color: rgb(0, 0, 0);
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
  border-radius: 0.5rem;
  background:#ffffff;
  box-shadow: 20px black;
  font-weight: bold;
  cursor: pointer;
  box-shadow: #00cce2;
}

.list :hover{
  background: #00cce2;
}
.login__button {
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #00cce2;
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
  color: #ffffff;
  background-color: #00cce2;
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
  color: azure;
  position: absolute;
  left: 0;
  top: 13px;
  font-weight: medium;
  transition: top 0.3s, font-size 0.3s;
}
.login__form {
  color: #00cce2;
  background-color: #003f46;
  border: 2px solid #00cce2;
  margin-inline: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;

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
  background-color: hsla(0, 0%, 10%, 0.1);
border: 2px solid white;
backdrop-filter: blur(8px);
border-radius: 20px;
padding: 39px 42px ;
}
.login-title {
  text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #ffffff;
    animation: fade-in 0.5s ease-out;
  }

.divv{
  background-color: hsla(0, 0%, 10%, 0.1);
border: 2px solid white;
backdrop-filter: blur(8px);
border-radius: 20px;
padding: 48px 30px ;
}
.div{
  padding: 40px 40px;
  border-radius: 20px;
background-color: hsla(0, 0%, 10%, 0.1);
border: 2px solid white;
backdrop-filter: blur(8px);

}
.login__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
