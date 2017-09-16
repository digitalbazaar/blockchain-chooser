import FilterDetailsController from './FilterDetailsController'

export default {
  name: 'filterDetails',
  config: {
    bindings: {selected: '<'},
    templateUrl: 'src/filters/components/details/FilterDetails.html',
    controller: [ '$mdBottomSheet', '$log', FilterDetailsController]
  }
};
