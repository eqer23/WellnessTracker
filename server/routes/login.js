const express = require("express");
const router = express.Router();
require("../db.js");
const loginPostController = require("../controllers/login.js");

router.post("/login", loginPostController);

module.exports = {
  userLoginRouter: router
};

