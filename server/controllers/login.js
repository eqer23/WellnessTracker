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
  const user = await User.findOne({ email });

  // checks for existing user else break
  if (!user) {
    return res.status(400).json({ message: "Account does not exist." });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json({ message: "Password is invalid." });
  }
  if (role != user.role) {
    return res.status(400).json({ message: "Account does not exist." });
  }

  if (role === "user" || role === 'admin') {
    const token = jwt.sign(
      { id: user._id, role: "client" },
      process.env.userKEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "client" });
  }
  else if (role === "professional") {
    const token = jwt.sign(
      { id: user._id, role: "professional" },
      process.env.userKEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "professional" });
  }
};

module.exports = loginPostController;