<template>
  <div class="map-container">
    <!-- <button @click="animation">animation</button> -->
    <div id="map" ref="map"></div>
    <img src="@/assets/icons/arrow.png" alt="" ref="img" />
  </div>
</template>

<script>
import LineString from "ol/geom/LineString";
import OSM from "ol/source/OSM";

import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import { getVectorContext } from "ol/render";
import { Fill, Stroke, Circle, Style, Text, Icon } from "ol/style";

import {
  textStyle,
  buttomPathStyle,
  upperPathStyle,
  outStyle,
  midStyle,
  innerDot,
  foutrStyle,
  fmidStyle,
  finnerStyle,
  // iconStyle,
} from "../style/GaoDePathStyle";

import {
  initMap,
  getFeaturesFromGeoJSON,
  getVectorLayer,
} from "../lockin-ol.js";

import street from "@/assets/json/streetjson.json";

export default {
  name: "gaodepath",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var iconStyle = new Style({
        image: new Icon({
          img:this.$refs.img,
          // src: '@/assets/icons/arrow.png',
          imgSize: [117, 81],
          scale: 0.15,
        }),
      });
      var f_streets = getFeaturesFromGeoJSON(street);
      var f_street = f_streets[3];
      var v_layer = getVectorLayer([f_street]);
      var map = initMap(this.$refs.map);
      map.addLayer(v_layer);
      map.getView().fit(f_street.getGeometry());
      f_street.setStyle(textStyle);
      var tilelayer = map.getLayers().array_[0];
      var offset = 0.01;
      tilelayer.on("postrender", (evt) => {
        var vct = getVectorContext(evt);
        vct.drawFeature(f_street, buttomPathStyle);
        vct.drawFeature(f_street, upperPathStyle);
        let numArr = Math.ceil(
          f_street.getGeometry().getLength() /
            map.getView().getResolution() /
            100
        );
        var points = [];
        for (var i = 0; i <= numArr; i++) {
          let fracPos = i / numArr + offset;
          if (fracPos > 1) fracPos -= 1;
          let pf = new Feature(
            new Point(f_street.getGeometry().getCoordinateAt(fracPos))
          );
          points.push(pf);
        }

        //确定方向并绘制
        f_street.getGeometry().forEachSegment((start, end) => {
          points.forEach((item) => {
            let line = new LineString([start, end]);
            let coord = item.getGeometry().getFirstCoordinate();
            let cPoint = line.getClosestPoint(coord);
            if (
              Math.abs(cPoint[0] - coord[0]) < 1 &&
              Math.abs(cPoint[1] - coord[1]) < 1
            ) {
              let dx = end[0] - start[0];
              let dy = end[1] - start[1];
              var rotation = Math.atan(dx / dy);
              rotation = dy > 0 ? rotation : Math.PI + rotation;
              iconStyle.getImage().setRotation(rotation);
              vct.setStyle(iconStyle);
              // console.log("draw");
              vct.drawGeometry(item.getGeometry());
            }
          });
          vct.setStyle(outStyle);
          vct.drawGeometry(
            new Point(f_street.getGeometry().getFirstCoordinate())
          );
          vct.setStyle(midStyle);
          vct.drawGeometry(
            new Point(f_street.getGeometry().getFirstCoordinate())
          );
          vct.setStyle(innerDot);
          vct.drawGeometry(
            new Point(f_street.getGeometry().getFirstCoordinate())
          );
          vct.setStyle(foutrStyle);
          vct.drawGeometry(
            new Point(f_street.getGeometry().getLastCoordinate())
          );
          vct.setStyle(fmidStyle);
          vct.drawGeometry(
            new Point(f_street.getGeometry().getLastCoordinate())
          );
          vct.setStyle(finnerStyle);
          vct.drawGeometry(
            new Point(f_street.getGeometry().getLastCoordinate())
          );
        });

        offset = offset + 0.003;
        //复位
        if (offset >= 1) offset = 0.001;
        map.render();
      });
    },
  },
};
</script>

<style lang="scss">
</style>  