// pages/weijieke/product/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countPic:9,//上传图片最大数量
    showImgUrl: "", //路径拼接，一般上传返回的都是文件名，
    uploadImgUrl:''//图片的上传的路径
  },
  
  //监听组件事件，返回的结果
  myEventListener:function(e){
   console.log("上传的图片结果集合")
   console.log(e.detail.picsList)
  },
  
})