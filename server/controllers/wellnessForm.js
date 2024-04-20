const { resolveContent } = require("nodemailer/lib/shared");
const { Event } = require("../models/WellnessForm");

const wellnessScore = async (req, res, next) => {
    const { total, description } = req.body;

    try {
        const newEvent = new Event({
            totalScore: total,
            description: description,
        });

        await newEvent.save();
    } catch (e) {
        console.log(e);
    }

    console.log("User filled out wellness form.");
    return res.status(200).json({ message: "wellness form results saved." });
};

module.exports = {
    wellnessScore,
};
