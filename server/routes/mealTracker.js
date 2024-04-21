const express = require("express");
const router = express.Router();
require("../db.js");
const mealPostController = require("../controllers/mealTracker.js");

router.post("/meals", mealPostController);

module.exports = {
  mealRouter: router
};
