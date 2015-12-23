// controllers
// route dependency necessary for activetab
function MainController($scope, $route) {
    $scope.$route = $route;
    $scope.email = 'vmladenov [at] icloud [dot] com';
}

function ProjectsController($scope, $route, projects) {
    $scope.$route = $route;
    projects.getProjects().then(function (result) {
        $scope.projects = result;
    });
}

function DetailsController($scope, $routeParams, projects) {
    projects.getProjects().then(function (result) {
        $scope.project = result[$routeParams.id];
    });   
}

// set routes for app
function Router($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController',
            activetab   : 'home'
        })
        .when('/projects', {
            templateUrl : 'views/projects.html',
            controller  : 'projectsController',
            activetab   : 'projects'
        })
        .when('/projects/:id', {
            templateUrl : 'views/details.html',
            controller  : 'detailsController',
            activetab   : undefined
        });
}

// projects service, single ajax call
function Projects($http) {
    this.projects = null;
    function populate() {
        return $http.get("assets/projects.json").then(function (response) {
            return response.data;
        });
    }

    this.getProjects = function(update) {
        if (update || this.projects === null) {
            this.projects = populate();
        }

        return this.projects;
    }
}

angular.module('website', ['ngRoute'])
    .controller('mainController', MainController)
    .controller('projectsController', ProjectsController)
    .controller('detailsController', DetailsController)
    .service('projects', Projects)
    .filter('trustThisUrl', function($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }).filter('sanitize', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
    }).config(Router);








