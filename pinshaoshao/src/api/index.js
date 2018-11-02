import ajax from './ajax'
// const BASE_URL = 'localhost:3000';
// 模拟data
import homecasual from './../data/homecasual.json'
// 热门（首页)轮播图
export const getHomeCasual = ()=> {
  return homecasual
}
// export const getHomeCasual = ajax('/api/homecasual');
