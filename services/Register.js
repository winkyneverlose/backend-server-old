// Register.js
// Service for registering a new user.

// Load the configuration
const config = require("../config");

// Load the axios module
const axios = require("axios");
const http = axios.create();

// Register function
function register(username, email, password, callback) {
  // Check if the username, email, and password are valid
  if (!username || !email || !password) {
    callback(
      {
        status: "error",
        code: 3,
        message: "Invalid input",
      },
      null
    );
    return;
  }

  // Check if the username id valid（中间不能有空格，只能是字母数字下划线，少于15字符，大于4字符）
  if (!/^\w{4,15}$/.test(username)) {
    callback(
      {
        status: "error",
        code: 4,
        message: "Invalid username",
      },
      null
    );
    return;
  }

  // Check if the email is valid（邮箱格式）
  if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
    callback(
      {
        status: "error",
        code: 5,
        message: "Invalid email",
      },
      null
    );
    return;
  }

  // Check if the password is valid（密码长度大于6）
  if (password.length < 6) {
    callback(
      {
        status: "error",
        code: 6,
        message: "Invalid password",
      },
      null
    );
    return;
  }

  // Make a POST request to the register API
  http
    .post(
      `http://${config.db_server.host}:${config.db_server.port}/auth/create`,
      {
        __dbPassword: config.db_server.password,
        email: email,
        username: username,
        id: username,
        passwordHash: password,
        status: "inactive",
        createdTimestamp: Date.now(),
      }
    )
    .then((response) => {
      if (response.data.status === "success") {
        // If the registration is successful, return the data
        callback(null, response.data);
      } else {
        // If the registration is not successful, return an error
        callback(response.data, null);
      }
    })
    .catch((error) => {
      // Log the error
      console.log(error);
    });
}

module.exports = register;
