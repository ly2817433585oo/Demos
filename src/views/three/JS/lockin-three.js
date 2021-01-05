import * as THREE from "./three";
import Stats from "./stats.min.js";
import dat from "./dat.gui.min.js";
import "./OrbitControls";

var camera, scene, renderer;
var geometry, material, mesh;
var stats, controls;

function initCamera() {
  camera = new THREE.PerspectiveCamera(
    75, // 视野角度（FOV）
    this_.$refs.container.clientWidth / this_.$refs.container.clientHeight, //长宽比
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
  renderer.setSize(this_.$refs.container.clientWidth, this_.$refs.container.clientHeight);
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
  requestAnimationFrame(animate);
}