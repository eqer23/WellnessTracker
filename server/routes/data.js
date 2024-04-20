const express = require("express");
const router = express.Router();
require("../db.js");
const { getDataController, verifyToken, getAllUsers, getDataController2 } = require("../controllers/data.js")

router.get("/data", verifyToken, getDataController);
router.get("/data/:userId", getDataController2);
router.get("/getAllUsers/:userId", getAllUsers);



module.exports = {
    dataRouter: router
};
