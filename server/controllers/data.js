const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { User } = require("../models/User");
const { Content } = require("../models/Content");
const app = express();

/**
 * Verifies user with cookie data and then passes user data to client.
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
    console.log("userId: " + userId);
    const userData = await User.findById(userId.toString());
    if (!userData) {
      console.log("no data");
      return res.status(400).json({ message: "User not found" });
    }
    console.log("userData: ", userData);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// same function but renamed for ViewProfile in the frontend
const getDataController2 = async (req, res) => {
  console.log("getting data");
  try {
    const userId = req.params.userId;
    console.log("userId: " + userId);
    const userData = await User.findById(userId);
    if (!userData) {
      console.log("no data");
      return res.status(400).json({ message: "User not found" });
    }
    console.log("userData: ", userData);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const userIdToExclude = req.params.userId;
    if (userIdToExclude != -1) {
      const users = await User.find({ _id: { $ne: userIdToExclude } }).select([
        "firstName",
        "lastName",
        "email",
        "_id",
        "role",
      ]);
      return res.json(users);
    }
    else {
      const users = await User.find();
      return res.json(users);
    }
    
  } catch (err) {
    console.log(err);
  }
};

const getAllContent = async (req, res) => {
  try {
    const content = await Content.find();
    console.log(content)
    return res.json(content);
  } catch (error) {
    console.log("backend content error");
  }
}

const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const existingContent = await Content.findById(id);
    if (!existingContent) {
      return res.status(404).json({ message: "Content not found" });
    }
    await Content.findByIdAndDelete(id);
    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    console.error("Error deleting content:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getDataController,
  verifyToken,
  getAllUsers,
  getAllContent,
  deleteContent,
  getDataController2,
};
