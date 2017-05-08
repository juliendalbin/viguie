'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('main', {
            url: '',
            templateUrl: 'index.html',
            abstract: true
        })
});
