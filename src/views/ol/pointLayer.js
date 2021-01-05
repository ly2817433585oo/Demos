(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('ol'), require('ol/proj')) :
    typeof define === 'function' && define.amd ? define(['ol', 'ol/proj'], factory) :
    (global = global || self, global.VectorLayer = factory(global.ol, global.ol.proj))
}(this, function (ol, proj) {
  'use strict';

  /**
   * @param {*} [options={map,zIdex}]
   */
  var VectorLayer = function (options) {
    this.options = options || {}
    this._map = options.map
    this.zIndex = options.zIndex || 0
    console.log(this._map);
    this.initialize()
    // this.show()
  }

  VectorLayer.prototype.initialize = function () {
    var map = this._map
    if (typeof this._layer === 'undefined') {
      var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: []
        })
      })
      this._layer = layer
      map.addLayer(layer)
    } else {
      alert('layer had been initalized')
    }
  }

  /**
   * 
   * @param {Array} coor 
   * @param {ol.style.Style} style 
   */
  VectorLayer.prototype.addPoint = function (coor, style) {
    var geom = new ol.geom.Point(coor)
    var feature = new ol.Feature({
      geometry: geom
    })
    feature.setStyle(style)
    var layer = this._layer
    layer.getSource().addFeature(feature)
    return feature
  }

  VectorLayer.prototype.addFeature = function() {

  }
  /**
   * 
   * @param {*} e 
   * @param {ol.Overlay} popup 
   * @param {*} positioning 
   */

   // 点击弹窗
  VectorLayer.prototype.popUp = function (e, element, positioning, callback) {
    if ("undefined" === typeof this.overlay) {
      var overlay = new ol.Overlay({
        element: element,
        positioning: positioning
      })
      this.overlay = overlay
      this._map.addOverlay(this.overlay)
    }
    var coor = e.coordinate
    var features = this._map.getFeaturesAtPixel(e.pixel)
    var el = this.overlay.getElement()
    el.style.display = 'none'
    if (0 !== features.length) {
      for (var i = 0; i < features.length; i++) {
        if (features[i].getGeometry().getType() === 'Point') {
          el.style.display = 'block'
          this.overlay.setPosition(coor)
          callback(features[i].values_)
        }
      }
    }
  }

  // 闪烁点动画
  VectorLayer.prototype.flash = function (e) {
    var flag = false
    var duration = 1000;
    var features = this._map.getFeaturesAtPixel(e.pixel)
    for (var i = 0; i < features.length; i++) {
      if ('Point' === features[i].getGeometry().getType()) {
        var f = features[i]
        flag = true
      }
    }
    if (flag === true) {
      var start = new Date().getTime()
      if (undefined !== this._layer.listeners_['postrender']) {
        this._layer.un('postrender', this._layer.listeners_['postrender'][0])
      }
      this._layer.on('postrender', animation)
      this._layer.changed()

    } else {
      if ('undefined' !== typeof this._layer.listeners_['postrender']) {
        this._layer.un('postrender', this._layer.listeners_['postrender'][0])
        this._layer.changed()
      }
    }

    function animation(evt) {
      var vectorContext = ol.render.getVectorContext(evt)
      var frameState = evt.frameState
      var flashGeom = f.getGeometry().clone()

      function getRadiusOpacity(r) {

        //渲染帧状已占时间
        var elapsed = frameState.time - start;
        // console.log(elapsed);
        //已占比率
        var elapsedRatio = elapsed / duration;
        // radius半径为5结束为30
        let radius = ol.easing.linear(elapsedRatio) * (30 - r) + r;
        //不透渐变消失
        let opacity = ol.easing.linear(1 - elapsedRatio);

        return {
          radius: radius,
          opacity: opacity,
          elapsed: elapsed
        }
      }
      //Circle样式
      function getStyle(opt) {
        return new ol.style.Style({
          image: new ol.style.Circle({
            radius: opt.radius,
            stroke: new ol.style.Stroke({
              color: 'rgba(255, 0, 0, ' + opt.opacity + ')',
              width: 1 + opt.opacity
            }),
            fill: new ol.style.Fill({
              color: 'rgba(255, 0, 0, ' + opt.opacity + ')',
            })
          })
        })
      }
      //给几何图形添加样式
      vectorContext.setStyle(getStyle(getRadiusOpacity(15)));
      //将几何体渲染到画布中
      vectorContext.drawGeometry(flashGeom);
      var opt = getRadiusOpacity(0);
      vectorContext.setStyle(getStyle(opt));
      vectorContext.drawGeometry(flashGeom);
      if (opt.elapsed > duration) {
        start = frameState.time;
      }
      //请求地图渲染（在下一个动画帧处）
      map.render();
    }
  }

  VectorLayer.prototype.getFeatureByGeoJson = function (json, style) {
    var format = new ol.format.GeoJSON()
    var feature = format.readFeatures(json)
    // console.log(feature.length);
    for (var i = 0; i < feature.length; i++) {
      feature[i].setStyle(style)
    }
    if (feature.length > 500) {
      var layer = new ol.layer.Vector({
        source: new ol.source.Vector({})
      })
      map.addLayer(layer)
      layer.getSource().addFeatures(feature)
    } else {
      var geom = feature[0].getGeometry().getType()
      switch (geom) {
        case 'LineString': {
          if (typeof this._LineStringlayer === 'undefined') {
            var layer = new ol.layer.Vector({
              source: new ol.source.Vector({})
            })
            this._LineStringlayer = layer
            map.addLayer(layer)
          }
          this._LineStringlayer.getSource().addFeatures(feature)
        }
        break;
      case 'Polygon': {
        if (typeof this._Polygonlayer === 'undefined') {
          var layer = new ol.layer.Vector({
            source: new ol.source.Vector({})
          })
          this._Polygonlayer = layer
          map.addLayer(layer)
        }
        this._Polygonlayer.getSource().addFeatures(feature)
      }
      break;
      default:
        break;
      }
    }
    return feature;
  }
  return VectorLayer;
}));