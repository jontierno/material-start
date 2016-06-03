(function(){
  'use strict';

  angular.module('auth')
         .service('authService', ['$q', AuthService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function AuthService($q){

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
        for(var i in users) {
          if(users[i].username == user.username && users[i].password == user.password){
            authenticatedUser = users[i];
            deferred.resolve();
          }
        }
        deferred.reject('Username/Pasword invalid');
         return deferred.promise;   
      }

    };
  }

})();
