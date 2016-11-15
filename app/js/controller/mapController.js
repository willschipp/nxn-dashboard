angular.module('nxn-app').controller('mapController',['$scope','$mdPanel','$rootScope','markerService',function($scope,$mdPanel,$rootScope,markerService) {

  $scope.markers = markerService.markers;

  angular.extend($scope,{
    gulf: {
      lat: 26.900752,
      lng: 49.585642,
      zoom:6
    },
    markers: $scope.markers,
    defaults: {
      scrollWheelZoom:false
    },
    events: {
      map:{
        enable:['click'],
        logic:'emit'
      }
    }
  });


  var position = $mdPanel.newPanelPosition()
      .absolute()
      .top('25%')
      .left('55%');

  var config = {
      attachTo: angular.element(document.body),
      controller: 'panelDialogController',
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      templateUrl: 'panel.template.html',
      hasBackdrop: true,
      position: position,
      trapFocus: true,
      zIndex: 15000,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

  $scope.$on('leafletDirectiveMarker.click',function(event,args) {
    console.log(args.model);
    $rootScope.modalModel = args.model;
    // var marker = event.targetScope.markers;
    // console.log(marker.nexgenMarker);
    //show a dialog/overlay
    $mdPanel.open(config);
  });

}]);

angular.module('nxn-app').controller('panelDialogController',['$scope','$mdPanel','$rootScope',function($scope,$mdPanel,$rootScope) {

  $scope.panel = {
    heading:$rootScope.modalModel.data.heading,
    content:$rootScope.modalModel.data.content
  }


}]);
