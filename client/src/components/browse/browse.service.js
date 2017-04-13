class BrowseService {

  addedPosts = 0;
  addedWishlists = 0;
  
  constructor($trade) {
    'ngInject';
    Object.assign(this, { $trade });
  }

  getPost(id) {
    return this.$trade.get('posts', { id });
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

  setWishlisted(userId, postId, deleteId) {
    if (deleteId) {
      return this.$trade.remove('wishlist', { id: deleteId })
    }
    return this.$trade.create('wishlist', { user: userId, post: postId })
  }

  getCategories() {
    return this.$trade.list('categories');
  }

  createPost(post) {
    return this.$trade.create('posts', post);
  }
}

export default BrowseService;