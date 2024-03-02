const Token = require("../models/Token");
const speakeasy = require("speakeasy");
const { User } = require("../models/User.js");
const jwt = require("jsonwebtoken");


const generateSecret = async (req, res, next) => {
  const secretToken = speakeasy.generateSecret();
  const { userId } = req.body;
  const user = await User.findById(userId);
  console.log(user);
  if (user.tfaTokenId != null) {
    console.log("2fa already exists for " + user.email);
    return res.status(200).json({
      secret: user.tfaToken,
      message: "2fa exists",
    });
  }

  try {
    const token = await Token.create({ secret: secretToken.base32 });
    await User.findByIdAndUpdate({ _id: userId }, { tfaTokenId: token.id });
    await User.findByIdAndUpdate(
      { _id: userId },
      { tfaToken: secretToken.base32 }
    );
    console.log("2fa set");
    console.log(secretToken.base32)
    return res.status(200).json({
      secret: secretToken.base32,
      message: "2fa added",
    });

  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "something went wrong",
    });
  }
};

const tfaToken = async (req, res, next) => {
  console.log("tfa verification process started");
  const token = await Token.findById(req.params.id);
  console.log(token);
  const enteredToken = req.body.token;
  const user = await User.findOne({tfaTokenId : req.params.id});
  console.log(user);

  const verified = speakeasy.totp.verify({
    secret: token.secret,
    encoding: "base32",
    token: enteredToken,
  });
  if (!verified) {
    res.status(400).json({
      message: "verification failed",
    });
  } else {
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.userKEY
    );
    // res.cookie("session-token", token);
    return res.json({ login: true, role: req.body.role, token: token, tfa: user.tfaTokenId });
  }
  console.log("passed");
  console.log(req.cookies);

  // return res.status(200).json({
  //   status: "success",
  //   message: "verification successful",
  //   verified: verified,
  // });
};

module.exports = {
  generateSecret,
  tfaToken,
};
