/**
 * Main App Controller for the Angular Material Starter App
 * @param FiltersService
 * @param $mdSidenav
 * @constructor
 */
function AppController(FiltersService, BlockchainsService, SearchService,
  $mdSidenav, $scope) {
  var self = this;

  self.selected = null;
  self.filters = [];
  self.results = [];
  self.activeFilters = ['foo'];
  self.selectFilter = selectFilter;
  self.toggleFilters = toggleFilters;
  self.updateFilters = updateFilters;

  // Load all filters and blockchains

  FiltersService
    .loadAllFilters()
    .then( function(filters) {
      self.filters = [].concat(filters);
      self.selected = filters[0];
    });

  BlockchainsService
    .loadAllBlockchains()
    .then( function(blockchains) {
      self.blockchains = [].concat(blockchains);
    });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleFilters() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectFilter ( filter ) {
    self.selected = angular.isNumber(filter) ? $scope.filters[filter] : filter;
  }

  function updateFilters ( filter ) {
    console.log("UPDATE FILTERS CALLED", filter);
    SearchService.addFilter(filter);
    SearchService.search(self.blockchains).then(results => {
      console.log("BLOCKCHAIN SEARCH RESULTS:", results);
      self.results = results;
      self.activeFilters = SearchService.getActiveFilters();
      console.log("ACTIVE RFILTERS", self.activeFilters);
    });
  }
}

export default [
  'FiltersService', 'BlockchainsService', 'SearchService', '$mdSidenav',
  '$scope', AppController
];
