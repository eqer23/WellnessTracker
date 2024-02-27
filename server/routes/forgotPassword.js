const express = require("express");
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotPassword.js').forgotPasswordController;
const resetPasswordController = require('../controllers/forgotPassword.js').resetPasswordController;
require("../db.js");
const loginPostController = require("../controllers/login.js");
const registrationPostController = require("../controllers/registration.js");
const google = require("../controllers/oauth.js");
const twoFactor = require("../controllers/twoFactorAuth.js")

// auth takes care of all authentication related router calls
router.post("/register", registrationPostController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password/:token", resetPasswordController);
router.post("/login", loginPostController);
router.post("/oauth", google)
router.post("/generate-secret", twoFactor.generateSecret);
router.post("/verify-token/:id", twoFactor.tfaToken);

// this updates database.
router.post("/reset-password/:token", resetPasswordController);

 
module.exports = {
    forgotPasswordRouter: router
  };