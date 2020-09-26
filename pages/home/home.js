// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShow() {
    // console.log('99999')
    wx.showToast({
      title: '加载中',
      duration: 2000,
      icon: 'loading',
      success: () => {
        console.log('展示弹框成功')
      },
      fail: () => {
        console.log('展示弹框失败')
      },
      complete: () => {
        console.log('完成函数')
      }
      // mask: true //蒙版
      // image: ''  //可以自定义图片
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelColor: 'red',
      // showCancel: false, //去掉取消按钮
      cancelText: '退出', //改变取消按钮的文字
      success: (res) => {
        console.log(res)
      }
    })
  },
  handleLoading() {
      wx.showLoading({
        title: '加载ing',
        mask: true
      }),
      setTimeout(function(){
        //必须手动调用hideLoading，才会消失
        wx.hideLoading()
      },1000)
  },
  handleAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: (res) => {
        console.log(res)
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