/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _authorize = __webpack_require__(/*! ./authorize */ 1);
	
	var _authorize2 = _interopRequireDefault(_authorize);
	
	__webpack_require__(/*! ./ngApp */ 2);
	
	__webpack_require__(/*! ./services/accountService */ 5);
	
	__webpack_require__(/*! ./services/apiService */ 6);
	
	__webpack_require__(/*! ./controllers/TweetCtrl */ 4);
	
	__webpack_require__(/*! ./controllers/AccountsCtrl */ 7);
	
	(0, _authorize2["default"])();

/***/ },
/* 1 */
/*!**************************!*\
  !*** ./src/authorize.js ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function () {
	  if (localStorage["firebase:session::team-tweets"]) {
	    return;
	  }
	
	  var ref = new Firebase("https://team-tweets.firebaseio.com/");
	  ref.authWithOAuthPopup("twitter", function (error, authData) {
	    if (error) {
	      alert("Login Failed!", error);
	    } else {
	      alert("Authenticated successfully with payload:", authData);
	      ref.child("users").push(authData);
	    }
	  });
	};
	
	module.exports = exports["default"];

/***/ },
/* 2 */
/*!**********************!*\
  !*** ./src/ngApp.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	window.app = angular.module("team-tweet", ['ui.router']);
	
	app.config(function ($stateProvider, $urlRouterProvider) {
	
	  $urlRouterProvider.otherwise('/');
	
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: '/src/templates/home.html',
	    controller: "TweetCtrl"
	  }).state('accounts', {
	    url: '/accounts',
	    templateUrl: '/src/templates/accounts.html',
	    controller: "AccountsCtrl"
	  });
	});

/***/ },
/* 3 */,
/* 4 */
/*!**************************************!*\
  !*** ./src/controllers/TweetCtrl.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.controller("TweetCtrl", function ($scope, accountService, apiService) {
	
	  $scope.accountList = accountService.getAll();
	
	  $scope.tweetAs = function () {
	    apiService.tweetAs($scope.data);
	  };
	});

/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./src/services/accountService.js ***!
  \****************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.service("accountService", function ($http) {
	  var accounts = [];
	  var currentAdmin = JSON.parse(localStorage["firebase:session::team-tweets"]).twitter.username;
	  var adminRef = new Firebase('https://team-tweets.firebaseio.com/adminAccounts/' + currentAdmin);
	  this.getAll = function () {
	    return accounts;
	  };
	
	  this.addAccount = function (twitterHandle) {
	    if (accounts.indexOf(twitterHandle) === -1) {
	      console.log('hello test');
	      adminRef.push(twitterHandle);
	      accounts.push(twitterHandle);
	    }
	  };
	});

/***/ },
/* 6 */
/*!************************************!*\
  !*** ./src/services/apiService.js ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.service("apiService", function () {
	  this.tweetAs = function (options) {
	    // Do the thing here...
	    console.log(options);
	  };
	});

/***/ },
/* 7 */
/*!*****************************************!*\
  !*** ./src/controllers/AccountsCtrl.js ***!
  \*****************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.controller("AccountsCtrl", function ($scope, accountService, apiService) {
	
	  $scope.accounts = accountService.getAll();
	
	  $scope.addAccount = function () {
	    accountService.addAccount($scope.twitterHandle);
	    $scope.twitterHandle = '';
	  };
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map