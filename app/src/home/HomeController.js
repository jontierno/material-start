(function(){

  angular
       .module('home')
       .controller('HomeController', [
          'homeService', 'authService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$state',
          HomeController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function HomeController( homeService,authService, $mdSidenav, $mdBottomSheet, $timeout, $log, $state ) {
    var self = this;

    self.menues        = [ ];
    self.toggleMenu   = toggleMenu;
    self.navigate = navigate;
    authService.getCurrentUser().then(function (user){
     if(user) {
        self.currentUser = user;
     }  else {
      $state.go("login");
     }
    });

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
      $state.go(menu.state);
    }

  }

})();
