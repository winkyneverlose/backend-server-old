// register.js
// Controller for registering a new user.

// Load the configuration
const config = require("../config");

// Load the services
const Register = require("../services/Register");

// Register controller
function register(req, res) {
  // Get the username, email, and password from the request
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  // Call the register service
  Register(username, email, password, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }

    // If the registration is successful, return the data
    res.json(data);
  });
}

module.exports = register;
