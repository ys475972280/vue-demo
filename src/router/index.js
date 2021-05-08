import Vue from 'vue'
import Router from 'vue-router'
import Basis from '@/pages/basis'
import CommentVue from '@/pages/comment'
import CheckBox from '@/pages/checkbox'
import AxiosWay from '@/pages/axiosWay'
import SearchDemo from '@/pages/searchDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basis',
      component: Basis
    },
    {
      path: '/comment',
      name: 'comment',
      component: CommentVue
    },
    {
      path: '/checkBox',
      name: 'checkBox',
      component: CheckBox
    },
    {
      path: '/axiosWay',
      name: 'axiosWay',
      component: AxiosWay
    },
    {
      path: '/searchDemo',
      name: 'SearchDemo',
      component: SearchDemo
    }
  ]
})
