import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '@/views/Goods/components/Add.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/views/Login') },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    children: [
      { path: '/user', component: () => import('@/views/User') },
      { path: '/role', component: () => import('@/views/Role') },
      { path: '/permissions', component: () => import('@/views/Permissions') },
      {
        path: '/goods',
        component: () => import('@/views/Goods')

      },
      { path: '/order', component: () => import('@/views/Order') },
      { path: '/report', component: () => import('@/views/Report') },
      { path: '/score', component: () => import('@/views/Score') },
      { path: '/goodsfication', component: () => import('@/views/GoodsFication') },
      { path: 'goods/add', component: Add }

    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
