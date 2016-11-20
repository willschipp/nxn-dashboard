angular.module('nxn-app', ['ngAnimate','ngMaterial','ui.router','leaflet-directive','chart.js']).config(function($mdThemingProvider,$httpProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey');
    // .accentPalette('orange');

});
