class BrowseService {
  constructor($trade) {
    'ngInject';
    Object.assign(this, { $trade });
  }

  getPosts() {
    return this.$trade.list('posts');
  }

  getUserPosts(user) {
    return this.$trade.list('posts', { user: user.id });
  }

  getWishlist(user) {
    return this.$trade.list('wishlist', { user: user.id });
  }

  getCategories() {
    return this.$trade.list('categories');
  }
}

export default BrowseService;