import { createRouter, createWebHistory } from 'vue-router'
import ApplicationLayout from '../views/layouts/ApplicationLayout.vue'

const routes = [
  {
    path: '/',
    name: 'ApplicationLayout',
    component: ApplicationLayout,

    children : [
      {
        path: 'kosar',
        component: () => import('../views/CartComponent.vue')
      },
      {
        path: 'kapcsolat',
        component: () => import('../views/pages/Contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
