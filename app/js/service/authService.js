angular.module('nxn-app').factory('authService',['$http','$window',function($http,$window){

  var KEY = "nxn-app";

  var o = {
    user:{}
  };

  o.store = function(token) {
    $window.localStorage[KEY] = token;
  }

  o.retrieve = function() {
    return $window.localStorage[KEY];
  }

  o.clear = function() {
    $window.localStorage.removeItem(KEY);
  }

  o.isAuthenticated = function() {
    //retrieve the token
    var token = o.retrieve();
    if (token){
      //parse it for expiry
      var parsed = o.parseJWT(token);
      return Math.round(new Date().getTime() / 1000) <= params.exp;
    } else {
      return false;
    }//end if
  }

  o.authenticate = function(username,password) {
    //build the request
    return $http({method:'POST',url:'/',data:{username:username,password:password}}).then(function(result) {
      if (result.data.token) {
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


  o.parseJWT = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }

  return o;

}])
