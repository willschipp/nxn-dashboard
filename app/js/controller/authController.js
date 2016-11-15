angular.module('nxn-app').controller('authController',['$scope','$window',function($scope,$window) {

  $scope.user = {};

  $scope.login = function() {
    if (!$scope.user.username) {
      console.log('no username');
      return;
    }//end if
    if (!$scope.user.password) {
      console.log('no password');
      return;
    }//end if
    //now send credentials to login
    //redirect
    $window.location = '/app';
  }

}]);
