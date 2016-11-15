angular.module('nxn-app').factory('markerService',['$http',function($http){

  var o = {
    markers:{}
  };

  o.load = function() {

    return $http({method:'GET',url:'/data/markers.json'}).then(function(result){
      console.log(result);
      o.markers = result.data;
      return o.markers;
    },function(err){
      console.log(err);
      return;
    });

  }

  return o;

}])
