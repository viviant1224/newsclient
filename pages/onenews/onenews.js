
// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '',
    loading: true,
    onenewsurl: ''
  },

  onLoad (params) {
    this.setData({ onenewsurl: params.url, loading: false })
  },

  onReady () {
    wx.setNavigationBarTitle({ title: '新闻详情'})
  }
})
