/**
 * Main App Controller for the Angular Material Starter App
 * @param FiltersService
 * @param $mdSidenav
 * @constructor
 */
function AppController(FiltersService, $mdSidenav) {
  var self = this;

  self.selected = null;
  self.filters = [];
  self.selectFilter = selectFilter;
  self.toggleFilters = toggleFilters;

  // Load all registered users

  FiltersService
    .loadAllFilters()
    .then( function(filters) {
      self.filters = [].concat(filters);
      self.selected = filters[0];
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
  function selectFilter ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default [ 'FiltersService', '$mdSidenav', AppController ];
