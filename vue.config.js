const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  chainWebpack: config => {
    // 让 Webpack 处理 .md 文件
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
  devServer: {
    open: true,
    port: 8084, // 修改为你想要的端口号
    proxy: {
      '/api': {
        // target: 'http://localhost:3000/', // 本地后端地址
        target: 'http://8.141.3.248:3000/', // 线上后端地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
