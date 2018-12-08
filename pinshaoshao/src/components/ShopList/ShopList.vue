<template>
  <a class="recommend-item">
    <img v-lazy="item.thumb_url" alt="">
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price}}</span>
      <span class="item-sales">{{item.sales_tip}}</span>
      <button class="item-btn">加入购物车</button>
    </div>
  </a>
</template>

<script>

export default {
  name: 'ShopList', 
  data () {
    return {
      // item :  {
      //   thumb_url: '//t00img.yangkeduo.com/goods/images/2018-10-26/aceb3b24e1446426a2f91f7896d56fb1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/372/q/70/format/webp',
      //   short_name: '爱丽丝的附近按时离得近',
      //   price: '677',
      //   sales_tip: '特价'
      // }
    }
  },
  props: {
    item: Object
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-item:nth-child(odd) 
    margin-right 1%


  .recommend-item 
    width 49.5%
    background-color #fff
    padding-bottom .2rem
    margin-bottom .2rem
    img 
      max-width 100%
    .item-title 
      height .533333rem
      margin .133333rem 0
      padding .133333rem 0
      font-size .346667rem
      font-weight lighter
      line-height .266667rem
      overflow  hidden
      white-space nowrap
      text-overflow ellipsis
    .item-bottom 
      display flex
      flex-direction row
      justify-content center
      align-items center
      padding 0 .16rem
      .item-price
        flex 2
        color red
        font-size .32rem
        font-weight 700
      .item-sales
        flex 3
        font-size 10px
        color #666666
      .item-btn
        flex 4
        border 1px solid orangered
        height .693333rem
        border-radius .133333rem
        font-size .266667rem
        background-color transparent
        color red
  
    
</style>
