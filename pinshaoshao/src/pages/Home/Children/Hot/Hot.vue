<template>
  <div class="hot">
    <!-- <input type="text" :value='input'> -->
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
  data () {
	  return {
		  input: '11'
	  }
  },
  components: {
    HotNav,
    HotShopList
  },
  computed: {
    ...mapState(['homecasual'])
  },
  // 组件内的路由守卫
  beforeRouteEnter (to, from, next) {
    // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
    // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
    // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
    // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html

    if(from.name=='dress' || from.name == 'bag'){
      to.meta.isBack = true;
      //判断是从哪个路由过来的，
      //如果是dress过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
	}
	
   
    next();
  },
  // 缓存组件，第一次渲染也算可见的时候调用
  activated () { 
    if(!this.$route.meta.isBack){
    //   this.input++
      // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
      // 如果是不用返回的，重新请求数据调用
    //   this.$store.dispatch('reqHomeCasual'); // 请求轮播图数据
    }
    // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
    this.$route.meta.isBack = false

 
  },
  // 不可见的时候调用
  deactivated () {

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
            loop: true,
            autoplay: {
				disableOnInteraction: false,
            },
            pagination: {
				el: '.swiper-pagination',
				clickable: true
            },
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
