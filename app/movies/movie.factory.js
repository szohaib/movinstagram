(function() {
    'use strict';

    angular
        .module('movie')
        .service('movieService', movieService);

    movieService.$inject = ['$http' , '$q' , 'apiCollection'];
    function movieService($http , $q , apiCollection) {
        var service = {
            getSingleMovieById : getSingleMovieById
        }

        return service;
        ////////////////

        function getSingleMovieById(movieId){
            var defer = $q.defer();
            $http.get(apiCollection.layout.getSingleMovieById(movieId)).then(function(response){
                defer.resolve(response.data);
            });

            return defer.promise;
        }

    }
})();