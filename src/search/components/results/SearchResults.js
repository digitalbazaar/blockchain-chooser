import SearchResultsController from './SearchResultsController'

export default {
  name: 'searchResults',
  config: {
    bindings: {
      results: '<'
    },
    templateUrl: 'src/search/components/results/SearchResults.html',
    controller: ['$scope', SearchResultsController]
  }
};
