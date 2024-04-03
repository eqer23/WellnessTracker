const express = require("express");
const router = express.Router();
require("../db.js");
const { addMessage, getAllMessages } = require("../controllers/chat.js");

router.post("/addmessage", addMessage);
router.post("/getmessage", getAllMessages);

module.exports = {
    chatRouter: router
};
