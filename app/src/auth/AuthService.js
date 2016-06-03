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

    var users = [
      {
        username: "user",
        password  :"user"
      }
    ];

    var authenticatedUser = {};
    // Promise-based API
    return {
      login : function(user) {
        var deferred = $q.defer();

        userService.loadUser(user.username)
          .then(function (userFound) {
              if(userFound.password == user.password) {
                authenticatedUser = users[i];
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
