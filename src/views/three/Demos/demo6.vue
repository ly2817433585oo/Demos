<template>
  <div class="map-container" ref="container"></div>
</template>

<script>
import * as THREE from "../JS/three";
import Stats from "../JS/stats.min.js";
import "../JS/OrbitControls";
import Detector from "../JS/Detector";
import "../JS/dop.min.js";
import * as Dat from "dat.gui";
import "../JS/ImprovedNoise.js";
export default {
  name: "threejs-demo6",
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
      var sphere, terrain, target, depthScene, orthCamera;
      var worldDepth = 256,
        worldWidth = 256,
        worldHalfWidth = worldWidth / 2,
        worldHalfDepth = worldDepth / 2;
      var clock = new THREE.Clock();
      var box = new THREE.Box3(
        new THREE.Vector3(-4000, 0, -4000),
        new THREE.Vector3(4000, 5000, 4000)
      );
      var light;
      function initCamera() {
        camera = new THREE.PerspectiveCamera(
          40, // 视野角度（FOV）
          this_.$refs.container.clientWidth /
            this_.$refs.container.clientHeight, //长宽比
          1, //近截面
          150000 //远截面
        );
        camera.position.set(10000, 10000, 10000);
      }
      function intitRender() {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
        });
        renderer.setSize(
          this_.$refs.container.clientWidth,
          this_.$refs.container.clientHeight
        );
        // renderer.setClearColor(0xffffff);
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.shadowMap.enabled = true;
        this_.$refs.container.appendChild(renderer.domElement);
      }
      function initScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x333333);
      }
      function initLight() {}
      function initModel() {
        var rain = creatRain();
        var terrian = createTerrain();
        createDepth();

        function createDepth() {
          target = new THREE.WebGLRenderTarget(worldWidth, worldDepth);
          target.texture.format = THREE.RGBFormat;
          target.texture.minFilter = THREE.NearestFilter;
          target.texture.magFilter = THREE.NearestFilter;
          target.texture.generateMipmaps = false;

          orthCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 2);
          const center = new THREE.Vector3();
          box.getCenter(center);

          orthCamera.left = box.min.x - center.x;
          orthCamera.right = box.max.x - center.x;
          orthCamera.top = box.max.z - center.z;
          orthCamera.bottom = box.min.z - center.z;
          orthCamera.near = 0.1;
          orthCamera.far = box.max.y - box.min.y;

          orthCamera.position.copy(center);
          orthCamera.position.y += box.max.y - center.y;
          orthCamera.lookAt(center);

          orthCamera.updateProjectionMatrix();

          depthScene = new THREE.Scene();
          depthScene.overrideMaterial = new THREE.ShaderMaterial({
            vertexShader: `
              varying float color;
              float decodeRGBA2Float(vec4 rgba) {
                return dot(rgba,vec4(1.0,1.0/255.0,1.0/65025.0,1.0/16581375.0));

              }
              vec4 encodeFloat2RGBA(float v){
                vec4 enc = vec4(1.0,255.0,65025.0,16581375.0) *v;
                enc = fract(enc);
                enc -= enc.yzww * vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);
                return enc;
              }
              void main() {
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                color = gl_Position.z /2.0 + 0.5;
              }
            `,
            fragmentShader: `
              uniform float cameraNear;
              uniform float cameraFar;
              varying float color;
        
              vec4 encodeFloat2RGBA(float v)
              {
                vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * v;
                enc = fract(enc);
                enc -= enc.yzww * vec4(1.0/255.0, 1.0/255.0, 1.0/255.0, 0.0);
                return enc;
              }
              void main() {
                gl_FragColor = encodeFloat2RGBA(1.0 - color);
              }
            `,
            uniforms: {
              cameraNear: { value: orthCamera.near },
              cameraFar: { value: orthCamera.far },
            },
          });

          renderer.setRenderTarget(target);
          depthScene.children = [terrian];
          renderer.render(depthScene, orthCamera);
          renderer.setRenderTarget(null);
        }

        function creatRain() {
          material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.8,
            map: new THREE.TextureLoader().load("http://10.35.11.170/threejs/color.png"),
            depthWrite: false,
          });
          console.log(material);
          material.onBeforeCompile = function (shader, render) {
            const getFoot = `
            uniform float top;
            uniform float bottom;
            uniform float time;
            uniform mat4 cameraMatrix;
            varying float depth;
            varying vec2 depthUv;
            #include <common>
            float angle(float x, float y){
                return atan(y, x);  
            }
            vec2 getFoot(vec2 camera,vec2 normal,vec2 pos){
                vec2 position;

                float distanceLen = distance(pos, normal);

                float a = angle(camera.x - normal.x, camera.y - normal.y);

                pos.x > normal.x ? a -= 0.785 : a += 0.785; 

                position.x = cos(a) * distanceLen;
                position.y = sin(a) * distanceLen;
                
                return position + normal;
            }
            `;
            const begin_vertex = `
            vec2 foot = getFoot(vec2(cameraPosition.x, cameraPosition.z),  vec2(normal.x, normal.z), vec2(position.x, position.z));
            float height = top - bottom;
            float y = normal.y - bottom - height * time;
            y = y + (y < 0.0 ? height : 0.0);
            float ratio = (1.0 - y / height) * (1.0 - y / height);
            depth = ratio;
            y = height * (1.0 - ratio);
            y += bottom;
            y += position.y - normal.y;
            vec3 transformed = vec3( foot.x, y, foot.y );
            vec4 cameraDepth = cameraMatrix * vec4(transformed, 1.0);
            depthUv = cameraDepth.xy/2.0 + 0.5;
            `;

            const depth_vary = `
            uniform sampler2D tDepth;
            uniform float opacity;
            varying float depth;
            varying vec2 depthUv;

            float decodeRGBA2Float(vec4 rgba)
            {
                return dot(rgba, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));
            }
            `;

            const depth_frag = `
              if(1.0 - depth < decodeRGBA2Float(texture2D( tDepth, depthUv ))) discard;
              vec4 diffuseColor = vec4( diffuse, opacity );
            `;
            shader.vertexShader = shader.vertexShader.replace(
              "#include <common>",
              getFoot
            );
            shader.vertexShader = shader.vertexShader.replace(
              "#include <begin_vertex>",
              begin_vertex
            );
            shader.fragmentShader = shader.fragmentShader.replace(
              "uniform float opacity;",
              depth_vary
            );
            shader.fragmentShader = shader.fragmentShader.replace(
              "vec4 diffuseColor = vec4( diffuse, opacity );",
              depth_frag
            );

            shader.uniforms.cameraPosition = {
              value: new THREE.Vector3(0, 200, 0),
            };
            shader.uniforms.top = {
              value: 2000,
            };
            shader.uniforms.bottom = {
              value: -2000,
            };
            shader.uniforms.time = {
              value: 0,
            };
            shader.uniforms.cameraMatrix = {
              value: new THREE.Matrix4(),
            };
            shader.uniforms.tDepth = {
              value: target.texture,
            };
            material.uniforms = shader.uniforms;
          };
          var geometry = new THREE.BufferGeometry();

          const vertices = [];
          const normals = [];
          const uvs = [];
          const indices = [];

          for (let i = 0; i < 10000; i++) {
            const pos = new THREE.Vector3();
            pos.x = Math.random() * (box.max.x - box.min.x) + box.min.x;
            pos.y = Math.random() * (box.max.y - box.min.y) + box.min.y;
            pos.z = Math.random() * (box.max.z - box.min.z) + box.min.z;

            const height = (box.max.y - box.min.y) / 15;
            const width = height / 50;

            vertices.push(
              pos.x + width,
              pos.y + height,
              pos.z,
              pos.x - width,
              pos.y + height,
              pos.z,
              pos.x - width,
              pos.y,
              pos.z,
              pos.x + width,
              pos.y,
              pos.z
            );

            normals.push(
              pos.x,
              pos.y - height / 2,
              pos.z,
              pos.x,
              pos.y - height / 2,
              pos.z,
              pos.x,
              pos.y - height / 2,
              pos.z,
              pos.x,
              pos.y - height / 2,
              pos.z
            );

            uvs.push(1, 1, 0, 1, 0, 0, 1, 0);

            indices.push(
              i * 4 + 0,
              i * 4 + 1,
              i * 4 + 2,
              i * 4 + 0,
              i * 4 + 2,
              i * 4 + 3
            );
          }

          geometry.addAttribute(
            "position",
            new THREE.BufferAttribute(new Float32Array(vertices), 3)
          );
          geometry.addAttribute(
            "normal",
            new THREE.BufferAttribute(new Float32Array(normals), 3)
          );
          geometry.addAttribute(
            "uv",
            new THREE.BufferAttribute(new Float32Array(uvs), 2)
          );
          geometry.setIndex(
            new THREE.BufferAttribute(new Uint32Array(indices), 1)
          );

          var mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);

          return mesh;
        }

        function createTerrain() {
          var data = generateHeight(worldWidth, worldDepth);
          var geometry = new THREE.PlaneBufferGeometry(
            8000,
            8000,
            worldWidth - 1,
            worldDepth - 1
          );

          geometry.rotateX(-Math.PI / 2);
          var vertices = geometry.attributes.position.array;
          for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
            vertices[j + 1] = data[i] * 20;
          }

          var mytexture = new THREE.CanvasTexture(
            generateTexture(data, worldWidth, worldDepth)
          );
          mytexture.wrapS = THREE.ClampToEdgeWrapping;
          mytexture.wrapT = THREE.ClampToEdgeWrapping;

          mesh = new THREE.Mesh(
            geometry,
            new THREE.MeshBasicMaterial({
              map: mytexture,
              side: THREE.DoubleSide,
            })
          );
          scene.add(mesh);
          return mesh;
        }

        function generateHeight(width, height) {
          var size = width * height,
            data = new Uint8Array(size),
            perlin = new THREE.ImprovedNoise(),
            quality = 1,
            z = Math.random() * 100;
          for (var j = 0; j < 4; j++) {
            for (var i = 0; i < size; i++) {
              var x = i % width,
                y = ~~(i / width);
              data[i] += Math.abs(
                perlin.noise(x / quality, y / quality, z) * quality * 1.75
              );
            }
            quality *= 5;
          }
          return data;
        }

        function generateTexture(data, width, height) {
          var canvas,
            canvasScaled,
            context,
            image,
            imageData,
            vector3,
            sun,
            shade;
          vector3 = new THREE.Vector3(0, 0, 0);
          sun = new THREE.Vector3(1, 1, 1);
          sun.normalize();
          canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          context = canvas.getContext("2d");
          context.fillStyle = "#000";
          context.fillRect(0, 0, width, height);

          image = context.getImageData(0, 0, canvas.width, canvas.height);
          imageData = image.data;

          for (var i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
            vector3.x = data[j - 2] - data[j + 2];
            vector3.y = 2;
            vector3.z = data[j - width * 2] - data[j + width * 2];
            vector3.normalize();

            shade = vector3.dot(sun);

            imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007);
            imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007);
            imageData[i + 2] = shade * 96 * (0.5 + data[j] * 0.007);
          }

          context.putImageData(image, 0, 0);

          //scale 4x
          canvasScaled = document.createElement("canvas");
          canvasScaled.width = width * 4;
          canvasScaled.height = height * 4;

          context = canvasScaled.getContext("2d");
          context.scale(4, 4);
          context.drawImage(canvas, 0, 0);

          image = context.getImageData(
            0,
            0,
            canvasScaled.width,
            canvasScaled.height
          );
          imageData = image.data;

          for (var i = 0, l = imageData.length; i < l; i += 4) {
            var v = ~~(Math.random() * 5);
            imageData[i] += v;
            imageData[i + 1] += v;
            imageData[i + 2] += v;
          }

          context.putImageData(image, 0, 0);
          return canvasScaled;
        }
      }

      function initController() {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // console.log(controls);
        // 使用动画循环使用时阻尼或自转 意思是是否有惯性
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.25; // 动态阻尼系数  鼠标拖拽灵敏度
        // controls.enableZoom = true;
        // controls.autoRotate = false;
        // controls.minDistance = 10;
        // controls.maxDistance = 200;
        // controls.enablePan = true; // 右键拖拽
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
            ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
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
        ParticleAnimation();
      }
      function initGui() {}
      function animate() {
        render();
        //更新控制器
        renderer.render(scene, camera);
        //更新性能插件
        stats.update();
        this_.timer = requestAnimationFrame(animate);
      }
      function onWindowResize() {
        windowHalfX = this_.$refs.container.clientWidth / 2;
        windowHalfY = this_.$refs.container.clientHeight / 2;

        camera.aspect =
          this_.$refs.container.clientWidth /
          this_.$refs.container.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(
          this_.$refs.container.clientWidth,
          this_.$refs.container.clientHeight
        );
      }
      function render() {
        var time = (clock.getElapsedTime() / 2) % 1;
        if (material.uniforms) {
          material.uniforms.cameraPosition.value = camera.position;
          material.uniforms.time.value = time;
          material.uniforms.top.value = box.max.y;
          material.uniforms.bottom.value = box.min.y;

          material.uniforms.cameraMatrix.value = new THREE.Matrix4().multiplyMatrices(
            orthCamera.projectionMatrix,
            orthCamera.matrixWorldInverse
          );
          material.uniforms.tDepth.value = target.texture;
        }
      }
      if (!Detector.webgl) Detector.addGetWebGLMessage();
      initScene();
      initCamera();
      intitRender();
      initModel();
      initStats();
      initController();
      animate();
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
</style>