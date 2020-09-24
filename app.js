//注册小程序示例
App({
 //生命周期函数:后台存活两个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // console.log("小程序初始化完成了");
    //在这里主要获取用户信息的操作，也可以写在onShow里面，具体的根据业务要求去
    // wx.getUserInfo({ //异步调用,数据拿到之后再调用
    //   success: function(res){
    //     // console.log(res);
    //   }
    // })
  },

  /**
   * 当小程序启动，界面显示出来之后会执行的生命周期函数，会触发 onShow
   */
  onShow: function (options) {
    //1.这里面有小程序打开的场景，是通过搜索还是聊天或者是其它的
    // console.log(options); 
    //2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({ //异步调用,数据拿到之后再调用
      success: function(res){
        console.log(res);
      }
    })
  },

  /**
   * 当小程序从前台进入后台，界面被隐藏时会触发 onHide
   */
  onHide: function () {
    console.log('hidden');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  globalData: {
    name: "guowuhou",
    age: 18
  }
})
