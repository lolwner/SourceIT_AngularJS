angular.module('test_app')
    .service('User', function () {
        var ID = 1;
        this.name = 'Admin-service';
        this.ID = function(){
            return ID;
        };
    });