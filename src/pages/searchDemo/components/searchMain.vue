<template>
  <div class="main-container">
    <h2 v-if="firstView">请输入用户名搜索</h2>
    <h2 v-if="loading">LOADING</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <SearchItem v-for="(user,idx) in users" :user="user" :key="idx"/>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import SearchItem from './searchItem'

export default {
  name: "searchMain",
  components: {
    SearchItem
  },
  data() {
    return {
      firstView: true,
      loading: false,
      users: [],//[{url:'',avatar_url:'',name:''}]
      errorMsg: ''
    }
  },
  mounted() {
    //  订阅搜索的消息
    PubSub.subscribe('search', (msg, searchName) => {//说明需要发生axios进行搜索
      const url = `https://api.github.com/search/users?q=${searchName}`
      //更新状态（请求中的状态）
      this.firstView = false
      this.loading = true
      this.users = []
      this.errorMsg = ''
      //发送请求
      this.$axios.get(url).then(res => {
        //  成功，更新状态
        this.loading = false
        const result = res.data.items
        this.users = result.map(item => (
          {
            url: item['html_url'],
            avatar_url: item['avatar_url'],
            name: item.login
          }
        ))
      }).catch(err => {
        //  失败，更新状态
        this.loading = false
        this.errorMsg = '请求失败'
      })
    })
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  text-align: left;
  justify-content: center;
}
</style>
