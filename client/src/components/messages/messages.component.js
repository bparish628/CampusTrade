import template from './messages';

const messagesComponent = {
  template,
  bindings: {
    user: '<'
  },
  controller: class MessagesComponent {

    constructor(MessagesService) {
      'ngInject';

      Object.assign(this, { MessagesService });
    }

    $onInit() {
      this.MessagesService.getUsers(this.user.id).then(users => {
        this.users = users;
      });
    }
  }
};

export default messagesComponent;