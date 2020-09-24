// pages/home/home.js
//getApp()获取()产生的示例对象
// const app = getApp();
// console.log(app.globalData.name);
// console.log(app.globalData.age);
Page({

  /**
   * 页面的初始数据
   */
  data: { 
      name: 'guowuhou',
      age: 18,
      students: [
        {id:110, name:'kobe', age: 30},
        {id:111, name:'james', age: 31},
        {id:112, name:'curry', age: 33},
        {id:113, name:'dvias', age: 23}
      ],
      counter: 0
  },
  clickAddNumFun(){
      //1.错误做法，界面不刷新
      // this.data.counter += 1;
      // console.log(this.data.counter);
      //2.this.setData()
      this.setData({
        counter: this.data.counter += 1
      })
  },
  clickDescressNumFun(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log('onload');
      // wx.request({
      //   url: 'http://123.207.32.32:8000/recommend',
      //   success: (res) => {
      //       console.log(res);
      //   }
      // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 页面初次渲染完成时调用
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示出来时调用
   */
  onShow: function () {
    console.log('onShow');
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
  
  //监听页面的滚动事件
  onPageScroll(obj){
    // console.log(obj);
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