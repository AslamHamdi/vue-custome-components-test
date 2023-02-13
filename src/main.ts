import { createApp } from 'vue'
//search?q=entry
// @ts-ignore  
import mindlens from 'mindlens-components'
import 'mindlens-components/styles.css'
import './style.css'
import App from './App.vue'

createApp(App)
.use(mindlens)
.mount('#app')
