const express = require("express");
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotPassword.js').forgotPasswordController;
const resetPasswordController = require('../controllers/forgotPassword.js').resetPasswordController;

router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password/:token", resetPasswordController);

module.exports = {
  forgotPasswordRouter: router
};