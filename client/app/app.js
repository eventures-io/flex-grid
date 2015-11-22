'use strict';


angular.module('feedReaderApp', [
        'ngSanitize',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }).filter('html',function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }).filter('moment', function () {
        return function (val) {
            var date = moment(val);
            return date.format('DD MMM YYYY');
        };
    }).filter('readingTime', function () {
    return function (val) {
        if(val) {
        var minutes = Math.floor(val.split(' ').length / 200 )
        if(minutes === 0) minutes = 1
        return minutes;
        }
    };
});

