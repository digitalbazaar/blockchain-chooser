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
      name: 'Visibility',
      icon: 'assets/svg/visibility.svg',
      content: 'A Blockchain\'s visibility determines who can read its contents. Public blockchains are visible by anyone with access to the Internet. Private blockchains are visible by a smaller set of entities.'
    },
    {
      name: 'Permissions',
      icon: 'assets/svg/permissions.svg',
      content: 'Blockchain permissions determine who is allowed to write to the ledger. Blockchain permissions fall into two general categories. Permissioned and Permissionless. Permissioned blockchains only allow specific entities to write to them. Permissionsless blockchains allow any entity to write to them as long as they prove that they\'ve expended a non-trivial amount of energy to perform the write.'
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

