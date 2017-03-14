import browseComponent from './browse.component';
import browseService from './browse.service';

import './browse.scss';

const browse = angular
  .module('components.browse', [])
  .component('browse', browseComponent)
  .service('BrowseService', browseService)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('browse', {
        url: '/browse',
        template: '<browse posts="$resolve.posts" bind="abx"></browse>',
        resolve: {
          posts(BrowseService){
            'ngInject';
            return BrowseService.getPosts();
          }
        }
      });
  })
  .run($api => {
    $api.add({
      resource: 'posts',
      url: '/post'
    });
  })
  .name;

export default browse;