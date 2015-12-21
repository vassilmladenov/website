// create the module and name it website
    // also include ngRoute for all our routing needs
var website = angular.module('website', ['ngRoute']);

// configure our routes
website.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController',
            activetab   : 'home'
        })

        // route for the about page
        .when('/projects', {
            templateUrl : 'views/projects.html',
            controller  : 'projectsController',
            activetab   : 'projects'
        })

        .when('/projects/:row/:col', {
            templateUrl : 'views/details.html',
            controller  : 'detailsController',
            activetab   : undefined
        })

        // route for the contact page
});

// create the controller and inject Angular's $scope
website.controller('mainController', function($scope, $route) {
    $scope.$route = $route;
    $scope.email = 'vmladenov [at] icloud [dot] com';
});

website.controller('projectsController', function($scope, $route, $http) {
    $scope.$route = $route;
    $http.get("assets/projects.json").then(function (result) {
        $scope.projects = result.data;
        console.log("projects", result.data)
    })
});

website.controller('detailsController', function($scope, $routeParams, $http) {
    $http.get("assets/projects.json").then(function (result) {
        $scope.project = result.data[$routeParams.row][$routeParams.col];
        console.log("projects", $scope.project)
    })
});