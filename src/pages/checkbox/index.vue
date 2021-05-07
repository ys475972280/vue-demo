<template>
  <div class="todo-container">
    <div class="main">
      <TodoHeader @addTodoList="addTodoList"/>
      <!-- @addTodoList="addTodoList"绑定监听      -->
      <TodoList :todoList="todoList" :deleteTodoItem="deleteTodoItem"/>
      <!--      <TodoFooter :todoList="todoList" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>-->
      <TodoFooter>
        <!--     使用slot的方式来实现   -->
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{ completeSize }}/全部{{ todoList.length }}任务</span>
        <el-button type="danger" round size="small" @click="deleteCompleteTodos" v-show="completeSize" slot="deleteBtn">
          清除已完成的任务
        </el-button>
      </TodoFooter>
    </div>

  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import storageUtil from "../../util/storageUtil";

export default {
  name: "index",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      //从localstorage读取todolist 深度监视
      // todoList: [
      //   {
      //     name: '吃饭',
      //     complete: false
      //   },
      //   {
      //     name: '睡觉',
      //     complete: true
      //   },
      //   {
      //     name: '打豆豆',
      //     complete: false
      //   },
      //   {
      //     name: 'coding',
      //     complete: true
      //   },
      // ]
      todoList: storageUtil.readTodos()
    }
  },
  computed: {
    completeSize() {
      return this.todoList.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get() {
        return this.completeSize === this.todoList.length && this.todoList.length > 0
      },
      set(value) {//value 当前check的最新的指
        console.log('value--------------->', value)
        this.selectAllTodos(value)
      }
    }
  },
  methods: {
    addTodoList(item) {
      this.todoList.unshift(item)
    },
    deleteTodoItem(item) {
      this.todoList.splice(item, 1)
    },
    //删除所有选中的
    deleteCompleteTodos() {
      this.todoList = this.todoList.filter(todo => !todo.complete)
    },
    //全选或者全不选
    selectAllTodos(isCheck) {
      this.todoList.forEach(todo => todo.complete = isCheck)
    }
  },
  watch: {
    todoList: {
      deep: true, //深度监视
      // handler: function (val) {
      //   //  将todolist 最新的值保存在localstorage
      //   storageUtil.saveTodos(val)
      // }

      //  简化代码
      handler: storageUtil.saveTodos
    }
  }
}
</script>

<style scoped>
.todo-container {
  width: 50%;
}

.main {
  border-radius: 10px;
  border: 1px solid #cccccc;
}
</style>
