const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _userId: {
        type: String,
    },
    eventData: {
        type: Schema.Types.Mixed,
        default: {},
    },
});

const eventModel = mongoose.model("Event", eventSchema);

module.exports = {
    Event: eventModel,
};
