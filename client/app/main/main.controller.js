'use strict';

angular.module('feedReaderApp')
    .controller('MainController', function ($scope, $timeout, ReaderService) {

        ReaderService.getFeeds().then(function(data){
            $scope.feed = data.feed;
        });

        $scope.$on('LOAD_ITEM', function (event, item) {

            ReaderService.getArticle(item.link.href).then(function(article){
                item.article = article;
            });
            $scope.content = item;
            $scope.$apply();
        });

    });
