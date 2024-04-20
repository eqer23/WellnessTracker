const express = require("express");
const EventModel = require("../models/WellnessForm.js");
const router = express.Router();
require("../db.js");
const { wellnessScore } = require("../controllers/wellnessForm.js");

// router.get("/getWellnessScore", getWellnessScore);
router.post("/wellnessScore", wellnessScore);

module.exports = {
    wellnessRouter: router,
};
