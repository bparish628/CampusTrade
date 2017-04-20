import template from './messages-create';

const messagesCreateComponent = {
  template,
  bindings: {
    user: '<',
    recipient: '<'
  },
  controller: class MessagesCreateComponent {
    constructor(MessagesService) {
      'ngInject';

      Object.assign(this, { MessagesService });
    }

    sendMessage() {
      if (this.message.message) {
        this.errorMessage = null;
        this.message = {
          ...this.message,
          user: this.user.id,
          recipient: this.recipient.id
        };

        this.MessagesService.sendMessage(this.message).then(() => {
          this.message.message = null;
          this.errorMessage = null;
          this.successMessage = 'Message was sent!';
        }, () => {
          this.successMessage = null;
          this.errorMessage = 'Message was not sent!';
        });
      } else {
          this.successMessage = null;
          this.errorMessage = 'Please enter a message.';
      }
    }
  }
};

export default messagesCreateComponent;