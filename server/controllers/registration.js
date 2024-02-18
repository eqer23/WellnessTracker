const { User } = require("../models/User.js");
const bcrypt = require("bcrypt");

const salt = 10;

/**
 * Takes care of registration. Searches for existing user first and prevents dupes. Must have required data.
 * @param {*} req 
 * @param {*} res 
 * @returns status of action
 */

const registrationPostController = async (req, res) => {
  const { email, password, role } = req.body;

  if (email && password && role) {// looks for existing user else break
    if (role === "user" || role === 'professional') {
      const user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ message: "User is already registered." });
        console.log('User is already registered.')
        return;
      }
    }

    const hashPassword = await bcrypt.hash(password, salt);

    // creation of new user with data
    const newUser = new User({
      email: email,
      password: hashPassword,
      role: role
    });

    await newUser.save();
    console.log("User created with registration.");
    return res.status(200).json({ message: "Account created." });
  }
  else {
    console.log("Error: missing fields")
    return res.status(400).json({ message: "Please fill in all required fields." });
  }
};

module.exports = registrationPostController;