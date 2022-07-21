<template>
  <div>
    <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <el-card>
      <div class="sousuo">
        <el-input placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" class="tianjia" @click="addGoods"
          >添加商品
        </el-button>
      </div>
      <div>
        <el-table border :data="goodsList">
          <el-table-column label="#" prop="goods_id"></el-table-column>
          <el-table-column label="商品名称" prop="goods_name"></el-table-column>
          <el-table-column
            label="商品价格(元)"
            prop="goods_price"
          ></el-table-column>
          <el-table-column
            label="商品重量"
            prop="goods_weight"
          ></el-table-column>
          <el-table-column label="创建时间" prop="upd_time"></el-table-column>
          <el-table-column label="操作">
            <template v-slot="scope">
              <el-button
                type="primary"
                @click="handleClick(scope.row)"
                icon="el-icon-edit"
                size="mini"
                >编辑</el-button
              >

              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="open(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination
          :page-sizes="[1, 5, 10, 15]"
          :page-size="paramsObj.pagesize"
          :current-page="paramsObj.pagenum"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="PageSize"
          @current-change="pageNum"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getGoods } from '@/api/goods'
export default {
  created () {
    this.getGoods()
  },
  data () {
    return {
      dialogVisible: false,
      paramsObj: {
        type: '',
        pagenum: 1,
        pagesize: 4
      },
      goodsList: [],
      total: null
    }
  },
  methods: {
    async getGoods () {
      const res = await getGoods(this.paramsObj)
      console.log(res)
      this.goodsList = res.data.data.goods
      this.total = res.data.data.total
    },
    PageSize (pagesize) {
      this.paramsObj.pagesize = pagesize
      this.getGoods()
    },
    pageNum (pagenum) {
      this.paramsObj.pagenum = pagenum
      this.getGoods()
    },
    addGoods () {
      this.$router.push('/home/goods/add')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header {
  padding: 10px 0 0 10px;
  background-color: #fff;
}
.el-card {
  margin-top: 15px;
}
.sousuo {
  margin-bottom: 15px;
  .el-input {
    width: 480px;
  }
  .tianjia {
    margin-left: 20px;
  }
}
.block {
  margin-top: 20px;
}
</style>
