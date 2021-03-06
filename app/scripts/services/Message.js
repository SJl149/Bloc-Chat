(function() {
    function Message($cookies, $filter, $firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        var time = Date.now();
        
        Message.currentRoom = null;
        
        return {
            getByRoomId: function (roomId) {
                Message.currentRoom = roomId;
                var query = ref.orderByChild('roomId').equalTo(roomId);
                var currentList = $firebaseArray(query);
                return currentList;
            },
            send: function (newMessage) {
                messages.$add({
                    content: newMessage,
                    roomId: Message.currentRoom,
                    sentAt: time,
                    username: $cookies.get('blocChatCurrentUser')
                });
                
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$cookies', '$filter', '$firebaseArray', Message]);
})();