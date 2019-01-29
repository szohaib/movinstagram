(function () {
    'use strict';

    angular.module('movie')
        .config(routeConfig)

    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state({
                name: 'main',
                templateUrl: 'app/layout/layout.html',
                controller: 'layoutCtrl',
                url: '/home'
            })
            .state({
                name : 'singleMovie',
                templateUrl : 'app/movies/movie.html',
                controller: 'movieCtrl',
                url: '/movie/:movieId'
            })
    }


})();