import './assets/main.css'
import './assets/cursor.css'
import './assets/game.css'
import './assets/home.css'
import './assets/failur.css'
import './js/caroussel.js';
import './js/game/count';
import './js/game/timer';
import './js/game/game';
import './js/sound.js'
import { createApp } from 'vue'
import App from './App.vue'
import home from './views/home_page.vue'
import game from './views/game_page.vue'
import router from './router'




const app = createApp(App)


app.component('home_page', home)
app.component('game_page', game)


app.config.devtools = false
app.config.productionTip = false

if (typeof window !== 'undefined') {
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__ = undefined;
}

app.use(router)
app.mount('#app')


export default app