import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '../store'
const routes: Array<RouteRecordRaw> = [
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/home/home.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/about/about.vue')
	},
	{
		path: '/activity',
		name: 'activity',
		component: () => import('../views/activity/activity.vue')
	},
	{
		path: '/agenda',
		name: 'agenda',
		component: () => import('../views/agenda/agenda.vue')
	},
	{
		path: '/celebrity',
		name: 'celebrity',
		component: () => import('../views/celebrity/celebrity.vue')
	},
	{
		path: '/exhibitor',
		name: 'exhibitor',
		component: () => import('../views/exhibitor/exhibitor.vue')
	},
	{
		path: '/live',
		name: 'live',
		component: () => import('../views/live/live.vue')
	},
	{
		path: '/navigator',
		name: 'navigator',
		component: () => import('../views/navigator/navigator.vue')
	},
	{
		path: '/news',
		name: 'news',
		component: () => import('../views/news/news.vue')
	},
	{
		path: '/result',
		name: 'result',
		component: () => import('../views/result/result.vue'),
	},
	{
		path: '/center',
		name: 'center',
		component: () => import('../views/center/center.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/Spec/Login.vue'),
	},
	{
		path: '/ai',
		name: 'ai',
		component: () => import('../views/aiAsk/ai.vue'),
	},
	{
		path: '/comm',
		name: 'comm',
		component: () => import('../views/comm/comm.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/login/components/register.vue'),
	},
	{
		path: '/',
		redirect: '/login'
	}
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
let token = store.getters.getToken;
router.beforeEach((to, from, next) => {
	if (token) { // 如果有token
		next()
	} else { // 如果有则放行
		if (to.name == "login" || to.name == "register") { // 判断是否要去登陆界面如果是则放行
			next()
		} else { // 否则直接跳转登录界面
			alert('注册并登陆后浏览界面~')
			router.push('login')
		}
	}
})
export default router