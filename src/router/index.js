import { createRouter, createWebHistory } from 'vue-router'
import ApplicationLayout from '../views/ApplicationLayout.vue'

const routes = [
  {
    path: '/',
    name: 'ApplicationLayout',
    component: ApplicationLayout,

    children : [
      {
        path: 'kosar',
        component: () => import('../views/CartComponent.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Frontpage',
    component: () => import('../views/Frontpage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
