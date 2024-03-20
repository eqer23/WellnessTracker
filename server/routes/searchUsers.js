const express = require("express");
const router = express.Router();
require("../db.js");
const searchUsersPostController = require("../controllers/searchUsers.js");

router.post("/searchUsers", searchUsersPostController);

module.exports = {
  searchUsersRouter: router
};

