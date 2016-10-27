angular.module('nxn-app').controller('mapController',['$scope',function($scope) {

  var nexgenMarker = {
    lat:25.0937996,
    lng:55.1568166,
    draggable:false,
    message:"NexGen Dubai"
  }

  angular.extend($scope,{
    gulf: {
      lat: 26.900752,
      lng: 49.585642,
      zoom:6
    },
    markers: {
      nexgenMarker: angular.copy(nexgenMarker)
    }
  })
}]);
