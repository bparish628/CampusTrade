import messagesComponent from './messages.component';

const messages = angular
  .module('components.messages', [])
  .component('messages', messagesComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('messages', {
        url: '/messages',
        template: '<messages></messages>',
        resolve: {
          user: (AuthService) => AuthService.current()
        }
      });
  })
  .name;

export default messages;