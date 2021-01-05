import {
  Fill,
  Stroke,
  Circle,
  Style,
  Text,
  Icon
} from "ol/style";

var textStyle = new Style({
  text: new Text({
    font: 'bold 26px Mirosoft Yahei',
    placement: 'line',
    text: "江 南 大 街",
    fill: new Fill({
      color: '#000'
    }),
    offsetY: 3,
    stroke: new Stroke({
      color: '#FFF',
      width: 2
    })
  })
})
var buttomPathStyle = new Style({
  stroke: new Stroke({
    color: [4, 110, 74],
    width: 28
  }),
})
var upperPathStyle = new Style({

  stroke: new Stroke({
    color: [0, 186, 107],
    width: 20
  }),
})
var outStyle = new Style({
  image: new Circle({
    radius: 18,
    fill: new Fill({
      color: [4, 110, 74]
    })
  })
})
var midStyle = new Style({
  image: new Circle({
    radius: 15,
    fill: new Fill({
      color: [0, 186, 107]
    })
  })
})
var innerDot = new Style({
  image: new Circle({
    radius: 6,
    fill: new Fill({
      color: [255, 255, 255]
    })
  })
})
var foutrStyle = new Style({
  image: new Circle({
    radius: 18,
    fill: new Fill({
      color: "#000"
    })
  })
})
var fmidStyle = new Style({
  image: new Circle({
    radius: 15,
    fill: new Fill({
      color: '#FFF'
    })
  })
})
var finnerStyle = new Style({
  image: new Circle({
    radius: 6,
    fill: new Fill({
      color: '#000'
    })
  })
})
var polygonStyle = new Style({
  fill: new Fill({
    color: 'rgba(255, 0, 0, 0.2)'
  }),
  stroke: new Stroke({
    color: '#ffcc33',
    width: 2
  })
})




export {
  textStyle,
  buttomPathStyle,
  upperPathStyle,
  outStyle,
  midStyle,
  innerDot,
  foutrStyle,
  fmidStyle,
  finnerStyle,
  polygonStyle,
  // iconStyle
}