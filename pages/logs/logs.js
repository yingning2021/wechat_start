// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    logColor: null,
  },
  onLoad(opt) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      logColor: opt.color
    })
  },
  onLogTap() {
    wx.navidateTo({
      
    })
  }
})
