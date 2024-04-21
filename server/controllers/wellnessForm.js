const { resolveContent } = require("nodemailer/lib/shared");
const { Event } = require("../models/WellnessForm");

// const getWellnessScore = async (req, res, next) => {
//     const { total, description } = req.body;

//     try {
//         const { _userId } = await req.query;
//         console.log("UserID " + _userId);

//         const event = await Event.find({ _userId: _userId }).select([
//             total,
//             description,
//         ]);
//         console.log(event);
//         return res.json(event);
//     } catch (err) {
//         console.log(err);
//     }
// };
const getWellnessScore = async (req, res) => {
    try {
        const { _userId } = req.query; // Assuming userID is passed as a query parameter
        console.log("UserID " + _userId);

        const event = await Event.findOne({ _userId: _userId }).select(
            "totalScore description"
        ); // Use findOne to get a single document
        if (!event) {
            return res
                .status(404)
                .json({ message: "No wellness record found for this user." });
        }
        console.log(event);
        return res.json({
            score: event.totalScore,
            description: event.description,
        });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Error retrieving wellness score" });
    }
};

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
    getWellnessScore,
    wellnessScore,
};
