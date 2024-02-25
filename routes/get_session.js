// get_session.js
// Route for getting the session.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Get session route
router.get("/", (req, res) => {
  if (req.session.userId) {
    res.json({
      status: "success",
      code: 1,
      message: "Logged in",
    });
  } else {
    res.json({
      status: "error",
      code: -1,
      message: "Not logged in",
    });
  }
});

module.exports = router;
