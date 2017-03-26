(function () {
    function SetUserModalCtrl($cookies, $uibModalInstance) {
        var button = this;
        
        button.setUsername = function(userName) {      
            $cookies.put('blocChatCurrentUser', userName);
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('SetUserModalCtrl', ['$cookies', '$uibModalInstance', SetUserModalCtrl]);
})();