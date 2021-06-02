<template>
  <div>
    <!--    <ElementUiTabs>-->
    <!--      <template slot="content">-->
    <!--        -->
    <!--      </template>-->
    <!--    </ElementUiTabs>-->
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl"> {{ repoName }}</a></div>
    <div>
      <h3>表格信息</h3>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import ElementUiTabs from '../../components/ElementUiTabs'

export default {
  name: "index",
  // components: {
  //   ElementUiTabs
  // },
  data() {
    return {
      repoUrl: '',
      repoName: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      const url = `https://api.github.com/search/repositories?q=v&sort=stars`
      //  发axios请求获取数据
      this.$axios.get(url).then(res => {
        let result = res.data.items
        this.repoUrl = result[0]['html_url']
        this.repoName = result[0].name
      }).catch(err => {
        console.log(err)
      })
    },
    handleClick(row) {
      console.log(row)
    }
  }

}
</script>

<style scoped>

</style>
