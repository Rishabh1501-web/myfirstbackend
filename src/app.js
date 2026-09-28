const express = require("express");

const app = express();

app.use(express.json());

// ==========================
// Auth Routes
// ==========================
const authRoutes = require("./routes/auth.routes");

app.use("/api/auth", authRoutes);

// ==========================
// Test API
// ==========================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Framwall Backend is running!",
    });
});

module.exports = app;