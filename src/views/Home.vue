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
    <div class="main-box">
      <div class="main">
        <!-- 手机商品展示区域 -->
        <div class="phone">
          <div class="box-hd">
            <div class="title">手机</div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <router-link to>
                <img :src="$target +'public/imgs/phone/phone.png'" />
              </router-link>
            </div>
              <div class="list">
                <MyList :list="phoneList" :isMore="true"></MyList>
              </div>
          </div>
        </div>

        <!-- 手机商品展示区域END -->

        <!-- 家电商品展示区域 -->
         <div class="appliance" id="promo-menu">
          <div class="box-hd">
            <div class="title">家电</div>
            <div class="more" id="more">

            </div>
          </div>
         </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {
      // 轮播图数据
      carousel: '',
      phoneList: ''

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
      // 获取各类商品数据
    this.getPromo('手机', 'phoneList')
  },
  methods: {
    getPromo (categoryName, val, api) {
      api = api !== undefined ? api : '/api/product/getPromoProduct'
      this.$axios
        .post(api, {
          categoryName
        })
        .then(res => {
          this[val] = res.data.Product
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
  }

}
</script>

<style scoped>
@import "../assets/css/index.css"
</style>
