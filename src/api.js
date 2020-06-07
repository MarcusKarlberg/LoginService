const request = require('request');
var jwt = require('jsonwebtoken');

//TODO handle jwt token - https://www.npmjs.com/package/jsonwebtoken

const createUser = (user, callback) => {
    request(user, (error, response) => {
        console.log(response);
        console.log(error);
        if(error) {
            callback('Unable to create a new account', undefined);
        } else {
            callback(undefined, user);
        }
    });
}

const login = (username, password, callback) => {
    request(user, (error, response) => {
        console.log(response);
        console.log(error);
        if(error) {
            callback('Unable to login', undefined);
        } else {
            callback(undefined, user);
        }
    });
}

module.exports = createUser;
module.exports = login;