<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in platList" :key="item.value" :name="String(item.value)" :label="item.label">
      <slot name="content"/>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
import {PLAT} from '../../const'

export default {
  name: "index",
  data() {
    return {
      activeName: '13849205932032',
      platList: PLAT.List
    }
  },
  created() {
  },
  methods: {
    handleClick() {
      console.log(this.activeName)
    }
  }
}
</script>

<style scoped>

</style>
