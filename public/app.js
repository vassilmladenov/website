// create the module and name it website
    // also include ngRoute for all our routing needs
var website = angular.module('website', ['ngRoute']);

// configure our routes
website.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/projects', {
            templateUrl : 'views/projects.html',
            controller  : 'projectsController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
website.controller('mainController', function($scope) {});

website.controller('projectsController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

website.controller('contactController', function($scope) {
    $scope.message = 'vmladenov [at] icloud [dot] com';
});