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
import myjson from "../../../assets/json/my3857.json";
import tcc from "../../../assets/json/tcc0105.json";

import { features } from "process";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
// import { forEachFeatureAtPixel } from "ol/Map";
import Overlay from "ol/Overlay";
import Heatmap from "ol/layer/Heatmap";
import CircleStyle from 'ol/style/Circle';
export default {
  name: "demo1228",
  data() {
    return {
      overlay: null,
      myfeatures: null,
    };
  },
  methods: {
    init() {
      var Tiles = new TileLayer({
        source: new XYZ({
          url:
            "http://183.67.4.66:8223/project/mengYinshehuizhili/{z}/{x}/{y}.png",
        }),
      });
      const map = new Map({
        controls: [],
        target: this.$refs.map,
        layers: [Tiles],
        view: new View({
          center: [13128268.478460422, 4261271.29476306],
          zoom: 10,
          minZoom: 10,
          maxZoom: 13,
        }),
      });
      var geojsonFormat = new GeoJSON();
      var myfeatures = geojsonFormat.readFeatures(myjson, {
        featureProjection: "EPSG:3857",
      });

      var mylayer = new VectorLayer({
        source: new VectorSource({
          features: myfeatures,
        }),
        style: new Style({
          stroke: new Stroke({
            color: [43, 188, 243, 1],
            // width: 2,
          }),
        }),
      });

      var highlightStyle = new Style({
        fill: new Fill({
          color: [43, 188, 243, 0.5],
        }),
        stroke: new Stroke({
          color: [43, 188, 243, 1],
          width: 2,
        }),
      });
      map.addLayer(mylayer);

      const this_ = this;
      var overlay = new Overlay({
        element: this.$refs.popup,
        positioning: "bottom-left",
      });
      this.overlay = overlay;
      this.myfeatures = myfeatures;
      map.addOverlay(overlay);
      map.on("click", (e) => {
        var coor = e.coordinate;
        console.log(coor);
        var j = isInArea(coor, myfeatures);
        if (j >= 0) {
          for (var i = 0; i < myfeatures.length; i++) {
            myfeatures[i].setStyle();
          }
          myfeatures[j].setStyle(highlightStyle);
          overlay.setPosition(
            myfeatures[j].getGeometry().getInteriorPoint().flatCoordinates
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
      var pointsLayer = new VectorLayer({
        source: new VectorSource(),
        style: getStyle,
      });

      var coords = [
        [13127656.98223414, 4266469.012686452],
        [13125822.493555296, 4247359.755615157],
        [13131784.58176154, 4278698.93721208],
        [13138663.914307207, 4270290.8641007105],
        [13143097.261947747, 4252557.47353855],
        [13143097.261947747, 4291846.10607713],
        [13125822.493555296, 4247359.755615157],
        [13131784.58176154, 4278698.93721208],
        [13138663.914307207, 4270290.8641007105],
        [13143097.261947747, 4252557.47353855],
        [13143097.261947747, 4291846.10607713],
        [13126075.769642863, 4260900.869045626],
        [13136284.059461221, 4258108.035038717],
      ];
      for (var k in coords) {
        // console.log(k);
        var f = new Feature({
          radius: Math.random() * 10,
          geometry: new Point(coords[k]),
        });
        pointsLayer.getSource().addFeature(f);
      }
      function getStyle(e) {
        var color;
        if (e.values_.radius <= 2) {
          color = [28, 119, 36, 1];
        } else if (e.values_.radius <= 4) {
          color = [40, 196, 53, 1];
        } else if (e.values_.radius <= 6) {
          color = [0, 255, 0, 1];
        } else if (e.values_.radius <= 8) {
          color = [255, 255, 0, 1];
        } else if (e.values_.radius <= 10) {
          color = [255, 0, 0, 1];
        } else {
          color = [255, 255, 255, 1];
        }
        // console.log(color);
        return new Style({
          image: new CircleStyle({
            fill: new Fill({
              color: color,
              
            }),
            radius: 5
          }),

          
        });
      }
      var vector = new Heatmap({
        source: pointsLayer.getSource(),
        blur: 70,
        radius: 45,
        opacity: 0.8,
        gradient: [
          "rgb(28, 119, 36)",
          "rgb(40, 196, 53)",
          "#0f0",
          "#ff0",
          "#f00",
        ],
      });
      map.addLayer(vector);
      map.addLayer(pointsLayer);
      // console.log(pointsLayer.getSource().getFeatures());
    },
    click() {
      // console.log("click");
      this.overlay.setPosition();
      for (var i = 0; i < this.myfeatures.length; i++) {
        this.myfeatures[i].setStyle();
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
i {
  color: rgb(230, 157, 47);
}
</style>