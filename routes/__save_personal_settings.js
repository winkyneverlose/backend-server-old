// __save_personal_settings.js
// Route for saving the user's personal settings.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the services
const savePersonalSettings = require("../controllers/savePersonalSettings");

// Save personal settings route
router.post("/", (req, res) => {
  savePersonalSettings(req, res);
});

module.exports = router;
