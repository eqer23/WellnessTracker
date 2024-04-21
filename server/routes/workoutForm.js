const express = require("express");
const EventModel = require("../models/WorkoutForm.js");
const router = express.Router();
require("../db.js");
const { workoutPreference } = require("../controllers/workoutForm.js");

router.post("/workoutPreference", workoutPreference);

module.exports = {
    wellnessRouter: router,
};
