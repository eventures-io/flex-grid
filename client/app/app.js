'use strict';


angular.module('feedReaderApp', [
  'ngSanitize',
  'ui.router'
    ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }).filter('html', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});