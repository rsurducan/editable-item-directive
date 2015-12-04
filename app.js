var app = angular.module('myApp', []);

app.directive('makeEditable', function() {
    return {
        restrict: 'A',
        templateUrl: 'editable.html',
        transclude: true
    }
})