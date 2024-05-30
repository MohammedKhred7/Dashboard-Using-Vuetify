<template>
  <v-app>
  <img src="/u.jpg" alt="login image" class="login__img">
    <SideBare2 />
    <v-main>
      <v-container class="px-6 mt-n2" >
        <br>
        <v-row>
          <v-col  class="mt-n4" col="12"  >
            <v-card class="login__form" >
              <Map />
            </v-card>
          </v-col>
        </v-row>
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
               <button type="submit"  class="login__button">Add</button>
              <br>
            </v-card>
          </v-col>

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
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBare2 from "@/components/SideBare2.vue";
import Map from "@/components/Map.vue";

</script>
<script>
export default {
  name: "BarChart",

  data: () => ({

      info:[{
        name:''
      }

  ],
     items:[],
    folders: [
      {
        subtitle: "John Doe",
        title: "john@gmail.com",
        img: "1.jpg",
      },
    ],

  }),
  methods:{
    additem(){
      this.items.push(this.info)
       this.info={
      name:'',
      }
    },
  },
  components: {
    Map,
    SideBare2,
  },
};
</script>
<style scoped>
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
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
}
.login__button2 {
  width: 40%;
  margin: 0 20px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5rem;
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
  background-color: hsla(0, 0%, 10%, 0.1);
  border: 2px solid white;
  margin-inline: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  backdrop-filter: blur(8px);
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
  background-color: hsla(0, 0%, 10%, 0.1);
border: 2px solid white;
backdrop-filter: blur(8px);
border-radius: 20px;
padding: 39px 42px ;
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
.login__form2 {
  background-color: hsla(0, 0%, 10%, 0.1);
  border: 2px solid white;
  margin-inline: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  width: 500px; height: 300px;
}
.login__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
