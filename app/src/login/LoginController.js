(function(){

  angular
       .module('login', [ 'ngMessages'])
       .controller('LoginController', [
          'loginService', '$log',
          LoginController
       ]);

  function LoginController( userService,  $log ) {
    var self = this;
    self.user        = {};

    self.login = login;

    function login(){
    	$log.debug("oaaa");
    }
  }

})();
