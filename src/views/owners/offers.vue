<template>

  <div  id="c"  >
      <SideBare2 />
      <h1>{{categories}}</h1>
      <v-icon class="ri-user-3-line login__icon" ></v-icon>
      <v-window v-model="step" >
        <v-window-item :value="1">
      <v-list class="listt"  >

  <v-list-item  >
      <div class="box">
    <header class="header">
      <v-img src="/5.jpg"  height="200px" style="margin-top: 20px;
      border-radius: 20px;width: 300px; margin-left: 40px;"></v-img>
      <time>
        1:30 PM
      </time>
    </header>
    <br>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay ndkenfk
        femfm mkf kfmkce femk kef l,sw lwdm mfkf frfrkf frfk rkf
      </p>
    </section>
    <br>
          <header class="headerr">
              <div style="margin-top: 2px;">
              435 <v-icon class="i" color="blue-lighten-2"> mdi mdi-thumb-up-outline </v-icon>
              23 <v-icon class="i"  color="red-lighten-2"> mdi mdi-thumb-down-outline</v-icon></div>
     <v-btn
      height="40px"
      width="40px"
      color="red" icon="mdi mdi-delete-outline"

      style="margin-right: 30px; margin-top: -5px;" ></v-btn>
          </header>
  </div>
      <br>
  </v-list-item  >

  <v-list-item  >
      <div class="box">
    <header class="header">
      <v-img src="/2.jpg"  height="200px" style="margin-top: 20px;
      border-radius: 20px;width: 300px; margin-left: 40px;"></v-img>
      <time>
        1:30 PM
      </time>
    </header>
    <br>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay ndkenfk
        femfm mkf kfmkce femk kef l,sw lwdm mfkf frfrkf frfk rkf
      </p>
    </section>
    <br>
          <header class="headerr">
              <div style="margin-top: 2px;">
              435 <v-icon class="i" color="blue-lighten-2"> mdi mdi-thumb-up-outline </v-icon>
              23 <v-icon class="i"  color="red-lighten-2"> mdi mdi-thumb-down-outline</v-icon></div>
     <v-btn
      height="40px"
      width="40px"
      color="red" icon="mdi mdi-delete-outline"

      style="margin-right: 30px; margin-top: -5px;" ></v-btn>
          </header>
  </div>
      <br>
  </v-list-item  >

  <v-list-item  >
      <div class="box">
    <header class="header">
      <v-img src="/4.jpg"  height="200px" style="margin-top: 20px;
      border-radius: 20px;width: 300px; margin-left: 40px;"></v-img>
      <time>
        1:30 PM
      </time>
    </header>
    <br>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay ndkenfk
        femfm mkf kfmkce femk kef l,sw lwdm mfkf frfrkf frfk rkf
      </p>
    </section>
    <br>
          <header class="headerr">
              <div style="margin-top: 2px;">
              435 <v-icon class="i" color="blue-lighten-2"> mdi mdi-thumb-up-outline </v-icon>
              23 <v-icon class="i"  color="red-lighten-2"> mdi mdi-thumb-down-outline</v-icon></div>
     <v-btn
      height="40px"
      width="40px"
      color="red" icon="mdi mdi-delete-outline"

      style="margin-right: 30px; margin-top: -5px;" ></v-btn>
          </header>
  </div>
      <br>
  </v-list-item  >



      </v-list>
      </v-window-item >

      <v-window-item :value="2">
          <v-list class="replace_to"  >
      <div class="replace">
    <header class="header">
      <div class="main">
      <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
          <v-container fluid>
         <v-textarea
            label="enter text"
           ></v-textarea>
         </v-container>
          <div style="display: flex;">
           <button type="submit" @click="step=1" class="login__button3">Cancel</button>
           <button type="submit"  class="login__button3">Save</button>
          </div>
  </div>
      <br>
  </v-list >
  </v-window-item >
</v-window >


  </div>

</template>
<script>
import SideBare2 from "@/components/SideBare2.vue";
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
  getData() {
      axios.request({
      url: "http://127.0.0.1:8000/api/owner/comments",
      method: "get",
       headers: {
        Authorization: "Bearer " + this.token
       }
      })
      .then(response=> {
        alert("good")
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
components:{
  SideBare2,
},
created() {
            this.getData();

        }
};
</script>
<style scoped>
#c{
display: grid;
justify-content: center;
margin: 30px;
}
.listt{
  text-align: -webkit-center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
margin: 10px  10px;
width: 650px;
height: 620px;
background-color: #003f46;

}
.box {
position: relative;
display: inline-block;
padding: 10px 10px ;
width: 500px;
height: 400px;
box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px;
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
margin-top: 10px ;
background-color: white;
}
.replace{
position: relative;
display: inline-block;
padding: 10px 10px ;
width: 400px;
height: 100%;
box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 2px;
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
margin-top: 10px ;
}
.login__button3 {
width: 40%;
padding: 1rem;
margin: 0 30px;
border-radius: 0.5rem;
background-color: rgb(194, 194, 194);
font-weight: bold;
cursor: pointer;
}

.replace_to{
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
margin: 10px  10px;
width: 100%;
height: 100%;
background-color: white;

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
opacity: 0;
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

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
margin: 5px;
}
.box:hover {
-webkit-transform: scale(1.10, 1.10);
transform: scale(1.10, 1.10);
}

.box:hover::after {
  opacity: 1;
}

.login__icon {
font-size: 1.25rem;

}

.header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #aaa;
}
  .headerr {
  display: flex;
  justify-content: space-between;
  color: #aaa;
}

.content{
      margin: 10px;
  }
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  color: #aaa;
  font-size: 0.9rem;
}


.i{
  margin-right: 12px;
  margin-left: 3px;
}


</style>