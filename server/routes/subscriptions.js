const express = require("express");
const router = express.Router();
const subscribeController = require("../controllers/subscribeController");
const unsubscribeController = require("../controllers/unsubscribeController");
const isSubscribed = require("../controllers/isSubscribed");
const { verifyToken} = require("../controllers/data.js");


//Subscribe route
router.post("/subscribe/:professionalId", subscribeController, verifyToken);

//Unsubscribe route
router.post("/unsubscribe/:professionalId", unsubscribeController);

//Check ifSubscribed
router.post("/isSubscribed/:userId/:professionalId", isSubscribed);

module.exports = {
    subscriptionRouter: router
};
