import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import { router } from './router'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase'

let app = createApp(App)

app
    .use(VueFire, {
        firebaseApp
    })
    .use(router)
    .use(mdiVue, {
        icons: mdijs
    })
    .mount('#app')

