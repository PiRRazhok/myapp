'use strict';

angular.module('arseniApp', [
  'ngResource',
  'ngRoute',
  'Ctrl'
])
  .config(function ($routeProvider) {
    $routeProvider
      //
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'Ctrl'
      })
      //

      .when('/enterance', {
        templateUrl: 'views/enterance.html',
        controller: 'Ctrl'
      })
      .when('/registraiton', {
        templateUrl: 'views/registration.html',
        controller: 'Ctrl'
      })
      .when('/st1', {
        templateUrl: 'views/st1.html',
        controller: 'Ctrl'
      })
      .when('/st6', {
        templateUrl: 'views/st6.html',
        controller: 'Ctrl'
      })
      .when('/st2', {
        templateUrl: 'views/st2.html',
        controller: 'Ctrl'
      })
      .when('/st3', {
        templateUrl: 'views/st3.html',
        controller: 'Ctrl'
      }).when('/st4', {
        templateUrl: 'views/st4.html',
        controller: 'Ctrl'
      })
      .when('/st5', {
        templateUrl: 'views/st5.html',
        controller: 'Ctrl'
      })
      .when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'Ctrl'
      })
      .when('/struct', {
        templateUrl: 'views/struct.html',
        controller: 'Ctrl'
      })
      .when('/price', {
        templateUrl: 'views/price.html',
        controller: 'Ctrl'
      })
      .when('/vacant', {
        templateUrl: 'views/vacant.html',
        controller: 'Ctrl'
      })
      .when('/photo', {
        templateUrl: 'views/photo.html',
        controller: 'Ctrl'
      })
      .when('/staff', {
        templateUrl: 'views/staff.html',
        controller: 'Ctrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'Ctrl'
      })

      .when('/cabinet', {
        templateUrl: 'views/cabinet.html',
        controller: 'Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
