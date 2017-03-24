class BrowseService {
  constructor($trade) {
    'ngInject';
    Object.assign(this, { $trade });
  }

  getPosts() {
    return this.$trade.list('posts');
  }

  getCategories() {
    return this.$trade.list('categories');
  }
}

export default BrowseService;