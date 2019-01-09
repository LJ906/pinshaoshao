import {MessageBox, Toast} from 'mint-ui'
// 请求方法
import { 
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  pwdLogin,
  getLogout,
  getCartsGoods,
  // addGoodsToCart,
  deleteCartGoodsSingle
 } from '../api'


 // mutation-type muatation方法名字
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,
  CHANGE_CART_COUNT,
  CART_GOODS_CHECKED, // 购物车商品 是否选中
  Check_All,
  DeletGOODS

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

  // 6. 同步获取用户信息 
  syncUserInfo ({commit}, userInfo) {
    commit(USER_INFO, {userInfo})
  },

  // 7. 异步获取用户信息
  async getUserInfo({commit}){
    const result = await getUserInfo();
    console.log(result);
    if(result.success_code === 200){
        commit(USER_INFO, {userInfo: result.message});
    }
  },

  // 8. 退出登录
  async logOut ({commit}) {
    const result = await getLogout();
    console.log('登出res', result);
    if(result.success_code === 200){
      commit(RESET_USER_INFO);
    }
  }, 


  // 10 购物数据
  async reqCartsGoods ({commit}) {
    const result = await getCartsGoods();
    console.log('购物车数据res', result);    
    if(result.success_code === 200){
      commit(CART_GOODS_LIST, {cartgoods: result.message});
    }
  },

  // 11. 购物车改变商品数量

  changeCartCount ({commit}, {goods, flag}) {
    // 发请求     
    commit(CHANGE_CART_COUNT, {goods, flag})
  },

  // 购物车 改变选中状态
  handleCheckedSingle ({commit}, goods) {
    commit(CART_GOODS_CHECKED, {goods})
  },
  handleCheckAll ({commit}, isCheckedAll) {
    commit(Check_All, isCheckedAll)
  },
// 购物车中删除一项
 deleteCartGoods ({commit}, goods) {  
  MessageBox.confirm('您确认要删除吗?').then(async (action) => {     
    const result = await deleteCartGoodsSingle({goods_id: goods.goods_id})
    console.log('resut', result);
    if (result.success_code === 200) { 
      commit(DeletGOODS, {goods})
    } else { 
      Toast(result.message)
      // this.$router.reload() 
    }
    
  });

}

}
