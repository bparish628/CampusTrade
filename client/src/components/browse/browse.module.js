import browseComponent from './browse.component';
import browseService from './browse.service';
import browseSearch from './browse-search/browse-search.module';
import browseView from './browse-view/browse-view.module';

import './browse.scss';

const browse = angular
  .module('components.browse', [
    browseSearch,
    browseView
  ])
  .component('browse', browseComponent)
  .service('BrowseService', browseService)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('browse', {
        url: '/browse',
        template: '<browse posts="$resolve.posts" categories="$resolve.categories"></browse>',
        resolve: {
          posts(BrowseService){
            'ngInject';
            return BrowseService.getPosts();
          },
          categories(BrowseService){
            'ngInject';
            return BrowseService.getCategories();
          },
        }
      });
  })
  .run($api => {
    $api.add({
      resource: 'posts',
      url: '/post'
    });
    $api.add({
      resource: 'categories',
      url: '/category'
    });
  })
  .name;

export default browse;