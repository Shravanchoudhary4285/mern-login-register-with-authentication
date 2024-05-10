const express = require("express");
const router = express.Router();
const { Register, Login, GetUser } = require("../controllers/usercontroller");

const VerifyToken = require("../Middleware/Jwt");

router.post("/register", Register);
router.post("/login", Login);
router.get("/user", VerifyToken, GetUser);

module.exports = router;
