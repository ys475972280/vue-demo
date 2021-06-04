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
router.beforeEach((to, from, next) => {
  const token = getItem('token')
  if (token) {
    next()
  } else {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  }
})
