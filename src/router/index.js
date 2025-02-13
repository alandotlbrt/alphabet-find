import { createMemoryHistory, createRouter } from 'vue-router'
import home from "../views/home_page.vue"
import game from "../views/game_page.vue"
import failur from "../views/failur_page.vue"

const routes = [
  { path: '/', component: home, name : 'home' },
  { path: '/play', component: game, name: 'game'},
  { path: '/failur', component: failur, name: 'failur'},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
