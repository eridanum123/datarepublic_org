'use strict';

angular.module('myApp.brechasgenero', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/brechasgenero', {
    templateUrl: 'historias/brechasgenero.html',
    controller: 'brechasgenero2Ctrl'
  });
}])

.controller('brechasgenero', [function() {

}]);