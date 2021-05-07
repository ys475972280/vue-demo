import Vue from 'vue'

export default function Directives() {
  const upperText = (el, binding) => {
    el.innerText = binding.value.toUpperCase()
  }
  const lowerText = (el, binding) => {
    el.innerText = binding.value.toLowerCase()
  }
  Vue.directive('upper-text', upperText)
  Vue.directive('lower-text', lowerText)
}
