// 引入app 使用globalData 记录用户信息
const app = getApp(); // 获取app
console.log('app', app)


// pages/me/me.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 新增：获取用户信息
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  //  获取用户头像和信息
  getUserInfo(e) {
    console.log('getuserinfo', e.detail.userInfo) 
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从全局变量中获取用户信息， 
    // 1. 判断全局中是否有用户信息， 
    // 1.1 若有则直接使用，
    // 1.2 若无，则发请求，请求成功后记录到全局globalData中。
    // 1.3 把用户信息记录到全局变量globalData中
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo:true
      })
    } else if (this.data.canIUse) {
      // 没有则发请求获取用户信息 
      // 由于getUserInof是网络请求， 可能在onLoad之后才返回， 所以此处加入callback
      app.userInfoReadyCallback = res=> {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      }
      
    }
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})