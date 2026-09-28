const authService = require("../services/auth.service");

// ==========================
// Signup
// ==========================
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters",
            });
        }

        const user = await authService.signup({
            name,
            email,
            password,
        });

        return res.status(201).json({
            success: true,
            message: "Signup successful",
            data: user,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// ==========================
// Login
// ==========================
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const result = await authService.login({
            email,
            password,
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};


// ==========================
// Get Profile
// ==========================
const getProfile = async (req, res) => {
    try {
        const user = await authService.getProfile(
            req.user.userId
        );

        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            data: user,
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    signup,
    login,
    getProfile,
};