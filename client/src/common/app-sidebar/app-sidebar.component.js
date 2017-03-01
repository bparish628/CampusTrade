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

    constructor(AuthService) {
      'ngInject';
      this.isAuthenticated = AuthService.isAuthenticated();
    }
  }
};

export default appSideBarComponent;