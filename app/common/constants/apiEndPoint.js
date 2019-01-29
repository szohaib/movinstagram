
(function (){
    'use strict';

    var apiEndPoint = "http://www.omdbapi.com/?apikey=9f912670";

    angular.module('movie')
           .constant('apiEndPoint',apiEndPoint);
})()