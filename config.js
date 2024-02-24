// config.js
// Configuration for database server

/**
 * Configuration object for the database server.
 * @typedef {Object} Config
 * @property {string} host - The host address of the server.
 * @property {number} port - The port number of the server.
 * @property {string} code_path - The path to the code directory (do not change).
 * @property {string} db_server - The path to the database server.
 */

const config = {
  host: "127.0.0.1",
  port: 8080,
  code_path: __dirname,
  db_server: {
    host: "127.0.0.1",
    port: 1111,
    password: "hR7!zPfT@9k2$Xq8",
  },
  session_secret: "hR7!zPfT@9k2$Xq8",
};

module.exports = config;
