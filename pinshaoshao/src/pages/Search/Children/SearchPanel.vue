<template>
<div class="search-panel" v-if="isShow">
  <!-- 搜索框 -->
  <div class="search-nav" >
    <div class="search-input" >
      <input ref="mySearch" type="search" autofocus>
      <img class="search-nav-icon" src="../images/search.png" alt="">
      <span class="search-txt">搜索</span>
    </div>
    <span class="cancel" @click="showSearchPanel(false)" >取消</span>
  </div>
  <!-- 热门搜索 -->
  <div class="search-content">
    <div class="title">
      <img src="../images/hot.png" alt="" width="25">
      <span>热门搜索</span>
    </div>
    <ul class="search-list">
      <li>面巾纸</li>
      <li>浴巾儿童</li>
      <li>石榴水果</li>
      <li>冰箱保鲜盒</li>
      <li>富豪卷纸</li>
      <li>毛巾浴袍</li>
    </ul>
  </div>
   

</div>
</template>

<script>
export default {
  name: 'searchPanel',
  props: {
    isShow: Boolean,
    showSearchPanel: Function
  },
  mounted () {
     this.$refs['mySearch'].focus();
  }



}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.search-panel
  width 100%
  height 100%
  background-color #fff
  position fixed
  left 0
  top 0
  z-index 9999
.search-nav
  display flex
  width 100%
  height 1.333333rem
  background-color #fff
  justify-content center
  align-items center
  border-bottom-1px(#ccc)
  .search-input
    position relative
    width 80%
    height 70%
    border-radius .133333rem
    display flex
    justify-content center
    align-items center
    padding-left .466667rem
    input 
      width 100%
      height 100%
      border-radius .133333rem
      background-color #eee  
      border none 
    .search-nav-icon 
      position absolute
      left 10%
      top 25% 
      width .533333rem
      height .533333rem
    .search-txt 
      position absolute
      left 18%
      top 25% 
      font-size .373333rem
      color #ccc
  .cancel
    display inline-block
    font-size .373333rem
    color #ccc
    flex 1
    text-align center
    line-height .55rem
    padding: .16rem .08rem


.search-content
  width 100%
  height 100%
  padding 30px 15px
  .title
    display flex
    flex-direction row
    align-items center
    color #aaa
    margin-bottom .266667rem
    font-size .533333rem
  .search-list
    display flex
    flex-direction row
    flex-wrap wrap
    li
      background-color: #ededed
      color #aaa
      margin .133333rem .4rem
      padding .066667rem .133333rem
      border-radius .066667rem
      font-size .48rem

</style>
