const { Event } = require("./models/CalendarEvent.js");
require("./db.js");

async function userEvent() {
    const newEvent = new Event({
        eventData: null,
    });
    await newEvent.save();
    try {
        const newEvent = new Event({
            eventData: 1,
        });
        await newEvent.save();
    } catch (err) {
        console.log("Error.");
    }
}

userEvent();
