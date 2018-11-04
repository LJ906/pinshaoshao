// 请求方法
import { 
  getHomeCasual,
  getHomeNav,
  getHomeShopList
 } from '../api'


 // mutation-type muatation方法名字
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST

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
    console.log('reqHomeShopList',res)
    commit(HOME_SHOP_LIST, {homeshoplist: res.message.goods_list});
  },

}
