import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const salt = 10;

/**
 * Takes care of registration. Searches for existing user first and prevents dupes. Must have required data.
 * @param {*} req 
 * @param {*} res 
 * @returns status of action
 */

const registrationPostController = async (req, res) => {
  const { email, password, role } = req.body;

  // looks for existing user else break
  if (role === "user" || role === 'professional') {
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "Client is already registered." });
      console.log('Account exists')
      return;
    }
  }

  const hashPassword = await bcrypt.hash(password, salt);

  // creation of new user with data
  const newUser = new User({
    email: email,
    password: hashPassword,
    role: role
  });

  await newUser.save();
  console.log("Account created.");
  return res.status(200).json({ message: "Account created." });
};

export default registrationPostController;
