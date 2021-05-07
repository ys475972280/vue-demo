<template>
  <div>
    <!--
    onmouseenter:鼠标进入浏览器触发，当鼠标移入进入到div里面的时候会触发 onmouseout 从内部出去的是时候触发onmouseover
    onmouseleave：鼠标移出

    onmouseover鼠标进入浏览器触发
    onmouseout
    -->
    <li class="li-style" :style="{background:bgColor}"
        @mouseleave="handleEnter(false) " @mouseenter='handleEnter(true)'>
      <label>
        <input type="checkbox" v-model="item.complete"/>
        <span>{{ item.name }}</span>
        <el-button class="btn-size" type="info" size="small" @click="handleDelete(idx)" v-show="isShow">删除</el-button>
      </label>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    idx: {
      type: Number
    },
    deleteTodoItem: {
      type: Function
    }
  },
  data() {
    return {
      bgColor: 'white',//默认背景颜色
      isShow: false,//按钮默认是否显示
    }
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor = '#e0dbdb'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    handleDelete(idx) {
      this.deleteTodoItem(idx)
    }
  }
}
</script>

<style scoped>
.li-style {
  box-sizing: border-box;
  border: 1px solid #cccccc;
  padding: 10px;
  margin-bottom: 5px;
  height: 60px;
  position: relative;
}

.btn-size {
  position: absolute;
  right: 10px;
}

</style>
