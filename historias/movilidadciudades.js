'use strict';

angular.module('myApp.movilidadciudades', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movilidadciudades', {
    templateUrl: 'historias/movilidadciudades.html',
    controller: 'movilidadciudades2Ctrl'
  });
}])

.controller('movilidadciudades', [function() {

}]);