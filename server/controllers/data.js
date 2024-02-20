const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {User} = require("../models/User");
const app = express();

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next - next operation which is getDataController
 * @returns 
 */


// Middleware to verify the session-token cookie
const verifyToken = (req, res, next) => {
    console.log("verifying token");
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(400).send("Access denied. No token provided.");
    }
    try {
        const decoded = jwt.verify(token, process.env.userKEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token.");
    }
};

// gets data from mongodb based on user
const getDataController = async (req, res) => {
    console.log("getting data");
    try {
        const userId = req.headers.userid;
        console.log('userId: ' + userId);
        // console.log(req);
        const userData = await User.findById(userId.toString());
        if (!userData) {
            console.log("no data");
            return res.status(400).json({ message: "User not found" });
        }
        console.log(userData);
        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    getDataController,
    verifyToken,
};