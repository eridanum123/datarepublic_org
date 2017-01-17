'use strict';

angular.module('myApp.aprende', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aprende', {
    templateUrl: 'aprende/aprende.html',
    controller: 'aprende2Ctrl'
  });
}])

.controller('aprende2Ctrl', [function() {

}]);