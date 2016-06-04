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
          code: "61.03",
          description: "Analisis Matemático II"
        },{
          code: "75.40",
          description: "Algoritmos y programación I"
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
