const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

let salt = 10;

/**
 * Sends the reset password email to email from frontend.
 * Creates token based on user id that differentiates users.
 *
 * @param {*} req - request body that is being sent from the frontend
 * @param {*} res - response (not being used)
 * @returns status of action
 */

const forgotPasswordController = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log("No user error");
    return res.status(400).json({ message: "No user found." });
  }
  const token = jwt.sign({ id: user._id }, process.env.userKEY, {
    expiresIn: "1d",
  });
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Instafit: Reset your password",
    text: process.env.CLIENT_URL + `reset-password/${token}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return res
        .status(200)
        .json({ message: "Password reset email sent to " + email + "." });
    }
  });
};

const resetPasswordController = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.userKey);
    const id = decoded.id;
    const hashPassword = await bcrypt.hash(password, salt);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.status(200).json({ status: true, message: "Password updated." });
  } catch (err) {
    console.log(err);
    return res.status(200).json({ message: "Password reset failed. " });
  }
};

module.exports = {
  forgotPasswordController,
  resetPasswordController,
};
