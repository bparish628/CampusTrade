import postComponent from './post.component';

const post = angular
  .module('components.post', [])
  .component('post', postComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('post', {
        url: '/post',
        template: '<post user="$resolve.user" categories="$resolve.categories" post="$resolve.post"></post>',
        resolve: {
          user: (AuthService) => AuthService.current(),
          categories(BrowseService) {
            'ngInject';
            return BrowseService.getCategories();
          },
          post(BrowseService, $q, $stateParams) {
            'ngInject';
            return $stateParams.id ? BrowseService.getPost($stateParams.id) : $q.resolve();
          }
        }
      })
      .state('post.edit', {
        url: '/:id',
        template: '<post user="$resolve.user" categories="$resolve.categories" post="$resolve.post"></post>',
        resolve: {
          post(BrowseService, $q, $stateParams) {
            'ngInject';
            return $stateParams.id ? BrowseService.getPost($stateParams.id) : $q.resolve();
          }
        }
      });;
  })
  .name;

export default post;