<template>
  <div class="container">
    <!--    左边位置-->
    <div>
      ys后台管理
    </div>
    <!--    右边位置-->
    <div class="container-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar size="medium" :src="circleUrl"></el-avatar>
           <span style="padding-left: 10px">杨帅</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-message">消息通知</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" divided>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",

    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.container-right {
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
}

.avatar-name {
  display: inline-block;
  margin-left: 10px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
