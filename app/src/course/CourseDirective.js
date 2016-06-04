(function(){
	'use strict';
var mod = angular.module("course");


mod.directive('courseView', Coursedirective );

function Coursedirective() {
   //define the directive object
   var directive = {};
   //restrict = E, signifies that directive is Element directive
   directive.restrict = 'E';
   
   //template replaces the complete element with its text. 
   directive.templateUrl = "src/course/view/course.html";
   directive.replace = true;
   directive.scope = {
      course : "="
   }
   
   //compile is called during application initialization. AngularJS calls it once when html page is loaded.
	
   directive.compile = function(element, attributes) {
      
      //linkFunction is linked with each element with scope to get the element specific data.
      var linkFunction = function($scope, element, attributes) {
      	console.log("prueba");
         //element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
         //element.css("background-color", "#ff00ff");
     }
      return linkFunction;
   }
   return directive;
}

})();