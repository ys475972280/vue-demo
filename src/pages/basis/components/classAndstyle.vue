<template>
  <div>
    <h1>class与style绑定</h1>
    <div>
      <p :class="`p_class ${activeClass?' p_active':''}`">华为手环6全曝光：1.47 英寸 AMOLED 全面屏，支持磁吸快充</p>
      <p :style="{'font-size':activeStyle?'12px':'20px'}">华为手环 6 还是华为首款支持连续血氧监测的手环，支持 TruSeen TM 4.0 心率监测、TruSleep TM
        2.0
        睡眠监测、TruRelax
        TM 2.0
        压力监测，以及心脏健康管理、睡眠呼吸暂停风险筛查。</p>
    </div>
    <button @click="handleChangeClass">点击更换class样式</button>
    <button @click="handleChangeStyle">点击更换style样式</button>

  </div>
</template>

<script>
export default {
  name: "classAndstyle",
  data() {
    return {
      activeClass: false,
      activeStyle: false

    }
  },
  methods: {
    handleChangeClass() {
      this.activeClass = !this.activeClass
    },
    handleChangeStyle() {
      console.log(1)
      this.activeStyle = !this.activeStyle
    }
  }
}
</script>

<style scoped>
.p_class {
  color: aqua;
  font-size: 14px;
}

.p_active {
  color: beige;
  font-size: 20px;
}

.p_style {
  color: coral;
  font-size: 21px;
  font-weight: 600;
}

</style>
