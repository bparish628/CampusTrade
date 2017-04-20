import dashboardComponent from './dashboard.component';

const dashboard = angular
  .module('components.dashboard', [])
  .component('dashboard', dashboardComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard user="$resolve.user" categories="$resolve.categories"></dashboard>',
        resolve: {
          user: (AuthService) => AuthService.current(),
          categories: (BrowseService) => BrowseService.getCategories()
        }
      });
  })
  .name;

export default dashboard;