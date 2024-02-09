import express from "express";
const router = express.Router();
import "../db.js";
import registrationPostController from "../controllers/registration.js";

router.post("/register", registrationPostController);

export { router as userRegisterRouter };
