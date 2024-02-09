import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    try {
        mongoose.connect(process.env.MONGO)
        console.log("DB Connected")
    }
    catch(err) {
        console.log("DB Connection error: " + err)
    }
};

Connection();