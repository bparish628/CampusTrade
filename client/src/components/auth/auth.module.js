import register from './register/register.module';
import login from './login/login.module';
import AuthService from './auth.service';

import './auth.scss';

const auth = angular
  .module('components.auth', [
    register,
    login
  ])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>',
      });

  })
  .service('AuthService', AuthService)
  .run($api => {
    $api.add({
      resource: 'register',
      url: '/register'
    });
    $api.add({
      resource: 'login',
      url: '/login'
    });
    $api.add({
      resource: 'logout',
      url: '/logout'
    });
    $api.add({
      resource: 'current',
      url: '/current'
    });
  })
  .name;

export default auth;