<template>
  <div>
    <h1>vue过滤器</h1>
    <h3>显示格式化的时间日期</h3>
    <p>{{ date }}</p>
    <p>完整版 {{ date |dateFilter(that,'YYYY年MM月DD日 HH时mm分ss秒') }}</p>
    <p>时分秒 {{ date |dateFilter(that) }}</p>
  </div>
</template>

<script>
export default {
  name: "filters",
  data() {
    return {
      that: this,
      date: new Date()
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },

//  自定义过滤器
  filters: {
    dateFilter(date, that, format = 'YYYY-MM-DD HH:mm:ss') {
      return that.$moment(date).format(format)
    },
  }
}
</script>

<style scoped>

</style>
