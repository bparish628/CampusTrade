import template from './browse-search';

const browseSearchComponent = {
  bindings: {
    categories: '<',
    onFilter: '&'
  },
  template,
  controller: class BrowseSearchComponent {
    
    searchTerm = null;
    search = null;
    criteria = [];
    
    addSearchTerm() {
      this.onFilter({$event: { criteria: this.criteria, search: this.searchTerm } });
    }

    addCriteria() {
      this.criteria.push(this.search);
      this.search = '';
      this.onFilter({$event: { criteria: this.criteria, search: this.searchTerm } });
    }

    removeCriteria(id) {
      this.criteria.splice(id, 1);
      this.onFilter({$event: { criteria: this.criteria, search: this.searchTerm } });
    }
    
  }
};

export default browseSearchComponent;