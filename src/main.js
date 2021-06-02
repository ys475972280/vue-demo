// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'classlist-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment';
import Directives from './plugins/directives'
import Filters from './plugins/filters'
import Axios from 'axios'
import less from 'less'
import './auth'//权限
import './plugins/components'
import './styles/common.less'

moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn');
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;//赋值使用
Vue.prototype.$axios = Axios
Vue.use(Directives)
Vue.use(Filters)
Vue.use(less)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

