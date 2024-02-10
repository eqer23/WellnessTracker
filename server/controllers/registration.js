import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const salt = 10;

const registrationPostController = async (req, res) => {
  const { username, password, role } = req.body;
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username: username,
    password: hashPassword,
    role: role
  });

  await newUser.save();
  console.log("User created.");
};

export default registrationPostController;
