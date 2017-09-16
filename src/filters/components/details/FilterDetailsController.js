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
  }
}
export default FilterDetailsController;

