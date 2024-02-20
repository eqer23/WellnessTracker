const express = require("express");
const router = express.Router();
require("../db.js");
const { getDataController, verifyToken } = require("../controllers/profile.js")

router.get("/data", verifyToken, getDataController);

module.exports = {
    profileRouter: router
};
