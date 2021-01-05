<template>
  <div class="map-container"> 
    <div id="map" ref="map"></div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>



import LineString from "ol/geom/LineString";
import ImageLayer from "ol/layer/Image";
import ImageCanvasSource from "ol/source/ImageCanvas";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";

import airPollution from "@/assets/json/airp.json";
import { fromLonLat } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";

import {initMap} from '../lockin-ol'
 
import {
  create as createTransform,
  multiply as multiplyTransform,
  compose as composeTransform,
  makeInverse,
} from "ol/transform";
import CanvasImmediateRenderer from "ol/render/canvas/Immediate";
import { getSquaredTolerance } from "ol/renderer/vector";
import { getUserProjection, getTransformFromProjections } from "ol/proj";
export default {
  name: "通过ImageLayer解决大量要素绘制卡顿问题",
  data () {
    return {
      map:{}  
    }
  },
  mounted() {
    this.map = initMap(this.$refs.map);
    var cvslayer = this.getCanvasLayer();
    this.map.addLayer(cvslayer)
    console.log(map);
  },
  methods: {
    getCanvasLayer() {
      var format = new GeoJSON()
      var features = format.readFeatures(airPollution)
      var airpstyle = function (feat) {
        var nd = feat.values_.concen;
        var color = [];
        if (nd <= 0.139) color = [0, 0, 0, 0]
        else if (nd > 0.139 && nd <= 0.547) color = [245, 203, 174, 1]
        else if (nd > 0.547 && nd <= 1.361) color = [235, 169, 136, 1]
        else if (nd > 1.361 && nd <= 3.02) color = [224, 132, 101, 1]
        else if (nd > 3.02 && nd <= 5.89) color = [214, 93, 69, 1]
        else if (nd > 5.89 && nd <= 11.313) color = [204, 53, 39, 1]
        else if (nd > 11.313) color = [196, 10, 10, 1];

        return new Style({
          stroke: new Stroke({
            width: 0,
            color: color
          }),
          fill: new Fill({
            color: color
          })
        })
      }
      var cvs = this.$refs.canvas;
      var canvasLayer = new ImageLayer({
        source: new ImageCanvasSource({
          canvasFunction: (
            extent,
            resolution,
            pixelRatio,
            size,
            projection
          ) => {
            var vc = this.getCanvasVectorContext(
              cvs,
              extent,
              resolution,
              pixelRatio,
              size,
              projection
            );
            features.forEach((item) => {             
              vc.drawFeature(item, airpstyle(item));
            });
            console.log(new Date().getTime());
            return cvs;
          },
          projection: "EPSG:3857",
        }),
      });
      return canvasLayer
    },
    getCanvasVectorContext(
      canvas,
      extent,
      resolution,
      pixelRatio,
      size,
      projection
    ) {
      canvas.width = size[0] * pixelRatio;
      canvas.height = size[1] * pixelRatio;
      let width = Math.round(size[0] * pixelRatio);
      let height = Math.round(size[1] * pixelRatio);
      let context = canvas.getContext("2d");

      let coordinateToPixelTransform = createTransform();
      let pixelTransform = createTransform();
      let inversePixelTransform = createTransform();

      let rotation = this.map.getView().getRotation();
      let center = this.map.getView().getCenter();
      composeTransform(
        coordinateToPixelTransform,
        size[0] / 2,
        size[1] / 2,
        1 / resolution,
        -1 / resolution,
        -rotation,
        -center[0],
        -center[1]
      );
      composeTransform( 
        pixelTransform,
        size[0] / 2,
        size[1] / 2,
        1 / pixelRatio,
        1 / pixelRatio,
        rotation,
        -width / 2,
        -height / 2
      );
      makeInverse(inversePixelTransform, pixelTransform);
      const transform = multiplyTransform(
        inversePixelTransform.slice(),
        coordinateToPixelTransform
      );
      const squaredTolerance = getSquaredTolerance(resolution, pixelRatio);
      let userTransform;
      const userProjection = getUserProjection();
      if (userProjection) {
        userTransform = getTransformFromProjections(userProjection, projection);
      }
      return new CanvasImmediateRenderer( 
        context,
        pixelRatio,
        extent,
        transform,
        rotation,
        squaredTolerance,
        userTransform
      );
    },
  },
  destroyed(){
    console.log("destroyed");
  }
};
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 100%;
}
</style>