<template>
  <ul class="bottom-tab">
    <li 
      v-for="(item, index) in tabBarList"
      :key="index"
      @click="switchTo(item.path)">
      <img 
        :src="$route.path.includes(item.path) ? item.selectedImg : item.normarImg" alt="">
      <span :class="{active: $route.path.includes(item.path)}">{{item.name}}</span>
      <!-- 当前路由中包含 这个路径的时候就选中，  -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      tabBarList : [
        {
          name: '首页',
          path: '/home',
          normarImg: require('./../../static/img/icon_home.png'),
          selectedImg: require ('./../../static/img/icon_home_selected.png')
        },
        {
          name: '推荐',
          path: '/recommend',
          normarImg: require('./../../static/img/icon_intro.png'),
          selectedImg: require ('./../../static/img/icon_intro_selected.png')
        },
        {
          name: '搜索',
          path: '/search',
          normarImg: require('./../../static/img/icon_search.png'),
          selectedImg: require ('./../../static/img/icon_search_selected.png')
        },
        {
          name: '聊天',
          path: '/chat',
          normarImg: require('./../../static/img/icon_chat.png'),
          selectedImg: require ('./../../static/img/icon_chat_selected.png')
        },
        {
          name: '个人中心',
          path: '/me',
          normarImg: require('./../../static/img/icon_mine.png'),
          selectedImg: require ('./../../static/img/icon_mine_selected.png')
        },

      ]
    }
  },
  methods: {
    switchTo (path) {
      this.$router.replace(path)     
    }
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.bottom-tab  
  width 100%
  height 1.333333rem
  background-color #fff
  position fixed
  left 0
  bottom 0
  z-index 999
  display flex
  justify-content center

  .active 
    color: red
  li 
    display flex
    flex 1
    flex-direction column
    justify-content center
    align-items center
    text-align center
    font-size .32rem

    img 
      width 31%
      margin-bottom .053333rem
</style>
