import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/pages/demo'
import Day1 from '@/pages/day1'
import CommentVue from '@/pages/comment'
import CheckBox from '@/pages/checkbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/day1',
      name: 'day1',
      component: Day1
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
    }
  ]
})
