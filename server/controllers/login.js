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
  if (user.tfaTokenId) {
    tfaId = user.tfaTokenId;
  }
  else {
    tfaId = null;
  }
  if (role === "user" || role === "admin") {
    const token = jwt.sign(
      { tfa: tfaId },
      process.env.userKEY
    );
    if (tfaId == null) {
      res.cookie("session-token", token);
      return res.json({ login: true, role: "client", tfa: tfaId });
    } 
    else {
      res.cookie("temp-session-token", token);
      return res.json({ login: false, role: "client", tfa: tfaId });
    }
  } else if (role === "professional") {
    const token = jwt.sign(
      { tfa: tfaId },
      process.env.userKEY
    );
    if (tfaValue == false) {
      res.cookie("session-token", token);
      return res.json({ login: true, role: "client", tfa: tfaValue });
    } 
    else {
      res.cookie("temp-session-token", token);
      return res.json({ login: false, role: "client", tfa: tfaValue });
    }
  }
};

module.exports = loginPostController;
