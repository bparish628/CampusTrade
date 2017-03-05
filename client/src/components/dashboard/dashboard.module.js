import dashboardComponent from './dashboard.component';

const dashboard = angular
  .module('components.dashboard', [])
  .component('dashboard', dashboardComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>',
      });
  })
  .name;

export default dashboard;