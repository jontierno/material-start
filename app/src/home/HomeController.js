(function(){

  angular
       .module('home')
       .controller('HomeController', [
          'homeService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$state',
          HomeController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function HomeController( homeService, $mdSidenav, $mdBottomSheet, $timeout, $log, $state ) {
    var self = this;

    self.menues        = [ ];
    self.toggleMenu   = toggleMenu;
    self.navigate = navigate;

    // Load menu

    homeService
          .loadMenu()
          .then( function( menues ) {
            self.menues    = [].concat(menues);
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleMenu() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function navigate ( menu ) {
      $state.go(menu.link);
    }


  }

})();
