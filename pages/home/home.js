// pages/home/home.js
import {getMultiData, getGoodsData} from '../../service/home.js';
Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行','新款','精选'],
    isTabFixed: false,
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    showBackTop: false,
    currentType: 'pop',
    topScrollTop: 0
  },
  tabClickFun(event) {
    const index = event.detail.index;
    // console.log(index);
    const objMap = {0: 'pop', 1: 'new', 2: 'sell'};
    this.setData({ //es6增加写法
      currentType: objMap[index]
    })
  },
  onLoad: function (options) {
     this._getMultidata();
     this._getGoodsData('pop');
     this._getGoodsData('new');
     this._getGoodsData('sell');
  },
  //网络请求函数
  _getMultidata() {
    getMultiData().then((res) => {
      const banners = res.data.data.banner.list || [];
      const recommends = res.data.data.recommend.list || [];
      this.setData({ //es6增加写法
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    let page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then((res) => {
      const list = res.data.data.list || [];
      // for (let item of list){
      //   this.data.goods[type].list.push(item);
      // }
      let oldlist = this.data.goods[type].list;
      oldlist.push(...list);
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldlist,
        [pageKey]: page
      })
    })
  },
  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.topScrollTop = rect.top;
    }).exec();
  },
  onReady: function () {

  },

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
      this._getGoodsData(this.data.currentType);
  },
  //监听页面的滚动
  onPageScroll(options) {
    // console.log(options);
    const scrollTop = options.scrollTop;
    //官方：不要再滚动的函数回调中频繁的调用this.setData
    const flag = scrollTop >= 1000;
    if(flag != this.data.showBackTop){
      this.setData({
        showBackTop: scrollTop >= 1000
      })
    }

    //修改isTabfixed属性
    const flag2 = scrollTop >= this.data.topScrollTop;
    if(flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed: flag2
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})