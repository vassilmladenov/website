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

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contactController',
            activetab   : 'contact'
        });
});

// create the controller and inject Angular's $scope
website.controller('mainController', function($scope, $route) {
    $scope.$route = $route;
});

website.controller('projectsController', function($scope, $route) {
    $scope.$route = $route;
});

website.controller('contactController', function($scope, $route) {
    $scope.$route = $route;
    $scope.email = 'vmladenov [at] icloud [dot] com';
});