// routes.js
// This is a router file that contains the code to load all the other router files.

const router = require("express").Router();

// Load the routes

// Get session route
router.use("/get_session", require("./get_session"));

// Login route
router.use("/login", require("./__login"));

// Register route
router.use("/register", require("./__register"));

// Get settings route
router.use("/get_settings", require("./__get_settings"));

// Update settings routes
router.use("/save_personal_settings", require("./__save_personal_settings"));

// Save profile settings route
router.use("/save_profile_settings", require("./__save_profile_settings"));

// Save interests settings route
router.use("/save_interests_settings", require("./__save_interests_settings"));

// Update password route
router.use("/update_password", require("./__update_password"));

// Game route
router.use("/game", require("./__game"));

// Load the default route
router.use("*", (req, res) => {
  res.status(404).json({
    message: "Not Found",
    status: "error",
  });
});

module.exports = router;
