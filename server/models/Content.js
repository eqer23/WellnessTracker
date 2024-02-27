import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    contentTitle : {
        type: String,
        required: true
    },
    dateCreated : {
        type: Date,
        required: true
    },
    contentType : {
        type: String
    }, 
    contentContents : {
        type: String
    },
    creatorID : {
        type: mongoose.ObjectId,
        required: true
    }
})

const contentModel = mongoose.model('Content',contentSchema)
export {contentModel as Content}