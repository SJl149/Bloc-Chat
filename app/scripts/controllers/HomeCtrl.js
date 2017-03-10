(function () {
    function HomeCtrl(Room) {
        $scope.chatRooms = Room;
    }
    
    angular
        .module('blocChat',[])
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();