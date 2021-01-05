<template>
  <div class="map-container">
    <input type="radio" name="check" @change="modify()" ref="modify" />修改
    <input type="radio" name="check" @change="add()" ref="add" />新增
    <input type="radio" name="check" @change="dele()" ref="dele" />删除
    <input type="button" value="查询" @click="queryWFS()" />
    <input type="button" value="增删改" @click="onRequset()" />
    <!-- <input type="button" value="删改" @click="reviseWFS()" /> -->
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import DragBox from "ol/interaction/DragBox";
import { platformModifierKeyOnly } from "ol/events/condition";
import Select from "ol/interaction/Select";
import Modify from "ol/interaction/Modify";
import Draw from "ol/interaction/Draw";
import MultiPolygon from "ol/geom/MultiPolygon";
import Feature from "ol/Feature";
import WFS from "ol/format/WFS";
import {
  initMap,
  getFeaturesFromGeoJSON,
  getVectorLayer,
  getVlayerWithGeoJSONformat,
} from "../lockin-ol.js";
// import func from "../../../../vue-temp/vue-editor-bridge.js";

export default {
  name: "WFS",
  data() {
    return {
      map: null,
      wfsLayer: {},
      url:
        "http://localhost:8080/geoserver/lockin/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=lockin%3Aquxian&maxFeatures=150&outputFormat=application%2Fjson",
      selectInteraction: {},
      selectedFeatures: null,
      drawFeatures: [],
      drawLayer: null,
      drawInteraction: {},
      geomType: "MultiPolygon",
      modifyInteraction: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(window.innerHeight,window.innerWidth,"w h");
      var this_ = this;
      // 创建地图
      this.map = initMap(this.$refs.map);
      // 创建拉框
      var dragBox = new DragBox({
        condition: platformModifierKeyOnly,
      });
      // 创建选择交互对象
      this.selectInteraction = new Select();
      // 获得选择对象集 （为空，可显示选择样式）
      this.selectedFeatures = this.selectInteraction.getFeatures();
      this.selectInteraction.on("select", (e) => {
        // this_.selectedFeatures.clear();
        this_.selectedFeatures.push(e.selected[0]);
      });
      // 绑定拉狂开始事件，新的拉框开始时把上一次选中的要素清空
      dragBox.on("boxstart", function () {
        // console.log(this_.selectedFeatures);
        this_.selectedFeatures.clear();
      });

      // 绑定拉框结束事件，通过extent获得选中的要素并加入到选中要素集中
      dragBox.on("boxend", function () {
        var extent = dragBox.getGeometry().getExtent();
        if (this_.wfsLayer) {
          this_.wfsLayer
            .getSource()
            .forEachFeatureIntersectingExtent(extent, function (feature) {
              this_.selectedFeatures.push(feature);
            });
        }
      });
      // 新建修改交互对象，使用选择要素集作为要素对象
      this.modifyInteraction = new Modify({
        features: this_.selectedFeatures,
      });
      // modifyInteraction.on('modifyend', e => {
      //     console.log(e, 'modifyend');
      //     modifyFeature = e.features
      // })
      // 添加两个交互对象
      this.map.addInteraction(dragBox);
      this.map.addInteraction(this.selectInteraction);
      // 新建DrawInteraction,应该在得到WFS数据后确定geometry类型再创建，drawlayer同理
      this.drawLayer = getVectorLayer();
      this.drawInteraction = new Draw({
        type: this_.geomType,
        source: this_.drawLayer.getSource(),
      });
      this.drawInteraction.on("drawend", function (e) {
        // 绘制结束时暂存绘制的feature
        this_.drawFeatures.push(e.feature);
      });
      this.map.addLayer(this.drawLayer);
    },
    queryWFS() {
      if (this.wfsLayer) {
        this.map.removeLayer(this.wfsLayer);
      }
      this.wfsLayer = getVlayerWithGeoJSONformat(this.url);
      this.wfsLayer.getSource();
      this.map.addLayer(this.wfsLayer);
    },
    modify() {
      if (this.$refs.modify.checked) {
        this.map.removeInteraction(this.modifyInteraction);
        this.map.addInteraction(this.modifyInteraction);
      } else {
        this.map.addInteraction(this.modifyInteraction);
      }
    },
    add() {
      if (this.$refs.add.checked) {
        this.map.removeInteraction(this.drawInteraction);
        this.map.addInteraction(this.drawInteraction);
      } else {
        this.map.addInteraction(this.drawInteraction);
        // 清空drawLayer中的要素和缓存要素集中的要素
        this.drawLayer.getSource().clear();
        this.drawFeatures.length = 0;
      }
    },
    dele() {
      if (this.$refs.dele.checked) {
        this.map.removeInteraction(this.selectInteraction);
        this.map.addInteraction(this.selectInteraction);
      } else {
        this.map.addInteraction(this.selectInteraction);
      }
    },
    onRequset() {
      var this_ = this;
      if (this.$refs.add.checked) {
        var newFeatures = [];
        this.drawFeatures.forEach((e) => {
          newFeatures.push(
            new Feature({
              the_geom: getGeomByType(e),
            })
          );
        });
        this.drawFeatures.length = 0
        this.requestWFS(newFeatures);
      } else if (this.$refs.modify.checked) {
        this.requestWFS(this.selectedFeatures.array_);
      } else if (this.$refs.dele.checked) {
        this.requestWFS(this.selectedFeatures.array_);
      } else {
        return new Error();
      }

      setTimeout(function () {
        this_.drawLayer.getSource().clear();
        this_.queryWFS();
      }, 500);

      function getGeomByType(e) {
        var geom = null;
        switch (this_.geomType) {
          case "MultiPolygon":
            geom = new MultiPolygon(e.getGeometry().getCoordinates());
            break;
          default:
            break;
        }
        return geom;
      }
    },
    requestWFS(features) {
      var WFSTSerializer = new WFS();
      var featObject;
      var wfstransactionInfo = {
        featureType: "quxian",
        featurePrefix: "lockin",
        featureNS: "lockin",
        srsName: "EPSG:3857",
      };
      if (this.$refs.add.checked) {
        featObject = WFSTSerializer.writeTransaction(
          features,
          null,
          null,
          wfstransactionInfo
        );
      } else if (this.$refs.modify.checked) {
        featObject = WFSTSerializer.writeTransaction(
          null,
          features,
          null,
          wfstransactionInfo
        );
      } else if (this.$refs.dele.checked) {
        featObject = WFSTSerializer.writeTransaction(
          null,
          null,
          features,
          wfstransactionInfo
        );
      } else {
        return new Error();
      }
      var serializer = new XMLSerializer();
      var featString = serializer.serializeToString(featObject);
      var request = new XMLHttpRequest();
      request.open(
        "POST",
        "http://localhost:8080/geoserver/lockin/ows?service=WFS"
      );
      request.setRequestHeader("Content-Type", "text/xml");
      request.send(featString);
    },
  },
};
</script>

<style lang="scss">
</style>  