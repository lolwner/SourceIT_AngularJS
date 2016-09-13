angular.module('task1')
    .service('Timer_service', function () {
        var ID = 0;

        this.ID = function () {
            return ID;
        };
    });