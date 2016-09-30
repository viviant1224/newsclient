var common = require('../../utils/util.js');

// 拿到全局应用程序实例
const app = getApp();

var month = common.getMonth;
var date = common.getDate;
// const API_URL = 'https://api.douban.com/v2/movie/top250'
console.log("month:" + month + "date" + date)
var API_URL = 'http://v.juhe.cn/toutiao/index?type=top&key=01efdfbc51406bed2db4a3eb9d3719d0'

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true,
  },

  onLoad () {
    //调用应用实例的方法获取全局数据
    app.fetchApi(API_URL, (err, data) => {
      //更新数据
    //   this.setData({ title: data.title, movies: data.subjects, loading: false })
    this.setData({ news: data.result.data, loading: false })
    
    })
  }
})
