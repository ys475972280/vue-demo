//全局设置filters
import Vue from 'vue'

export default function filters() {
  const phoneShield = (phone) => {
    if (!phone) return ''
    phone = phone.toString()
    return phone.substr(0, 3) + '****' + phone.substr(7)
  }
  Vue.filter('phoneShield', phoneShield)
}
