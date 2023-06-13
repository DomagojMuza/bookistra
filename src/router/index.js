import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'smjestaj',
      component: () => import('../views/Smjestaj.vue')
    },
    {
      path: '/kupci',
      name: 'kupci',
      component: () => import('../views/Kupci.vue')
    },
    {
      path: '/rezervacije',
      name: 'rezervacije',
      component: () => import('../views/Reservation.vue')
    },
    {
      path:'/pricelist/:_id',
      name : 'pricelist',
      props: true,
      component: () => import("../views/pricelist/details.vue"),
    },
  ]
})

export default router
