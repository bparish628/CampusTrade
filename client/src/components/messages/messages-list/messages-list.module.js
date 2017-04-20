import messagesListComponent from './messages-list.component';

const messagesList = angular
  .module('components.messages-list', [])
  .component('messagesList', messagesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('messages.list', {
        url: '/:userId',
        template: '<messages-list user="$resolve.user"></messages-list>',
        resolve: {
          user: (AuthService) => AuthService.current()
        }
      });
  })
  .name;

export default messagesList;