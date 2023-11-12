/* css */
import './css/main.css'
import './css/fonts.css'
import './css/loading_bar.css'
import './css/animation.css'

/* librares */
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import { VueFire } from 'vuefire'
import { createPinia } from "pinia";
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'
import VueConfetti from 'vue-confetti'

/* utils */
import { firebaseApp } from './firebase'
import { router } from './router'

/* initial */
import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()
let app = createApp(App)

app
    .use(VueFire, {
        firebaseApp
    })
    .use(mdiVue, {
        icons: mdijs
    })
    .use(VueConfetti)
    .use(VueCustomTooltip)
    .use(router)
    .use(pinia)
    .mount('#app')

