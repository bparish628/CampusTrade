import template from './browse-search';

const browseSearchComponent = {
  bindings: {
    categories: '<',
    onFilter: '&'
  },
  template,
  controller: class BrowseSearchComponent {

    search = null;
    criteria = [];
    
    addCriteria() {
      this.criteria.push(this.search);
      this.search = '';
      this.onFilter({$event: { criteria: this.criteria } });
    }

    removeCriteria(id) {
      this.criteria.splice(id, 1);
      this.onFilter({$event: { criteria: this.criteria } });
    }
    
  }
};

export default browseSearchComponent;