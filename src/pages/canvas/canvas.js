// 获取全局应用程序实例对象
// const app = getApp()
let ctx = null
let mobile = '../../images/mobile.png'
let timer = null
let i = 0
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'canvas',
    showImage: '../../images/mobile.png',
    imageMode: 'aspectFit'
  },
  pictureChange () {
      // 清除图层
    ctx.clearRect(0, 0, 132, 138)
    ctx.drawImage(mobile, 132, 0, 132 * i, 138, 0, 0, 132, 138)
    ctx.draw()
    i++
    i = i >= 10 ? 5 : i
    console.info('执行了' + i)
    timer = setInterval(this.pictureChange, 2000)
  },
  start () {
    this.pictureChange()
    console.log('start')
  },
  stop () {
    clearInterval(timer)
    console.log('stop')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    ctx = wx.createCanvasContext('one')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow

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
