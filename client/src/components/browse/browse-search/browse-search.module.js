import browseSearchComponent from './browse-search.component';
import browseSearchFilter from './browse-search.filter';

const browseSearch = angular
  .module('components.browse.search', [])
  .component('browseSearch', browseSearchComponent)
  .filter('exclude', browseSearchFilter)
  .name;

export default browseSearch;