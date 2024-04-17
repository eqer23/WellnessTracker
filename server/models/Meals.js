const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
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
        
    },
    tag : {
        type: String
    }
})

const mealModel = mongoose.model('Meal', mealSchema)
module.exports = {
    Meal: mealModel
};