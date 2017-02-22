import template from './app-sidebar';
const appSideBarComponent = {
  template,
  controller: class appSideBarComponent {

    wishlistItems = [
      { name: '3 person Couch' }
    ];

    tradeItems = [
      { name: 'My book' },
      { name: 'Physics 101' }
    ];
  }
};

export default appSideBarComponent;