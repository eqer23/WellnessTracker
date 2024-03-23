const express = require("express");
const router = express.Router();
require("../db.js");
const searchUsersPostController = require("../controllers/searchUsers.js");

// this line indicates that a link to /searchUsers should be handled by the "seachUsersPostController"
router.get("/searchUsers", searchUsersPostController);

module.exports = {
  searchUsersRouter: router
};

