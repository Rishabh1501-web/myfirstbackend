const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Signup
router.post("/signup", authController.signup);

// Login
router.post("/login", authController.login);

// Profile
router.get(
    "/profile",
    authMiddleware,
    authController.getProfile
);

module.exports = router;