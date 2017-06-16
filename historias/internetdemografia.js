'use strict';

angular.module('myApp.internetdemografia', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/internetdemografia', {
    templateUrl: 'historias/internetdemografia.html',
    controller: 'internetdemografia2Ctrl'
  });
}])

.controller('internetdemografia', [function() {

}]);