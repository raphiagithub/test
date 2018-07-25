 
 var app = angular.module('myApp', ['ui.router','oc.lazyLoad']);
 app.controller('myCtrl', function($scope) {
     $scope.test=function()
     {
       //alert('hi gabriel');
     }
 });

 

 app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
  function ($locationProvider, $stateProvider, $urlRouterProvider) {

     $stateProvider
        // logout
         .state('hello', {
             url: "db_users.html",
             templateUrl: "db_users.html",
             data: { pageTitle: 'Login' },
             controller: "LoginController"
            //  resolve: {
            //      deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //          return $ocLazyLoad.load({
            //              name: 'LoginApp',
            //              insertBefore: '#ng_load_plugins_before',
            //              files: ['Scripts/LoginApp.js']
            //          });
            //      }]
            //  }
         }
     )
    // $urlRouterProvider.otherwise("/db_users.html");
 }]);
       