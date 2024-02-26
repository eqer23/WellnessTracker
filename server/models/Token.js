const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    secret: String,
    user: {
      type: String,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Token", tokenSchema);
