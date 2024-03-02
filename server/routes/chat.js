const express = require("express");
const router = express.Router();
require("../db.js");
const getAllUsers = require("../controllers/chat.js")

router.get("//allusers:/:id", getAllUsers);

module.exports = {
    chatRouter: router
};
