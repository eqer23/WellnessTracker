const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    _userId: {
        type: String,
    },
    totalScore: {
        type: Number,
    },
    description: {
        type: String,
    },
});

const eventModel = mongoose.model("WellnessForm", eventSchema);

module.exports = {
    Event: eventModel,
};
