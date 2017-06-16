'use strict';

angular.module('myApp.derechosexualidad', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/derechosexualidad', {
    templateUrl: 'historias/derechosexualidad.html',
    controller: 'derechosexualidad2Ctrl'
  });
}])

.controller('derechosexualidad', [function() {

}]);