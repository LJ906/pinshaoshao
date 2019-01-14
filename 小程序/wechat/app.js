//app.js
App({
  // 监听小程序的初始化全局只触发一次
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 后台进入前台是触发
  onShow(options) {
    // Do something when show.
  },
  // 前台进入后台是触发
  onHide() {
    // Do something when hide.
  },
  // 小程序发生脚本错误 api 调用失败时触发，会带上错误信息
  onError(msg) {
    console.log(msg)
  },
  // 当页面找不到的时候触发
  onPageNotFound(msg) {
    console.log(msg)
    wx.redirectTo({
      url: 'pages/index/index'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  // 全局变量存储  类似于vuex
  globalData: {
    userInfo: null
  }
})