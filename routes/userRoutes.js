const express = require("express");
const { registerUser, loginUser, getCurrentUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register",registerUser).post("/login",loginUser);

router.get("/current",getCurrentUser);

module.exports = router;