<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl"> {{ repoName }}</a></div>

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted() {
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    //  发axios请求获取数据
    this.$axios.get(url).then(res => {
      let result = res.data.items
      this.repoUrl = result[0]['html_url']
      this.repoName = result[0].name
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
