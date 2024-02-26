// UpdatePassword.js
// Service to handle password update requests.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// UpdatePassword function
function updatePassword(userId, password, callback) {
  // Check if the password is valid（密码长度大于6）
  if (password.length < 6) {
    callback(
      {
        status: "error",
        code: 1,
        message: "Invalid password",
      },
      null
    );
    return;
  }

  // Make a POST request to the update password API
  http
    .post(
      `http://${config.db_server.host}:${config.db_server.port}/auth/update/password`,
      {
        __dbPassword: config.db_server.password,
        id: userId,
        passwordHash: password,
      }
    )
    .then((response) => {
      if (response.data.status === "success") {
        // If the password update is successful, return the success message
        callback(null, response.data);
      } else {
        // If the password update is not successful, return an error
        callback(response.data, null);
      }
    })
    .catch((error) => {
      // Log the error
      console.log(error);
    });
}

module.exports = updatePassword;
