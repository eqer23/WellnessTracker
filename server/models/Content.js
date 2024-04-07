const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    contentTitle : {
        type: String,
        required: true
    },
    dateCreated : {
        type: Date,
        required: false
    },
    contentType : {
        type: String
    }, 
    contentContents : {
        type: String
    },
    description : {
        type: String
    },
    creatorID : {
        type: mongoose.ObjectId,
        
    }
})

const contentModel = mongoose.model('Content',contentSchema)
module.exports = {
    Content: contentModel
};