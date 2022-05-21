import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';

export default createRouter({
	history: createWebHistory(),
	scrollBehavior: () => ({top: 0}),
	routes: [
		{
			path: '/',
			component: Home
		}
	]
});