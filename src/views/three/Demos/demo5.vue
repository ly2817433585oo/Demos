<template>
  <div class="indexmap" ref="container"></div>
</template>

<script>
import * as THREE from "../JS/three";
import Stats from "../JS/stats.min.js";
import "../JS/OrbitControls";
import Detector from "../JS/Detector";
import "../JS/streetsapePlayer.js";
import "../JS/dop.min.js";
import * as Dat from 'dat.gui';
export default {
  name: "threejs-demo4",
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    init() {
      var scene,
        dop = new Dop(),
        
        delimiter_pattern = /\s+/,
        positionConfig,
        sourceConfig;
      console.log(dop);
      var params = {
        filePath: "http://10.35.11.170/threejs/_3D_pos.txt",
        verticalShift: -35,
        currentIndex: 0,
        spacingScale: 21,
        planeScale: 0.2,
        minPolarAngle: -90,
        maxPolarAngle: 90,
        scenesArr: [],
        initOverCallBack: function (scene) {
          console.log(scene);
        },
      };
      console.log(dat);
      var dat = new Dat.GUI()

      var settings = {
        target: 0,
        changeScene: function () {
          //获取场景所有位置热点
          scene.plane.children.forEach(function (item) {
            if (
              item.name === "location" &&
              item.userData.index == settings.target
            ) {
              scene.changeScene(item);
            }
          });
        },
        show: false,
        setDisplay: function () {
          scene.setDisplayByName(settings.target, settings.show);
        },
        getPTF: function () {
          console.log(scene.getScenePTF());
        },
        downLoadImage: function () {
          scene.downLoadImage();
        },
        getUV: function () {
          console.log(scene.getSceneUV());
        },
      };

      dat.add(settings, "target", 0, 21).step(1).name("场景下标");
      dat.add(settings, "changeScene").name("切换场景");
      dat.add(settings, "show").name("位置显示");
      dat.add(settings, "setDisplay").name("设置显示");
      dat.add(settings, "getPTF").name("获取坐标");
      dat.add(settings, "downLoadImage").name("屏幕截图");
      dat.add(settings, "getUV").name("获取UV");

      //加载所需要的数据
      dop.get("http://10.35.11.170/threejs/config.json", function (data) {
        let config = JSON.parse(data);

        let arr = [];

        config.forEach(function (item) {
          item.sceneBlockModel.fileBlockDir = item.fileBlockDir
            .split("/SkyUpload/pano/2018/10-17/10/")[1]
            .split("/Block/")[0];
          item.sceneBlockModel.fileBlockDir =
            "http://10.35.11.170/threejs/streetspace/" +
            item.sceneBlockModel.fileBlockDir +
            "/";
          // console.log(item.sceneBlockModel.fileBlockDir);
          /*arr.push({
                name: Number(item.sceneName.split("_ROT_SRC_00")[1]),
                block: item.sceneBlockModel
            });*/

          arr[Number(item.sceneName.split("_ROT_SRC_00")[1])] =
            item.sceneBlockModel;
        });

        sourceConfig = arr;
        console.log(sourceConfig);

        createConfig();
      });

      dop.get(params.filePath, function (data) {
        positionConfig = data;

        createConfig();
      });

      //生成配置项
      function createConfig() {
        if (!positionConfig || !sourceConfig) {
          return;
        }

        let dataArr = positionConfig.split("\n");

        //生成位置数据，对应所有图片的位置
        let positionArr = [];
        let len = +dataArr[0] + 1;
        for (let i = 1; i < len; i++) {
          positionArr.push(dataArr[i].split(delimiter_pattern));
        }
        // console.log(positionArr);
        //生成图片
        for (let i = 0; i < positionArr.length; i++) {
          params.scenesArr.push({
            sceneId: "v1",
            sceneName: i + 1,
            sceneFilePath: sourceConfig[i + 1].fileBlockDir + "preview.jpg",
            sceneType: "Image",
            sceneModel: "Sphere",
            sceneBlockModel: sourceConfig[i + 1],
            sceneSpeed: 0.8,
            initPan: 0,
            initTilt: 0,
            initFov: 90,
            posX: +positionArr[i][1],
            posY: +positionArr[i][0],
            posZ: +positionArr[i][2],
            isLittlePlanetEffect: false,
          });
        }
        // console.log(params);
        scene = InitStreetsapePlayer(params);
      }

      //处理数字改为字符串
      function toFourNum(num) {
        let str = num.toString();
        while (str.length < 4) {
          str = "0" + str;
        }
        return str;
      }
    },
  },
  mounted() {
    this.init();
  },
  destroyed() {
    var this_ = this;
    cancelAnimationFrame(this_.timer);
  },
};
</script>

<style lang="scss">
.indexmap {
  height: 1000px;
  width: 1000px;
}
</style>