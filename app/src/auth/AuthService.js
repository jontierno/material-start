(function(){
  'use strict';

  angular.module('auth')
         .service('authService', ['$q','userService', AuthService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function AuthService($q, userService){
    var authenticatedUser =  null;

    // Promise-based API
    return {
      login : function(user) {
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
      },
      getCurrentUser: function () {
         return $q.when(authenticatedUser);
      },
      logout: function () {
        
        var deferred = $q.defer();
        authenticatedUser = null;
        deferred.resolve();
        return deferred.promise;
      }

    };
  }

})();
