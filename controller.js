
var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/',
            {
                templateUrl: 'login.html',
                controller: 'loginCtrl'
            }
        )

        .when('/dashboard',
            {
                resolve: {
                    check: function ($rootScope, $location) {
                        if ($rootScope.loggedIn == false || $rootScope.loggedIn == undefined) {
                            $location.path('/');
                        }
                        console.log("$rootScope.loggedIn: ", $rootScope.loggedIn);
                    }
                },
                templateUrl: 'dashboard.html',
                controller: 'dashboardCtrl'
            })

        .when('/baska',
            {
                templateUrl: 'baska.html'
            })

        .otherwise(
            { redirectTo: '/' }
        )

        ;

});

app.controller('loginCtrl', function ($scope, $location, $rootScope) {

    $scope.submit = function () {
        if ($scope.textusername == '1' && $scope.textpassword == '1') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        }
        else {
            $scope.textusername = '';
            $scope.textpassword = '';
            $scope.h3loginalert = "login bilgileriniz yanlış";
        }
    };

});

app.controller('dashboardCtrl', function ($scope, $location, $rootScope) {

    $scope.exit = function () {
        $rootScope.loggedIn = false;
        $location.path('/');
    };

});