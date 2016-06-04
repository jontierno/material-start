(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  function UserService($q){
    var users = [
      {
        username: "user",
        password  :"user",
        name: "Jonathan Tierno",
        career: 10,
        registers: []
//        registers: [{code: "11A",
 //       subject: '61.03'}]
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        return $q.when(users);
      },
      loadUser:function (username) {
        var deferred = $q.defer();
        for(var i in users) {
          if(users[i].username == username) {
            deferred.resolve(angular.copy(users[i]));
          }
          deferred.reject();
          return deferred.promise;
        }
      },
        save: function(user) {
          var promise = this.loadUser(user.username);
          return promise
            .then(function(userFound) {
               userFound = angular.copy(user);
            });
        }

    };
  }

})();
