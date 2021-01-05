import {
  Map,
  View
} from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import Point from "ol/geom/Point";
import {
  fromLonLat
} from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import Overlay from "ol/Overlay"


function initMap(element, options) {
  const element_ = element || ''
  const options_ = options || {}
  const proj = options_.proj || 'EPSG:3857'
  const center = options_.center || fromLonLat([108.18095703125005, 28.34141675361363])
  const Tiles = options_.tiles || new TileLayer({
    source: new XYZ({
      url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnline' +
        'StreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
    }),
  });
  const map = new Map({
    controls: [],
    target: element_,
    layers: [Tiles],
    view: new View({
      center: center,
      projection: proj,
      zoom: 4,
    }),
  });
  return map
}

/**
 * 
 * @param {GeoJson} geojson 
 * @returns {Array<ol.Feature>}
 */
function getFeaturesFromGeoJSON(geojson) {
  var geojsonFormat = new GeoJSON();
  return geojsonFormat.readFeatures(geojson, {
    featureProjection: "EPSG:3857",
  });
}

/**
 * 
 * @param {Array<ol.Feature>} featrues 
 * @param {Function || ol.style.Style} style 
 */
function getVectorLayer(featrues, style) {
  if(!!style) {
    return new VectorLayer({
      source: new VectorSource({
        features: featrues || []
      }),
      style:style
    });
  }
  return new VectorLayer({
    source: new VectorSource({
      features: featrues || []
    }),
  });
}

/**
 * 
 * @param {GeoJSON url} url 
 */
export function getVlayerWithGeoJSONformat(url) {
  if(!!url) {
    return new VectorLayer({
      source: new VectorSource({
        format:new GeoJSON({
          geometryName: 'the_geom'
        }),
        url:url
      }),
    });
  }
}

function initOverlay(element) {
  return new Overlay({
    element:  element || '',
    positioning: 'center-center',
  })
}

export {
  initMap,
  getFeaturesFromGeoJSON,
  getVectorLayer,
  initOverlay
}