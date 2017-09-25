class FilterDetailsController  {

  /**
   * Constructor
   *
   * @param $mdBottomSheet
   * @param $log
   */
  constructor($mdBottomSheet, $log, $scope) {
    this.$mdBottomSheet = $mdBottomSheet;
    this.$log = $log;

    this.$onInit = function() {
      //console.log("FILTER DETAILS CONTROLLER", this);
      $scope.$watch('$ctrl.selected', function(newValue, oldvalue, scope) {
        //console.log("FDC change", oldValue, newValue, scope);
        scope.$ctrl.updateFilter({filter: newValue});
      }, true);
    };

    this.toggle = function(item, selected) {
      const filter = {
        name: item,
        tagFilter: item
      };
      if(selected) {
        $scope.$ctrl.updateFilter({filter: filter});
      } else {
        filter.tagFilter = 'none';
        $scope.$ctrl.updateFilter({filter: filter});
      }
    }
  }
}
export default FilterDetailsController;
