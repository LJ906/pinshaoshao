// 引入mutation 方法名 
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,  // 推荐商品列表，
  SEARCH_GOODS,
  USER_INFO
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
    // 分页请求后，整合到一个数组
    state.userInfo = userInfo;
  },
}
