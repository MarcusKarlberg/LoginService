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

    //TODO: call from node server
    fetch('http://localhost:8080/users/authenticate', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    }).then((response) => {

        if (response.status !== 200) {
            return response.json();
        }

        response.json().then(json => {
            console.log(json);
        });
        
        console.log('SUCCESS LOGGIN IN...');
    }).catch(({ error }) => {
        $("#error").text(error);
        console.log(error);
    });
});

$("#create-account").click((event) => {
    event.preventDefault();

    createUsername = $("#create-username").val();
    email = $("#create-email").val();
    createPassword = $("#create-password").val();

    fetch('http://localhost:8080/users/create', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: createUsername, password: createPassword, email: email })
    }).then(function (response) {
        if (response.status !== 200) {
            return response.json();
        }
    }).catch(({ error }) => {
        $("#error").text(error);
        console.log(error);
    });
});