// CONTROLLERS

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    
    $scope.city = cityService.city;
    $scope.id = '524901';
    $scope.appid = '2f2377437924af38d3f12afba59647ea';
    $scope.days= $routeParams.days || '2';
    
    $scope.weatherAPI= $resource("http://api.openweathermap.org/data/2.5/forecast/daily");
    
    //$resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});
    
    $scope.weatherResult= $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, appid: $scope.appid, id: $scope.id});
    
    $scope.convertToC = function(degK) {
        return Math.round(degK-273.15);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt*1000);
    }
 
    
}]);


weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
    
    $scope.submit = function(){
        $location.path("/forecast");
    }
    
}]);