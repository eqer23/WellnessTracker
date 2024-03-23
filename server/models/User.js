const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        // required: true
    },
    lastName : {
        type: String,
        // required: true
    },
    email : { // changed from `username` since the email will be the username
        type: String, 
        required: true, 
        unique: true
    },

    password : {
        type: String, 
        required: true
    },

    role : {
        type: String, 
        required: true
    },

    gender : {
        type : String
    }, 

    city : {
        type : String
    }, 

    state : {
        type : String
    },

    specialty : {
        type : String
    }    
}); 

const userModel = mongoose.model('User',userSchema)
module.exports = {
    User: userModel
};