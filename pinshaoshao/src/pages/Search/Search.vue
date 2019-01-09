<template>
  <div class="search">
    <!--搜索导航-->
    <search-nav :showSearchPanel="showSearchPanel"/>
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper">
        <ul style="position:relative" >
          <!--current-->
          <li class="menu-item"
              v-for="(goods, index) in searchgoods"
              :key="index"
              ref = 'menulist'
              :class="{current: index === currentIndex}" 
              @click="clickLeftItem(index)">
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper">
        <ul ref="shopsParent" style="position: relative">
          <li class="shops-li" v-for="(goods, index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt="">
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(item, index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- 搜索频道  隐藏， 点击搜索后显示出来-->
    <search-panel :isShow="isShow" :showSearchPanel="showSearchPanel"/>

  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import searchNav from './children/SearchNav'
  import searchPanel from './children/SearchPanel'

  import BScroll from 'better-scroll'
  export default {
    name: "Search",
    data() {
      return {
        scrollY: 0, // 右侧列表滑动的Y轴坐标(实时更新)
        rightLiTops: [], // 所有分类的头部位置 右边 li的高度
        isShow: false  
      }
    },
    mounted() {
        // 初始化bscroll 在这里初始化可能达 在数据获取到前
        this.$store.dispatch('reqSearchGoods')
    },
    computed: {
      ...mapState(['searchgoods']),
        currentIndex () {
					const {scrollY, rightLiTops} = this; 
					// 获取滚动的高度 和 右边li top数 比较确定currentIndex
					return rightLiTops.findIndex((liTop, index) => {
							return scrollY >= liTop && scrollY < rightLiTops[index + 1]
					})
        }
    },
    components: {
      searchNav,
      searchPanel
    },
    watch: {
      searchgoods() {
        this.$nextTick(() => {
          // 1.1 初始化
          this._initBScroll();
          // 1.2 求出右边所有版块的头部位置
          this._initRightLiTops();
        })
      }
    },
    methods: {
      // 1.1 初始化
      _initBScroll() {      
        this.leftScroll = new BScroll('.menu-wrapper', {});      
        this.rightScroll = new BScroll('.shop-wrapper', {
          probeType: 3
        });

        // 1.3 监听右侧的滑动事件
        this.rightScroll.on('scroll', (pos) => {            
          this.scrollY = Math.abs(pos.y); // 页面滚动的高度         
          
          this._leftScroll(this.currentIndex - 3);     // 左边滚动到currentIndex -3的位置        
        })
      },

      // 1.2 求出右边所有版块的头部位置
      _initRightLiTops() {        
        // 右边高度数组
        const tempArr = [];
        // 1.2.2 定义变量记录高度
        let top = 0;
        // tempArr.push(top);
        let allLis = this.$refs.shopsParent.getElementsByClassName('shops-li');
        Array.prototype.slice.call(allLis).forEach(li => {
          tempArr.push(li.offsetTop);
        });
        
        // 1.2.4 更新数据
        this.rightLiTops = tempArr;    
      },

      // 1.3  左边点击切换
      clickLeftItem(index) {
        this.rightScroll.scrollTo(0, -this.rightLiTops[index], 300);
      },

      // 1.4 左侧联动
      _leftScroll(index){                              
         this.leftScroll.scrollToElement(this.$refs.menulist[index], 300)
      },

      // 1.5 是否显示搜索面板
      showSearchPanel(flag){
				this.isShow = flag;          
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .search
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden

  .shop
    display flex
    position absolute
    top 1.6rem
    bottom 1.333333rem
    width 100%
    overflow hidden
    .menu-wrapper
      background-color #e0e0e0
      width 2.133333rem
      flex 0 0 2.133333rem
      .menu-item
        width 100%
        height 1.6rem
        background-color: #fafafa
        display flex
        justify-content center
        align-items center
        font-weight lighter
        font-size .426667rem
        color #666666
        position relative
      .current
        color #e02e24
      .current::before
        content: ''
        background-color #e02e24
        width .106667rem
        height .8rem
        position absolute
        left 0
    .shop-wrapper
      flex 1
      background-color #fff
      .shops-title
        display flex
        flex-direction row
        padding 0 .266667rem
        height 1.173333rem
        align-items center
        justify-content space-between
        color #999
        font-size: .4rem
        a
          color #999
          text-decoration none
          font-weight lighter
      .shops-items
        display flex
        flex-wrap wrap
        li
          display flex
          flex-direction column
          width 33.3%
          height 2.4rem
          justify-content center
          align-items center
          color #666
          font-weight lighter
          font-size .373333rem
          img
            width 60%
            height 60%
            margin-bottom .133333rem
      .phone-type
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        border-bottom-1px(#ccc)
        li
          width 33.3%
          display flex
          justify-content center
          align-items center
          margin .133333rem 0
          img
            width 70%
</style>
