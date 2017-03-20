(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        var button = this;
        
        button.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }; 
        
        button.createRoom = function(name) {
            
            Room.createRoom(name);
            $uibModalInstance.close();
        };
        
    }
   
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();