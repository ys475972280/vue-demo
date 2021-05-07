<template>
  <div class="main-item">
    <a :href="user.url">
      <img :src="user['avatar_url']">
    </a>
    <span>{{ user.name }}</span>
  </div>
</template>

<script>
export default {
  name: "searchItem",
  props: {
    user: Object
  }
}
</script>

<style scoped>
.main-item {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 200px;
  height: 150px;
}
</style>
