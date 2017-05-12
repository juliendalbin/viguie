'use strict';

angular.module('app').config(function ($stateProvider) {

    $stateProvider
        .state('home', {
            parent: 'main',
            url: '/home',
            component: 'home'
        })
        .state('products', {
            parent: 'main',
            url: '/products',
            component: 'products'
        })
});
