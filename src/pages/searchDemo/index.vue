<template>
  <div class="container">
    <SearchHeader/>
    <SearchMain/>
  </div>
</template>

<script>
import SearchHeader from './components/searchHeader'
import SearchMain from './components/searchMain'

export default {
  name: "index",
  components: {
    SearchHeader,
    SearchMain
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
