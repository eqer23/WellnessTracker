// router.post('/your_endpoint', async (req, res) => {
//     try {
//         // Assuming 'req.body' contains the event data structured as needed for your MongoDB model
//         const event = new EventModel(req.body.currentUser._id, req.body.eventModel);
//         await event.save();

//         res.status(201).send(event);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

const { resolveContent } = require("nodemailer/lib/shared");
const { Event } = require("../models/CalendarEvent");

const getEvents = async (req, res, next) => {
    const { currentUser, eventData } = req.body;
    const newEvent = new Event({
        _userId: currentUser,
        eventData: eventData,
    });

    await newEvent.save();
    console.log("User created new event.");
    return res.status(200).json({ message: "Event created." });
};

const sendEvents = async (req, res, next) => {
    try {
        const { _userId } = await req.query;
        console.log("UserID " + _userId);

        const event = await Event.find({ _userId: _userId }).select([
            "eventData",
        ]);
        console.log(event);
        return res.json(event);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getEvents,
    sendEvents,
};
