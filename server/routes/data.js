const express = require("express");
const router = express.Router();
require("../db.js");
const { getDataController, verifyToken, getAllUsers } = require("../controllers/data.js")

router.get("/data", verifyToken, getDataController);
router.get("/getAllUsers/:userId", getAllUsers);



module.exports = {
    dataRouter: router
};
