import Vue from 'vue'
import Router from 'vue-router'
const SelectLogin = () => import('@/pages/login/SelectLogin')
const Login = () => import('@/pages/login/Login')
// const Lianxi = () => import('@/pages/lianxi')
const Home = () => import('@/pages/Home/Home')
const Recommend = () => import('@/pages/Recommend/Recommend')
const Search = () => import('@/pages/Search/Search')
const Chat = () => import('@/pages/Chat/Chat')
const Me = () => import('@/pages/Me/Me')
const Hot = () => import('@/pages/Home/Children/Hot/Hot')
const Dress = () => import('@/pages/Home/Children/Dress')
const Box = () => import('@/pages/Home/Children/Box')
const Bag = () => import('@/pages/Home/Children/Bag')
const Ele = () => import('@/pages/Home/Children/Ele')
const Food = () => import('@/pages/Home/Children/Food')
const Man = () => import('@/pages/Home/Children/Man')
const Mbaby = () => import('@/pages/Home/Children/Mbaby')
const UnderWear = () => import('@/pages/Home/Children/UnderWear')



Vue.use(Router)

export default new Router({
  routes: [
    // 联系 demo
    // {
    //   path: '/lianxi',
    //   name: 'lianxi',
    //   component: Lianxi
    // },
    {
      path: '/selectLogin',
      name: 'selectLogin',
      component: SelectLogin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home/hot',
      name: 'init',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/hot',
      component: Home,
      children: [
        {
          path: 'hot',
          component: Hot
        },
        {
          path: 'dress',
          component: Dress
        },
        {
          path: 'box',
          component: Box
        },
        {
          path: 'bag',
          component: Bag
        },
        {
          path: 'ele',
          component: Ele
        },
        {
          path: 'food',
          component: Food
        },
        {
          path: 'man',
          component: Man
        },
        {
          path: 'mbaby',
          component: Mbaby
        },
        {
          path: 'under',
          component: UnderWear
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
