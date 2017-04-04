const mainComponent = {
  template: `
    <app-sidebar ng-if="$ctrl.authenticated"></app-sidebar>
    <div ng-if="$ctrl.authenticated">
      <div ui-view></div>
    </div>
  `,
  controller: class MainComponent {
    constructor(AuthService) {
      'ngInject';
      AuthService.current().then(user => {
        this.authenticated = true;
      });
    }
  }
};

export default mainComponent;