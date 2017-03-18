(function () {
    function HomeCtrl(Room, $uibModal) {
        this.chatRooms = Room;
        
        this.open = function() {
            
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();