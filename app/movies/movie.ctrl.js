(function() {
    'use strict';

    angular
        .module('movie')
        .controller('movieCtrl', movieCtrl);

    movieCtrl.$inject = ['$scope' , '$stateParams' , 'movieService' , '$state'];
    function movieCtrl($scope,$stateParams,movieService , $state) {
        $scope.isMovieLoaded = false;
        

        activate();

        ////////////////

        function getMovieDetails(movieId){
            $scope.resultArray = [];
            movieService.getSingleMovieById(movieId).then(function(result){
                $scope.resultArray = result;
                $scope.isMovieLoaded = true;
            })
        }

        $scope.goBack = function(){
            $state.go("main")
        }

        function activate() {
            getMovieDetails($stateParams.movieId)
         }
    }
})();