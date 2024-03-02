const { User } = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * OAuth2 Google logic.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const google = async (req, res) => {
    console.log('OAuth in process')
    console.log('Using this email: ' + req.body.email);
    console.log('Using this Role: ' + req.body.role)
    if (req.body.role == '') {
        return res.status(400).json({ message: "To use OAuth2 you must pick a role to sign in as." });
    }

    const user = await User.findOne({ email: req.body.email })

    if (user) {
        if (user.role != req.body.role) {
            return res.status(400).json({ message: "This user does not have this role." });
        }
        const token = jwt.sign(
            { id: user._id },
            process.env.userKEY
        );
        console.log("Existing user found with OAuth2: " + req.body.email + " logging in")

        // res.cookie("session-token", token);
        return res.json({ login: true, role: req.body.role, token: token });
    }
    else {
        // temp password for user
        const placeholderPassword = 'test';
        const hashPassword = await bcrypt.hash(placeholderPassword, 10);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
            role: req.body.role
        });

        await newUser.save();
        console.log("New user created from OAuth2")
        const token = jwt.sign(
            { id: newUser._id, role: req.body.role },
            process.env.userKEY
        );
        // this is the cookie that will be used for frontend
        // res.cookie("session-token", token);
        return res.json({ login: true, role: req.body.role, token: token });
    }
}

module.exports = google;