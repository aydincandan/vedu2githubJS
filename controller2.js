angular
  .module('mainApp2', [    'ngResource',    'ngRoute',    'AuthServices'  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        requiresAuthentication: true
      })
      .when('/sales/orders/new', {
        templateUrl: 'views/sales/new_order.html',
        controller: 'OrderDetailCtrl',
        requiresAuthentication: true,
        permissions: ["administration"]
      })
      .when('/sales/orders', {
        templateUrl: 'views/sales/orders.html',
        controller: 'OrdersCtrl',
        requiresAuthentication: true,
        permissions: ["administration", "list_orders"]
      })
 });