const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _userId: {
        type: String,
    },
    tag: {
        type: String,
    },
});

const eventModel = mongoose.model("WorkoutForm", eventSchema);

module.exports = {
    Event: eventModel,
};
