const express = require("express");
const router = express.Router();
require("../db.js");
const { getDataController, verifyToken, getAllUsers, getAllContent, deleteContent } = require("../controllers/data.js")

router.get("/data", verifyToken, getDataController);
router.get("/getAllUsers/:userId", getAllUsers);
router.get("/getAllContent",getAllContent)
router.delete("/deleteContent/:id",deleteContent)



module.exports = {
    dataRouter: router
};
