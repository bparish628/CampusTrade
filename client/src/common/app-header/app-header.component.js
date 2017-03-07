import template from './app-header';
const appHeaderComponent = {
  template,
  controller: class AppHeaderController {
    constructor($scope, AuthService, $state) {
      'ngInject';

      Object.assign(this, { AuthService, $state });

      // Need this to watch if a user is logged in
      $scope.$watch(() => AuthService.user, () => {
        this.isAuthenticated = AuthService.isAuthenticated();
      });
    }

    logout() {
      this.AuthService.logout().then(() => this.$state.go('login'));
    }
  }
};

export default appHeaderComponent;