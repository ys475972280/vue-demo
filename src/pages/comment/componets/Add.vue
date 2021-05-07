<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item label="用户名:">
        <el-input placeholder="请输入用户名" v-model="userName"></el-input>
      </el-form-item>
      <el-form-item label="评论内容:">
        <el-input type="textarea" placeholder="请输入评论内容" v-model="userContent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: {
    add: {
      type: Function,
      require: true
    }
  },
  data() {
    return {
      labelPosition: "left",
      userName: '',
      userContent: ''
    }
  },
  methods: {
    onSubmit() {
      if (!this.userName || !this.userContent) {
        this.$message({message: '用户名和内容不能为空哦~！~！', type: 'error'})
        return
      }
      let item = {
        userName: this.userName,
        userContent: this.userContent
      }
      this.add(item)
      this.userContent = ''
      this.userName = ''

    }
  }
}
</script>

<style scoped>

</style>
