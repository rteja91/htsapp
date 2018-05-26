
//console.log("sowjitha");
angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

//console.log("test");

function ($scope, $stateParams) {


}])
   
.controller('donateCtrl', ['$scope', '$stateParams', '$firebaseArray', '$ionicUser', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $ionicUser) {

  console.log("data");
  console.log($scope);
    
    $scope.data = {
        'date': '',
        'number':'',
        'street':'',
        'city':'',
        'state':'',
        'zip':''
    }
    
      var ref = firebase.database().ref().child("messages");

      //console.log(firebase);

      //console.log(ref);
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);

      console.log($scope.messages);
  var fedexAPI = require('fedex');

  var fedex = new fedexAPI({
    environment: 'sandbox', // or live
    debug: true,
    key: 'KEY',
    password: 'DEVPASSWORD',
    account_number: 'ACCOUNT#',
    meter_number: 'METER#',
    imperial: true // set to false for metric
  });
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        //console.log("sowjithaaddmessage");
       // console.log($scope.data);
        $scope.messages.$add({
          date: $scope.data.date,
          number: $scope.data.number,
          street: $scope.data.street,
          city: $scope.data.city,
          state: $scope.data.state,
          zip: $scope.data.zip,
          email: $ionicUser.details.email,
          name: $ionicUser.details.name
        });
        // $scope.data.date = '';
        // $scope.data.number = '';
        // $scope.data.street = '';
        // $scope.data.city = '';
        // $scope.data.state = '';
        // $scope.data.zip = '';
      };

}])
   
.controller('informationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$ionicSideMenuDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $ionicSideMenuDelegate) {
    // Updated on 1/9/2017 to fix issues with logging
    // out and back in, as well as history issues with side menu + tabs.
  	function checkLoggedIn(){
      var user = firebase.auth().currentUser;
         if (user != null) {
            $scope.userData = {
              name: user.name,
              email: user.email
            }
          }else{
              $scope.userData = {}; 
          }       
    }
    
    checkLoggedIn();
    
    $scope.$on('login_change', checkLoggedIn);

    $scope.logout = function(){
        $ionicAuth.logout();
      	// Updated on 1/9/2017 to make sure the menu closes when
        // you log out so that it's closed if you log back in.
     		$ionicSideMenuDelegate.toggleLeft(false);
        $state.go('login');
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser','$firebaseArray', '$ionicAuth', '$state', '$ionicHistory', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser,$firebaseArray, $ionicAuth, $state, $ionicHistory, $rootScope) {

   $scope.data = {
        'email': '',
        'password': ''
    }

    $scope.login = function(){
        $scope.error = '';
        const promise = firebase.auth().signInWithEmailAndPassword($scope.data.email, $scope.data.password);
        promise.then(resp => {

             $state.go('menu.home');  
        })
        .catch(err => {
          $scope.$apply(function(){
             $scope.error = err.message;
          });
        });
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams','$firebaseArray', '$ionicAuth', '$ionicUser', '$state', '$ionicHistory', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray, $ionicAuth, $ionicUser, $state, $ionicHistory, $rootScope) {
    
     $scope.data = {
        'name': '',
        'email': '',
        'password': ''
    }
    
    $scope.error='';

    $scope.signup = function(){
        $scope.error='';


        const promise = firebase.auth().createUserWithEmailAndPassword($scope.data.email, $scope.data.password);
        promise.then(resp => {
            createUser();
             $state.go('login');
        })
        .catch(err => {
           $scope.$apply(function(){
                //Set error box message
                $scope.error = err.message;
           });
        })
    }


    function createUser(){
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            var uid = user.uid;
            var email = user.email;
            var name = $scope.data.name;
            firebase.database().ref('users/' + uid).set({
                email: email,
                name : name
              });
          } else {
            // No user is signed in.
          }
        });
    }

   

    

}
])
   
.controller('donateMoneyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('thanksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
