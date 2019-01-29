(function () {
    'use strict';

    angular
        .module('movie.common')
        .factory('apiCollection', apiCollection);

    apiCollection.$inject = ['apiEndPoint'];
    function apiCollection(apiEndPoint) {

        var layout = {
            getMovies : function(movieName , type , plot){
                return apiEndPoint + "&s=" + movieName + "&type="+type+ "&plot="+plot;
            }, 
            getSingleMovieById : function(movieId){
                return apiEndPoint + "&i=" + movieId +"&plot=full";
            }
        }
        

        return {
           layout : layout 
        }
    }
})();