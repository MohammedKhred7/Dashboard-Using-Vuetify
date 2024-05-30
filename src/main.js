/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import App from './App.vue'
// Composables

const app = createApp(App)

registerPlugins(app)


app.mount('#app')
