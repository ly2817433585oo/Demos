<template>
  <div class="map-container" ref="container"></div>
</template>

<script>
import * as THREE from "../JS/three";
import Stats from "../JS/stats.min.js";
import dat from "../JS/stats.min.js";
import "../JS/OrbitControls";

export default {
  name: "threejs-demo1",
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    init() {
      var this_ = this;
      var camera, scene, renderer;
      var geometry, material, mesh;
      var stats, controls;
      let raycaster = new THREE.Raycaster();
      let mouse = new THREE.Vector2();
      function initCamera() {
        camera = new THREE.PerspectiveCamera(
          75, // 视野角度（FOV）
          this_.$refs.container.clientWidth /
            this_.$refs.container.clientHeight, //长宽比
          0.1, //近截面
          1000 //远截面
        );
        camera.position.set(0, 40, 100);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
      }
      function intitRender() {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        // renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setSize(
          this_.$refs.container.clientWidth,
          this_.$refs.container.clientHeight
        );
        renderer.setClearColor(0xffffff);
      }
      function initScene() {
        scene = new THREE.Scene();
      }
      function initModel() {
        var helper = new THREE.AxesHelper(10);
        scene.add(helper);

        var s = 25;
        var cube = new THREE.CubeGeometry(s, s, s);

        for (var i = 0; i < 3000; i++) {
          var material = new THREE.MeshBasicMaterial({
            color: this_.randomColor(),
          });
          var mesh = new THREE.Mesh(cube, material);

          mesh.position.x = 800 * (2.0 * Math.random() - 1.0);
          mesh.position.y = 800 * (2.0 * Math.random() - 1.0);
          mesh.position.z = 800 * (2.0 * Math.random() - 1.0);

          mesh.rotation.x = Math.random() * Math.PI;
          mesh.rotation.y = Math.random() * Math.PI;
          mesh.rotation.z = Math.random() * Math.PI;

          mesh.updateMatrix();

          scene.add(mesh);
        }
      }
      function initController() {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        console.log(controls);
        // 使用动画循环使用时阻尼或自转 意思是是否有惯性
        controls.enableDamping = true;

        controls.dampingFactor = 0.25; // 动态阻尼系数  鼠标拖拽灵敏度

        controls.enableZoom = true;

        controls.autoRotate = false;

        controls.minDistance = 50;
        controls.maxDistance = 200;

        controls.enablePan = true; // 右键拖拽
      }
      function initStats() {
        stats = new Stats();
        this_.$refs.container.appendChild(stats.dom);
      }
      function animate() {
        //更新控制器
        renderer.render(scene, camera);
        //更新性能插件
        stats.update();
        this_.timer = requestAnimationFrame(animate);
      }
      function onMouseClick(event) {
        // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1
        mouse.x = (event.layerX / this_.$refs.container.clientWidth) * 2 - 1;
        mouse.y = -(event.layerY / this_.$refs.container.clientHeight) * 2 + 1;
        // console.log(event, mouse.x, mouse.y, "event,mouse.x,mouse.y");
        raycaster.setFromCamera(mouse, camera);
        // 获取raycaster直线和所有模型相交的数据集合
        var intersects = raycaster.intersectObjects(scene.children);
        for (var i = 0; i < intersects.length; i++) {
          intersects[i].object.material.color.set(0xff00000);
        }
      }
      window.addEventListener("click", onMouseClick, false);
      initCamera();
      intitRender();
      this.$refs.container.appendChild(renderer.domElement);
      initScene();
      initModel();
      initStats();
      initController();
      animate();
      // this.animate = animate
    },
    randomColor() {
      var arrHex = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ],
        strHex = "#",
        index;
      for (var i = 0; i < 6; i++) {
        index = Math.round(Math.random() * 15);
        strHex += arrHex[index];
      }
      return strHex;
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

<style>
</style>