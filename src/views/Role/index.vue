<template>
  <div>
    <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>

    <div class="header">
      <el-button>添加角色</el-button>
      <div class="biaoge">
        <el-table :data="roles" style="width: 100%" border>
          <el-table-column type="expand" label="#">
            <template v-slot="scope">
              <el-row
                v-for="item in scope.row.children"
                :key="item.id"
                class="right"
              >
                <el-col :span="6">
                  <div class="left">
                    <el-tag>{{ item.authName }}</el-tag>
                    <i class="el-icon-caret-right el-icon--right"></i>
                  </div>
                </el-col>

                <el-col :span="18">
                  <div class="left">
                    <el-row
                      v-for="item1 in item.children"
                      :key="item1.id"
                      class="bianguang"
                    >
                      <el-col>
                        <el-row>
                          <el-col :span="5">
                            <el-tag type="success"
                              >{{ item1.authName }}
                            </el-tag>
                            <i class="el-icon-caret-right el-icon--right"></i>
                          </el-col>
                          <el-col :span="19">
                            <el-tag
                              v-for="item2 in item1.children"
                              :key="item2.id"
                            >
                              {{ item2.authName }}
                              <i class="el-icon-close el-icon--right"></i>
                            </el-tag>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column label="#" prop="id" width="50"> </el-table-column>
          <el-table-column label="商品名称" prop="roleName"> </el-table-column>
          <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
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
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
                @click="assignPermission(scope.row)"
                >分配权限</el-button
              >

              <!-- <i class="el-icon-setting"></i> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <el-dialog width="561px" title="增加用户对话框">
      <el-form>
        <el-form-item label="用户名" prop="username">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="分配权限" :visible.sync="rightVisible">
      <el-tree
        :data="rloeList"
        show-checkbox
        node-key="id"
        default-expand-all
        :props="{ label: 'authName' }"
        v-if="rightVisible"
        ref="saveFormRef"
        :default-checked-keys="permissions"
      >
      </el-tree>
      <template v-slot:footer>
        <el-button type="primary" @click="save">确定</el-button>
        <el-button @click="rightVisible = false">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getRloe } from '@/api/authority'
import { rolesList } from '@/api/roles'
// import getAssignPermission from '@/utils/index'
export default {
  created () {
    // this.getRloe()
    this.rolesList()
  },
  data () {
    return {

      rightVisible: false,
      rloeList: [],
      permissions: [],
      roles: [],
      resId: null

    }
  },
  methods: {
    handleClick (id) {
      console.log(this.scope.row)
    },

    async assignPermission (row) {
      // console.log(id)
      this.resId = row.id
      console.log(this.resId)
      this.rightVisible = true
      const res = await getRloe('tree')
      console.log(res)
      this.rloeList = res.data.data
      this.permissions = row.children.authName
      console.log(row.children)
      // console.log(this.permissions)
    },
    async rolesList () {
      const res = await rolesList()
      console.log(res)
      this.roles = res.data.data
    },
    save () {
      console.log(this.$refs.saveFormRef.getCheckedNodes())
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
}
.biaoge {
  margin-top: 20px;
}
.el-row {
  display: flex;
  align-items: center;
}
/deep/.el-table__expanded-cell {
  padding: 20px 50px;
}
.left {
  .el-tag--light {
    margin-right: 5px;
    margin: 8px;
  }
}
.right {
  border-top: 1px solid #f5f7f9;
  border-bottom: 1px solid #f5f7f9;
}
.bianguang {
  border-top: 1px solid #f5f7f9;
  border-bottom: 1px solid #f5f7f9;
}
</style>
