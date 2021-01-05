<template>
  <div class="map-container" ref="container">
    <canvas ref="surface" style="width:240px; height:240px;"></canvas>
  </div>
</template>

<script>
import * as THREE from "../JS/three";
import Stats from "../JS/stats.min.js";
import dat from "../JS/stats.min.js";
import "../JS/OrbitControls";
import "../JS/Detector";
// import { canvas } from "../JS/Detector";

export default {
  name: "threejs-demo3",
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
        var cubeTextureLoader = new THREE.CubeTextureLoader();
        cubeTextureLoader.setPath("http://10.35.11.170/threejs/space/");
        var cubTexture = cubeTextureLoader.load([
          "right.jpg",
          "left.jpg",
          "top.jpg",
          "bottom.jpg",
          "front.jpg",
          "back.jpg",
        ]);

        scene.background = cubTexture;
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
        geometry = new THREE.BoxBufferGeometry(5, 5, 5);

        var canvas = this_.$refs.surface
        var texture = new THREE.CanvasTexture(canvas);
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

      function initCanvas() {
        var canvas = this_.$refs.surface;
        var ctx = canvas.getContext("2d");
        ctx.scale(1, 1);

        var particles = [];
        var particle_count = 150;
        for (var i = 0; i < particle_count; i++) {
          particles.push(new particle());
        }
        var time = 0;

        var canvasWidth = 480;
        var canvasHeight = 480;
        var wrp = document.getElementsByClassName(".wrapper");
        console.log(wrp);
        // wrp.style.width = canvasWidth;
        // wrp.style.height = canvasHeight;
        canvas.style.width = canvasWidth;
        canvas.style.height = canvasHeight;
        console.log(canvas);


        // shim layer with settimeout fallback from paul irish
        function particle() {
          this.speed = { x: -1 + Math.random() * 2, y: -5 + Math.random() * 5 };
          canvasWidth = this_.$refs.surface.width;
          canvasHeight = this_.$refs.surface.height;
          this.location = { x: canvasWidth / 2, y: canvasHeight / 2 + 35 };
          this.radius = 0.5 + Math.random();
          this.life = 10 + Math.random() * 10;
          this.death = this.life;
          this.r = 255;
          this.g = Math.round(Math.random() * 155);
          this.b = 0;
        }
        function ParticleAnimation() {
          ctx.globalCompositeOperation = "source-over";
          ctx.fillStyle = "black";
          ctx.fillRect(0, 0, canvasWidth, canvasHeight);
          ctx.globalCompositeOperation = "light";
          for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            ctx.beginPath();
            p.opacity = Math.round((p.death / p.life) * 100) / 100;
            var gradient = ctx.createRadialGradient(
              p.location.x,
              p.location.y,
              0,
              p.location.x,
              p.location.y,
              p.radius
            );
            gradient.addColorStop(
              0,
              "rgba(" + p.r + "," + p.g + "," + p.b + "," + p.opacity + ")"
            );
            gradient.addColorStop(
              0.5,
              "rgba(" + p.r + "," + p.g + "," + p.b + "," + p.opacity + ")"
            );
            gradient.addColorStop(
              1,
              "rgba(" + p.r + "," + p.g + "," + p.b + ",0)"
            );
            ctx.fillStyle = gradient;
            ctx.arc(
              p.location.x,
              p.location.y,
              p.radius,
              Math.PI * 2,
              false
            );
            ctx.fill();
            p.death--;
            p.radius++;
            p.location.x += p.speed.x;
            p.location.y += p.speed.y;

            //  regenerate particales
            if (p.death < 0 || p.radius < 0) {
              // a band new particles  replacing the dead one
              particles[i] = new particle();
            }
          }
          this_.timer = requestAnimationFrame(ParticleAnimation);
        }    
        ParticleAnimation()
      }

      function animate() {
        render()
        //更新控制器
        renderer.render(scene, camera);
        //更新性能插件
        stats.update();
        this_.timer = requestAnimationFrame(animate);
      }
      function render() {
        material.map.needsUpdate = true;
      }
      initCanvas();
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