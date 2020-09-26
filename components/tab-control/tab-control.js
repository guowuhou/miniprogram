// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    closeList: {
       type:Array,
       value: ['1','2','3'],
       observer: function(newval, oldval){
        //监听值发生的改变
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItemFun(event) {
      this.setData({
        curIndex: event.currentTarget.dataset.index
      })

      //通知点击事件
      this.triggerEvent('itemClickFun', {index: this.data.curIndex, title:this.properties.closeList[this.data.curIndex]}, {})
    }
  }
})
