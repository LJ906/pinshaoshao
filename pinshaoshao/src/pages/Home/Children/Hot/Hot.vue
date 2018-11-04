<template>
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" 
          v-for="(item, index) in homecasual"
          :key="index"
          >
          <img :src="item.imgurl" alt="" width="100%">
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
    <!--2.中间导航-->
    <hot-nav/>
    <!-- 商品列表 -->
    <hot-shop-list/>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HotNav from './HotNav'
import HotShopList from './HotShopList'

import {mapState} from 'vuex'

export default {
  name: "hot",   
  components: {
    HotNav,
    HotShopList
  },
  computed: {
    ...mapState(['homecasual'])
  },
  mounted () { 
    this.$store.dispatch('reqHomeCasual'); // 请求轮播图数据
     
    this.$store.dispatch('reqHomeNav'); // 请求导航数据父组件中请求比较清晰
    this.$store.dispatch('reqHomeShopList'); // 请求导航数据父组件中请求比较清晰
  }, 
  watch: {
    homecasual () {
      this.$nextTick(()=> {
        //  延迟到更新dom完成的时候在加载swiper
        var mySwiper = new Swiper('.swiper-container',{
          autoplay: true,//等同于以下设置
          loop: true,
          speed: 1000,
          pagination: {
            el: '.swiper-pagination',
          }
        })

      })
    }
  }
};
</script>

<style scoped>
.hot {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  text-align: center;
}

img {
  border: 0;
  max-width: 100%;
  vertical-align: top;
}
</style>
