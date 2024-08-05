const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userControllers");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser).post("/login", loginUser);

router.get("/current", validateToken, getCurrentUser);

module.exports = router;
