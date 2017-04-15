import template from './messages-list';

const messagesListComponent = {
  template,
  bindings: {
    messages: '<',
    user: '<'
  },
  controller: class MessagesListComponent {

  }
};

export default messagesListComponent;