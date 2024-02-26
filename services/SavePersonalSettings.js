// SavePersonalSettings.js
// Service for saving the user's personal settings.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// SavePersonalSettings function
function savePersonalSettings(userId, settings, callback) {
  // Username to lowercase
  settings.username = settings.username.toLowerCase();

  // Check if the avatar is valid
  if (!settings.avatarUrl) {
    callback(
      {
        status: "error",
        code: 1,
        message: "Invalid avatar",
      },
      null
    );
    return;
  }

  // Check if the username id valid（中间不能有空格，只能是字母数字下划线，少于15字符，大于4字符）
  if (!/^\w{4,15}$/.test(settings.username)) {
    callback(
      {
        status: "error",
        code: 2,
        message: "Invalid username",
      },
      null
    );
    return;
  }

  // Check if the email is valid（邮箱格式）
  if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(settings.email)) {
    callback(
      {
        status: "error",
        code: 3,
        message: "Invalid email",
      },
      null
    );
    return;
  }

  // Make a POST request to the settings API
  http
    .post(
      `http://${config.db_server.host}:${config.db_server.port}/user/update/avatar`,
      {
        __dbPassword: config.db_server.password,
        id: userId,
        avatarUrl: settings.avatarUrl,
      }
    )
    .then((response) => {
      if (response.data.status === "success") {
        http
          .post(
            `http://${config.db_server.host}:${config.db_server.port}/auth/update/username`,
            {
              __dbPassword: config.db_server.password,
              id: userId,
              newUsername: settings.username,
            }
          )
          .then((response) => {
            if (response.data.status === "success") {
              http
                .post(
                  `http://${config.db_server.host}:${config.db_server.port}/auth/update/email`,
                  {
                    __dbPassword: config.db_server.password,
                    id: userId,
                    newEmail: settings.email,
                  }
                )
                .then((response) => {
                  if (response.data.status === "success") {
                    callback(null, response.data);
                  } else {
                    if (response.data.code === 2) {
                      callback(
                        {
                          status: "error",
                          code: 5,
                          message: "email already exists",
                        },
                        null
                      );
                    } else {
                      callback(response.data, null);
                    }
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              if (response.data.code === 2) {
                callback(
                  {
                    status: "error",
                    code: 4,
                    message: "username already exists",
                  },
                  null
                );
              } else {
                callback(response.data, null);
              }
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
}

module.exports = savePersonalSettings;
