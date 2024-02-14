import express from "express";
const router = express.Router();
import "../db.js";
import loginPostController from "../controllers/login.js";

// what frontend posts to for functions to run
router.post("/login", loginPostController);

export { router as userLoginRouter };
