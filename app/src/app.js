angular
    .module('fiubaApp', ['ngMaterial','ui.router','login', 'home'])
    .config(function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider){

     //   $mdIconProvider
      //      .defaultIconSet("./assets/svg/avatars.svg", 128)
       //     .icon("menu"       , "./assets/svg/menu.svg"        , 24)
        //    .icon("share"      , "./assets/svg/share.svg"       , 24)
         //   .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
          //  .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
           // .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            //.icon("phone"      , "./assets/svg/phone.svg"       , 512);

            $mdThemingProvider.theme('default')
                .primaryPalette('light-blue')
                .accentPalette('red');
          //
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/home");
      //
      // Now set up the states
      $stateProvider
        .state('app', {
          
          templateUrl: "src/home/view/home.html",
          controller: 'HomeController as home',
          abstract: true
        })
        .state('app.home', {
          url: "/home",
          templateUrl: "src/home/view/wellcome.html"
        })
        .state('login', {
          url: "/login",
          templateUrl: "src/login/view/login.html",
          controller: 'LoginController as login'
        }); 

    });