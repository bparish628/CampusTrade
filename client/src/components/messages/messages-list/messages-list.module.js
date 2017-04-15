import messagesListComponent from './messages-list.component';

const messagesList = angular
  .module('components.messages-list', [])
  .component('messagesList', messagesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('messages.list', {
        url: '/:userId',
        template: '<messages-list messages="$resolve.messages" user="$resolve.user"></messages-list>',
        resolve: {
          messages: (MessagesService, $stateParams) => MessagesService.getMessages($stateParams.userId),
          user: (AuthService) => AuthService.current()
        }
      });
  })
  .name;

export default messagesList;