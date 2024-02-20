import { models } from "mongoose";
import {User} from "../models.User.js"


const searchUsersPostController = async (req, res) => {
    const { email, firstName, lastName, role } = req.body;

    
    const user = await User.findOne({ email });
}