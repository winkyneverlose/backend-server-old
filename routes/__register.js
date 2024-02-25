// __register.js
// Route for register requests.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the services
const register = require("../controllers/register");

// Register route
router.post("/", (req, res) => {
  register(req, res);
});

module.exports = router;
