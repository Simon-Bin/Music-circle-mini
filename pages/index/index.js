// index.js
const { fetchBannar}  = require('../../api/index.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:["推荐","MV","电台","排行"],
    winWidth: 0,
    winHeight: 0,
    pixelRatio:2,
    // tab切换
    currentTab: 0
  },
  handleTabTap(event){
    const target = event.target;
    this.setData({
      currentTab: target.dataset.index
    }) 
  },
  bindChange (e) {

    this.setData({
      currentTab: e.detail.current
    });
  },
  goToSearchPage(){
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success:  (res)=> {
        this.setData({
          clientHeight: res.windowHeight,
          pixelRatio: res.pixelRatio
        });
      }
    })
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