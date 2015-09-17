app.service("accountService", function($http) {
  var accounts = [];
  var currentAdmin = JSON.parse(localStorage["firebase:session::team-tweets"]).twitter.username;
  var adminRef = new Firebase('https://team-tweets.firebaseio.com/adminAccounts/' + currentAdmin)
  this.getAll = function () {
    return accounts;
  };

  this.addAccount = function(twitterHandle) {
    if(accounts.indexOf(twitterHandle) === -1){
      console.log('hello test');
      adminRef.push(twitterHandle);
      accounts.push(twitterHandle);
    }
  };
});
