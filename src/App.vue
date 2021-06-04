<template>
  <div id="app">
    <router-view/>

    <!--    <el-container>-->
    <!--      <el-header>-->
    <!--        <Header/>-->
    <!--      </el-header>-->
    <!--    </el-container>-->
    <!--    <el-container>-->
    <!--      <div>112313</div>-->
    <!--      <el-aside>-->
    <!--        &lt;!&ndash; https://blog.csdn.net/qq_35393869/article/details/88077912?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-0&spm=1001.2101.3001.4242&ndash;&gt;-->
    <!--        <el-menu :default-active="defaultActivePath" class="el-menu-demo" active-text-color="#ffd04b"-->
    <!--                 @select="handleSelect"-->
    <!--                 router>-->
    <!--          <el-menu-item v-for="item in menu" :index="item.path" :key="item.name">{{ item.name }}</el-menu-item>-->
    <!--        </el-menu>-->
    <!--      </el-aside>-->
    <!--      <el-main>-->
    <!--        <router-view/>-->
    <!--      </el-main>-->
    <!--    </el-container>-->
  </div>
</template>

<script>
import {getItem, setItem} from '@/utils/storage'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      menu: this.$router.options.routes,
      defaultActivePath: '/'
    }
  },
  created() {
    let savePath = getItem('path')
    if (savePath) {
      this.defaultActivePath = savePath
    }
  },
  computed: {
    menuPath({$data}) {
      return $data
    }
  },
  methods: {
    handleSelect(a, b) {
      setItem('path', a)
    }
  }
}
</script>

<style>
* {
  /*margin: 0;*/
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.el-header {
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%)
}

.el-main {
  color: #333;
  /*height: 90vh;*/
  /* overflow-y: scroll;
  position: absolute; */
}
</style>
