class MessagesService {
  constructor($trade, $q, AuthService) {
    'ngInject';
    Object.assign(this, { $trade, $q });
  }

  getUsers(currentUser) {
    return this.$q.all([
      this.$trade.list('messages', { recipient: currentUser }),
      this.$trade.list('messages', { user: currentUser }),
    ]).then(response => {
      const users = [];
      response[0].forEach(message => {
        if (!users.find(user => user.id === message.user.id)) {
          users.push(message.user);
        }
      });
      response[1].forEach(message => {
        if (!users.find(user => user.id === message.recipient.id)) {
          users.push(message.recipient);
        }
      });
      return users;
    });
  }

  getMessages(userId, recipientId) {
    return this.$q.all([
      this.$trade.list('messages', { recipient: recipientId, user: userId }),
      this.$trade.list('messages', { user: recipientId, recipient: userId })
    ]).then(response => [...response[0], ...response[1]]);
  }

  sendMessage(message) {
    return this.$trade.create('messages', message);
  }
}

export default MessagesService;