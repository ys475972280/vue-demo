<template>
  <div>
    <div>
      <h1>模板语法</h1>
      <div>
        <h3>1.双括号表达式</h3>
        <p>{{ msg.toUpperCase() }}</p>

        <h3>2.指令一：强制数据绑定 v-bind || :</h3>
        <img :src="imgUrl">

        <h3>3.指令二：绑定事件监听 v-on || @</h3>
        <button @click="handleClick(msg)">点击事件</button>
        <h3>指令......</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gramme",
  data() {
    return {
      val: '',
      msg: 'chris',
      imgUrl: 'https://img2.baidu.com/it/u=2471826223,1654648024&fm=26&fmt=auto&gp=0.jpg'
    }
  },
  methods: {
    handleClick(msg) {
      alert(msg)
    }
  }
}
</script>

<style scoped>

</style>

