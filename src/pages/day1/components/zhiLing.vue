<template>
  <!--
  v-text: 更新元素的textContent
  v-html: 更新元素的innerHtml
  v-if: 如果为true，当前标签才会输出到页面
  v-else: 如果为false，当前标签才会输出到页面
  v-show: 通过控制display样式来控制显示/隐藏
  v-for: 遍历数组/对象
  v-on: 绑定事件监听，一般简写为@
  v-bind: 强制绑定解析表达式，可以省略v-bind使用 ：来代替
  v-model: 双向数据绑定
  ref: 为某个元素注册一个唯一标识，vue对象通过$refs属性访问这个元素对象
  v-cloak: 使用它防止闪现表达式，与css配合：[v-cloak]{display:none}

  1.注册全局指令
  Vue.directive('my-directive',(el,binding)=>{
  el:指令属性所在的标签对象
  binding: 包含指令相关信息数据的对象
    el.innerHtml=binding.value.toupperCase()
  })
  2.注册局部指令
  directives: {
    'my-directive': {
      bind(el,binding){
        el.innerHtml = binding.value.toupperCase()
      }
    }
  }
  需求： 自定义2个指令
  1.功能类似于v-text，但转换为全大写 v-upper-text
  2.功能类似于v-text, 但转换为全小写 v-lower-text
  -->
  <div>
    <h1>vue指令</h1>
    <p ref="content">xxxxxx</p>
    <button @click="hint">提示</button>
    <p v-cloak>{{ msg }}</p>
    <h2>自定义指令</h2>
    <p v-upper-text="msg1"></p>
    <p v-lower-text="msg2"></p>
    <p>{{ phone | phoneShield }}</p>
  </div>
</template>

<script>
export default {
  name: "zhiLing",
  data() {
    return {
      msg: 'vue-----xue',
      msg1: 'NBA I Love This Game',
      msg2: 'JuSt Do it',
      phone: 15208379139
    }
  },
  methods: {
    hint() {
      alert(this.$refs.content.innerHTML)
    }
  },
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

</style>
