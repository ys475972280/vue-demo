import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('@/pages/comment')
    },
    {
      path: '/checkBox',
      name: 'checkBox',
      component: () => import('@/pages/checkbox')
    },
    {
      path: '/axiosWay',
      name: 'axiosWay',
      component: () => import('@/pages/axiosWay')
    },
    {
      path: '/searchDemo',
      name: 'SearchDemo',
      component: () => import('@/pages/searchDemo')
    },
    {
      path: '/basis',
      name: 'basis',
      component: () => import('@/pages/basis')
    },
  ]
})
