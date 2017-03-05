class AuthService {

  user = null;

  constructor($trade) {
    'ngInject';

    Object.assign(this, { $trade });
    this.storeUser = data => {
      this.user = data;
      return this.user;
    };
    this.clearUser = () => {
      this.user = null;
    };
  }

  login(user) {
    return this.$trade.update('login', user).then(this.storeUser);
  }

  logout() {
    return this.$trade.remove('logout').then(this.clearUser);
  }

  register(user) {
    return this.$trade.create('register', user).then(this.storeUser);
  }

  current() {
    return this.$trade.get('current').then(this.storeUser, this.clearUser);
  }

  isAuthenticated() {
    return !!this.user;
  }

  getUser() {
    if (this.user) return this.user;
  }
}

export default AuthService;