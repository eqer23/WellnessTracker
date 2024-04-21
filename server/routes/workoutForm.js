const express = require("express");
const EventModel = require("../models/WorkoutForm.js");
const router = express.Router();
require("../db.js");
const {
    workoutPreference,
    getWorkoutPreference,
} = require("../controllers/workoutForm.js");

router.post("/workoutPreference", workoutPreference);
router.get("/getWorkoutPreference", getWorkoutPreference);

module.exports = {
    workoutRouter: router,
};
