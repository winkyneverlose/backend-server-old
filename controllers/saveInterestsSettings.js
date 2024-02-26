// saveInterestsSettings.js
// Controller for saving the user's interests settings.

// Load the configuration
const config = require("../config");

// Load the services
const SaveInterestsSettings = require("../services/SaveInterestsSettings");

// saveInterestsSettings controller
function saveInterestsSettings(req, res) {
  // Get the user's ID and settings from the request
  const userId = req.session.userId;
  const interests = req.body.interests;

  // Call the saveInterestsSettings service
  SaveInterestsSettings(userId, interests, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }

    // If the request is successful, return the data
    res.json(data);
  });
}

module.exports = saveInterestsSettings;
