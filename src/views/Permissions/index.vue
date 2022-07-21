<template>
  <div>
    <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>权限列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <el-card>
      <el-table border :data="roleList">
        <el-table-column label="#" prop="id" width="50px"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="权限列表" prop="path"></el-table-column>
        <el-table-column
          label="权限等级"
          prop="level"
          :formatter="formatterEmployee"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { RloeList } from '@/api/authority'
export default {
  created () {
    this.RloeList()
  },
  data () {
    return {
      roleList: [],
      level: [
        {
          id: '0',
          levels: '等级一'
        },
        {
          id: '1',
          levels: '等级二'
        },
        {
          id: '2',
          levels: '等级三'
        }

      ]
    }
  },
  methods: {

    async RloeList () {
      const res = await RloeList('list')
      console.log(res)
      this.roleList = res.data.data
    },
    // 聘用方式 find返回的是一个对象 indexof 返回的是一个对象的索引
    formatterEmployee (row, column, cellValue, index) {
      return this.level.find(item => item.id === cellValue).levels
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.el-card {
  margin-top: 15px;
}
</style>
