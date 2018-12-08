// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import "animate.min.css"
import "@/common/stylus/mixins.styl"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//  home顶部的滑动tab
import LyTab from 'ly-tab'
Vue.use(LyTab)


Vue.use(MintUI)

// import photoswipe from 'photoswipe'
// Vue.use(photoswipe)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
