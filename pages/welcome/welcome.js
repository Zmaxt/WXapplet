Page({
  data: {
    name: "MINA搬运工"
   
  },
  toMina: function () {
    wx.navigateTo({
      url: '../trip/trip',
    })
  },
  onShareAppMessage: function () {

  }
})
