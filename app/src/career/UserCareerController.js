(function(){

  angular
       .module('career', [ 'ngMessages', 'auth'])
       .controller('UserCareerController', [
          'authService','careerService', '$log', '$state',
          UserCareerController
       ]);

  function UserCareerController ( authService, careerService,  $log, $state ) {
    var self = this;
    self.loadCareer = loadCareer;
    self.career = {};

    function loadCareer(){
    	self.status="";
    	authService.getCurrentUser().then(function(user){
        careerService.loadCareer(user.career)
            .then(function(career){
                self.career = career;
            })
      });
    }
  }

})();
