const express = require("express");
const router = express.Router();
require("../db.js");
const { addMessage, getAllMessages, messageCheck } = require("../controllers/chat.js");

router.post("/addmessage", addMessage);
router.post("/getmessage", getAllMessages);
router.post("/messagecheck", messageCheck);


module.exports = {
    chatRouter: router
};
