import authorizeGuests from "./authorize";

let app = angular.module("team-tweet", []);

app.controller("TweetCtrl", ($scope, accountService) => {
	accountService.add("@Acct1");
	accountService.add("@Acct2");
	accountService.add("@Acct3");

	$scope.accountList = accountService.getAll();
});

app.service("accountService", function() {
	var accounts = [];
	this.getAll = function () {
		return accounts;
	};

	this.add = function(username) {
		accounts.push(username);
	};
});

authorizeGuests();
