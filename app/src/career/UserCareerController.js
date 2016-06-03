(function(){

  angular
       .module('career')
       .controller('UserCareerController', [
          'authService','careerService', '$log', '$state',
          UserCareerController
       ]);

  function UserCareerController ( authService, careerService,  $log, $state ) {
    var self = this;
    self.career = {};

    authService.getCurrentUser().then(function(user){
        careerService.loadCareer(user.career)
            .then(function(career){
                self.career = career;
            });
    });


    
  }

})();
