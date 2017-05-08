'use strict';

angular.module('app').component('navbar', {
    templateUrl: 'src/components/navbar/view.html',
    controller: navbarController
});

function navbarController($stateParams, $modal,
                                $scope, $q) {
}
