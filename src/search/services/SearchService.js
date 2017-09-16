/**
 * Search service
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function SearchService($q) {
  var filters = {};

  // Promise-based API
  return {
    addFilter: function(filter) {
      console.log("SS ADDING FILTER", filter);
      filters[filter.name] = filter;
    },

    search: function(blockchains) {
      // Simulate async nature of real remote calls
      const results = blockchains;

      return $q.when(results);
    }
  };
}

export default ['$q', SearchService];
