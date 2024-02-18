const express = require("express");
const router = express.Router();
require("../db.js");
const registrationPostController = require("../controllers/registration.js");

router.post("/register", registrationPostController);

module.exports = {
  userRegisterRouter: router
};
