angular.module('nxn-app').controller('authController',['$scope','$window','$http','authService',function($scope,$window,$http,authService) {

  $scope.user = {};

  $scope.login = function() {
    return authService.authenticate($scope.user.username,$scope.user.password).then(function(result) {
      if (result == true) {
        $window.location = '/app';
      } else {
        
      }
    });
    // if (!$scope.user.username) {
    //   console.log('no username');
    //   return;
    // }//end if
    // if (!$scope.user.password) {
    //   console.log('no password');
    //   return;
    // }//end if
    // //now send credentials to login
    // var params = {
    //   username:$scope.user.username,
    //   password:$scope.user.password
    // };
    //
    // return $http({method:'POST',url:'/',params:params}).then(function(result){
    //   console.log(result);
    //   $window.location = '/app';
    // },function(err){
    //   console.log(err);
    //   return;
    // });
    //redirect
    // $window.location = '/app';
  }

}]);
