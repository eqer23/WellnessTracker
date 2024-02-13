import express from "express";
const router = express.Router();
import forgotPasswordController from '../controllers/forgotPassword.js'
import bcrypt from 'bcrypt'
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
let salt = 10;

router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password/:token", async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.userKey);
        const id = decoded.id;
        const hashPassword = await bcrypt.hash(password, salt)
        await User.findByIdAndUpdate({_id: id},{password: hashPassword})
        return res.status(200).json({ status: true, message: "Password updated." });
    }
    catch(err) {
        console.log(err);
    }
})
 
export { router as forgotPasswordRouter }