'use strict';

angular.module('myApp.publica', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/publica', {
    templateUrl: 'publica/publica.html',
    controller: 'publica2Ctrl'
  });
}])

.controller('publica', [function() {

}]);