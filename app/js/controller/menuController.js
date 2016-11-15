angular.module('nxn-app').controller('menuController',['$scope','$mdSidenav','$window',function($scope,$mdSidenav,$window) {

  $scope.logout = function() {
    //TODO logout procedure
    $window.location = '/';
  }

  $scope.showMenu = function() {
    $mdSidenav('left').toggle();
  }

}]);
