(function () {
    function ModalCtrl(Room, $uibModalInstance, $uibModal) {
        var button = this;
        
        button.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }; 
        
        button.createRoom = function() {
            $uibModalInstance.close();
        };
        
    }
   
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$uibModal', ModalCtrl]);
})();