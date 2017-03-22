(function () {
    function HomeCtrl(Room, $uibModal) {
        this.chatRooms = Room.all;
        /* this.currentRoom = {};
        Change currentRoom function? 
        
        this.displayCurrentRoom = function(roomName) {
            this.currentRoom = roomName;
            
        }
        
        */
        
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
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();