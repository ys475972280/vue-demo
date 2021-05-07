<template>
  <div>
    <h1>vue生命周期</h1>
    <button @click="destroyedVm">destroyed</button>
    <p v-show="isShow">温习vue知识点</p>
  </div>
</template>

<script>
export default {
  name: "lifeCycle",
  data() {
    return {
      isShow: true
    }
  },
  //1.初始化显示阶段
  beforeCreate() {
    /**
     * Observe Data
     * Init Events
     *
     * */
    console.log('beforeCreate')
  },
  created() {
    console.log('created')

  },
  beforeMount() {
  },
  mounted() {//初始化显示之后立即调用
    this.intervalId = setInterval(() => {
      this.isShow = !this.isShow
    }, 1000)
  },
  //2.更新阶段
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
  },
  //3.死亡阶段
  beforeDestroy() {
    //清楚定时器
    clearInterval(this.intervalId)
  },
  destroyed() {
  },
  methods: {
    destroyedVm() {
      //删除vm后页面不受控制，则不会有一些列vue绑定的方法
      this.$destroy()
    }
  }
}
</script>

<style scoped>

</style>
