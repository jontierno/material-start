(function(){

  angular
       .module('login', [ 'ngMessages'])
       .controller('LoginController', [
          'loginService', '$log',
          LoginController
       ]);

  function LoginController( userService,  $log ) {

  }

})();
