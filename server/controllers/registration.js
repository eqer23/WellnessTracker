import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const salt = 10;

export const registrationPostController = async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt(body.password);

  const newUser = new User({
    username: body.username,
    password: hashPassword,
  });
  await newUser.save();
  console.log("user Created.");
};

export default registrationPostController;
