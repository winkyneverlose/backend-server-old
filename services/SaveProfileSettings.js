// SaveProfileSettings.js
// Service to handle saving profile settings requests.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// SaveProfileSettings function
function saveProfileSettings(userId, settings, callback) {
  // Check if the username is valid（不能为空，开头结尾不能为空格，不能有连续两个的空格，不能为空格）
  if (
    !settings.username ||
    settings.username[0] === " " ||
    settings.username[settings.username.length - 1] === " " ||
    settings.username.includes("  ") ||
    settings.username === " "
  ) {
    callback(
      {
        status: "error",
        code: 1,
        message: "Invalid username",
      },
      null
    );
    return;
  }

  // Check if first name and last name is valid（不能为空，不能有空格）
  if (
    !settings.firstName ||
    !settings.lastName ||
    settings.firstName.includes(" ") ||
    settings.lastName.includes(" ")
  ) {
    callback(
      {
        status: "error",
        code: 2,
        message: "Invalid name",
      },
      null
    );
    return;
  }

  // Check if gender is valid（只能是male，female，或unknown）
  if (
    settings.gender !== "male" &&
    settings.gender !== "female" &&
    settings.gender !== "unknown"
  ) {
    callback(
      {
        status: "error",
        code: 3,
        message: "Invalid gender",
      },
      null
    );
    return;
  }

  // Make a POST request to the settings API
  http
    .post(`http://${config.db_server.host}:${config.db_server.port}/user/get`, {
      __dbPassword: config.db_server.password,
      id: userId,
    })
    .then((response) => {
      if (response.data.status === "success") {
        http
          .post(
            `http://${config.db_server.host}:${config.db_server.port}/user/update`,
            {
              __dbPassword: config.db_server.password,
              id: userId,
              username: settings.username,
              firstName: settings.firstName,
              lastName: settings.lastName,
              updatedAt: Date.now(),
              gender: settings.gender,
              birthday: settings.birthday,
              bio: settings.bio,
              educated: settings.educated,
              language: settings.language,
              colorTheme: "light",
              avatarUrl: response.data.data.avatar_url,
              coins: response.data.data.coins,
              customizeUrl1: settings.customizeUrl1,
              customizeUrl2: settings.customizeUrl2,
              customizeUrl3: settings.customizeUrl3,
              customizeUrl4: settings.customizeUrl4,
            }
          )
          .then((response) => {
            if (response.data.status === "success") {
              callback(null, response.data);
            } else {
              callback(response.data, null);
            }
          });
      }
    });
}

module.exports = saveProfileSettings;
