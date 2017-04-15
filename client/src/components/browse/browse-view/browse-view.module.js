import browseViewComponent from './browse-view.component';

const browseView = angular
  .module('components.browse.view', [])
  .component('browseView', browseViewComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('browse.view', {
        url: '/:id',
        template: '<browse-view post="$resolve.post"></browse-view>',
        resolve: {
          post(BrowseService, $stateParams){
            'ngInject';
            return BrowseService.getPost($stateParams.id);
          },
        }
      });
  })
  .name;

export default browseView;