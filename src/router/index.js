import { createRouter, createWebHistory } from 'vue-router'
import { verify, version } from 'jsonwebtoken-esm';

console.log(version);
import store from '@/store'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [

		{
			path: '/',
			name: 'smjestaj',
			component: () => import('../views/Smjestaj.vue'),
			beforeEnter: guardMyroute
		},
		{
			path: '/kupci',
			name: 'kupci',
			component: () => import('../views/Kupci.vue'),
			beforeEnter: guardMyroute
		},
		{
			path: '/rezervacije',
			name: 'rezervacije',
			component: () => import('../views/Reservation.vue'),
			beforeEnter: guardMyroute
		},
		{
			path: '/pricelist/:_id',
			name: 'pricelist',
			props: true,
			component: () => import("../views/pricelist/details.vue"),
			beforeEnter: guardMyroute
		},
		{
			path: '/login',
			name: 'login',
			props: true,
			component: () => import("../views/Login.vue"),
		},
	]
})

function guardMyroute(to, from, next) {
	store.token = localStorage.getItem('token')

	if (store.token === null || store.token === undefined) next('/login')
	try {
		let decoded = verify(store.token, 'webappprojekt'.toString('utf-8'));
		if (decoded) {
			next()
		} else {
			localStorage.clear()
			next('/login');
		}
	} catch (error) {
		localStorage.clear()
		next('/login');
	}

}

export default router
