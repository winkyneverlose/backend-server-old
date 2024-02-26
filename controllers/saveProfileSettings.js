// saveProfileSettings.js
// Controller for saving profile settings.

// Load the configuration
const config = require("../config");

// Load the services
const SaveProfileSettings = require("../services/SaveProfileSettings");

// saveProfileSettings controller
function saveProfileSettings(req, res) {
  // Get the user's ID and settings from the request
  const userId = req.session.userId;
  const settings = req.body.settings;

  // Call the saveProfileSettings service
  SaveProfileSettings(userId, settings, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }

    // If the request is successful, return the data
    res.json(data);
  });
}

module.exports = saveProfileSettings;
