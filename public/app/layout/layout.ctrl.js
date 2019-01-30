(function () {
    'use strict';

    angular
        .module('movie')
        .controller('layoutCtrl', layoutCtrl);

    layoutCtrl.$inject = ['$scope', 'layoutService', '$compile'];
    function layoutCtrl($scope, layoutService, $compile) {
        $scope.isMovieLoaded = false;
        $scope.resultArray = [];
        $scope.search = {};
        var currentPage = 1;
        var numberPerPage = 4;
        var selectedType;
        var selectedPlot;
        var count = 0;
        var temp = 0;
        var numberOfPages = 0;
        activate();

        ////////////////



        $scope.selectType = function (type) {
            selectedType = type;
        }
        $scope.selectPlot = function (plot) {
            selectedPlot = plot;
        }

        function getMovies(movieName, type, plot) {

            layoutService.getMovies(movieName, type, plot).then(function (result) {
                if (result.Response === "False") {
                    if (count < 1) {

                        count++;
                        var p = document.createElement('p');
                        var text = document.createTextNode("Sorry! Movie not found");
                        p.appendChild(text);
                        p.classList = "movie-error"
                        $scope.resultArray = [];
                        var elem = document.getElementById("allMovies");
                        elem.append(p)
                        numberOfPages = currentPage;
                        loadList($scope.resultArray);

                    }
                }
                else {
                    count = 0;
                    $scope.resultArray = result.Search;
                    $scope.isMovieLoaded = true;
                    console.log($scope.resultArray)
                    numberOfPages = Math.ceil($scope.resultArray.length / numberPerPage);
                    loadList($scope.resultArray);

                    if ($("#allMovies").find('.movie-error')) {
                        $('.movie-error').remove();
                    }

                }

            })
        }





        function check() {
            document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
            document.getElementById("previous").disabled = currentPage == 1 ? true : false;
        }


        function loadList(resultArray) {
            var begin = ((currentPage - 1) * numberPerPage);
            var end = begin + numberPerPage;

            $scope.filteredData = resultArray.slice(begin, end);
            console.log($scope.filteredData)

            check();

        }

        $scope.previousPage = function (changePage) {

            currentPage = currentPage - 1;
            loadList($scope.resultArray)

        }
        $scope.nextPage = function (changePage) {

            currentPage = currentPage + 1;
            loadList($scope.resultArray)

        }

        $scope.goToMovie = function (a) {
            console.log(a)
        }

        $scope.searchMovie = function (search) {

            if (selectedType === undefined) {
                selectedType = null;
            }
            else if (selectedPlot === undefined) {
                selectedPlot = null
            }

            getMovies(search.movieName, selectedType, selectedPlot)
        }



        function activate() {
            getMovies("Harry Potter", null, null);
        }
    }
})();