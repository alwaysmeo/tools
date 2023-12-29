'use strict'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			meta: { title: 'Home' },
			component: () => import('../views/Home.vue')
		}
	]
})

export default router
