<template>
  <div class="map-container">
    <div id="map" ref="map"></div>
    <div
      ref="popup"
      style="
        width: 100px;
        height: 100px;
        background-color: red;
        overflow: hidden;
        overflow-y: auto;
      "
    >
      <button @click="click">关闭</button>
    </div>
  </div>
</template>

<script>
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import { Fill, Stroke, Style, Text, Icon } from "ol/style";
import Point from "ol/geom/Point";
import GeoJSON from "ol/format/GeoJSON";
import tcc from "../../../assets/json/jxx.json";
import { getFeaturesAtPixel } from "ol/Map";
import Overlay from "ol/Overlay";

export default {
  name: "demo1228",
  data() {
    return {
      overlay: null,
    };
  },
  methods: {
    init() {
      var Tiles = new TileLayer({
        source: new XYZ({
          url:
            "http://183.67.4.66:8223/project/jinXiangxianjinxiangjiedao/{z}/{x}/{y}.png",
        }),
        // source: new OSM(),
      });
      const map = new Map({
        controls: [],
        target: this.$refs.map,
        layers: [Tiles],
        view: new View({
          center: [12946036.240102954, 4173302.7169068884],
          zoom: 12,
        }),
      });
      var geojsonFormat = new GeoJSON();

      var tccfeatures = geojsonFormat.readFeatures(tcc, {
        featureProjection: "EPSG:3857",
      });

      var tcclayer = new VectorLayer({
        source: new VectorSource({
          features: tccfeatures,
        }),
        style: new Style({
          fill: new Fill({
            color: [129, 91, 13, 0.3],
          }),
          stroke: new Stroke({
            color: [250, 175, 21, 1],
            lineDash: [3, 3, 3],
            width: 1,
          }),
        }),
      });
      var cameralayer = new VectorLayer({
        source: new VectorSource(),
        style: getStyle,
      });

      map.addLayer(tcclayer);
      const this_ = this;
      function getStyle(e) {
        var imgpath;
        var key = e.values_.name;
        var text = '';
        if (key.search("zb") !== -1) {
          // 路边停车场
          imgpath = require("../../../assets/icons/支部.png");
          text = '支部'
        } else if (key.search("dy") !== -1) {
          //公共停车场
          imgpath = require("../../../assets/icons/党员.png");
          text = '党员'
        } else if (key.search("ly") !== -1) {
          //网关设备
          imgpath = require("../../../assets/icons/楼宇.png");
          text = '楼宇'
        }
        return new Style({
          image: new Icon({
            src: imgpath,
            anchor: [0.5, 0.75],
            scale: 0.5,
          }),
          text: new Text({
            font: "bold 16px Mirosoft Yahei",
              text: text,
              fill: new Fill({
                color: "#f00",
              }),
              offsetY: -18,
          }),
        });
      }
      var coords = {
        ly1: [12948814.056572923, 4179755.808450266],
        zb1: [12950123.450856451, 4179995.8640689123],
        ly2: [12948923.172763217, 4178511.883880915],
        zb2: [12950319.85999898, 4178162.7120719748],
        dy1: [12948944.996001277, 4177180.6663593296],
        dy2: [12947395.546099104, 4178599.1768331504],
        dy3: [12947570.132003574, 4176395.0297892136],
        dy4: [12946566.26305287, 4177137.019883212],
        ly3: [12946195.26800587, 4175631.2164571565],
        dy5: [12945606.040578283, 4176525.9692175663],
        zb3: [12944951.34343652, 4175041.9890295696],
        ly4: [12944733.111055933, 4173754.4179841015],
        dy6: [12943576.479438817, 4173688.948269925],
        ly5: [12943620.125914935, 4172030.382177458],
        zb4: [12942703.549916467, 4172685.0793192214],
        ly6: [12940739.458491176, 4170590.048465579],
        dy7: [12940368.463444177, 4169367.947134287],
        dy8: [12942747.196392585, 4170088.1139902268],
        zb5: [12943314.600582112, 4168364.0781835834],
        ly7: [12943729.242105229, 4167076.5071381154],
        dy9: [12946413.500386458, 4169237.0077059343],
        ly8: [12945496.92438799, 4171506.6244640476],
        ly9: [12945235.045531284, 4170175.406942462],
        zb6: [12947286.42990881, 4173296.129984867],
        ly10: [12949185.051619925, 4172423.2004625155],
        zb7: [12949927.041713923, 4174430.938363923],
        dy10: [12948443.061525926, 4175085.6355056865],
        ly11: [12949948.864951981, 4175609.393219097],
      };
      var cmrfeature = [];
      for (var k in coords) {
        var f = new Feature({
          name: k,
          geometry: new Point(coords[k]),
          geomType: "Point",
        });
        cmrfeature.push(f);
      }
      console.log(cmrfeature);
      cameralayer.getSource().addFeatures(cmrfeature);
        var overlay = new Overlay({
        element: this.$refs.popup,
        positioning: "bottom-left",
        offset: [10, -10],
      });
      this.overlay = overlay;
      map.addOverlay(overlay);
      map.addLayer(cameralayer);
      map.on("click", (e) => {
        var coor = e.coordinate;
        console.log(coor);
        var cameraFeatures = cameralayer.getSource().getFeatures();
        var features = map.getFeaturesAtPixel(e.pixel);
        for (var i in features) {
          if (features[i].values_.geomType == "Point") {
            console.log(features[i].getGeometry());
            overlay.setPosition(features[i].getGeometry().flatCoordinates);
          }
        }

        var j = isInArea(coor, cameraFeatures);
        // if (j >= 0) {
        //   for (var i = 0; i < tccfeatures.length; i++) {
        //     tccfeatures[i].setStyle();
        //   }
        //   overlay.setPosition(
        //     cameraFeatures[j].getGeometry().getInteriorPoint().flatCoordinates
        //   );
        // }
      });

      // map.getView().fit(tccfeatures[0].getGeometry())
      function isInArea(coor, feature) {
        for (var i = 0; i < feature.length; i++) {
          var geom = feature[i].getGeometry();
          if (geom.intersectsCoordinate(coor)) {
            return i;
          }
        }
        return -1;
      }
    },
    click() {
      console.log("click");
      this.overlay.setPosition();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
</style>