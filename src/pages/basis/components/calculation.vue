<template>
  <div>
    <h1>计算属性与监视</h1>
    <!--
    1.计算属性
    在computed属性对象中定义计算属性的方法
    在页面中使用{{方法名}}}来显示计算结果
    2.监视属性
    通过watch配置来监听指定的属性，当属性变化时，回调函数自动调用，在函数内部进行计算
    3.计算属性高级
    通过getter/setter实现对属性数据的显示和监视，计算属性存在缓存，多次读取只执行一次getter计算
    -->
    <div>
      姓：<input placeholder="Frist Name" v-model="firstName">
    </div>
    <div>
      名：<input placeholder="Last Name" v-model="lastName">
    </div>
    <div>
      姓名1(单向)：<input placeholder="Full Name1" v-model="fullName1" disabled>
    </div>
    <div>
      姓名2(单向)：<input placeholder="Full Name2" v-model="fullName2">
    </div>
    <div>
      姓名3(双向)：<input placeholder="Full Name3" v-model="fullName3">
    </div>
    <button @click="getFullName1">点击获取fullName1</button>

    <p>{{ fullName1 }}</p>
    <p>{{ fullName1 }}</p>
    <p>{{ fullName1 }}</p>


  </div>
</template>

<script>
export default {
  name: "calculation",
  data() {
    return {
      firstName: 'A',
      lastName: 'B',
      fullName2: 'A B',
    }
  },
  methods: {
    getFullName1() {
      console.log(this.fullName1)
      // this.$watch('lastName', function (val) {实例方法的监听
      //
      // })
    }
  },
  computed: {
    //什么时候执行，初始化显示/相关data属性数据发生变化
    fullName1() {//计算属性中的一个方法，方法的返回值作为属性值
      console.log('fullName1()')
      return `${this.firstName} ${this.lastName}`
    },
    fullName3: {
      //什么是回调函数(1.你定义的；2.你没有调用；3.但他执行了)
      //当需要读取当前属性值的时候回调，根据相关的数据计算并返回当前属性值
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      //监视当前属性值的变化 当属性值发生改变的时候回调，更新相关的属性数据
      set(val) {//value就是fullName3的最新属性值
        const name = val.split(' ')
        this.firstName = name[0]
        this.lastName = name[1]
      }
    }
  },
  watch: {
    firstName(newVal, oldVal) {//firstName发生了变化
      this.fullName2 = `${newVal} ${this.lastName}`
      console.log('fullName2', oldVal)
    },
    lastName(newVal) {
      this.fullName2 = `${this.firstName} ${newVal}`
    }
  },
}
</script>

<style scoped>

</style>
