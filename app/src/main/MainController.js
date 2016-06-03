(function(){

  angular
       .module('main')
       .controller('MainController', [
          'mainService', 'authService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', '$state',
          MainController
       ]);

  function MainController( mainService,authService, $mdSidenav, $mdBottomSheet, $timeout, $log, $state ) {
    var self = this;

    self.menues        = [ ];
    self.toggleMenu   = toggleMenu;
    self.navigate = navigate;
    self.exit = exit;
    authService.getCurrentUser().then(function (user){
     if(user) {
        self.currentUser = user;
     }  else {
      $state.go("login");
     }
    });

    // Load menu

    mainService
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

    function exit() {
      authService.logout().then(function () {
        $state.go("login");
      })
    }

  }

})();
