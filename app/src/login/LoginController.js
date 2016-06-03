(function(){

  angular
       .module('login', [ 'ngMessages', 'auth'])
       .controller('LoginController', [
          'authService', '$log',
          LoginController
       ]);

  function LoginController( authService,  $log ) {
    var self = this;
    self.user        = {};

    self.login = login;

    function login(){
    	authService.login(self.user)
    	.then(function () {
    		$log.debug("success");
    	}, function(message) {
    		$log.debug(message);
    	})


    }
  }

})();
