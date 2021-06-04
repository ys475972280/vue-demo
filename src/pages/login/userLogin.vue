<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" label-width="0" :model="loginForm">
    <el-form-item prop="username">
      <el-input size="small" @keyup.enter.native="handleLogin" auto-complete="off"
                placeholder="请输入用户名" v-model="loginForm.username">
        <i slot="prefix" class="el-icon-user"></i>

      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" :type="passwordType" @keyup.enter.native="handleLogin" auto-complete="off"
                placeholder="请输入密码"
                v-model="loginForm.password">
        <i
          class="el-icon-view el-input__icon"
          slot="suffix"
          @click="showPassword"
        ></i>
        <i slot="prefix" class="el-icon-lock"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click.native.prevent="handleLogin"
        class="login-submit"
        plain
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {getItem, setItem} from '@/utils/storage'

export default {
  name: "userLogin",
  data() {
    return {
      loginForm: {
        username: "",
        password: ''
      },
      loginRules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'},
          {min: 4, message: '密码长度最少为4位', trigger: 'blur'},]
      },
      passwordType: 'password'
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          setItem('token', true)
          this.$router.push({
            path: '/'
          })
        }
      })
    },
    showPassword() {
      this.passwordType == ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    }
  }
}
</script>

<style scoped lang="less">
@import "styles/userLogin";
</style>
