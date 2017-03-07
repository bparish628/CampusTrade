import template from './messages';

const messagesComponent = {
  template,
  controller: class MessagesComponent {
    messages = [
      {
          sendTo: "Bob",
          sentFrom: "Mike",
          sentTime: 1488306511,
          message: "Hello Bob, I'm Mike. Recently I saw your listing and was wondering if it is still available.",
          isRead: false,
      },
      {
          sendTo: "Bob",
          sentFrom: "Dylan",
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Dylan. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      },
      {
          sendTo: "Bob",
          sentFrom: "Paula",
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Paula. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      },
      {
          sendTo: "Bob",
          sentFrom: "Stacy",
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Stacy. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      }            
    ];

    viewMessage = 0; 
    
    selectMessage(setMessage){
      this.viewMessage = setMessage;
    }
  }
};

export default messagesComponent;