class AuthService {

  user = null;

  constructor($trade, $q) {
    'ngInject';

    Object.assign(this, { $trade, $q });
    this.storeUser = data => {
      this.user = data;
      return this.user;
    };
    this.clearUser = () => {
      this.user = null;
    };
  }

  login(user) {
    return this.$trade.create('login', user).then(this.storeUser);
  }

  logout() {
    return this.$trade.remove('logout').then(this.clearUser);
  }

  register(user) {
    return this.$trade.create('register', user).then(this.storeUser);
  }

  current() {
    return this.$trade.get('current')
    .then(this.storeUser)
    .catch(() => this.$q.reject());
  }

  updateUser(user) {
    return this.$trade.update('current', user).then(this.storeUser);
  }

  isAuthenticated() {
    return !!this.user;
  }

  getUser() {
    if (this.user) return this.user;
  }
}

export default AuthService;