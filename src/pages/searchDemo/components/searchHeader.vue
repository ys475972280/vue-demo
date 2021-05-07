<template>
  <div class="header-container">
    <h1>
      Search Github Users
    </h1>
    <div class="search-input">
      <el-input
        placeholder="请输入用户名"
        v-model="searchName"
        clearable>
      </el-input>
      <el-button type="primary" size="small" class="search-btn" @click="handleSearch">SEARCH</el-button>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  name: "searchHeader",
  data() {
    return {
      searchName: ''
    }
  },
  methods: {
    handleSearch() {
      const searchName = this.searchName.trim()
      //发布搜索的消息
      if (searchName) {
        PubSub.publish('search', searchName)
        this.searchName = ''
      }
    }
  }
}
</script>

<style scoped>
.header-container {
  height: 200px;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 16px;
}

h1 {
  margin: 0;
}

.search-input {
  display: flex;

}

.search-btn {
  margin-left: 10px;
}
</style>
