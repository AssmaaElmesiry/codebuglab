import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import "@fontsource/open-sans"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, fab)

import VueKinesis from "vue-kinesis";

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(VueKinesis)
    .mount('#app')