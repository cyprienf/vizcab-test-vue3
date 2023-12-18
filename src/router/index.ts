import { createRouter, createWebHistory } from 'vue-router'
import BuildingsView from '@/views/BuildingsView.vue'
import BuildingDetails from '@/views/BuildingDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buildings-view',
      component: BuildingsView
    },
    {
      path: '/details/:id',
      name: 'building-details',
      component: BuildingDetails
    }
  ]
})

export default router
