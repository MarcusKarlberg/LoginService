console.log('Client side javascript file is loaded');

var username = '';
var password = '';

$( "#login").click((event) => {
    event.preventDefault();

    username = $("#username").val();
    password = $("#password").val()

    console.log('LOGIN...');
    console.log('usr: '+username);
    console.log('password: ' + password);
  });

var createUsername = '';
var email = '';
var createPassword = '';

  $( "#create-account").click((event) => {
    event.preventDefault();

    createUsername = $("#create-username").val();
    email = $("#create-email").val();
    createPassword = $("#create-password").val();

    console.log('CREATING ACCOUNT...');
    console.log('usr: '+createUsername);
    console.log('email: '+email);
    console.log('password: ' + createPassword);
  });