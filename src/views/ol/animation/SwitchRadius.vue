<template>
  <div class="map-container">
    <div class="drag-control" draggable="true" ref="dragControl">
      <i>&lt;&nbsp;&gt;</i>
    </div>
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import { initMap, getVectorLayer,initOverlay} from "../lockin-ol";
import { polygonStyle, outStyle } from "../style/GaoDePathStyle.js";
import {getFeatureOfCircle} from '../features/index.js'

import Feature from "ol/Feature";
import Circle from "ol/geom/Circle";
import Point from "ol/geom/Point";

export default {
  name: "SwtichRadius",
  data() {
    return {
      center: [11936406.337013, 3786384.633134],
      radius: 100000,
    };
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init() {
      var _this = this;
      let container = this.$refs.map;
      let dragControl = this.$refs.dragControl;

      let map = initMap(container);

      let Overlay = initOverlay(dragControl);
      let vlayr = getVectorLayer();
      let pfeature = getFeatureOfCircle(this.center, this.radius);
      let source = vlayr.getSource();

      Overlay.setPosition(this.getDragControlCoor(this.center, this.radius));
      map.addOverlay(Overlay);
      vlayr.setStyle(polygonStyle);
      source.addFeature(pfeature);
      map.addLayer(vlayr);
      dragControl.onmousedown = function () {
        dragControl.draggable = true;
        dragControl.ondrag = (evt) => {
          _this.dragEvent(evt, map, source, Overlay);
        };
        dragControl.ondragend = function (evt) {
          _this.dragEvent(evt, map, source, Overlay);
          dragControl.draggable = false;
        };
      };
    },
    //核心
    dragEvent(evt, map, source, overlay) {
      var _pixel = map.getPixelFromCoordinate(this.center);
      var pixel = [evt.layerX, _pixel[1]];
      var coord = map.getCoordinateFromPixel(pixel);
      overlay.setPosition(coord);
      var radius = coord[0] - this.center[0];
      console.log(radius);
      source.clear();
      source.addFeature(getFeatureOfCircle(this.center, radius));
    },
    getDragControlCoor(center, radius) {
      return [center[0] + radius, center[1]];
    },
  },
};
</script>

<style scope lang="scss">


.drag-control {
  width: 30px;
  height: 20px;
  // background-color: pink;
  background-color: #ece9e9;
  border-radius: 10px;
  line-height: 20px;
  border: 1px solid #888;
  i {
    color: #3d6dcc;
    font-weight: 700;
  }
  cursor: pointer;
}
</style>