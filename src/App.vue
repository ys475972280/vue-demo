<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-link to="/">basis</router-link>
        <router-link to="/comment">comment</router-link>
        <router-link to="/checkBox">checkBox</router-link>
        <router-link to="/axiosWay">axiosWay</router-link>
        <router-link to="/searchDemo">searchDemo</router-link>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
