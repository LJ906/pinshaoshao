// 引入mutation 方法名 
import {
  HOME_CASUAL
  
} from './mutation-types'

export default {
  // 方法名为变量
  // 首页轮播图
  [HOME_CASUAL] (state, {homeCasual}) {
    state.homecasual = homeCasual;    
  },

  changCount (state) {
     state.count ++ 
  }, 
  addItemToTodos (state) {
    state.todos.push ({id: 3, done: false, title: '测试mapMutations'})
  } 
}