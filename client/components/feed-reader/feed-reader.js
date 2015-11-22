'use strict'

angular.module('feedReaderApp').factory('ReaderService', function ($http, $q, $log) {

    return {

        getFeeds: function () {

            var deferred = $q.defer();

            $http.get('/api/reader')
                .success(function (data) {
                    var feeds = JSON.parse(data);
                    deferred.resolve(feeds);
                }).
                error(function (error, status /*, headers, config*/) {
                    $log.error('status: ' + status + '  ' + JSON.stringify(error));
                });

            return deferred.promise;

        },
        getArticle: function (url) {

            var deferred = $q.defer();


            $http.get('/api/reader/' + encodeURIComponent(url))
                .success(function (data) {
                    deferred.resolve(data)
                }).
                error(function (error, status) {
                    $log.error('status: ' + status + '  ' + JSON.stringify(error));
                });

            return deferred.promise;
        }
    };

});