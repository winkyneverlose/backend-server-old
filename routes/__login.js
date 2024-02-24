// __login.js
// Route for login requests.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the services
const login = require("../controllers/login");

// Login route
router.post("/", (req, res) => {
  login(req, res);
});

module.exports = router;
