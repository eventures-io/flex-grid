'use strict';

angular.module('animatedGridApp')
  .controller('MainCtrl', function ($scope, $timeout) {

        var Item = function (id, title, category, authorName, article) {
              this.id = id,
                this.title = title,
                this.category = category,
                this.author = {
                    name: authorName
                }
               this.article = article;

        }

        $scope.items = [];
        $scope.items.push(new Item('1', 'title1', 'category1', 'autor1', 'article1'));
        $scope.items.push(new Item('2', 'title2', 'category2', 'autor2', 'article2'));

        //TODO add listener for scope.$last instead
        $timeout(function() {
            $scope.$emit('ITEMS_LOADED');
        }, 2000);


        $scope.$on('LOAD_ITEM', function(event, item) {
            $scope.content = item;
            $scope.$apply();
        })

    });
