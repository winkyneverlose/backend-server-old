// __game.js
// Route for the game page.

// Load the configuration
const config = require("../config");

// Load the express module
const express = require("express");

// Load the router
const router = express.Router();

// Load the controllers
const getGame = require("../controllers/getGame");
const getJs = require("../controllers/getJs");
const saveGame = require("../controllers/saveGame");

// Game route
router.get("/get", (req, res) => {
  getGame(req, res);
});

router.get("/get/js", (req, res) => {
  getJs(req, res);
});

router.post("/set", (req, res) => {
  saveGame(req, res);
});

module.exports = router;
