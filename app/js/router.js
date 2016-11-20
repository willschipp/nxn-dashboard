angular.module('nxn-app').config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url:'/home',
    templateUrl:'/partials/home.html',
    controller:'homeController'
  });

  $stateProvider.state('about',{
    url:'/about',
    templateUrl:'/partials/home.html',
    controller:'homeController'
  });

  $stateProvider.state('map',{
    url:'/map',
    templateUrl:'/partials/map.html',
    controller:'mapController',
    resolve: {
      postPromise:['markerService',function(markerService) {
        return markerService.load();
      }]
    }
  });

  $stateProvider.state('dashboard',{
    url:'/dashboard',
    templateUrl:'/partials/dashboard.html',
    controller:'dashboardController',
    params: {
      siteId:-1
    }
  });

}]).run(['$state','$rootScope','authService',function($state,$rootScope,authService){
  $rootScope.$on('$stateChangeStart',function(e, toState, toParams, fromState, fromParams){
    if (toState.name == 'home') {
      //check the user role
      if (authService.hasRole('multi')) {
        e.preventDefault();
        return $state.go('map');
      } else if (authService.hasRole('single')) {
        e.preventDefault();
        return $state.go('dashboard');
      }//end if
    }//end if
  });
}]);
