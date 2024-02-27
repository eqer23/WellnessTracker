const { User } = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * Deals with login info. Looks for email in database and compares info, returns a valid token on success.\
 * 
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

  
  

  // if no 2fa activated, then regular login. Returns full session token
  if (tfaId == null) {
    const token = jwt.sign(
      { id: user._id, role: req.body.role },
      process.env.userKEY
  );
    res.cookie("session-token", token);
    return res.json({ login: true, role: role, tfa: tfaId });
  } 
  // if 2fa active, then temp-token for 2fa purposes, not full login
  else {
    const token = jwt.sign(
      { tfa: tfaId },
      process.env.userKEY
    );
    res.cookie("temp-session-token", token);
    return res.json({ login: false, role: role, tfa: tfaId });
  }
};

module.exports = loginPostController;
