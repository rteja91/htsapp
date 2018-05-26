//console.log("sowjitha3");
angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  //console.log($stateProvider);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.donate', {

    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('menu.information', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/information.html',
        controller: 'informationCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.donateMoney', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/donateMoney.html',
        controller: 'donateMoneyCtrl'
      }
    }
  })

  .state('menu.thanks', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/thanks.html',
        controller: 'thanksCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});