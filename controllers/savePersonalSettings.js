// savePersonalSettings.js
// Controller for saving the user's personal settings.

// Load the configuration
const config = require("../config");

// Load the services
const SavePersonalSettings = require("../services/SavePersonalSettings");

// savePersonalSettings controller
function savePersonalSettings(req, res) {
  // Get the user's settings from the request
  const settings = req.body.settings;
  // Call the savePersonalSettings service
  SavePersonalSettings(req.session.userId, settings, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }

    // If the request is successful, return the data
    res.json(data);
  });
}

module.exports = savePersonalSettings;
