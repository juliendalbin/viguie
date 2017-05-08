'use strict';

angular.module('app').config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            parent: 'main',
            url: '/home',
            template: '<home></home>',
            controller: function(){}
        })
});
