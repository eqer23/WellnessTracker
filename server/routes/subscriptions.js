const express = require("express");
const router = express.Router();
const subscribeController = require("../controllers/subscribeController");
const unsubscribeController = require("../controllers/unsubscribeController");


//Subscribe route
router.post("/subscribe/:professionalId", subscribeController);

//Unsubscribe route
router.post("/unsubscribe/:professionalId", unsubscribeController);

module.exports = {
    subscriptionRouter: router
};
