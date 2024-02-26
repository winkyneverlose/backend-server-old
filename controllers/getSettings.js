// getSettings.js
// Controller for the getSettings service.

// Load the configuration
const config = require("../config");

// Load the services
const getSettings = require("../services/GetSettings");

// getSettings controller
function get_settings(req, res) {
  // Call the getSettings service
  getSettings(req.session.userId, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }

    // If the request is successful, return the data
    res.json(data);
  });
}

module.exports = get_settings;
