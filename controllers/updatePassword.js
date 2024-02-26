// updatePassword.js
// Controller for updating a user's password.

// Load the configuration
const config = require("../config");

// Load the services
const UpdatePassword = require("../services/UpdatePassword");

// updatePassword controller
function updatePassword(req, res) {
  // Get the user's ID and new password from the request
  const userId = req.session.userId;
  const password = req.body.password;

  // Call the updatePassword service
  UpdatePassword(userId, password, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }

    // If the request is successful, return the data
    res.json(data);
  });
}

module.exports = updatePassword;
