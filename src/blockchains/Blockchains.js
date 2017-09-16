// Load the custom app ES6 modules

import BlockchainsService from 'src/blockchains/services/BlockchainsService';

// Define the Angular 'blockchains' module

export default angular
  .module("blockchains", ['ngMaterial'])
  .service("BlockchainsService", BlockchainsService);
