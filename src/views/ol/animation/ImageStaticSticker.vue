<template>
  <div class="map-container">
    <div ref="map" style="width: 100%; height: 1000px"></div>
  </div>
</template>

<script>
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import Icon from "ol/style/Icon";
import Point from "ol/geom/Point";
import {
  fromLonLat,
  toLonLat,
  addProjection,
  addCoordinateTransforms,
} from "ol/proj";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection";
import GeoJSON from "ol/format/GeoJSON";
import LinearRing from "ol/geom/LinearRing";
import Polygon from "ol/geom/Polygon";
import { fromExtent } from "ol/geom/Polygon";
import {inv,multiply,transpose} from 'mathjs'

export default {
  name: "ImageStatic 贴图",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var mapElement = this.$refs.map;
      var map = new Map({
        controls: [],
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: mapElement,
        view: new View({
          projection: "EPSG:3857",
          center: [13131276.895240065, 4268931.592698808],
          minZoom: 4, 
          zoom: 10,
          maxZoom: 12,
          // rotation: -Math.PI / 2,
        }),
      });
      var upperLeft = [13162176.18280016, 4293380.735356985];
      var lowerLeft = [13160250.090381602, 4239450.147637359];
      var upperRight = [13106897.330387544, 4260251.945757786];
      var upperLeftPixel = [162, 611];
      var lowerLeftPixel = [698, 593];
      var upperRightPixel = [488, 41];
      //定义仿射变换函数
      function affineTransform(point, from, to) {
        if (from.length != to.length) return;
        var X = [];
        var Y = [];
        var I = [];
        var U = [];
        var V = [];
        from.forEach((item, index) => {
          X.push(item[0]);
          Y.push(item[1]);
          I.push(1);
          U.push([to[index][0]]);
          V.push([to[index][1]]);
        });
        var XYIt = [X, Y, I];
        var resultINV = inv(multiply(XYIt, transpose(XYIt)));     
        var resultMulti = multiply(resultINV, XYIt);
        var vec1 = multiply(resultMulti, U);
        var vec2 = multiply(resultMulti, V);
        return [
          vec1[0][0] * point[0] + point[1] * vec1[1][0] + vec1[2][0],
          vec2[0][0] * point[0] + point[1] * vec2[1][0] + vec2[2][0],
        ];
      }
      function forward(coord) {
        return affineTransform(
          coord,
          [upperLeft, lowerLeft, upperRight],
          [upperLeftPixel, lowerLeftPixel, upperRightPixel]
        );
      }
      function erase(geom) {
        console.log(fromLonLat([-180,-90]));
        var extent = [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244];
        var polygonRing = fromExtent(extent);
        var coords = geom.getCoordinates();
        // console.log(coords);
        coords.forEach((coord) => {
          // console.log(coord[0]);
          var linearRing = new LinearRing(coord);
          polygonRing.appendLinearRing(linearRing);
        });
        return polygonRing;
      }

      function reverse(coord) {
        return affineTransform(
          coord,
          [upperLeftPixel, lowerLeftPixel, upperRightPixel],
          [upperLeft, lowerLeft, upperRight]
        );
      }
      //定义地图的像素坐标四至
      var extent = [0, 0, 855, 660];

      //定义地图的投影坐标系，像素坐标
      var projection = new Projection({
        code: "mengying",
        units: "m",
        extent: extent,
      });
      addProjection(projection);
      addCoordinateTransforms("EPSG:3857", "mengying", forward, reverse);
      var imageLayer = new ImageLayer({
        source: new Static({
          url: require("@/assets/icons/图层 5.png"),
          projection: projection,
          imageExtent: extent,
        }),
        opacity: 1,
      });
      map.addLayer(imageLayer);

    },
    
  },
};
</script>

<style>
</style>