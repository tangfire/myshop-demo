<template>
    <div id="my-markdown" class="markdown-body">
      <vue-markdown :source="md"></vue-markdown>
    </div>
  </template>

<script>
// 引入 VueMarkdown 组件
import VueMarkdown from 'vue-markdown'

// 这里根据 Webpack 配置，你可能需要直接导入 Markdown 文件内容
import markdownFile from '@/assets/content.md' // 请根据实际路径调整

export default {
  name: 'MyMarkdown',
  components: {
    VueMarkdown
  },
  data () {
    return {
      md: markdownFile // 直接将导入的 Markdown 内容赋值给 `md`
    }
  }
}
</script>

  <style>
  @import "../assets/css/github-markdown.css";
  .markdown-body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 40px;
  }
  </style>
