import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: '#ffffff',
        primary: '#00918e',
        secundary: '#110133'
      }
    }
  }
})
