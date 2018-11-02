<template>
  <div class="shop-container">
    <ul class="shop-list">
      <li class="shop-list-item" 
        v-for="(shop, index) in homeshoplist" 
        :key="index">
        <img :src="shop.image_url" alt="">
        <h4 class="list-item-title">{{shop.goods_name}}</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{shop.normal_price / 100}}</span>
          <span class="item-counter">{{shop.sales_tip}}</span>
          <span class="item-user">
            <img 
              v-for="(user, i) in shop.bubble"
              :key="i"
              :src="shop.image_url" 
              alt="">
          </span>
          <span class="item-buy">
            <button>去拼单 ></button>
          </span>
        </div>
      </li>
           
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HotShopList',
  data () {
    return {
      homeshoplist: [
        {
          image_url: require("./../../imgs/shop_list/shop_item.png"),
          goods_name: '【唐幂】整条刺绣民族风围巾女披肩保暖',
          normal_price: 120,
          sales_tip: '已拼5345件',
          bubble: [
            {
              avatar: require ("./../../imgs/shop_list/user1.jpg"),
              avatar: require ("./../../imgs/shop_list/user1.jpg")
            }
          ]
        },
        {
          image_url: require("./../../imgs/shop_list/shop_item.png"),
          goods_name: '【唐幂】整条刺绣民族风围巾女披肩保暖',
          normal_price: 120,
          sales_tip: '已拼5345件',
          bubble: [
            {
              avatar: require ("./../../imgs/shop_list/user1.jpg"),
              avatar: require ("./../../imgs/shop_list/user1.jpg")
            }
          ]
        },
          {
          image_url: require("./../../imgs/shop_list/shop_item.png"),
          goods_name: '【唐幂】整条刺绣民族风围巾女披肩保暖',
          normal_price: 120,
          sales_tip: '已拼5345件',
          bubble: [
            {
              avatar: require ("./../../imgs/shop_list/user1.jpg"),
              avatar: require ("./../../imgs/shop_list/user1.jpg")
            }
          ]
        },
      ]
    }
  }, 
  computed: {
    // ...mapState[ 'homeshoplist']
  },
  mounted () {
    this.test( )
  },
  methods: {
    test ( ) {
      const arr = [1,2,3,4]
      const arr1 = ['https://www.baidu.com', 'baidu.com', 'secoo.com']
      console.log(arr1.includes('baidu.com'));
      
    }
  }

}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .shop-container
    margin-bottom 1.333333rem
    background-color #f5f5f5
    .shop-list-item
      margin-bottom .266667rem
      background-color #fff
      display flex
      flex-direction column
      img 
        max-width 100%
      .list-item-title
        line-height .586667rem
        width 94%
        margin-left 3%
        height 1.173333rem
        overflow hidden
        font-size .373333rem
      .list-item-bottom
        margin .266667rem 0
        display flex
        flex-direction row
        justify-content space-around
        align-items center
      .item-price
        font-size .48rem
        text-align center
        font-weight bolder
        color red
        flex 1
      .item-counter
        flex 2
        font-size .32rem
        color #cccccc
      .item-user
        display flex
        justify-content center
        align-items center
        flex 1
        img
          width .8rem
          border-radius 50%
        img:nth-child(2)
          margin-left -0.16rem
      .item-buy
        flex 2
        button
          width 80%
          height .906667rem
          font-size .4rem
          border none
          color #fff
          display flex
          justify-content center
          align-items center
          margin-left .266667rem
          background-color red
          border-radius .213333rem
</style>
