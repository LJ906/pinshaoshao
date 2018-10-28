<template>
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" >
          <img src="./../imgs/rowing/s1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../imgs/rowing/s1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./../imgs/rowing/s1.png" alt="">
        </div>
      </div>
      <div class="swiper-pagination" ></div>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: "hot", 
  data () {
    return {

    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container',{
      autoplay:true,//等同于以下设置
      loop: true,
      speed: 1000,
      pagination: {
          el: '.swiper-pagination',
        },
      })
  }
};
</script>

<style >
.hot {
  width: 100%;
  height: 100%;
  background-color: red;
  text-align: center;
}

img {
  border: 0;
  max-width: 100%;
  width: auto;
  height: auto;
  vertical-align: top;
}
</style>
