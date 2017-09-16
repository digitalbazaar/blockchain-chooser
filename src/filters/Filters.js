// Load the custom app ES6 modules

import FiltersService from 'src/filters/services/FiltersService';

import FiltersList from 'src/filters/components/list/FiltersList';
import FilterDetails from 'src/filters/components/details/FilterDetails';

// Define the Angular 'users' module

export default angular
  .module("filters", ['ngMaterial'])

  .component(FiltersList.name, FiltersList.config)
  .component(FilterDetails.name, FilterDetails.config)

  .service("FiltersService", FiltersService);
