import ajax from './ajax'

// 1. 基础路径
// const BASE_URL = '/api';
const BASE_URL = 'http://localhost:3000';
// const BASE_URL = '';
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

// 2.5 请求搜索的列表数据 左边分类列表
export const getSearchGoods = () => ajax(BASE_URL + '/api/searchgoods');

// 2.6 获取手机短信验证码 
export const getPhoneCode = (params) => ajax(BASE_URL + '/api/send_code', params);

// 2.7 短信验证码登录
export const phoneCodeLogin = (params) => ajax(BASE_URL + '/api/login_code', params, 'POST');

// 2.8 用户名和密码登录
// export const pwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');
export const pwdLogin = (params) => ajax(BASE_URL + '/api/login_pwd', params, 'POST');

// 2.9 根据id查询用户信息
export const getUserInfo = (params) => ajax(BASE_URL + '/api/user_info', params);

// 2.10 退出登录
export const getLogout = () => ajax(BASE_URL + '/api/logout');

// 2.11 修改用户信息
export const changeUserInfo = (user_id, user_name, user_sex, user_address, user_birthday, user_sign) => ajax(BASE_URL + '/api/change_user_msg', {
  user_id,
  user_name,
  user_sex,
  user_address,
  user_birthday,
  user_sign
}, 'POST');

// 2.12 加入购物车
export const addGoodsToCart = ({user_id, goods_id, goods_name, thumb_url, price}) => ajax(BASE_URL + '/api/add_shop_cart', {
  user_id, 
  goods_id, 
  goods_name, 
  thumb_url, 
  price
}, 'POST');

// 2.13获取购物车数据
export const getCartsGoods = () => ajax(BASE_URL + '/api/cart_goods');
export const deleteCartGoodsSingle = (params) => ajax(BASE_URL + '/api/delete_goods', params);