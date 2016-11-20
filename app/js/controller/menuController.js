angular.module('nxn-app').controller('menuController',['$scope','$mdSidenav','$window','$http',function($scope,$mdSidenav,$window,$http) {

  $scope.logout = function() {
    $window.location = '/logout';
  }

  $scope.showMenu = function() {
    $mdSidenav('left').toggle();
  }

}]);
