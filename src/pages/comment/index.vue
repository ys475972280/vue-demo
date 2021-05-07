<template>
  <div>
    <div class="header">
      请发表一下评论
    </div>
    <div class="container">
      <Add :add="add"/>
      <List :list="commentList" :handledDel="handledDel"/>
    </div>
  </div>
</template>

<script>
import Add from './componets/Add'
import List from './componets/List'

export default {
  name: "index",
  components: {
    Add,
    List
  },
  data() {
    return {
      commentList: [ //数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
        {
          userName: '小红',
          userContent: '今天天气真不错'
        },
        {
          userName: '小蓝',
          userContent: 'Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0'
        },
        {
          userName: '小黑',
          userContent: '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局'
        }
      ]
    }
  },
  methods: {
    add(item) {
      this.commentList.unshift(item)
    },
    handledDel(idx) {
      this.commentList.splice(idx, 1)
    }
  }
}
</script>

<style scoped>
.header {
  width: 30%;
  height: 100px;
  font-size: 20px;
  line-height: 100px;
}

.container {
  display: flex;
  /*justify-content: space-around;*/
}
</style>
