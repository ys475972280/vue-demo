<template>
  <div>
    <el-input placeholder="请输入内容,按回车提交" v-model="val" clearable @keyup.enter.native="handleAdd"
              style="width: 50%;margin: 5px"></el-input>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  props: {
    // addTodoList: {
    //   type: Function,
    // }
  },
  data() {
    return {
      val: ''
    }
  },
  methods: {
    handleAdd() {
      if (this.val === '') {
        this.$message.info("内容不能为空")
        return
      }
      let todoItem = {
        name: this.val,
        complete: false
      }
      this.$emit('addTodoList', todoItem)
      this.val = ''
    }
  }
}
</script>

<style scoped>

</style>
