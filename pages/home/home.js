// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','裤子','鞋子']
  },
  handleBtnClick() {
    console.log('发生了点击事件')
  },
  handleTouchStart() {
      console.log('handleTouchStart')
  },
  handleTouchMove() {
      console.log('handleTouchMove')
  },
  handleTouchEnd() {
      console.log('handleTouchEnd')
  },
  handleTag() {
      console.log('handleTag')
  },
  handleLongPress() {
     console.log('handleLongPress')
  },
  handleClickFun(event) {
     console.log(event);
  },
  handleEndFun(event){
    console.log('------',event)
  },
  boxOuterFun(event){
    console.log(event)
  },
  boxInnerFun(event){
    console.log(event)
  },
  handleItemClick(event){
    console.log(event);
    console.log(event.currentTarget.dataset.item);
    console.log(event.currentTarget.dataset.index);
  },
  handleCaptureview1() {
    console.log('handleCaptureview1')
  },
  handleCaptureview2() {
    console.log('handleCaptureview2')
  },
  handleCaptureview3() {
    console.log('handleCaptureview3')
  },
  handleView1() {
    console.log('handleView1')
  },
  handleView2() {
    console.log('handleView2')
  },
  handleView3() {
    console.log('handleView3')
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