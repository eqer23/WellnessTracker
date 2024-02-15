import { models } from "mongoose";
import {User} from "../models.User.js"


const registrationPostController = async (req, res) => {
    const { email, firstName, lastName, role } = req.body;

    
    const user = await User.findOne({ email });
}