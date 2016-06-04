(function(){
  'use strict';

  angular.module('register')
         .service('registerService', ['$q', RegisterService]);

  function RegisterService($q){
  
    return {
      isSelected : function(user, course) {
        for (var i in user.registers){
          if(user.registers[i].subject == course.subject &&
            user.registers[i].code == curse.code) {
            return $q.when(true);
          }
        }
        return $q.when(false);

      }
    };
  }

})();
