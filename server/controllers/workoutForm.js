const { resolveContent } = require("nodemailer/lib/shared");
const { Event } = require("../models/WorkoutForm");

const workoutPreference = async (req, res, next) => {
    const { _userId, tag } = req.body;

    try {
        const newEvent = new Event({
            _userId: _userId,
            tag: tag,
        });

        await newEvent.save();
    } catch (e) {
        console.log(e);
    }

    console.log("User filled out workout form.");
    return res.status(200).json({ message: "workout form results saved." });
};

const getWorkoutPreference = async (req, res, next) => {
    try {
        const { _userId } = req.query; // Assuming userID is passed as a query parameter
        // console.log("UserID " + _userId);

        const event = await Event.findOne({ _userId: _userId }).select(["tag"]);

        if (!event) {
            return res
                .status(404)
                .json({ message: "No workout record found for this user." });
        }
        console.log(event);
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Error retrieving workout score" });
    }
};

module.exports = {
    workoutPreference,
    getWorkoutPreference,
};
