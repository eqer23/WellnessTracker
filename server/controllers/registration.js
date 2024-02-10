import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const salt = 10;

const registrationPostController = async (req, res) => {
  const { username, password, role } = req.body;

  if (role === "user" || role === 'professional') {
    const user = await User.findOne({ username });
    if (user) {
      res.status(409).json({ message: "Client is already registered." });
      console.log('Account exists')
      return;
    }
  }
  else {
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      password: hashPassword,
      role: role
    });

    await newUser.save();
    console.log("Account created.");
  }
};

export default registrationPostController;
