import messagesComponent from './messages.component';
import messagesList from './messages-list/messages-list.module';
import messagesCreate from './messages-create/messages-create.module';
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
        template: '<messages user="$resolve.user"></messages>',
        resolve: {
          user: (AuthService) => AuthService.current()          
        }
      });
  })
  .run($api => {
    $api.add({
      resource: 'messages',
      url: '/user_message'
    });
  })
  .name;

export default messages;