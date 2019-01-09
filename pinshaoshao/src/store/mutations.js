import Vue from 'vue'


// 引入mutation 方法名 
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,  // 推荐商品列表，
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,

  CHANGE_CART_COUNT,
  CART_GOODS_CHECKED,
  Check_All,
  DeletGOODS
} from './mutation-types'

export default {
  // 方法名为变量
  // 首页轮播图
  [HOME_CASUAL] (state, {homecasual}) {
    state.homecasual = homecasual;    
  },

  // 首页导航
  [HOME_NAV] (state, {homenav}) {
    state.homenav = homenav;    
  },

  // 首页商品数据
  [HOME_SHOP_LIST] (state, {homeshoplist}) {
    state.homeshoplist = homeshoplist;    
  },

  // 推荐页商品数据
  [RECOMMEND_SHOP_LIST] (state, {recommendshoplist}) {
    // 分页获取
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist);
  },

  // 搜索页商品列表
  [SEARCH_GOODS] (state, {searchgoods}) {
    // 分页请求后，整合到一个数组
    state.searchgoods = state.searchgoods.concat(searchgoods);
  },

  // 获取用户信息 obj
  [USER_INFO] (state, {userInfo}) { 
    state.userInfo = userInfo;
  },

  // 退出登录 清空用户信息
  [RESET_USER_INFO] (state) {    
    state.userInfo = {};
  },

  // 获取购物车数据
  [CART_GOODS_LIST] (state, {cartgoods}) {
    // 自定义checked 属性 默认false
    cartgoods.forEach(goods => {
      if (!goods.checked) {
        Vue.set(goods, 'checked', false);        
      }  
    })

    state.cartgoods = cartgoods

  },

  // 改变购物车商品数量
  [CHANGE_CART_COUNT] (state, {goods, flag}) {
    if (flag == 1) {
      goods.buy_count += 1; // 增加数量
      console.log('加了');
      
    } else {
      goods.buy_count = goods.buy_count === 1 ? 1 : goods.buy_count - 1;
    }
  },

  // 购物车-商品选中和取消选中
  [CART_GOODS_CHECKED] (state, {goods}) {
    goods.checked = !goods.checked;
  },
  // 选中下面，上面跟随选中
  [Check_All] (state, isCheckedAll) {
    isCheckedAll = !isCheckedAll;
    state.cartgoods.forEach(ele => {
      ele.checked = isCheckedAll
    }) 
  },
  // 删除购物车数据
  [DeletGOODS] (state,  {goods}) {
    // 发请求删除   
    state.cartgoods.forEach((ele,index) => {     
      if (ele.goods_id == goods.goods_id) {        
        state.cartgoods.splice(index, 1)
      }
    }) 
  },

}
