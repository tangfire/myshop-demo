<template>
  <div class="home" id="home" name="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
          <img style="height:460px;" :src="$target + item.imgPath" :alt="item.describes" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播图END -->

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {
      carousel: '' // 轮播图数据
    }
  },
  created () {
    console.log('hello world')
    // 获取轮播图数据
    this.$axios
      .post('/api/resources/carousel', {})
      .then(res => {
        this.carousel = res.data.carousel
        // 调试输出拼接后的 URL
        console.log(this.carousel)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

}
</script>

<style>

</style>
