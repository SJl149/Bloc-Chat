(function () {
    function HomeCtrl(Message, Room, $uibModal) {
        this.chatRooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        
        this.displayCurrentRoom = function(roomName, roomId) {
            this.currentRoom = roomName;
            this.messages = Message.getByRoomId(roomId); 
        };
        
        this.open = function() {
           var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message','Room', '$uibModal', HomeCtrl]);
})();