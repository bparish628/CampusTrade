import postComponent from './post.component';

const post = angular
  .module('components.post', [])
  .component('post', postComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('post', {
        url: '/post',
        template: '<post user="$resolve.user" categories="$resolve.categories"></post>',
        resolve: {
          user: (AuthService) => AuthService.current(),
          categories(BrowseService){
            'ngInject';
            return BrowseService.getCategories();
          }
        }
      });
  })
  .name;

export default post;