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
    
    filterResults({ criteria }) {
      if ( criteria.length === 0 ) {
        this.posts = this.originalPosts;
      } else {
        this.posts = this.originalPosts.filter(post => criteria.indexOf(post.category.name) !== -1);
      }
    }
  }
};

export default browseComponent;