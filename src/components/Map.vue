<template>
  <GoogleMap
  api-key="AIzaSyC_GNHBZA8Jw8HROjgf_lg_2FcAZRJGEkI"
  style="height:calc(70vh - 77px) ; width: 100%;"
  :center="center"
  :zoom="15"
  @click="handleClick()"
  >
    <Marker :options="{ position:'markerPosition' }" />
    <CustomMarker :options="{ position: { lat: 14.54, lng: 49.10 }, anchorPoint: 'BOTTOM_CENTER' }">
      <div style="text-align: center">
        <div style="font-size: 1.125rem">mohammed</div>
        <img src="https://vuejs.org/images/logo.png" width="50" height="50" style="margin-top: 8px" />
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
      <v-text-field
    color="success"
    class="ma-2"
    v-model="lat" label="Latitude" 
    disabled
    loading
  ></v-text-field>
  <v-text-field
  class="ma-2"
    color="success"
    v-model="lng" label="Longitude"
    disabled
    loading
  ></v-text-field>
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
