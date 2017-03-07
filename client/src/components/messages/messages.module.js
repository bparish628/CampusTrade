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
      });
  })
  .name;

export default messages;