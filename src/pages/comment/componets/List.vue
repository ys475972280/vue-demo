<template>
  <div class="list_content">
    <span>评论回复：</span>
    <h3 v-show="list.length==0">暂无评论，点击左侧添加评论！！！</h3>
    <div class="item_content" v-for="(item,idx) in list" :key="item.userContent">
      <h3>{{ item.userName }}说:</h3>
      <span class="item-desc">{{ item.userContent }}</span>
      <el-popconfirm
        :title="`是否删除${item.userName}的评论吗？`"
        @confirm="handleDelete(idx)"
      >
        <el-button slot="reference" size="small" class="btn_position">删除</el-button>
      </el-popconfirm>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    handledDel: {
      type: Function,
      require: true
    }
  },
  methods: {
    handleDelete(idx) {
      this.handledDel(idx)
    }
  }
}
</script>

<style scoped>
.list_content {
  margin-left: 100px;
}

.item_content {
  width: 400px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  margin-top: 5px;
  padding: 0 10px 10px;
}

.item-desc {
  display: inline-block;
  margin-left: 30px;
  font-size: 12px;
  color: #333;
}

.btn_position {
  position: absolute;
  top: 14px;
  right: 5px;
}

</style>
