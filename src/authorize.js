export default () => {
  if ( localStorage["firebase:session::team-tweets"] ) {
    return;
  }

  var ref = new Firebase("https://team-tweets.firebaseio.com/");
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      alert("Login Failed!", error);
    } else {
      alert("Authenticated successfully with payload:", authData);
      ref.child("users").push(authData);
    }
  });
};
