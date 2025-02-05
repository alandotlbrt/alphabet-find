import { createMemoryHistory, createRouter } from 'vue-router'
import home from "../views/home_page.vue"
import game from "../views/game_page.vue"

const routes = [
  { path: '/', component: game },
  { path: '/play', component: home },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
