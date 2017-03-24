import messagesListComponent from './messages-list.component';

const messagesList = angular
  .module('components.messages-list', [])
  .component('messagesList', messagesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('messages.list', {
        url: '/:id',
        template: '<messages-list messages="$resolve.messages"></messages-list>',
        resolve: {
          messages: (MessagesService, $stateParams) => MessagesService.getMessages($stateParams.id)
        }
      });
  })
  .name;

export default messagesList;