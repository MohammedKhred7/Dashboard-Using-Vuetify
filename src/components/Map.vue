<template>
  <GoogleMap
  api-key="AIzaSyB-q8V0_V2ACAyOzj0YV4uEsau_UgB79xo"
  style="height:calc(70vh - 77px) ; width: 100%;"
  :center="center"
  :zoom="15"
  @click="handleClick()"
  >
    <Marker :options="{ position:'markerPosition' }" />
    <CustomMarker :options="{ position: { lat: 14.54, lng: 49.10 }, anchorPoint: 'BOTTOM_CENTER' }">
      <div style="text-align: center">
        <div style="font-size: 1.rem">mohammed</div>
        <v-avatar size="auto">
          <v-img
          width="50px"
            src="/MOHAMMED.jpg"
          />
        </v-avatar>
      </div>
    </CustomMarker>
  </GoogleMap>
  <br>
  <v-btn
        class="ma-2"
        color="blue" >
      Get My Location
        <v-icon
          icon="mdi mdi-checkbox-marked-circle"
          end
        ></v-icon>
      </v-btn>
</template>

<script setup>
import { GoogleMap, Marker,CustomMarker  } from 'vue3-google-map'

</script>
<script>
import { GoogleMap, Marker,CustomMarker  } from 'vue3-google-map'
export default {
  data() {
    return {
      lat: '',
      lng: '',
      markerPosition: { lat: 14.54, lng: 49.13 },
      center :{ lat: 14.54, lng: 49.13 }
    }
  },
  methods: {
    handleClick(event) {
      this.lat = event.latLng.lat()
      this.lng = event.latLng.lng()
      this.markerPosition = event
    },
  },
};

</script>
