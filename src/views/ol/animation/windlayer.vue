<template>
  <div class="map-container">
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import {
  initMap,
  // getFeaturesFromGeoJSON,
  // getVectorLayer,
  // getVlayerWithGeoJSONformat,
} from "../lockin-ol.js";
import { WindLayer } from "ol-wind";
import windjson from "@/assets/json/wind.json";

export default {
  name: "wind-layer",
  methods: {
    init() {
      var map = initMap(this.$refs.map);
      var windlayer = new WindLayer(windjson, {
        windOptions: {
          // colorScale: scale,
          velocityScale: 1 / 5,
          paths: 5000,
          // eslint-disable-next-line no-unused-vars
          colorScale: [
            "rgb(36,104, 180)",
            "rgb(60,157, 194)",
            "rgb(128,205,193 )",
            "rgb(151,218,168 )",
            "rgb(198,231,181)",
            "rgb(238,247,217)",
            "rgb(255,238,159)",
            "rgb(252,217,125)",
            "rgb(255,182,100)",
            "rgb(252,150,75)",
            "rgb(250,112,52)",
            "rgb(245,64,32)",
            "rgb(237,45,28)",
            "rgb(220,24,32)",
            "rgb(180,0,35)",
          ],
          width: 1,
          // colorScale: scale,
          generateParticleOption: false,
          frameRate:40
        },
        // map: map,
        // projection: 'EPSG:4326'
      });
      map.addLayer(windlayer);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
</style>