import register from './register/register.module';
import login from './login/login.module';
import AuthService from './auth.service';

const auth = angular
  .module('components.auth', [
    register,
    login
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>',
      });
    $urlRouterProvider.otherwise('/auth/login');
  })
  .service('AuthService', AuthService)
  .name;

export default auth;