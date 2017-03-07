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

    constructor($scope, AuthService) {
      'ngInject';

      // Need this to watch if a user is logged in
      $scope.$watch(() => AuthService.user, () => {
        this.isAuthenticated = AuthService.isAuthenticated();
      });
    }
  }
};

export default appSideBarComponent;