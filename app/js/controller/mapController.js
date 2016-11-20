angular.module('nxn-app').controller('mapController',['$scope','$mdPanel','$rootScope','$mdDialog','markerService',function($scope,$mdPanel,$rootScope,$mdDialog,markerService) {

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
      .top('50%')
      .left('50%');

  var config = {
      // attachTo: angular.element(document.body),
      parent: angular.element(document.body),
      controller: 'panelDialogController',
      controllerAs: 'ctrl',
      bindToController:true,
      // disableParentScroll: this.disableParentScroll,
      templateUrl: 'panel.template.html',
      hasBackdrop: true,
      // position: position,
      // trapFocus: true,
      zIndex: 15000,
      clickOutsideToClose: true,
      escapeToClose: true
      // focusOnOpen: true
    };

    // var config = {
    //     attachTo: angular.element(document.body),
    //     controller: 'panelDialogController',
    //     controllerAs: 'ctrl',
    //     disableParentScroll: this.disableParentScroll,
    //     templateUrl: 'panel.template.html',
    //     hasBackdrop: true,
    //     position: position,
    //     trapFocus: true,
    //     zIndex: 15000,
    //     clickOutsideToClose: true,
    //     escapeToClose: true,
    //     focusOnOpen: true
    //   };


  $scope.$on('leafletDirectiveMarker.click',function(event,args) {
    console.log(args.model);
    $rootScope.modalModel = args.model;
    // var marker = event.targetScope.markers;
    // console.log(marker.nexgenMarker);
    //show a dialog/overlay
    // $mdPanel.open(config);
    $mdDialog.show(config);
  });

}]);

angular.module('nxn-app').controller('panelDialogController',['$scope','$mdPanel','$rootScope','$state','$mdDialog',function($scope,$mdPanel,$rootScope,$state,$mdDialog) {

  $scope.panel = {
    heading:$rootScope.modalModel.data.heading,
    content:$rootScope.modalModel.data.content,
    siteId:$rootScope.modalModel.data.siteId
  }

  $scope.viewDetail = function(model) {
    //extract details
    //set as state params
    //transition to the dashboard
    // $mdPanel.hide();
    console.log(model);
    $mdDialog.hide();
    $state.go('dashboard',{siteId:$rootScope.modalModel.data.siteId});

  }


}]);
