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
    self.defineStyle = defineStyle;
    self.selectCourse = selectCourse;
    self.deleteCourse = deleteCourse;
    careerService.loadCareer($scope.currentUser.career).then(function(career){
    	self.career= career;
    })

    function selectSubject(subject) {
      self.anySelected = false;
      if(self.selectedSubject){
        self.selectedSubject.selected=false;
      }
    	self.selectedSubject = subject;
      self.selectedSubject.selected = true;
      courseService.getCourses(subject.code).then(function(courses){
            registerService.markSelecteds($scope.currentUser, courses).then(function(value){
                for(var i in courses) {
                  self.anySelected = self.anySelected || courses[i].selected;
                }
                self.selectedCourses = courses;
            });
        });

      }
    

    function defineStyle(course) {

      if(course.selected) return "selected";
      if(!self.anySelected) return "";
      if(!course.selected) {} return 'disabled';
      return 'enabled'
    }

    function selectCourse(course) {
        
        registerService.register($scope.currentUser, course).then(function(){
           self.selectSubject(self.selectedSubject);
        })
    }

    function deleteCourse ( course) {
        registerService.unregister($scope.currentUser, course).then (function(){
            self.selectSubject(self.selectedSubject);

        })
    }
  }

})();
