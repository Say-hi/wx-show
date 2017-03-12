// 获取全局应用程序实例对象
// const app = getApp()
// 定义全局变量
// let mobile = null
// let letter = null
// let timer = null
// let bottom_l = '../../images/mobile.png'
// let bottom_r = '../../images/letter.png'
// var imgWidth = 132
// var imgHeight = 138
// var i = 0
// var j = 0
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '量子计划',
    // 背景图片只能使用网络图片或者base64
    bakgroundImage: 'http://image.uc.cn/s/uae/g/01/quantumplanmarch/app/components/images/bg_068ab.jpg',
    indexImageHeight: '625',
    videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    videoWidth: '375',
    videoHeight: '281',
    videoCover: '../../images/video_cover.jpg',
    videoPlay: '../../images/play.png',
    videoBottom: '../../images/video_bottom.png',
    indexImage2: '../../images/index-1.jpg',
    autoplay: false,
    show: false,
    showImage: '../../images/mobile.png',
    showImage2: '../../images/letter.png',
    imageMode: 'aspectFit',
    url: '../canvas/canvas'
  },
  // 播放视屏
  playVideo () {
    this.setData({
      autoplay: true,
      show: true
    })
    // 启动canvas动画
    // this.pictureChange()
  },
  /**
   * canvas 动画函数
   */
  // pictureChange () {
  //   // 清除图层
  //   mobile.clearRect(0, 0, 132, 138)
  //   var that = this
  //   mobile.drawImage(bottom_l, imgWidth * i,imgHeight * j, 0, 0, imgWidth, imgHeight)
  //   mobile.draw()
  //   i++
  //   i = i >= 10 ? 5 : i
  //   timer  = setInterval(this.pictureChange,100)
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          indexImageHeight: res.windowHeight,
          videoWidth: res.windowWidth - 10,
          videoHeight: 206
        })
      }
    })
    // 获取canvas对象
    // mobile = wx.createCanvasContext('mobile')
    // letter = wx.createCanvasContext('letter')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
