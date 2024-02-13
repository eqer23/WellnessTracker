import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';

const forgotPasswordController = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log("No user error")
    return res.status(404).json({ message: "No user found." });
  }
  const token = jwt.sign({ email: user.email, }, process.env.userKEY, { expiresIn: "1d" })
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'storage.stuff.things@gmail.com',
      pass: 'jekf mjco pduf ztxd'
    }
  });

  var mailOptions = {
    from: 'storage.stuff.things@gmail.com',
    to: email,
    subject: 'INSTAFIT: RESET PASSWORD',
    text: 'link to reset password: '
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({ message: "Password Reset." });
      console.log('Email sent: ' + info.response);
    }
  });

};

export default forgotPasswordController;
