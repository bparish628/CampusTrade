import template from './messages-create';

const messagesCreateComponent = {
  template,
  bindings: {
    user: '<',
    recipient: '<'
  },
  controller: class MessagesCreateComponent {
    constructor($trade) {
      'ngInject';

      Object.assign(this, { $trade });
    }

    sendMessage() {
      if (this.message.message) {
        this.errorMessage = null;
        this.message = {
          ...this.message,
          user: this.user.id,
          recipient: this.recipient.id
        };

        this.$trade.create('messages', this.message).then(() => {
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