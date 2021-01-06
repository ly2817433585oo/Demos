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
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import Point from "ol/geom/Point";
import GeoJSON from "ol/format/GeoJSON";
import tcc from "../../../assets/json/tcc0105.json";

import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
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
            "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnline" +
            "StreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
        }),
      });
      const map = new Map({
        controls: [],
        target: this.$refs.map,
        layers: [Tiles],
        view: new View({
          center: [13022727.151977561, 4219021.295921501],
          zoom: 15,
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
        if (key.search("lbsxt") !== -1) {
          // 路边停车场
          imgpath = require("../../../assets/icons/shuju zhanshi4/ PDA.png");
        } else if (key.search("ggtcc") !== -1) {
          //公共停车场
          imgpath = require("../../../assets/icons/shuju zhanshi4/ 泊位 拷贝 3.png");
        } else if (key.search("wgsb") !== -1) {
          //网关设备
          imgpath = require("../../../assets/icons/shuju zhanshi4/ 网关 拷贝 8.png");
        } else if (key.search("ydp") !== -1) {
          //诱导屏
          imgpath = require("../../../assets/icons/shuju zhanshi4/ 诱导屏.png");
        } else if (key.search("dc") !== -1) {
          //地磁
          imgpath = require("../../../assets/icons/shuju zhanshi4/ 地磁 拷贝.png");
        } else if (key.search("jksxt") !== -1) {
          // 监控摄像头
          imgpath = require("../../../assets/icons/shuju zhanshi4/ 监控摄像头.png");
        } else if (key.search("gwsp") !== -1) {
          //高位视屏
          imgpath = require("../../../assets/icons/shuju zhanshi4/ 高位视频.png");
        }

        return new Style({
          image: new Icon({
            src: imgpath,
            anchor: [0.5, 0.75],
            scale: 0.5,
          }),
        });
      }
      var coords = {
        lbsxt1: [13021302.482465284, 4219915.484443347],
        lbsxt2: [13022454.181741757, 4217633.070726841],
        lbsxt3: [13021069.352737697, 4218982.187815073],
        lbsxt4: [13025212.580630498, 4220113.293669482],
        lbsxt5: [13024259.50778693, 4219066.475258416],
        lbsxt6: [13024179.03894526, 4220466.2063905],
        ggtcc1: [13024694.848810693, 4219497.2259059185],
        ggtcc2: [13024705.117865598, 4219235.365005843],
        ggtcc3: [13024381.642636092, 4219173.750676413],
        ggtcc4: [13024771.86672248, 4219040.25296265],
        ggtcc5: [13024987.516875483, 4218901.620721433],
        ggtcc6: [13025105.61100689, 4217659.065077938],
        ggtcc7: [13025577.987532515, 4217484.491144555],
        ggtcc8: [13025388.010016775, 4217802.831846607],
        wgsb1: [13020074.866703924, 4219909.040673363],
        wgsb2: [13019887.40588179, 4218722.175492824],
        wgsb3: [13020595.383503566, 4218992.711948906],
        wgsb4: [13021242.159538968, 4219400.596094271],
        wgsb5: [13021774.389570868, 4217607.0242557535],
        wgsb6: [13022747.754466932, 4218469.319888668],
        wgsb7: [13024274.935939208, 4218780.734662639],
        wgsb8: [13025288.069226623, 4217577.799189732],
        ydp1: [13024394.59067997, 4219446.0738726435],
        ydp2: [13024399.426174164, 4219035.056866063],
        ydp3: [13025279.486117667, 4217492.534217836],
        ydp4: [13025057.053384693, 4218715.914249188],
        ydp5: [13021452.192462275, 4219919.9523037635],
        ydp6: [13020632.670765344, 4218989.661521996],
        dc1: [13020638.49525056, 4219898.157026252],
        dc2: [13021622.621989733, 4220638.640737765],
        dc3: [13023315.179867622, 4217652.335931406],
        gwsp1: [13023280.350040667, 4218469.740060173],
        gwsp2: [13024307.47260825, 4218288.202117995],
        gwsp3: [13024323.668932779, 4219214.201815989],
        gwsp4: [13025546.197363911, 4220112.400869171],
        jksxt1: [13024188.039751554, 4220203.905139392],
        jksxt2: [13025041.839364365, 4218493.466490004],
        jksxt3: [13025013.625525981, 4218811.513395421],
        jksxt4: [13024718.66267015, 4219026.964524897],
      };
      for (var k in coords) {
        var f = new Feature({
          name: k,
          geometry: new Point(coords[k]),
        });
        cameralayer.getSource().addFeature(f);
      }
      var overlay = new Overlay({
        element: this.$refs.popup,
        positioning: "bottom-left",
        offset:[10,-10]
      });
      this.overlay = overlay;
      map.addOverlay(overlay);
      map.addLayer(cameralayer);
      map.on("click", (e) => {
        var coor = e.coordinate;
        console.log(tccfeatures);
        console.log(e);
        var j = isInArea(coor, tccfeatures);
        if (j >= 0) {
          for (var i = 0; i < tccfeatures.length; i++) {
            tccfeatures[i].setStyle();
          }
          // tccfeatures[j].setStyle(highlightStyle);
          overlay.setPosition(
            tccfeatures[j].getGeometry().getInteriorPoint().flatCoordinates
          );
        }
      });

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