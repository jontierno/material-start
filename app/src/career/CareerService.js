(function(){
  'use strict';

  angular.module('career')
         .service('careerService', ['$q', CareerService]);

  function CareerService($q){
    
    var careers = [
      {
        code: 10,
        description: "Ingeniería Informática",
        subjects: [{
          code: "75.73",
          description: "Arquitectura de Software"
        },{
          code: "75.07",
          description: "Algoritmos y programación III"
        }]
      }

    ];

    // Promise-based API
    return {
      loadCareer : function(code) {
        var deferred = $q.defer();
          for(var i in careers) {
            if(careers[i].code == code) {
              deferred.resolve(angular.copy(careers[i]));
            }
  
          }
          deferred.reject();

        
         return deferred.promise;   
      }
    };
  }

})();
