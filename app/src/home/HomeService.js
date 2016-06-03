(function(){
  'use strict';

  angular.module('home')
         .service('homeService', ['$q', 'authService', HomeService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */

  function HomeService($q, authService){
    authService.getCurrentUser().then(function(user){
      self.currentUser = user;
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

    // Promise-based API
    return {
      loadMenu : function() {
        // Simulate async nature of real remote calls
        return $q.when(menues);
      }
    };
  }

})();
