angular.module('nxn-app').config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url:'/home',
    templateUrl:'/partials/home.html',
    controller:'homeController'
  });

  $stateProvider.state('map',{
    url:'/home',
    templateUrl:'/partials/map.html',
    controller:'mapController',
    resolve: {
      postPromise:['markerService',function(markerService) {
        return markerService.load();
      }]
    }
  });

  $stateProvider.state('dashboard',{
    url:'/home',
    templateUrl:'/partials/dashboard.html',
    controller:'dashboardController'
  });

}]);
