// login.js
// This is a controller file that contains the code to handle login requests.

// Load the configuration
const config = require("../config");

// Load the services
const Login = require("../services/Login");

// Login controller
function login(req, res) {
  // If the user is already logged in, return a message
  if (req.session.userId) {
    res.json({
      status: "success",
      code: 0,
      message: "Already logged in",
      userId: req.session.userId,
    });
    return;
  }

  // Get the username and password from the request
  const username = req.body.username.toLowerCase();
  const password = req.body.password;
  // Call the login service
  Login(username, password, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }

    // If the login is successful, set the session
    req.session.userId = data.id;
    // Return the data
    res.json(data);
  });
}

module.exports = login;
