import profileComponent from './profile.component';

const profile = angular
  .module('components.profile', [])
  .component('profile', profileComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile user="$resolve.user"></profile>',
        resolve: {
          user: (AuthService) => AuthService.current()
        }
      });
  })
  .name;

export default profile;