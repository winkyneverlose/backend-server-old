// __save_interests_settings.js
// Route for saving the user's interests settings.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the controllers
const saveInterestsSettings = require("../controllers/saveInterestsSettings");

// Save interests settings route
router.post("/", (req, res) => {
  saveInterestsSettings(req, res);
});

module.exports = router;
