const { resolveContent } = require("nodemailer/lib/shared");
const { Event } = require("../models/WellnessForm");

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

module.exports = {
    workoutPreference,
};
