import template from './messages';

const messagesComponent = {
  template,
  controller: class MessagesComponent {
    messages = [
      {
          sentTo: "Bob",
          sentFrom: "Mike",
          sentTime: 1488306511,
          message: "Hello Bob, I'm Mike. Recently I saw your listing and was wondering if it is still available.",
          isRead: false,
      },
      { 
            sentTo: "Mike",
            sentFrom: "Bob",
            sentTime: 1488306511,
            message: "Sorry Mike, its already been taken.",
            isRead: false, 
      },
      {
          sentTo: "Bob",
          sentFrom: "Dylan",
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Dylan. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      },
      {
          sentTo: "Bob",
          sentFrom: "Paula",
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Paula. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      },
      {
          sentTo: "Bob",
          sentFrom: "Stacy",
          sentTime: "1288323623006",
          message: "Hello Bob, I'm Stacy. Recently I saw your listing and was wondering if it is still available.",
          isRead: true,
      }            
    ];

    connectedUsers = [
        {  
            user: "Mike",
        },
        {
            user: "Paula",
        },
        {
            user: "Stacy",
        },
        {
            user: "Dylan",
        },
    ]; 


    // Initialize the page with convo with Mike
   conversation = getConversation("Mike");

    // When the user clicks from list of users, conversation array is generated.  
    viewConversation(sntFrmUsr){
      this.conversation = getConversation(sntFrmUsr);
        
    }
    // Returns an array of a conversation with a clicked user
    getConversation(sentFromUser){
    for(count = 0; count < messages.length; count++){
        if(sentFromUser === messages[count].sentFrom || sentFromUser === messages[count].sentTo){
            convo.push(messages[count]); 
            }    
        }
     return convo; 
    }
    
  }
};

export default messagesComponent;