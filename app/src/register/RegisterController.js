(function(){

  angular
       .module('register')
       .controller('RegisterController', [
          'registerService', 'careerService', '$log', '$state','$scope',
          RegisterController
       ]);

  function RegisterController ( registerService, careerService, $log, $state,$scope ) {
    var self = this;
    
    self.selectSubject = selectSubject;
    careerService.loadCareer($scope.currentUser.career).then(function(career){
    	self.career= career;
    })

    function selectSubject(subject) {
      if(self.selectedSubject) {
        self.selectedSubject.selected = false;
      }
    	self.selectedSubject = subject;
      self.selectedSubject.selected = true;
    }
  }

})();
