import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home-page/index.vue'

// import animation1 from '../views/ol/animation/ImageCanvas.vue' 



Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    // hidden:true,
    meta: {
      title: 'Home',
      icon: 'el-icon-s-help'
    }
  },
  {
    path: '/ol',
    redirect: '/ol/index',
    component: Home,
    name: 'Openlayers',
    meta: {
      title: 'Openlayers',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'index',
        name: 'Home of Openlayers',
        meta: {
          title: 'Home of Openlayers',
          // icon: 'el-icon-s-help'
        },
        component: () => import('@/views/ol/index.vue')
      },
      {
        path: 'animation',
        name: 'Animation',
        meta: {
          title: 'Animation',
          // icon:'el-icon-s-help'
        },
        hiddenChildren: true,
        // collapse:true,
        component: () => import('@/components/content/CardsList'),
        children: [{
            path: 'generategrid',
            name: 'GenerateGrid',

            meta: {
              title: 'GenerateGrid',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/GenerateGrid.vue')
          },
          {
            path: 'migrationmap',
            name: 'MigrationMap',

            meta: {
              title: 'MigrationMap',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/MigrationMap.vue')
          },
          {
            path: 'imagestaticsticker',
            name: 'ImageStaticSticker',

            meta: {
              title: 'ImageStaticSticker',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/ImageStaticSticker.vue')
          },
          {
            path: 'imagelayer',
            name: 'ImageLayer',

            meta: {
              title: 'ImageLayer',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/ImageLayer.vue')
          },
          {
            path: 'gaodepath',
            name: 'GaoDePath',
            meta: {
              title: 'GaoDePath',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/GaoDePath.vue')
          },
          {
            path: 'switchradius',
            name: 'SwitchRadius',
            meta: {
              title: 'SwitchRadius',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/SwitchRadius.vue')
          }, {
            path: 'wfs',
            name: 'WFS',
            meta: {
              title: 'WFS',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/WFS.vue')
          },
          {
            path: 'wind',
            name: 'Wind',
            meta: {
              title: 'Wind',
              // icon:'el-icon-s-help'
            },
            component: () => import('../views/ol/animation/tcc0105.vue')
          },
        ]
      },
    ]
    // component: ()=>import('')
  },
  {
    path: '/three',
    redirect: '/three/index',
    component: Home,
    name: 'ThreeJS',
    meta: {
      title: 'ThreeJS',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'index',
        name: 'Home of ThreeJS',
        meta: {
          title: 'Home of ThreeJS',
          // icon: 'el-icon-s-help'
        },
        component: () => import('@/views/three/Demos/demo4.vue')
      },
      {
        path: 'Demos',
        name: 'Demos',
        meta: {
          title: 'Demos',
          // icon: 'el-icon-s-help'
        },
        hiddenChildren: true,
        // collapse:true,
        component: () => import('@/components/content/CardsList'),
        children: [{
            path: 'demo1',
            name: 'demo1',
            meta: {
              title: 'Demo1',
            },
            component: () => import('../views/three/Demos/demo1.vue')
          },
          {
            path: 'demo2',
            name: 'demo2',
            meta: {
              title: 'Demo2',
            },
            component: () => import('../views/three/Demos/demo2.vue')
          },
          {
            path: 'demo3',
            name: 'demo3',
            meta: {
              title: 'Demo3',
            },
            component: () => import('../views/three/Demos/demo3.vue')
          },
          {
            path: 'demo4',
            name: 'demo4',
            meta: {
              title: 'Demo4',
            },
            component: () => import('../views/three/Demos/demo4.vue')
          }, {
            path: 'demo5',
            name: 'demo5',
            meta: {
              title: 'Demo5',
            },
            component: () => import('../views/three/Demos/demo5.vue')
          },{
            path: 'demo6',
            name: 'demo6',
            meta: {
              title: 'Demo6',
            },
            component: () => import('../views/three/Demos/demo6.vue')
          },{
            path: 'demo7',
            name: 'demo7',
            meta: {
              title: 'Demo7',
            },
            component: () => import('../views/three/Demos/demo7.vue')
          },
        ]
      },
    ]
  }, {
    path: '/cesium',
    redirect: '/cesium/index',
    component: Home,
    name: 'Cesium',
    meta: {
      title: 'Cesium',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'index',
        name: 'Home of Cesium',
        meta: {
          title: 'Home of Cesium',
          // icon: 'el-icon-s-help'
        },
        component: () => import('@/views/three/Demos/demo4.vue')
      },
      {
        path: 'Demos',
        name: 'Demos',
        meta: {
          title: 'Demos',
          // icon: 'el-icon-s-help'
        },
        hiddenChildren: true,
        component: () => import('@/components/content/CardsList'),
        children: [
          {
            path: 'cesiumdemo1',
            name: 'demo1',
            meta: {
              title: 'Demo1',
            },
            component: () => import('../views/cesium/cesium-demo1.vue')
          },
          {
            path: 'cesiumdemo2',
            name: 'demo2',
            meta: {
              title: 'Demo2',
            },
            component: () => import('../views/cesium/SubMergeAnalysis.vue')
          },{
            path: 'cesiumdemo3',
            name: 'demo3',
            meta: {
              title: 'Demo3',
            },
            component: () => import('../views/cesium/Water.vue')
          },
        ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router