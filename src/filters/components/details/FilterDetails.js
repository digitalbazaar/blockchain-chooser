import FilterDetailsController from './FilterDetailsController'

export default {
  name: 'filterDetails',
  config: {
    bindings: {
      selected: '<',
      updateFilter: '&onChange'
    },
    templateUrl: 'src/filters/components/details/FilterDetails.html',
    controller: [ '$mdBottomSheet', '$log', '$scope', FilterDetailsController]
  }
};
