<template>
  <div class="map-container">
    <div id="map" ref="map"></div>
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

export default {
  name: "demo1228",
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
          center: [13022727.151977561,4219021.295921501],
          zoom: 15,
        }),
      });

      var cameralayer = new VectorLayer({
        source: new VectorSource(),
        style: getStyle,
      });
      const this_ = this;
      function getStyle(e) {
        var imgpath;
        var key = e.values_.name;
        if (key.search("lbsxt") !== -1) {
          // 路边停车场
          imgpath = require("@/assets/icons/组 193 拷贝 28.png");
        } else if (key.search("ggtcc") !== -1) {
          //公共停车场
          imgpath = require("@/assets/icons/椭圆 798 拷贝 2.png");
        } else if (key.search("wgsb") !== -1) {
          //网关设备
          imgpath = require("@/assets/icons/椭圆 798 拷贝 11.png");
        } else if (key.search("ydp") !== -1) {
          //诱导屏
          imgpath = require("@/assets/icons/1208red.png");
        }
        console.log(imgpath);

        return new Style({
          image: new Icon({
            src: imgpath,
            anchor: [0.5, 0.5],
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
        wgsb9: [13025041.839364365, 4218493.466490004],
        wgsb10: [13025013.625525981, 4218811.513395421],
        wgsb11: [13024718.66267015, 4219026.964524897],
        wgsb12: [13024323.668932779, 4219214.201815989],
        wgsb13: [13025546.197363911, 4220112.400869171],
        ydp1: [13024394.59067997, 4219446.0738726435],
        ydp2: [13024399.426174164, 4219035.056866063],
        ydp3: [13025279.486117667, 4217492.534217836],
        ydp4: [13025057.053384693, 4218715.914249188],
        ydp5: [13021452.192462275, 4219919.9523037635],
        ydp6: [13020632.670765344, 4218989.661521996],
      };
      for (var k in coords) {
        console.log(k);
        var f = new Feature({
          name: k,
          geometry: new Point(coords[k]),
        });
        cameralayer.getSource().addFeature(f);
      }
      map.addLayer(cameralayer);
      map.on("click", (e) => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
</style>