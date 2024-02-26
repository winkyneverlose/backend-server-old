// __update_password.js
// Route for update password requests.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the services
const updatePassword = require("../controllers/updatePassword");

// Update password route
router.post("/", (req, res) => {
  updatePassword(req, res);
});

module.exports = router;
