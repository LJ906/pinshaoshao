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

        <router-link tag="div" to="/about">
          <img src="//t00img.yangkeduo.com/goods/images/2018-10-31/3d285dd0506dc912e9771738ea28e045.jpeg?imageMogr2/format/webp/quality/50" alt="" width="100%">
        </router-link>
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
    // dispatch actions   
    this.$store.dispatch('reqHomeCasual');
    console.log(this.homecasual); 


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
  /* width: auto;
  height: auto; */
  vertical-align: top;
}
</style>
