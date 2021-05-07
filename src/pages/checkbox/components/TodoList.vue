<template>
  <div>
    <ul class="ul_list">
      <TodoItem v-for="(item,idx) in todoList" :key="idx" :item="item" :idx="idx" :deleteTodoItem="deleteTodoItem"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    todoList: {
      type: Array,
      default: () => ([])
    },
    deleteTodoItem: {
      type: Function
    }
  },
  data() {
    return {}
  },
  methods: {
    handleDelete(idx) {
      this.deleteTodoItem(idx)
    }
  }
}
</script>

<style scoped>
.ul_list {
  list-style-type: none;
  padding: 0;
}


/*.li-style:hover {*/
/*  background-color: #e3b7b7;*/
/*}*/
</style>
