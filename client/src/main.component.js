const mainComponent = {
  template: `
    <app-sidebar ng-if="$ctrl.loaded"></app-sidebar>
    <div ng-if="$ctrl.loaded">
      <div ui-view></div>
    </div>
  `,
  controller: class MainComponent {
    constructor(AuthService) {
      'ngInject';
      AuthService.current().then(user => {
        this.loaded = true;
      }, ()=> {
        this.loaded = true;
      });
    }
  }
};

export default mainComponent;