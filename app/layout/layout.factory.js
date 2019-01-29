(function() {
    'use strict';

    angular
        .module('movie')
        .service('layoutService', layoutService);

    layoutService.$inject = ['$http', '$q' , 'apiCollection'];
    function layoutService($http  , $q , apiCollection) {
       
        var service = {
            getMovies : getMovies,
        }

        return service;
        ////////////////

        function getMovies(movieName , type , plot){
            var defer = $q.defer();
            $http.get(apiCollection.layout.getMovies(movieName , type , plot)).then(function(response){
                defer.resolve(response.data);
            });

            return defer.promise;
        }

        
    }
})();