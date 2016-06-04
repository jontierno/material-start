(function(){
  'use strict';

  angular.module('register')
         .service('registerService', ['$q', RegisterService]);

  function RegisterService($q){
  

    // Promise-based API
    return {
      loadCareer : function(code) {

      }
    };
  }

})();
