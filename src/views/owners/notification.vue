<template>
      
  <div  id="c"  >
    <SideBare2 />
    <v-card>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
      <v-tab :value="1">Landscape</v-tab>
      <v-tab :value="2">City</v-tab>
      <v-tab :value="3">Abstract</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item :value="1">
        <h1>Replaces Comment</h1>
      <v-icon class="ri-user-3-line login__icon" ></v-icon>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay</p>
    </section>
  </div>
      <br>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay</p>
    </section>
  </div>
      <br>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple jkjojljljhjb</p>
    </section>
  </div>
      </v-window-item>

      <v-window-item :value="2">
        <h1>Replaces Comment</h1>
      <v-icon class="ri-user-3-line login__icon" ></v-icon>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay</p>
    </section>
  </div>
      <br>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay</p>
    </section>
  </div>
      <br>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple jkjojljljhjb</p>
    </section>
  </div>
      </v-window-item>

      <v-window-item :value="3">
        <h1>Replaces Comment</h1>
      <v-icon class="ri-user-3-line login__icon" ></v-icon>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay</p>
    </section>
  </div>
      <br>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple Pay</p>
    </section>
  </div>
      <br>
      <div class="box">
    <header class="header">
      <v-icon class="delete">mdi mdi-close</v-icon>
      <div class="main">
        <v-icon class="icon" style="color: white;">mdi mdi-cached</v-icon>Replace To	 mohammed
      </div>
      <time>
        1:30 PM
      </time>
    </header>
    <section class="content">
      <p>"Chase Sapphire Reserve" is ready for Apple jkjojljljhjb</p>
    </section>
  </div>
      </v-window-item>
    </v-window>
  </v-card>
      
  </div>
</template>
<script>
import SideBare2 from "@/components/SideBare2.vue";
export default {
name: "BarChart",
data: () => ({
}),
components:{
    SideBare2,
  }
};
</script>

<style scoped>
.delete{
  position: absolute;
  right: 6px;
  color: rgb(0, 0, 0);
  top: 4px;
}
.delete:hover{
color: rgb(196, 0, 0);
}
#c{
display: grid;
justify-content: center;
margin: 30px;
}
.box {
position: relative;
display: inline-block;
padding: 20px 10px ;
height: 100%;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
border-radius: 5px;
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
margin: 10px ;
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
margin-top: 15px;
margin-bottom: 5px;
}
.box:hover {
-webkit-transform: scale(1.25, 1.25);
transform: scale(1.25, 1.25);
}

.box:hover::after {
  opacity: 1;
}

.login__icon {
font-size: 1.25rem;

}

.header {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #aaa;
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

.icon {
width: 25px;
height: 25px;
margin-right: 8px;
border-radius: 5px;
background-color: #222;
display: block;
}

</style>