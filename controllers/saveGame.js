// saveGame.js
// Controller for saving the game data.

// Load the configuration
const config = require("../config");

// Load the services
const GetGameData = require("../services/GetGameData");
const SaveGameData = require("../services/SaveGameData");

// saveGame controller
function saveGame(req, res) {
  // Get the user's ID and game data from the request
  const userId = req.session.userId;
  const choose = req.body.choose;
  GetGameData(userId, (error, data) => {
    if (error) {
      // If there is an error, return the error
      res.json(error);
      return;
    }
    if (data.plot === undefined || data.plot === null || data.plot === "") {
      data.plot = "{}";
    }
    try {
      const gameData = JSON.parse(data.plot);
      let Script;
      if (gameData.parameters === undefined || gameData.parameters === null) {
        gameData.parameters = {};
      }
      if (gameData.chapter === undefined || gameData.chapter === null) {
        gameData.chapter = 1;
      }
      if (gameData.next) {
        Script = require(`../game/back/${gameData.chapter}/${gameData.next}.js`);
      } else {
        Script = require(`../game/back/${gameData.chapter}/index.js`);
      }
      Script(gameData, choose, (error, data) => {
        if (error) {
          // If there is an error, return the error
          res.json(error);
          return;
        }
        SaveGameData(userId, data, (error, data) => {
          if (error) {
            // If there is an error, return the error
            res.json(error);
            return;
          }
          // If the request is successful, return the data
          res.json({
            status: "success",
            code: 0,
            message: "Game data saved",
          });
        });
      });
    } catch (e) {
      res.json({
        status: "error",
        code: 1,
        message: "Invalid game data",
      });
      return;
    }
  });
}

module.exports = saveGame;
