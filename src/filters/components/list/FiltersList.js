// Notice that we do not have a controller since this component does not
// have any specialized logic.
export default {
  name: 'filtersList',
  config: {
    bindings: {
      filters: '<',
      selected: '<',
      showDetails: '&onSelected'
    },
    templateUrl: 'src/filters/components/list/FiltersList.html'
  }
};
