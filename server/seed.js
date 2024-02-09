import bcrypt from 'bcrypt'
import { User } from './models/User.js'
import './db.js'

async function userAccount() {
    try {
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            const hashPassword = await bcrypt.hash('123', 10);
            const newUser = new User({
                username: 'user',
                password: hashPassword
            })
            await newUser.save();
            console.log("User created.")
        }
        else {
            console.log("User exists.")
        }
    }
    catch(err) {
        console.log("User account creation error.")
    }
}

userAccount();