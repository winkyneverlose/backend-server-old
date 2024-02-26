// SaveInterestsSettings.js
// Service for saving the user's interests settings.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// SaveInterestsSettings function
function saveInterestsSettings(userId, interests, callback) {
  // Convert the interests to a JSON string
  interests = JSON.stringify(interests);

  // Send the request to the API
  http
    .post(
      `http://${config.db_server.host}:${config.db_server.port}/interests/set`,
      {
        __dbPassword: config.db_server.password,
        id: userId,
        interests: interests,
      }
    )
    .then((response) => {
      // If the request is successful, return the data
      callback(null, response.data);
    })
    .catch((error) => {
      // If there is an error, return the error
      callback(error, null);
    });
}

module.exports = saveInterestsSettings;
