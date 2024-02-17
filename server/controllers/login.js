const { User } = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * Deals with login info. Looks for email in database and compares info, returns a valid token on success.
 * @param {*} req 
 * @param {*} res 
 * @returns status of action
 */

// login function, post to login
const loginPostController = async (req, res) => {
  const { email, password, role } = req.body;
  if (role === "user" || role === 'admin') {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("no user")
      return res.status(404).json({ message: "Account does not exist." });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Password invalid." });
    }
    if (role != user.role) {
      return res.status(404).json({ message: "Account does not exist." });
    }
    const token = jwt.sign(
      { id: user._id, role: "client" },
      process.env.userKEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "client" });
  }
  else if (role === "professional") {
    const user = await User.findOne({ email });

    // checks for existing user else break
    if (!user) {
      return res.status(404).json({ message: "Account does not exist." });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.json({ message: "Password invalid." });
    }
    if (role != user.role) {
      return res.status(404).json({ message: "Account does not exist." });
    }
    const token = jwt.sign(
      { id: user._id, role: "professional" },
      process.env.userKEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "professional" });
  }
  else {
  }
};

module.exports = loginPostController;