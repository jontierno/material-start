(function(){

  angular
       .module('login')
       .controller('LoginController', [
          'loginService', '$mdSidenav', '$log',
          LoginController
       ]);

  function LoginController( userService, $mdSidenav,  $log ) {
    $mdSidenav('left')
     .close()
     .then(function(){
       $log.debug('closed');
     });

  }

})();
