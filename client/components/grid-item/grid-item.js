'use strict'

angular.module('feedReaderApp').directive('gridItem', function () {

    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'components/grid-item/grid-item.html',
        scope: {

        },
        link: function (scope, element, attrs) {
            scope.item = scope.$eval(attrs.item);

            element.bind('click', function () {
                scope.$emit('LOAD_ITEM', scope.item);
            });
        }
       }
});