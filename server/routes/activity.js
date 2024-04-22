const express = require("express");
const router = express.Router();
require("../db.js");
const activityPostController = require("../controllers/activity.js");

router.post("/activity", activityPostController);

module.exports = {
  activityRouter: router
};
