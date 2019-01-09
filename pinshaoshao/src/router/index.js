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
const MeDetail = () => import('@/pages/Me/MeDetail')
const MeSetting = () => import('@/pages/Me/MeSetting')

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
        showBottomBar: false,
        keepAlive: false,
      },
      component: Lianxi,
      children: [
        {
          path: 'dragsort',
          name: 'dragsort',
          component: DragSort,
          meta: {
            showBottomBar: false,
            keepAlive: false,
          },
        },
        {
          path: 'citynav',
          name: 'cityNav',
          component: CityNav,
          meta: {
            showBottomBar: false,
            keepAlive: false,
          },
        },
        {
          path: 'video',
          name: 'video',
          component: Video,
          meta: {
            showBottomBar: false,
            keepAlive: false,
          },
        },
        {
          path: 'pswp',
          name: 'pswp',
          component: Pswp,
          meta: {
            showBottomBar: false,
            keepAlive: false,
          },
        }
      ]
    },
    {
      path: '/selectLogin',
      name: 'SelectLogin',
      meta: {
        showBottomBar: false,
        keepAlive: false,
      },
      component: SelectLogin
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        showBottomBar: false,
        keepAlive: false,
      },
      component: Login
    },
    {
      path: '/',
      redirect: '/home/hot',
      name: 'init',
      meta: {
        showBottomBar: true,
        keepAlive: true, 
        isBack: false
      },
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        showBottomBar: true,
        keepAlive: true,  //此组件需要被缓存
        isBack: false
      },
      redirect: '/home/hot',
      component: Home,
      children: [
        {
          path: 'hot',
          name: 'hot',
          meta: {
            showBottomBar: true,
            keepAlive: true, //此组件需要被缓存
            isBack: false
          },
          component: Hot
        },
        {
          path: 'dress',
          name: 'dress',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: Dress
        },
        {
          path: 'box',
          name: 'box',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: Box
        },
        {
          path: 'bag',
          name: 'bag',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: Bag
        },
        {
          path: 'ele',
          name: 'ele',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: Ele
        },
        {
          path: 'food',
          name: 'food',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: Food
        },
        {
          path: 'man',
          name: 'man',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: Man
        },
        {
          path: 'mbaby',
          name: 'mbaby',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: Mbaby
        },
        {
          path: 'under',
          name:'under',
          meta: {
            showBottomBar: true,
            keepAlive: true,
            isBack: false
          },
          component: UnderWear
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      meta: {
        showBottomBar: true,
        keepAlive: true
      },
      component: Recommend
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        showBottomBar: true,
        keepAlive: true
      },
      component: Search
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        showBottomBar: true,
        keepAlive: true
      },
      component: Chat
    },
    {
      path: '/me',
      name: 'me',
      meta: {
        showBottomBar: true,
        keepAlive: false
      },
      component: Me
    },
    {
      path: '/detail',
      name: 'meDetail',
      meta: {
        showBottomBar: false,
        keepAlive: false
      },
      component: MeDetail
    },
    {
      path: '/setting',
      name: 'MeSetting',
      meta: {
        showBottomBar: false,
        keepAlive: false
      },
      component: MeSetting
    }

  ]
})

// 路由守卫

