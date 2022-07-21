   <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-submenu>
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span slot="title">用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">用户列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-lock"></i>
                <span slot="title">权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">角色列表</el-menu-item>
                <el-menu-item index="1-1">权限列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span slot="title">商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">商业列表</el-menu-item>
                <el-menu-item index="1-1">分类参数</el-menu-item>
                <el-menu-item index="1-1">商品分类</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">订单列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span slot="title">数据统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">数据报表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

  <el-button type="primary" size="small" plain>
                      订单列表<i class="el-icon-close el-icon--right"></i
                    ></el-button>
