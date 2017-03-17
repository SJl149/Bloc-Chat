(function () {
    function ModalCtrl($uibModal) {
        var $ctrl = this;
        
        $ctrl.open = function () {
            
        var modalInstance = open({
            animation: false,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '/templates/modal.html',
            controllerAs: '$ctrl', 
            component: 'modal-new-room'
            });
            
        };
    }
   
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();