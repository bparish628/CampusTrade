import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';

angular
  .module('campusTrade', [
    uiRouter
  ])
  .component('main', mainComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
  })
  .name;
