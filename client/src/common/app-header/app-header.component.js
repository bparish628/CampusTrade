import template from './app-header';
const appHeaderComponent = {
  template,
  controller: class AppHeaderController {
    constructor(AuthService) {
      'ngInject';
      this.isAuthenticated = AuthService.isAuthenticated();
    }
  }
};

export default appHeaderComponent;