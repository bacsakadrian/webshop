import { createRouter, createWebHistory } from 'vue-router'
import ApplicationLayout from '../views/layouts/ApplicationLayout.vue'

const routes = [
  {
    path: '/',
    redirect: 'kezdolap',
    name: 'ApplicationLayout',
    component: ApplicationLayout,

    children : [
      {
        path: 'kezdolap',
        component: () => import('@/views/pages/Frontpage.vue')
      },
      {
        path: 'kosar',
        component: () => import('@/views/CartComponent.vue')
      },
      {
        path: 'kapcsolat',
        component: () => import('@/views/pages/Contact.vue')
      },
      {
        path: 'targonca-uzletag-motive',
        component: () => import('@/views/pages/Motive.vue')
      },
      {
        path: 'helyhezkotott-uzletag-reserve',
        component: () => import('@/views/pages/Reserve.vue')
      },
      {
        path: 'szerviz',
        component: () => import('@/views/pages/Service.vue')
      },
      {
        path: 'magyarorszagi-cegtortenet',
        component: () => import('@/views/pages/CompanyHistory.vue')
      },
      {
        path: 'regisztracio',
        component: () => import('@/views/pages/Registration.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
