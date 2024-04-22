const express = require("express");
const router = express.Router();
const subscribeController = require("../controllers/subscribeController");
const unsubscribeController = require("../controllers/unsubscribeController");
const isSubscribed = require("../controllers/isSubscribed");
const { verifyToken} = require("../controllers/data.js");


//Subscribe route
router.post("/subscribe/:professionalId", verifyToken, subscribeController);

//Unsubscribe route
router.post("/unsubscribe/:professionalId", verifyToken, unsubscribeController);

//Check ifSubscribed
router.get("/isSubscribed/:userId/:professionalId", isSubscribed);

module.exports = {
    subscriptionRouter: router
};
