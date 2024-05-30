<template>
  <v-app
    id="inspire" style="background-color: whitesmoke;" >
    <!-- <img src="/u.jpg" alt="login image" class="login__img"> -->
    <SideBare />
    <v-main>
      <v-container class="px-6 mt-n2" fluid>
        <v-row>
          <br> <br>
          <v-col cols="12" sm="9" class="mt-n4" >
            <v-card class="div" style="margin:50px 10px ; padding: 50px 30px; ">

              <v-card-item class="text" style="margin: 0 180px;color: black;  "
              v-for="folder in folders"
                        :key="folder.title"
                        :title="folder.title" >
                <template v-slot:subtitle >{{folder.subtitle}} </template>
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
        src="/MOHAMMED.jpg"
      />
    </v-avatar>

    </v-progress-circular>
</v-sheet>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4" class="mt-n4">
            <v-card class="divvv">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5 mt-10">
                   Places
                  </v-card-title>

                  <v-card-subtitle class="text">548</v-card-subtitle>
                </div>
                <v-img src="/6.png" class="img_b"></v-img>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" class="mt-n4">
            <v-card class="div">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5 mt-10"> Owners </v-card-title>

                  <v-card-subtitle class="text" >620</v-card-subtitle>
                </div>
                <v-img src="/4.png" class="img_b" ></v-img>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" class="mt-n4">
            <v-card class="divv">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5 mt-10">
                    Users
                  </v-card-title>

                  <v-card-subtitle class="text">850</v-card-subtitle>
                </div>
                <v-img src="/map.png" class="img_b" ></v-img>
              </div>
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
export default {
  name: "BarChart",

  data: () => ({
    folders: [
      {
        subtitle: "Mohammed Salem Khred",
        title: "admin@gmail.com",
        img: "1.jpg",
      },
    ],
  }),
  components: {
    SideBare,
  },
};
</script>
<style scoped>
/* #inspire{
  background-color: hsla(0, 0%, 10%, 0.1);
backdrop-filter: blur(8px);
} */
.img_b{
  margin: 40px;
  height: 100px;
  width: 100px;
}
.text{
color: #00cce2;
 font-size: 25px;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
.avatar{
top: 30px;
  position: absolute;
  right: 300px;
}
.divvv{
  position: relative;
  height: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
color: #012e33;
}

.divv{
  position: relative;
  height: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
color: #012e33;
}
.div{
  position: relative;
  height:  200px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
color: #012e33;
}
.login__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
