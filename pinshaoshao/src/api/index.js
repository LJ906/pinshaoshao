import ajax from './ajax'

// 1. 基础路径
// const BASE_URL = '/api';
const BASE_URL = 'http://localhost:3000';
// 请求数据

// 热门（首页)轮播图
// 2.1 请求首页的轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');

// 2.2 请求首页的导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');

// 2.3 请求首页的商品数据
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist');

// 2.4 请求推荐的商品数据
export const getRecommendShopList = (params) => ajax(BASE_URL + '/api/recommendshoplist', params);
