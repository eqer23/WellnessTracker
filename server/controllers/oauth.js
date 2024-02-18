const { User } = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const google = async (req, res) => {
    console.log('OAuth in process')
    console.log('Using this email: ' + req.body.email);
    console.log('Using this Role: ' + req.body.role)
    try {
        const user = User.findOne({ email: req.body.email })
        if (user.email == req.body.email) {
            console.log(user.email)
            const token = jwt.sign({ id: user._id }, process.env.userKey);
            console.log("Existing user found, logging in")
            return res.cookie("access_token", token, { httpOnly: true }).status(200);
        }
        else {
            const placeholderPassword = 'test';
            const hashPassword = await bcrypt.hash(placeholderPassword, 10);
            const newUser = new User({
                email: req.body.email,
                password: hashPassword,
                role: req.body.role
            });

            await newUser.save();
            console.log("New user created from OAuth2")
            const token = jwt.sign({ id: newUser._id }, process.env.userKey);
            return res.cookie("access_token", token, { httpOnly: true }).status(200);
        }
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = google;