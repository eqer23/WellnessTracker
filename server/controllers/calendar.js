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

const deleteEvent = async (req, res, next) => {
    // const result = await Event.deleteOne({
    //     _id: eventData._id,
    //     _userId: currentUser,
    // });
    try {
        const { currentUser, eventData } = await req.body;
        // Assuming eventData contains an _id field which is the event's identifier in the database
        // const result = await Event.deleteOne({
        //     _id: eventData._id,
        //     // _userId: currentUser,
        // });
        console.log("eData: ", JSON.stringify(eventData));
        const result = await Event.deleteOne({ "eventData.Id": eventData });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Event not found." });
        }

        console.log("Event deleted.");
        return res.status(200).json({ message: "Event deleted successfully." });
    } catch (error) {
        console.error("Error deleting event:", error);
        return res.status(500).json({ message: "Failed to delete event." });
    }
};

// const changeEvent = async (req, res, next) => {
//     try {
//         const { currentUser, eventData } = await req.body;
//         // Assuming eventData contains an _id field which is the event's identifier in the database
//         // const result = await Event.deleteOne({
//         //     _id: eventData._id,
//         //     // _userId: currentUser,
//         // });
//         console.log("eData: ", JSON.stringify(eventData));
//         // const result = await Event.findByIdAndUpdate({
//         //     "eventData.Id": eventData,
//         // });
//         const result = await Event.findByIdAndUpdate(eventData._id, eventData, {
//             new: true,
//         }); // `new: true` returns the updated document.

//         if (!result) {
//             return res.status(404).json({ message: "Event not found." });
//         }

//         console.log("Event changes.");
//         return res
//             .status(200)
//             .json({ message: "Event changed successfully." } + result);
//     } catch (error) {
//         console.error("Error change event:", error);
//         return res.status(500).json({ message: "Failed to change event." });
//     }
// };

const changeEvent = async (req, res, next) => {
    try {
        const { eventData } = req.body;

        console.log("inside backend change event");
        console.log("change data : ", JSON.stringify(eventData));

        // const result = await Event.updateOne({ "eventData.Id": eventData.Id });
        const result = await Event.findOneAndUpdate(
            { "eventdata.Id": eventData.Id },
            { eventdata: eventData }
        );

        // const result = await Event.find(eventData.Id, eventData, {});

        console.log("Event updated.");
        return res
            .status(200)
            .json({ message: "Event updated successfully.", event: result });
    } catch (error) {
        console.error("Error updating event:", error);
        return res.status(500).json({ message: "Failed to update event." });
    }
};

module.exports = {
    getEvents,
    sendEvents,
    deleteEvent,
    changeEvent,
};
