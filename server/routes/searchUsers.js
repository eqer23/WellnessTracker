import express from "express";
const router = express.Router();
import "../db.js";
import searchContentPostController from "../controllers/searchPeople.js";

const User = require("../models/User");

router.get("/users", async(req, res) => {
    try{

    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: "Internal server error"});
    }
});

export { router as searchUsersRouter };