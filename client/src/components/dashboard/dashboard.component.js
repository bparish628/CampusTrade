import template from './dashboard';

const NUMBER_OF_CARDS = 2;

const dashboardComponent = {
  template,
  bindings: {
    user: '<',
    categories: '<'
  },
  controller: class DashboardComponent {

    tradeItems = [];
    wishlistItems = [];

    tradePages = {
      num: [],
      currentPage: 0,
      displayedPages: []
    };

    wishlistPages = {
      num: [],
      currentPage: 0,
      displayedPages: []
    };

    constructor(BrowseService, $q) {
      'ngInject';
      Object.assign(this, { BrowseService, $q });
    }
    
    $onInit() {
      this.fetch();
    }

    fetch() {
      const getPosts = this.BrowseService.getUserPosts(this.user).then(posts => {this.tradeItems = posts});
      const getWishlist = this.BrowseService.getWishlist(this.user).then(wishlist => {
        this.wishlistItems = wishlist.map(item => {
          item.post.category = this.categories.find(category => category.id === item.post.id);
          return item;
        });
      });
      this.$q.all([getPosts, getWishlist]).then(() => {
        this.tradeItems.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        this.wishlistItems.sort((a,b) => new Date(b.post.createdAt) - new Date(a.post.createdAt));
        const tradeNumPages = Math.ceil(this.tradeItems.length / NUMBER_OF_CARDS);
        const wishlistNumPages = Math.ceil(this.wishlistItems.length / NUMBER_OF_CARDS);
        this.tradePages.num = [...Array(tradeNumPages).keys()];
        this.wishlistPages.num = [...Array(wishlistNumPages).keys()];
        this.changeTradeView();
        this.changeWishlistView();
      });
    }

    changeTradeView(num = 0){
      if (num === -1 || num === this.tradePages.num.length) return;

      const end = this.tradeItems.length < num * NUMBER_OF_CARDS + NUMBER_OF_CARDS ? this.tradeItems.length : num * NUMBER_OF_CARDS + NUMBER_OF_CARDS;
      const currentlyViewed = this.tradeItems.slice(num * NUMBER_OF_CARDS, end);
      this.tradePages.displayedPages = currentlyViewed;
      this.tradePages.currentPage = num;
    }

    changeWishlistView(num = 0){
      if (num === -1 || num === this.wishlistPages.num.length) return;
      const end = this.wishlistItems.length < num * NUMBER_OF_CARDS + NUMBER_OF_CARDS ? this.wishlistItems.length : num * NUMBER_OF_CARDS + NUMBER_OF_CARDS;
      const currentlyViewed = this.wishlistItems.slice(num * NUMBER_OF_CARDS, end);
      this.wishlistPages.displayedPages = currentlyViewed;
      this.wishlistPages.currentPage = num;
    }
  },
};

export default dashboardComponent;