// index.js
// 获取应用实例
const app = getApp()
import { raceData} from './race_data'

Page({
  data: {
    motto: "hello World",
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: false,
      showScale: false,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude: 29.756825521115363,
      longitude: 121.87222114786053,
    },
    scale: 19,
    markers: [
      {
        iconPath: "/resources/car.png",
        id: 0,
        latitude: 31,
        longitude: 120,
        width: 50,
        height: 50
      },
      {
        iconPath: "/resources/car.png",
        id: 1,
        latitude: 23.09994,
        longitude: 114.324520,
        width: 50,
        height: 50
      },
      {
        iconPath: "/resources/car.png",
        id: 2,
        latitude: 29.756825521115363,
        longitude: 121.87222114786053,
        width: 20,
        height: 20
      }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs?color=red'
    })
  },
  pathIndex: 0,
  translateMarker(ctx) {
   this.pathIndex ++
   if(this.pathIndex >= raceData.path.length){
     return
   }
   ctx.translateMarker({
     markerId: 2,
     destination: {
       latitude: raceData.path[this.pathIndex].lat,
       longitude: raceData.path[this.pathIndex].lng,
     },
     duration: 10,
     success: () => this.translateMarker(ctx)
   })
  },
  onReady() {
    const ctx = wx.createMapContext('map', this)
    this.translateMarker(ctx)
  },
  onLoad() {
    console.log({raceData})
  },
})
