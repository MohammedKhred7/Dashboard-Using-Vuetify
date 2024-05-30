/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import VueAxios from 'vue-axios'
import Axios from 'redaxios'
// import { Loader } from '@googlemaps/js-api-loader'

export function registerPlugins (app) {
  loadFonts()
  app
  .use(VueAxios,Axios)
    .use(vuetify)
    .use(router)
}

