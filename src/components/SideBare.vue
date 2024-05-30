<template>
  <v-navigation-drawer v-model="drawer" style=" background-color:#012e33; border: 1px solid rgb(255, 255, 255); " class="rounded-e-xl">
    <v-sheet color="#6930" style="border-color: aliceblue; border: 10px; box-shadow: 20px white;"  class="pa-4 rounded-te-xl text-center">
      <v-progress-circular
        model-value="80"
        color="#00cce2"
        :size="120"
        :width="2"
        class=""
      >
      <v-img
      width="80px"
        src="/em.png"
      />

      </v-progress-circular>

      <div class="mt-4 font bold"  style="color: aliceblue;">Admin</div>
      <span class="mb-6 text-caption font bold" style="color: aliceblue;">admin@gmail.com</span>
    </v-sheet>

    <v-list class="list">
      <router-link to="/admin/home" class="button">
      <v-list-item >

          <v-icon  color="#00cce2">mdi mdi-home-outline</v-icon>
        <v-list-item-title class="li" >Dashboard</v-list-item-title>
      </v-list-item>
    </router-link>

    <router-link to="/admin/categroy" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-chart-bubble</v-icon>
        <v-list-item-title  class="li">Categories</v-list-item-title>
      </v-list-item>
    </router-link>

    <router-link to="/admin/places" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-city</v-icon>
        <v-list-item-title  class="li" >Places</v-list-item-title>
      </v-list-item>
    </router-link>

   <router-link to="/admin/users" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-account-circle</v-icon>
        <v-list-item-title  class="li">Users</v-list-item-title>
      </v-list-item>
    </router-link>

    <router-link to="/admin/owners" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-account-check</v-icon>
        <v-list-item-title  class="li">Owners</v-list-item-title>
      </v-list-item>
    </router-link>

    <router-link to="/admin/style" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-source-merge</v-icon>
        <v-list-item-title  class="li">Anther style</v-list-item-title>
      </v-list-item>
    </router-link>

    <router-link to="/admin/Generate_Reports" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-comment-processing</v-icon>
        <v-list-item-title  class="li">Comments</v-list-item-title>
      </v-list-item>
    </router-link>

    <router-link to="/admin/confirmation" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-ticket</v-icon>
        <v-list-item-title  class="li">Offers</v-list-item-title>
      </v-list-item>
    </router-link>

    <router-link to="/" class="button">
      <v-list-item>
          <v-icon color="#00cce2">mdi mdi-ticket</v-icon>
        <v-list-item-title  class="li">Logout</v-list-item-title>
      </v-list-item>
    </router-link>

    </v-list>
    <div style="position: relative; z-index: 9999" class="mt-2">
      <v-img src="/map.png" contain max-height="100"></v-img>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    click:null,
  }),
};

</script>
<style >

	.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			padding: 0.3rem 0;
  }
  .icon:hover{
    box-shadow: 20px black;
  color: rgb(255, 255, 255);
  }

.list :hover{
  background:#003f46;
  box-shadow: 20px black;
  color: #00cce2;

}
.li{
  position: absolute;
top: 14px;
left: 49px;
  color: rgb(255, 255, 255);
}
</style>
