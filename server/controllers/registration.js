import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const salt = 10;

const registrationPostController = async (req, res) => {
  const { email, password, role } = req.body;

  if (role === "user" || role === 'professional') {
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "Client is already registered." });
      console.log('Account exists')
      return;
    }
  }

  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    email: email,
    password: hashPassword,
    role: role
  });

  await newUser.save();
  res.status(200).json({ message: "Account created." });
  console.log("Account created.");
};

export default registrationPostController;
