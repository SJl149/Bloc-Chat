(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
      
    return {
        all: rooms,
        createRoom: function(newRoomName) {
            rooms.$add({$value: newRoomName}).then(function(ref) {
               console.log(ref.key); 
            }, function(error) {
                    console.log(error);
            });
            console.log("I'm here");        
        }
        
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();