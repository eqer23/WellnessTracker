const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
const Connection = async () => {
    try {
        mongoose.connect("mongodb+srv://instafit:instafit@cluster0.bydtuu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB Connected");
    }
    catch(err) {
        console.log("DB Connection error: " + err);
    }
};

Connection();