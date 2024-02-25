// server.js
// Backend server for the application.

// Load the configuration
const config = require("./config");

// Load the server
const express = require("express");
const app = express();

// Use the cors middleware
const cors = require("cors");
app.use(cors());

// Load the middleware

// Use body-parser middleware
const bodyParser = require("body-parser");
app.use(
  bodyParser.json({
    limit: "10mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
  })
);

// Use the express-session middleware
const session = require("express-session");
app.use(
  session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false,
  })
);

// Use the checkLogin middleware
const check_login = require(config.code_path + "/middleware/checkLogin");
app.use(check_login);

// Load the routes
const routes = require(config.code_path + "/routes/routes");
app.use("/", routes);

// Server class
class Server {
  static start(host = config.host, port = config.port) {
    // Start the server with HTTPS
    app.listen(port, host, () => {
      console.log(
        `可喵大人の控制 后端服务器 is running on host ${host}, port ${port}`,
        ` | ${host}:${port}`
      );
    });

    process.on("exit", () => {
      console.log("Server stopped...");
    });
  }

  static stop() {
    // Stop the server
    app.close(() => {
      console.log("Server stopped...");
    });
  }
}

Server.start();

module.exports = Server;
