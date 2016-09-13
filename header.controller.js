(function(){
    'use stict';
angular.module('test_app').controller('HeaderController', function ($scope, User) {
    $scope.Name = User.name; //using service
    $scope.ID = User.ID();
});
// rootscope - global var, bad

})();
