import template from './login';

const loginComponent = {
  template,
  controller: class LoginComponent {

    error = null;

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
    
    login() {
      return this.authService
        .login(this.user)
        .then(() => this.$state.go('dashboard'), 
          reason => this.error = reason.data);
    }
  },
};

export default loginComponent;