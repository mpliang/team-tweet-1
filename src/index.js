import authorizeGuests from "./authorize";

let app = angular.module("team-tweet", []);

app.controller("TweetCtrl", ($scope, accountService) => {
	accountService.add("@Acct1");
	accountService.add("@Acct2");
	accountService.add("@Acct3");
	accountService.add("@Acct3"); // Duplicates are ignored

	$scope.accountList = accountService.getAll();
});

app.service("accountService", function() {
	var accounts = [];
	this.getAll = function () {
		return accounts;
	};

	this.add = function(username) {
		if(accounts.indexOf(username) === -1){
			accounts.push(username);
		}
	};
});

authorizeGuests();
