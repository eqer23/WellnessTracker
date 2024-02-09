import express from "express";
const router = express.Router();
import "../db.js";
import loginPostController from "../controllers/login.js";

router.post("/login", loginPostController);

export { router as userLoginRouter };
