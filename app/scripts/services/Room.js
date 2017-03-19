(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    
    Room.createNewRoom = function(newRoomName) {
        console.log("called added room");
        rooms.$add(newRoomName);
        
    };
      
    return {
        all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();