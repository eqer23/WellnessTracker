const express = require("express");
const router = express.Router();
require("../db.js");
const uploadPostController = require("../controllers/uploadContent.js");

router.post("/upload", uploadPostController);

module.exports = {
  uploadRouter: router
};
