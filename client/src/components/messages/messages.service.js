class MessagesService {
  constructor($trade) {
    'ngInject';
    Object.assign(this, { $trade });
  }

  getUsers() {
    return Promise.resolve([
      {  
        id: 1,
        name: "Mike"
      },
      {
        id: 2,
        name: "Paula"
      },
      {
        id: 3,
        name: "Stacy"
      },
      {
        id: 4,
        name: "Dylan"
      },
    ]);
  }

  getMessages(userId) {
    return Promise.resolve(this.getConversation(userId));
  }

  getConversation(sentFromUser){
    const messages = [
      {
          sentTo: {
            id: 17,
            name: "Bob"
          },
          sentFrom: {  
            id: 1,
            name: "Mike"
          },
          sentTime: 1488306511,
          message: "Hello Bob, I'm Mike. Recently I saw your listing and was wondering if it is still available.",
          isRead: false,
      },
      { 
            sentTo: {  
              id: 1,
              name: "Mike"
            },
            sentFrom: {
            id: 17,
            name: "Bob"
          },
            sentTime: 1488306511,
            message: "Sorry Mike, its already been taken.",
            isRead: false, 
      },
      {
          sentTo: {
            id: 17,
            name: "Bob"
          },
          sentFrom: {
            id: 4,
            name: "Dylan"
          },
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Dylan. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      },
      {
          sentTo: {
            id: 17,
            name: "Bob"
          },
          sentFrom: {
            id: 2,
            name: "Paula"
          },
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Paula. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      },
      {
          sentTo: {
            id: 17,
            name: "Bob"
          },
          sentFrom: {
            id: 3,
            name: "Stacy"
          },
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Stacy. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      }
    ];

    const userId = Number(sentFromUser);
    const convo = messages.reduce((conversation, message) => {
      if(userId === message.sentFrom.id || userId === message.sentTo.id) {
        conversation.push(message); 
      }
      return conversation;
    }, []);
    return convo; 
  }
}

export default MessagesService;