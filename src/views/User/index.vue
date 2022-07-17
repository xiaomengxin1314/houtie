<template>
  <div>
    <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <div class="neir">
      <el-input placeholder="请输入内容" v-model="paramsObj.query">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="getUser()"
        ></el-button>
      </el-input>
      <el-button type="primary" class="tianjia">
        <el-button type="text" @click="dialogFormVisible = true" class="tian"
          >添加用户</el-button
        >

        <el-dialog
          width="561px"
          title="增加用户对话框"
          :visible.sync="dialogFormVisible"
          :center="false"
        >
          <el-form :model="form" :rules="rules" ref="dataForm">
            <el-form-item
              label="用户名"
              :label-width="formLabelWidth"
              prop="username"
            >
              <el-input v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              :label-width="formLabelWidth"
              prop="password"
            >
              <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="邮箱"
              :label-width="formLabelWidth"
              prop="email"
            >
              <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="手机号"
              :label-width="formLabelWidth"
              prop="mobile"
            >
              <el-input v-model="form.mobile" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="userData">取 消</el-button>
            <el-button type="primary" @click="addUsers">确 定</el-button>
          </div>
        </el-dialog>
      </el-button>

      <div class="biaoge">
        <el-table :data="userList" border>
          <el-table-column prop="id" label="#" width="50" height="48">
          </el-table-column>
          <el-table-column prop="username" label="姓名"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="role_name" label="角色"> </el-table-column> -->
          <el-table-column prop="mg_state" label="状态">
            <template v-slot="scope">
              <el-switch
                v-model="scope.row.mg_state"
                @change="setModify(scope.row)"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                type="primary"
                @click="handleClick(scope.row)"
                icon="el-icon-edit"
                size="mini"
              ></el-button>
              <el-button
                type="primary"
                icon="el-icon-delete"
                size="mini"
                @click="open(scope.row)"
              ></el-button>
              <el-button
                type="primary"
                icon="el-icon-setting"
                size="mini"
                @click="setUser"
              ></el-button>

              <!-- <i class="el-icon-setting"></i> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination
          :page-sizes="[1, 2, 5, 10]"
          :page-size="paramsObj.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalList.total"
          @current-change="changePage"
          @size-change="changeSize"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog
      width="561px"
      title="编辑用户"
      :visible.sync="dialoging"
      :center="false"
    >
      <el-form :model="editorList" :rules="rules" ref="dataForm">
        <el-form-item
          label="用户名名称"
          :label-width="formLabelWidth"
          prop="username"
        >
          <el-input v-model="editorList.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="editorList.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="手机号"
          :label-width="formLabelWidth"
          prop="mobile"
        >
          <el-input v-model="editorList.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="editor">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="分配角色" :visible.sync="setdialogVisible" width="50%">
      <div>当前的用户:<span>admin</span></div>
      <div>当前的角色:<span>超级管理员</span></div>
      <div>分配新角色:<span></span></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setdialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { validEmail, validTelephone } from '@/utils/validate'

import { getUser, addUser, editorUser, delUser, roleUser, getModify } from '@/api/users'
export default {

  created () {
    this.getUser()
    // this.addUser()
  },
  data () {
    const validateEmail = (rule, value, callback) => {
      if (validEmail(value) || '') {
        callback()
      } else {
        callback(new Error('邮箱格式不正确'))
      }
    }
    const validateTelephone = (rule, value, callback) => {
      console.log(validTelephone(value))
      if (validTelephone(value) || '') {
        callback()
      } else {
        callback(new Error('手机格式不正确'))
      }
    }
    return {
      // list: [{
      //   id: '1',
      //   name: '王小虎',
      //   telephone: '131111111111',
      //   role: '超级管理员',
      //   done: false

      // }],
      dialogFormVisible: false,
      dialoging: false,
      form: {
        username: '',
        password: '',
        email: '',
        mobile: ''

      },
      formLabelWidth: '120px',
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '用户名在3~8位之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码在6~16位之间', trigger: 'blur' }

        ],
        email: [

          { validator: validateEmail, trigger: 'blur' }
        ],
        mobile: [

          { validator: validateTelephone, trigger: 'blur' }
        ]
      },
      paramsObj: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      userList: [],
      totalList: '',
      editorList: {
        id: '',
        username: '',
        email: '',
        mobile: ''
      },
      setdialogVisible: false,
      dataRole: {
        id: 500,
        rid: ''
      }

    }
  },
  methods: {
    handleClick (row) {
      console.log('row', row)
      this.dialoging = true
      this.editorList.id = row.id
      this.editorList.username = row.username
      this.editorList.mobile = row.mobile
      this.editorList.email = row.email
    },
    async editor () {
      try {
        console.log('ed', this.editorList)
        const res = await editorUser(this.editorList)
        console.log(res)
        if (res.data.meta.status === 200) {
          this.getUser()

          this.$message.success('更新成功')
          this.dialoging = false
        } else {
          this.$message.error('更新失败，请重试')
        }
      } catch (e) {
        console.log(e)
      }
    },
    // handleSizeChange (val) {
    //   console.log(`每页 ${val} 条`)
    // },
    // handleCurrentChange (val) {
    //   console.log(`当前页: ${val}`)
    // },
    // 获取用户列表
    async getUser () {
      try {
        const res = await getUser(this.paramsObj)
        console.log('user', res)
        this.userList = res.data.data.users
        this.totalList = res.data.data
      } catch (e) {
        console.log(e)
      }
    },

    userData () {
      this.dialogFormVisible = false
    },
    // 点击确定添加用户
    async addUsers () {
      // const bool = await this.$refs.dataFoem.validate()
      try {
        const res = await addUser(this.form)
        console.log(res)
        if (res.data.meta.status === 201) {
          // console.log(1)
          this.getUser()
          this.$message.success('添加成功')
        } else {
          this.$message.success('添加失败')
        }
      } catch (e) {
        console.log(e)
      }
      this.dialogFormVisible = false
    },
    // 点击获取当前页码
    changePage (page) {
      this.paramsObj.pagenum = page
      this.getUser()
    },
    // 点击获取每页显示的条数
    changeSize (value) {
      this.paramsObj.pagesize = value
      this.getUser()
    },
    open (data) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        try {
          const res = await delUser(data.id)
          this.getUser()
          console.log(res)
        } catch (e) {
          console.log(e)
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    async setUser () {
      this.setdialogVisible = true
      try {
        const res = await roleUser(this.dataRole)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    async setModify (data) {
      console.log(data)
      try {
        const res = await getModify({ uId: data.id, type: data.mg_state })
        this.getUser()
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/.neir {
  padding: 20px;
  background-color: #fff !important;
}
/deep/ .el-input {
  width: 388px;
  height: 40px;
  // margin-right: 20px;
}
/deep/.el-input-group__append {
  width: 56px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  background-color: rgb(245, 247, 250);
}
/deep/ .el-input-group__append {
  padding: 0;
}
.biaoge {
  margin: 15px 0;
}
.tianjia {
  width: 98px;
  height: 40px;
  padding: 0;
  margin-left: 20px;
  .tian {
    /deep/span {
      color: #fff;
    }
  }
}
/deep/.quxiao {
  color: black;
}
/deep/.block {
  .el-pagination__editor {
    width: 46px;
  }
  .el-pagination__jump {
    text-align: center;
  }
}
</style>
