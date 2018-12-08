import Vue from 'vue'
import Router from 'vue-router'
const SelectLogin = () => import('@/pages/login/SelectLogin')
const Login = () => import('@/pages/login/Login')
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

// 练习 demo 
const Lianxi = () => import('@/pages/lianxi')
const DragSort = () => import('@/pages/lianxi/dragSort')  // 拖动排序
const CityNav = () => import('@/pages/lianxi/cityNav')    // 字母列表导航
const Video = () => import('@/pages/lianxi/Video')        // 视频上传
const Pswp = () => import('@/pages/lianxi/photoswiper')        // 视频上传


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lianxi',
      name: 'lianxi',
      meta: {
        showBottomBar: false
      },
      component: Lianxi,
      children:  [      
        {
          path: 'dragsort',
          name: 'dragsort',
          component: DragSort,
        },
        {          
          path: 'citynav',
          name: 'cityNav',
          component: CityNav,
        }, 
        {          
          path: 'video',
          name: 'video',
          component: Video,
        },
        {          
          path: 'pswp',
          name: 'pswp',
          component: Pswp
        }
      ]
    },
    {
      path: '/selectLogin',
      name: 'selectLogin',
      meta: {
        showBottomBar: false
      },
      component: SelectLogin
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        showBottomBar: false
      },
      component: Login
    },
    {
      path: '/',
      redirect: '/home/hot',
      name: 'init',
      meta: {
        showBottomBar: true
      },
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        showBottomBar: true
      },
      redirect: '/home/hot',
      component: Home,
      children: [
        {
          path: 'hot',
          meta: {
            showBottomBar: true
          },
          component: Hot
        },
        {
          path: 'dress',
          meta: {
            showBottomBar: true
          },
          component: Dress
        },
        {
          path: 'box',
          meta: {
            showBottomBar: true
          },
          component: Box
        },
        {
          path: 'bag',
          meta: {
            showBottomBar: true
          },
          component: Bag
        },
        {
          path: 'ele',
          meta: {
            showBottomBar: true
          },
          component: Ele
        },
        {
          path: 'food',
          meta: {
            showBottomBar: true
          },
          component: Food
        },
        {
          path: 'man',
          meta: {
            showBottomBar: true
          },
          component: Man
        },
        {
          path: 'mbaby',
          meta: {
        showBottomBar: true
      },
          component: Mbaby
        },
        {
          path: 'under',
          meta: {
            showBottomBar: true
          },
          component: UnderWear
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      meta: {
        showBottomBar: true
      },
      component: Recommend
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        showBottomBar: true
      },
      component: Search
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        showBottomBar: true
      },
      component: Chat
    },
    {
      path: '/me',
      name: 'me',
      meta: {
        showBottomBar: true
      },
      component: Me
    }
  ]
})
