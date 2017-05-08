'use strict';

angular.module('app').component('home', {
    templateUrl: 'src/components/home/view.html',
    controller: homeController
});

function homeController($stateParams, $modal,
                                $scope, $q) {
}
