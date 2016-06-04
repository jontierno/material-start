
(function(){
  'use strict';

  angular.module('course')
         .service('courseService', ['$q', CourseService]);


  function CourseService($q, authService){
    var courses = [
      {
        code: "11A",
        subject: '61.03',
        professor: 'Sirne-Fiorante-Oliva',
        vacancy: '30',
        classes: [{day: "Martes",type: "Práctica Obligatoria",from: '14:00',to: "16:00",place: "PC-302"}
        ,{day: "Martes",type: "Teórica Obligatoria",from: '16:00',to: "18:00",place: "PC-500"}
        ,{day: "Jueves",type: "Práctica Obligatoria",from: '14:00',to: "16:00",place: "PC-302"}
        ,{day: "Jueves",type: "Teórica Obligatoria",from: '16:00',to: "18:00",place: "PC-500"}]
      }, {
        code: "11B",
        subject: '61.03',
        professor: 'Sirne-Martins-Lopez',
        vacancy: '30',
        classes: [{day: "Martes",type: "Práctica Obligatoria",from: '14:00',to: "16:00",place: "PC-310"}
        ,{day: "Martes",type: "Teórica Obligatoria",from: '16:00',to: "18:00",place: "PC-500"}
        ,{day: "Jueves",type: "Práctica Obligatoria",from: '14:00',to: "16:00",place: "PC-310"}
        ,{day: "Jueves",type: "Teórica Obligatoria",from: '16:00',to: "18:00",place: "PC-500"}]
      }, {
        code: "20B",
        subject: '61.03',
        professor: 'Seminara-Lucuy Suarez-Galvan',
        vacancy: '30',
        classes: [{day: "Lunes",type: "Práctica Obligatoria",from: '17:00',to: "19:00",place: "PC-302"}
        ,{day: "Lunes",type: "Teórica Obligatoria",from: '19:00',to: "21:00",place: "PC-500"}
        ,{day: "Jueves",type: "Práctica Obligatoria",from: '17:00',to: "19:00",place: "PC-302"}
        ,{day: "Jueves",type: "Teórica Obligatoria",from: '19:00',to: "21:00",place: "PC-500"}]
      },{
        code: "1",
        subject: '75.40',
        professor: 'Guarna-Bianchi-Gonzalez Busquin-Juarez-Soriano Bouissou',
        vacancy: '30',
        classes: [{day: "Martes",type: "Teórico Práctica Obligatoria ",from: '19:00',to: "22:00",place: "PC-302"}
        ,{day: "Jueves",type: "Teórico Práctica Obligatoria ",from: '19:00',to: "22:00",place: "PC-302"}]
      },{
        code: "2",
        subject: '75.40',
        professor: ' Azcurra-Bianchi-Salvia-Otero',
        vacancy: '30',
        classes: [{day: "Lunes",type: "Teórico Práctica Obligatoria ",from: '19:00',to: "22:00",place: "PC-302"}
        ,{day: "Miercoles",type: "Teórico Práctica Obligatoria ",from: '19:00',to: "22:00",place: "PC-302"}]
      }

    ];

    return {
      getCourses : function(subject) {
        var result = [];
        for(var i in courses) {
            if(courses[i].subject == subject) {
              result.push(angular.copy(courses[i]));
            }
        }
        
        return $q.when(result);
      }
    };
  }

})();
