const express = require("express");
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotPassword.js').forgotPasswordController;
const resetPasswordController = require('../controllers/forgotPassword.js').resetPasswordController;
const bcrypt = require('bcrypt');
const { User } = require("../models/User.js");
const jwt = require("jsonwebtoken");

let salt = 10;

router.post("/forgot-password", forgotPasswordController);

// this updates database.
router.post("/reset-password/:token", resetPasswordController);

 
module.exports = {
    forgotPasswordRouter: router
  };