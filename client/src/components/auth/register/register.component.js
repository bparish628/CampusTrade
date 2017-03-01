import moment from 'moment';
import template from './register';

const registerComponent = {
  template,
  controller: class RegisterComponent {

    maxDate = moment().subtract(15, 'years').toISOString();
    constructor(AuthService, $state) {
      'ngInject';

      this.authService = AuthService;
      this.$state = $state;
    }

    $onInit() {
      this.error = null;
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        password: ''
      };
    }

    register() {
      return this.authService
        .register(this.user)
        .then(() => {
          this.$state.go('dashboard');
        }, reason => {
          this.error = reason.message;
        });
    }
  },
};

export default registerComponent;