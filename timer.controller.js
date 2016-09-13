(function(){
    'use stict';
angular.module('task1').controller('TimerController', function ($scope, Timer_service) {
    $scope.ID = Timer_service.ID();
    $scope.Duration = Math.random();
});

})();