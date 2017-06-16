'use strict';

angular.module('myApp.objdesasoste', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/objdesasoste', {
    templateUrl: 'historias/objdesasoste.html',
    controller: 'objdesasoste2Ctrl'
  });
}])

.controller('objdesasoste', [function() {

}]);