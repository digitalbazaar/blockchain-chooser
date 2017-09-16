/**
 * Filters service
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function FiltersService($q) {
  var filters = [
    {
      name: 'About this tool',
      icon: 'assets/svg/about.svg',
      templateUrl: 'src/filters/templates/about.html'
    },
    {
      name: 'Visibility',
      icon: 'assets/svg/visibility.svg',
      templateUrl: 'src/filters/templates/visibility.html'
    },
    {
      name: 'Permissions',
      icon: 'assets/svg/permissions.svg',
      templateUrl: 'src/filters/templates/permissions.html'
    },
    {
      name: 'Consensus',
      icon: 'assets/svg/consensus.svg',
      templateUrl: 'src/filters/templates/consensus.html'
    }
  ];

  // Promise-based API
  return {
    loadAllFilters: function() {
      // Simulate async nature of real remote calls
      return $q.when(filters);
    }
  };
}

export default ['$q', FiltersService];

