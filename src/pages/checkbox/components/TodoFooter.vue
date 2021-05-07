<template>
  <div class="todo-footer">
    <div>
      <slot name="checkAll"/>
      <span>
        <slot name="count"/>
      </span>
    </div>
    <slot name="deleteBtn"/>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  // props: {
  //   todoList: {
  //     type: Array,
  //     default: () => ([])
  //   },
  //   deleteCompleteTodos: {
  //     type: Function
  //   },
  //   selectAllTodos: {
  //     type: Function
  //   }
  // },
  // computed: {
  //   completeSize() {
  //     return this.todoList.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  //   },
  //   isAllCheck: {
  //     get() {
  //       return this.completeSize === this.todoList.length && this.todoList.length > 0
  //     },
  //     set(value) {//value 当前check的最新的指
  //       console.log('value--------------->', value)
  //       this.selectAllTodos(value)
  //     }
  //   }
  // },
  methods: {
    deleteAll() {
      this.deleteCompleteTodos()
    }
  }
}
</script>

<style scoped>
.todo-footer {
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}
</style>
