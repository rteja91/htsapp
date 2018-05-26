angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDG9NYI4A5jJOchZeuFNwl4_0YSOzGBGJc",
    authDomain: "hair-to-share-1169a.firebaseapp.com",
    databaseURL: "https://hair-to-share-1169a.firebaseio.com",
    projectId: "hair-to-share-1169a",
    storageBucket: "hair-to-share-1169a.appspot.com",
    messagingSenderId: "618857661092"
  };
  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/