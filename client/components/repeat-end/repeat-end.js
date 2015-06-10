'use strict';

angular.module('feedReaderApp').directive('repeatEnd', function () {
    return function (scope, element, attrs) {
        if (scope.$last) {
            setTimeout(function () {
                scope.$emit('ITEMS_LOADED', element, attrs);
            }, 1);
        }
    };
});