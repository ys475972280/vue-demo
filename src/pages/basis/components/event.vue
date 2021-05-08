<template>
  <div>
    <h1>1.绑定监听</h1>
    <button @click="bindWatch1">绑定监听1</button>
    <button @click="bindWatch2('yang')">绑定监听2</button>
    <button @click="bindWatch3($event)">绑定监听3</button>
    <!--    默认bindWatch()methods里面能拿到event-->
    <button @click="bindWatch4(10,$event)">绑定监听4</button>

    <h1>2.事件修饰符</h1>
    <!--    嵌到之后，此时会出现冒泡-->
    <div style="width: 200px;height: 200px;background: red" @click="text1">
      <div style="width: 100px;height: 100px;background: blue" @click.stop="text2"></div>
    </div>
    <a href="https://www.baidu.com" @click.prevent="text3">去百度----阻止事件的默认行为prevent</a>
    <h1>3.按键修饰符</h1>
    <input placeholder="请输入" @keyup.enter="text4" v-model="value">
    <!--    <input placeholder="请输入" @keyup.13="text4" v-model="value">-->
  </div>
</template>

<script>
export default {
  name: "event",
  data() {
    return {
      value: ''
    }
  },
  methods: {
    bindWatch1() {
      alert("杨帅")
    },
    bindWatch2(data) {
      alert(data)
    },
    bindWatch3(e) {
      alert(e.target.innerText)
    },
    bindWatch4(num, e) {
      //需要event参数又需要传参，此时需要传$event过来，不然只传一个参数会拿不到event对象
      alert(`${num}${e.target.innerText}`)
    },
    text1() {
      alert('out')
    },
    text2(e) {
      e.stopPropagation()//阻止冒泡--但一般vue尽量不这样操作---一般直接在点击事件后面.stop(@click.stop)
      alert('inner')
    },
    text3() {
      alert('点击了')
    },
    text4(e) {
      alert(this.value)
      // if (e.keyCode === 13) {
      //   alert(this.value)
      // }
    }
  }
}
</script>

<style scoped>

</style>
