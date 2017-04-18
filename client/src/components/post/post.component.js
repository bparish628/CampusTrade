import template from './post';

const postComponent = {
  template,
  bindings: {
    categories: '<',
    user: '<',
    post: '<'
  },
  controller: class PostComponent {

    constructor(BrowseService, $state, $scope, $rootScope) {
      'ngInject';
      Object.assign(this, { BrowseService, $state, $scope, previousState: $rootScope.previousState });
    }

    $onInit() {
      this.isNew = !this.post;
      if (this.isNew){
        this.post = {
          user: this.user.id
        };
      } else {
        this.post.user = this.user.id;
        this.categoryId = this.post.category.id;
      }

      // Create a watcher to set the post value when it's done initializing
      const watcher = this.$scope.$watch(() => this.post, () => {
        this.post.category = String(this.categoryId);
        // Destroy watcher
        watcher();
      }, true);
    }

    createPost(){
      let promise;
      if (this.isNew) {
        promise =  this.BrowseService.createPost(this.post);
      } else {
        promise = this.BrowseService.updatePost(this.post);
      }

      promise.then(() => {
        this.errorMessage = null;
        this.successMessage = 'Your item has been successfully posted.';
        if (this.isNew) {
          this.post = { user: this.user.id };
        }
        this.BrowseService.addedPosts++;
      }, () => {
        this.successMessage = null;
        this.errorMessage = 'There was an error while posting your item.';
      });
    }

    deletePost(){
      this.BrowseService.deletePost(this.post).then(() => {
        this.errorMessage = null;
        this.isNew = true;
        this.successMessage = 'Your item has been successfully deleted.';
        this.post = { user: this.user.id };
        this.BrowseService.addedPosts++;
      }, () => {
        this.successMessage = null;
        this.errorMessage = 'There was an error while deleting your item.';
      });
    }
  }
};

export default postComponent;