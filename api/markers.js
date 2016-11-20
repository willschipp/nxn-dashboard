var router = require('express').Router();

router.get('/',function(req,res) {
  var markers = {
    "nexgenMarker":{
      "lat":25.0937996,
      "lng":55.1568166,
      "draggable":false,
      "icon":{
        "iconUrl":"/img/nxn_marker.png",
        "iconAnchor":[10,31]
      },
      "data":{
        "heading":"NexGen - Dubai",
        "content":[
          "an","array","of","data"
        ]
      }
    },
    "spinneysMarker": {
      "lat":25.054228,
      "lng":55.170803,
      "draggable":false,
      "icon":{
        "iconUrl":"/img/nxn_marker.png",
        "iconAnchor":[10,31]
      },
      "data":{
        "heading":"Spinneys - Meadows Town Center",
        "content":[
          "an","array","of","data"
        ]
      }
    }
  };

  res.json(markers);
})


module.exports = router;
