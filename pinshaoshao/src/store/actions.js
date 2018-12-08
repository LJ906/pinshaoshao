// 请求方法
import { 
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods
 } from '../api'


 // mutation-type muatation方法名字
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS

} from './mutation-types'

export default {
  //请求首页轮播图  
  async reqHomeCasual({commit}) {
    const res = await getHomeCasual();
    if (res.success_code === 200) {
      commit(HOME_CASUAL, {homecasual: res.message})
    }
  },

  //请求首页导航数据
  async reqHomeNav ({commit}) {
    const res = await getHomeNav();
    commit(HOME_NAV, {homenav: res.message.data});
  },

  //请求首页商品数据
  async reqHomeShopList ({commit}) {
    const res = await getHomeShopList();
    commit(HOME_SHOP_LIST, {homeshoplist: res.message.goods_list});
  },

  // 推荐列表商品数据
  async reqRecommendShopList ({commit}, params) {
    const res = await getRecommendShopList(params);
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: res.message})
    params.callback && params.callback();
  },

  // 推荐搜索列表数据
  async reqSearchGoods ({commit}, callback) {
    const res = await getSearchGoods();    
    commit(SEARCH_GOODS, {searchgoods: res.message.data})
    callback&& callback();
  },


}
