(function(){

  angular
       .module('register')
       .controller('RegisterController', [
          'registerService', 'careerService', 'courseService', '$log', '$state','$scope',
          RegisterController
       ]);

  function RegisterController ( registerService, careerService, courseService, $log, $state,$scope ) {
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
      courseService.getCourses(subject.code).then(function(courses){
          for(var i in courses) {
            registerService. isSelected(courses[i]).then(function(value){
              courses[i].selected = value;
            });
          }
          self.selectedCourses = courses;
      });
    }
  }

})();
