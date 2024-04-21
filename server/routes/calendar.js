const express = require("express");
const EventModel = require("../models/CalendarEvent.js");
const router = express.Router();
require("../db.js");
const {
    getEvents,
    sendEvents,
    deleteEvent,
    changeEvent,
} = require("../controllers/calendar.js");

router.post("/getevents", getEvents);
router.get("/sendevents", sendEvents);
router.post("/deleteevent", deleteEvent);
router.post("/updateevent", changeEvent);

module.exports = {
    calendarRouter: router,
};

// Endpoint for creating a new event
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

// module.exports = router;
