import browseComponent from './browse.component';

const browse = angular
  .module('components.browse', [])
  .component('browse', browseComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('browse', {
        url: '/browse',
        template: '<browse></browse>',
      });
  })
  .name;

export default browse;