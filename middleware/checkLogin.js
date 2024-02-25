// checkLogin.js
// Middleware to check if the user is logged in.

// Load the configuration
const config = require("../config");

// check_password function
function check_password(req, res, next) {
  if (req.url === "/register" || req.url === "/login") {
    next();
    return;
  }
  const userId = req.session.userId;
  if (userId) {
    next();
  } else {
    res.json({
      status: "error",
      code: -1,
      message: "Not logged in",
    });
  }
}

module.exports = check_password;
