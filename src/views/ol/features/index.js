import Feature from "ol/Feature";
import Circle from "ol/geom/Circle";


function getFeatureOfCircle(coor, radius) {
  let circle = new Circle(coor, radius)
  return new Feature({
    geometry: circle
  })
}

export {
  getFeatureOfCircle
}