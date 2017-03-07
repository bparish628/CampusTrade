import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

const register = angular
  .module('components.auth.register', [
    uiRouter,
  ])
  .component('register', registerComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('auth.register', {
        url: '/register',
        template: '<register></register>',
      });
  })
  .name;

  export default register;