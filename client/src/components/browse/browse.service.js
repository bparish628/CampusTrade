class BrowseService {

  addedPosts = 0;
  
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

  createPost(post) {
    return this.$trade.create('posts', post);
  }
}

export default BrowseService;