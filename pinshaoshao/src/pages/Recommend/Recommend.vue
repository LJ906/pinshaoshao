<template>
  <div class="recommend-container" ref="wrapper">    
    <ul class="recommend">
      <shop-list 
        v-if="recommendshoplist"
        v-for="(shop, index) in recommendshoplist" :item="shop" :key="index"/>
    </ul>

  </div>
</template>

<script>
// 页面加载图标
import { Indicator } from 'mint-ui';
import BScroll from 'better-scroll';
import mapState from 'vuex';
import ShopList from '@/components/ShopList/ShopList';
export default {
  name: 'recommend',
  data () {
    return {
      // 模拟数据后续可删
      recommendshoplist: [
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '爱丽丝的附近按时离得近',
          price: '677',
          sales_tip: '特价'
        },
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '哈哈哈我是第二个',
          price: '899',
          sales_tip: '双十一'
        },
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '爱丽丝的附近按时离得近',
          price: '677',
          sales_tip: '特价'
        },
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '哈哈哈我是第二个',
          price: '899',
          sales_tip: '双十一'
        },
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '爱丽丝的附近按时离得近',
          price: '677',
          sales_tip: '特价'
        },
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '哈哈哈我是第二个',
          price: '899',
          sales_tip: '双十一'
        },
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '爱丽丝的附近按时离得近',
          price: '677',
          sales_tip: '特价'
        },
        {
          thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
          short_name: '哈哈哈我是第二个',
          price: '899',
          sales_tip: '双十一'
        }
      ],

      page: 1,
      count: 10,
    }
  },
  computed:{
    // ...mapState(['recommendshoplist'])
  },
  created(){
    // this._initBScroll();

  },
  mounted() {
   
    // 加载图标
    // Indicator.open('Loading...');
    // this.$store.dispatch('recommendshoplist', {
    //   page: this.page,
    //   count: this.count,
    //   callback: () => {
    //     // 请求成功后关掉加载
    //     Indicator.close();
    //   }
    // })

    setTimeout(() => {
      
    this._initBScroll();
    }, 5000);


  },
  methods: {
    // 如果子元素或者父元素 DOM 结构发生改变的时候，必须重新调用 scroll.refresh() 方法重新计算来确保滚动效果的正常。
    // 1.1 初始化BScroll
    _initBScroll() {
      this.listScroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        probeType: 3
      });

      this.listScroll.on('touchEnd', (pos)=> {
        // pos指的是wrapper 的位置， 整个wrapper的位移。 y 正 则下拉刷新， 正常滑动的情况y是负值，
        // maxScrollY 滚动的位置 负值
        console.log('pos', pos);
        console.log('maxScrollY', this.listScroll.maxScrollY);
        
        if (pos.y >= 50) {
          console.log('下拉刷新');
        }

        // 上拉加载
        if (this.listScroll.maxScrollY > pos.Y + 20) {
          console.log('上拉加载。。');
          Indicator.open('正在加载数据...')
          // 再次发请求 下一页数据
          this.$store.dispatch('reqRecommendShopList', {
            page: this.page,
            count: this.count,
            callback: () => {
              // 请求成功后关掉加载
              Indicator.close();
            }
          })
          
        }
      }) 


      this.listScroll.on('scrollEnd', () => {
        this.listScroll.refresh();
      });

      // 下拉刷新
      this.listScroll.on ('pullingDown', () => {
        console.log('pullingDown下拉刷新的动作后');        
      })
      // 上拉加载
      this.listScroll.on ('pullingUp', () => {
        console.log('pullingUp上拉加载');        
      })

    }
  },
  watch: {
    // 当recomdshoplist 发生改变是重新初始化 better-scroll
    // dom选择完后初始化

    recommendshoplist () {
      this.$nextTick(() => {
          // 让当前的页码+1
          this.page += 1;
          // 初始化
          this._initBScroll();
        })
    }
  },
  components: {
    ShopList
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus" >
  .recommend-container
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #F5F5F5
      padding-bottom 1.333333rem

</style>
