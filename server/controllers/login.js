import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// login function, post to login
const loginPostController = async (req, res) => {
  const { username, password, role } = req.body;
  if (role === "user" || role === 'professional') {
    const user = await User.findOne({ username });
    if (!user) {
      res.json({ message: "client not registered." });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.json({ message: "Password invalid." });
    }
    const token = jwt.sign(
      { username: user.username, role: "user" },
      process.env.userKEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "user" });
  } else if (role === "professional") {
  } else {
  }
};

export default loginPostController;
