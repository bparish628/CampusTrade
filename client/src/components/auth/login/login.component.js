import template from './login';

const loginComponent = {
  template,
  controller: class LoginComponent {
    constructor(AuthService, $state) {
      'ngInject';

      this.authService = AuthService;
      this.$state = $state;
    }

    $onInit() {
      this.error = null;
      this.user = {
        email: '',
        password: '',
      };
    }
    
    login(user) {
      return this.authService
        .register(user)
        .then(() => {
          this.$state.go('dashboard');
        }, reason => {
          this.error = reason.message;
        });
    }
  },
};

export default loginComponent;