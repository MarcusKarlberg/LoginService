console.log('Client side javascript file is loaded');

var username = '';
var password = '';
var createUsername = '';
var email = '';
var createPassword = '';

$("#login").click((event) => {
    event.preventDefault();

    username = $("#username").val();
    password = $("#password").val();

    fetch('http://localhost:8080/users/'+username, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: password})
    }).then((response) => { 

        if(response.status !== 200) {
            return response.json();
        } 
        console.log('SUCESS LOGGIN IN...');

    }).then(({error}) => {
        $("#error").text(error);
        console.log(error);
    });
});

$("#create-account").click((event) => {
    event.preventDefault();

    createUsername = $("#create-username").val();
    email = $("#create-email").val();
    createPassword = $("#create-password").val();

    fetch('http://localhost:8080/users', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: createUsername, password: createPassword, email: email })
    }).then(function (response) {
        if(response.status !== 200) {
            return response.json();
        } 
    }).then(({error}) => {
        $("#error").text(error);
        console.log(error);
    });
});