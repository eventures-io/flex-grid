'use strict';

angular.module('feedReaderApp')
    .controller('MainController', function ($scope, $timeout, ReaderService) {

        var Item = function (id, title, category, authorName, article) {
            this.id = id,
            this.title = title,
            this.category = category,
            this.author = {
                    name: authorName
                }
            this.article = article;
        }

        $scope.items = ReaderService.getFeeds('http://www.oceanhealthindex.org/RSS/');

        //TODO add listener for scope.$last instead
        $timeout(function () {
            $scope.$emit('ITEMS_LOADED');
        }, 3000);

        $scope.$on('LOAD_ITEM', function (event, item) {
            $scope.content = item;
            $scope.$apply();
        });

    });
