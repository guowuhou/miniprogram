App({
  globalData: {
   token: '' 
  },
  onLaunch: function() {
    //1.第二次登入先从缓存中取出token，如果token在有效期内就不用在调登录接口
    const token = wx.getStorageSync('token');
    //2.判断token是否有值
    if(token && token.length > 0){ //已经有token，验证是否过期
       this.check_token(token);
    }else{
      this.login();
    };
  },
  //验证token是否过期
  check_token(token) {
    //验证token
    console.log('执行了校验操作');
     wx.request({
       url: 'http://123.207.32.32:3000/auth',
       method: 'post',
       header: {
         token
       },
       success: (res)=> {
         console.log(res);
         if(!res.data.errCode){
           this.globalData.token = token;
         }else{
           this.login();
         }
       },
       fail: (err) => {
         console.log(err);
       }
     })
  },
  login() {
    console.log('执行了登录操作');
    wx.login({
      timeout: 1000,
      //code只有5分钟有效期
      success: (res) => {
        // 1.获取code
        console.log(res);
        const code = res.code;

        //2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {code: code},
          method: 'post',
          success: (res) => {
            // console.log(res);
            //1.取出token
            const token = res.data.token;
            //2.保存token在globalData中
            this.globalData.token = token;
            //3.进行本地保存
            wx.setStorageSync('token', token);
            // wx.setStorage({
            //   data: data,
            //   key: 'key',
            // })
          }
        })
      }
    })
  }
})