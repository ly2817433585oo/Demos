<template>
  <div class="map-container"></div>
  
</template>

<script>
import * as Cesium from "cesium/Cesium";
import "cesium/Widgets/widgets.css";
export default {
  name:'PolyLineTrial',
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
      url: "http://10.35.11.170/cesium/",
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
  methods:{
    init() {
      let osm = Cesium.createOpenStreetMapImageryProvider({
        url:'https://a.tile.openstreetmap.org/'
      })
      this.viewerOption[imageryProvider] = osm;
      let viewer = new Cesium.viewer(this.$el,this.viewerOption);

      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

      Cesium.Camera.DEFAULT_VIEW_RECTANGLE = 
        Cesium.Rectangle.fromDegrees(110.15,34.54,110.25,34.56);
      
      viewer.camera.setView({
        destination:Cesium.Cartesian3.fromDegrees(110.20,34.55,30000000)
      })

      function PolylineTrailLinkMaterialProperty(color,duration) {
        this._definitionChanged = new Cesium.Event();
        this._color = undefined;
        this._colorSubscription = undefined;
        this.color = color;
        this.duration = duration ;
        this._time = (new Date()).getTime();
      }

      Cesium.defineProperties(PolylineTrailLinkMaterialProperty.prototype,{
        isConstant:{
          get:function() {
            return false;
          }
        },
        definitionChanged:{
          get:function() {
            return this._definitionChanged;
          }
        },
        color:Cesium.createPropertyDescriptor('color')
      })
      PolylineTrailLinkMaterialProperty.prototype.getType= function(time) {
        return "PolylineTrailLink";
      }
      PolylineTrailLinkMaterialProperty.prototype.getValue = function(time,result) {
        if(!Cesium.defined(result)) {
          result = {};

        }
        result.color = Cesium.Property.getValueOrClonedDefault(this._color,time,Cesium.Color.WHITE,result.color);
        result.image=Cesium.Material.PolylineTrailLinkImage;
        result.time = (((new Date()).getTime()-this._time)%this.duration)/this.duration;
        return result;

      }
      PolylineTrailLinkMaterialProperty.prototype.equals = function(other) {
        return this === ohter || 
        (other instanceof PolylineTrailLinkMaterialProperty && Property.equals(this._color,other._color));

      }
      Cesium.PolylineTrailLinkMaterialProperty = PolylineTrailLinkMaterialProperty;
      Cesium.Material.PolylineTrailLinkType = 'PolylineTrailLink';
      Cesium.Material.PolylineTrailLinkImage = "../../assets/icons/colors.png";
      Cesium.Material.PolylineTrailLinkSource = 
      `czm_material czm_getMaterial(czm_materialInput materialInput) {
        czm_material material = czm_getDefaultMaterial(materialInput);
        vec2 st = materialInput st;
        vec4 colorImage = texture2D(image,vec2(fract(st.s - time),st.t));
        material.alpha = colorImage.a * color.a;
        material.diffuse = (colorImage.rgb+ color.rgb)/2.0;
        return material; 
      }
      `
      Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailLinkType,{
        fabric:{
          type:Cesium.Material.PolylineTrailLinkType,
          uniforms:{
            color:new Cesium.Color(1.0,0.0,0.0,0.5),
            image:Cesium.Material.PolylineTrailLinkImage,
            time:0
          },
          source:Cesium.Material.PolylineTrailLinkSource
        },
        translucent:function(material) {
          return true;
        }
      });
      view.entities.add({
        name:'litiq',
        wall:{
          position:Cesium.Cartesian3.fromDegreesArray([117.154815, 31.853495, 117.181255, 31.854257, 117.182284, 31.848255, 117.184748, 31.840141, 117.180557, 31.835556, 117.180023, 31.833741, 117.166846, 31.833737, 117.155531, 31.833151, 117.154787, 31.835978, 117.151994, 31.839036, 117.150691, 31.8416, 117.151215, 31.844734, 117.154457, 31.848152, 117.154815, 31.853495]),
          maximumHeights:[600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
          minimumHeights:[43.9, 49.4, 38.7, 40, 54, 51, 66.7, 44.6, 41.2, 31.2, 50.1, 53.8, 46.9, 43.9],
          material:new Cesium.PolylineTrailLinkMaterialProperty(Cesium.Color.ORANGE,3000)
        }
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style>

</style>