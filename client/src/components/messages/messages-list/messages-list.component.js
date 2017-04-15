import template from './messages-list';

const messagesListComponent = {
  template,
  bindings: {
    messages: '<',
    user: '<'
  },
  controller: class MessagesListComponent {
    constructor(MessagesService) {
      'ngInject';

      Object.assign(this, { MessagesService });
    }

    sendMessage() {
      if (this.message.message) {
        this.message = {
          ...this.message,
          user: this.user.id,
          recipient: this.messages[0].recipient.id === this.user.id ? this.messages[0].user.id : this.messages[0].recipient.id
        };

        this.MessagesService.sendMessage(this.message).then(message => {
          message.user = { id: message.user };
          this.messages.push(message);
          this.message = null;
        });
      }
    }
  }
};

export default messagesListComponent;