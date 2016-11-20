angular.module('nxn-app').factory('authService',['$http','$window',function($http,$window){

  var KEY = "nxn-app";

  var o = {
    user:{}
  };

  o.store = function(token) {
    $window.localStorage[KEY] = token;
  }

  o.clear = function() {
    $window.localStorage.removeItem(KEY);
  }

  o.authenticate = function(username,password) {
    //build the request
    return $http({method:'POST',url:'/',params:{username:username,password:password}}).then(function(result) {
      if (result.data.success == true) {
        o.store(result.data.token);
        return true;
      } else {
        return false;
      }//end if
    },function(err){
      console.log(err);
      return;
    });
  }

  return o;

}])
