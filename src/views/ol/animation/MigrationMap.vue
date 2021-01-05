<template>
  <div class="map-container">
    <div ref="map" style="width: 100%; height: 1000px"></div>
  </div>
</template>

<script>

import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import EChartsLayer from 'ol-echarts'
import {initMap} from '../lockin-ol.js'
export default {
  name: "ol-echarts迁徙图",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var mapElement = this.$refs.map;
      var map = initMap(mapElement)

      var geoCoordMap = {
        1: [91.052219, 29.683377],
        2: [95.320392, 34.291201],
        3: [104.077505, 34.808768],
        4: [101.612267, 29.554772],
        5: [102.053802, 24.043523],
        6: [106.542743, 26.452751],
        7: [108.971186, 23.331899],
        8: [111.693986, 27.900691],
        9: [115.447034, 27.211999],
        10: [107.683375, 29.908037],
        11: [112.466672, 31.276804],
        12: [117.765094, 31.086989],
        final: [117.581121, 36.192841],
      };

      var siteSource = new VectorSource({
        features: (function () {
          var siteFeatures = [];
          for (let [key, value] of Object.entries(geoCoordMap)) {
            siteFeatures.push(
              new Feature({
                name: key,
                geometry: new Point(fromLonLat(value)),
              })
            );
          }
          return siteFeatures;
        })(),
      });

      var siteLayer = new VectorLayer({
        source: siteSource,
        style: function (feat) {
          var imgsrc = require("@/assets/icons/椭圆 798 拷贝 2.png");
          if (feat.values_.name === "final") {
            imgsrc = require("@/assets/icons/椭圆 798 拷贝 11.png");
          }
          return new Style({
            image: new Icon({
              src: imgsrc,
              anchor: [0.5, 0.75],
            }),
          });
        },
      });

      map.addLayer(siteLayer)
      var echartslayer = new EChartsLayer(getOption(geoCoordMap));
      echartslayer.appendTo(map);

      function getOption(geoCoordMap) {
        var start = [
          [
            {
              name: "1",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "2",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "3",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "4",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "5",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "6",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "7",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "8",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "9",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "10",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "11",
            },
            {
              name: "final",
              value: 50,
            },
          ],
          [
            {
              name: "12",
            },
            {
              name: "final",
              value: 50,
            },
          ],
        ];
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
              });
            }
          }
          return res;
        };
        var color = ["#68F9C3", "#68F9C3", "#EBD312", "#FD7914"];
        var series = [];
        [["start", start]].forEach(function (item, i) {
          series.push(
            {
              name: "线路" + item[0],
              type: "lines",
              zlevel: 1,
              effect: {
                show: true,
                //速度
                period: 6,
                // opacity:1,
                trailLength: 0.4,
                color: color[i],
                symbolSize: 6,
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 0,
                  //曲度
                  curveness: 0.5,
                },
              },
              data: convertData(item[1]),
            },
            {
              name: item[0] + " Top10",
              type: "lines",
              zlevel: 2,
              effect: {
                show: true,
                period: 6,
                trailLength: 0,
                // symbol: planePath,
                symbolSize: 6,
              },
              lineStyle: {
                normal: {
                  color: color[i],
                  width: 3,
                  opacity: 0.8,
                  curveness: 0.5,
                },
              },
              data: convertData(item[1]),
            }
          );
        });
        return {
          tooltip: {
            trigger: "ly",
          },
          series: series,
        };
      }
    },
  },
};
</script>

<style>
</style>