import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/Admin.js'
import './db.js'

async function AdminAccount() {
    try {
        const adminCount = await Admin.countDocuments();
        if (adminCount === 0) {
            const hashPassword = await bcrypt.hash('123', 10);
            const newAdmin = new Admin({
                username: 'admin',
                password: hashPassword
            })
            await newAdmin.save();
            console.log("Admin created.")
        }
        else {
            console.log("Admin exists.")
        }
    }
    catch(err) {
        console.log("Admin account creation error.")
    }
}

AdminAccount();