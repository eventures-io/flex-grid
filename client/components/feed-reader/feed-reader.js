'use strict'

angular.module('feedReaderApp').factory('ReaderService', function ($http, $q, $log) {

    return {

        getFeeds: function () {
            var deferred = $q.defer();
            $http.get('/api/reader').success(function (data) {
                var feed = JSON.parse(data);
                deferred.resolve(feed);
            }).error(function (error) {
                $log.error(JSON.stringify(error));
                    deferred.reject('Error on loading feeds');
            });

            return deferred.promise;

        }
    };


})
;