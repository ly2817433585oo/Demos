<template>
  <div class="map-container"></div>
</template>

<script>
import * as Cesium from "cesium/Cesium";
import "cesium/Widgets/widgets.css";

export default {
  name: "Cesium-Demo1",
  data() {
    return {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YTA2NDczYy0yZDI5LTRlZDQtYjc2MS04ODFlNjVhM2MzNmEiLCJpZCI6MzI5MTUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTc3MzQ0Njh9.6zIb_oq2-csQajtsY7YD1DzrKicgslmWNu2B3WEwa08",
      viewerOption: {
        geocoder: false, //地理位置查询定位控件
        homeButton: true, //默认相机位置控件
        timeline: true, //时间滚动条控件
        navigationHelpButton: false, //默认的相机控制提示控件
        fullscreenButton: false, //全屏控件
        scene3DOnly: true, //每个几何实例仅以3D渲染以节省GPU内存
        baseLayerPicker: true, //底图切换控件
        animation: false, //控制场景动画的播放速度控件
        shouldAnimate: true,
      },
      viewer: null,
      url: "http://10.35.21.253/cesium/",
      viewModel: {
        show: true,
        intensity: 2.0,
        distortion: 10.0,
        dispersion: 0.4,
        haloWidth: 0.4,
        dirtAmount: 0.4,
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var mapboxtoken =
        "pk.eyJ1IjoibG9ja2luOTgiLCJhIjoiY2tkemVxOGt3M2x0bzJ5bWhmZW9zdHMzciJ9.ezS0gefnTxsnv7D1ojZM7w";
      Cesium.Ion.defaultAccessToken = this.token;
      let viewer = new Cesium.Viewer(this.$el, this.viewerOption);
      viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏版权
      // this.viewer = viewer;
      viewer.camera.flyHome(0);
      var layer = new Cesium.MapboxImageryProvider({
        mapId: "mapbox.dark",
        accessToken: mapboxtoken,
      });

      viewer.imageryLayers.addImageryProvider(layer);
      var scene = viewer.scene;
      // scene.globe.depathTestAgainstTerrain = true;
      scene.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(
          120.209947,
          30.245853,
          1500.0
        ),
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-20),
          roll: Cesium.Math.toRadians(0),
        },
      });

      var tileset = viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
          url: "http://10.35.11.170/cesium/hzb/tileset.json",
          // maximumScreenSpaceError: 2, //最大的屏幕空间误差
          // maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
          // modelMatrix:m,  //形状矩阵
        })
      );
      tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
          conditions: [
            ["${Height} >= 90", 'color("blue", 0.5)'],
            ["${Height} >= 0", 'color("blue",0.5)'],
            // ["true", 'color("blue")'],
          ],
        },
        // show: "${Fooler} > 0",
        meta: {
          description: '"Building id ${id} has height ${Height}."',
        },
      });
    },
  },
};
</script>

<style>
</style>