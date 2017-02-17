angular.module('campusTrade', [

])
.config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
  $locationProvider.hashPrefix('');
}]);
