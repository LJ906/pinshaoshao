// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BaseUrl: 'http://localhost:3000',
    toView: 'red',
    scrollTop: 0,
    toView: '',
    searchGoods: [],
    currentIndex: 0,
    // 左边列表的高度
    cartHight: 1000
  },
  upper(e) {
    console.log('upper', e)
  },
  lower(e) {
    console.log('lower', e)
  },
  scroll(e) {
    console.log('scroll', e)

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.handleGetCartGory();
    this.getWinHeight();

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

  },

  // 请求左边分类列表
  handleGetCartGory() {
    this.ApiRequest('http://localhost:3000/api/searchgoods').then((res) => {
      const { success_code, message } = res;
      if (success_code === 200) {
        this.setData({ searchGoods: message.data })
        // console.log('searchGoods', this.data.searchGoods)
      }
    })
  },

  // 点击左侧列表
  // 改变 "scrollTop" or "toView " 的值。 toView 必须为字符串不能以数字开头，跳转ID名字不要带#
  // scrollTop 距离顶部高度，单位px。
  handleTapLeft(e) {
    const { dataset } = e.target;
    const { index } = dataset;
    this.setData({ currentIndex: index })

    let toIndex = 0; // 要滑动到的列表的index
    if (index >= 8) {
      toIndex = index - 2;
    }

    this.setData({
      toView: 'floor' + toIndex,
      // scrollTop: this.data.scrollTop + 44,
    })
  },

  // 获取系统中 window的高度
  getWinHeight() {
    wx.getSystemInfo({
      success: (res) => {
        console.log('windowHeight', res.windowHeight)
        this.setData({ cartHight: res.windowHeight - 70 + 'px' })
      }
    })
  },

  // 封装请求
  ApiRequest: function (url, data = {}, method = "GET", callback) {
    let promise;
    return new Promise((resolve, reject) => {
      promise = wx.request({
        url: url,
        data: data,
        method: method,
        dataType: 'json',
        success: (res) => {
          // console.log('res', res)
          if (res.statusCode === 200) {
            resolve(res.data)
          }
        },
        fail: (error) => {
          console.log('error', error);
          reject(error)
        }
      })

    })

  }
})