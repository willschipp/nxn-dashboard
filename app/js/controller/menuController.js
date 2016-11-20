angular.module('nxn-app').controller('menuController',['$scope','$mdSidenav','$window','$http','authService',function($scope,$mdSidenav,$window,$http,authService) {

  $scope.logout = function() {
    authService.clear();
    $window.location = '/logout';
  }

  $scope.showMenu = function() {
    $mdSidenav('left').toggle();
  }

}]);
