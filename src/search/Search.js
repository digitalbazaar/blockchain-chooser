// Load the custom app ES6 modules

import SearchService from 'src/search/services/SearchService';
import SearchResults from 'src/search/components/results/SearchResults';

// Define the Angular 'blockchains' module

export default angular
  .module("search", ['ngMaterial'])

  .component(SearchResults.name, SearchResults.config)

  .service("SearchService", SearchService);
