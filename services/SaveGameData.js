// SaveGameData.js
// Service for saving the game data.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// SaveGameData function
function saveGameData(userId, gameData, callback) {
  // Send the request to the API
  http
    .post(`http://${config.db_server.host}:${config.db_server.port}/plot/set`, {
      __dbPassword: config.db_server.password,
      id: userId,
      plot: JSON.stringify(gameData),
    })
    .then((response) => {
      // If the request is successful, return the data
      callback(null, response.data);
    })
    .catch((error) => {
      // If there is an error, return the error
      callback(error, null);
    });
}

module.exports = saveGameData;
