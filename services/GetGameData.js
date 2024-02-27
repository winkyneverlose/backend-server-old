// GetGameData.js
// Service for getting the game data.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// GetGameData function
function getGameData(userId, callback) {
  // Make a GET request to the game API
  http
    .post(`http://${config.db_server.host}:${config.db_server.port}/plot/get`, {
      __dbPassword: config.db_server.password,
      id: userId,
    })
    .then((response) => {
      if (response.data.status === "success") {
        // If the request is successful, return the game data
        callback(null, response.data);
      } else {
        callback(response.data, null);
      }
    })
    .catch((error) => {
      // If there is an error, return the error
      callback(error, null);
    });
}

module.exports = getGameData;
