<template>
  <div class="map-container" ref="container">
    <video id="video" autoplay controls ref="video">
      <source src="../../../assets/video/sintel.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import * as THREE from "../JS/three";
import Stats from "../JS/stats.min.js";
import dat from "../JS/stats.min.js";
import "../JS/OrbitControls";

export default {
  name: "threejs-demo2",
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
        camera.position.set(20, 20, 20);
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
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        this_.$refs.container.appendChild(renderer.domElement);
      }
      function initScene() {
        scene = new THREE.Scene();
      }
      function initLight() {
        scene.add(new THREE.AmbientLight(0x444444));
        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 20, 20);
        light.castShadow = true;
        light.shadow.camera.top = 10;
        light.shadow.camera.bottom = -10;
        light.shadow.camera.left = -10;
        light.shadow.camera.right = 10;

        scene.add(light);
      }
      function initModel() {
        var helper = new THREE.AxesHelper(50);
        scene.add(helper);

        geometry = new THREE.BoxBufferGeometry(10, 5, 5);

        var video = this_.$refs.video;
        var texture = new THREE.VideoTexture(video);
        texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        material = new THREE.MeshBasicMaterial({ map: texture });

        scene.add(new THREE.Mesh(geometry, material));
      }
      function initController() {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // console.log(controls);
        // 使用动画循环使用时阻尼或自转 意思是是否有惯性
        controls.enableDamping = true;
        controls.dampingFactor = 0.25; // 动态阻尼系数  鼠标拖拽灵敏度
        controls.enableZoom = true;
        controls.autoRotate = false;
        controls.minDistance = 10;
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

      initCamera();
      intitRender();
      initScene();
      initModel();
      initStats();
      initController();
      animate();
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