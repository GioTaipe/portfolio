import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css'

import i18n from './i18n'   

import 'vuetify/styles'

// Configuración de temas
import { themes } from './themes'

// Crear Vuetify
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})


const app = createApp(App)

// Pon la instancia en globalProperties para acceder luego
app.config.globalProperties.$vuetify = vuetify

app.use(i18n)
app.use(vuetify)
app.mount('#app')
