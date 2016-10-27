angular.module('nxn-app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url:'/home',
    templateUrl:'/partials/home.html',
    controller:'homeController'
  });

  $stateProvider.state('map',{
    url:'/home',
    templateUrl:'/partials/map.html',
    controller:'mapController'
  });

  $stateProvider.state('dashboard',{
    url:'/home',
    templateUrl:'/partials/dashboard.html',
    controller:'dashboardController'
  });

}]);
