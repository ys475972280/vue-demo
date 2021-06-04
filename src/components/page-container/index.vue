<template>
  <div class="page-container">
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
.page-container {
  padding: 8px 10px;
  border-radius: 10px;
  box-sizing: border-box;

  .el-card {
    width: 100%;
  }
}
</style>
