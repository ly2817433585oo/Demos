<template>
  <div class="map-container">
    <div>
      左上:lon:
      <input type="text" v-model="upperLeftlon" />
      lat:
      <input type="text" v-model="upperLeftlat" />
      <br />右下:lon:
      <input type="text" v-model="lowerRightlon" />
      lat:
      <input type="text" v-model="lowerRightlat" />
      <br />size:
      <input type="text" v-model="size" />
      <input type="button" value="button" @click="create()" />
    </div>
    <div ref="map" id="map"></div>
  </div>
</template>

<script>
import { Fill, Style } from "ol/style";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import chinajson from "@/assets/json/shandongShi.json";
import {
  initMap,
  getFeaturesFromGeoJSON,
  getVectorLayer,
} from "../lockin-ol.js";

export default {
  name: "GenerateGrid",
  data() {
    return {
      upperLeftlat: 10.0,
      upperLeftlon: 110.0,
      lowerRightlat: 50.0,
      lowerRightlon: 130.0,
      size: 1,
      map: {},
      dataArr: new Array(),
    };
  },
  mounted() {
    this.map = initMap(this.$refs.map);
  },
  methods: {
    create() {
      var features = getFeaturesFromGeoJSON(chinajson);
      var vlayer = getVectorLayer([], this.styleFunction);
      var source = vlayer.getSource();
      this.createGrid(
        [
          this.upperLeftlon,
          this.upperLeftlat,
          this.lowerRightlon,
          this.lowerRightlat,
        ],
        this.size,
        source,
        features
      );

      this.map.addLayer(vlayer);
    },
    getFeatures(bound, i, deltaLon, size, landfeature) {
      var this_ = this;
      function isOnLand(coord, features) {
        var is = false;
        for (var i = 0; i < features.length; i++) {
          var geom = features[i].getGeometry();
          if (geom.intersectsCoordinate(coord)) {
            is = true;
            break;
          }
        }
        return is;
      }
      var promise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
          var features = [];
          var minLon = bound[0],
            maxLat = bound[3],
            numLon = Math.ceil(deltaLon / size);
          var lat1 = maxLat - i * size,
            lat2 = maxLat - (i + 1) * size;
          var latC = (lat1 + lat2) / 2;
          for (var j = 0; j < numLon; j++) {
            var lon1 = minLon + j * size,
              lon2 = minLon + (j + 1) * size;
            var lonC = (lon1 + lon2) / 2;
            var coord = fromLonLat([lonC, latC]);
            var prop = {
              i: i,
              j: j,
              land: isOnLand(coord, landfeature),
            };
            this_.dataArr[i][j] = Math.random();
            // 网格面
            var featG = {
              type: "Feature",
              properties: prop,
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [lon1, lat1],
                    [lon2, lat1],
                    [lon2, lat2],
                    [lon1, lat2],
                    [lon1, lat1],
                  ],
                ],
              },
            };
            features.push(featG);
          }
          // console.log(features);
          resolve(features);
        });
      });
      return promise;
    },
    createGrid(bound, size, source, landfeature) {
      source.clear()
      var deltaLon = bound[2] - bound[0],
        deltaLat = bound[3] - bound[1];
      var numLat;
      numLat = Math.ceil(deltaLat / size);
      for (var i = 0; i < numLat; i++) {
        this.dataArr[i] = [];
        this.getFeatures(bound, i, deltaLon, size, landfeature).then((res) => {
          var json = {
            type: "FeatureCollection",
            features: res,
          };
          var features = getFeaturesFromGeoJSON(json, {
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857",
          });
          source.addFeatures(features);
        });
      }
    },
    styleFunction(feat) {
      // console.log(this.dataArr);
      var i = feat.get("i"),
        j = feat.get("j"),
        isLand = feat.get("land");
      // 获取properties中的几个属性
      if (isLand) {
        var val = this.dataArr[i][j];
        console.log(val);
        var color;
        if (val > 0.33 && val <= 0.66) {
          color = "orange";
        } else if (val > 0.66 && val <= 1) {
          color = "red";
        } else {
          color = "yellow";
        }
        return new Style({
          fill: new Fill({
            color: color,
          }),
        });
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss">
</style>