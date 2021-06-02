/**
 * 权限配置
 * */
import router from './router/index'
import NProgress from 'nprogress'
import {getItem, setItem} from '@/utils/storage'

NProgress.configure({showSpinner: false})

// /**
//  *导航守卫
//  * */
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   const token = getItem('token')
//   if (!token) return next('/login')
//
// })
