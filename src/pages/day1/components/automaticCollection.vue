<template>
  <div>
    <h1>表单数据的自动收集</h1>
    <form action="/xxx" @submit.prevent="handleSubmit">
      <span>用户名:</span>
      <input type="text" v-model="username"><br/>
      <span>密码:</span>
      <input type="password" v-model="password"><br/>
      <span>性别:</span>
      <input type="radio" id="female" value="女" v-model="sex">
      <label for="female">女</label>
      <input type="radio" id="male" value="男" v-model="sex">
      <label for="male">男</label><br/>

      <span>爱好:</span>
      <input type="checkbox" id="basket" value="basket" v-model="hobby">
      <label for="basket">篮球</label>
      <input type="checkbox" id="foot" value="foot" v-model="hobby">
      <label for="foot">足球</label>
      <input type="checkbox" id="pingPang" value="pingPang" v-model="hobby">
      <label for="pingPang">乒乓</label><br/>

      <span>城市：</span>
      <select v-model="cityId">
        <option value="">未选择</option>
        <option :value="item.id" v-for="(item,index) in allCity" :key="index">{{ item.name }}</option>
      </select><br/>

      <span>介绍:</span>
      <textarea rows="10" v-model="desc"></textarea><br/>
      <input type="submit" value="注册">
    </form>
  </div>
</template>

<script>
export default {
  name: "automaticCollection",
  data() {
    return {
      username: '',
      password: '',
      sex: '女',
      hobby: ['foot'],
      allCity: [{id: 1, name: '北京'}, {id: 2, name: '上海'}, {id: 3, name: '广东'}],
      cityId: '',
      desc: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.username, this.password, this.hobby, this.sex, this.cityId, this.desc)
    }
  }
}
</script>

<style scoped>

</style>
