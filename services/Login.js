// Login.js
// Service to handle login requests.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// Login function
function login(username, password, callback) {
  // Make a POST request to the login API
  http
    .post(
      `http://${config.db_server.host}:${config.db_server.port}/auth/login`,
      {
        __dbPassword: config.db_server.password,
        email: username,
        username: username,
        id: username,
        passwordHash: password,
      }
    )
    .then((response) => {
      if (response.data.status === "success") {
        // If the login is successful, set the session
        callback(null, response.data);
      } else {
        // If the login is not successful, return an error
        callback(response.data, null);
      }
    })
    .catch((error) => {
      // Log the error
      console.log(error);
    });
}

module.exports = login;
