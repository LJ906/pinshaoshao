// 引入mutation 方法名 
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST
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
}
