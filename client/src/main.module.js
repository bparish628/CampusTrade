import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components/components.module';
import common from './common/common.module';
import mainComponent from './main.component';

angular
  .module('campusTrade', [
    uiRouter,
    components,
    common
  ])
  .component('main', mainComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
  })
  .name;
