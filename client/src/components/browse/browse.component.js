import template from './browse';

const browseComponent = {
  bindings: {
    posts: '<',
    categories: '<'
  },
  template,
  controller: class BrowseComponent {

    $onInit() {
      this.originalPosts = angular.copy(this.posts);
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
    }
  }
};

export default browseComponent;