<template>
<div name="app" id="app">
    <el-container>
        <!-- 顶部导航栏 -->
        <div class="topbar">
            <div class="nav">
                <ul>
                    <li>
                        <el-button type="text" @click="login">登录</el-button>
                        <span class="sep">|</span>
                        <el-button type="text" @click="register = true">注册</el-button>
                    </li>
                    <li>
                        欢迎━(*｀∀´*)ノ亻!
                        <el-popover placement="top" width="180" v-model="visiable">
                            <p>确定退出登录吗?</p>
                            <div style="text-align: right; margin: 10px 0 0">
                                <el-button size="mini" type="primary" @click="visiable = false">取消</el-button>
                                <el-button size="mini" type="primary" @click="logout">确定</el-button>
                            </div>
                            <el-button type="text" slot="reference">hello popover</el-button>
                        </el-popover>
                    </li>
                    <li>
                        <router-link to="/order">我的订单</router-link>

                    </li>
                    <li>
                        <router-link to="/collect">我的收藏</router-link>
                    </li>
                    <li :class="getNum > 0 ? 'shopCart-full' : 'shopCart'">
                        <router-link to="/shoppingCart">
                            <i></i>购物车
                            <span>(123)</span>
                        </router-link>
                    </li>

                </ul>
            </div>
        </div>
        <!-- 顶部导航栏END -->

        <el-header>
            <el-menu :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#409eff"
            router
            >
                <div class="logo">
                    <router-link to="/">
                        <img src="./assets/imgs/logo.png" alt="">
                    </router-link>
                </div>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/goods">全部商品</el-menu-item>
                <el-menu-item index="/about">关于我们</el-menu-item>
                <div class="so">
                    <el-input v-model="search" placeholder="请输入搜索内容">
                        <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
                    </el-input>
                </div>

            </el-menu>
        </el-header>
        <!-- 顶栏容器END -->

        <!-- 登录模块 -->

        <!-- 注册模块 -->

        <!-- 主要区域模块 -->
        <el-main>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </el-main>
        <!-- 主要区域模块END -->

    </el-container>

</div>

</template>

<script>
export default {
  data () {
    return {
      visiable: true,
      getNum: 1
    }
  }
}
</script>

<style>

/* 全局CSS */
*{
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
}

#app .el-header{
    padding: 0;
}

/* #app .el-main{
    min-height: 300px;
    padding: 20px;
} */

/* #app .el-footer{
    padding: 0;
} */

a,a:hover {
  text-decoration: none;
}

/* 全局CSS END */

/* 顶部导航栏CSS */

.topbar {
  height: 40px;
  background-color: #3d3d3d;
  margin-bottom: 20px;
}

.topbar .nav {
  width: 1225px;
  margin: 0 auto;
}

.topbar .nav ul{
    float: right;
}

.topbar .nav li{
    float: left;
    height: 40px;
    color: #b0b0b0;
    font-size: 14px;
    /* 设置文本的 水平对齐方式 为居中。这意味着如果 <li> 内部有文本或其他内联元素，它们会在 <li> 元素内水平居中显示。 */
    text-align: center;
    line-height: 40px;
    margin-left: 20px;
}

.topbar .nav .sep{
    color: #b0b0b0;
    font-size: 12px;
    margin: 0 5px;
}

.topbar .nav li .el-button {
  color: #b0b0b0;
}

.topbar .nav .el-button:hover {
  color: #fff;
}

.topbar .nav li a {
  color: #b0b0b0;
}

.topbar .nav a:hover {
  color: #fff;
}

/* 顶部导航栏CSS END */

/* 顶栏容器CSS */
.el-header .el-menu {
  max-width: 1225px;
  margin: 0 auto;
}
.el-header .logo {
  height: 60px;
  width: 189px;
  float: left;
  margin-right: 100px;
}
.el-header .so {
  margin-top: 10px;
  width: 300px;
  float: right;
}
/* 顶栏容器CSS END */

</style>
