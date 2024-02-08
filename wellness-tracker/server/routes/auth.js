import express from 'express';
import { Admin } from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const router = express.Router()
import '../db.js'


router.post('/login', async (req, res) => {
    const {username, password, role} = req.body;
    if (role === 'admin') {
        const admin = await Admin.findOne({username})
        if (!admin) {
            res.json({message: "Admin not registered."})
        }
        const validPassword = await bcrypt.compare(password, admin.password)
        
        if (!validPassword) {
            res.json({message: "Password invalid."})
        }
        const token = jwt.sign({username: admin.username, role: 'admin'},process.env.ADMINKEY)
        res.cookie('token',token,{httpOnly: true, secure: true})
        return res.json({login:true,role:'admin'})
    }
    else if (role === 'client'){

    }
    else {

    }
});

export {router as AdminRouter};