// index.js
Page({
  data: {
    baseUrl: 'localhost:3000',
    bannerImages: [
      '../../images/banner1.png',
      '../../images/banner2.png',
      '../../images/banner3.png',
      '../../images/banner4.png',
      '../../images/banner5.png'
    ],
    indicatorDots: true, // 显示小圆点
    autoplay: true, // 自动播放
    interval: 3000, // 播放时间间隔
    duration: 1000, // 间隔时间
    // 分类导航数据
    cartImage: [
      {
        cartId: 1,
        path: '/pages/index/index',
        img: '../../images/icon_index_nav_1@2x.png'
      },
      {
        cartId: 2,
        path: "/pages/category/category",
        img: '../../images/icon_index_nav_2@2x.png'
      },
      {
        cartId: 3,
        path: "/pages/cart/cart",
        img: '../../images/icon_index_nav_3@2x.png'
      },
      {
        cartId: 4,
        path: "/pages/me/me",
        img: '../../images/icon_index_nav_4@2x.png'
      },
      {
        cartId: 5,
        path: "/pages/me/me",
        img: '../../images/icon_index_nav_5@2x.png'
      },
      {
        cartId: 6,
        path: "/pages/me/me",
        img: '../../images/icon_index_nav_5@2x.png'
      },
      {
        cartId: 7,
        path: "/pages/me/me",
        img: '../../images/icon_index_nav_5@2x.png'
      },
      {
        cartId: 8,
        path: "/pages/me/me",
        img: '../../images/icon_index_nav_5@2x.png'
      },
      {
        cartId: 9,
        path: "/pages/me/me",
        img: '../../images/icon_index_nav_5@2x.png'
      },
      {
        cartId: 9,
        path: "/pages/me/me",
        img: '../../images/icon_index_nav_5@2x.png'
      }
    ],

    // 产品列表
    recommendList: [],
    page: 4, // 推荐当前页数默认1
    count: 10, // 每次请求的条数
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('options', options);
    
    this.handleGetDataList(this.data.page, this.data.count);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('首页下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('首页到底了')
    // 加载下一页
    this.setData({
      page: this.data.page + 1
    })
    this.handleGetDataList(this.data.page, this.data.count)

    console.log('下拉刷新后的', this.data.page)

  },

  /**
   * 用户点击右上角分享
   * Object 对象中是 from  target
   */
  onShareAppMessage: function (Object) {
    // return custom share data when user share.
    console.log('转发', Object)
    return {
      title: '今天的你',
      path: '/pages/index/index',
      imageUrl: '../../images/banner1.png'
    }
  },

  // 发请求
  handleGetDataList (page, count) {
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: 'http://localhost:3000/api/recommendshoplist',
      method: 'GET',
      data: {page, count},
      dataType: 'json',
      success: (res)=> {
        wx.hideLoading();
        // console.log('res', res)
        const {data} = res         
        if (data.success_code === 200) {
          this.setData({
            recommendList: this.data.recommendList.concat(data.message)
          })
        }
      }
    })
  },

})