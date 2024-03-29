import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBootstrap, faCss3Alt, faFreeCodeCamp, faGitAlt, faGithub, faHtml5, faLaravel, faLinkedin, faPhp, faSquareJs, faVuejs, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
library.add(faHtml5,faCss3Alt,faSquareJs,faVuejs,faBootstrap,faPhp,faLaravel,faGitAlt,faFreeCodeCamp,faDatabase,faBars, faLinkedin, faGithub, faWhatsapp)

import App from './App.vue'
import router from './router'
import { faBars, faDatabase } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
