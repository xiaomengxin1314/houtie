<template>
  <div class="login-contanier">
    <div class="denglu">
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-item">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="sent">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getLogin } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3~8之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3~8之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    sent () {
      this.$refs.loginFormRef.resetFields()
    },
    async login () {
      // 二次校验
      try {
        await this.$refs.loginFormRef.validate()
        try {
          const res = await getLogin(this.loginForm)
          console.log(res)
          // todo 把token存到vuex中并且只有化localStrage
          if (res.data.meta.status === 200) {
            this.$store.commit('setUser', res.data.data)
            this.$router.push('/home')
            this.$message('登陆成功')
          } else {
            this.$message('登陆失败')
          }
        } catch (err) {
          console.log(err)
        }
        // console.log('校验成功')
      } catch (err) {
        this.$message.error('登陆表单校验失败')
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
.login-contanier {
  width: 100vw;
  height: 100vh;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  .denglu {
    width: 450px;
    height: 240px;
    background-color: #fff;
    padding: 30px 15px;
    box-sizing: border-box;
    .btn-item {
      text-align: right;
    }
  }
}
</style>
