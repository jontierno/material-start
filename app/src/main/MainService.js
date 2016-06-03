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
        state: 'app.inscription',
        roles: ['STUDENT']
      },
      {
        name: 'Carrera',
        avatar: 'star',
        state: 'app.career',
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
