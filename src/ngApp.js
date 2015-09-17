window.app = angular.module("team-tweet", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/src/templates/home.html',
      controller: "TweetCtrl"
    })
    .state('accounts', {
      url: '/accounts',
      templateUrl: '/src/templates/accounts.html',
      controller: "AccountsCtrl"
    })

});
