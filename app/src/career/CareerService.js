(function(){
  'use strict';

  angular.module('career')
         .service('careerService', ['$q', CareerService]);

  function CareerService($q){
  

    // Promise-based API
    return {
      loadCareer : function(code) {
        var deferred = $q.defer();

        userService.loadUser(user.username)
          .then(function (userFound) {
              if(userFound.password == user.password) {
                authenticatedUser = userFound;
                deferred.resolve();
              } else {
                deferred.reject('Username/Pasword invalid');
              }

          }, function (){
            deferred.reject('Username/Pasword invalid');
          });
        
         return deferred.promise;   
      }
    };
  }

})();
