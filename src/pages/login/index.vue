<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <!--        <img class="img" src="/ops/img/logo.png" alt="" />-->
        <p class="title">Hello everyOne</p>
        <p>©2021 v1.0.0</p>
      </div>
      <div class="login-right">
        <div class="login-main">
          <UserLogin/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserLogin from './userLogin'

export default {
  name: "index",
  components: {
    UserLogin
  }
}
</script>

<style scoped lang="less">
@import './styles/index';

</style>
