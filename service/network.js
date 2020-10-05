import {baseUrl} from './config.js'

export default function(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}