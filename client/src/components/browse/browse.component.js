import template from './browse';

const browseComponent = {
  template,
  controller: class BrowseComponent {
    tab = 1; 

    l = [
        {
            name: "The Life of Jennifer Lee",
            edition: "4",
            author: "Jennifer Lee",
            type: "textbook",
            preferences: "I prefer to do the exchange on campus Monday through Friday, 1-5 PM.",
            asking: 25,
            images: [ 
                {
                    thumb: 'book.jpg',
                },
            
            ],
            //seller: allUsers[0]; 
        },
        {
            name: "The Life of Tom Lee",
            edition: "2",
            author: "Tom Lee",
            type: "textbook",
            preferences: "I prefer to do the exchange on campus Monday through Thursday, 1-3 PM.",
            asking: 25,
            images: [ 
                {
                    thumb: 'book.jpg',
                },
            
            ],
            //seller= allUsers[1];
        },
        {
            name: "The Life of Brook Lee",
            edition: "1",
            author: "Brook Lee",
            type: "textbook",
            preferences: "I prefer to do the exchange on campus Monday through Friday, 2-5 PM.",
            asking: 20,
            images: [ 
                {
                    thumb: 'book.jpg',
                },
            
            ],
            //seller: allUsers[0]; 
        },  
    ];

    allUsers = [
        {
            user: "Bob",
        },
        {
            user: "Paula",
        },
        {
            user: "Mike",
        },
        {
            user: "Dylan",
        },
        {
            user: "Stacy"
        },
    ];

    selectTab(setTab){
        this.tab=setTab;
    }

    isSelected(checkTab){
      return this.tab === checkTab;   
    }
  }
};

export default browseComponent;