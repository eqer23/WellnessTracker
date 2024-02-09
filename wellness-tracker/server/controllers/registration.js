import { Admin } from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const salt = 10;

const registrationPostController = async (req, res) => {
    const body = req.body;
    const hashPassword = await bcrypt(body.password)

    const newAdmin = new Admin({
        username: 'admin',
        password: hashPassword
    })
    await newAdmin.save();
    console.log('Admin Created.');  
}