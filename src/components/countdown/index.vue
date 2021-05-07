<template>
  <div>
    <h1>倒计时： <span :style="{color}">{{ time }}</span></h1>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      time: 10
    }
  },
  props: {
    color: {
      type: String,
      default: 'yellow',
    },
    changeColor: {
      type: () => {
      }
    }
  },
  created() {
    let time = setInterval(() => {
      this.time--
      if (this.time == 0) {
        clearInterval(time)
        this.time = '倒计时结束'
      } else if (this.time <= 5) {
        this.$emit('changeColor', 'blue')
      }
    }, 1000)
  }
}
</script>

<style scoped>

</style>
