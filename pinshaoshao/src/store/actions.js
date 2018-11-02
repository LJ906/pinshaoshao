// 引入请求
import {
  getHomeCasual,
  // getHomeNav,
  // getHomeShopList,
  // getRecommendShopList,
  // getSearchGoods,
  // getUserInfo,
  // getLogout,
  // getCartsGoods
} from '../api'

// 引入mutation 方法名 
import {
  HOME_CASUAL
  
} from './mutation-types'

export default {
  // actions 中的第一个参数默认 {commit}
  reqHomeCasual ({commit}) {    
    const result = getHomeCasual();
    commit (HOME_CASUAL, {homeCasual : result.data})
  }
}
