import template from './app-sidebar';
const appSideBarComponent = {
  template,
  controller: class appSideBarComponent {

    wishlistItems = [];

    tradeItems = [];

    constructor($scope, AuthService, BrowseService) {
      'ngInject';

      // Need this to watch if a user is logged in
      $scope.$watch(() => AuthService.user, user => {
        this.isAuthenticated = AuthService.isAuthenticated();

        if (user) {
          BrowseService.getUserPosts(user).then(posts => (this.tradeItems = posts));
          BrowseService.getWishlist(user).then(wishlist => (this.wishlistItems = wishlist));
        }
      });

      $scope.$watch(() => BrowseService.addedPosts, (newVal, oldVal) => {
        if (newVal === oldVal) return;
        BrowseService.getUserPosts(AuthService.user).then(posts => (this.tradeItems = posts));
      });

      $scope.$watch(() => BrowseService.addedWishlists, (newVal, oldVal) => {
        if (newVal === oldVal) return;
          BrowseService.getWishlist(AuthService.user).then(wishlist => (this.wishlistItems = wishlist));
      });
    }
  }
};

export default appSideBarComponent;