<template>
  <div>
    <h1>vue基础知识回顾</h1>
    <!--  数据  -->
    <div>
      <h3>数据</h3>
      <p>-----------------------------</p>
      <div>数据绑定：{{ msg }}</div>
      <div>computed:{{ info }}</div>
      <div>computed 计算数字 : {{ sum }}</div>
      <div @click="handleClick(123)">点我一下</div>
    </div>
    <div>


      <!--  模板语法    -->
      <h3>模板语法</h3>
      <p>-----------------------------</p>
      <div>
        data:{{ msg }}
      </div>
      <div>
        js语法判断：{{ num == 2 ? '就是2' : '不是2' }}
      </div>
      <div>
        vue指令：
        <div v-html="span"></div>
      </div>
      <div>动态显示：{{ num == 2 ? '就是2' : '不是2' }}
        <button @click="handleC">点一下</button>
      </div>
      <div>过滤器：{{ msg|capitalize }}</div>
    </div>


    <!-- 计算属性介绍   -->
    <h2>计算属性介绍->防止在html中写过多得js</h2>
    <p>-----------------------------</p>
    <div>{{ computedString }}</div>

    <!--    class与style绑定-->
    <h2>class与style绑定</h2>
    <p>-----------------------------</p>
    <h3>class</h3>
    <div :class="{'active':isActive,'text-danger':hasError}">1.{'active':isActive,'text-danger':hasError}</div>
    <div :class="`active ${hasError}`">2.:class="`active ${hasError}`"</div>
    <div :class="isActive">3.:class="isActive"--->isActive变量</div>
    <div :class="[classWay1,classWay2]">4.:class="[isActive,hasError]"--->2个变量，在data中 classWay1:'123',
      classWay2:'321'----->['123','321']
    </div>
    <h3>style->类似与class</h3>
    <p>-----------------------------</p>

    <h3>条件渲染</h3>
    <p>-----------------------------</p>
    <div v-if="isShow">
      显示了
    </div>
    <button @click="handleIsShow">{{ isShow ? '显示' : '隐藏' }}</button>

    <h2>自定义组件</h2>
    <Countdown :color="color" @changeColor="changeColor"/>

    <h2>DOM操作</h2>
    <div ref="head"></div>
  </div>
</template>

<script>
import Countdown from '@/components/countdown'

export default {
  name: 'index',
  data() {
    return {
      msg: '渲染数据了',
      num: 2,
      span: '<span>我是html-Span</span>',
      isActive: true,
      hasError: false,
      classWay1: '123',
      classWay2: '321',
      isShow: false,
      color: ''
    }
  },
  components: {
    Countdown
  },
  //计算属性
  computed: {
    info() {
      return `我在computed${this.msg}`
    },
    sum() {
      return this.num * 10
    },
    computedString() {
      return this.msg.split('').reverse().join('')
    }
  },
  //vue方法存在得方法
  methods: {
    handleClick(num) {
      alert(this.msg + num)
    },
    handleC() {
      this.num++
    },
    handleIsShow() {
      this.isShow = !this.isShow
    },
    changeColor(data) {
      this.color = data
    }


  },
  //过滤器
  filters: {
    capitalize() {
      return '被我过滤了哦'
    }
  },
  //生命周期函数
  created() {
    console.log('created')
  },
  beforeCreate() {
    console.log('beforeCreate')

  },
  mounted() {
    console.log('mounted')
    //  真实DOM已经生成
    this.$refs.head.innerHTML = 'DOM'
  },
  beforeMount() {
    console.log('beforeMount')

  },
  beforeDestroy() {
    console.log('beforeDestroy')

  },
  destroyed() {
    console.log('destroyed')
  }

}
</script>

<style scoped>

</style>
