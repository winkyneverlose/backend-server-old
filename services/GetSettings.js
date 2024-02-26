// GetSettings.js
// Service to get the user settings.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// GetSettings function
function getSettings(userId, callback) {
  // Make a GET request to the settings API
  http
    .post(`http://${config.db_server.host}:${config.db_server.port}/user/get`, {
      __dbPassword: config.db_server.password,
      id: userId,
    })
    .then((response) => {
      if (response.data.status === "success") {
        // If the request is successful, return the settings
        let settings = {};
        settings.user = response.data;
        http
          .post(
            `http://${config.db_server.host}:${config.db_server.port}/auth/get`,
            {
              __dbPassword: config.db_server.password,
              id: userId,
            }
          )
          .then((response) => {
            if (response.data.status === "success") {
              settings.auth = response.data;
              http
                .post(
                  `http://${config.db_server.host}:${config.db_server.port}/interests/get`,
                  {
                    __dbPassword: config.db_server.password,
                    id: userId,
                  }
                )
                .then((response) => {
                  if (response.data.status === "success") {
                    if (!response.data.interests) {
                      response.data.interests = [];
                    } else if (
                      Array.isArray(JSON.parse(response.data.interests))
                    ) {
                      response.data.interests = JSON.parse(
                        response.data.interests
                      );
                    } else {
                      response.data.interests = [];
                    }
                    settings.interests = response.data;
                    callback(null, settings);
                  } else {
                    callback(response.data, null);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              callback(response.data, null);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // If the request is not successful, return an error
        callback(response.data, null);
      }
    })
    .catch((error) => {
      // Log the error
      console.log(error);
    });
}

module.exports = getSettings;
