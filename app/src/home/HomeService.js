(function(){
  'use strict';

  angular.module('home')
         .service('homeService', ['$q', HomeService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function HomeService($q){
    var menues = [
      {
        name: 'Inscripciones',
        avatar: 'create',
        state: 'inscription',
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
