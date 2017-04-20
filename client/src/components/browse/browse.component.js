import template from './browse';

const NUMBER_OF_ITEMS = 10;

const browseComponent = {
  bindings: {
    posts: '<',
    categories: '<'
  },
  template,
  controller: class BrowseComponent {

    page = {};

    $onInit() {
      this.posts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
      this.originalPosts = angular.copy(this.posts);
      this.updatePagination();
    }
    
    filterResults({ criteria, search }) {
      if ( criteria.length === 0 ) {
        this.posts = this.originalPosts;
      } else {
        this.posts = this.originalPosts.filter(post => criteria.indexOf(post.category.name) !== -1);
      }
      if (search) {
        this.posts = this.posts.filter(post => post.name.toLowerCase().includes(search.toLowerCase()));
      }
      this.updatePagination();
    }

    updatePagination() {
      const numPages = Math.ceil(this.posts.length / NUMBER_OF_ITEMS);
      this.page.num = [...Array(numPages).keys()];
      this.changeView();
    }

    changeView(num = 0) {
      if (num === -1 || num === this.page.num.length) return

      const end = this.posts.length < num * NUMBER_OF_ITEMS + NUMBER_OF_ITEMS ? this.posts.length : num * NUMBER_OF_ITEMS + NUMBER_OF_ITEMS;
      const currentlyViewed = this.posts.slice(num * NUMBER_OF_ITEMS, end);
      this.page.displayedPages = currentlyViewed;
      this.page.currentPage = num;
      this.page.number
    }
  }
};

export default browseComponent;