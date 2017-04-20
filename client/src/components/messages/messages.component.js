import template from './messages';

const messagesComponent = {
  template,
  bindings: {
    user: '<'
  },
  controller: class MessagesComponent {

    constructor(MessagesService, $stateParams) {
      'ngInject';

      Object.assign(this, { MessagesService, $stateParams });
    }

    $onInit() {
      this.MessagesService.getUsers(this.user.id).then(users => {
        this.users = users;
      });
    }
  }
};

export default messagesComponent;