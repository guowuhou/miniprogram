// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String,
    title: {
      type: String,
      value: '我是默认的值',
      observer: function(newval, oldval){
        //监听值发生的改变
        console.log(newval, oldval);
      }
    },
    content: {
      type: String,
      value: '我是默认的content值'
    }
  },
  //传递样式使用
  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
