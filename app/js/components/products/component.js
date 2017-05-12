'use strict';

angular.module('app').component('products', {
    templateUrl: 'js/components/products/view.html',
    controller: productsController
});

function productsController($stateParams, $uibModal,
                                $scope, $q) {

	console.log("toto");
}
