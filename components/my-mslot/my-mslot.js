// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    multipleSlots: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 外界可以传入样式
   */
  externalClasses: [],
  /**
   * 监听组件properties/data的改变
   */
  observers: {
    counter: function(newval){

    }
  },
  // 组件中监听生命周期函数
  //1.监听所在页面的生命周期 
  pageLifetimes: {
    show() {
      //监听组件所在页面显示出来时
    },
    hide() {
       //监听组件所在页面隐藏起来时
    },
    resize() {
       //监听组件所在页面尺寸改变时
    }
  },
  //2.监听组件本身的生命周期
  lifetimes: {
    created() {
      //组件被创建
    },
    attached() {
      //组件被添加到页面
    },
    ready() {
      //组件被渲染出来
    },
    moved() {
      //组件被移动到另一个节点
    },
    detached() {
      //组件被移除
    }
  }
})
