import template from './post';

const postComponent = {
  template,
  bindings: {
    categories: '<',
    user: '<'
  },
  controller: class PostComponent {

    constructor(BrowseService, $state) {
      'ngInject';

      Object.assign(this, { BrowseService, $state });
    }

    $onInit() {
      this.post = {
        user: this.user.id
      };
    }

    createPost(){
      this.BrowseService.createPost(this.post).then(() => {
        this.errorMessage = null;
        this.successMessage = 'Your item has been successfully posted.';
        this.post = { user: this.user.id };
        this.BrowseService.addedPosts++;
      }, () => {
        this.successMessage = null;
        this.errorMessage = 'There was an item while posting your item.';
      });
    }
  }
};

export default postComponent;