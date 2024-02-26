// __get_settings.js
// Route for getting the user settings.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the services
const getSettings = require("../controllers/getSettings");

// Get settings route
router.post("/", (req, res) => {
  getSettings(req, res);
});

module.exports = router;
