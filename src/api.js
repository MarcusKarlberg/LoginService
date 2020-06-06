const request = require('request');

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