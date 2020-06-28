const request = require('request');

const login = (username, password, callback) => {
    const url = 'http://localhost:8080/users/authenticate';

    request.post({url:url, form: {username, password}}, function(err, response, body){
        if(response.status !== 200) {
            return response.json();
        }

        callback(undefined, {
            jwt: body.getJwt
        });
    });
}

module.exports = login;