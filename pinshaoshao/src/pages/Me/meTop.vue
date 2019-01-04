<template>
  <div class="me-top">

    <router-link tag="div" class="user" to="/detail">
     <img src="./images/me_icon.png" alt>
      <p v-if="userInfo.user_phone">{{userInfo.user_phone | phoneFormate}}</p>
      <i class="itlike-3"></i>
    </router-link>
    <div class="my-older">
      <div class="older-top">
        <h3>我的订单</h3>
        <span>查看全部 ></span>
      </div>

      <ul class="older-bottom">
        <li class="bottom-item">
          <i class="itlike-1"></i>
          <span>待付款</span>
        </li>
        <li class="bottom-item">
          <i class="itlike-2"></i>
          <span>待分享</span>
        </li>
        <li class="bottom-item">
          <i class="itlike-3"></i>
          <span>待发货</span>
        </li>
        <li class="bottom-item">
          <i class="itlike-4"></i>
          <span>待收货</span>
        </li>
        <li class="bottom-item">
          <i class="itlike-5"></i>
          <span>待评价</span>
        </li>
      </ul>
      <!-- 设置 -->
      <ul class="setting">
        <li class="setting-item">
          <i class="itlike-1"></i>
          <span>新人红包</span>
        </li>
        <li class="setting-item">
          <i class="itlike-2"></i>
          <span>多多果园</span>
        </li>
        <li class="setting-item">
          <i class="itlike-3"></i>
          <span>砍价免费拿</span>
        </li>
        <li class="setting-item">
          <i class="itlike-4"></i>
          <span>边逛边赚</span>
        </li>
        <li class="setting-item">
          <i class="itlike-5"></i>
          <span>天天领红包</span>
        </li>
        <li class="setting-item">
          <i class="itlike-uniE902"></i>
          <span>收货地址</span>
        </li>
        <li class="setting-item">
          <i class="itlike-1"></i>
          <span>我的评价</span>
        </li>
        <li class="setting-item">
          <i class="itlike-3"></i>
          <span>官方客服</span>
        </li>
      
        <router-link tag="li" class="setting-item" to="/setting">
          <i class="itlike-4"></i>
          <span>设置</span>
        </router-link>
      </ul>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'meTop',
  computed: {
    ...mapState(['userInfo'])
  },
  filters: {
    phoneFormate (phone) {
      // 转成数组
      let phoneArr = [...phone];
      let str = '';

      phoneArr.forEach((item, index) => {
        if (index >=3 && index <=6) {
          str += "*";
        } else {
          str += item;
        }
      })
       return str;
    }
  }

};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-top
    font-size 14px
    .user
      display flex
      flex-direction row
      align-items center
      padding 20px
      background-color #fff
      margin-bottom 10px
      p
        margin 0 10px
      img
        width 60px
        height 60px
        border-radius 50%
      i
        font-size 25px
    .my-older
      background-color #fff
      .older-top
        display flex
        flex-direction row
        padding 0 10px
        justify-content space-between
        height 44px
        line-height 44px
      .older-bottom
        display flex
        .bottom-item
          flex 1
          height 60px
          display flex
          flex-direction column
          justify-content center
          align-items center
          i
            font-size 30px
            color #E9232C
            margin-bottom 5px
    .setting
      margin-top 10px
      background-color #fff
      display flex
      justify-content space-between
      flex-wrap wrap
      .setting-item
        width 2.4rem
        height 1.866667rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        i
          font-size 30px
          color orange
          margin-bottom 5px
</style>
