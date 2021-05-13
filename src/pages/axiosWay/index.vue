<template>
  <div>
    <ElementUiTabs>
      <template slot="content">
        <div v-if="!repoUrl">loading</div>
        <div v-else>most star repo is <a :href="repoUrl"> {{ repoName }}</a></div>
      </template>
    </ElementUiTabs>
  </div>
</template>

<script>
import ElementUiTabs from '../../components/ElementUiTabs'

export default {
  name: "index",
  components: {
    ElementUiTabs
  },
  data() {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
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

}
</script>

<style scoped>

</style>
