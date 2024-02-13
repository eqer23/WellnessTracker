import express from "express";
const router = express.Router();
import forgotPasswordController from "../controllers/forgotPassword.js";

router.post("/forgotpassword", forgotPasswordController);

export { router as forgotPasswordRouter };