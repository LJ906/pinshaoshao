<template>
  <div class="hot-nav">
     <!-- 滚动区域 -->
     <div class="hot-nav-content">
       <div class="nav-content-inner">
          <a class="inner-item" 
            v-for="(item, index) in navList"
            :key="index">
            <img :src="item.iconurl" alt="">
            <span>{{item.icontitle}}</span>
          </a>
          
       </div>
     </div>
    <!--进度条-->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'hotNave', 
  data () {
    return {
      navList: [
        {
          navId: 1,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon01.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 2,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon02.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 3,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon03.png'),
          jumpUrl: 'https:www.baidu.com'
        },
       {
          navId: 4,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon04.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 5,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon05.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 6,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon06.gif'),
          jumpUrl: 'https:www.baidu.com'
        },
       {
          navId: 7,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon07.png'),
          jumpUrl: 'https:www.baidu.com'
        },

        {
          navId: 8,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon08.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 9,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon09.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        
        {
          navId: 10,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon10.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 11,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon11.png'),
          jumpUrl: 'https:www.baidu.com'
        },
       {
          navId: 12,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon12.png'),
          jumpUrl: 'https:www.baidu.com'
        },

        {
          navId: 13,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon13.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 14,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon03.png'),
          jumpUrl: 'https:www.baidu.com'
        },
       {
          navId: 15,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon01.png'),
          jumpUrl: 'https:www.baidu.com'
        },
        {
          navId: 16,
          icontitle: '限时秒杀',
          iconurl: require('./../../imgs/nav/nav_icon02.png'),
          jumpUrl: 'https:www.baidu.com'
        }
      ], 
      // 1. 屏幕的宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 2. 滚动内容的宽度
      scrollContentW: 720,
      // 3. 滚动条背景的长度
      bgBarW: 100,
      // 4. 滚动条的长度
      barXWidth: 0,
      // 5. 起点
      startX: 0,
      // 6. 记录结束点
      endFlag: 0,
      // 7. 移动的距离
      barMoveWidth: 0
    }
  },
  mounted () {
     
           this.getBottomBarWidth();
       this.bindEvent();
  },
  methods: {
    // 获取滚动条的长度
    getBottomBarWidth () {
      this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW)
    },
     // 移动端事件监听
    bindEvent(){
        this.$el.addEventListener('touchstart',this.handleTouchStart,false);
        this.$el.addEventListener('touchmove',this.handleTouchMove,false);
        this.$el.addEventListener('touchend',this.handleTouchEnd,false);
    },
    // 开始触摸
    handleTouchStart(event){
        // console.log(event.touches);
        // 1. 获取第一个触点
      let touch = event.touches[0];
        // 2.求出起始点
      this.startX = Number(touch.pageX);
      // console.log(this.startX);
    },
      // 开始移动
    handleTouchMove(){
      // console.log('开始移动');
      // 1. 获取第一个触点
      let touch = event.touches[0];
      // 2. 求出移动的距离
      let moveWidth = Number(touch.pageX) - this.startX;
      // console.log(moveWidth);
      // 3. 求出滚动条走的距离
      this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag);

      // 4. 边界值处理
      if(this.barMoveWidth <= 0){ // 左边
        this.barMoveWidth = 0;
      }else if(this.barMoveWidth >= this.bgBarW - this.barXWidth){ // 右边
        this.barMoveWidth = this.bgBarW - this.barXWidth;
      }
    },
    // 结束触摸
    handleTouchEnd(){
      console.log('结束触摸');
      this.endFlag = this.barMoveWidth;
    },

  },
  computed: {
    innerBarStyle () {
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      }
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus" >
.hot-nav  
  width 100%
  height 4.8rem
  position relative
  background-color #f5f5f5
  padding-bottom .266667rem
  .hot-nav-content
    width 100%
    overflow-x scroll
    .nav-content-inner
      width 19.2rem
      height 4.8rem
      display flex
      flex-wrap wrap
      .inner-item 
        width 2.4rem
        height 2.4rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        font-size .373333rem
        color #666666
        img 
          width 40%
          margin-bottom .133333rem   
   
  .hot-nav-content::-webkit-scrollbar
    display none

  .hot-nav-bottom
    position absolute 
    left 50%
    margin-left -50px
    bottom .213333rem
    width 2.666667rem
    height .053333rem
    background #ccc

    .hot-nav-bottom-inner  
      position absolute
      left 0
      width 0
      height 100%
      background-color orangered

</style>
