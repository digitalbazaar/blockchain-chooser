// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Filters from 'src/filters/Filters';
import Blockchains from 'src/blockchains/Blockchains';
import Search from 'src/search/Search';

export default angular.module( 'starter-app', [ 'ngMaterial',
  Filters.name, Blockchains.name, Search.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .icon("menu", "./assets/svg/menu.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink');
  })
  .controller('AppController', AppController);
