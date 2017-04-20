import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterialize from 'angular-materialize';
import components from './components/components.module';
import common from './common/common.module';
import resources from './resources';
import mainComponent from './main.component';

// Materialize
import 'vendor/materialize/sass/materialize.scss';
import 'vendor/materialize/js/bin/materialize';

angular
  .module('campusTrade', [
    uiRouter,
    angularMaterialize,
    resources,
    components,
    common
  ])
  .component('main', mainComponent)
  .config(($locationProvider, $urlRouterProvider, $qProvider) => {
    'ngInject';

    // Turn off rejection of promise errors
    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/browse');
  })
  .run(($rootScope) => {
    'ngInject';
    $rootScope.previousState; 
    $rootScope.currentState; 
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) { 
      $rootScope.previousState = from.name; 
      $rootScope.currentState = to.name;
    }); 
  });
