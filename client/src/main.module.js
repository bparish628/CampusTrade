import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterialize from 'angular-materialize';
import components from './components/components.module';
import common from './common/common.module';
import mainComponent from './main.component';

// Materialize
import 'vendor/materialize/sass/materialize.scss';
import 'vendor/materialize/js/bin/materialize';

angular
  .module('campusTrade', [
    uiRouter,
    angularMaterialize,
    components,
    common
  ])
  .component('main', mainComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
  })
  .name;
