import template from './browse-view';

const browseViewComponent = {
  bindings: {
    post: '<'
  },
  template,
  controller: class BrowseViewComponent {
    constructor(BrowseService, AuthService, $scope, $rootScope) {
      'ngInject';

      // Need this to watch if a user is logged in
      $scope.$watch(() => AuthService.user, user => {
        this.user = user;
        this.isAuthenticated = AuthService.isAuthenticated();

        if (user) {
          BrowseService.getWishlist(user).then(wishlist => (this.wishlisted = wishlist.find(item => item.post.id === this.post.id)))
        }
      });

      Object.assign(this, { BrowseService, previousState: $rootScope.previousState });
    }

    wishlistItem() {
      if (this.wishlisted) {
        this.BrowseService.setWishlisted(this.user.id, this.post.id, this.wishlisted.id)
        .then(wishlist => {
          this.wishlisted = null;
          this.BrowseService.addedWishlists--;
        });
      } else {
        this.BrowseService.setWishlisted(this.user.id, this.post.id)
          .then(wishlist => {
            this.wishlisted = wishlist;
            this.BrowseService.addedWishlists++;
          });
      }
    }

    toggleMessageUser() {
      this.messageUser = !this.messageUser;
    }
  }
};

export default browseViewComponent;