import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

const login = angular
  .module('components.auth.login', [
    uiRouter,
  ])
  .component('login', loginComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('auth.login', {
        url: '/login',
        template: '<login></login>',
      });
  })
  .name;

  export default login;