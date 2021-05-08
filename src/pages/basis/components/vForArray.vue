<template>
  <div>
    <h4>
      测试：v-for 遍历数组
    </h4>
    <div v-for="(item,index) in list" :key="index">
      {{ item.name }}-{{ item.age }}-{{ item.sex }}
      <button @click="deleteItem(item,index)">删除</button>
      <button @click="upDataInfo(index,{name:'Jack',age:10,sex:'男'})">更新</button>
    </div>
    <h3>
      测试：v-for 遍历对象
    </h3>
    <div v-for="(val,key) in obj" :key='key'>
      {{ key }}---{{ val }}
    </div>

    <!--    vue列表的搜索和排序-->
    <h5>vue列表的搜索和排序</h5>
    <input placeholder="请输入" v-model="inputVal">
    <div v-for="(item,index) in filtersList" :key="item.name">
      {{ item.name }}-{{ item.age }}-{{ item.sex }}
    </div>
    <div>
      <button @click="ageUp">年龄升序</button>
      <button @click="ageDown">年龄降序</button>
      <button @click="ageNow">原本顺序</button>
    </div>
  </div>
</template>

<script>
//vue本身只监视了list的改变，没有监视数组内部的改变，此时与deleteItem方法矛盾
//vue重写了数组中的一系列改变数组内部数据的方法(先调用原生，再更新界面)--->数组内部改变，界面自动变化
export default {
  name: "vForArray",
  data() {
    return {
      list: [
        {
          id: 0,
          name: 'yang',
          age: 18,
          sex: '男'
        },
        {
          id: 1,
          name: 'Tom',
          age: 21,
          sex: '男'
        },
        {
          id: 2,
          name: 'Json',
          age: 16,
          sex: '男'
        },
      ],
      obj: {
        name: 'chen',
        id: 1,
        age: 123
      },
      ageType: 0, //0代表原本顺序，1代表升序，2代表降序
      inputVal: ''
    }
  },
  methods: {
    deleteItem(data, idx) {
      console.log(data)
      console.log(idx)
      //  删除当前下标
      this.list.splice(idx, 1)
    },
    upDataInfo(idx, info) {
      //并没有改变list,数组内部发生了变化，但并没有调用变异方法，所以试图没改变
      // this.list[idx] = info
      this.list.splice(idx, 1, info)//splice具备增删改的能力（增加则是把1换为0，需要修改则第三个参数传入需要求改的数据）
    },
    ageUp() {
      this.ageType = 1
    },
    ageDown() {
      this.ageType = 2
    },
    ageNow() {
      this.ageType = 0
    }
  },
  computed: {
    filtersList() {
      //取出相关的数据
      let {list, inputVal, ageType} = this
      //最终需要显示的数组
      let listF;
      //对list进行过滤
      // listF = list.filter(item => item.name.indexOf(inputVal) !== -1)
      listF = list.filter(item => item.name.indexOf('') !== -1)
      //排序
      if (ageType !== 0) {
        listF.sort((p1, p2) => {//如果返回负数，p1在前，返回正数p2在前
          //  1代表升序，2代表降序
          return ageType === 2 ? p2.age - p1.age : p1.age - p2.age
        })
      }
      return listF
    }
  },
}
</script>

<style scoped>

</style>
