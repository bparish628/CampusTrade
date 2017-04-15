import template from './messages-list';

const messagesListComponent = {
  template,
  bindings: {
    user: '<'
  },
  controller: class MessagesListComponent {
    constructor(MessagesService, $stateParams) {
      'ngInject';
      this.recipientId = $stateParams.userId;
      Object.assign(this, { MessagesService });
    }

    $onInit() {
      this.loading = true;
      this.MessagesService.getMessages(this.user.id, this.recipientId).then(messages => {
        this.messages = messages;
        this.loading = false;
      });
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