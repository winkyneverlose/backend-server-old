// __save_profile_settings.js
// Route for saving profile settings requests.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the controllers
const saveProfileSettings = require("../controllers/saveProfileSettings");

// Save profile settings route
router.post("/", (req, res) => {
  saveProfileSettings(req, res);
});

module.exports = router;
