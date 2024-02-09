import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // role: {type: String}
})

const userModel = mongoose.model('User',userSchema)
export {userModel as User}