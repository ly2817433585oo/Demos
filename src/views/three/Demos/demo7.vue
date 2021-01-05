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
      var width = this_.$refs.container.clientWidth,
        height = this_.$refs.container.clientHeight;
      var light;
      function initCamera() {
        camera = new THREE.PerspectiveCamera(
          45, // 视野角度（FOV）
          width / height, //长宽比
          1, //近截面
          2000 //远截面
        );
        camera.position.set(0, 0, 360);
      }
      function intitRender() {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
        });
        renderer.setSize(width, height);
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
        var uniforms = {
          iTime: { value: 0.0 },
          iResolution: { value: new THREE.Vector2(width * 1.0, height * 1.0) },
          iMouse: { value: new THREE.Vector2(0.0, 0.0) },
        };

        material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: `
            void main() {
              vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            uniform float iTime;
            uniform vec2 iResolution;
            uniform vec2 iMouse;

            const int NUM_STEPS = 8;
            const float PI = 3.141592;
            const float EPSILON = 1e-3;
            #define EPSILON_NRM (0.1 / iResolution.x)

            const int ITER_GEOMETRY = 3;
            const int ITER_FRAGMENT = 5;
            const float SEA_HEIGHT = 0.6;
            const float SEA_CHOPPY = 4.0;
            const float SEA_SPEED = 0.8;
            const float SEA_FREQ = 0.16;
            const vec3 SEA_BASE = vec3(0.1,0.19,0.22);
            const vec3 SEA_WATER_COLOR = vec3(0.8,0.9,0.6);
            #define SEA_TIME (1.0 + iTime * SEA_SPEED)
            const mat2 octave_m = mat2(1.6,1.2,-1.2,1.6);

            mat3 fromEuler(vec3 ang) {
              vec2 a1 = vec2(sin(ang.x),cos(ang.x));
              vec2 a2 = vec2(sin(ang.y),cos(ang.y));
              vec2 a3 = vec2(sin(ang.z),cos(ang.z));
              mat3 m;
              m[0] = vec3(a1.y*a3.y+a1.x*a2.x*a3.x,a1.y*a2.x*a3.x+a3.y*a1.x,-a2.y*a3.x);
              m[1] = vec3(-a2.y*a1.x,a1.y*a2.y,a2.x);
              m[2] = vec3(a3.y*a1.x*a2.x+a1.y*a3.x,a1.x*a3.x-a1.y*a3.y*a2.x,a2.y*a3.y);
              return m;
            }

            float hash(vec2 p ) {
              float h = dot(p,vec2(127.1,311.7));
              return fract(sin(h)*43758.5453123);

            }

            float noise( in vec2 p ) {
              vec2 i = floor( p );
              vec2 f = fract( p );    
              vec2 u = f*f*(3.0-2.0*f);
              return -1.0+2.0*mix( mix( hash( i + vec2(0.0,0.0) ), 
                     hash( i + vec2(1.0,0.0) ), u.x),
                mix( hash( i + vec2(0.0,1.0) ), 
                     hash( i + vec2(1.0,1.0) ), u.x), u.y);
            }

            float diffuse(vec3 n,vec3 l,float p) {
              return pow(dot(n,l) * 0.4 + 0.6,p);
            }
            float specular(vec3 n,vec3 l,vec3 e,float s) {
              float nrm = (s + 8.0)/(PI * 8.0);
              return pow(max(dot(reflect(e,n),l),0.0),s) * nrm;
            }
            
            vec3 getSkyColor(vec3 e) {
              e.y = max(e.y,0.0);
              return vec3(pow(1.0-e.y,2.0),1.0-e.y,0.6+(1.0-e.y)*0.4);

            }

            float sea_octave(vec2 uv,float choppy) {
              uv +=noise(uv);
              vec2 wv =1.0 -abs(sin(uv));
              vec2 swv = abs(cos(uv));
              wv = mix(wv,swv,wv);
              return pow(1.0 - pow(wv.x*wv.y,0.65),choppy);

            }

            float map(vec3 p) {
              float freq = SEA_FREQ;
              float amp = SEA_HEIGHT;
              float choppy = SEA_CHOPPY;
              vec2 uv = p.xz; uv.x *= 0.75;

              float d, h = 0.0;    
              for(int i = 0; i < ITER_GEOMETRY; i++) {        
                  d = sea_octave((uv+SEA_TIME)*freq,choppy);
                  d += sea_octave((uv-SEA_TIME)*freq,choppy);
                  h += d * amp;        
                  uv *= octave_m; freq *= 1.9; amp *= 0.22;
                  choppy = mix(choppy,1.0,0.2);
              }
              return p.y - h;
            }

            float map_detailed(vec3 p) {
              float freq = SEA_FREQ;
              float amp = SEA_HEIGHT;
              float choppy = SEA_CHOPPY;
              vec2 uv = p.xz; uv.x *= 0.75;

              float d, h = 0.0;    
              for(int i = 0; i < ITER_FRAGMENT; i++) {        
                  d = sea_octave((uv+SEA_TIME)*freq,choppy);
                  d += sea_octave((uv-SEA_TIME)*freq,choppy);
                  h += d * amp;        
                  uv *= octave_m; freq *= 1.9; amp *= 0.22;
                  choppy = mix(choppy,1.0,0.2);
              }
              return p.y - h;
            }
            
            vec3 getSeaColor(vec3 p, vec3 n, vec3 l, vec3 eye, vec3 dist) {  
              float fresnel = clamp(1.0 - dot(n,-eye), 0.0, 1.0);
              fresnel = pow(fresnel,3.0) * 0.65;

              vec3 reflected = getSkyColor(reflect(eye,n));    
              vec3 refracted = SEA_BASE + diffuse(n,l,80.0) * SEA_WATER_COLOR * 0.12; 

              vec3 color = mix(refracted,reflected,fresnel);

              float atten = max(1.0 - dot(dist,dist) * 0.001, 0.0);
              color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;

              color += vec3(specular(n,l,eye,60.0));

              return color;
            }


            vec3 getNormal(vec3 p, float eps) {
                vec3 n;
                n.y = map_detailed(p);    
                n.x = map_detailed(vec3(p.x+eps,p.y,p.z)) - n.y;
                n.z = map_detailed(vec3(p.x,p.y,p.z+eps)) - n.y;
                n.y = eps;
                return normalize(n);
            }

            float heightMapTracing(vec3 ori, vec3 dir, out vec3 p) {  
                float tm = 0.0;
                float tx = 1000.0;    
                float hx = map(ori + dir * tx);
                if(hx > 0.0) return tx;   
                float hm = map(ori + dir * tm);    
                float tmid = 0.0;
                for(int i = 0; i < NUM_STEPS; i++) {
                    tmid = mix(tm,tx, hm/(hm-hx));                   
                    p = ori + dir * tmid;                   
                    float hmid = map(p);
                    if(hmid < 0.0) {
                        tx = tmid;
                        hx = hmid;
                    } else {
                        tm = tmid;
                        hm = hmid;
                    }
                }
                return tmid;
            }
            void main() {
              vec2 uv = gl_FragCoord.xy / iResolution.xy;
              uv = uv * 2.0 - 1.0;
              uv.x *= iResolution.x / iResolution.y;    
              float time = iTime * 0.1 + iMouse.x*0.01;

              vec3 ang = vec3(sin(time*3.0)*0.1,sin(time)*0.2+0.3,time);    
              vec3 ori = vec3(0.0,3.5,time*5.0);
              vec3 dir = normalize(vec3(uv.xy,-2.0)); dir.z += length(uv) * 0.15;
              dir = normalize(dir) * fromEuler(ang);

              vec3 p;
              heightMapTracing(ori,dir,p);
              vec3 dist = p - ori;
              vec3 n = getNormal(p, dot(dist,dist) * EPSILON_NRM);
              vec3 light = normalize(vec3(0.0,1.0,0.8)); 

              vec3 color = mix(
                  getSkyColor(dir),
                  getSeaColor(p,n,light,dir,dist),
                  pow(smoothstep(0.0,-0.05,dir.y),0.3));

              gl_FragColor = vec4(pow(color,vec3(0.75)), 1.0);
            }
          `,
        });

        geometry = new THREE.PlaneBufferGeometry(width,height)

        mesh = new THREE.Mesh(geometry,material)
        scene.add(mesh)
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
        windowHalfX = width / 2;
        windowHalfY = height / 2;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
      function render() {
        var delta = clock.getDelta();
        material.uniforms.iTime.value +=delta;
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