<template>
  <el-container class="container">
    <el-header>
      <div>
        <img src="@/assets/houtai.png" alt="" />
        <span class="tou">后台管理系统</span>
      </div>
      <el-button @click="$router.push('/login')">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="180">
        <div>
          <el-radio-group v-model="isCollapse">
            <el-button
              class="anniu"
              icon="el-icon-s-unfold"
              @click="isCollapse = !isCollapse"
              v-if="!isCollapse"
            >
            </el-button>
            <el-button
              v-else
              class="shouqi"
              icon="el-icon-s-unfold"
              @click="isCollapse = !isCollapse"
            >
            </el-button>
          </el-radio-group>
          <el-menu
            router
            class="el-menu-vertical-demo"
            :hide-timeou="0"
            :show-timeout="0"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span slot="title">用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/user">
                  <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-lock"></i>
                <span slot="title">权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/role">
                  <template>
                    <i class="el-icon-menu"></i>
                    <span>角色列表</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="permissions">
                  <template>
                    <i class="el-icon-menu"></i>
                    <span>权限列表</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span slot="title">商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <template>
                    <i class="el-icon-menu"></i>
                    <span>商品列表</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <template>
                    <i class="el-icon-menu"></i>
                    <span>分数参数</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="3-3">
                  <template>
                    <i class="el-icon-menu"></i>
                    <span>商品分类</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <template>
                    <i class="el-icon-menu"></i>
                    <span>订单列表</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span slot="title">数据统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">
                  <template>
                    <i class="el-icon-menu"></i>
                    <span>数据报表</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      isCollapse: true,
      isShow: false
    }
  },
  methods: {

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.container {
  height: 100vh;
  .el-header {
    background-color: blue;
    display: flex;
    justify-content: space-between;
    .el-button {
      // width: 40px;
      height: 40px;
      font-size: 15px;
      margin-right: 15px;
      margin-top: 10px;
      padding: 0 10px;
    }
  }
  .el-aside {
    background-color: skyblue;
  }
  .el-main {
    background-color: #f5f7f9;
  }
}
.el-menu {
  border-right: none;
}
img {
  width: 80px;
  height: 50px;
  background-size: cover;
}
.tou {
  font-size: 28px;
  color: #fff;
  margin-left: 15px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-radio-button__orig-radio {
  margin: 0;
  padding: 0;
}
/deep/ .anniu {
  width: 200px;
  background-color: pink;
}
.shouqi {
  width: 64px;
  // height: 50px;
  background-color: pink;
}
.el-menu-vertical-demo {
  background-color: skyblue;
}
</style>
