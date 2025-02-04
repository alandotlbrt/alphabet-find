import './assets/main.css'
import './assets/cursor.css'
import { createApp } from 'vue'
import App from './App.vue'
import home from './components/home_page.vue'


const app = createApp(App)


app.component('home_page', home)

app.config.devtools = false
app.config.productionTip = false

if (typeof window !== 'undefined') {
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__ = undefined;
}

app.mount('#app')