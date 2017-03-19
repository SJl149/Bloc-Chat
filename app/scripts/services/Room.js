(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    
    Room.chatrooms = { 
        all: rooms
    };  
      
    Room.createRoom = function(newRoomName) {
        rooms.$add({$value: newRoomName});
                
    };  
      
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();