<template>
      <div id="myLogin">
        <el-dialog title="登录" width="300px" center :visible.sync="isLogin">
            <el-form :model="LoginUser" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="name">
                    <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="LoginUser.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input
                            prefix-icon="el-icon-view"
                            type="password"
                            placeholder="请输入密码"
                            v-model="LoginUser.pass"
                        ></el-input>
                </el-form-item>
                <el-form-item>
                <el-button size="medium" type="primary" @click="Login" style="width:100%;">登录</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'MyLogin',
  data () {

  }
}

</script>
