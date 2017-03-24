import messagesComponent from './messages.component';
import messagesList from './messages-list/messages-list.module';
import messagesService from './messages.service';


const messages = angular
  .module('components.messages', [
    messagesList
  ])
  .component('messages', messagesComponent)
  .service('MessagesService', messagesService)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('messages', {
        url: '/messages',
        template: '<messages users="$resolve.users"></messages>',
        resolve: {
          users: MessagesService => MessagesService.getUsers()
        }
      });
  })
  .name;

export default messages;