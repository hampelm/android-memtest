$(function(){
  var count = 0;
  var map = L.map('map').setView([39.74732195489861, -105.00432014465332], 13);

  baseLayer = L.tileLayer('http://a.tiles.mapbox.com/v3/matth.map-zmpggdzn/{z}/{x}/{y}.png');
  map.addLayer(baseLayer);
  var lg = new L.LayerGroup();
  map.addLayer(lg);


  var jitter = function() {
    var offset = Math.random() / 100;
    console.log(offset);
    var a = Math.random() < 0.5 ? true : false;
    var b = Math.random() < 0.5 ? true : false;

    var numbers = data.features[0].geometry.coordinates[0][0];
    for (var i = numbers.length - 1; i >= 0; i--) {
      if(a) {
        if(b){
          numbers[i][0] += offset;
          numbers[i][1] += offset;
        }else {
          numbers[i][0] += offset;
          numbers[i][1] -= offset;
        }
      }else {
        if(b){
          numbers[i][0] -= offset;
          numbers[i][1] -= offset;
        }else {
          numbers[i][0] -= offset;
          numbers[i][1] += offset;
        }
      }
    }
    console.log(numbers);
  };


  var addLayer = function() {
    jitter();
    // Event handling
    var selectedLayer;
    var selectParcel = function(event) {
      // Select the current layer
      selectedLayer = event.layer;
      console.log("selected");
    };

    // Style
    var defaultStyle = {
      'opacity': 1,
      'fillOpacity': 0.5,
      'weight': 2,
      'color': 'red',
      'fillColor': 'red'
    };

    // Create a new GeoJSON layer and style it.
    console.log(data);
    var geoJSONLayer = new L.geoJson(data, {
      style: defaultStyle
    });

    // Add event handler
    geoJSONLayer.on('click', selectParcel);

    // Add the layer to the layergroup.
    lg.addLayer(geoJSONLayer);
  };

  // Generate 100 features
  var generate = function() {
    console.log("Generating 200 features");
    var i = 0;
    while (i < 100) {
      addLayer();
      i++;
    }
    count += 100;
    $("#count").html(count);
  };

  $("#add").click(generate);
});

var data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
          "popupContent": "This is the Auraria West Campus",
          "style": {
              weight: 2,
              color: "#999",
              opacity: 1,
              fillColor: "#B0DE5C",
              fillOpacity: 0.8
          }
      },
      "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
              [
                  [
                      [-105.00432014465332, 39.74732195489861],
                      [-105.00715255737305, 39.74620006835170],
                      [-105.00921249389647, 39.74468219277038],
                      [-105.01067161560059, 39.74362625960105],
                      [-105.01195907592773, 39.74290029616054],
                      [-105.00989913940431, 39.74078835902781],
                      [-105.00758171081543, 39.74059036160317],
                      [-105.00346183776855, 39.74059036160317],
                      [-105.00097274780272, 39.74059036160317],
                      [-105.00062942504881, 39.74072235994946],
                      [-105.00020027160645, 39.74191033368865],
                      [-105.00071525573731, 39.74276830198601],
                      [-105.00097274780272, 39.74369225589818],
                      [-105.00097274780272, 39.74461619742136],
                      [-105.00123023986816, 39.74534214278395],
                      [-105.00183105468751, 39.74613407445653],
                      [-105.00432014465332, 39.74732195489861]
                  ],[
                      [-105.00361204147337, 39.74354376414072],
                      [-105.00301122665405, 39.74278480127163],
                      [-105.00221729278564, 39.74316428375108],
                      [-105.00283956527711, 39.74390674342741],
                      [-105.00361204147337, 39.74354376414072]
                  ]
              ],[
                  [
                      [-105.00942707061768, 39.73989736613708],
                      [-105.00942707061768, 39.73910536278566],
                      [-105.00685214996338, 39.73923736397631],
                      [-105.00384807586671, 39.73910536278566],
                      [-105.00174522399902, 39.73903936209552],
                      [-105.00041484832764, 39.73910536278566],
                      [-105.00041484832764, 39.73979836621592],
                      [-105.00535011291504, 39.73986436617916],
                      [-105.00942707061768, 39.73989736613708]
                  ]
              ]
          ]
      }
    }
  ]
};
