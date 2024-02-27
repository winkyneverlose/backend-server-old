// getGame.js
// Controller for getting the game data.

// Load the configuration
const config = require("../config");

// Load the services
const GetGameData = require("../services/GetGameData");

// getGame controller
function getGame(req, res) {
  // Get the user's ID from the request
  const userId = req.session.userId;

  // Call the getGameData service
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
      if (gameData.parameters === undefined || gameData.parameters === null) {
        gameData.parameters = {};
      }
      if (gameData.chapter === undefined || gameData.chapter === null) {
        gameData.chapter = 1;
      }
      if (gameData.next === undefined || gameData.next === null) {
        gameData.next = "index";
      }
      const fs = require("fs");
      fs.readFile(
        `${config.code_path}/game/front/${gameData.chapter}/${gameData.next}.html`,
        "utf8",
        (err, data) => {
          if (err) {
            console.error("Error reading HTML file:", err);
            res.json({
              status: "error",
              code: 1,
              message: "Invalid game data",
            });
          } else {
            res.json({
              status: "success",
              code: 0,
              message: "Game data retrieved",
              data: data,
              parameters: gameData.parameters,
            });
          }
        }
      );
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

module.exports = getGame;
