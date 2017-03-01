class AuthService {

  user = null;

  constructor() {
    this.authData = null;
    // this.onSignIn = user => {
    //   this.user = user;
    //   return this.auth.$requireSignIn();
    // };
    this.storeAuthData = data => {
      this.user = data;
      return this.user;
    };
    this.clearAuthData = () => {
      this.user = null;
    };
  }

  // login(user) {
  //   return this.auth
  //     .$signInWithEmailAndPassword(user.email, user.password)
  //     .then(this.storeAuthData);
  // }

  // register(user) {
  //   return this.auth
  //     .$createUserWithEmailAndPassword(user.email, user.password)
  //     .then(this.storeAuthData);
  // }

  // logout() {
  //   return this.auth
  //     .$signOut()
  //     .then(this.clearAuthData);
  // }

  // requireAuthentication() {
  //   return this.auth
  //     .$waitForSignIn()
  //     .then(this.onSignIn);
  // }

  isAuthenticated() {
    return !!this.user;
  }

  getUser() {
    if (this.user) return this.user;
  }
}

export default AuthService;