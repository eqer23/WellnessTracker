const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    contentTitle : {
        type: String,
        required: true
    },
    dateCreated : {
        type: Date,
        required: false
    },
    description : {
        type: String
    },
    creatorID : {
        type: mongoose.ObjectId,
        
    },
    tag : {
        type: String
    }
})

const activityModel = mongoose.model('Activity', activitySchema)
module.exports = {
    Activity: activityModel
};