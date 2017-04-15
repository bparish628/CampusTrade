import template from './profile';

const profileComponent = {
  template,
  bindings: {
    user: '<'
  },
  controller: class ProfileComponent {
    constructor(AuthService) {
      'ngInject';
      Object.assign(this, { AuthService });
    }

    update() {
        return this.AuthService
          .updateUser(this.user)
          .then(() => {
            this.success = 'Profile has successfully been updated';
            this.error = null;
          },
            reason => this.error = reason.data);
    }
  }
};

export default profileComponent;