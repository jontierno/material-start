(function(){
  'use strict';

  angular.module('main')
         .service('mainService', ['$q', 'authService', '$state', MainService]);


  function MainService($q, authService){
    authService.getCurrentUser().then(function(user){
      self.currentUser = user;
      if(!user) {

      }
    });
    var menues = [
      {
        name: 'Inscripciones',
        avatar: 'create',
        state: 'inscription',
        roles: ['STUDENT']
      },
      {
        name: 'Carrera',
        avatar: 'star',
        state: 'carreer',
        roles: ['STUDENT']
      }
    ];

    return {
      loadMenu : function() {

        return $q.when(menues);
      }
    };
  }

})();
