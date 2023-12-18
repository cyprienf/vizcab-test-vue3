import { createRouter, createWebHistory } from 'vue-router'
import BuildingsView from '@/views/BuildingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buildings-view',
      component: BuildingsView
    }
  ]
})

export default router
