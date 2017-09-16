/**
 * Search service
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function SearchService($q) {
  const filters = {};

  // Promise-based API
  return {
    addFilter: function(filter) {
      if(filter.tagFilter) {
        filters[filter.name] = filter;
      }
    },

    search: function(blockchains) {
      // Simulate async nature of real remote calls
      const results = [];

      // return early if no filters
      if(Object.keys(filters).length < 1) {
        return $q.when(results);
      }

      for(const blockchain of blockchains) {
        let pass = true;
        for(const filter of Object.values(filters)) {
          if(blockchain.tags.indexOf(filter.tagFilter) === -1) {
            pass = false;
          }
        }
        if(pass) {
          results.push(blockchain);
        }
      }

      return $q.when(results);
    }
  };
}

export default ['$q', SearchService];
