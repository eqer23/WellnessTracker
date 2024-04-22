const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    // changed from `username` since the email will be the username
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
  },

  gender: {
    type: String,
  },

  city: {
    type: String,
  },

  state: {
    type: String,
  },

  specialty: {
    type: String,
  },
  // this is what you input into the authenticator
  tfaToken: {
    type: String,
  },
  // this is the id you send the 6 number code to
  tfaTokenId: {
    type: String,
  },
    //subscribers is used for PROFESSIONALS
    subscribers : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    // subscriptions is used for CLIENTS
    subscriptions: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    }]
});

const userModel = mongoose.model("User", userSchema);

module.exports = {
  User: userModel,
};
