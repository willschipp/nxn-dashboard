angular.module('nxn-app').controller('menuController',['$scope','$mdSidenav',function($scope,$mdSidenav) {

  $scope.showMenu = function() {
    $mdSidenav('left').toggle();
  }

}]);
